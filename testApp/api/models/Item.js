/**
* Item.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    tableName: 'items',
    attributes: {
        id: {
            type:'int',
            primaryKey: true,
            required: true
        },
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string'
        },
        list: {
            model: 'List',
            required: true
        },
        dueDate: {
            type:'datetime'
        },
        complete: {
            type:'boolean',
            defaultsTo: false
        },
        active: {
            type:'boolean',
            defaultsTo: true
        }
    }
};
