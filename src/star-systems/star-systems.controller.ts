import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { StarSystemsService } from "./star-systems.service";
import { CreateStarSystemDTO } from "./dto/CreateStarSystemDTO";
import { UpdateStarSystemDTO } from "./dto/UpdateStarSystemDTO";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('star-systems')
@ApiBearerAuth('JWT-auth')
@Controller('star-systems')
@UseGuards(AuthGuard('jwt'))
export class StarSystemsController {
    constructor(private readonly starSystemsService: StarSystemsService){
    }
    @Post()
    async create(@Body() createStarSystemDto: CreateStarSystemDTO) {
        await this.starSystemsService.createStarSystem(createStarSystemDto)
    }

    @Get()
    async findAll() {
       return  await this.starSystemsService.getAllStarSystems()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
       return  await this.starSystemsService.getStarSystemById(Number(id))
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateStarSystemDto: UpdateStarSystemDTO) {
        await this.starSystemsService.updateStarSystem(Number(id), updateStarSystemDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.starSystemsService.deleteStarSystem(Number(id))
    }
}