/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {

  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },

  create: function (req, res) {
    var email = req.param("email");
    var password = req.param("password");

    User.findOneByEmail(email, function (err, usr) {
      if (err) {
        res.send(500, { error: "Database error." });
      } else if (usr) {
        res.send(400, {error: "Email is already taken."});
      } else {
        var hasher = require("password-hash");
        password = hasher.generate(password);

        User.create({email: email, password: password}, function (error, user) {
          if (error) {
            res.send(500, {error: "Database Error."});
          } else {
            req.session.user = user;
            res.send(200, {new_user: user});
          }
        });
      }
    });
  },

  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },

  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },

  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

