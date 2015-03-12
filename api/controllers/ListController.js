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
  create: function (req, res) {
    console.log("Creating method entered");
    var title = req.param("title");
    console.log("Title: "+title);
    var userId = req.param("userId");
    console.log("user ID: "+userId);
    List.create({title: title, user: userId}, function (error, lists) {
      if (error) {
        res.serverError("Database write error.");
      } else {
        res.redirct(307, '/', {list: lists});
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
    return res.forbidden();
  }
};

