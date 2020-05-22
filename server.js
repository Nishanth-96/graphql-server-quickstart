import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import typeDefs from './src/schema'
import resolvers from './src/resolvers'
import CovidAPI from './src/data/covid-api'

const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
    schema,
    dataSources: () => ({
        covidAPI: new CovidAPI()
    })
});

// The `listen` method launches a web server.
server.listen(80).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});