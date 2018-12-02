const functions = require("firebase-functions");
const express = require("express");
const casual = require("casual");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");

// Check this if you forget how to use firebase functions 🙄
// https://firebase.google.com/docs/functions/write-firebase-functions
casual.define(
  "nullable_date",
  () => (casual.coin_flip ? casual.unix_time : null)
);
const mocks = {
  User: () => ({
    username: casual.username,
    location: casual.city
  }),
  Letter: () => ({
    text: casual.text,
    arrival: casual.unix_time,
    read: casual.nullable_date,
    created: casual.unix_time
  })
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks
});

const app = express();
server.applyMiddleware({ app });

const api = functions.https.onRequest(app);

module.exports = {
  api
};
