const _ = require('lodash');

const { ApolloServer, gql } = require('apollo-server');
const book = require('./resolvers/book');
const BooksAPI = require('./datasources/BooksAPI');

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    id:  ID
    title: String
    author: String
    rating: Int
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    books: [Book]
    book(id: ID): Book
    hello: String
  }
`;

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
