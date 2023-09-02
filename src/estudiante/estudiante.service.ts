/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstudianteDto } from './estudiante.interface';
import { EstudiantesEntity } from './estudiantes.entity';

@Injectable()
export class EstudianteService {

    constructor(
        @InjectRepository(EstudiantesEntity)
        private estudiantesRepository: Repository<EstudiantesEntity>,
      ) {}
    
      async addEstudiantes(estudiante: EstudianteDto): Promise<EstudiantesEntity> {
        let item = new EstudiantesEntity();
        item.nombre = estudiante.nombre;
        item.apellido = estudiante.apellido;
        return await this.estudiantesRepository.save(item);
      }

      async EditEstudiante(id: number, estudiante: EstudianteDto): Promise<EstudiantesEntity> {
        let toUpdate = await this.estudiantesRepository.findOneBy({id});        
        Object.assign(toUpdate, estudiante);
        return await this.estudiantesRepository.save(toUpdate);
      }

      findAll(): Promise<EstudiantesEntity[]> {
        return this.estudiantesRepository.find();
      }
    
      findOne(id: number): Promise<EstudiantesEntity> {
        return this.estudiantesRepository.findOneBy({ id });
      }
    
      async remove(id: string): Promise<void> {
        await this.estudiantesRepository.delete(id);
      }

}
