import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlanetDto {
    @ApiProperty({ description: 'The name of the planet' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'The description of the planet' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ description: 'The ID of the star system the planet belongs to', example: 1 })
    @IsInt()
    @IsNotEmpty()
    starSystemId: number;
}