const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, password: String!, email: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(bookId: String!): User
  }
  
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  
  type Auth {
    token: ID
    user: User
  }
  
  type Book {
    bookId: ID
    authors: [String]
    descriptions: String!
    title: String!
    image: String
    link: String
  }
  
  input BookInput {
    authors: [String]
    descriptions: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }`;

// Export typesDefs
module.exports = typeDefs;
