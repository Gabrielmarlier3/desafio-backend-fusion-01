import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";

@Controller('characters')
@UseGuards(AuthGuard('jwt'))
export class CharactersController {
    @Post()
    create(@Body() createCharacterDto: any) {
        // lógica para criar um novo personagem
    }

    @Get()
    findAll() {
        // lógica para listar todos os personagens
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        // lógica para obter detalhes de um personagem específico
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCharacterDto: any) {
        // lógica para atualizar informações de um personagem
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // lógica para deletar um personagem
    }
}