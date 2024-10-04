import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateCharacterDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    race?: string;

    @IsOptional()
    @IsString()
    affiliation?: string;

    @IsOptional()
    @IsNumber()
    homeworldName?: number;
}