var db = require("../models");
var passport = require("../config/passport.js");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) =>{
  
      if (info) {return res.send(info.message)};
      if (err) {return next(err);};
      if (!user) {return res.redirect('/login'); }
      req.login(user, (err) => {
        if (err) {return next(err)}
        return res.send('profile')
      });
    })(req, res, next);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {

    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res)=> {
    if (!req.isAuthenticated()) {
      // The user is not logged in, send back an empty object
      res.json({signedIn: false});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        signedIn: true,
        name: req.user.name,
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Create a new Post
  app.post("/api/post", (req, res) => {
      if (!req.isAuthenticated()){
        // prevents user from posting if not logged in
        // sending back a placeholder, it should prompt user to sign in
        res.json({signedIn: false})
      }
      db.Post.create(req.body).then((dbPost) => {
        res.json(dbPost);
      });
    });

      // Create new comment
  app.post("/api/comment", (req, res) => {
    if (!req.isAuthenticated()) {
      // prevents user from posting if not logged in
      // sending back a placeholder, it should prompt user to sign in
      res.json({signedIn: false})
    }
    db.Thread.create(req.body).then((dbPost) => {
      res.json(dbPost);
    });
  });

  // Route for retrieving data for our forum posts

 app.get("/api/posts/page/:offset", (req, res) => {
  db.Post.findAll({
    offset: parseInt(req.params.offset) * 10,
    limit: 10,
    order: [
      ["updatedAt", "DESC"]
    ],
    include: [
      {
        model: db.User,
        attributes: [
          "id", "name", "picture"
        ]
      },
    ]
  }).then(dbPosts => {
    res.json(dbPosts);
  });
});


  // Get one post with threads
  app.get("/api/posts/:id", (req, res) => {
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: db.User,
          attributes: [
            "id", "name", "picture"
          ]
        },
        {
          model: db.Thread,
          include: [
            {
              model: db.User,
              attributes: [
                "id", "name", "picture"
              ]
            }
          ]
        }
      ]
    }).then(dbPosts => {
      console.log(dbPosts);
      res.json(dbPosts);
    });
  });

  // users posts
  app.get("/api/userPosts/:id", (req, res) => {
    db.Post.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(dbPosts => {
      console.log(dbPosts);
      res.json(dbPosts);
    });
  });
   // Search posts by keywords
   app.get("/api/posts/search/:query", (req, res) => {
    let query = req.params.query;
    query = query.split("+").join("%");
    query = `%${query}%`

    db.Post.findAll({
      where: {
        [Op.or]: [
          { "title": { [Op.like]: query } },
          { "body": { [Op.like]: query } }
        ]
      },
      include: [
        {
          model: db.User,
          attributes: [
            "id", "name", "picture"
          ]
        }
      ]
    }).then(dbPosts => {
      res.json(dbPosts);
    });
  });

  // Search posts by category
  app.get("/api/posts/category/:category", (req, res) => {
    db.Post.findAll({
      where: {
        typeOf: req.params.category
      },
      include: [
        {
          model: db.User,
          attributes: [
            "id", "name", "picture"
          ]
        }
      ]
    }).then(dbPosts => {
      res.json(dbPosts);
    });
  });

    // Delete post
    app.delete("/api/posts/:id", (req, res) => {
      db.Post.destroy({ where: { id: req.params.id } }).then(dbPosts => {
        res.json(dbPosts);
      });
    });
  
    // update posts
    app.put("/api/posts", (req, res) =>{
      db.Post.update(
        req.body,
        {where : {
          id: req.body.id
        }}
      ).then( (dbPost)=> {
        res.json(dbPost);
      });
    });

};