import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { CharactersModel } from "./characters.model";
import { ICreateCharacter } from "./interface/ICreateCharacter";
import { PlanetsService } from "../planets/planets.service";
import { IUpdateCharacter } from "./interface/IUpdateCharacter";

@Injectable()
export class CharactersService {
    constructor(
        @InjectModel(CharactersModel) private characterModel: typeof CharactersModel,
        private planetService: PlanetsService
    ){
    }

    async createCharacter(character: ICreateCharacter){
        await this.planetService.getPlanetById(character.homeworldId);
        return await this.characterModel.create({
            name: character.name,
            race: character.race,
            affiliation: character.affiliation,
            homeworldId: character.homeworldId
        });
    }

    async getAllCharacters(){
        return await this.characterModel.findAll();
    }

    async getCharacterById(id: number){
        const character = await this.characterModel.findByPk(id);
        if ( !character ) {
            throw new Error('Character not found');
        }
        return character;
    }

    async updateCharacter(id: number, character: IUpdateCharacter){
        try {
            return await this.characterModel.update(character, { where: { id } });
        } catch (e) {
            throw new Error('Character not found');
        }
    }

    async deleteCharacter(id: number){
        return await this.characterModel.destroy({ where: { id } });
    }

}

