import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { ICreateCharacter } from "./interface/ICreateCharacter";
import { CharactersService } from "./characters.service";
import { CreateCharacterDto } from "./dto/CreateCharacterDto";
import { UpdateCharacterDto } from "./dto/UpdateCharacterDto";
import { ApiBearerAuth, ApiTags, ApiOperation } from "@nestjs/swagger";

@ApiTags('characters')
@ApiBearerAuth('JWT-auth')
@Controller('characters')
@UseGuards(AuthGuard('jwt'))
export class CharactersController {
    constructor(private service: CharactersService) {
    }

    @Post()
    @ApiOperation({ summary: 'Create a new character' })
    async create(@Body() createCharacterDto: CreateCharacterDto) {
        await this.service.createCharacter(createCharacterDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all characters' })
    findAll() {
        return this.service.getAllCharacters();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a character by ID' })
    findOne(@Param('id') id: string) {
        return this.service.getCharacterById(Number(id));
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a character by ID' })
    async update(@Param('id') id: number, @Body() updateCharacterDto: UpdateCharacterDto) {
        await this.service.updateCharacter(id, updateCharacterDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a character by ID' })
    remove(@Param('id') id: string) {
        return this.service.deleteCharacter(Number(id));
    }
}