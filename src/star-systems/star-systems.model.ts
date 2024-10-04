import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { PlanetModel } from '../planets/planets.model';

@Table({ tableName: 'StarSystems' })
export class StarSystemsModel extends Model<StarSystemsModel> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    description: string;

    @HasMany(() => PlanetModel)
    planets: PlanetModel[];
}