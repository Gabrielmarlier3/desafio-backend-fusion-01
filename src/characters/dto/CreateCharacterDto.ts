import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCharacterDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    race: string;

    @IsString()
    @IsNotEmpty()
    affiliation: string;


    @IsInt()
    @IsNotEmpty()
    homeworldId: number;
}