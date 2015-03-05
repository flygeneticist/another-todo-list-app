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
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },
/**
   * `ListsController.create()`
   */
  create: function (req, res) {
    var title = req.param("title");
    var userId = req.param("userId");

    List.findOneByTitle(title, function (err, list) {
      if (err) {
        res.send(500, { error: "Database look-up error." });
      } else if (list) {
        res.send(400, {error: "A list with that title already exists."});
      } else {
        List.create({title: title, user: userId}, function (error, lst) {
          if (error) {
            res.send(500, {error: "Database creation error.",
                           msg: error}
            );
          } else {
            res.send(200, {new_list: lst});
          }
        });
      }
    });
  },
/**
   * `ListsController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },
/**
   * `ListsController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },
/**
   * `ListsController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

