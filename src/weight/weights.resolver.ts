import {Resolver, Args, Mutation, Query} from "@nestjs/graphql";
import {WeightService} from "./weight.service";
import {Weight, WeightInput} from "../graphql.schema";
import {PubSub} from "graphql-subscriptions";
import {WeightDTO} from "./dto/create-weight-entry.dto";

const pubSub = new PubSub();


@Resolver('Weight')
export class WeightsResolver {
    constructor(private readonly weightService: WeightService){}

    @Query('getWeights')
    async getWeights() {
        return await this.weightService.showAll();
    }

    @Query('weightEntry')
    async findOneById(@Args('id')id: string): Promise<Weight> {
        return await this.weightService.findOneById(id);
    }

    @Mutation('createWeight')
    async create(@Args('createWeight') args: WeightInput): Promise<Weight> {
        console.log('mutation weight arg: ', args);
        const createdWeight = await this.weightService.create(args);
        pubSub.publish('weightCreated', { weightCreated: createdWeight });
        return createdWeight;
    }
}


