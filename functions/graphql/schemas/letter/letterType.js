const { gql } = require("apollo-server-express");

const Letter = gql`
  type Letter {
    _id: ID!
    sender: User!
    recipient: User!
    text: String!
    arrival: String!
    created: String!
    read: String
  }
  input LetterInput {
    recipient: String!
    text: String!
  }
  extend type Query {
    getLetters: [Letter!]
    getLetter(id: ID!): Letter
  }
`;

module.exports = Letter;
