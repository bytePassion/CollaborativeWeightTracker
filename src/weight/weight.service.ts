import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { WeightEntity } from './weight.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeightResponseObject } from './dto/create-weight-entry.dto';
import { WeightInput } from '../graphql.schema';

@Injectable()
export class WeightService {

    constructor(@InjectRepository(WeightEntity) private readonly weightRepository: Repository<WeightEntity>) {

    }

    async create(data: WeightInput): Promise<WeightResponseObject> {
        const weight = await this.weightRepository.create({ ...data });
        await this.weightRepository.save(weight);
        return this.weightToResponseObject(weight);
    }

    async showAll(): Promise<WeightResponseObject[]> {
        const weights = await this.weightRepository.find();
        return weights.map((weight) => this.weightToResponseObject(weight));

    }

    async findOneById(id: string): Promise<WeightResponseObject> {
        const weight = await this.weightRepository.findOne({ where: { id } });

        if (!weight) {
            throw new HttpException(`Weight with ${id} not found`, HttpStatus.NOT_FOUND);
        }

        return this.weightToResponseObject(weight);
    }

    private weightToResponseObject(weight: WeightEntity): WeightResponseObject {
        const weightResponse: WeightResponseObject = {
            ...weight,
        };
        return weightResponse;
    }

}