const express = require("express");

// Post router will import here

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Posts API</h>
    <p>time to get it done</p>
    `);
});

module.exports = server;
