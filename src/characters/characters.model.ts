import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { PlanetModel } from '../planets/planets.model';

@Table({ tableName: 'Characters' })
export class CharactersModel extends Model<CharactersModel> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    race: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    affiliation: string;

    @ForeignKey(() => PlanetModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    homeworldId: number;
}