var Backbone = require('backbone');
module.exports = Backbone.View.extend({
    template: _.template('<tr><td>1</td><td>task</td><td>���߂���</td><td><button type="button" class="btn btn-danger">�폜</button></td></tr>'),
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
