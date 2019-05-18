const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    author: String
    rating: Int
  }
 
  type Story {
    id: ID
    by: String
    kids: [String]
    score: Int
    text: String
    time: String
    title: String
    type: String
  }
  
  # The "Query" type is the root of all GraphQL queries.
  type Query {
    books: [Book]
    book(id: ID): Book
    topStories: [Story]
    story(id: ID): Story
    topIds: [ID]
    hello: String
  }
`;

module.exports = typeDefs;
