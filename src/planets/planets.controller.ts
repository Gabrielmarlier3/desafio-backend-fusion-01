import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";

@Controller('planets')
@UseGuards(AuthGuard('jwt'))
export class PlanetsController {
  @Post()
  create(@Body() createPlanetDto: any) {
    // lógica para criar um novo planeta
  }

  @Get()
  findAll() {
    // lógica para listar todos os planetas
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // lógica para obter detalhes de um planeta específico
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlanetDto: any) {
    // lógica para atualizar informações de um planeta
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // lógica para deletar um planeta
  }
}