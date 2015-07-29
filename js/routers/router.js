/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	var AppRouter = Backbone.Router.extend({

		initialize: function() {
			// setup Parse
			// Comment in these lines if you wish to use Parse
			//Parse.initialize("APPLICATION_ID", "JAVASCRIPT_KEY");
            //
			//var TestObject = Parse.Object.extend("TestObject");
			//var testObject = new TestObject();
			//testObject.save({foo: "bar"}, {
			//	success: function(object) {
			//		$(".success").show();
			//	},
			//	error: function(model, error) {
			//		$(".error").show();
			//	}
			//});
		},

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
