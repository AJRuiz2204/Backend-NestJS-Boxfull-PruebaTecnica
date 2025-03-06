import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ShipmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async getShipments() {
    return await this.prisma.shipment.findMany({
      include: { packages: true },
    });
  }
}
