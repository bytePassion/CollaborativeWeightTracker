import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {WeightEntriesModule} from "./weight/weight-entries.module";
import { MongooseModule } from '@nestjs/mongoose';
import {join} from "path";

@Module({
    imports: [
        WeightEntriesModule,
        MongooseModule.forRoot('mongodb://localhost/nest'),
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            context: ({req}) => ({req}),
            installSubscriptionHandlers: true,
            definitions: {
                path: join(process.cwd(), 'src/graphql.schema.ts'),
                outputAs: 'class',
            },
        })
    ]
})
export class AppModule {
}
