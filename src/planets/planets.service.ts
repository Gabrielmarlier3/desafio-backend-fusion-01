import { Injectable } from '@nestjs/common';
import { PlanetModel } from "./planets.model";
import { InjectModel } from "@nestjs/sequelize";
import { ICreatePlanet } from "./interface/ICreatePlanet";
import { StarSystemsService } from "../star-systems/star-systems.service";
import { IUpdatePlanet } from "./interface/IUpdatePlanet";

@Injectable()
export class PlanetsService {
constructor(
    @InjectModel(PlanetModel) private planetModel: typeof PlanetModel,
    private starSystemService: StarSystemsService
){}

    async getPlanetById(id: number) {
        try {
            return await this.planetModel.findByPk(id);
        } catch (e) {
            throw new Error('Planet not found');
        }
    }

    async createPlanet(createPlanet: ICreatePlanet) {
        const { starSystemId, ...createPlanetData } = createPlanet;
        await this.starSystemService.getStarSystemById(starSystemId);
        return await this.planetModel.create({
            name: createPlanetData.name,
            description: createPlanetData.description,
            starSystemId
        });
    }

    async getAllPlanets() {
        return await this.planetModel.findAll();
    }

    async updatePlanet(id: number, updatePlanet: IUpdatePlanet) {
        const { starSystemId } = updatePlanet;
        await this.starSystemService.getStarSystemById(starSystemId);
        return await this.planetModel.update(updatePlanet, { where: { id } });
    }

   async deletePlanet(id: number) {
    const transaction = await this.planetModel.sequelize.transaction();
    try {
        await this.planetModel.sequelize.models.Character.destroy({ where: { homeworldId: id }, transaction });

        await this.planetModel.destroy({ where: { id }, transaction });

        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
}

}
