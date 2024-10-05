import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateStarSystemDTO {
    @ApiPropertyOptional({ description: 'The name of the star system' })
    @IsString()
    @IsOptional()
    name: string;

    @ApiPropertyOptional({ description: 'The description of the star system' })
    @IsString()
    @IsOptional()
    description: string;
}