import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CharactersModel } from './characters.model';
import { ICreateCharacter } from './interface/ICreateCharacter';
import { PlanetsService } from '../planets/planets.service';
import { IUpdateCharacter } from './interface/IUpdateCharacter';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel(CharactersModel)
    private characterModel: typeof CharactersModel,
    private planetService: PlanetsService,
  ) {}

  logger = new Logger(CharactersService.name);

  async createCharacter(character: ICreateCharacter): Promise<void> {
    await this.planetService.getPlanetById(character.homeworldId);
    await this.characterModel.create({
      name: character.name,
      race: character.race,
      affiliation: character.affiliation,
      homeworldId: character.homeworldId,
    });
  }

  async getAllCharacters(): Promise<CharactersModel[]> {
    return await this.characterModel.findAll();
  }

  async getCharacterById(id: number): Promise<CharactersModel> {
    const character = await this.characterModel.findByPk(id);
    if (!character) {
      throw new Error('Character not found');
    }
    return character;
  }

  async updateCharacter(
    id: number,
    character: IUpdateCharacter,
  ): Promise<void> {
    try {
      await this.characterModel.update(character, { where: { id } });
    } catch (e) {
      this.logger.error(e);
      throw new Error('Character not found');
    }
  }

  async deleteCharacter(id: number): Promise<void> {
    await this.characterModel.destroy({ where: { id } });
  }
}
