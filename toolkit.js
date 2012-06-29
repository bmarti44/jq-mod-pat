/*jslint devel: false, browser: true, maxerr: 50, indent: 4, white: true*/
/*global $: false, log: false, jQuery: false, Mustache: false, console: false, clearInterval: false, clearTimeout: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false */

/*
 * This closure will create all of the helper methods and
 * setup any prototypes we want.
 */
(function() {
	'use strict';
	
	if (typeof(Object.method) === 'undefined') {
		// the object method, slight twist from Douglas Crockford
		Object.prototype.method = function (name, func) {
		    this.prototype[name] = func;
		    return this;
		};
		
	}
	
	if (typeof(String.isNumeric) === 'undefined') { // if .isNumeric is not prototyped into String
		
		String.method('isNumeric', function() {
			return (!isNaN(parseFloat(this)) && isFinite(this));
		});
		
	}

	if (typeof(Array.remove) === 'undefined') {
		// Array Remove - By John Resig (MIT Licensed)
		Array.method('remove', function(from, to) {
			var rest = this.slice((to || from) + 1 || this.length);
			this.length = from < 0 ? this.length + from : from;
			return this.push.apply(this, rest);
		});
		
	}

	/* 
	 * log() - courtesy of Paul Irish, with proper line-number reporting by Brian Martin
	 * FYI, line number reporting only works in Firefox and Chrome
	 */
		
	window.log = window.log || function () {	
		
		if (typeof(window.console) !== 'undefined') {
			
			try {
				
				var errorLog,
					stack = [];	
				// if your browser supports stack tracing, then 
				errorLog = new Error();
				
				console.log(Array.prototype.slice.call(arguments));
				
				if (typeof(errorLog.stack) !== 'undefined') {
					
					if (errorLog.stack.indexOf('@') >= 0) {
						stack = errorLog.stack.split('@');
					}
					
					if (!stack.length) {
						
						stack = errorLog.stack.split('\n');
						
					}
					
					console.log(stack[stack.length - (stack.length - 2)]);
				}
			
			} catch (exception) {				
				
			}
			
		}
		
	};
	
	
}());
