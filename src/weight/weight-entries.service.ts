import {Injectable} from "@nestjs/common";
import {WeightEntry} from "../graphql.schema";
import  {Model} from 'mongoose';
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class WeightEntriesService {

    constructor(@InjectModel('WeightEntry') private readonly weightModel: Model<WeightEntry>) {

    }

    async create(entry: WeightEntry): Promise<WeightEntry> {
        const newEntry = new this.weightModel(entry);
        return await newEntry.save();
    }

    async findAll(): Promise<WeightEntry[]> {
        return await this.weightModel.find().exec();
    }

    async findOneById(id: number): Promise<WeightEntry> {
        return await this.weightModel.find(id).exec();
    }
}