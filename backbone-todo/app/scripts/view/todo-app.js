var Backbone = require('backbone');
var TodoList = require('../view/todo-list.js');
module.exports = Backbone.View.extend({
    initialize: function() {
        this.todoList = new TodoList();
        this.todoList.render();
    }
});
