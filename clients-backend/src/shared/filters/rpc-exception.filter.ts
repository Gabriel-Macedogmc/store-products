import { ArgumentsHost, Catch, RpcExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { CustomException } from '@shared/utils/error';
import { Observable, throwError } from 'rxjs';

@Catch(CustomException)
export class ExceptionFilter implements RpcExceptionFilter<CustomException> {
  catch(exception: CustomException, host: ArgumentsHost): Observable<any> {
    console.log(exception);
    return throwError(
      new RpcException({
        message: 'test',
        code: 5,
      })
    );
  }
}
