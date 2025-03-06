"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PackagesService = class PackagesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createShipment(dto) {
        if (!dto.scheduledDate) {
            throw new common_1.BadRequestException("El campo 'scheduledDate' es obligatorio");
        }
        const scheduledDate = new Date(dto.scheduledDate);
        if (isNaN(scheduledDate.getTime())) {
            throw new common_1.BadRequestException("Fecha 'scheduledDate' no válida");
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
    async updateShipment(id, dto) {
        const data = {
            pickupAddress: dto.pickupAddress,
            firstName: dto.firstName,
            lastName: dto.lastName,
            email: dto.email,
            phone: dto.phone,
            destinationAddress: dto.destinationAddress,
            department: dto.department,
            municipality: dto.municipality,
            referencePoints: dto.referencePoints,
            comments: dto.comments,
        };
        if (dto.scheduledDate) {
            data.scheduledDate = new Date(dto.scheduledDate);
        }
        return this.prisma.shipment.update({
            where: { id },
            data,
            include: {
                packages: true,
            },
        });
    }
    async deleteShipment(id) {
        return this.prisma.$transaction(async (tx) => {
            await tx.package.deleteMany({ where: { shipmentId: id } });
            return tx.shipment.delete({ where: { id } });
        });
    }
    async getShipmentsByMunicipalityAndDepartment(municipality, department) {
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
    async getShipmentsByFilters(municipality, department) {
        const where = {};
        if (municipality)
            where.municipality = municipality;
        if (department)
            where.department = department;
        return this.prisma.shipment.findMany({
            where,
            include: {
                packages: true,
            },
        });
    }
};
exports.PackagesService = PackagesService;
exports.PackagesService = PackagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PackagesService);
//# sourceMappingURL=package.service.js.map