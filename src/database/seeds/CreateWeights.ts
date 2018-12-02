import { Connection } from 'typeorm';
import { Factory, Seed, times } from 'typeorm-seeding';
import {WeightEntity} from "../../weight/weight.entity";

export class CreateWeights implements Seed {
    public async seed(factory: Factory, connection: Connection): Promise<any> {
        const em = connection.createEntityManager();
        await times(20, async (n) => {
            const weight = await factory(WeightEntity)().seed();
            return em.save(weight);
        })
    }
}