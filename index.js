const _ = require('lodash');

const { ApolloServer, gql } = require('apollo-server');

const books = [
    {
        id: '1',
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        id: '2',
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    id:  ID
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    books: [Book]
    book(id: ID): Book
    hello: String
  }
`;

const resolvers = {
    Query: {
        books: () => books,
        book( parent, opts) {
            return _.find(books, opts)
        },
        hello: () => 'Hello world'
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
