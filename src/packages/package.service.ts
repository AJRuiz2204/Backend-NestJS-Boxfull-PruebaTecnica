/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';

@Injectable()
export class PackagesService {
  constructor(private readonly prisma: PrismaService) {}

  async createShipment(dto: CreateShipmentDto): Promise<any> {
    if (!dto.scheduledDate) {
      throw new BadRequestException("El campo 'scheduledDate' es obligatorio");
    }
    const scheduledDate = new Date(dto.scheduledDate);
    if (isNaN(scheduledDate.getTime())) {
      throw new BadRequestException("Fecha 'scheduledDate' no válida");
    }

    return this.prisma.shipment.create({
      data: {
        pickupAddress: dto.pickupAddress,
        scheduledDate,
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        phone: dto.phone,
        destinationAddress: dto.destinationAddress,
        department: dto.department,
        municipality: dto.municipality,
        referencePoints: dto.referencePoints,
        comments: dto.comments,
        packages: {
          create: dto.packages.map((p) => ({
            length: p.length,
            width: p.width,
            height: p.height,
            weight: p.weight,
            content: p.content,
          })),
        },
      },
      include: {
        packages: true,
      },
    });
  }

  async updateShipment(id: number, dto: UpdateShipmentDto): Promise<any> {
    const data: Record<string, any> = {
      pickupAddress: dto.pickupAddress as string,
      firstName: dto.firstName as string,
      lastName: dto.lastName as string,
      email: dto.email as string,
      phone: dto.phone as string,
      destinationAddress: dto.destinationAddress as string,
      department: dto.department as string,
      municipality: dto.municipality as string,
      referencePoints: dto.referencePoints as string,
      comments: dto.comments as string,
    };

    if (dto.scheduledDate) {
      data.scheduledDate = new Date(dto.scheduledDate as string);
    }

    return this.prisma.shipment.update({
      where: { id },
      data,
      include: {
        packages: true,
      },
    });
  }

  async deleteShipment(id: number): Promise<any> {
    return this.prisma.$transaction(async (tx) => {
      await tx.package.deleteMany({ where: { shipmentId: id } });
      return tx.shipment.delete({ where: { id } });
    });
  }

  async getShipmentsByMunicipalityAndDepartment(
    municipality: string,
    department: string,
  ): Promise<any[]> {
    return this.prisma.shipment.findMany({
      where: {
        municipality,
        department,
      },
      include: {
        packages: true,
      },
    });
  }

  async getShipmentsByFilters(
    municipality?: string,
    department?: string,
  ): Promise<any[]> {
    const where: Record<string, any> = {};
    if (municipality) where.municipality = municipality;
    if (department) where.department = department;
    return this.prisma.shipment.findMany({
      where,
      include: {
        packages: true,
      },
    });
  }
}
