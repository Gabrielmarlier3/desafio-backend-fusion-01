import { Injectable } from '@nestjs/common';
import { SpaceshipModel } from "./spaceships.model";
import { InjectModel } from "@nestjs/sequelize";
import { ICreateSpaceship } from "./interface/ICreateSpaceship";
import { IUpdateSpaceship } from "./interface/IUpdateSpaceship";

@Injectable()
export class SpaceshipsService {
    constructor(@InjectModel(SpaceshipModel) private spaceshipModel: typeof SpaceshipModel){
    }

    async createSpaceship(spaceship: ICreateSpaceship){
        await this.spaceshipModel.create(spaceship);
    }

    async getAllSpaceships(){
        return await this.spaceshipModel.findAll();
    }

    async getSpaceshipById(id: number){
        const spaceship = await this.spaceshipModel.findByPk(id);
        if ( !spaceship ) {
            throw new Error('Spaceship not found');
        }
        return spaceship;
    }

    async updateSpaceship(id: number, spaceship: IUpdateSpaceship){
        try {
            await this.spaceshipModel.update(spaceship, { where: { id } });
        } catch (e) {
            throw new Error('Spaceship not found');
        }
    }

    async deleteSpaceship(id: number){
        await this.spaceshipModel.destroy({ where: { id } });
    }

}

