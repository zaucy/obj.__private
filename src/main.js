"use strict";

var __private = {};

Object.defineProperty(module, "exports", {

	get: function() {
		var __private = {};

		var __privateFn = function(obj) {
			return __private[obj.__private];
		};

		__privateFn.definePrivateObject = function(obj) {
			var __privateSymbol = Symbol();

			__private[__privateSymbol] = {};

			Object.defineProperty(obj, "__private", {
				value: __privateSymbol,
				configurable: false,
				enumerable: false,
				writeable: false
			});
		};

		return __privateFn;
	}

});
