var Backbone = require('backbone');
var $ = Backbone.$ = require('jquery');
var TodoModel = require('../todo/model');
module.exports = Backbone.View.extend({
    el: $('#todo-app'),
    events: {
        'click #todo-create': 'createTodo'
    },
    initialize: function() {
        this.listenTo(this.model, "add", this.render)
        this.input = $('#todo-input');
    },
    createTodo: function() {
        var todoModel = new TodoModel({
            todo: this.input.val(),
            done: false
        });
        this.model.add(todoModel);
    },
    render: function() {
        console.log(this.model.toJSON());
    }
});
