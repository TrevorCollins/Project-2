const db = require("../models");

// db.User.create({
//   name: "u2",
//   email: "e2@email.com",
//   password: "p"
// });

console.log("user created.");

// db.Post.create({
//   title: "t",
//   body: "some words",
//   UserId: 1
// });

db.Thread.create({
  title: "Title",
  body: "Body",
  UserId: 1,
  PostId: 10
});