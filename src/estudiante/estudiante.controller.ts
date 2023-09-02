
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EstudianteDto } from './estudiante.interface';
import { EstudianteService } from './estudiante.service';
import { EstudiantesEntity } from './estudiantes.entity';

@Controller('estudiantes')
export class EstudianteController { 
    constructor(private readonly estudiantesServices: EstudianteService) { }

  
    @Get()
    async findAll(): Promise<EstudiantesEntity[]> {
      return await this.estudiantesServices.findAll();
    }

    @Post()
    async AddInfantePsicomotor(@Body() estudiante: EstudianteDto): Promise<EstudiantesEntity>{
        return await this.estudiantesServices.addEstudiantes(estudiante);
    }

    @Put(':id')
    async EditEstudiante(@Param() params, @Body() estudiante: EstudianteDto){
      return await this.estudiantesServices.EditEstudiante(params.id, estudiante);
    }

    @Delete(':id')
    async delete(@Param() params) {
      return this.estudiantesServices.remove(params.id);
    }


}
