export enum Gender {
    male = "male",
    female = "female"
}

export class WeightInput {
    weight?: number;
    timestamp?: number;
}


export abstract class IMutation {
    abstract createWeight(createWeight?: WeightInput): Weight | Promise<Weight>;
}

export abstract class IQuery {
    abstract getWeightEntries(): Weight[] | Promise<Weight[]>;

    abstract Weight(id: string): Weight | Promise<Weight>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class Weight {
    id?: string;
    weight?: number;
}
