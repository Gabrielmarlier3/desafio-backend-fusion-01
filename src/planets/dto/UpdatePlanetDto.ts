import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UpdatePlanetDto {
    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsNotEmpty()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsInt()
    starSystemId?: number;
}