module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  // Adding a belongsTo association to Users here
  Post.associate = models => {
    models.Post.belongsTo(models.User, {
      foreignKey: {
        allowNull:false
      }
    })
  };

  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
  return Post;
};