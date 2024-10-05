import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateSpaceshipDTO {
    @ApiPropertyOptional({ description: 'The name of the spaceship' })
    @IsString()
    @IsOptional()
    name: string;

    @ApiPropertyOptional({ description: 'The model of the spaceship' })
    @IsString()
    @IsOptional()
    model: string;

    @ApiPropertyOptional({ description: 'The manufacturer of the spaceship' })
    @IsString()
    @IsOptional()
    manufacturer: string;

    @ApiPropertyOptional({ description: 'The passenger capacity of the spaceship', example: 100 })
    @IsInt()
    @IsOptional()
    passengerCapacity: number;
}