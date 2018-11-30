const { gql } = require("apollo-server-express");

const User = gql`
  type User {
    _id: ID!
    username: String!
    location: String!
    friends: [User]
  }
  extend type Query {
    getUser(id: ID!): User
  }
`;

module.exports = User;
