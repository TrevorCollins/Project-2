module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    //  Setting columns to database table to define our User
    name: { 
        type:DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    picture: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
    },
    // The password cannot be null
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    });
//   Assigning Users to many Posts
User.associate = models => {
User.hasMany(models.Post, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull:false
      }
    });
  };
// Assigning Users to many threads
User.associate = models => {
User.hasMany(models.Thread, {
    onDelete: "CASCADE",
    foreignKey: {
        allowNull:false
        }
    });
};
// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
      };
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
    User.hook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      });

    return User;
};
