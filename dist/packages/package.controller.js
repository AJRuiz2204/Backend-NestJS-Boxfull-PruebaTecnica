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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const package_service_1 = require("./package.service");
const create_shipment_dto_1 = require("./dto/create-shipment.dto");
const update_shipment_dto_1 = require("./dto/update-shipment.dto");
let PackagesController = class PackagesController {
    packagesService;
    constructor(packagesService) {
        this.packagesService = packagesService;
    }
    async create(dto) {
        return this.packagesService.createShipment(dto);
    }
    async update(id, dto) {
        return this.packagesService.updateShipment(Number(id), dto);
    }
    async delete(id) {
        return this.packagesService.deleteShipment(Number(id));
    }
    async getShipments() {
        return this.packagesService.getShipmentsByFilters();
    }
};
exports.PackagesController = PackagesController;
__decorate([
    (0, swagger_1.ApiBody)({ type: create_shipment_dto_1.CreateShipmentDto }),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un envío' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Envío creado correctamente.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shipment_dto_1.CreateShipmentDto]),
    __metadata("design:returntype", Promise)
], PackagesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: update_shipment_dto_1.UpdateShipmentDto,
        examples: {
            ejemplo: {
                summary: 'Actualizar un envío',
                value: {
                    pickupAddress: '123 Main St Updated',
                    scheduledDate: '2023-10-30T10:00:00Z',
                    firstName: 'Jane',
                    lastName: 'Doe',
                    email: 'jane.doe@example.com',
                    phone: '+1234567891',
                    destinationAddress: '456 Elm St Updated',
                    department: 'Departamento Ejemplo',
                    municipality: 'Municipio Ejemplo',
                    referencePoints: 'Cerca del monumento',
                    comments: 'Actualización de datos',
                    packages: [
                        {
                            length: 15,
                            width: 7,
                            height: 8,
                            weight: 3,
                            content: 'Documentos',
                        },
                    ],
                },
            },
        },
    }),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un envío' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_shipment_dto_1.UpdateShipmentDto]),
    __metadata("design:returntype", Promise)
], PackagesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un envío' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PackagesController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener envíos y packages sin filtros',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PackagesController.prototype, "getShipments", null);
exports.PackagesController = PackagesController = __decorate([
    (0, swagger_1.ApiTags)('shipments'),
    (0, common_1.Controller)('shipments'),
    __metadata("design:paramtypes", [package_service_1.PackagesService])
], PackagesController);
//# sourceMappingURL=package.controller.js.map