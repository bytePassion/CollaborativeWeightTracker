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

export class LoginInformation {
    token?: string;
}

export abstract class IMutation {
    abstract createWeightEntry(createWeightEntryInput?: WeightEntryInput): WeightEntry | Promise<WeightEntry>;

    abstract login(email: string): LoginInformation | Promise<LoginInformation>;
}

export abstract class IQuery {
    abstract getWeightEntries(): WeightEntry[] | Promise<WeightEntry[]>;

    abstract weightEntry(id: string): WeightEntry | Promise<WeightEntry>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class WeightEntry {
    id?: number;
    weight?: number;
    timestamp?: number;
    author?: Author;
}
