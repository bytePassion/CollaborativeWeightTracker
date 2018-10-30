export enum Gender {
    male = "male",
    female = "female"
}

export class WeightEntryInput {
    weight?: number;
    timestamp?: number;
}

export class Author {
    name?: string;
    gender?: Gender;
}

export abstract class IMutation {
    abstract createWeightEntry(createWeightEntryInput?: WeightEntryInput): WeightEntry | Promise<WeightEntry>;
}

export abstract class IQuery {
    abstract getWeightEntries(): WeightEntry[] | Promise<WeightEntry[]>;

    abstract weightEntry(id: string): WeightEntry | Promise<WeightEntry>;

    abstract getWeightEntriesByUser(): WeightEntry[] | Promise<WeightEntry[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class WeightEntry {
    id?: number;
    weight?: number;
    timestamp?: number;
    author?: Author;
}
