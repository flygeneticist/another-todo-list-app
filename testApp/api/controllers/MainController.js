/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function (req, res) {
        res.view('main/index', {
            user: null,
            lists: [
                {id: 1,
                 title:"Daily Tasks List",
                 items: [
                    {id: 1, title: "Wash the car", description:"", list: 1, dueDate: "03/01/2015", complete: false},
                    {id: 2, title: "Buy food for dinner", description:"", list: 1, dueDate: "03/02/2015", complete: true},
                    {id: 3, title: "Finsh To-Do List App", description:"", list: 1, dueDate: "03/06/2015", complete: false}
                    ]
                },
                {id: 2,
                 title:"Long Term Goals",
                 items: []
                }
            ]
        });
    },
    login: function (req, res) {
        if (req.method == "POST") {
            var email = req.param("email");
            var password = req.param("password");

            User.findByEmail(email).done(function (err, usr) {
                if (err) {
                    res.send(500, { error: "Database error." });
                } else {
                    if (usr) {
                        var hasher = require("password-hash");
                        if (hasher.verify(password, usr.password)) {
                            req.session.user = usr;
                            res.send(usr);
                        }
                        else {
                            res.send(400, { error: "Email / password combination is not correct." });
                        }
                    }
                }
            });
        }
        else {
            res.view();
        }
    },
    signup: function (req, res) {
        if (req.method == "POST") {
            var email = req.param("email");
            var password = req.param("password");
            var passwordConfirm = req.param("passwordConfirm");

            User.findByEmail(email).done(function (err, usr) {
                if (err) {
                    res.send(500, { error: "Database Error." });
                } else if (usr) {
                    res.send(400, {error: "Email is already taken."});
                } else {
                    var hasher = require("password-hash");
                    password = hasher.generate(password);

                    User.create({email: email, password: password, dateCreated: Date.now(), active: true}).done(function (error, user) {
                        if (error) {
                            res.send(500, {error: "Database Error."});
                        } else {
                            req.session.user = user;
                            res.send(user);
                        }
                    });
                }
            });
        } else {
            res.view();
        }
    }
}
