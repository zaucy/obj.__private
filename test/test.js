var __private = require("../src/main.js");
var assert = require("chai").assert;

describe("__private.definePrivateObject()", function() {
	
	var obj = {};
	
	it("should define __private as a Symbol", function() {
		__private.definePrivateObject(obj);
		
		assert.isDefined(obj.__private);
	});
	
});

describe("__private()", function() {
	
	var obj = {};
	__private.definePrivateObject(obj);
	
	it("should be able to access private members", function() {
		__private(obj).test = "hello!";
		
		assert.equal("hello!", __private(obj).test);
	});
	
	it("shouldn't be able to access private members with another require()", function() {
		var __private = require("../src/main.js");
		
		assert.isUndefined(__private(obj));
	});
	
})
