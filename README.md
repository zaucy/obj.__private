Define private members with `obj.__private`. See example below to see how it works.

## Example

Define your class with a private member.
```JavaScript
var __private = require("obj.__private");

function MyClass() {
	__private.definePrivateObject(this);

	__private(this).privateNumber = 42;
}

MyClass.prototype.coolFunction = function() {
	__private(this).privateNumber *= 2;
	return __private(this).privateNumber;
};
```

Later in another .js file
```JavaScript
var a = new MyClass;
a.privateNumber; // undefined

a.coolFunction() // 84

// If you try to access it with your own __private module
// You cant.

var __private = require("obj.__private");

__private(a).privateNumber; // Uncaught ReferenceError
__private(a); // undefined

```

The idea is to define all methods that can access your private members in one .js file. Everytime you do `require("obj.__private")` it creates a unique namespace for your private members.
