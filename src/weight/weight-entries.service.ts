import {Injectable} from "@nestjs/common";
import {Gender, WeightEntry, WeightUnit} from "../graphql.schema";

@Injectable()
export class WeightEntriesService {
    private readonly weightEntries: WeightEntry[] = [{
        id: 1,
        weight: 112.5,
        unit: WeightUnit.kg,
        timestamp: 1234,
        user: {
            id: 1,
            name: 'tester',
            gender: Gender.male
        }
    }];

    create(entry: WeightEntry): WeightEntry {
        this.weightEntries.push(entry);
        return entry;
    }

    findAll(): WeightEntry[] {
        return this.weightEntries;
    }

    findOneById(id: number): WeightEntry {
        return this.weightEntries.find(entry => entry.id === id);
    }
}