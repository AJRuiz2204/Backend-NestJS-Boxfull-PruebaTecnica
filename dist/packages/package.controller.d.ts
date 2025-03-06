import { PackagesService } from './package.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
export declare class PackagesController {
    private readonly packagesService;
    constructor(packagesService: PackagesService);
    create(dto: CreateShipmentDto): Promise<any>;
    update(id: string, dto: UpdateShipmentDto): Promise<any>;
    delete(id: string): Promise<any>;
    findByMunicipalityAndDepartment(municipality?: string, department?: string): Promise<any[]>;
}
