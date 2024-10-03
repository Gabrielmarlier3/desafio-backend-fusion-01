import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Planet } from '../planets/planets.model';

@Table
export class StarSystem extends Model<StarSystem> {
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

    @HasMany(() => Planet)
    planets: Planet[];
}