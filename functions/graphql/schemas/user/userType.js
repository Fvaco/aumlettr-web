const { gql } = require("apollo-server-express");
const { interestsEnum } = require("./utils");

const User = gql`
  ${interestsEnum}
  type User {
    _id: ID!
    avatar: String
    username: String!
    location: String!
    friends: [User]
    letters: [Letter]
    interests: [AllowedInterests]
  }
  extend type Query {
    getUser(id: ID!): User
  }
`;

module.exports = User;
