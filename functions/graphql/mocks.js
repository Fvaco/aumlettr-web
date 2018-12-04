const casual = require("casual");

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

module.exports = mocks;
