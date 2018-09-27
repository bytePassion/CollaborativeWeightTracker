import { WeightEntryInput } from '../../graphql.schema';

export class WeightEntryDto extends WeightEntryInput {
    weight: number;
    timestamp: number;
}