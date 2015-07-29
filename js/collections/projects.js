/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    // Project Collection
    // ---------------

    // The collection of todos is backed by *localStorage* instead of a remote
    // server.
    var Projects = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: app.Project,

        // Save all of the todo items under the `"todos"` namespace.
        localStorage: new Backbone.LocalStorage('project-backbone'),

        // Filter down the list of all todo items that are finished.
        // TODO - Remove cause not necessary
        completed: function () {
            return this.where({completed: true});
        },

        // Filter down the list to only todo items that are still not finished.
        // TODO - Remove cause not necessary
        remaining: function () {
            return this.where({completed: false});
        },

        // We keep the Todos in sequential order, despite being saved by unordered
        // GUID in the database. This generates the next order number for new items.
        nextOrder: function () {
            return this.length ? this.last().get('order') + 1 : 1;
        },

        // Todos are sorted by their original insertion order.
        comparator: 'order'
    });

    // Create our global collection of **Todos**.
    app.projects = new Projects();
})();
