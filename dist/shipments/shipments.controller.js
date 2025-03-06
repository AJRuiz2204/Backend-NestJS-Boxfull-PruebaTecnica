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
exports.ShipmentsController = void 0;
const common_1 = require("@nestjs/common");
const shipments_service_1 = require("./shipments.service");
const swagger_1 = require("@nestjs/swagger");
let ShipmentsController = class ShipmentsController {
    shipmentsService;
    constructor(shipmentsService) {
        this.shipmentsService = shipmentsService;
    }
    async getShipments() {
        return await this.shipmentsService.getShipments();
    }
};
exports.ShipmentsController = ShipmentsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de shipments con sus packages' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de shipments y packages' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShipmentsController.prototype, "getShipments", null);
exports.ShipmentsController = ShipmentsController = __decorate([
    (0, swagger_1.ApiTags)('shipments'),
    (0, common_1.Controller)('shipments'),
    __metadata("design:paramtypes", [shipments_service_1.ShipmentsService])
], ShipmentsController);
//# sourceMappingURL=shipments.controller.js.map