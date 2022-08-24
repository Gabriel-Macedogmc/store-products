import {
    Body,
    Controller,
    Get,
    HttpException,
    Inject,
    OnModuleInit,
    Param,
    Post,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';
import { CreateClientDTO } from '../../dtos/createClient.dto';

interface IFindById {
    id: string;
}

interface IClientsService {
    create(data: CreateClientDTO): Observable<CreateClientDTO>;
    findAll({}): Observable<CreateClientDTO[]>;
    findOne(data: IFindById): Observable<CreateClientDTO>;
}

@Controller('clients')
export class ClientsController implements OnModuleInit {
    private clientsService: IClientsService;
    constructor(
        @Inject('CLIENTS_PACKAGE')
        private readonly clientGrpc: ClientGrpc,
    ) {}

    onModuleInit() {
        this.clientsService =
            this.clientGrpc.getService<IClientsService>('ClientService');
    }

    @Post()
    async create(@Body() data: CreateClientDTO): Promise<CreateClientDTO> {
        try {
            return await lastValueFrom(this.clientsService.create(data));
        } catch (error) {
            throw new HttpException(
                error.details,
                error.code === 6 ? 404 : 500,
            );
        }
    }

    @Get()
    async getAll(): Promise<CreateClientDTO[]> {
        try {
            return await lastValueFrom(this.clientsService.findAll({}));
        } catch (error) {
            console.log(error);
            throw new HttpException(
                error.details,
                error.code === 6 ? 404 : 500,
            );
        }
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<CreateClientDTO> {
        try {
            return await lastValueFrom(this.clientsService.findOne({ id }));
        } catch (error) {
            console.log(error);
            throw new HttpException(
                error.details,
                error.code === 6 ? 404 : 500,
            );
        }
    }
}
