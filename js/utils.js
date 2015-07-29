/*global $ */
/*jshint unused:false */
var app = app || {};

$(function () {
    'use strict';

    app.ParseUtils = {
        initParse: function(Parse) {
            console.log("init...")
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