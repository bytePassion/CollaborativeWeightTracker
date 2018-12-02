import {define} from "typeorm-seeding";
import {WeightEntity} from "../../weight/weight.entity";
import * as faker from 'faker';

define(WeightEntity, () => {
    const weight = new WeightEntity();
    weight.weight = faker.random.number({min: 100, max: 120, precision: 2});
    
    return weight;
});