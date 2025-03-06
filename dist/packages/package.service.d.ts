import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
export declare class PackagesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createShipment(dto: CreateShipmentDto): Promise<any>;
    updateShipment(id: number, dto: UpdateShipmentDto): Promise<any>;
    deleteShipment(id: number): Promise<any>;
    getShipmentsByMunicipalityAndDepartment(municipality: string, department: string): Promise<any[]>;
    getShipmentsByFilters(municipality?: string, department?: string): Promise<any[]>;
}
