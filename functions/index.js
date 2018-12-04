const functions = require("firebase-functions");
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const mocks = require("./graphql/mocks");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");

// Check this if you forget how to use firebase functions 🙄
// https://firebase.google.com/docs/functions/write-firebase-functions
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
