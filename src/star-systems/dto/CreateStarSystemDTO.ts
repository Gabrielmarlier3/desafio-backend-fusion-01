import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStarSystemDTO {
    @ApiProperty({ description: 'The name of the star system' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'The description of the star system' })
    @IsString()
    @IsNotEmpty()
    description: string;
}