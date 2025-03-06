import { ShipmentsService } from './shipments.service';
export declare class ShipmentsController {
    private readonly shipmentsService;
    constructor(shipmentsService: ShipmentsService);
    getShipments(): Promise<({
        packages: {
            length: number;
            width: number;
            height: number;
            weight: number;
            content: string;
            id: number;
            shipmentId: number;
        }[];
    } & {
        pickupAddress: string;
        scheduledDate: Date;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        destinationAddress: string;
        department: string;
        municipality: string;
        referencePoints: string;
        comments: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
}
