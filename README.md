Module Pattern with Inheritance
================================================
* Brian Martin
* https://twitter.com/bmarti44
* Public Domain
* 2012-06-29

What is it?
-----------
So what does Module Pattern with Inheritance even mean?
On a recent project for Sports Illustrated we were looking for a way to
handle a lot of moving parts in our JavaScript application. Different solutions came to mind
such as BackBone.js and Angular.js but those solutions ended up not being flexible enough for what we needed.
With this solution we were able to tap into jQuery's custom event system to control the flow of the program and execute
state changes and actions across all classes. Combining this with Douglas Crockford's Module Pattern
and templating (Mustache.js) we've been able to create some very maintainable code.

template.js
----------
This file is a template for what each module should look like. This file is heavily commented and
will give recommendations for how to write each new module.

Examples
--------
To create a private function, first declare it with all your other variables. Then:

		myPrivateFunction = function () {
			// do some stuff, privately
		}; // don't forget the semicolon!

To create a public function that overwrites inheritance from other modules:

		module.currentNameSpace.myFunctionCannotBeOverwritten = function () {
			// do some stuff, publicly
		}; // don't forget the semicolon!
		
To create a public function that can be overwritten by other modules: 

		module.currentNameSpace.maybeOverwriteMe = module.currentNameSpace.maybeOverwriteMe || function () {
			// do some stuff, publicly (maybe)
		}; // don't forget the semicolon!

Compatibility
-------------
1. Requires [jQuery 1.7](http://docs.jquery.com/Downloading_jQuery "jQuery") newer
2. Requires [Mustache.js](https://github.com/janl/mustache.js/ "Mustache.js")
 