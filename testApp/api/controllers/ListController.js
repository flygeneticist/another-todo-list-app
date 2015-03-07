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
    var title = req.param("title");
    var userId = req.param("userId");
    List.create({title: title, user: userId}, function (error, lst) {
      if (error) {
        res.send(500, {error: "Database creation error.", msg: error});
      } else {
        res.send(200, {list: lst});
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

