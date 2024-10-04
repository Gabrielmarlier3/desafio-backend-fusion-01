import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { ICreateCharacter } from "./interface/ICreateCharacter";
import { CharactersService } from "./characters.service";
import { CreateCharacterDto } from "./dto/CreateCharacterDto";
import { UpdateCharacterDto } from "./dto/UpdateCharacterDto";

@Controller('characters')
@UseGuards(AuthGuard('jwt'))
export class CharactersController {
    constructor(private service: CharactersService) {
    }
    @Post()
    async create(@Body() createCharacterDto: CreateCharacterDto) {
        await this.service.createCharacter(createCharacterDto);
    }

    @Get()
    findAll() {
        return this.service.getAllCharacters();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.getCharacterById(Number(id));
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateCharacterDto: UpdateCharacterDto) {
        await this.service.updateCharacter(id, updateCharacterDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.deleteCharacter(Number(id));
    }
}