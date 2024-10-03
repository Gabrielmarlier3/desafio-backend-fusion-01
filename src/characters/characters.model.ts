import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Planet } from '../planets/planets.model';

@Table
export class Character extends Model<Character> {
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

    @ForeignKey(() => Planet)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    homeworldId: number;
}