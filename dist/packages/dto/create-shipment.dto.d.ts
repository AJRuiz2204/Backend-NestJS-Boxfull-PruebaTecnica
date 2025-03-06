import { CreatePackageDto } from './create-package.dto';
export declare class CreateShipmentDto {
    pickupAddress: string;
    scheduledDate: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    destinationAddress: string;
    department: string;
    municipality: string;
    referencePoints: string;
    comments?: string;
    packages: CreatePackageDto[];
}
