const express = require("express");

const router = express.Router();

const Posts = require("../data/db.js");

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find(req.query);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "The posts information could not be retrieved." });
  }
});

module.exports = router;
