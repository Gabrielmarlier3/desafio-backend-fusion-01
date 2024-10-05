import { IsInt, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePlanetDto {
    @ApiPropertyOptional({ description: 'The name of the planet' })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ description: 'The description of the planet' })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiPropertyOptional({ description: 'The ID of the star system the planet belongs to', example: 1 })
    @IsOptional()
    @IsInt()
    starSystemId?: number;
}