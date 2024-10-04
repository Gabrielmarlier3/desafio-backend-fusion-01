import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { StarSystemsModel } from "./star-systems.model";
import { ICreateStarSystem } from "./interface/ICreateStarSystem";
import { IUpdateStarSystem } from "./interface/IUpdateStarSystemDTO";

@Injectable()
export class StarSystemsService {
    constructor(@InjectModel(StarSystemsModel) private starSystemModel: typeof StarSystemsModel){
    }

    async getStarSystemById(id: number){
        try {
            await this.starSystemModel.findOne({ where: { id } })
        } catch (e) {
            throw new Error('Star System not found')
        }
    }

    async getAllStarSystems(){
        await this.starSystemModel.findAll()
    }

    async createStarSystem(data: ICreateStarSystem){
        await this.starSystemModel.create(data)
    }

    async updateStarSystem(id: number, data: IUpdateStarSystem){
        await this.starSystemModel.update(data, { where: { id } })
    }

  async deleteStarSystem(id: number){
    const transaction = await this.starSystemModel.sequelize.transaction();
    try {
        await this.starSystemModel.sequelize.models.Planet.destroy({ where: { starSystemId: id }, transaction });

        await this.starSystemModel.destroy({ where: { id }, transaction });

        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
}
}
