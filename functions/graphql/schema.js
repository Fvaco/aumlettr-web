const { gql, makeExecutableSchema } = require("apollo-server-express");

const User = require("./schemas/user.js");
const Letter = require("./schemas/letter.js");

const Query = gql`
  type Query {
    _empty: String
  }
`;

module.exports = {
  typeDefs: [Query, User, Letter],
  resolvers: {}
};
