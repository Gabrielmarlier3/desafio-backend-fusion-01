import { Injectable } from '@nestjs/common';
import { Model } from "sequelize-typescript";
import { InjectModel } from "@nestjs/sequelize";
import { CharactersModel } from "./characters.model";
import { ICreateCharacter } from "./interface/ICreateCharacter";
import { PlanetsService } from "../planets/planets.service";

@Injectable()
export class CharactersService {
    constructor(
        @InjectModel(CharactersModel) private characterModel: typeof CharactersModel,
        private planetService: PlanetsService
    ){}

    async create(character: ICreateCharacter){
        const { homeworldName, ...characterData } = character;
        const planet = await this.planetService.getPlanetByName(homeworldName);
        return await this.characterModel.create({
            name: characterData.name,
            race: characterData.race,
            affiliation: characterData.affiliation,
            homeworldId: planet.id
        });
    }

    async getAllCharacters(){
        return await this.characterModel.findAll();
    }

    async getCharacterById(id: number){
        return await this.characterModel.findByPk(id);
    }

    async updateCharacter(id: number, character: ICreateCharacter){
        return await this.characterModel.update(character, {where: {id}});
    }

}

