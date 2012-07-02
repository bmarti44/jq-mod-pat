/*jslint devel: false, browser: true, maxerr: 50, indent: 4, white: true*/
/*global $: false, log: false, jQuery: false, Mustache: false, console: false, clearInterval: false, clearTimeout: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false */

// only use /* */ for function header commenting. NEVER use it to comment out code!!!!!
// thanks Douglas Crockford!

/**
 *	@description
 *		This file will control the stats output for new todos
 *	@author
 *		Brian Martin
 *	@version
 *		1.0.0
 *	@namespace
 *		Stats
 */
(function ($, module, Mustache) {
	'use strict'; // always put use strict at the top of the closure
	
	var clsStats;
	
	// Template Class
	
	function Stats() {
		// if someone tries to call this without using the new operator, it will force using the new operator
		// thanks john resig!
		if (!(this instanceof (Stats))) {
			return new Stats();
		}
		
		// define all your variables here!
		var initialize,
			generateModal,
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
			
			id = 'footer';
			data = {};
			template = $('#mustache-stats').html(); // keep your HTML and JavaScript separate! Completely!
			module.stats.update();
			
		};
		
		generateModal = function (text) {
			
		};
		
		// define the stats namespace
		module.stats = module.stats || {};
		
		/**
		 *	@description
		 *		Public method that writes out the mustache template using the current data model
		 *	@public
		 *	@method
		 *	@return
		 *		{{undefined}} 
		 */
		module.stats.write = function () {
			
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
		module.stats.setDataModel = function (incomingData) {
			
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
		module.stats.getDataModel = function () {
			
			return data;
			
		};
		
		module.stats.update = function () {
			var totalTodos,
				completedTodos,
				remainingTodos;
				
			totalTodos = module.stats.total();
			completedTodos = module.stats.completed();
			remainingTodos = totalTodos - completedTodos;
			
			if (totalTodos > 0) {
				$('footer').show();
			} else {
				$('footer').hide();
				return false;
			}
			
			data = {
				'totalRemaining': remainingTodos,
				'remainingPlural': remainingTodos > 1 ? 's' : ''
			};
			
			if (completedTodos !== 0) {
				data.completed = {
					'totalCompleted': completedTodos,
					'completedPlural': completedTodos > 1 ? 's' : ''
				};
			} else {
				delete data.completed;
			}
			
			module.stats.write();
		};
		
		module.stats.insert = function (event) {
			
			if (event.keyCode === 13) {
				
				module.stats.update();
				
			}
			
		};
		
		module.stats.completed = function () {
			var todos = $.jStorage.get('todos', {}),
				i,
				count = 0;
			
			if ($.isArray(todos.items)) {
				
				for (i = 0; i < todos.items.length; i += 1) {
					
					if (todos.items[i].done) {
						count += 1;
					}
					
				}
				
			}
			
			return count;
			
		};
		
		module.stats.total = function () {
			var todos = $.jStorage.get('todos', {});
			
			if ($.isArray(todos.items)) {
				return todos.items.length;
			}
			
			return 0;
			
		};
		
		module.stats.clearCompleted = function (event) {
			var todos,
				i;
					
			todos = $.jStorage.get('todos', {});
									
			for (i = 0; i < todos.items.length; i += 1) {
				
				if (todos.items[i].done === true) {
					todos.items.remove(i, i);
					i -= 1;
				}
				
			}
			
			$.jStorage.set('todos', todos);
			
			module.item.update();
			module.stats.update();
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
	 *		Driver for the Stats class. Always put this after your class definition!
	 *		This sets a custom event listener on the document.
	 */
	function onCompile (event) {
		try {
				
			if (!module.stats) {
				
				clsStats = new Stats();
				$('#new-todo').on('keypress', module.stats.insert);
				$('footer').on('click', '#clear-completed', module.stats.clearCompleted);
				
			}
					
		} catch (exception) {
			// don't use console.log()! This will break browser's that don't have console.
			// thanks Paul Irish!
			log(exception);			
		}
	}
	
	$(document).on('compile', onCompile);
		
}(jQuery, window.EXTEND = window.EXTEND || {}, Mustache));