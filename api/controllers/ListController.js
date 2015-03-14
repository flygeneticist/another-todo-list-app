/**
 * ListsController
 *
 * @description :: Server-side logic for managing Lists
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
/**
   * `ListsController.index()`
   */
  index: function (req, res) {
    return res.forbidden();
  },
/**
   * `ListsController.create()`
   */
  create: function (req, res) {;
    var title = req.param("title");
    User.findOneByEmail(req.param("userId"), function (err, usr) {
      if (err) {
        res.serverError("Database error.");
      } else {
        if (usr) {
          var user = usr;

          List.create({title: title, user: user}, function (error, lists) {
            if (error) {
              res.serverError("Database error.");
            } else {
              res.redirect(307, '/');
            }
          });
        } else {
          res.view('main/login', {error: "You must be logged in to create a list!"})
        }
      }
    });
  },
/**
   * `ListsController.show()`
   */
  show: function (req, res) {
    return res.forbidden();
  },
/**
   * `ListsController.edit()`
   */
  edit: function (req, res) {
    return res.forbidden();
  },
/**
   * `ListsController.delete()`
   */
  delete: function (req, res) {
    var id = req.param('id');
    List.delete({where: {id: id}}, function(err, suc){
      if (err) {
        res.serverError("Database Error");
      }
      res.redirect(307, '/');
    });
  }
};
