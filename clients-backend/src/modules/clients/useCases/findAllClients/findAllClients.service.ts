import { Inject, Injectable } from '@nestjs/common';
import { IClientsRepository } from '../../repositories/IClientsRepository';

@Injectable()
export class FindAllClientsService {
  constructor(
    @Inject('ClientsRepository')
    private readonly studentsRepository: IClientsRepository
  ) {}

  async exec() {
    return {
      clients: await this.studentsRepository.findAll(),
    };
  }
}
