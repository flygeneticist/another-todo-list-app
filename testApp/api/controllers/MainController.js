/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function (req, res) {
        res.view('hompage');
    },
    login: function (req, res) {
        res.view('login');
    },
    signup: function (req, res) {
        res.view('signup');
    }
};
