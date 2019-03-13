const db = require("../models");

module.exports = (app) => {
  // Load index page
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/posts", (req, res) => {
    db.Post.findAll().then(dbPosts => {
      res.render("post", { post: dbPosts });
    });
  });

  app.get("/posts/:id", (req, res) => {
    db.Post.findOne({ where: { id: req.params.id }}).then(dbPosts => {
      res.render("post", { post: dbPosts });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
