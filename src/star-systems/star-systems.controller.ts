import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { StarSystemsService } from "./star-systems.service";
import { CreateStarSystemDTO } from "./dto/CreateStarSystemDTO";
import { UpdateStarSystemDTO } from "./dto/UpdateStarSystemDTO";
import { ApiBearerAuth, ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags('star-systems')
@ApiBearerAuth('JWT-auth')
@Controller('star-systems')
@UseGuards(AuthGuard('jwt'))
export class StarSystemsController {
    constructor(private readonly starSystemsService: StarSystemsService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new star system' })
    async create(@Body() createStarSystemDto: CreateStarSystemDTO) {
        await this.starSystemsService.createStarSystem(createStarSystemDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all star systems' })
    async findAll() {
        return await this.starSystemsService.getAllStarSystems();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a star system by ID' })
    async findOne(@Param('id') id: string) {
        return await this.starSystemsService.getStarSystemById(Number(id));
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a star system by ID' })
    async update(@Param('id') id: string, @Body() updateStarSystemDto: UpdateStarSystemDTO) {
        await this.starSystemsService.updateStarSystem(Number(id), updateStarSystemDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a star system by ID' })
    async remove(@Param('id') id: string) {
        await this.starSystemsService.deleteStarSystem(Number(id));
    }
}