/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {

  index: function (req, res) {
    return res.forbidden();
  },

  create: function (req, res) {
    var email = req.param("email");
    var password = req.param("password");

    User.findOneByEmail(email, function (err, usr) {
      if (err) {
        res.serverError("Database connection error.");
      } else if (usr) {
        res.badRequest("Email is already taken.", "/signup");
      } else {
        var hasher = require("password-hash");
        password = hasher.generate(password);

        User.create({email: email, password: password}, function (error, user) {
          if (error) {
            res.serverError("Database write error.");
          } else {
            req.session.user = user;
            req.session.authenticated = true;
            res.redirect(307, '/');
          }
        });
      }
    });
  },

  show: function (req, res) {
    return res.forbidden();
  },

  edit: function (req, res) {
    return res.forbidden();
  },

  delete: function (req, res) {
    return res.forbidden();
  }
};

