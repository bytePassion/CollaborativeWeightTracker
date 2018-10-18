export enum Gender {
    male = "male",
    female = "female"
}

export enum WeightUnit {
    kg = "kg",
    lbs = "lbs"
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

    abstract user(id: number): User | Promise<User>;

    abstract getWeightEntriesByUser(): WeightEntry[] | Promise<WeightEntry[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class User {
    id: number;
    name?: string;
    gender?: Gender;
}

export class WeightEntry {
    id?: number;
    weight?: number;
    timestamp?: number;
    author?: Author;
    unit?: WeightUnit;
    user?: User;
}
