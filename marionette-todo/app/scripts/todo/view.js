var Backbone = require('backbone');
var $ = Backbone.$ = require('jquery');
var TodoModel = require('../todo/model');
module.exports = Backbone.View.extend({
    template: $('#todo-template');
    events: {
            'click #deleteTodo': 'deleteTodo'
        },
        initialize: function() {
            this.listenTo(this.model, "add", this.render)
            this.input = $('#todo-input');
        },
        deleteTodo: function() {
            var todoModel = new TodoModel({
                todo: this.input.val(),
                done: false
            });
            this.model.add(todoModel);
        },
        render: function() {
          this.el 
        }
});
