var Backbone = require('backbone');
var TodoModel = require('../view/todo-view.js');
Backbone.$ = require('jquery');
module.exports = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.collection, 'add', addTodo);
        this.render();
    },
    render: function() {
        this.collection.each(function(todo) {
            this.appendTodo(todo);
        });
        return this;
    },
    appendTodo: function(todo) {
        this.$el.append(new TodoView({
            model: todo
        }).el);
    }
});
