import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Planet extends Model<Planet> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    climate: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    terrain: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    population: number;
}