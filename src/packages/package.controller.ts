/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { PackagesService } from './package.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';

@ApiTags('shipments')
@Controller('shipments')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @ApiBody({ type: CreateShipmentDto })
  @Post()
  @ApiOperation({ summary: 'Crear un envío' })
  @ApiResponse({ status: 201, description: 'Envío creado correctamente.' })
  async create(@Body() dto: CreateShipmentDto) {
    return this.packagesService.createShipment(dto);
  }

  @ApiBody({
    type: UpdateShipmentDto,
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
  })
  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un envío' })
  async update(@Param('id') id: string, @Body() dto: UpdateShipmentDto) {
    return this.packagesService.updateShipment(Number(id), dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un envío' })
  async delete(@Param('id') id: string) {
    return this.packagesService.deleteShipment(Number(id));
  }

  @Get()
  @ApiOperation({ summary: 'Obtener envíos por municipio y departamento' })
  @ApiQuery({
    name: 'municipality',
    required: false,
    description: 'Municipio para filtrar envíos',
  })
  @ApiQuery({
    name: 'department',
    required: false,
    description: 'Departamento para filtrar envíos',
  })
  async findByMunicipalityAndDepartment(
    @Query('municipality') municipality?: string,
    @Query('department') department?: string,
  ) {
    if (!municipality && !department) {
      throw new BadRequestException(
        'Debe enviar al menos un filtro: municipality o department',
      );
    }
    return this.packagesService.getShipmentsByFilters(municipality, department);
  }
}
