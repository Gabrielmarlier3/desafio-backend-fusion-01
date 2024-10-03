import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";

@Controller('star-systems')
@UseGuards(AuthGuard('jwt'))
export class StarSystemsController {
    @Post()
    create(@Body() createStarSystemDto: any) {
        // lógica para criar um novo sistema estelar
    }

    @Get()
    findAll() {
        // lógica para listar todos os sistemas estelares
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        // lógica para obter detalhes de um sistema estelar específico
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateStarSystemDto: any) {
        // lógica para atualizar informações de um sistema estelar
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // lógica para deletar um sistema estelar
    }
}