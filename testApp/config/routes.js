/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 */

module.exports.routes = {
  '/': {
    view: 'homepage'
  },
  '/signup': {
    view: 'signup'
  },
  '/login': {
    view: 'login'
  }
};
