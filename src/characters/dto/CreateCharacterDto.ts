import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCharacterDto {
    @ApiProperty({ description: 'The name of the character' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'The race of the character' })
    @IsString()
    @IsNotEmpty()
    race: string;

    @ApiProperty({ description: 'The affiliation of the character' })
    @IsString()
    @IsNotEmpty()
    affiliation: string;

    @ApiProperty({ description: 'The homeworld ID of the character', example: 1 })
    @IsInt()
    @IsNotEmpty()
    homeworldId: number;
}