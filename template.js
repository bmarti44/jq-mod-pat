/*jslint devel: false, browser: true, maxerr: 50, indent: 4, white: true*/
/*global $: false, log: false, jQuery: false, Mustache: false, console: false, clearInterval: false, clearTimeout: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false */

/**
 *	@description
 *		This file will be a template for other a module pattern
 *	@author
 *		Brian Martin
 *	@version
 *		0.0.1
 *	@namespace
 *		GFTemplate
 */
(function ($, module) {
	'use strict';
	/**
	 * GTTemplate Class
	 */
	function Template() {
		
		if (!(this instanceof (Template))) {
			return new Template();
		}
	
		var self = this,
			initialize,
			mustacheTemplate;
		
		/**
		 *	@description
		 *		Constructor function for GFTemplate
		 *	@private
		 *	@method
		 *	@constructor
		 *	@return
		 *		{undefined} 
		 */
		initialize = function () {
			
			module.template = {};
			mustacheTemplate = $('#template').html();
			
		};
		
		/**
		 *	@description
		 *		Public method that can be overwritten
		 *	@public
		 *	@method
		 *	@return
		 *		{{undefined}} 
		 */
		module.template.update = module.template.update || function () {
			
		};
		
		/**
		 *	@description
		 *		Public method that cannot be overwritten
		 *	@private
		 *	@method
		 *	@static
		 *	@return
		 *		{{undefined}}
		 */
		module.template.write = module.template.write || function () {
			
		};
		
		try {
			
			initialize();
			return module;
			
		} catch (exception) {
			
			console.log(exception);
			
		}
		
	}
	
	/**
	 *	@description
	 *		Driver for the GFTemplate class
	 */
	$(document).on('gameflash', function (event) {
				
		try {	
				
			if (!window.gameflash.clsTemplate) {
							
				window.gameflash.clsTemplate = new Template();
				
			}
			
			window.gameflash.clsTemplate.update();
		
		} catch (exception) {
			
			console.log(exception);
			
		}
			
	});

}(jQuery, window.extend = window.extend || {}));