const { gql, makeExecutableSchema } = require("apollo-server-express");

const User = require("./schemas/user.js");
const Letter = require("./schemas/letter.js");

const Query = gql`
  type Query {
    _empty: String
  }
`;

const resolvers = {
  Query: {
    getUser: (obj, { id }, context, info) => {
      return {
        _id: id,
        username: "Paquito",
        location: "Las Palmas de Gran Canaria"
      };
    }
  }
};

module.exports = {
  typeDefs: [Query, User, Letter],
  resolvers
};
