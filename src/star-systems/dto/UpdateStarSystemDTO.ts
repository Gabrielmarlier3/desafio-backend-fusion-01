import { IsString } from 'class-validator';

export class UpdateStarSystemDTO {
    @IsString()
    name: string;

    @IsString()
    description: string;
}