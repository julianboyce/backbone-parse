/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function () {
    'use strict';

    // kick things off by creating the `App`
    // new app.ProjectView();
    app.ParseUtils = {
        initParse: function() {
            Parse.initialize("APPLICATION_ID", "JAVASCRIPT_KEY");

            var TestObject = Parse.Object.extend("TestObject");
            var testObject = new TestObject();
            testObject.save({foo: "bar"}, {
                success: function(object) {
                    $(".success").show();
                },
                error: function(model, error) {
                    $(".error").show();
                }
            });
        }
    }

});