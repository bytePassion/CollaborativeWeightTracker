import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { WeightService } from './weight.service';
import { Weight, WeightInput } from '../graphql.schema';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Weight')
export class WeightsResolver {
    constructor(private readonly weightService: WeightService) { }

    @Query('getWeights')
    async getWeights() {
        return await this.weightService.showAll();
    }

    @Query('getWeight')
    async getWeight(@Args('id') id: string): Promise<Weight> {
        return await this.weightService.findOneById(id);
    }

    @Mutation('createWeight')
    async create(@Args('createWeight') args: WeightInput): Promise<Weight> {
        const createdWeight = await this.weightService.create(args);
        pubSub.publish('weightCreated', { weightCreated: createdWeight });
        return createdWeight;
    }
}