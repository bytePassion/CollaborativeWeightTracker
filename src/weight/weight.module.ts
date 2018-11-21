import { Module } from '@nestjs/common';
import { WeightsResolver } from './weights.resolver';
import { WeightService } from './weight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {WeightEntity} from "./weight.entity";


@Module({
    imports: [TypeOrmModule.forFeature([WeightEntity])],
    providers: [WeightsResolver, WeightService],
})
export class WeightModule { }