import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreatePlanetDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsInt()
    @IsNotEmpty()
    starSystemId: number;
}