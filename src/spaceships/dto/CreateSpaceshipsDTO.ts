import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSpaceshipsDTO {
    @ApiProperty({ description: 'The name of the spaceship' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'The model of the spaceship' })
    @IsString()
    @IsNotEmpty()
    model: string;

    @ApiProperty({ description: 'The manufacturer of the spaceship' })
    @IsString()
    @IsNotEmpty()
    manufacturer: string;

    @ApiProperty({ description: 'The passenger capacity of the spaceship', example: 100 })
    @IsInt()
    @IsNotEmpty()
    passengerCapacity: number;
}