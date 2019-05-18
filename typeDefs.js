const { gql } = require('apollo-server');

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

module.exports = typeDefs;
