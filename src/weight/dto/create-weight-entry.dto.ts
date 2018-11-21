import {IsNumber} from "class-validator";

export class WeightResponseObject {
    id: string;
    weight: number;
    created: Date;
    updated: Date;
}

export class WeightDTO {
    @IsNumber()
    readonly weight: number;
}