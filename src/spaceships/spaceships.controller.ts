import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('spaceships')
@ApiBearerAuth('JWT-auth')
@Controller('spaceships')
@UseGuards(AuthGuard('jwt'))
export class SpaceshipsController {
    @Post()
    create(@Body() createSpaceshipDto: any) {
        // lógica para criar uma nova nave espacial
    }

    @Get()
    findAll() {
        // lógica para listar todas as naves espaciais
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        // lógica para obter detalhes de uma nave espacial específica
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateSpaceshipDto: any) {
        // lógica para atualizar informações de uma nave espacial
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // lógica para deletar uma nave espacial
    }
}