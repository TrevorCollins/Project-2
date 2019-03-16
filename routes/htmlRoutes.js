var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load serving signup page
  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the profile page
    if (req.isAuthenticated()) {
      res.redirect("/profile");
    } else{
    res.render("signup");}
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });

 
  app.get("/profile", (req, res) => {
    if(req.isAuthenticated()){
      res.render("profile");
    } else {
      res.redirect('/login')
    }
  });

  app.get("/", (req, res) => {
    if(req.isAuthenticated()){
      console.log(`We are signed in at the home page.`)
    }
    res.render("index");
  });

  // 
  app.get("/forum", (req, res) => {
    db.Post.findAll({}).then( (dbResults) =>{
      res.render("forum", {
        post: dbResults
      });
    });
    
  });
 

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
