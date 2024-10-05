import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCharacterDto {
    @ApiPropertyOptional({ description: 'The name of the character' })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ description: 'The race of the character' })
    @IsOptional()
    @IsString()
    race?: string;

    @ApiPropertyOptional({ description: 'The affiliation of the character' })
    @IsOptional()
    @IsString()
    affiliation?: string;

    @ApiPropertyOptional({ description: 'The homeworld ID of the character', example: 1 })
    @IsOptional()
    @IsNumber()
    homeworldName?: number;
}