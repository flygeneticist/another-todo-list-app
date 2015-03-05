/**
* Item.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    tableName: 'items',
    attributes: {
        title: {
            type: 'string',
            required: true
        },
        listId: {
            model: 'List',
            required: true
        },
        dueDate: {
            type:'datetime',
            defaultsTo: null
        },
        complete: {
            type:'boolean',
            defaultsTo: false,
        }
    }
};

