const _ = require('lodash');

const { ApolloServer } = require('apollo-server');
const responseCachePlugin = require('apollo-server-plugin-response-cache');

const typeDefs = require('./typeDefs');
const book = require('./resolvers/book');
const story = require('./resolvers/story');

const BooksAPI = require('./datasources/BooksAPI');
const HackerNewsAPI = require('./datasources/HackerNewsAPI');

const Query = _.merge(
    {
        hello: () => 'Hello world'
    },
    book,
    story,
);

const resolvers = { Query };

console.log(resolvers);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    debug: true,
    dataSources: () => {
        return {
            booksAPI: new BooksAPI(),
            hnAPI: new HackerNewsAPI(),
        };
    },
    plugins: [
        responseCachePlugin()
    ],
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
