/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    // Project Model
    // ----------

    //app.Project = Backbone.Model.extend({
    app.Food = Parse.Object.extend("TestObject", {
        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: {
            title: '',
            description: ''
        }
    });
})();
