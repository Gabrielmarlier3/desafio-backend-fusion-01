import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiTags, ApiOperation } from "@nestjs/swagger";
import { CreateSpaceshipsDTO } from "./dto/CreateSpaceshipsDTO";
import { SpaceshipsService } from "./spaceships.service";
import { UpdateSpaceshipDTO } from "./dto/UpdateSpaceshipDTO";

@ApiTags('spaceships')
@ApiBearerAuth('JWT-auth')
@Controller('spaceships')
@UseGuards(AuthGuard('jwt'))
export class SpaceshipsController {
    constructor(private service: SpaceshipsService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new spaceship' })
    async create(@Body() createSpaceshipDto: CreateSpaceshipsDTO) {
        await this.service.createSpaceship(createSpaceshipDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all spaceships' })
    async findAll() {
        return this.service.getAllSpaceships();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a spaceship by ID' })
    async findOne(@Param('id') id: string) {
        return await this.service.getSpaceshipById(Number(id));
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a spaceship by ID' })
    async update(@Param('id') id: string, @Body() updateSpaceshipDto: UpdateSpaceshipDTO) {
        await this.service.updateSpaceship(Number(id), updateSpaceshipDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a spaceship by ID' })
    async remove(@Param('id') id: string) {
        await this.service.deleteSpaceship(Number(id));
    }
}