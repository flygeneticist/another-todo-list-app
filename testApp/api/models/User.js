/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');

module.exports = {
    tableName: 'users',
    autoCreatedAt: true,
    autoUpdatedAt: true,
    attributes: {
        email: {
            type: 'string',
            unique: true,
            primaryKey: true,
            required: true
        },
        password: {
            type: 'string',
            required: true
        },
        active: {
            type: 'boolean',
            defaultsTo: true
        }
    },

    // Lifecycle Callbacks
    beforeCreate: function(values, next) {
        bcrypt.hash(values.password, 10, function(err, hash) {
          if (err) return next(err);
          values.password = hash;
          next();
        });
    }
};
