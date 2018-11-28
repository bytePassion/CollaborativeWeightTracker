import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { WeightModule } from './weight/weight.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        WeightModule,
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot({
            typePaths: ['./src/**/*.graphql'],
            context: ({ req }) => ({ headers: req.headers }),
            installSubscriptionHandlers: true,
        }),
    ],
})
export class AppModule {
}