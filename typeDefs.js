const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    author: String
    rating: Int
  }
 
  type Story @cacheControl(maxAge: 0) {
    id: ID
    by: String
    kids: [Comment]
    score: Int
    text: String
    time: String
    title: String
    type: String
    commentCount: Int
    url: String
  }
  
  type Comment @cacheControl(maxAge: 0) {
    id: ID
    by: String
    kids: [ID]
    parent: ID
    text: String
    time: String
    type: String
    deleted: Boolean
  }
  
  # The "Query" type is the root of all GraphQL queries.
  type Query {
    books: [Book]
    book(id: ID): Book
    topStories(max: Int): [Story] @cacheControl(maxAge: 0)
    story(id: ID): Story
    comment(id: ID): Comment
    topIds: [ID]
    hello: String
  }
`;

module.exports = typeDefs;


