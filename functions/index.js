const functions = require("firebase-functions");
const express = require("express");
const moment = require("moment-timezone");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const app = express();
app.get("/", (req, res) => {
  res.json({
    hello: "Hello",
    world: "World"
  });
});
app.get("/letters", (req, res) => {
  res.json([
    {
      sender: "Dan Brown",
      text: "Hello dear, how're you doing?",
      date: moment()
    },
    {
      sender: "Brandon Sanderson",
      text: "Howdy! Hello from the other side",
      date: moment()
    }
  ]);
});
app.get("/friends", (req, res) => {
  res.json([
    {
      name: "Dan Brown",
      bio: "My books are widely translated and famous, but kinda boring."
    },
    {
      name: "Brandon Sanderson",
      bio: "My books are not so popular but I'm the new Tolkien, for sure."
    }
  ]);
});

const api = functions.https.onRequest(app);

module.exports = {
  api
};
