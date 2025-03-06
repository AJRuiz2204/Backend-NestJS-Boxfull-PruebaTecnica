import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../packages/dto/create-user.dto';
import { UpdateUserDto } from '../packages/dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<any>;
    findByEmail(email: string): Promise<any>;
    findAll(): Promise<any[]>;
    update(id: number, data: UpdateUserDto): Promise<any>;
    delete(id: number): Promise<any>;
}
