/*jslint devel: false, browser: true, maxerr: 50, indent: 4, white: true*/
/*global GFTabs: false, GFFeeds: false, GF_STATICS: false, clsExtensions: false, $: false, GF_PATH: false, GF_ID: false, gfTools: false, log: false, SILoader: false, jQuery: false, GFState: false, Mustache: false, console: false, controller: false, clearInterval: false, clearTimeout: false, document: false, event: false, frames: false, history: false, Image: false, location: false, name: false, navigator: false, Option: false, parent: false, screen: false, setInterval: false, setTimeout: false, window: false, XMLHttpRequest: false */

/**
 *	@description
 *		This file will be a template for other files for the gameflash project
 *	@author
 *		Brian Martin
 *	@version
 *		0.0.1
 *	@namespace
 *		GFTemplate
 */
(function ($) {
	'use strict';
	/**
	 * GTTemplate Class
	 */
	function GFTemplate() {
		
		if (!(this instanceof (GFTemplate))) {
			return new GFTemplate();
		}
	
		var self = this,
			initialize,
			data = controller.loader.getData(),
			template = $('#template').html();
		
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
			
		};
		
		/**
		 *	@description
		 *		Public method that can be overwritten
		 *	@public
		 *	@method
		 *	@return
		 *		{{undefined}} 
		 */
		this.update = function () {
			
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
		this.write = function () {
			
		};
		
		try {
			
			initialize();
			
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
							
				window.gameflash.clsTemplate = new GFTemplate();
				
			}
			
			window.gameflash.clsTemplate.update();
		
		} catch (exception) {
			
			console.log(exception);
			
		}
			
	});

}(jQuery));