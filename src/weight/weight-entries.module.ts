import {Module} from "@nestjs/common";
import {WeightEntriesResolvers} from "./weight-entries.resolvers";
import {WeightEntriesService} from "./weight-entries.service";
import {WeightEntrySchema} from "./schema/weight-entry.schema";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forFeature([{name: 'WeightEntry', schema: WeightEntrySchema}])],
    providers: [WeightEntriesResolvers, WeightEntriesService]
})
export class WeightEntriesModule{}