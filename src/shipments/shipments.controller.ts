import { Controller, Get } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('shipments')
@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @ApiOperation({ summary: 'Obtener lista de shipments con sus packages' })
  @ApiResponse({ status: 200, description: 'Lista de shipments y packages' })
  @Get()
  async getShipments() {
    return await this.shipmentsService.getShipments();
  }
}
