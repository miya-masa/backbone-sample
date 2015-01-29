var Backbone = require('backbone');
var TodoModel = require('../todo/model');
module.exports = Backbone.Collection.extend({
    model: TodoModel,
});
