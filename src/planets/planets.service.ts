import { Injectable } from '@nestjs/common';
import { PlanetModel } from "./planets.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class PlanetsService {
constructor(@InjectModel(PlanetModel) private planetModel: typeof PlanetModel){}

    async getPlanetByName(name: string) {
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
        return await this.planetModel.findOne({
            where: { name: formattedName }
        });
    }
}
