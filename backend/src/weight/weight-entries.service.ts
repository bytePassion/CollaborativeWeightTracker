import {Injectable} from "@nestjs/common";
import {WeightEntry} from "../graphql.schema";

@Injectable()
export class WeightEntriesService {
    private readonly weightEntries: WeightEntry[] = [{id: 1, weight: 112.5, timestamp: 1234}];

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