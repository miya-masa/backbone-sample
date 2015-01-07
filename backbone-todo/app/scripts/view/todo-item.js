var Backbone = require('backbone');
Backbone.$ = require('jquery');
module.exports = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    template: _.template($('#tmpl-todo-item').html()),
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
