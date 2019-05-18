const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    author: String
    rating: Int
  }
 
  type Story @cacheControl(maxAge: 240) {
    id: ID
    by: String
    kids: [Comment]
    score: Int
    text: String
    time: String
    title: String
    type: String
  }
  
  type Comment @cacheControl(maxAge: 0) {
    id: ID
    by: String
    kids: [ID]
    parent: ID
    text: String
    time: String
    type: String
  }
  
  # The "Query" type is the root of all GraphQL queries.
  type Query {
    books: [Book]
    book(id: ID): Book
    topStories(max: Int): [Story]
    story(id: ID): Story
    comment(id: ID): Comment
    topIds: [ID]
    hello: String
  }
`;

module.exports = typeDefs;


