const { merge } = require("lodash");

const userResolvers = require("./schemas/user/userResolvers");
const letterResolvers = require("./schemas/letter/letterResolvers");

const resolvers = merge(userResolvers, letterResolvers);

module.exports = resolvers;
