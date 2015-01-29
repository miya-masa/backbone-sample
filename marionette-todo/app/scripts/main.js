'use strict';
var Backbone = require('backbone');
var $ = window.jQuery = Backbone.$ = require('jquery');
var bootstrap = require('bootstrap');
var TodoApp = require('./todo/app');
var TodoList = require('./todo/list');
var todos = new TodoList();
var view = new TodoApp({
    model: todos
});
