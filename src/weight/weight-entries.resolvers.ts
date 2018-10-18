import {Resolver, Args, Mutation, Query} from "@nestjs/graphql";
import {WeightEntriesService} from "./weight-entries.service";
import {ParseIntPipe} from "@nestjs/common";
import {WeightEntry} from "../graphql.schema";
import {PubSub} from "graphql-subscriptions";
import {WeightEntryDto} from "./dto/create-weight-entry.dto";

const pubSub = new PubSub();


@Resolver('WeightEntry')
export class WeightEntriesResolvers {
    constructor(private readonly weightEntriesService: WeightEntriesService){}

    @Query('getWeightEntries')
    async getWeightEntries() {
        return await this.weightEntriesService.findAll();
    }

    @Query('weightEntry')
    async findOneById(@Args('id', ParseIntPipe)id: number): Promise<WeightEntry> {
        return await this.weightEntriesService.findOneById(id);
    }

    @Mutation('createWeightEntry')
    async create(@Args('createWeightEntryInput') args: WeightEntryDto): Promise<WeightEntry> {
        const createdWeightEntry = await this.weightEntriesService.create(args);
        pubSub.publish('weightEntryCreated', { weightEntryCreated: createdWeightEntry });
        return createdWeightEntry;
    }
}


