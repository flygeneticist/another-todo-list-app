/**
* Lists.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    tableName: 'lists',
    autoCreatedAt: true,
    autoUpdatedAt: true,
    attributes: {
        title: {
            type: 'string',
            required: true
        },
        user: {
            model: 'User'
        },
        items: {
            collection: 'Item',
            via: 'list',
            defaultsTo: []
        }
    }
};
