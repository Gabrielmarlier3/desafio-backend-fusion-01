import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { StarSystemsModel } from '../star-systems/star-systems.model';

@Table({ tableName: 'Planets' })
export class PlanetModel extends Model<PlanetModel> {
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

    @ForeignKey(() => StarSystemsModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    starSystemId: number;

    @BelongsTo(() => StarSystemsModel)
    starSystem: StarSystemsModel;
}