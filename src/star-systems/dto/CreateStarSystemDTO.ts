import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStarSystemDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}