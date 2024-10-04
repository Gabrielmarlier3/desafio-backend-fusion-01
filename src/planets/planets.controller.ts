import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { CreatePlanetDto } from "./dto/CreatePlanetDto";
import { PlanetsService } from "./planets.service";
import { UpdatePlanetDto } from "./dto/UpdatePlanetDto";

@Controller('planets')
@UseGuards(AuthGuard('jwt'))
export class PlanetsController {
    constructor(private service: PlanetsService){

    }

    @Post()
    async create(@Body() createPlanetDto: CreatePlanetDto){
        await this.service.createPlanet(createPlanetDto)
    }

    @Get()
    async findAll(){
        return await this.service.getAllPlanets();
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return await this.service.getPlanetById(Number(id));
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updatePlanetDto: UpdatePlanetDto){
        return await this.service.updatePlanet(Number(id), updatePlanetDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string){
        await this.service.deletePlanet(Number(id));
    }
}