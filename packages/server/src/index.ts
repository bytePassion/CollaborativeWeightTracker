import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
    type Query {
        hello(name: String): String!
    }
`;

const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || 'World!'}`
    },
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

const options = {
    port: process.env.PORT || 3000,
    endpoint: '/graphql',
    playground: '/playground'
}

server.start(options, ({ port }) => console.log(`Server is running on ${port}`))
    .catch((error) => console.log(error));