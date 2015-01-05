var Backbone = require('backbone');
module.exports = Backbone.View.extend({
    template: _.template('<tr><td>1</td><td>task</td><td>‚µ‚ß‚«‚è</td><td><button type="button" class="btn btn-danger">íœ</button></td></tr>'),
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
