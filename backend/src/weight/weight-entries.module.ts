import {Module} from "@nestjs/common";
import {WeightEntriesResolvers} from "./weight-entries.resolvers";
import {WeightEntriesService} from "./weight-entries.service";

@Module({
    providers: [WeightEntriesResolvers, WeightEntriesService]
})
export class WeightEntriesModule{}