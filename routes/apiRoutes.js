const db = require("../models");

module.exports = (app) => {
  app.get("/api/posts", (req, res) => {
    db.Post.findAll({}).then(dbPosts => {
      res.json(dbPosts);
    });
  });

  app.get("/api/posts/:id", (req, res) => {
    db.Post.findAll({ where: { id: req.params.id }}).then(dbPosts => {
      res.json(dbPosts);
    });
  });

  app.post("/api/posts", (req, res) => {
    db.Post.create(req.body).then(dbPosts => {
      res.json(dbPosts);
    });
  });

  app.delete("/api/posts/:id", (req, res) => {
    db.Post.destroy({ where: { id: req.params.id } }).then(dbPosts => {
      res.json(dbPosts);
    });
  });
};
