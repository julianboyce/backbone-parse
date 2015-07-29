/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	//var TodoRouter = Backbone.Router.extend({
	//	routes: {
	//		'*filter': 'setFilter'
	//	},
    //
	//	setFilter: function (param) {
	//		// Set the current filter to be used
	//		app.TodoFilter = param || '';
    //
	//		// Trigger a collection filter event, causing hiding/unhiding
	//		// of Todo view items
	//		app.todos.trigger('filter');
	//	}
	//});
    //
	//app.TodoRouter = new TodoRouter();
	//Backbone.history.start();

	var AppRouter = Backbone.Router.extend({
		routes: {
			'list-foods': 'listFoods',
			'list-drinks': 'listDrinks'
		},

		listFoods: function() {
            new app.FoodsView()
		},

		listDrinks: function() {
            new app.DrinksView()
        }
	});

	app.AppRouter = new AppRouter();
	Backbone.history.start();
})();
