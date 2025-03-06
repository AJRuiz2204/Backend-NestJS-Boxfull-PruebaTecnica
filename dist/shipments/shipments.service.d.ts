import { PrismaService } from '../prisma/prisma.service';
export declare class ShipmentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
