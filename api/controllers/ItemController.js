/**
 * ItemController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
/**
   * `ItemsController.index()`
   */
  index: function (req, res) {
    return res.forbidden();
  },
/**
   * `ItemsController.create()`
   */
  create: function (req, res) {
    var title = req.param("title");
    var listId = req.param("listId");

    Item.create({ title: title, listId: listId}, function (error, item) {
      if (error) {
        res.send(500, {error: "Database creation error.",
                       msg: error}
        );
      } else {
        res.send(200, {new_item: item});
      }
    });
  },
/**
   * `ItemsController.show()`
   */
  show: function (req, res) {
    return res.forbidden();
  },
/**
   * `ItemsController.edit()`
   */
  edit: function (req, res) {
    return res.forbidden();
  },
/**
   * `ItemsController.delete()`
   */
  delete: function (req, res) {
    return res.forbidden();
  }
};

