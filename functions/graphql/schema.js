const { gql, makeExecutableSchema } = require("apollo-server-express");

const User = require("./schemas/user/userType");
const Letter = require("./schemas/letter/letterType");

const Query = gql`
  type Query {
    _empty: String
  }
`;

module.exports = [Query, User, Letter];
