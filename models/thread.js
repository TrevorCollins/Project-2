module.exports = function(sequelize, DataTypes) {
  var Thread = sequelize.define("Thread", {
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
  Thread.associate = models => {
    models.Thread.belongsTo(models.User, {
      foreignKey: {
        allowNull:false
      }
    })
  };
  // Adding a belongsTo association to Post here
  Thread.associate = models => {
    models.Thread.belongsTo(models.Post, {
      foreignKey: {
        allowNull:false
      }
    })
  };

  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
  return Thread;
};