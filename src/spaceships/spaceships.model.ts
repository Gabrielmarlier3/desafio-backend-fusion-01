import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Spaceship extends Model<Spaceship> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    model: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    manufacturer: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    passengerCapacity: number;
}