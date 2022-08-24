import {
    Body,
    Controller,
    HttpException,
    Inject,
    OnModuleInit,
    Post,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';
import { ICreateProductDto } from '../../dtos/createProduct.dto';

interface IProductsService {
    create(data: ICreateProductDto): Observable<ICreateProductDto>;
}

@Controller('products')
export class ProductsController implements OnModuleInit {
    private productService: IProductsService;
    constructor(
        @Inject('PRODUCTS_PACKAGE')
        private readonly clientGrpc: ClientGrpc,
    ) {}

    onModuleInit() {
        this.productService =
            this.clientGrpc.getService<IProductsService>('ProductService');
    }

    @Post()
    async create(@Body() data: ICreateProductDto): Promise<ICreateProductDto> {
        try {
            console.log(data);
            return await lastValueFrom(
                this.productService.create({
                    ...data,
                    category_id: data.category_id,
                }),
            );
        } catch (error) {
            console.log(error);

            throw new HttpException(
                error.details,
                error.code === 5 ? 404 : 500,
            );
        }
    }
}
