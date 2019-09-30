import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DogDto } from './interfaces/dogs.dto';
import { DogsService } from './dogs.service';
import { Dog } from './dogs.entity';

@Controller('dogs')
export class DogsController {
    constructor(private dogsService: DogsService){}
    @Get()
    index(): Promise<Dog[]> {
        return this.dogsService.findAll();
      } 

      @Post('create')
      async create(@Body() dogData: Dog): Promise<any> {
        return this.dogsService.create(dogData);
      }

    /**@Get(':id')
    async findOne(@Param('id') id: string)  :Promise<any>{
        return this.dogsService.findbyid(id);
    }*/

    @Put(':id/update')
    async update(@Param('id') id, @Body() dogtData: Dog): Promise<any> {
        dogtData.id = Number(id);
        console.log('Update #' + dogtData.id)
        return this.dogsService.update(dogtData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.dogsService.delete(id);
    } 
}