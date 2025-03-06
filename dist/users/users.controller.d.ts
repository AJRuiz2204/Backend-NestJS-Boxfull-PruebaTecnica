import { UsersService } from './users.service';
import { UpdateUserDto } from '../packages/dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<any[]>;
    update(id: string, data: UpdateUserDto): Promise<any>;
    delete(id: string): Promise<any>;
}
