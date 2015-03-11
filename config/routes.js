/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 */

module.exports.routes = {
  '/': {controller: 'main', action: 'index'},
  'get /signup': {controller: 'main', action: 'signup'},
  'post /signup': {controller: 'user', action: 'create'},
  'get /login': {view: 'main/login'},
  'post /login': {controller: 'main', action: 'login'}
};
