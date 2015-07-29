/*global Backbone */
var app = app || {};

(function () {
	'use strict';

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
