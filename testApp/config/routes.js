/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 */

module.exports.routes = {
  '/': {
    controller: 'main',
    action: 'index'
  },
  '/signup': {
    controller: 'main',
    action: 'signup'
  },
  '/login': {
    controller: 'main',
    action: 'login'
  }
};
