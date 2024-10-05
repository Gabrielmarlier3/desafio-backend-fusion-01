import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { CreatePlanetDto } from "./dto/CreatePlanetDto";
import { PlanetsService } from "./planets.service";
import { UpdatePlanetDto } from "./dto/UpdatePlanetDto";
import { ApiBearerAuth, ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags('planets')
@ApiBearerAuth('JWT-auth')
@Controller('planets')
@UseGuards(AuthGuard('jwt'))
export class PlanetsController {
    constructor(private service: PlanetsService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new planet' })
    async create(@Body() createPlanetDto: CreatePlanetDto) {
        await this.service.createPlanet(createPlanetDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all planets' })
    async findAll() {
        return await this.service.getAllPlanets();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a planet by ID' })
    async findOne(@Param('id') id: string) {
        return await this.service.getPlanetById(Number(id));
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a planet by ID' })
    async update(@Param('id') id: string, @Body() updatePlanetDto: UpdatePlanetDto) {
        await this.service.updatePlanet(Number(id), updatePlanetDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a planet by ID' })
    async remove(@Param('id') id: string) {
        await this.service.deletePlanet(Number(id));
    }
}