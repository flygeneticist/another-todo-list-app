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
    var user = User.findOneByEmail(req.param("userId"), function (err, usr) {
                    if (err) {
                      res.serverError("Database error.");
                    } else {
                        if (usr) {
                            // done
                        }
                    }
                });

    List.create({title: title, user: user}, function (error, lists) {
      if (error) {
        res.serverError("Database write error.");
      } else {
        res.redirect(307, '/');
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

