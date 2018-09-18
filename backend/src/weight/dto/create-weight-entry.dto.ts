import { CreateWeightEntryInput } from '../../graphql.schema';

export class CreateWeightEntryDto extends CreateWeightEntryInput {
    weight: number;
    timestamp: number;
}