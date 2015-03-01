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
    User.create({email:"test@test.com", password:"test"});
    return res.json({
      todo: 'create() is not implemented yet....but we still snuck in a user. ;)'
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

