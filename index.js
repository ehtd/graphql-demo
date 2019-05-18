const _ = require('lodash');

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const book = require('./resolvers/book');
const BooksAPI = require('./datasources/BooksAPI');

const Query = _.merge({
    hello: () => 'Hello world'
}, book);

const resolvers = { Query };

console.log(resolvers);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    debug: true,
    dataSources: () => {
        return {
            booksAPI: new BooksAPI(),
        };
    },
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
