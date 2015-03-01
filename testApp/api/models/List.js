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
        id: {
            type: 'int',
            primaryKey: true,
            required: true
        },
        title: {
                type: 'string',
                required: true
        },
        description: {
            type: 'string',
            required: true
        },
        // userId: {
        //     model: 'User',
        //     required: true
        // },
        active: {
            type: 'int',
            defaultsTo: true
        }
    }
};
