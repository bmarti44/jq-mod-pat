/*jslint devel: false, browser: true, maxerr: 50, indent: 4, white: true*/
/*global $: false, log: false, jQuery: false, Mustache: false, console: false, clearInterval: false, clearTimeout: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false */

// only use /* */ for function header commenting. NEVER use it to comment out code!!!!!
// thanks Douglas Crockford!

/**
 *	@description
 *		This file will be a template for other a module pattern
 *	@author
 *		Brian Martin
 *	@version
 *		1.0.0
 *	@namespace
 *		Item
 */
(function ($, module, Mustache) {
	'use strict'; // always put use strict at the top of the closure
	
	var clsItem;
	
	// Template Class
	
	function Item() {
		// if someone tries to call this without using the new operator, it will force using the new operator
		// thanks john resig!
		if (!(this instanceof (Item))) {
			return new Item();
		}
		
		// define all your variables here!
		var initialize,
			data,
			template,
			id;
		
		// never make a varialbe pulbic, make a public getter or setter function!
		
		/**
		 *	@description
		 *		Constructor function for Template object. Set all your variables here!
		 *	@private
		 *	@method
		 *	@constructor
		 *	@return
		 *		{undefined} 
		 */
		initialize = function () {
			
			id = '#todo-list';
			data = {};
			template = $('#mustache-item').html(); // keep your HTML and JavaScript separate! Completely!
			
		};
		
		// define the item namespace
		module.item = {};
		
		/**
		 *	@description
		 *		Public method that writes out the mustache template using the current data model
		 *	@public
		 *	@method
		 *	@return
		 *		{{undefined}} 
		 */
		module.item.write = function () {
			
			$(id).html(Mustache.to_html(template, data));
			
		};
		
		/**
		 *	@description
		 *		Public method used to reset the data model
		 *	@public
		 *	@method
		 *	@static
		 *	@return
		 *		{{undefined}}
		 */
		module.item.setDataModel = function (incomingData) {
			
			data = incomingData;
			
		};
		
		/**
		 *	@description
		 *		Public method used to get the current data model
		 *	@public
		 *	@method
		 *	@static
		 *	@return
		 *		{{undefined}}
		 */
		module.item.getDataModel = function () {
			
			return data;
			
		};
		
		try {
			
			initialize();
			return module;
			
		} catch (exception) {
			// don't use console.log()! this will break browser's that don't have a console.
			// thanks Paul Irish!
			log(exception);
			
		}
		
	}
	
	/**
	 *	@description
	 *		Driver for the Template class. Always put this after your class definition!
	 *		This sets a custom event listener on the document.
	 */
	function onCompile (event) {
		try {			
				
			clsItem = new Item();
			
		} catch (exception) {
			// don't use console.log()! This will break browser's that don't have console.
			// thanks Paul Irish!
			log(exception);
		}
	}
	
	$(document).on('compile', onCompile);
		
}(jQuery, window.EXTEND = window.EXTEND || {}, Mustache));