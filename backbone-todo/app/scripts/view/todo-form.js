var Backbone = require('backbone');
module.exports = Backbone.View.extend({
    initialize: function() {
    },
    events: {
        'click .button': 'addTodo'
    },
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    addTodo: function() {
        this.collection.create({
            id: 'id',
            task: 'task',
            deadline: 'deadline'
        });
    }
});
