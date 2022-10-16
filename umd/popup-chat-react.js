/*!
 * popup-chat-react v1.0.5 - https://github.com/asliddinusmonov/popup-chat-react
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["liveChat"] = factory(require("react"));
	else
		root["liveChat"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(29)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Linkify = __webpack_require__(16);

var _Linkify2 = _interopRequireDefault(_Linkify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Linkify2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

;(function() {

	var root = this;
	var previous_emoji = root.EmojiConvertor;


	/**
	 * @global
	 * @namespace
	 */

	var emoji = function(){

		var self = this;

		/**
		 * The set of images to use for graphical emoji.
		 *
		 * @memberof emoji
		 * @type {string}
		 */
		self.img_set = 'apple';

		/**
		 * Configuration details for different image sets. This includes a path to a directory containing the
		 * individual images (`path`) and a URL to sprite sheets (`sheet`). All of these images can be found
		 * in the [emoji-data repository]{@link https://github.com/iamcal/emoji-data}. Using a CDN for these
		 * is not a bad idea.
		 *
		 * @memberof emoji
		 * @type {object}
		 */
		self.img_sets = {
			'apple' : {'path' : '/emoji-data/img-apple-64/', 'sheet' : '/emoji-data/sheet_apple_64.png', 'sheet_size' : 64, 'mask' : 1},
			'google' : {'path' : '/emoji-data/img-google-64/', 'sheet' : '/emoji-data/sheet_google_64.png', 'sheet_size' : 64, 'mask' : 2},
			'twitter' : {'path' : '/emoji-data/img-twitter-64/', 'sheet' : '/emoji-data/sheet_twitter_64.png', 'sheet_size' : 64, 'mask' : 4},
			'facebook' : {'path' : '/emoji-data/img-facebook-64/', 'sheet' : '/emoji-data/sheet_facebook_64.png', 'sheet_size' : 64, 'mask' : 8},
			'messenger' : {'path' : '/emoji-data/img-messenger-64/', 'sheet' : '/emoji-data/sheet_messenger_64.png', 'sheet_size' : 64, 'mask' : 16},
		};

		/**
		 * Use a CSS class instead of specifying a sprite or background image for
		 * the span representing the emoticon. This requires a CSS sheet with
		 * emoticon data-uris.
		 *
		 * @memberof emoji
		 * @type bool
		 * @todo document how to build the CSS stylesheet self requires.
		 */
		self.use_css_imgs = false;

		/**
		 * Instead of replacing emoticons with the appropriate representations,
		 * replace them with their colon string representation.
		 * @memberof emoji
		 * @type bool
		 */
		self.colons_mode = false;
		self.text_mode = false;

		/**
		 * If true, sets the "title" property on the span or image that gets
		 * inserted for the emoticon.
		 * @memberof emoji
		 * @type bool
		 */
		self.include_title = false;

		/**
		 * If true, sets the text of the span or image that gets inserted for the
		 * emoticon.
		 * @memberof emoji
		 * @type bool
		 */
		self.include_text = false;

		/**
		 * If the platform supports native emoticons, use those instead
		 * of the fallbacks.
		 * @memberof emoji
		 * @type bool
		 */
		self.allow_native = true;

		/**
		 * Wrap native with a <span class="emoji-native"></span> to allow styling
		 * @memberof emoji
		 * @type bool
		 */
		self.wrap_native = false;

		/**
		 * Set to true to use CSS sprites instead of individual images on
		 * platforms that support it.
		 *
		 * @memberof emoji
		 * @type bool
		 */
		self.use_sheet = false;

		/**
		 *
		 * Set to true to avoid black & white native Windows emoji being used.
		 *
		 * @memberof emoji
		 * @type bool
		 */
		self.avoid_ms_emoji = true;

		/**
		 *
		 * Set to true to allow :CAPITALIZATION:
		 *
		 * @memberof emoji
		 * @type bool
		 */
		self.allow_caps = false;


		/**
		 *
		 * Suffix to allow for individual image cache busting
		 *
		 * @memberof emoji
		 * @type string
		 */
		self.img_suffix = '';


		// Keeps track of what has been initialized.
		/** @private */
		self.inits = {};
		self.map = {};

		// discover the environment settings
		self.init_env();

		return self;
	}

	emoji.prototype.noConflict = function(){
		root.EmojiConvertor = previous_emoji;
		return emoji;
	}


	/**
	 * @memberof emoji
	 * @param {string} str A string potentially containing ascii emoticons
	 * (ie. `:)`)
	 *
	 * @returns {string} A new string with all emoticons in `str`
	 * replaced by a representatation that's supported by the current
	 * environtment.
	 */
	emoji.prototype.replace_emoticons = function(str){
		var self = this;
		var colonized = self.replace_emoticons_with_colons(str);
		return self.replace_colons(colonized);
	};

	/**
	 * @memberof emoji
	 * @param {string} str A string potentially containing ascii emoticons
	 * (ie. `:)`)
	 *
	 * @returns {string} A new string with all emoticons in `str`
	 * replaced by their colon string representations (ie. `:smile:`)
	 */
	emoji.prototype.replace_emoticons_with_colons = function(str){
		var self = this;
		self.init_emoticons();
		var _prev_offset = 0;
		var emoticons_with_parens = [];
		var str_replaced = str.replace(self.rx_emoticons, function(m, $1, emoticon, offset){
			var prev_offset = _prev_offset;
			_prev_offset = offset + m.length;

			var has_open_paren = emoticon.indexOf('(') !== -1;
			var has_close_paren = emoticon.indexOf(')') !== -1;

			/*
			 * Track paren-having emoticons for fixing later
			 */
			if ((has_open_paren || has_close_paren) && emoticons_with_parens.indexOf(emoticon) == -1) {
				emoticons_with_parens.push(emoticon);
			}

			/*
			 * Look for preceding open paren for emoticons that contain a close paren
			 * This prevents matching "8)" inside "(around 7 - 8)"
			 */
			if (has_close_paren && !has_open_paren) {
				var piece = str.substring(prev_offset, offset);
				if (piece.indexOf('(') !== -1 && piece.indexOf(')') === -1) return m;
			}

			/*
			 * See if we're in a numbered list
			 * This prevents matching "8)" inside "7) foo\n8) bar"
			 */
			if (m === '\n8)') {
				var before_match = str.substring(0, offset);
				if (/\n?(6\)|7\))/.test(before_match)) return m;
			}

			var val = self.data[self.map.emoticons[emoticon]][3][0];
			return val ? $1+':'+val+':' : m;
		});

		/*
		 * Come back and fix emoticons we ignored because they were inside parens.
		 * It's useful to do self at the end so we don't get tripped up by other,
		 * normal emoticons
		 */
		if (emoticons_with_parens.length) {
			var escaped_emoticons = emoticons_with_parens.map(self.escape_rx);
			var parenthetical_rx = new RegExp('(\\(.+)('+escaped_emoticons.join('|')+')(.+\\))', 'g');

			str_replaced = str_replaced.replace(parenthetical_rx, function(m, $1, emoticon, $2) {
				var val = self.data[self.map.emoticons[emoticon]][3][0];
				return val ? $1+':'+val+':'+$2 : m;
			});
		}

		return str_replaced;
	};

	/**
	 * @memberof emoji
	 * @param {string} str A string potentially containing colon string
	 * representations of emoticons (ie. `:smile:`)
	 *
	 * @returns {string} A new string with all colon string emoticons replaced
	 * with the appropriate representation.
	 */
	emoji.prototype.replace_colons = function(str){
		var self = this;
		self.init_colons();

		return str.replace(self.rx_colons, function(m){
			var idx = m.substr(1, m.length-2);
			if (self.allow_caps) idx = idx.toLowerCase();

			// special case - an emoji with a skintone modified
			if (idx.indexOf('::skin-tone-') > -1){

				var skin_tone = idx.substr(-1, 1);
				var skin_idx = 'skin-tone-'+skin_tone;
				var skin_val = self.map.colons[skin_idx];

				idx = idx.substr(0, idx.length - 13);

				var val = self.map.colons[idx];
				if (val){
					return self.replacement(val, idx, ':', {
						'idx'		: skin_val,
						'actual'	: skin_idx,
						'wrapper'	: ':'
					});
				}else{
					return ':' + idx + ':' + self.replacement(skin_val, skin_idx, ':');
				}
			}else{
				var val = self.map.colons[idx];
				return val ? self.replacement(val, idx, ':') : m;
			}
		});
	};

	/**
	 * @memberof emoji
	 * @param {string} str A string potentially containing unified unicode
	 * emoticons. (ie. 😄)
	 *
	 * @returns {string} A new string with all unicode emoticons replaced with
	 * the appropriate representation for the current environment.
	 */
	emoji.prototype.replace_unified = function(str){
		var self = this;
		self.init_unified();
		return str.replace(self.rx_unified, function(m, p1, p2){

			var val = self.map.unified[p1];
			if (val){
				var idx = null;
				if (p2 == '\uD83C\uDFFB') idx = '1f3fb';
				if (p2 == '\uD83C\uDFFC') idx = '1f3fc';
				if (p2 == '\uD83C\uDFFD') idx = '1f3fd';
				if (p2 == '\uD83C\uDFFE') idx = '1f3fe';
				if (p2 == '\uD83C\uDFFF') idx = '1f3ff';
				if (idx){
					return self.replacement(val, null, null, {
						idx	: idx,
						actual	: p2,
						wrapper	: ''
					});
					}
				return self.replacement(val);
			}

			val = self.map.unified_vars[p1];
			if (val){
				return self.replacement(val[0], null, null, {
					'idx'		: val[1],
					'actual'	: '',
					'wrapper'	: '',
				});
			}

			return m;
		});
	};

	emoji.prototype.addAliases = function(map){
		var self = this;

		self.init_colons();
		for (var i in map){
			self.map.colons[i] = map[i];
		}
	};

	emoji.prototype.removeAliases = function(list){
		var self = this;

		for (var i=0; i<list.length; i++){
			var alias = list[i];

			// first, delete the alias mapping
			delete self.map.colons[alias];

			// now reset it to the default, if one exists
			finder_block: {
				for (var j in self.data){
					for (var k=0; k<self.data[j][3].length; k++){
						if (alias == self.data[j][3][k]){
							self.map.colons[alias] = j;
							break finder_block;
						}
					}
				}
			}
		}
	};


	// Does the actual replacement of a character with the appropriate
	/** @private */
	emoji.prototype.replacement = function(idx, actual, wrapper, variation, is_extra){
		var self = this;

		var full_idx = idx;

		// for emoji with variation modifiers, set `extra` to the standalone output for the
		// modifier (used if we can't combine the glyph) and set variation_idx to key of the
		// variation modifier (used below)
		var extra = '';
		var var_idx = null;
		if (typeof variation === 'object'){
			extra = self.replacement(variation.idx, variation.actual, variation.wrapper, undefined, true);
			var_idx = variation.idx;
		}

		// deal with simple modes (colons and text) first
		wrapper = wrapper || '';
		if (self.colons_mode) return ':'+self.data[idx][3][0]+':'+extra;
		var text_name = (actual) ? wrapper+actual+wrapper : self.data[idx][8] || wrapper+self.data[idx][3][0]+wrapper;
		if (self.text_mode) return text_name + extra;

		// figure out which images and code points to use, based on the skin variations. this information is also used for
		// unified native output mode
		var img = self.find_image(idx, var_idx);

		// native modes next.
		// for variations selectors, we just need to output them raw, which `extra` will contain. since softbank and google don't
		// support skin variations, we'll keep `extra` around, every if we have a valid variation selector
		self.init_env();
		if (self.replace_mode == 'softbank' && self.allow_native && self.data[idx][1]) return self.format_native(self.data[idx][1] + extra, !is_extra);
		if (self.replace_mode == 'google'   && self.allow_native && self.data[idx][2]) return self.format_native(self.data[idx][2] + extra, !is_extra);

		// for unified (and images, below), we can use the variation info and throw away the `extra` contents
		if (img.is_var){
			extra = '';
		}
		if (self.replace_mode == 'unified' && self.allow_native) return self.format_native(img.unified + extra, !is_extra);


		// finally deal with image modes.
		// the call to .find_image() earlier checked if the image set and particular emoji supports variations,
		// otherwise we can return it as a separate image (already calculated in `extra`).
		// first we set up the params we'll use if we can't use a variation.
		var title = self.include_title ? ' title="'+(actual || self.data[idx][3][0])+'"' : '';
		var text  = self.include_text  ? wrapper+(actual || self.data[idx][3][0])+wrapper : '';

		// custom image for this glyph?
		if (self.data[idx][7]){
			img.path = self.data[idx][7];
			img.px = null;
			img.py = null;
			img.is_var = false;
		}

		// if we're displaying a variation, include it in the text
		if (img.is_var && self.include_text && variation && variation.actual && variation.wrapper) {
			text += variation.wrapper+variation.actual+variation.wrapper;
		}

		// output
		if (self.replace_mode == 'css') {
			if (self.use_sheet && img.px != null && img.py != null){
				// simplified calculation of `100 * (position * sprite_size) / ( (sheet_size * sprite_size) - sprite_size )`
				var sheet_x = 100 * img.px / (self.sheet_size - 1);
				var sheet_y = 100 * img.py / (self.sheet_size - 1);
				var sheet_sz = 100 * self.sheet_size;

				var style = 'background: url('+img.sheet+');background-position:'+(sheet_x)+'% '+(sheet_y)+'%;background-size:'+sheet_sz+'% '+sheet_sz+'%';
				return '<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="'+style+'"'+title+' data-codepoints="'+img.full_idx+'">'+text+'</span></span>'+extra;
			}else if (self.use_css_imgs){
				return '<span class="emoji emoji-'+idx+'"'+title+' data-codepoints="'+img.full_idx+'">'+text+'</span>'+extra;
			}else{
				return '<span class="emoji emoji-sizer" style="background-image:url('+img.path+')"'+title+' data-codepoints="'+img.full_idx+'">'+text+'</span>'+extra;
			}
		}
		return '<img src="'+img.path+'" class="emoji" data-codepoints="'+img.full_idx+'" '+title+'/>'+extra;
	};

	// Wraps the output of a native endpoint, if configured
	/** @private */
	emoji.prototype.format_native = function(native, allow_wrap){
		var self = this;

		if (self.wrap_native && allow_wrap){
			return '<span class="emoji-native">'+ native + '</span>';
		}
		return native;
	};

	// Finds the best image to display, taking into account image set precedence and obsoletes
	/** @private */
	emoji.prototype.find_image = function(idx, var_idx){
		var self = this;

		// set up some initial state
		var out = {
			'path'		: '',
			'sheet'		: '',
			'sheet_size'	: 0,
			'px'		: self.data[idx][4],
			'py'		: self.data[idx][5],
			'full_idx'	: idx,
			'is_var'	: false,
			'unified'	: self.data[idx][0][0]
		};
		var use_mask = self.data[idx][6];

		// can we use a variation?
		if (var_idx && self.variations_data[idx] && self.variations_data[idx][var_idx]){
			var var_data = self.variations_data[idx][var_idx];

			out.px = var_data[1];
			out.py = var_data[2];
			out.full_idx = var_data[0];
			out.is_var = true;
			out.unified = var_data[4][0];
			use_mask = var_data[3];
		}

		// this matches `build/build_image.php` `in emoji-data`, so that sheet and images modes always
		// agree about the image to use.
		var try_order = [self.img_set, 'apple', 'google', 'twitter', 'facebook', 'messenger'];

		// for each image set, see if we have the image we need. otherwise check for an obsolete in
		// that image set
		for (var j=0; j<try_order.length; j++){
			if (use_mask & self.img_sets[try_order[j]].mask){
				out.path = self.img_sets[try_order[j]].path+out.full_idx+'.png' + self.img_suffix;
				// if we're not changing glyph, use our base set for sheets - it has every glyph
				out.sheet = self.img_sets[self.img_set].sheet;
				out.sheet_size = self.img_sets[self.img_set].sheet_size;
				return out;
			}
			if (self.obsoletes_data[out.full_idx]){
				var ob_data = self.obsoletes_data[out.full_idx];

				if (ob_data[3] & self.img_sets[try_order[j]].mask){
					out.path = self.img_sets[try_order[j]].path+ob_data[0]+'.png' + self.img_suffix;
					out.sheet = self.img_sets[try_order[j]].sheet;
					out.sheet_size = self.img_sets[try_order[j]].sheet_size;
					out.px = ob_data[1];
					out.py = ob_data[2];
					return out;
				}
			}
		}

		return out;
	};

	// Initializes the text emoticon data
	/** @private */
	emoji.prototype.init_emoticons = function(){
		var self = this;
		if (self.inits.emoticons) return;
		self.init_colons(); // we require this for the emoticons map
		self.inits.emoticons = 1;

		var a = [];
		self.map.emoticons = {};
		for (var i in self.emoticons_data){
			// because we never see some characters in our text except as entities, we must do some replacing
			var emoticon = i.replace(/\&/g, '&amp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;');

			if (!self.map.colons[self.emoticons_data[i]]) continue;

			self.map.emoticons[emoticon] = self.map.colons[self.emoticons_data[i]];
			a.push(self.escape_rx(emoticon));
		}
		self.rx_emoticons = new RegExp(('(^|\\s)('+a.join('|')+')(?=$|[\\s|\\?\\.,!])'), 'g');
	};

	// Initializes the colon string data
	/** @private */
	emoji.prototype.init_colons = function(){
		var self = this;
		if (self.inits.colons) return;
		self.inits.colons = 1;
		self.rx_colons = new RegExp('\:[a-zA-Z0-9-_+]+\:(\:skin-tone-[2-6]\:)?', 'g');
		self.map.colons = {};
		for (var i in self.data){
			for (var j=0; j<self.data[i][3].length; j++){
				self.map.colons[self.data[i][3][j]] = i;
			}
		}
	};

	// initializes the unified unicode emoticon data
	/** @private */
	emoji.prototype.init_unified = function(){
		var self = this;
		if (self.inits.unified) return;
		self.inits.unified = 1;

		var a = [];
		self.map.unified = {};
		self.map.unified_vars = {};

		for (var i in self.data){
			for (var j=0; j<self.data[i][0].length; j++){
				a.push(self.data[i][0][j].replace('*', '\\*'));
				self.map.unified[self.data[i][0][j]] = i;
			}
		}
		for (var i in self.variations_data){
			// skip simple append-style skin tones
			if (self.variations_data[i]['1f3fb']){
				if (self.variations_data[i]['1f3fb'][0] == i+'-1f3fb') continue;
			}

			for (var k in self.variations_data[i]){
				for (var j=0; j<self.variations_data[i][k][4].length; j++){
					a.push(self.variations_data[i][k][4][j].replace('*', '\\*'));
					self.map.unified_vars[self.variations_data[i][k][4][j]] = [i, k];
				}
			}
		}

		a = a.sort(function(a,b){
			 return b.length - a.length;
		});

		self.rx_unified = new RegExp('('+a.join('|')+')(\uD83C[\uDFFB-\uDFFF])?', "g");
	};

	// initializes the environment, figuring out what representation
	// of emoticons is best.
	/** @private */
	emoji.prototype.init_env = function(){
		var self = this;
		if (self.inits.env) return;
		self.inits.env = 1;
		self.replace_mode = 'img';
		var supports_css = false;
		if (typeof(navigator) !== 'undefined') {
			var ua = navigator.userAgent;
			if (typeof window !== 'undefined' && window.getComputedStyle){
				try {
					var st = window.getComputedStyle(document.body);
					if (st['background-size'] || st['backgroundSize']){
						supports_css = true;
					}
				} catch(e){
					// Swallow an exception caused by hidden iFrames on Firefox
					// https://github.com/iamcal/js-emoji/issues/73
					if (ua.match(/Firefox/i)){
						supports_css = true;
					}
				}
			}
			if (navigator.product.match(/ReactNative/i)){
				self.replace_mode = 'unified';
				return;
			}
			if (ua.match(/(iPhone|iPod|iPad|iPhone\s+Simulator)/i)){
				if (ua.match(/OS\s+[12345]/i)){
					self.replace_mode = 'softbank';
					return;
				}
				if (ua.match(/OS\s+[6789]/i)){
					self.replace_mode = 'unified';
					return;
				}
			}
			if (ua.match(/Mac OS X (10[._ ](?:[789]|1)|11[._ ]\d)/i)){
				self.replace_mode = 'unified';
				return;
			}
			if (!self.avoid_ms_emoji){
				if (ua.match(/Windows NT 6.[1-9]/i) || ua.match(/Windows NT 10.[0-9]/i)){
					if (!ua.match(/Chrome/i) && !ua.match(/MSIE 8/i)){
						self.replace_mode = 'unified';
						return;
					}
				}
			}
		}

		// Need a better way to detect android devices that actually
		// support emoji.
		if (false){}
		if (supports_css){
			self.replace_mode = 'css';
			return;
		}
		// nothing fancy detected - use images
	};
	/** @private */
	emoji.prototype.escape_rx = function(text){
		return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	};
	emoji.prototype.sheet_size = 60;
	/** @private */
	emoji.prototype.data = {
		"0023-fe0f-20e3":[["\u0023\uFE0F\u20E3","\u0023\u20E3"],"\uE210","\uDBBA\uDC2C",["hash"],0,0,7,0],
		"002a-fe0f-20e3":[["\u002A\uFE0F\u20E3","\u002A\u20E3"],"","",["keycap_star"],0,1,7,0],
		"0030-fe0f-20e3":[["\u0030\uFE0F\u20E3","\u0030\u20E3"],"\uE225","\uDBBA\uDC37",["zero"],0,2,7,0],
		"0031-fe0f-20e3":[["\u0031\uFE0F\u20E3","\u0031\u20E3"],"\uE21C","\uDBBA\uDC2E",["one"],0,3,7,0],
		"0032-fe0f-20e3":[["\u0032\uFE0F\u20E3","\u0032\u20E3"],"\uE21D","\uDBBA\uDC2F",["two"],0,4,7,0],
		"0033-fe0f-20e3":[["\u0033\uFE0F\u20E3","\u0033\u20E3"],"\uE21E","\uDBBA\uDC30",["three"],0,5,7,0],
		"0034-fe0f-20e3":[["\u0034\uFE0F\u20E3","\u0034\u20E3"],"\uE21F","\uDBBA\uDC31",["four"],0,6,7,0],
		"0035-fe0f-20e3":[["\u0035\uFE0F\u20E3","\u0035\u20E3"],"\uE220","\uDBBA\uDC32",["five"],0,7,7,0],
		"0036-fe0f-20e3":[["\u0036\uFE0F\u20E3","\u0036\u20E3"],"\uE221","\uDBBA\uDC33",["six"],0,8,7,0],
		"0037-fe0f-20e3":[["\u0037\uFE0F\u20E3","\u0037\u20E3"],"\uE222","\uDBBA\uDC34",["seven"],0,9,7,0],
		"0038-fe0f-20e3":[["\u0038\uFE0F\u20E3","\u0038\u20E3"],"\uE223","\uDBBA\uDC35",["eight"],0,10,7,0],
		"0039-fe0f-20e3":[["\u0039\uFE0F\u20E3","\u0039\u20E3"],"\uE224","\uDBBA\uDC36",["nine"],0,11,7,0],
		"00a9-fe0f":[["\u00A9\uFE0F","\u00A9"],"\uE24E","\uDBBA\uDF29",["copyright"],0,12,7,0],
		"00ae-fe0f":[["\u00AE\uFE0F","\u00AE"],"\uE24F","\uDBBA\uDF2D",["registered"],0,13,7,0],
		"1f004":[["\uD83C\uDC04"],"\uE12D","\uDBBA\uDC0B",["mahjong"],0,14,15,0],
		"1f0cf":[["\uD83C\uDCCF"],"","\uDBBA\uDC12",["black_joker"],0,15,15,0],
		"1f170-fe0f":[["\uD83C\uDD70\uFE0F","\uD83C\uDD70"],"\uE532","\uDBB9\uDD0B",["a"],0,16,15,0],
		"1f171-fe0f":[["\uD83C\uDD71\uFE0F","\uD83C\uDD71"],"\uE533","\uDBB9\uDD0C",["b"],0,17,15,0],
		"1f17e-fe0f":[["\uD83C\uDD7E\uFE0F","\uD83C\uDD7E"],"\uE535","\uDBB9\uDD0E",["o2"],0,18,15,0],
		"1f17f-fe0f":[["\uD83C\uDD7F\uFE0F","\uD83C\uDD7F"],"\uE14F","\uDBB9\uDFF6",["parking"],0,19,15,0],
		"1f18e":[["\uD83C\uDD8E"],"\uE534","\uDBB9\uDD0D",["ab"],0,20,15,0],
		"1f191":[["\uD83C\uDD91"],"","\uDBBA\uDF84",["cl"],0,21,15,0],
		"1f192":[["\uD83C\uDD92"],"\uE214","\uDBBA\uDF38",["cool"],0,22,15,0],
		"1f193":[["\uD83C\uDD93"],"","\uDBBA\uDF21",["free"],0,23,15,0],
		"1f194":[["\uD83C\uDD94"],"\uE229","\uDBBA\uDF81",["id"],0,24,15,0],
		"1f195":[["\uD83C\uDD95"],"\uE212","\uDBBA\uDF36",["new"],0,25,15,0],
		"1f196":[["\uD83C\uDD96"],"","\uDBBA\uDF28",["ng"],0,26,15,0],
		"1f197":[["\uD83C\uDD97"],"\uE24D","\uDBBA\uDF27",["ok"],0,27,15,0],
		"1f198":[["\uD83C\uDD98"],"","\uDBBA\uDF4F",["sos"],0,28,15,0],
		"1f199":[["\uD83C\uDD99"],"\uE213","\uDBBA\uDF37",["up"],0,29,15,0],
		"1f19a":[["\uD83C\uDD9A"],"\uE12E","\uDBBA\uDF32",["vs"],0,30,15,0],
		"1f1e6-1f1e8":[["\uD83C\uDDE6\uD83C\uDDE8"],"","",["flag-ac"],0,31,15,0],
		"1f1e6-1f1e9":[["\uD83C\uDDE6\uD83C\uDDE9"],"","",["flag-ad"],0,32,15,0],
		"1f1e6-1f1ea":[["\uD83C\uDDE6\uD83C\uDDEA"],"","",["flag-ae"],0,33,15,0],
		"1f1e6-1f1eb":[["\uD83C\uDDE6\uD83C\uDDEB"],"","",["flag-af"],0,34,15,0],
		"1f1e6-1f1ec":[["\uD83C\uDDE6\uD83C\uDDEC"],"","",["flag-ag"],0,35,15,0],
		"1f1e6-1f1ee":[["\uD83C\uDDE6\uD83C\uDDEE"],"","",["flag-ai"],0,36,15,0],
		"1f1e6-1f1f1":[["\uD83C\uDDE6\uD83C\uDDF1"],"","",["flag-al"],0,37,15,0],
		"1f1e6-1f1f2":[["\uD83C\uDDE6\uD83C\uDDF2"],"","",["flag-am"],0,38,15,0],
		"1f1e6-1f1f4":[["\uD83C\uDDE6\uD83C\uDDF4"],"","",["flag-ao"],0,39,15,0],
		"1f1e6-1f1f6":[["\uD83C\uDDE6\uD83C\uDDF6"],"","",["flag-aq"],0,40,15,0],
		"1f1e6-1f1f7":[["\uD83C\uDDE6\uD83C\uDDF7"],"","",["flag-ar"],0,41,15,0],
		"1f1e6-1f1f8":[["\uD83C\uDDE6\uD83C\uDDF8"],"","",["flag-as"],0,42,15,0],
		"1f1e6-1f1f9":[["\uD83C\uDDE6\uD83C\uDDF9"],"","",["flag-at"],0,43,15,0],
		"1f1e6-1f1fa":[["\uD83C\uDDE6\uD83C\uDDFA"],"","",["flag-au"],0,44,15,0],
		"1f1e6-1f1fc":[["\uD83C\uDDE6\uD83C\uDDFC"],"","",["flag-aw"],0,45,15,0],
		"1f1e6-1f1fd":[["\uD83C\uDDE6\uD83C\uDDFD"],"","",["flag-ax"],0,46,15,0],
		"1f1e6-1f1ff":[["\uD83C\uDDE6\uD83C\uDDFF"],"","",["flag-az"],0,47,15,0],
		"1f1e7-1f1e6":[["\uD83C\uDDE7\uD83C\uDDE6"],"","",["flag-ba"],0,48,15,0],
		"1f1e7-1f1e7":[["\uD83C\uDDE7\uD83C\uDDE7"],"","",["flag-bb"],0,49,15,0],
		"1f1e7-1f1e9":[["\uD83C\uDDE7\uD83C\uDDE9"],"","",["flag-bd"],0,50,15,0],
		"1f1e7-1f1ea":[["\uD83C\uDDE7\uD83C\uDDEA"],"","",["flag-be"],0,51,15,0],
		"1f1e7-1f1eb":[["\uD83C\uDDE7\uD83C\uDDEB"],"","",["flag-bf"],0,52,15,0],
		"1f1e7-1f1ec":[["\uD83C\uDDE7\uD83C\uDDEC"],"","",["flag-bg"],0,53,15,0],
		"1f1e7-1f1ed":[["\uD83C\uDDE7\uD83C\uDDED"],"","",["flag-bh"],0,54,15,0],
		"1f1e7-1f1ee":[["\uD83C\uDDE7\uD83C\uDDEE"],"","",["flag-bi"],0,55,15,0],
		"1f1e7-1f1ef":[["\uD83C\uDDE7\uD83C\uDDEF"],"","",["flag-bj"],0,56,15,0],
		"1f1e7-1f1f1":[["\uD83C\uDDE7\uD83C\uDDF1"],"","",["flag-bl"],0,57,15,0],
		"1f1e7-1f1f2":[["\uD83C\uDDE7\uD83C\uDDF2"],"","",["flag-bm"],0,58,15,0],
		"1f1e7-1f1f3":[["\uD83C\uDDE7\uD83C\uDDF3"],"","",["flag-bn"],0,59,15,0],
		"1f1e7-1f1f4":[["\uD83C\uDDE7\uD83C\uDDF4"],"","",["flag-bo"],1,0,15,0],
		"1f1e7-1f1f6":[["\uD83C\uDDE7\uD83C\uDDF6"],"","",["flag-bq"],1,1,15,0],
		"1f1e7-1f1f7":[["\uD83C\uDDE7\uD83C\uDDF7"],"","",["flag-br"],1,2,15,0],
		"1f1e7-1f1f8":[["\uD83C\uDDE7\uD83C\uDDF8"],"","",["flag-bs"],1,3,15,0],
		"1f1e7-1f1f9":[["\uD83C\uDDE7\uD83C\uDDF9"],"","",["flag-bt"],1,4,15,0],
		"1f1e7-1f1fb":[["\uD83C\uDDE7\uD83C\uDDFB"],"","",["flag-bv"],1,5,15,0],
		"1f1e7-1f1fc":[["\uD83C\uDDE7\uD83C\uDDFC"],"","",["flag-bw"],1,6,15,0],
		"1f1e7-1f1fe":[["\uD83C\uDDE7\uD83C\uDDFE"],"","",["flag-by"],1,7,15,0],
		"1f1e7-1f1ff":[["\uD83C\uDDE7\uD83C\uDDFF"],"","",["flag-bz"],1,8,15,0],
		"1f1e8-1f1e6":[["\uD83C\uDDE8\uD83C\uDDE6"],"","",["flag-ca"],1,9,15,0],
		"1f1e8-1f1e8":[["\uD83C\uDDE8\uD83C\uDDE8"],"","",["flag-cc"],1,10,15,0],
		"1f1e8-1f1e9":[["\uD83C\uDDE8\uD83C\uDDE9"],"","",["flag-cd"],1,11,15,0],
		"1f1e8-1f1eb":[["\uD83C\uDDE8\uD83C\uDDEB"],"","",["flag-cf"],1,12,15,0],
		"1f1e8-1f1ec":[["\uD83C\uDDE8\uD83C\uDDEC"],"","",["flag-cg"],1,13,15,0],
		"1f1e8-1f1ed":[["\uD83C\uDDE8\uD83C\uDDED"],"","",["flag-ch"],1,14,15,0],
		"1f1e8-1f1ee":[["\uD83C\uDDE8\uD83C\uDDEE"],"","",["flag-ci"],1,15,15,0],
		"1f1e8-1f1f0":[["\uD83C\uDDE8\uD83C\uDDF0"],"","",["flag-ck"],1,16,15,0],
		"1f1e8-1f1f1":[["\uD83C\uDDE8\uD83C\uDDF1"],"","",["flag-cl"],1,17,15,0],
		"1f1e8-1f1f2":[["\uD83C\uDDE8\uD83C\uDDF2"],"","",["flag-cm"],1,18,15,0],
		"1f1e8-1f1f3":[["\uD83C\uDDE8\uD83C\uDDF3"],"\uE513","\uDBB9\uDCED",["cn","flag-cn"],1,19,15,0],
		"1f1e8-1f1f4":[["\uD83C\uDDE8\uD83C\uDDF4"],"","",["flag-co"],1,20,15,0],
		"1f1e8-1f1f5":[["\uD83C\uDDE8\uD83C\uDDF5"],"","",["flag-cp"],1,21,15,0],
		"1f1e8-1f1f7":[["\uD83C\uDDE8\uD83C\uDDF7"],"","",["flag-cr"],1,22,15,0],
		"1f1e8-1f1fa":[["\uD83C\uDDE8\uD83C\uDDFA"],"","",["flag-cu"],1,23,15,0],
		"1f1e8-1f1fb":[["\uD83C\uDDE8\uD83C\uDDFB"],"","",["flag-cv"],1,24,15,0],
		"1f1e8-1f1fc":[["\uD83C\uDDE8\uD83C\uDDFC"],"","",["flag-cw"],1,25,15,0],
		"1f1e8-1f1fd":[["\uD83C\uDDE8\uD83C\uDDFD"],"","",["flag-cx"],1,26,15,0],
		"1f1e8-1f1fe":[["\uD83C\uDDE8\uD83C\uDDFE"],"","",["flag-cy"],1,27,15,0],
		"1f1e8-1f1ff":[["\uD83C\uDDE8\uD83C\uDDFF"],"","",["flag-cz"],1,28,15,0],
		"1f1e9-1f1ea":[["\uD83C\uDDE9\uD83C\uDDEA"],"\uE50E","\uDBB9\uDCE8",["de","flag-de"],1,29,15,0],
		"1f1e9-1f1ec":[["\uD83C\uDDE9\uD83C\uDDEC"],"","",["flag-dg"],1,30,15,0],
		"1f1e9-1f1ef":[["\uD83C\uDDE9\uD83C\uDDEF"],"","",["flag-dj"],1,31,15,0],
		"1f1e9-1f1f0":[["\uD83C\uDDE9\uD83C\uDDF0"],"","",["flag-dk"],1,32,15,0],
		"1f1e9-1f1f2":[["\uD83C\uDDE9\uD83C\uDDF2"],"","",["flag-dm"],1,33,15,0],
		"1f1e9-1f1f4":[["\uD83C\uDDE9\uD83C\uDDF4"],"","",["flag-do"],1,34,15,0],
		"1f1e9-1f1ff":[["\uD83C\uDDE9\uD83C\uDDFF"],"","",["flag-dz"],1,35,15,0],
		"1f1ea-1f1e6":[["\uD83C\uDDEA\uD83C\uDDE6"],"","",["flag-ea"],1,36,15,0],
		"1f1ea-1f1e8":[["\uD83C\uDDEA\uD83C\uDDE8"],"","",["flag-ec"],1,37,15,0],
		"1f1ea-1f1ea":[["\uD83C\uDDEA\uD83C\uDDEA"],"","",["flag-ee"],1,38,15,0],
		"1f1ea-1f1ec":[["\uD83C\uDDEA\uD83C\uDDEC"],"","",["flag-eg"],1,39,15,0],
		"1f1ea-1f1ed":[["\uD83C\uDDEA\uD83C\uDDED"],"","",["flag-eh"],1,40,15,0],
		"1f1ea-1f1f7":[["\uD83C\uDDEA\uD83C\uDDF7"],"","",["flag-er"],1,41,15,0],
		"1f1ea-1f1f8":[["\uD83C\uDDEA\uD83C\uDDF8"],"\uE511","\uDBB9\uDCEB",["es","flag-es"],1,42,15,0],
		"1f1ea-1f1f9":[["\uD83C\uDDEA\uD83C\uDDF9"],"","",["flag-et"],1,43,15,0],
		"1f1ea-1f1fa":[["\uD83C\uDDEA\uD83C\uDDFA"],"","",["flag-eu"],1,44,15,0],
		"1f1eb-1f1ee":[["\uD83C\uDDEB\uD83C\uDDEE"],"","",["flag-fi"],1,45,15,0],
		"1f1eb-1f1ef":[["\uD83C\uDDEB\uD83C\uDDEF"],"","",["flag-fj"],1,46,15,0],
		"1f1eb-1f1f0":[["\uD83C\uDDEB\uD83C\uDDF0"],"","",["flag-fk"],1,47,15,0],
		"1f1eb-1f1f2":[["\uD83C\uDDEB\uD83C\uDDF2"],"","",["flag-fm"],1,48,15,0],
		"1f1eb-1f1f4":[["\uD83C\uDDEB\uD83C\uDDF4"],"","",["flag-fo"],1,49,15,0],
		"1f1eb-1f1f7":[["\uD83C\uDDEB\uD83C\uDDF7"],"\uE50D","\uDBB9\uDCE7",["fr","flag-fr"],1,50,15,0],
		"1f1ec-1f1e6":[["\uD83C\uDDEC\uD83C\uDDE6"],"","",["flag-ga"],1,51,15,0],
		"1f1ec-1f1e7":[["\uD83C\uDDEC\uD83C\uDDE7"],"\uE510","\uDBB9\uDCEA",["gb","uk","flag-gb"],1,52,15,0],
		"1f1ec-1f1e9":[["\uD83C\uDDEC\uD83C\uDDE9"],"","",["flag-gd"],1,53,15,0],
		"1f1ec-1f1ea":[["\uD83C\uDDEC\uD83C\uDDEA"],"","",["flag-ge"],1,54,15,0],
		"1f1ec-1f1eb":[["\uD83C\uDDEC\uD83C\uDDEB"],"","",["flag-gf"],1,55,15,0],
		"1f1ec-1f1ec":[["\uD83C\uDDEC\uD83C\uDDEC"],"","",["flag-gg"],1,56,15,0],
		"1f1ec-1f1ed":[["\uD83C\uDDEC\uD83C\uDDED"],"","",["flag-gh"],1,57,15,0],
		"1f1ec-1f1ee":[["\uD83C\uDDEC\uD83C\uDDEE"],"","",["flag-gi"],1,58,15,0],
		"1f1ec-1f1f1":[["\uD83C\uDDEC\uD83C\uDDF1"],"","",["flag-gl"],1,59,15,0],
		"1f1ec-1f1f2":[["\uD83C\uDDEC\uD83C\uDDF2"],"","",["flag-gm"],2,0,15,0],
		"1f1ec-1f1f3":[["\uD83C\uDDEC\uD83C\uDDF3"],"","",["flag-gn"],2,1,15,0],
		"1f1ec-1f1f5":[["\uD83C\uDDEC\uD83C\uDDF5"],"","",["flag-gp"],2,2,15,0],
		"1f1ec-1f1f6":[["\uD83C\uDDEC\uD83C\uDDF6"],"","",["flag-gq"],2,3,15,0],
		"1f1ec-1f1f7":[["\uD83C\uDDEC\uD83C\uDDF7"],"","",["flag-gr"],2,4,15,0],
		"1f1ec-1f1f8":[["\uD83C\uDDEC\uD83C\uDDF8"],"","",["flag-gs"],2,5,15,0],
		"1f1ec-1f1f9":[["\uD83C\uDDEC\uD83C\uDDF9"],"","",["flag-gt"],2,6,15,0],
		"1f1ec-1f1fa":[["\uD83C\uDDEC\uD83C\uDDFA"],"","",["flag-gu"],2,7,15,0],
		"1f1ec-1f1fc":[["\uD83C\uDDEC\uD83C\uDDFC"],"","",["flag-gw"],2,8,15,0],
		"1f1ec-1f1fe":[["\uD83C\uDDEC\uD83C\uDDFE"],"","",["flag-gy"],2,9,15,0],
		"1f1ed-1f1f0":[["\uD83C\uDDED\uD83C\uDDF0"],"","",["flag-hk"],2,10,15,0],
		"1f1ed-1f1f2":[["\uD83C\uDDED\uD83C\uDDF2"],"","",["flag-hm"],2,11,15,0],
		"1f1ed-1f1f3":[["\uD83C\uDDED\uD83C\uDDF3"],"","",["flag-hn"],2,12,15,0],
		"1f1ed-1f1f7":[["\uD83C\uDDED\uD83C\uDDF7"],"","",["flag-hr"],2,13,15,0],
		"1f1ed-1f1f9":[["\uD83C\uDDED\uD83C\uDDF9"],"","",["flag-ht"],2,14,15,0],
		"1f1ed-1f1fa":[["\uD83C\uDDED\uD83C\uDDFA"],"","",["flag-hu"],2,15,15,0],
		"1f1ee-1f1e8":[["\uD83C\uDDEE\uD83C\uDDE8"],"","",["flag-ic"],2,16,15,0],
		"1f1ee-1f1e9":[["\uD83C\uDDEE\uD83C\uDDE9"],"","",["flag-id"],2,17,15,0],
		"1f1ee-1f1ea":[["\uD83C\uDDEE\uD83C\uDDEA"],"","",["flag-ie"],2,18,15,0],
		"1f1ee-1f1f1":[["\uD83C\uDDEE\uD83C\uDDF1"],"","",["flag-il"],2,19,15,0],
		"1f1ee-1f1f2":[["\uD83C\uDDEE\uD83C\uDDF2"],"","",["flag-im"],2,20,15,0],
		"1f1ee-1f1f3":[["\uD83C\uDDEE\uD83C\uDDF3"],"","",["flag-in"],2,21,15,0],
		"1f1ee-1f1f4":[["\uD83C\uDDEE\uD83C\uDDF4"],"","",["flag-io"],2,22,15,0],
		"1f1ee-1f1f6":[["\uD83C\uDDEE\uD83C\uDDF6"],"","",["flag-iq"],2,23,15,0],
		"1f1ee-1f1f7":[["\uD83C\uDDEE\uD83C\uDDF7"],"","",["flag-ir"],2,24,15,0],
		"1f1ee-1f1f8":[["\uD83C\uDDEE\uD83C\uDDF8"],"","",["flag-is"],2,25,15,0],
		"1f1ee-1f1f9":[["\uD83C\uDDEE\uD83C\uDDF9"],"\uE50F","\uDBB9\uDCE9",["it","flag-it"],2,26,15,0],
		"1f1ef-1f1ea":[["\uD83C\uDDEF\uD83C\uDDEA"],"","",["flag-je"],2,27,15,0],
		"1f1ef-1f1f2":[["\uD83C\uDDEF\uD83C\uDDF2"],"","",["flag-jm"],2,28,15,0],
		"1f1ef-1f1f4":[["\uD83C\uDDEF\uD83C\uDDF4"],"","",["flag-jo"],2,29,15,0],
		"1f1ef-1f1f5":[["\uD83C\uDDEF\uD83C\uDDF5"],"\uE50B","\uDBB9\uDCE5",["jp","flag-jp"],2,30,15,0],
		"1f1f0-1f1ea":[["\uD83C\uDDF0\uD83C\uDDEA"],"","",["flag-ke"],2,31,15,0],
		"1f1f0-1f1ec":[["\uD83C\uDDF0\uD83C\uDDEC"],"","",["flag-kg"],2,32,15,0],
		"1f1f0-1f1ed":[["\uD83C\uDDF0\uD83C\uDDED"],"","",["flag-kh"],2,33,15,0],
		"1f1f0-1f1ee":[["\uD83C\uDDF0\uD83C\uDDEE"],"","",["flag-ki"],2,34,15,0],
		"1f1f0-1f1f2":[["\uD83C\uDDF0\uD83C\uDDF2"],"","",["flag-km"],2,35,15,0],
		"1f1f0-1f1f3":[["\uD83C\uDDF0\uD83C\uDDF3"],"","",["flag-kn"],2,36,15,0],
		"1f1f0-1f1f5":[["\uD83C\uDDF0\uD83C\uDDF5"],"","",["flag-kp"],2,37,15,0],
		"1f1f0-1f1f7":[["\uD83C\uDDF0\uD83C\uDDF7"],"\uE514","\uDBB9\uDCEE",["kr","flag-kr"],2,38,15,0],
		"1f1f0-1f1fc":[["\uD83C\uDDF0\uD83C\uDDFC"],"","",["flag-kw"],2,39,15,0],
		"1f1f0-1f1fe":[["\uD83C\uDDF0\uD83C\uDDFE"],"","",["flag-ky"],2,40,15,0],
		"1f1f0-1f1ff":[["\uD83C\uDDF0\uD83C\uDDFF"],"","",["flag-kz"],2,41,15,0],
		"1f1f1-1f1e6":[["\uD83C\uDDF1\uD83C\uDDE6"],"","",["flag-la"],2,42,15,0],
		"1f1f1-1f1e7":[["\uD83C\uDDF1\uD83C\uDDE7"],"","",["flag-lb"],2,43,15,0],
		"1f1f1-1f1e8":[["\uD83C\uDDF1\uD83C\uDDE8"],"","",["flag-lc"],2,44,15,0],
		"1f1f1-1f1ee":[["\uD83C\uDDF1\uD83C\uDDEE"],"","",["flag-li"],2,45,15,0],
		"1f1f1-1f1f0":[["\uD83C\uDDF1\uD83C\uDDF0"],"","",["flag-lk"],2,46,15,0],
		"1f1f1-1f1f7":[["\uD83C\uDDF1\uD83C\uDDF7"],"","",["flag-lr"],2,47,15,0],
		"1f1f1-1f1f8":[["\uD83C\uDDF1\uD83C\uDDF8"],"","",["flag-ls"],2,48,15,0],
		"1f1f1-1f1f9":[["\uD83C\uDDF1\uD83C\uDDF9"],"","",["flag-lt"],2,49,15,0],
		"1f1f1-1f1fa":[["\uD83C\uDDF1\uD83C\uDDFA"],"","",["flag-lu"],2,50,15,0],
		"1f1f1-1f1fb":[["\uD83C\uDDF1\uD83C\uDDFB"],"","",["flag-lv"],2,51,15,0],
		"1f1f1-1f1fe":[["\uD83C\uDDF1\uD83C\uDDFE"],"","",["flag-ly"],2,52,15,0],
		"1f1f2-1f1e6":[["\uD83C\uDDF2\uD83C\uDDE6"],"","",["flag-ma"],2,53,15,0],
		"1f1f2-1f1e8":[["\uD83C\uDDF2\uD83C\uDDE8"],"","",["flag-mc"],2,54,15,0],
		"1f1f2-1f1e9":[["\uD83C\uDDF2\uD83C\uDDE9"],"","",["flag-md"],2,55,15,0],
		"1f1f2-1f1ea":[["\uD83C\uDDF2\uD83C\uDDEA"],"","",["flag-me"],2,56,15,0],
		"1f1f2-1f1eb":[["\uD83C\uDDF2\uD83C\uDDEB"],"","",["flag-mf"],2,57,15,0],
		"1f1f2-1f1ec":[["\uD83C\uDDF2\uD83C\uDDEC"],"","",["flag-mg"],2,58,15,0],
		"1f1f2-1f1ed":[["\uD83C\uDDF2\uD83C\uDDED"],"","",["flag-mh"],2,59,15,0],
		"1f1f2-1f1f0":[["\uD83C\uDDF2\uD83C\uDDF0"],"","",["flag-mk"],3,0,15,0],
		"1f1f2-1f1f1":[["\uD83C\uDDF2\uD83C\uDDF1"],"","",["flag-ml"],3,1,15,0],
		"1f1f2-1f1f2":[["\uD83C\uDDF2\uD83C\uDDF2"],"","",["flag-mm"],3,2,15,0],
		"1f1f2-1f1f3":[["\uD83C\uDDF2\uD83C\uDDF3"],"","",["flag-mn"],3,3,15,0],
		"1f1f2-1f1f4":[["\uD83C\uDDF2\uD83C\uDDF4"],"","",["flag-mo"],3,4,15,0],
		"1f1f2-1f1f5":[["\uD83C\uDDF2\uD83C\uDDF5"],"","",["flag-mp"],3,5,15,0],
		"1f1f2-1f1f6":[["\uD83C\uDDF2\uD83C\uDDF6"],"","",["flag-mq"],3,6,15,0],
		"1f1f2-1f1f7":[["\uD83C\uDDF2\uD83C\uDDF7"],"","",["flag-mr"],3,7,15,0],
		"1f1f2-1f1f8":[["\uD83C\uDDF2\uD83C\uDDF8"],"","",["flag-ms"],3,8,15,0],
		"1f1f2-1f1f9":[["\uD83C\uDDF2\uD83C\uDDF9"],"","",["flag-mt"],3,9,15,0],
		"1f1f2-1f1fa":[["\uD83C\uDDF2\uD83C\uDDFA"],"","",["flag-mu"],3,10,15,0],
		"1f1f2-1f1fb":[["\uD83C\uDDF2\uD83C\uDDFB"],"","",["flag-mv"],3,11,15,0],
		"1f1f2-1f1fc":[["\uD83C\uDDF2\uD83C\uDDFC"],"","",["flag-mw"],3,12,15,0],
		"1f1f2-1f1fd":[["\uD83C\uDDF2\uD83C\uDDFD"],"","",["flag-mx"],3,13,15,0],
		"1f1f2-1f1fe":[["\uD83C\uDDF2\uD83C\uDDFE"],"","",["flag-my"],3,14,15,0],
		"1f1f2-1f1ff":[["\uD83C\uDDF2\uD83C\uDDFF"],"","",["flag-mz"],3,15,15,0],
		"1f1f3-1f1e6":[["\uD83C\uDDF3\uD83C\uDDE6"],"","",["flag-na"],3,16,15,0],
		"1f1f3-1f1e8":[["\uD83C\uDDF3\uD83C\uDDE8"],"","",["flag-nc"],3,17,15,0],
		"1f1f3-1f1ea":[["\uD83C\uDDF3\uD83C\uDDEA"],"","",["flag-ne"],3,18,15,0],
		"1f1f3-1f1eb":[["\uD83C\uDDF3\uD83C\uDDEB"],"","",["flag-nf"],3,19,15,0],
		"1f1f3-1f1ec":[["\uD83C\uDDF3\uD83C\uDDEC"],"","",["flag-ng"],3,20,15,0],
		"1f1f3-1f1ee":[["\uD83C\uDDF3\uD83C\uDDEE"],"","",["flag-ni"],3,21,15,0],
		"1f1f3-1f1f1":[["\uD83C\uDDF3\uD83C\uDDF1"],"","",["flag-nl"],3,22,15,0],
		"1f1f3-1f1f4":[["\uD83C\uDDF3\uD83C\uDDF4"],"","",["flag-no"],3,23,15,0],
		"1f1f3-1f1f5":[["\uD83C\uDDF3\uD83C\uDDF5"],"","",["flag-np"],3,24,15,0],
		"1f1f3-1f1f7":[["\uD83C\uDDF3\uD83C\uDDF7"],"","",["flag-nr"],3,25,15,0],
		"1f1f3-1f1fa":[["\uD83C\uDDF3\uD83C\uDDFA"],"","",["flag-nu"],3,26,15,0],
		"1f1f3-1f1ff":[["\uD83C\uDDF3\uD83C\uDDFF"],"","",["flag-nz"],3,27,15,0],
		"1f1f4-1f1f2":[["\uD83C\uDDF4\uD83C\uDDF2"],"","",["flag-om"],3,28,15,0],
		"1f1f5-1f1e6":[["\uD83C\uDDF5\uD83C\uDDE6"],"","",["flag-pa"],3,29,15,0],
		"1f1f5-1f1ea":[["\uD83C\uDDF5\uD83C\uDDEA"],"","",["flag-pe"],3,30,15,0],
		"1f1f5-1f1eb":[["\uD83C\uDDF5\uD83C\uDDEB"],"","",["flag-pf"],3,31,15,0],
		"1f1f5-1f1ec":[["\uD83C\uDDF5\uD83C\uDDEC"],"","",["flag-pg"],3,32,15,0],
		"1f1f5-1f1ed":[["\uD83C\uDDF5\uD83C\uDDED"],"","",["flag-ph"],3,33,15,0],
		"1f1f5-1f1f0":[["\uD83C\uDDF5\uD83C\uDDF0"],"","",["flag-pk"],3,34,15,0],
		"1f1f5-1f1f1":[["\uD83C\uDDF5\uD83C\uDDF1"],"","",["flag-pl"],3,35,15,0],
		"1f1f5-1f1f2":[["\uD83C\uDDF5\uD83C\uDDF2"],"","",["flag-pm"],3,36,15,0],
		"1f1f5-1f1f3":[["\uD83C\uDDF5\uD83C\uDDF3"],"","",["flag-pn"],3,37,15,0],
		"1f1f5-1f1f7":[["\uD83C\uDDF5\uD83C\uDDF7"],"","",["flag-pr"],3,38,15,0],
		"1f1f5-1f1f8":[["\uD83C\uDDF5\uD83C\uDDF8"],"","",["flag-ps"],3,39,15,0],
		"1f1f5-1f1f9":[["\uD83C\uDDF5\uD83C\uDDF9"],"","",["flag-pt"],3,40,15,0],
		"1f1f5-1f1fc":[["\uD83C\uDDF5\uD83C\uDDFC"],"","",["flag-pw"],3,41,15,0],
		"1f1f5-1f1fe":[["\uD83C\uDDF5\uD83C\uDDFE"],"","",["flag-py"],3,42,15,0],
		"1f1f6-1f1e6":[["\uD83C\uDDF6\uD83C\uDDE6"],"","",["flag-qa"],3,43,15,0],
		"1f1f7-1f1ea":[["\uD83C\uDDF7\uD83C\uDDEA"],"","",["flag-re"],3,44,15,0],
		"1f1f7-1f1f4":[["\uD83C\uDDF7\uD83C\uDDF4"],"","",["flag-ro"],3,45,15,0],
		"1f1f7-1f1f8":[["\uD83C\uDDF7\uD83C\uDDF8"],"","",["flag-rs"],3,46,15,0],
		"1f1f7-1f1fa":[["\uD83C\uDDF7\uD83C\uDDFA"],"\uE512","\uDBB9\uDCEC",["ru","flag-ru"],3,47,15,0],
		"1f1f7-1f1fc":[["\uD83C\uDDF7\uD83C\uDDFC"],"","",["flag-rw"],3,48,15,0],
		"1f1f8-1f1e6":[["\uD83C\uDDF8\uD83C\uDDE6"],"","",["flag-sa"],3,49,15,0],
		"1f1f8-1f1e7":[["\uD83C\uDDF8\uD83C\uDDE7"],"","",["flag-sb"],3,50,15,0],
		"1f1f8-1f1e8":[["\uD83C\uDDF8\uD83C\uDDE8"],"","",["flag-sc"],3,51,15,0],
		"1f1f8-1f1e9":[["\uD83C\uDDF8\uD83C\uDDE9"],"","",["flag-sd"],3,52,15,0],
		"1f1f8-1f1ea":[["\uD83C\uDDF8\uD83C\uDDEA"],"","",["flag-se"],3,53,15,0],
		"1f1f8-1f1ec":[["\uD83C\uDDF8\uD83C\uDDEC"],"","",["flag-sg"],3,54,15,0],
		"1f1f8-1f1ed":[["\uD83C\uDDF8\uD83C\uDDED"],"","",["flag-sh"],3,55,15,0],
		"1f1f8-1f1ee":[["\uD83C\uDDF8\uD83C\uDDEE"],"","",["flag-si"],3,56,15,0],
		"1f1f8-1f1ef":[["\uD83C\uDDF8\uD83C\uDDEF"],"","",["flag-sj"],3,57,15,0],
		"1f1f8-1f1f0":[["\uD83C\uDDF8\uD83C\uDDF0"],"","",["flag-sk"],3,58,15,0],
		"1f1f8-1f1f1":[["\uD83C\uDDF8\uD83C\uDDF1"],"","",["flag-sl"],3,59,15,0],
		"1f1f8-1f1f2":[["\uD83C\uDDF8\uD83C\uDDF2"],"","",["flag-sm"],4,0,15,0],
		"1f1f8-1f1f3":[["\uD83C\uDDF8\uD83C\uDDF3"],"","",["flag-sn"],4,1,15,0],
		"1f1f8-1f1f4":[["\uD83C\uDDF8\uD83C\uDDF4"],"","",["flag-so"],4,2,15,0],
		"1f1f8-1f1f7":[["\uD83C\uDDF8\uD83C\uDDF7"],"","",["flag-sr"],4,3,15,0],
		"1f1f8-1f1f8":[["\uD83C\uDDF8\uD83C\uDDF8"],"","",["flag-ss"],4,4,15,0],
		"1f1f8-1f1f9":[["\uD83C\uDDF8\uD83C\uDDF9"],"","",["flag-st"],4,5,15,0],
		"1f1f8-1f1fb":[["\uD83C\uDDF8\uD83C\uDDFB"],"","",["flag-sv"],4,6,15,0],
		"1f1f8-1f1fd":[["\uD83C\uDDF8\uD83C\uDDFD"],"","",["flag-sx"],4,7,15,0],
		"1f1f8-1f1fe":[["\uD83C\uDDF8\uD83C\uDDFE"],"","",["flag-sy"],4,8,15,0],
		"1f1f8-1f1ff":[["\uD83C\uDDF8\uD83C\uDDFF"],"","",["flag-sz"],4,9,15,0],
		"1f1f9-1f1e6":[["\uD83C\uDDF9\uD83C\uDDE6"],"","",["flag-ta"],4,10,15,0],
		"1f1f9-1f1e8":[["\uD83C\uDDF9\uD83C\uDDE8"],"","",["flag-tc"],4,11,15,0],
		"1f1f9-1f1e9":[["\uD83C\uDDF9\uD83C\uDDE9"],"","",["flag-td"],4,12,15,0],
		"1f1f9-1f1eb":[["\uD83C\uDDF9\uD83C\uDDEB"],"","",["flag-tf"],4,13,15,0],
		"1f1f9-1f1ec":[["\uD83C\uDDF9\uD83C\uDDEC"],"","",["flag-tg"],4,14,15,0],
		"1f1f9-1f1ed":[["\uD83C\uDDF9\uD83C\uDDED"],"","",["flag-th"],4,15,15,0],
		"1f1f9-1f1ef":[["\uD83C\uDDF9\uD83C\uDDEF"],"","",["flag-tj"],4,16,15,0],
		"1f1f9-1f1f0":[["\uD83C\uDDF9\uD83C\uDDF0"],"","",["flag-tk"],4,17,15,0],
		"1f1f9-1f1f1":[["\uD83C\uDDF9\uD83C\uDDF1"],"","",["flag-tl"],4,18,15,0],
		"1f1f9-1f1f2":[["\uD83C\uDDF9\uD83C\uDDF2"],"","",["flag-tm"],4,19,15,0],
		"1f1f9-1f1f3":[["\uD83C\uDDF9\uD83C\uDDF3"],"","",["flag-tn"],4,20,15,0],
		"1f1f9-1f1f4":[["\uD83C\uDDF9\uD83C\uDDF4"],"","",["flag-to"],4,21,15,0],
		"1f1f9-1f1f7":[["\uD83C\uDDF9\uD83C\uDDF7"],"","",["flag-tr"],4,22,15,0],
		"1f1f9-1f1f9":[["\uD83C\uDDF9\uD83C\uDDF9"],"","",["flag-tt"],4,23,15,0],
		"1f1f9-1f1fb":[["\uD83C\uDDF9\uD83C\uDDFB"],"","",["flag-tv"],4,24,15,0],
		"1f1f9-1f1fc":[["\uD83C\uDDF9\uD83C\uDDFC"],"","",["flag-tw"],4,25,15,0],
		"1f1f9-1f1ff":[["\uD83C\uDDF9\uD83C\uDDFF"],"","",["flag-tz"],4,26,15,0],
		"1f1fa-1f1e6":[["\uD83C\uDDFA\uD83C\uDDE6"],"","",["flag-ua"],4,27,15,0],
		"1f1fa-1f1ec":[["\uD83C\uDDFA\uD83C\uDDEC"],"","",["flag-ug"],4,28,15,0],
		"1f1fa-1f1f2":[["\uD83C\uDDFA\uD83C\uDDF2"],"","",["flag-um"],4,29,15,0],
		"1f1fa-1f1f3":[["\uD83C\uDDFA\uD83C\uDDF3"],"","",["flag-un"],4,30,15,0],
		"1f1fa-1f1f8":[["\uD83C\uDDFA\uD83C\uDDF8"],"\uE50C","\uDBB9\uDCE6",["us","flag-us"],4,31,15,0],
		"1f1fa-1f1fe":[["\uD83C\uDDFA\uD83C\uDDFE"],"","",["flag-uy"],4,32,15,0],
		"1f1fa-1f1ff":[["\uD83C\uDDFA\uD83C\uDDFF"],"","",["flag-uz"],4,33,15,0],
		"1f1fb-1f1e6":[["\uD83C\uDDFB\uD83C\uDDE6"],"","",["flag-va"],4,34,15,0],
		"1f1fb-1f1e8":[["\uD83C\uDDFB\uD83C\uDDE8"],"","",["flag-vc"],4,35,15,0],
		"1f1fb-1f1ea":[["\uD83C\uDDFB\uD83C\uDDEA"],"","",["flag-ve"],4,36,15,0],
		"1f1fb-1f1ec":[["\uD83C\uDDFB\uD83C\uDDEC"],"","",["flag-vg"],4,37,15,0],
		"1f1fb-1f1ee":[["\uD83C\uDDFB\uD83C\uDDEE"],"","",["flag-vi"],4,38,15,0],
		"1f1fb-1f1f3":[["\uD83C\uDDFB\uD83C\uDDF3"],"","",["flag-vn"],4,39,15,0],
		"1f1fb-1f1fa":[["\uD83C\uDDFB\uD83C\uDDFA"],"","",["flag-vu"],4,40,15,0],
		"1f1fc-1f1eb":[["\uD83C\uDDFC\uD83C\uDDEB"],"","",["flag-wf"],4,41,15,0],
		"1f1fc-1f1f8":[["\uD83C\uDDFC\uD83C\uDDF8"],"","",["flag-ws"],4,42,15,0],
		"1f1fd-1f1f0":[["\uD83C\uDDFD\uD83C\uDDF0"],"","",["flag-xk"],4,43,15,0],
		"1f1fe-1f1ea":[["\uD83C\uDDFE\uD83C\uDDEA"],"","",["flag-ye"],4,44,15,0],
		"1f1fe-1f1f9":[["\uD83C\uDDFE\uD83C\uDDF9"],"","",["flag-yt"],4,45,15,0],
		"1f1ff-1f1e6":[["\uD83C\uDDFF\uD83C\uDDE6"],"","",["flag-za"],4,46,15,0],
		"1f1ff-1f1f2":[["\uD83C\uDDFF\uD83C\uDDF2"],"","",["flag-zm"],4,47,15,0],
		"1f1ff-1f1fc":[["\uD83C\uDDFF\uD83C\uDDFC"],"","",["flag-zw"],4,48,15,0],
		"1f201":[["\uD83C\uDE01"],"\uE203","\uDBBA\uDF24",["koko"],4,49,15,0],
		"1f202-fe0f":[["\uD83C\uDE02\uFE0F","\uD83C\uDE02"],"\uE228","\uDBBA\uDF3F",["sa"],4,50,15,0],
		"1f21a":[["\uD83C\uDE1A"],"\uE216","\uDBBA\uDF3A",["u7121"],4,51,15,0],
		"1f22f":[["\uD83C\uDE2F"],"\uE22C","\uDBBA\uDF40",["u6307"],4,52,15,0],
		"1f232":[["\uD83C\uDE32"],"","\uDBBA\uDF2E",["u7981"],4,53,15,0],
		"1f233":[["\uD83C\uDE33"],"\uE22B","\uDBBA\uDF2F",["u7a7a"],4,54,15,0],
		"1f234":[["\uD83C\uDE34"],"","\uDBBA\uDF30",["u5408"],4,55,15,0],
		"1f235":[["\uD83C\uDE35"],"\uE22A","\uDBBA\uDF31",["u6e80"],4,56,15,0],
		"1f236":[["\uD83C\uDE36"],"\uE215","\uDBBA\uDF39",["u6709"],4,57,15,0],
		"1f237-fe0f":[["\uD83C\uDE37\uFE0F","\uD83C\uDE37"],"\uE217","\uDBBA\uDF3B",["u6708"],4,58,15,0],
		"1f238":[["\uD83C\uDE38"],"\uE218","\uDBBA\uDF3C",["u7533"],4,59,15,0],
		"1f239":[["\uD83C\uDE39"],"\uE227","\uDBBA\uDF3E",["u5272"],5,0,15,0],
		"1f23a":[["\uD83C\uDE3A"],"\uE22D","\uDBBA\uDF41",["u55b6"],5,1,15,0],
		"1f250":[["\uD83C\uDE50"],"\uE226","\uDBBA\uDF3D",["ideograph_advantage"],5,2,15,0],
		"1f251":[["\uD83C\uDE51"],"","\uDBBA\uDF50",["accept"],5,3,15,0],
		"1f300":[["\uD83C\uDF00"],"\uE443","\uDBB8\uDC05",["cyclone"],5,4,15,0],
		"1f301":[["\uD83C\uDF01"],"","\uDBB8\uDC06",["foggy"],5,5,15,0],
		"1f302":[["\uD83C\uDF02"],"\uE43C","\uDBB8\uDC07",["closed_umbrella"],5,6,15,0],
		"1f303":[["\uD83C\uDF03"],"\uE44B","\uDBB8\uDC08",["night_with_stars"],5,7,15,0],
		"1f304":[["\uD83C\uDF04"],"\uE04D","\uDBB8\uDC09",["sunrise_over_mountains"],5,8,15,0],
		"1f305":[["\uD83C\uDF05"],"\uE449","\uDBB8\uDC0A",["sunrise"],5,9,15,0],
		"1f306":[["\uD83C\uDF06"],"\uE146","\uDBB8\uDC0B",["city_sunset"],5,10,15,0],
		"1f307":[["\uD83C\uDF07"],"\uE44A","\uDBB8\uDC0C",["city_sunrise"],5,11,15,0],
		"1f308":[["\uD83C\uDF08"],"\uE44C","\uDBB8\uDC0D",["rainbow"],5,12,15,0],
		"1f309":[["\uD83C\uDF09"],"","\uDBB8\uDC10",["bridge_at_night"],5,13,15,0],
		"1f30a":[["\uD83C\uDF0A"],"\uE43E","\uDBB8\uDC38",["ocean"],5,14,15,0],
		"1f30b":[["\uD83C\uDF0B"],"","\uDBB8\uDC3A",["volcano"],5,15,15,0],
		"1f30c":[["\uD83C\uDF0C"],"","\uDBB8\uDC3B",["milky_way"],5,16,15,0],
		"1f30d":[["\uD83C\uDF0D"],"","",["earth_africa"],5,17,15,0],
		"1f30e":[["\uD83C\uDF0E"],"","",["earth_americas"],5,18,15,0],
		"1f30f":[["\uD83C\uDF0F"],"","\uDBB8\uDC39",["earth_asia"],5,19,15,0],
		"1f310":[["\uD83C\uDF10"],"","",["globe_with_meridians"],5,20,15,0],
		"1f311":[["\uD83C\uDF11"],"","\uDBB8\uDC11",["new_moon"],5,21,15,0],
		"1f312":[["\uD83C\uDF12"],"","",["waxing_crescent_moon"],5,22,15,0],
		"1f313":[["\uD83C\uDF13"],"","\uDBB8\uDC13",["first_quarter_moon"],5,23,15,0],
		"1f314":[["\uD83C\uDF14"],"","\uDBB8\uDC12",["moon","waxing_gibbous_moon"],5,24,15,0],
		"1f315":[["\uD83C\uDF15"],"","\uDBB8\uDC15",["full_moon"],5,25,15,0],
		"1f316":[["\uD83C\uDF16"],"","",["waning_gibbous_moon"],5,26,15,0],
		"1f317":[["\uD83C\uDF17"],"","",["last_quarter_moon"],5,27,15,0],
		"1f318":[["\uD83C\uDF18"],"","",["waning_crescent_moon"],5,28,15,0],
		"1f319":[["\uD83C\uDF19"],"\uE04C","\uDBB8\uDC14",["crescent_moon"],5,29,15,0],
		"1f31a":[["\uD83C\uDF1A"],"","",["new_moon_with_face"],5,30,15,0],
		"1f31b":[["\uD83C\uDF1B"],"","\uDBB8\uDC16",["first_quarter_moon_with_face"],5,31,15,0],
		"1f31c":[["\uD83C\uDF1C"],"","",["last_quarter_moon_with_face"],5,32,15,0],
		"1f31d":[["\uD83C\uDF1D"],"","",["full_moon_with_face"],5,33,15,0],
		"1f31e":[["\uD83C\uDF1E"],"","",["sun_with_face"],5,34,15,0],
		"1f31f":[["\uD83C\uDF1F"],"\uE335","\uDBBA\uDF69",["star2"],5,35,15,0],
		"1f320":[["\uD83C\uDF20"],"","\uDBBA\uDF6A",["stars"],5,36,15,0],
		"1f321-fe0f":[["\uD83C\uDF21\uFE0F","\uD83C\uDF21"],"","",["thermometer"],5,37,15,0],
		"1f324-fe0f":[["\uD83C\uDF24\uFE0F","\uD83C\uDF24"],"","",["mostly_sunny","sun_small_cloud"],5,38,15,0],
		"1f325-fe0f":[["\uD83C\uDF25\uFE0F","\uD83C\uDF25"],"","",["barely_sunny","sun_behind_cloud"],5,39,15,0],
		"1f326-fe0f":[["\uD83C\uDF26\uFE0F","\uD83C\uDF26"],"","",["partly_sunny_rain","sun_behind_rain_cloud"],5,40,15,0],
		"1f327-fe0f":[["\uD83C\uDF27\uFE0F","\uD83C\uDF27"],"","",["rain_cloud"],5,41,15,0],
		"1f328-fe0f":[["\uD83C\uDF28\uFE0F","\uD83C\uDF28"],"","",["snow_cloud"],5,42,15,0],
		"1f329-fe0f":[["\uD83C\uDF29\uFE0F","\uD83C\uDF29"],"","",["lightning","lightning_cloud"],5,43,15,0],
		"1f32a-fe0f":[["\uD83C\uDF2A\uFE0F","\uD83C\uDF2A"],"","",["tornado","tornado_cloud"],5,44,15,0],
		"1f32b-fe0f":[["\uD83C\uDF2B\uFE0F","\uD83C\uDF2B"],"","",["fog"],5,45,15,0],
		"1f32c-fe0f":[["\uD83C\uDF2C\uFE0F","\uD83C\uDF2C"],"","",["wind_blowing_face"],5,46,15,0],
		"1f32d":[["\uD83C\uDF2D"],"","",["hotdog"],5,47,15,0],
		"1f32e":[["\uD83C\uDF2E"],"","",["taco"],5,48,15,0],
		"1f32f":[["\uD83C\uDF2F"],"","",["burrito"],5,49,15,0],
		"1f330":[["\uD83C\uDF30"],"","\uDBB8\uDC4C",["chestnut"],5,50,15,0],
		"1f331":[["\uD83C\uDF31"],"","\uDBB8\uDC3E",["seedling"],5,51,15,0],
		"1f332":[["\uD83C\uDF32"],"","",["evergreen_tree"],5,52,15,0],
		"1f333":[["\uD83C\uDF33"],"","",["deciduous_tree"],5,53,15,0],
		"1f334":[["\uD83C\uDF34"],"\uE307","\uDBB8\uDC47",["palm_tree"],5,54,15,0],
		"1f335":[["\uD83C\uDF35"],"\uE308","\uDBB8\uDC48",["cactus"],5,55,15,0],
		"1f336-fe0f":[["\uD83C\uDF36\uFE0F","\uD83C\uDF36"],"","",["hot_pepper"],5,56,15,0],
		"1f337":[["\uD83C\uDF37"],"\uE304","\uDBB8\uDC3D",["tulip"],5,57,15,0],
		"1f338":[["\uD83C\uDF38"],"\uE030","\uDBB8\uDC40",["cherry_blossom"],5,58,15,0],
		"1f339":[["\uD83C\uDF39"],"\uE032","\uDBB8\uDC41",["rose"],5,59,15,0],
		"1f33a":[["\uD83C\uDF3A"],"\uE303","\uDBB8\uDC45",["hibiscus"],6,0,15,0],
		"1f33b":[["\uD83C\uDF3B"],"\uE305","\uDBB8\uDC46",["sunflower"],6,1,15,0],
		"1f33c":[["\uD83C\uDF3C"],"","\uDBB8\uDC4D",["blossom"],6,2,15,0],
		"1f33d":[["\uD83C\uDF3D"],"","\uDBB8\uDC4A",["corn"],6,3,15,0],
		"1f33e":[["\uD83C\uDF3E"],"\uE444","\uDBB8\uDC49",["ear_of_rice"],6,4,15,0],
		"1f33f":[["\uD83C\uDF3F"],"","\uDBB8\uDC4E",["herb"],6,5,15,0],
		"1f340":[["\uD83C\uDF40"],"\uE110","\uDBB8\uDC3C",["four_leaf_clover"],6,6,15,0],
		"1f341":[["\uD83C\uDF41"],"\uE118","\uDBB8\uDC3F",["maple_leaf"],6,7,15,0],
		"1f342":[["\uD83C\uDF42"],"\uE119","\uDBB8\uDC42",["fallen_leaf"],6,8,15,0],
		"1f343":[["\uD83C\uDF43"],"\uE447","\uDBB8\uDC43",["leaves"],6,9,15,0],
		"1f344":[["\uD83C\uDF44"],"","\uDBB8\uDC4B",["mushroom"],6,10,15,0],
		"1f345":[["\uD83C\uDF45"],"\uE349","\uDBB8\uDC55",["tomato"],6,11,15,0],
		"1f346":[["\uD83C\uDF46"],"\uE34A","\uDBB8\uDC56",["eggplant"],6,12,15,0],
		"1f347":[["\uD83C\uDF47"],"","\uDBB8\uDC59",["grapes"],6,13,15,0],
		"1f348":[["\uD83C\uDF48"],"","\uDBB8\uDC57",["melon"],6,14,15,0],
		"1f349":[["\uD83C\uDF49"],"\uE348","\uDBB8\uDC54",["watermelon"],6,15,15,0],
		"1f34a":[["\uD83C\uDF4A"],"\uE346","\uDBB8\uDC52",["tangerine"],6,16,15,0],
		"1f34b":[["\uD83C\uDF4B"],"","",["lemon"],6,17,15,0],
		"1f34c":[["\uD83C\uDF4C"],"","\uDBB8\uDC50",["banana"],6,18,15,0],
		"1f34d":[["\uD83C\uDF4D"],"","\uDBB8\uDC58",["pineapple"],6,19,15,0],
		"1f34e":[["\uD83C\uDF4E"],"\uE345","\uDBB8\uDC51",["apple"],6,20,15,0],
		"1f34f":[["\uD83C\uDF4F"],"","\uDBB8\uDC5B",["green_apple"],6,21,15,0],
		"1f350":[["\uD83C\uDF50"],"","",["pear"],6,22,15,0],
		"1f351":[["\uD83C\uDF51"],"","\uDBB8\uDC5A",["peach"],6,23,15,0],
		"1f352":[["\uD83C\uDF52"],"","\uDBB8\uDC4F",["cherries"],6,24,15,0],
		"1f353":[["\uD83C\uDF53"],"\uE347","\uDBB8\uDC53",["strawberry"],6,25,15,0],
		"1f354":[["\uD83C\uDF54"],"\uE120","\uDBBA\uDD60",["hamburger"],6,26,15,0],
		"1f355":[["\uD83C\uDF55"],"","\uDBBA\uDD75",["pizza"],6,27,15,0],
		"1f356":[["\uD83C\uDF56"],"","\uDBBA\uDD72",["meat_on_bone"],6,28,15,0],
		"1f357":[["\uD83C\uDF57"],"","\uDBBA\uDD76",["poultry_leg"],6,29,15,0],
		"1f358":[["\uD83C\uDF58"],"\uE33D","\uDBBA\uDD69",["rice_cracker"],6,30,15,0],
		"1f359":[["\uD83C\uDF59"],"\uE342","\uDBBA\uDD61",["rice_ball"],6,31,15,0],
		"1f35a":[["\uD83C\uDF5A"],"\uE33E","\uDBBA\uDD6A",["rice"],6,32,15,0],
		"1f35b":[["\uD83C\uDF5B"],"\uE341","\uDBBA\uDD6C",["curry"],6,33,15,0],
		"1f35c":[["\uD83C\uDF5C"],"\uE340","\uDBBA\uDD63",["ramen"],6,34,15,0],
		"1f35d":[["\uD83C\uDF5D"],"\uE33F","\uDBBA\uDD6B",["spaghetti"],6,35,15,0],
		"1f35e":[["\uD83C\uDF5E"],"\uE339","\uDBBA\uDD64",["bread"],6,36,15,0],
		"1f35f":[["\uD83C\uDF5F"],"\uE33B","\uDBBA\uDD67",["fries"],6,37,15,0],
		"1f360":[["\uD83C\uDF60"],"","\uDBBA\uDD74",["sweet_potato"],6,38,15,0],
		"1f361":[["\uD83C\uDF61"],"\uE33C","\uDBBA\uDD68",["dango"],6,39,15,0],
		"1f362":[["\uD83C\uDF62"],"\uE343","\uDBBA\uDD6D",["oden"],6,40,15,0],
		"1f363":[["\uD83C\uDF63"],"\uE344","\uDBBA\uDD6E",["sushi"],6,41,15,0],
		"1f364":[["\uD83C\uDF64"],"","\uDBBA\uDD7F",["fried_shrimp"],6,42,15,0],
		"1f365":[["\uD83C\uDF65"],"","\uDBBA\uDD73",["fish_cake"],6,43,15,0],
		"1f366":[["\uD83C\uDF66"],"\uE33A","\uDBBA\uDD66",["icecream"],6,44,15,0],
		"1f367":[["\uD83C\uDF67"],"\uE43F","\uDBBA\uDD71",["shaved_ice"],6,45,15,0],
		"1f368":[["\uD83C\uDF68"],"","\uDBBA\uDD77",["ice_cream"],6,46,15,0],
		"1f369":[["\uD83C\uDF69"],"","\uDBBA\uDD78",["doughnut"],6,47,15,0],
		"1f36a":[["\uD83C\uDF6A"],"","\uDBBA\uDD79",["cookie"],6,48,15,0],
		"1f36b":[["\uD83C\uDF6B"],"","\uDBBA\uDD7A",["chocolate_bar"],6,49,15,0],
		"1f36c":[["\uD83C\uDF6C"],"","\uDBBA\uDD7B",["candy"],6,50,15,0],
		"1f36d":[["\uD83C\uDF6D"],"","\uDBBA\uDD7C",["lollipop"],6,51,15,0],
		"1f36e":[["\uD83C\uDF6E"],"","\uDBBA\uDD7D",["custard"],6,52,15,0],
		"1f36f":[["\uD83C\uDF6F"],"","\uDBBA\uDD7E",["honey_pot"],6,53,15,0],
		"1f370":[["\uD83C\uDF70"],"\uE046","\uDBBA\uDD62",["cake"],6,54,15,0],
		"1f371":[["\uD83C\uDF71"],"\uE34C","\uDBBA\uDD6F",["bento"],6,55,15,0],
		"1f372":[["\uD83C\uDF72"],"\uE34D","\uDBBA\uDD70",["stew"],6,56,15,0],
		"1f373":[["\uD83C\uDF73"],"\uE147","\uDBBA\uDD65",["fried_egg","cooking"],6,57,15,0],
		"1f374":[["\uD83C\uDF74"],"\uE043","\uDBBA\uDD80",["fork_and_knife"],6,58,15,0],
		"1f375":[["\uD83C\uDF75"],"\uE338","\uDBBA\uDD84",["tea"],6,59,15,0],
		"1f376":[["\uD83C\uDF76"],"\uE30B","\uDBBA\uDD85",["sake"],7,0,15,0],
		"1f377":[["\uD83C\uDF77"],"","\uDBBA\uDD86",["wine_glass"],7,1,15,0],
		"1f378":[["\uD83C\uDF78"],"\uE044","\uDBBA\uDD82",["cocktail"],7,2,15,0],
		"1f379":[["\uD83C\uDF79"],"","\uDBBA\uDD88",["tropical_drink"],7,3,15,0],
		"1f37a":[["\uD83C\uDF7A"],"\uE047","\uDBBA\uDD83",["beer"],7,4,15,0],
		"1f37b":[["\uD83C\uDF7B"],"\uE30C","\uDBBA\uDD87",["beers"],7,5,15,0],
		"1f37c":[["\uD83C\uDF7C"],"","",["baby_bottle"],7,6,15,0],
		"1f37d-fe0f":[["\uD83C\uDF7D\uFE0F","\uD83C\uDF7D"],"","",["knife_fork_plate"],7,7,15,0],
		"1f37e":[["\uD83C\uDF7E"],"","",["champagne"],7,8,15,0],
		"1f37f":[["\uD83C\uDF7F"],"","",["popcorn"],7,9,15,0],
		"1f380":[["\uD83C\uDF80"],"\uE314","\uDBB9\uDD0F",["ribbon"],7,10,15,0],
		"1f381":[["\uD83C\uDF81"],"\uE112","\uDBB9\uDD10",["gift"],7,11,15,0],
		"1f382":[["\uD83C\uDF82"],"\uE34B","\uDBB9\uDD11",["birthday"],7,12,15,0],
		"1f383":[["\uD83C\uDF83"],"\uE445","\uDBB9\uDD1F",["jack_o_lantern"],7,13,15,0],
		"1f384":[["\uD83C\uDF84"],"\uE033","\uDBB9\uDD12",["christmas_tree"],7,14,15,0],
		"1f385":[["\uD83C\uDF85"],"\uE448","\uDBB9\uDD13",["santa"],7,15,15,0],
		"1f386":[["\uD83C\uDF86"],"\uE117","\uDBB9\uDD15",["fireworks"],7,21,15,0],
		"1f387":[["\uD83C\uDF87"],"\uE440","\uDBB9\uDD1D",["sparkler"],7,22,15,0],
		"1f388":[["\uD83C\uDF88"],"\uE310","\uDBB9\uDD16",["balloon"],7,23,15,0],
		"1f389":[["\uD83C\uDF89"],"\uE312","\uDBB9\uDD17",["tada"],7,24,15,0],
		"1f38a":[["\uD83C\uDF8A"],"","\uDBB9\uDD20",["confetti_ball"],7,25,15,0],
		"1f38b":[["\uD83C\uDF8B"],"","\uDBB9\uDD21",["tanabata_tree"],7,26,15,0],
		"1f38c":[["\uD83C\uDF8C"],"\uE143","\uDBB9\uDD14",["crossed_flags"],7,27,15,0],
		"1f38d":[["\uD83C\uDF8D"],"\uE436","\uDBB9\uDD18",["bamboo"],7,28,15,0],
		"1f38e":[["\uD83C\uDF8E"],"\uE438","\uDBB9\uDD19",["dolls"],7,29,15,0],
		"1f38f":[["\uD83C\uDF8F"],"\uE43B","\uDBB9\uDD1C",["flags"],7,30,15,0],
		"1f390":[["\uD83C\uDF90"],"\uE442","\uDBB9\uDD1E",["wind_chime"],7,31,15,0],
		"1f391":[["\uD83C\uDF91"],"\uE446","\uDBB8\uDC17",["rice_scene"],7,32,15,0],
		"1f392":[["\uD83C\uDF92"],"\uE43A","\uDBB9\uDD1B",["school_satchel"],7,33,15,0],
		"1f393":[["\uD83C\uDF93"],"\uE439","\uDBB9\uDD1A",["mortar_board"],7,34,15,0],
		"1f396-fe0f":[["\uD83C\uDF96\uFE0F","\uD83C\uDF96"],"","",["medal"],7,35,15,0],
		"1f397-fe0f":[["\uD83C\uDF97\uFE0F","\uD83C\uDF97"],"","",["reminder_ribbon"],7,36,15,0],
		"1f399-fe0f":[["\uD83C\uDF99\uFE0F","\uD83C\uDF99"],"","",["studio_microphone"],7,37,15,0],
		"1f39a-fe0f":[["\uD83C\uDF9A\uFE0F","\uD83C\uDF9A"],"","",["level_slider"],7,38,15,0],
		"1f39b-fe0f":[["\uD83C\uDF9B\uFE0F","\uD83C\uDF9B"],"","",["control_knobs"],7,39,15,0],
		"1f39e-fe0f":[["\uD83C\uDF9E\uFE0F","\uD83C\uDF9E"],"","",["film_frames"],7,40,15,0],
		"1f39f-fe0f":[["\uD83C\uDF9F\uFE0F","\uD83C\uDF9F"],"","",["admission_tickets"],7,41,15,0],
		"1f3a0":[["\uD83C\uDFA0"],"","\uDBB9\uDFFC",["carousel_horse"],7,42,15,0],
		"1f3a1":[["\uD83C\uDFA1"],"\uE124","\uDBB9\uDFFD",["ferris_wheel"],7,43,15,0],
		"1f3a2":[["\uD83C\uDFA2"],"\uE433","\uDBB9\uDFFE",["roller_coaster"],7,44,15,0],
		"1f3a3":[["\uD83C\uDFA3"],"","\uDBB9\uDFFF",["fishing_pole_and_fish"],7,45,15,0],
		"1f3a4":[["\uD83C\uDFA4"],"\uE03C","\uDBBA\uDC00",["microphone"],7,46,15,0],
		"1f3a5":[["\uD83C\uDFA5"],"\uE03D","\uDBBA\uDC01",["movie_camera"],7,47,15,0],
		"1f3a6":[["\uD83C\uDFA6"],"\uE507","\uDBBA\uDC02",["cinema"],7,48,15,0],
		"1f3a7":[["\uD83C\uDFA7"],"\uE30A","\uDBBA\uDC03",["headphones"],7,49,15,0],
		"1f3a8":[["\uD83C\uDFA8"],"\uE502","\uDBBA\uDC04",["art"],7,50,15,0],
		"1f3a9":[["\uD83C\uDFA9"],"\uE503","\uDBBA\uDC05",["tophat"],7,51,15,0],
		"1f3aa":[["\uD83C\uDFAA"],"","\uDBBA\uDC06",["circus_tent"],7,52,15,0],
		"1f3ab":[["\uD83C\uDFAB"],"\uE125","\uDBBA\uDC07",["ticket"],7,53,15,0],
		"1f3ac":[["\uD83C\uDFAC"],"\uE324","\uDBBA\uDC08",["clapper"],7,54,15,0],
		"1f3ad":[["\uD83C\uDFAD"],"","\uDBBA\uDC09",["performing_arts"],7,55,15,0],
		"1f3ae":[["\uD83C\uDFAE"],"","\uDBBA\uDC0A",["video_game"],7,56,15,0],
		"1f3af":[["\uD83C\uDFAF"],"\uE130","\uDBBA\uDC0C",["dart"],7,57,15,0],
		"1f3b0":[["\uD83C\uDFB0"],"\uE133","\uDBBA\uDC0D",["slot_machine"],7,58,15,0],
		"1f3b1":[["\uD83C\uDFB1"],"\uE42C","\uDBBA\uDC0E",["8ball"],7,59,15,0],
		"1f3b2":[["\uD83C\uDFB2"],"","\uDBBA\uDC0F",["game_die"],8,0,15,0],
		"1f3b3":[["\uD83C\uDFB3"],"","\uDBBA\uDC10",["bowling"],8,1,15,0],
		"1f3b4":[["\uD83C\uDFB4"],"","\uDBBA\uDC11",["flower_playing_cards"],8,2,15,0],
		"1f3b5":[["\uD83C\uDFB5"],"\uE03E","\uDBBA\uDC13",["musical_note"],8,3,15,0],
		"1f3b6":[["\uD83C\uDFB6"],"\uE326","\uDBBA\uDC14",["notes"],8,4,15,0],
		"1f3b7":[["\uD83C\uDFB7"],"\uE040","\uDBBA\uDC15",["saxophone"],8,5,15,0],
		"1f3b8":[["\uD83C\uDFB8"],"\uE041","\uDBBA\uDC16",["guitar"],8,6,15,0],
		"1f3b9":[["\uD83C\uDFB9"],"","\uDBBA\uDC17",["musical_keyboard"],8,7,15,0],
		"1f3ba":[["\uD83C\uDFBA"],"\uE042","\uDBBA\uDC18",["trumpet"],8,8,15,0],
		"1f3bb":[["\uD83C\uDFBB"],"","\uDBBA\uDC19",["violin"],8,9,15,0],
		"1f3bc":[["\uD83C\uDFBC"],"","\uDBBA\uDC1A",["musical_score"],8,10,15,0],
		"1f3bd":[["\uD83C\uDFBD"],"","\uDBB9\uDFD0",["running_shirt_with_sash"],8,11,15,0],
		"1f3be":[["\uD83C\uDFBE"],"\uE015","\uDBB9\uDFD3",["tennis"],8,12,15,0],
		"1f3bf":[["\uD83C\uDFBF"],"\uE013","\uDBB9\uDFD5",["ski"],8,13,15,0],
		"1f3c0":[["\uD83C\uDFC0"],"\uE42A","\uDBB9\uDFD6",["basketball"],8,14,15,0],
		"1f3c1":[["\uD83C\uDFC1"],"\uE132","\uDBB9\uDFD7",["checkered_flag"],8,15,15,0],
		"1f3c2":[["\uD83C\uDFC2"],"","\uDBB9\uDFD8",["snowboarder"],8,16,15,0],
		"1f3c3-200d-2640-fe0f":[["\uD83C\uDFC3\u200D\u2640\uFE0F","\uD83C\uDFC3\u200D\u2640"],"","",["woman-running"],8,22,15,0],
		"1f3c3-200d-2642-fe0f":[["\uD83C\uDFC3\u200D\u2642\uFE0F","\uD83C\uDFC3\u200D\u2642","\uD83C\uDFC3"],"","",["man-running","runner","running"],8,28,15,0],
		"1f3c4-200d-2640-fe0f":[["\uD83C\uDFC4\u200D\u2640\uFE0F","\uD83C\uDFC4\u200D\u2640"],"","",["woman-surfing"],8,40,15,0],
		"1f3c4-200d-2642-fe0f":[["\uD83C\uDFC4\u200D\u2642\uFE0F","\uD83C\uDFC4\u200D\u2642","\uD83C\uDFC4"],"","",["man-surfing","surfer"],8,46,15,0],
		"1f3c5":[["\uD83C\uDFC5"],"","",["sports_medal"],8,58,15,0],
		"1f3c6":[["\uD83C\uDFC6"],"\uE131","\uDBB9\uDFDB",["trophy"],8,59,15,0],
		"1f3c7":[["\uD83C\uDFC7"],"","",["horse_racing"],9,0,15,0],
		"1f3c8":[["\uD83C\uDFC8"],"\uE42B","\uDBB9\uDFDD",["football"],9,6,15,0],
		"1f3c9":[["\uD83C\uDFC9"],"","",["rugby_football"],9,7,15,0],
		"1f3ca-200d-2640-fe0f":[["\uD83C\uDFCA\u200D\u2640\uFE0F","\uD83C\uDFCA\u200D\u2640"],"","",["woman-swimming"],9,8,15,0],
		"1f3ca-200d-2642-fe0f":[["\uD83C\uDFCA\u200D\u2642\uFE0F","\uD83C\uDFCA\u200D\u2642","\uD83C\uDFCA"],"","",["man-swimming","swimmer"],9,14,15,0],
		"1f3cb-fe0f-200d-2640-fe0f":[["\uD83C\uDFCB\uFE0F\u200D\u2640\uFE0F"],"","",["woman-lifting-weights"],9,26,7,0],
		"1f3cb-fe0f-200d-2642-fe0f":[["\uD83C\uDFCB\uFE0F\u200D\u2642\uFE0F","\uD83C\uDFCB\uFE0F","\uD83C\uDFCB"],"","",["man-lifting-weights","weight_lifter"],9,32,7,0],
		"1f3cc-fe0f-200d-2640-fe0f":[["\uD83C\uDFCC\uFE0F\u200D\u2640\uFE0F"],"","",["woman-golfing"],9,44,7,0],
		"1f3cc-fe0f-200d-2642-fe0f":[["\uD83C\uDFCC\uFE0F\u200D\u2642\uFE0F","\uD83C\uDFCC\uFE0F","\uD83C\uDFCC"],"","",["man-golfing","golfer"],9,50,7,0],
		"1f3cd-fe0f":[["\uD83C\uDFCD\uFE0F","\uD83C\uDFCD"],"","",["racing_motorcycle"],10,2,15,0],
		"1f3ce-fe0f":[["\uD83C\uDFCE\uFE0F","\uD83C\uDFCE"],"","",["racing_car"],10,3,15,0],
		"1f3cf":[["\uD83C\uDFCF"],"","",["cricket_bat_and_ball"],10,4,15,0],
		"1f3d0":[["\uD83C\uDFD0"],"","",["volleyball"],10,5,15,0],
		"1f3d1":[["\uD83C\uDFD1"],"","",["field_hockey_stick_and_ball"],10,6,15,0],
		"1f3d2":[["\uD83C\uDFD2"],"","",["ice_hockey_stick_and_puck"],10,7,15,0],
		"1f3d3":[["\uD83C\uDFD3"],"","",["table_tennis_paddle_and_ball"],10,8,15,0],
		"1f3d4-fe0f":[["\uD83C\uDFD4\uFE0F","\uD83C\uDFD4"],"","",["snow_capped_mountain"],10,9,15,0],
		"1f3d5-fe0f":[["\uD83C\uDFD5\uFE0F","\uD83C\uDFD5"],"","",["camping"],10,10,15,0],
		"1f3d6-fe0f":[["\uD83C\uDFD6\uFE0F","\uD83C\uDFD6"],"","",["beach_with_umbrella"],10,11,15,0],
		"1f3d7-fe0f":[["\uD83C\uDFD7\uFE0F","\uD83C\uDFD7"],"","",["building_construction"],10,12,15,0],
		"1f3d8-fe0f":[["\uD83C\uDFD8\uFE0F","\uD83C\uDFD8"],"","",["house_buildings"],10,13,15,0],
		"1f3d9-fe0f":[["\uD83C\uDFD9\uFE0F","\uD83C\uDFD9"],"","",["cityscape"],10,14,15,0],
		"1f3da-fe0f":[["\uD83C\uDFDA\uFE0F","\uD83C\uDFDA"],"","",["derelict_house_building"],10,15,15,0],
		"1f3db-fe0f":[["\uD83C\uDFDB\uFE0F","\uD83C\uDFDB"],"","",["classical_building"],10,16,15,0],
		"1f3dc-fe0f":[["\uD83C\uDFDC\uFE0F","\uD83C\uDFDC"],"","",["desert"],10,17,15,0],
		"1f3dd-fe0f":[["\uD83C\uDFDD\uFE0F","\uD83C\uDFDD"],"","",["desert_island"],10,18,15,0],
		"1f3de-fe0f":[["\uD83C\uDFDE\uFE0F","\uD83C\uDFDE"],"","",["national_park"],10,19,15,0],
		"1f3df-fe0f":[["\uD83C\uDFDF\uFE0F","\uD83C\uDFDF"],"","",["stadium"],10,20,15,0],
		"1f3e0":[["\uD83C\uDFE0"],"\uE036","\uDBB9\uDCB0",["house"],10,21,15,0],
		"1f3e1":[["\uD83C\uDFE1"],"","\uDBB9\uDCB1",["house_with_garden"],10,22,15,0],
		"1f3e2":[["\uD83C\uDFE2"],"\uE038","\uDBB9\uDCB2",["office"],10,23,15,0],
		"1f3e3":[["\uD83C\uDFE3"],"\uE153","\uDBB9\uDCB3",["post_office"],10,24,15,0],
		"1f3e4":[["\uD83C\uDFE4"],"","",["european_post_office"],10,25,15,0],
		"1f3e5":[["\uD83C\uDFE5"],"\uE155","\uDBB9\uDCB4",["hospital"],10,26,15,0],
		"1f3e6":[["\uD83C\uDFE6"],"\uE14D","\uDBB9\uDCB5",["bank"],10,27,15,0],
		"1f3e7":[["\uD83C\uDFE7"],"\uE154","\uDBB9\uDCB6",["atm"],10,28,15,0],
		"1f3e8":[["\uD83C\uDFE8"],"\uE158","\uDBB9\uDCB7",["hotel"],10,29,15,0],
		"1f3e9":[["\uD83C\uDFE9"],"\uE501","\uDBB9\uDCB8",["love_hotel"],10,30,15,0],
		"1f3ea":[["\uD83C\uDFEA"],"\uE156","\uDBB9\uDCB9",["convenience_store"],10,31,15,0],
		"1f3eb":[["\uD83C\uDFEB"],"\uE157","\uDBB9\uDCBA",["school"],10,32,15,0],
		"1f3ec":[["\uD83C\uDFEC"],"\uE504","\uDBB9\uDCBD",["department_store"],10,33,15,0],
		"1f3ed":[["\uD83C\uDFED"],"\uE508","\uDBB9\uDCC0",["factory"],10,34,15,0],
		"1f3ee":[["\uD83C\uDFEE"],"","\uDBB9\uDCC2",["izakaya_lantern","lantern"],10,35,15,0],
		"1f3ef":[["\uD83C\uDFEF"],"\uE505","\uDBB9\uDCBE",["japanese_castle"],10,36,15,0],
		"1f3f0":[["\uD83C\uDFF0"],"\uE506","\uDBB9\uDCBF",["european_castle"],10,37,15,0],
		"1f3f3-fe0f-200d-1f308":[["\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08","\uD83C\uDFF3\u200D\uD83C\uDF08"],"","",["rainbow-flag"],10,38,15,0],
		"1f3f3-fe0f-200d-26a7-fe0f":[["\uD83C\uDFF3\uFE0F\u200D\u26A7\uFE0F"],"","",["transgender_flag"],10,39,7,0],
		"1f3f3-fe0f":[["\uD83C\uDFF3\uFE0F","\uD83C\uDFF3"],"","",["waving_white_flag"],10,40,15,0],
		"1f3f4-200d-2620-fe0f":[["\uD83C\uDFF4\u200D\u2620\uFE0F","\uD83C\uDFF4\u200D\u2620"],"","",["pirate_flag"],10,41,15,0],
		"1f3f4-e0067-e0062-e0065-e006e-e0067-e007f":[["\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F"],"","",["flag-england"],10,42,15,0],
		"1f3f4-e0067-e0062-e0073-e0063-e0074-e007f":[["\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F"],"","",["flag-scotland"],10,43,15,0],
		"1f3f4-e0067-e0062-e0077-e006c-e0073-e007f":[["\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F"],"","",["flag-wales"],10,44,15,0],
		"1f3f4":[["\uD83C\uDFF4"],"","",["waving_black_flag"],10,45,15,0],
		"1f3f5-fe0f":[["\uD83C\uDFF5\uFE0F","\uD83C\uDFF5"],"","",["rosette"],10,46,15,0],
		"1f3f7-fe0f":[["\uD83C\uDFF7\uFE0F","\uD83C\uDFF7"],"","",["label"],10,47,15,0],
		"1f3f8":[["\uD83C\uDFF8"],"","",["badminton_racquet_and_shuttlecock"],10,48,15,0],
		"1f3f9":[["\uD83C\uDFF9"],"","",["bow_and_arrow"],10,49,15,0],
		"1f3fa":[["\uD83C\uDFFA"],"","",["amphora"],10,50,15,0],
		"1f3fb":[["\uD83C\uDFFB"],"","",["skin-tone-2"],10,51,15,0],
		"1f3fc":[["\uD83C\uDFFC"],"","",["skin-tone-3"],10,52,15,0],
		"1f3fd":[["\uD83C\uDFFD"],"","",["skin-tone-4"],10,53,15,0],
		"1f3fe":[["\uD83C\uDFFE"],"","",["skin-tone-5"],10,54,15,0],
		"1f3ff":[["\uD83C\uDFFF"],"","",["skin-tone-6"],10,55,15,0],
		"1f400":[["\uD83D\uDC00"],"","",["rat"],10,56,15,0],
		"1f401":[["\uD83D\uDC01"],"","",["mouse2"],10,57,15,0],
		"1f402":[["\uD83D\uDC02"],"","",["ox"],10,58,15,0],
		"1f403":[["\uD83D\uDC03"],"","",["water_buffalo"],10,59,15,0],
		"1f404":[["\uD83D\uDC04"],"","",["cow2"],11,0,15,0],
		"1f405":[["\uD83D\uDC05"],"","",["tiger2"],11,1,15,0],
		"1f406":[["\uD83D\uDC06"],"","",["leopard"],11,2,15,0],
		"1f407":[["\uD83D\uDC07"],"","",["rabbit2"],11,3,15,0],
		"1f408-200d-2b1b":[["\uD83D\uDC08\u200D\u2B1B"],"","",["black_cat"],11,4,15,0],
		"1f408":[["\uD83D\uDC08"],"","",["cat2"],11,5,15,0],
		"1f409":[["\uD83D\uDC09"],"","",["dragon"],11,6,15,0],
		"1f40a":[["\uD83D\uDC0A"],"","",["crocodile"],11,7,15,0],
		"1f40b":[["\uD83D\uDC0B"],"","",["whale2"],11,8,15,0],
		"1f40c":[["\uD83D\uDC0C"],"","\uDBB8\uDDB9",["snail"],11,9,15,0],
		"1f40d":[["\uD83D\uDC0D"],"\uE52D","\uDBB8\uDDD3",["snake"],11,10,15,0],
		"1f40e":[["\uD83D\uDC0E"],"\uE134","\uDBB9\uDFDC",["racehorse"],11,11,15,0],
		"1f40f":[["\uD83D\uDC0F"],"","",["ram"],11,12,15,0],
		"1f410":[["\uD83D\uDC10"],"","",["goat"],11,13,15,0],
		"1f411":[["\uD83D\uDC11"],"\uE529","\uDBB8\uDDCF",["sheep"],11,14,15,0],
		"1f412":[["\uD83D\uDC12"],"\uE528","\uDBB8\uDDCE",["monkey"],11,15,15,0],
		"1f413":[["\uD83D\uDC13"],"","",["rooster"],11,16,15,0],
		"1f414":[["\uD83D\uDC14"],"\uE52E","\uDBB8\uDDD4",["chicken"],11,17,15,0],
		"1f415-200d-1f9ba":[["\uD83D\uDC15\u200D\uD83E\uDDBA"],"","",["service_dog"],11,18,15,0],
		"1f415":[["\uD83D\uDC15"],"","",["dog2"],11,19,15,0],
		"1f416":[["\uD83D\uDC16"],"","",["pig2"],11,20,15,0],
		"1f417":[["\uD83D\uDC17"],"\uE52F","\uDBB8\uDDD5",["boar"],11,21,15,0],
		"1f418":[["\uD83D\uDC18"],"\uE526","\uDBB8\uDDCC",["elephant"],11,22,15,0],
		"1f419":[["\uD83D\uDC19"],"\uE10A","\uDBB8\uDDC5",["octopus"],11,23,15,0],
		"1f41a":[["\uD83D\uDC1A"],"\uE441","\uDBB8\uDDC6",["shell"],11,24,15,0],
		"1f41b":[["\uD83D\uDC1B"],"\uE525","\uDBB8\uDDCB",["bug"],11,25,15,0],
		"1f41c":[["\uD83D\uDC1C"],"","\uDBB8\uDDDA",["ant"],11,26,15,0],
		"1f41d":[["\uD83D\uDC1D"],"","\uDBB8\uDDE1",["bee","honeybee"],11,27,15,0],
		"1f41e":[["\uD83D\uDC1E"],"","\uDBB8\uDDE2",["ladybug","lady_beetle"],11,28,15,0],
		"1f41f":[["\uD83D\uDC1F"],"\uE019","\uDBB8\uDDBD",["fish"],11,29,15,0],
		"1f420":[["\uD83D\uDC20"],"\uE522","\uDBB8\uDDC9",["tropical_fish"],11,30,15,0],
		"1f421":[["\uD83D\uDC21"],"","\uDBB8\uDDD9",["blowfish"],11,31,15,0],
		"1f422":[["\uD83D\uDC22"],"","\uDBB8\uDDDC",["turtle"],11,32,15,0],
		"1f423":[["\uD83D\uDC23"],"","\uDBB8\uDDDD",["hatching_chick"],11,33,15,0],
		"1f424":[["\uD83D\uDC24"],"\uE523","\uDBB8\uDDBA",["baby_chick"],11,34,15,0],
		"1f425":[["\uD83D\uDC25"],"","\uDBB8\uDDBB",["hatched_chick"],11,35,15,0],
		"1f426":[["\uD83D\uDC26"],"\uE521","\uDBB8\uDDC8",["bird"],11,36,15,0],
		"1f427":[["\uD83D\uDC27"],"\uE055","\uDBB8\uDDBC",["penguin"],11,37,15,0],
		"1f428":[["\uD83D\uDC28"],"\uE527","\uDBB8\uDDCD",["koala"],11,38,15,0],
		"1f429":[["\uD83D\uDC29"],"","\uDBB8\uDDD8",["poodle"],11,39,15,0],
		"1f42a":[["\uD83D\uDC2A"],"","",["dromedary_camel"],11,40,15,0],
		"1f42b":[["\uD83D\uDC2B"],"\uE530","\uDBB8\uDDD6",["camel"],11,41,15,0],
		"1f42c":[["\uD83D\uDC2C"],"\uE520","\uDBB8\uDDC7",["dolphin","flipper"],11,42,15,0],
		"1f42d":[["\uD83D\uDC2D"],"\uE053","\uDBB8\uDDC2",["mouse"],11,43,15,0],
		"1f42e":[["\uD83D\uDC2E"],"\uE52B","\uDBB8\uDDD1",["cow"],11,44,15,0],
		"1f42f":[["\uD83D\uDC2F"],"\uE050","\uDBB8\uDDC0",["tiger"],11,45,15,0],
		"1f430":[["\uD83D\uDC30"],"\uE52C","\uDBB8\uDDD2",["rabbit"],11,46,15,0],
		"1f431":[["\uD83D\uDC31"],"\uE04F","\uDBB8\uDDB8",["cat"],11,47,15,0],
		"1f432":[["\uD83D\uDC32"],"","\uDBB8\uDDDE",["dragon_face"],11,48,15,0],
		"1f433":[["\uD83D\uDC33"],"\uE054","\uDBB8\uDDC3",["whale"],11,49,15,0],
		"1f434":[["\uD83D\uDC34"],"\uE01A","\uDBB8\uDDBE",["horse"],11,50,15,0],
		"1f435":[["\uD83D\uDC35"],"\uE109","\uDBB8\uDDC4",["monkey_face"],11,51,15,0],
		"1f436":[["\uD83D\uDC36"],"\uE052","\uDBB8\uDDB7",["dog"],11,52,15,0],
		"1f437":[["\uD83D\uDC37"],"\uE10B","\uDBB8\uDDBF",["pig"],11,53,15,0],
		"1f438":[["\uD83D\uDC38"],"\uE531","\uDBB8\uDDD7",["frog"],11,54,15,0],
		"1f439":[["\uD83D\uDC39"],"\uE524","\uDBB8\uDDCA",["hamster"],11,55,15,0],
		"1f43a":[["\uD83D\uDC3A"],"\uE52A","\uDBB8\uDDD0",["wolf"],11,56,15,0],
		"1f43b-200d-2744-fe0f":[["\uD83D\uDC3B\u200D\u2744\uFE0F","\uD83D\uDC3B\u200D\u2744"],"","",["polar_bear"],11,57,15,0],
		"1f43b":[["\uD83D\uDC3B"],"\uE051","\uDBB8\uDDC1",["bear"],11,58,15,0],
		"1f43c":[["\uD83D\uDC3C"],"","\uDBB8\uDDDF",["panda_face"],11,59,15,0],
		"1f43d":[["\uD83D\uDC3D"],"","\uDBB8\uDDE0",["pig_nose"],12,0,15,0],
		"1f43e":[["\uD83D\uDC3E"],"","\uDBB8\uDDDB",["feet","paw_prints"],12,1,15,0],
		"1f43f-fe0f":[["\uD83D\uDC3F\uFE0F","\uD83D\uDC3F"],"","",["chipmunk"],12,2,15,0],
		"1f440":[["\uD83D\uDC40"],"\uE419","\uDBB8\uDD90",["eyes"],12,3,15,0],
		"1f441-fe0f-200d-1f5e8-fe0f":[["\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8\uFE0F"],"","",["eye-in-speech-bubble"],12,4,7,0],
		"1f441-fe0f":[["\uD83D\uDC41\uFE0F","\uD83D\uDC41"],"","",["eye"],12,5,15,0],
		"1f442":[["\uD83D\uDC42"],"\uE41B","\uDBB8\uDD91",["ear"],12,6,15,0],
		"1f443":[["\uD83D\uDC43"],"\uE41A","\uDBB8\uDD92",["nose"],12,12,15,0],
		"1f444":[["\uD83D\uDC44"],"\uE41C","\uDBB8\uDD93",["lips"],12,18,15,0],
		"1f445":[["\uD83D\uDC45"],"","\uDBB8\uDD94",["tongue"],12,19,15,0],
		"1f446":[["\uD83D\uDC46"],"\uE22E","\uDBBA\uDF99",["point_up_2"],12,20,15,0],
		"1f447":[["\uD83D\uDC47"],"\uE22F","\uDBBA\uDF9A",["point_down"],12,26,15,0],
		"1f448":[["\uD83D\uDC48"],"\uE230","\uDBBA\uDF9B",["point_left"],12,32,15,0],
		"1f449":[["\uD83D\uDC49"],"\uE231","\uDBBA\uDF9C",["point_right"],12,38,15,0],
		"1f44a":[["\uD83D\uDC4A"],"\uE00D","\uDBBA\uDF96",["facepunch","punch"],12,44,15,0],
		"1f44b":[["\uD83D\uDC4B"],"\uE41E","\uDBBA\uDF9D",["wave"],12,50,15,0],
		"1f44c":[["\uD83D\uDC4C"],"\uE420","\uDBBA\uDF9F",["ok_hand"],12,56,15,0],
		"1f44d":[["\uD83D\uDC4D"],"\uE00E","\uDBBA\uDF97",["+1","thumbsup"],13,2,15,0],
		"1f44e":[["\uD83D\uDC4E"],"\uE421","\uDBBA\uDFA0",["-1","thumbsdown"],13,8,15,0],
		"1f44f":[["\uD83D\uDC4F"],"\uE41F","\uDBBA\uDF9E",["clap"],13,14,15,0],
		"1f450":[["\uD83D\uDC50"],"\uE422","\uDBBA\uDFA1",["open_hands"],13,20,15,0],
		"1f451":[["\uD83D\uDC51"],"\uE10E","\uDBB9\uDCD1",["crown"],13,26,15,0],
		"1f452":[["\uD83D\uDC52"],"\uE318","\uDBB9\uDCD4",["womans_hat"],13,27,15,0],
		"1f453":[["\uD83D\uDC53"],"","\uDBB9\uDCCE",["eyeglasses"],13,28,15,0],
		"1f454":[["\uD83D\uDC54"],"\uE302","\uDBB9\uDCD3",["necktie"],13,29,15,0],
		"1f455":[["\uD83D\uDC55"],"\uE006","\uDBB9\uDCCF",["shirt","tshirt"],13,30,15,0],
		"1f456":[["\uD83D\uDC56"],"","\uDBB9\uDCD0",["jeans"],13,31,15,0],
		"1f457":[["\uD83D\uDC57"],"\uE319","\uDBB9\uDCD5",["dress"],13,32,15,0],
		"1f458":[["\uD83D\uDC58"],"\uE321","\uDBB9\uDCD9",["kimono"],13,33,15,0],
		"1f459":[["\uD83D\uDC59"],"\uE322","\uDBB9\uDCDA",["bikini"],13,34,15,0],
		"1f45a":[["\uD83D\uDC5A"],"","\uDBB9\uDCDB",["womans_clothes"],13,35,15,0],
		"1f45b":[["\uD83D\uDC5B"],"","\uDBB9\uDCDC",["purse"],13,36,15,0],
		"1f45c":[["\uD83D\uDC5C"],"\uE323","\uDBB9\uDCF0",["handbag"],13,37,15,0],
		"1f45d":[["\uD83D\uDC5D"],"","\uDBB9\uDCF1",["pouch"],13,38,15,0],
		"1f45e":[["\uD83D\uDC5E"],"","\uDBB9\uDCCC",["mans_shoe","shoe"],13,39,15,0],
		"1f45f":[["\uD83D\uDC5F"],"\uE007","\uDBB9\uDCCD",["athletic_shoe"],13,40,15,0],
		"1f460":[["\uD83D\uDC60"],"\uE13E","\uDBB9\uDCD6",["high_heel"],13,41,15,0],
		"1f461":[["\uD83D\uDC61"],"\uE31A","\uDBB9\uDCD7",["sandal"],13,42,15,0],
		"1f462":[["\uD83D\uDC62"],"\uE31B","\uDBB9\uDCD8",["boot"],13,43,15,0],
		"1f463":[["\uD83D\uDC63"],"\uE536","\uDBB9\uDD53",["footprints"],13,44,15,0],
		"1f464":[["\uD83D\uDC64"],"","\uDBB8\uDD9A",["bust_in_silhouette"],13,45,15,0],
		"1f465":[["\uD83D\uDC65"],"","",["busts_in_silhouette"],13,46,15,0],
		"1f466":[["\uD83D\uDC66"],"\uE001","\uDBB8\uDD9B",["boy"],13,47,15,0],
		"1f467":[["\uD83D\uDC67"],"\uE002","\uDBB8\uDD9C",["girl"],13,53,15,0],
		"1f468-200d-1f33e":[["\uD83D\uDC68\u200D\uD83C\uDF3E"],"","",["male-farmer"],13,59,15,0],
		"1f468-200d-1f373":[["\uD83D\uDC68\u200D\uD83C\uDF73"],"","",["male-cook"],14,5,15,0],
		"1f468-200d-1f37c":[["\uD83D\uDC68\u200D\uD83C\uDF7C"],"","",["man_feeding_baby"],14,11,15,0],
		"1f468-200d-1f393":[["\uD83D\uDC68\u200D\uD83C\uDF93"],"","",["male-student"],14,17,15,0],
		"1f468-200d-1f3a4":[["\uD83D\uDC68\u200D\uD83C\uDFA4"],"","",["male-singer"],14,23,15,0],
		"1f468-200d-1f3a8":[["\uD83D\uDC68\u200D\uD83C\uDFA8"],"","",["male-artist"],14,29,15,0],
		"1f468-200d-1f3eb":[["\uD83D\uDC68\u200D\uD83C\uDFEB"],"","",["male-teacher"],14,35,15,0],
		"1f468-200d-1f3ed":[["\uD83D\uDC68\u200D\uD83C\uDFED"],"","",["male-factory-worker"],14,41,15,0],
		"1f468-200d-1f466-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["man-boy-boy"],14,47,15,0],
		"1f468-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC66"],"","",["man-boy"],14,48,15,0],
		"1f468-200d-1f467-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["man-girl-boy"],14,49,15,0],
		"1f468-200d-1f467-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["man-girl-girl"],14,50,15,0],
		"1f468-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC67"],"","",["man-girl"],14,51,15,0],
		"1f468-200d-1f468-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66"],"","",["man-man-boy"],14,52,15,0],
		"1f468-200d-1f468-200d-1f466-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["man-man-boy-boy"],14,53,15,0],
		"1f468-200d-1f468-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67"],"","",["man-man-girl"],14,54,15,0],
		"1f468-200d-1f468-200d-1f467-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["man-man-girl-boy"],14,55,15,0],
		"1f468-200d-1f468-200d-1f467-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["man-man-girl-girl"],14,56,15,0],
		"1f468-200d-1f469-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66","\uD83D\uDC6A"],"","",["man-woman-boy","family"],14,57,15,0],
		"1f468-200d-1f469-200d-1f466-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["man-woman-boy-boy"],14,58,15,0],
		"1f468-200d-1f469-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67"],"","",["man-woman-girl"],14,59,15,0],
		"1f468-200d-1f469-200d-1f467-200d-1f466":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["man-woman-girl-boy"],15,0,15,0],
		"1f468-200d-1f469-200d-1f467-200d-1f467":[["\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["man-woman-girl-girl"],15,1,15,0],
		"1f468-200d-1f4bb":[["\uD83D\uDC68\u200D\uD83D\uDCBB"],"","",["male-technologist"],15,2,15,0],
		"1f468-200d-1f4bc":[["\uD83D\uDC68\u200D\uD83D\uDCBC"],"","",["male-office-worker"],15,8,15,0],
		"1f468-200d-1f527":[["\uD83D\uDC68\u200D\uD83D\uDD27"],"","",["male-mechanic"],15,14,15,0],
		"1f468-200d-1f52c":[["\uD83D\uDC68\u200D\uD83D\uDD2C"],"","",["male-scientist"],15,20,15,0],
		"1f468-200d-1f680":[["\uD83D\uDC68\u200D\uD83D\uDE80"],"","",["male-astronaut"],15,26,15,0],
		"1f468-200d-1f692":[["\uD83D\uDC68\u200D\uD83D\uDE92"],"","",["male-firefighter"],15,32,15,0],
		"1f468-200d-1f9af":[["\uD83D\uDC68\u200D\uD83E\uDDAF"],"","",["man_with_probing_cane"],15,38,15,0],
		"1f468-200d-1f9b0":[["\uD83D\uDC68\u200D\uD83E\uDDB0"],"","",["red_haired_man"],15,44,15,0],
		"1f468-200d-1f9b1":[["\uD83D\uDC68\u200D\uD83E\uDDB1"],"","",["curly_haired_man"],15,50,15,0],
		"1f468-200d-1f9b2":[["\uD83D\uDC68\u200D\uD83E\uDDB2"],"","",["bald_man"],15,56,15,0],
		"1f468-200d-1f9b3":[["\uD83D\uDC68\u200D\uD83E\uDDB3"],"","",["white_haired_man"],16,2,15,0],
		"1f468-200d-1f9bc":[["\uD83D\uDC68\u200D\uD83E\uDDBC"],"","",["man_in_motorized_wheelchair"],16,8,15,0],
		"1f468-200d-1f9bd":[["\uD83D\uDC68\u200D\uD83E\uDDBD"],"","",["man_in_manual_wheelchair"],16,14,15,0],
		"1f468-200d-2695-fe0f":[["\uD83D\uDC68\u200D\u2695\uFE0F","\uD83D\uDC68\u200D\u2695"],"","",["male-doctor"],16,20,15,0],
		"1f468-200d-2696-fe0f":[["\uD83D\uDC68\u200D\u2696\uFE0F","\uD83D\uDC68\u200D\u2696"],"","",["male-judge"],16,26,15,0],
		"1f468-200d-2708-fe0f":[["\uD83D\uDC68\u200D\u2708\uFE0F","\uD83D\uDC68\u200D\u2708"],"","",["male-pilot"],16,32,15,0],
		"1f468-200d-2764-fe0f-200d-1f468":[["\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC68","\uD83D\uDC68\u200D\u2764\u200D\uD83D\uDC68"],"","",["man-heart-man"],16,38,15,0],
		"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468":[["\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68","\uD83D\uDC68\u200D\u2764\u200D\uD83D\uDC8B\u200D\uD83D\uDC68"],"","",["man-kiss-man"],17,4,15,0],
		"1f468":[["\uD83D\uDC68"],"\uE004","\uDBB8\uDD9D",["man"],17,30,15,0],
		"1f469-200d-1f33e":[["\uD83D\uDC69\u200D\uD83C\uDF3E"],"","",["female-farmer"],17,36,15,0],
		"1f469-200d-1f373":[["\uD83D\uDC69\u200D\uD83C\uDF73"],"","",["female-cook"],17,42,15,0],
		"1f469-200d-1f37c":[["\uD83D\uDC69\u200D\uD83C\uDF7C"],"","",["woman_feeding_baby"],17,48,15,0],
		"1f469-200d-1f393":[["\uD83D\uDC69\u200D\uD83C\uDF93"],"","",["female-student"],17,54,15,0],
		"1f469-200d-1f3a4":[["\uD83D\uDC69\u200D\uD83C\uDFA4"],"","",["female-singer"],18,0,15,0],
		"1f469-200d-1f3a8":[["\uD83D\uDC69\u200D\uD83C\uDFA8"],"","",["female-artist"],18,6,15,0],
		"1f469-200d-1f3eb":[["\uD83D\uDC69\u200D\uD83C\uDFEB"],"","",["female-teacher"],18,12,15,0],
		"1f469-200d-1f3ed":[["\uD83D\uDC69\u200D\uD83C\uDFED"],"","",["female-factory-worker"],18,18,15,0],
		"1f469-200d-1f466-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["woman-boy-boy"],18,24,15,0],
		"1f469-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC66"],"","",["woman-boy"],18,25,15,0],
		"1f469-200d-1f467-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["woman-girl-boy"],18,26,15,0],
		"1f469-200d-1f467-200d-1f467":[["\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["woman-girl-girl"],18,27,15,0],
		"1f469-200d-1f467":[["\uD83D\uDC69\u200D\uD83D\uDC67"],"","",["woman-girl"],18,28,15,0],
		"1f469-200d-1f469-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66"],"","",["woman-woman-boy"],18,29,15,0],
		"1f469-200d-1f469-200d-1f466-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66"],"","",["woman-woman-boy-boy"],18,30,15,0],
		"1f469-200d-1f469-200d-1f467":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67"],"","",["woman-woman-girl"],18,31,15,0],
		"1f469-200d-1f469-200d-1f467-200d-1f466":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"],"","",["woman-woman-girl-boy"],18,32,15,0],
		"1f469-200d-1f469-200d-1f467-200d-1f467":[["\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67"],"","",["woman-woman-girl-girl"],18,33,15,0],
		"1f469-200d-1f4bb":[["\uD83D\uDC69\u200D\uD83D\uDCBB"],"","",["female-technologist"],18,34,15,0],
		"1f469-200d-1f4bc":[["\uD83D\uDC69\u200D\uD83D\uDCBC"],"","",["female-office-worker"],18,40,15,0],
		"1f469-200d-1f527":[["\uD83D\uDC69\u200D\uD83D\uDD27"],"","",["female-mechanic"],18,46,15,0],
		"1f469-200d-1f52c":[["\uD83D\uDC69\u200D\uD83D\uDD2C"],"","",["female-scientist"],18,52,15,0],
		"1f469-200d-1f680":[["\uD83D\uDC69\u200D\uD83D\uDE80"],"","",["female-astronaut"],18,58,15,0],
		"1f469-200d-1f692":[["\uD83D\uDC69\u200D\uD83D\uDE92"],"","",["female-firefighter"],19,4,15,0],
		"1f469-200d-1f9af":[["\uD83D\uDC69\u200D\uD83E\uDDAF"],"","",["woman_with_probing_cane"],19,10,15,0],
		"1f469-200d-1f9b0":[["\uD83D\uDC69\u200D\uD83E\uDDB0"],"","",["red_haired_woman"],19,16,15,0],
		"1f469-200d-1f9b1":[["\uD83D\uDC69\u200D\uD83E\uDDB1"],"","",["curly_haired_woman"],19,22,15,0],
		"1f469-200d-1f9b2":[["\uD83D\uDC69\u200D\uD83E\uDDB2"],"","",["bald_woman"],19,28,15,0],
		"1f469-200d-1f9b3":[["\uD83D\uDC69\u200D\uD83E\uDDB3"],"","",["white_haired_woman"],19,34,15,0],
		"1f469-200d-1f9bc":[["\uD83D\uDC69\u200D\uD83E\uDDBC"],"","",["woman_in_motorized_wheelchair"],19,40,15,0],
		"1f469-200d-1f9bd":[["\uD83D\uDC69\u200D\uD83E\uDDBD"],"","",["woman_in_manual_wheelchair"],19,46,15,0],
		"1f469-200d-2695-fe0f":[["\uD83D\uDC69\u200D\u2695\uFE0F","\uD83D\uDC69\u200D\u2695"],"","",["female-doctor"],19,52,15,0],
		"1f469-200d-2696-fe0f":[["\uD83D\uDC69\u200D\u2696\uFE0F","\uD83D\uDC69\u200D\u2696"],"","",["female-judge"],19,58,15,0],
		"1f469-200d-2708-fe0f":[["\uD83D\uDC69\u200D\u2708\uFE0F","\uD83D\uDC69\u200D\u2708"],"","",["female-pilot"],20,4,15,0],
		"1f469-200d-2764-fe0f-200d-1f468":[["\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC68","\uD83D\uDC69\u200D\u2764\u200D\uD83D\uDC68"],"","",["woman-heart-man"],20,10,15,0],
		"1f469-200d-2764-fe0f-200d-1f469":[["\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69","\uD83D\uDC69\u200D\u2764\u200D\uD83D\uDC69"],"","",["woman-heart-woman"],20,36,15,0],
		"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468":[["\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68","\uD83D\uDC69\u200D\u2764\u200D\uD83D\uDC8B\u200D\uD83D\uDC68"],"","",["woman-kiss-man"],21,2,15,0],
		"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469":[["\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69","\uD83D\uDC69\u200D\u2764\u200D\uD83D\uDC8B\u200D\uD83D\uDC69"],"","",["woman-kiss-woman"],21,28,15,0],
		"1f469":[["\uD83D\uDC69"],"\uE005","\uDBB8\uDD9E",["woman"],21,54,15,0],
		"1f46b":[["\uD83D\uDC6B"],"\uE428","\uDBB8\uDDA0",["man_and_woman_holding_hands","woman_and_man_holding_hands","couple"],22,1,15,0],
		"1f46c":[["\uD83D\uDC6C"],"","",["two_men_holding_hands","men_holding_hands"],22,27,15,0],
		"1f46d":[["\uD83D\uDC6D"],"","",["two_women_holding_hands","women_holding_hands"],22,53,15,0],
		"1f46e-200d-2640-fe0f":[["\uD83D\uDC6E\u200D\u2640\uFE0F","\uD83D\uDC6E\u200D\u2640"],"","",["female-police-officer"],23,19,15,0],
		"1f46e-200d-2642-fe0f":[["\uD83D\uDC6E\u200D\u2642\uFE0F","\uD83D\uDC6E\u200D\u2642","\uD83D\uDC6E"],"","",["male-police-officer","cop"],23,25,15,0],
		"1f46f-200d-2640-fe0f":[["\uD83D\uDC6F\u200D\u2640\uFE0F","\uD83D\uDC6F\u200D\u2640","\uD83D\uDC6F"],"","",["women-with-bunny-ears-partying","woman-with-bunny-ears-partying","dancers"],23,37,15,0],
		"1f46f-200d-2642-fe0f":[["\uD83D\uDC6F\u200D\u2642\uFE0F","\uD83D\uDC6F\u200D\u2642"],"","",["men-with-bunny-ears-partying","man-with-bunny-ears-partying"],23,38,15,0],
		"1f470-200d-2640-fe0f":[["\uD83D\uDC70\u200D\u2640\uFE0F","\uD83D\uDC70\u200D\u2640"],"","",["woman_with_veil"],23,40,15,0],
		"1f470-200d-2642-fe0f":[["\uD83D\uDC70\u200D\u2642\uFE0F","\uD83D\uDC70\u200D\u2642"],"","",["man_with_veil"],23,46,15,0],
		"1f470":[["\uD83D\uDC70"],"","\uDBB8\uDDA3",["bride_with_veil"],23,52,15,0],
		"1f471-200d-2640-fe0f":[["\uD83D\uDC71\u200D\u2640\uFE0F","\uD83D\uDC71\u200D\u2640"],"","",["blond-haired-woman"],23,58,15,0],
		"1f471-200d-2642-fe0f":[["\uD83D\uDC71\u200D\u2642\uFE0F","\uD83D\uDC71\u200D\u2642","\uD83D\uDC71"],"","",["blond-haired-man","person_with_blond_hair"],24,4,15,0],
		"1f472":[["\uD83D\uDC72"],"\uE516","\uDBB8\uDDA5",["man_with_gua_pi_mao"],24,16,15,0],
		"1f473-200d-2640-fe0f":[["\uD83D\uDC73\u200D\u2640\uFE0F","\uD83D\uDC73\u200D\u2640"],"","",["woman-wearing-turban"],24,22,15,0],
		"1f473-200d-2642-fe0f":[["\uD83D\uDC73\u200D\u2642\uFE0F","\uD83D\uDC73\u200D\u2642","\uD83D\uDC73"],"","",["man-wearing-turban","man_with_turban"],24,28,15,0],
		"1f474":[["\uD83D\uDC74"],"\uE518","\uDBB8\uDDA7",["older_man"],24,40,15,0],
		"1f475":[["\uD83D\uDC75"],"\uE519","\uDBB8\uDDA8",["older_woman"],24,46,15,0],
		"1f476":[["\uD83D\uDC76"],"\uE51A","\uDBB8\uDDA9",["baby"],24,52,15,0],
		"1f477-200d-2640-fe0f":[["\uD83D\uDC77\u200D\u2640\uFE0F","\uD83D\uDC77\u200D\u2640"],"","",["female-construction-worker"],24,58,15,0],
		"1f477-200d-2642-fe0f":[["\uD83D\uDC77\u200D\u2642\uFE0F","\uD83D\uDC77\u200D\u2642","\uD83D\uDC77"],"","",["male-construction-worker","construction_worker"],25,4,15,0],
		"1f478":[["\uD83D\uDC78"],"\uE51C","\uDBB8\uDDAB",["princess"],25,16,15,0],
		"1f479":[["\uD83D\uDC79"],"","\uDBB8\uDDAC",["japanese_ogre"],25,22,15,0],
		"1f47a":[["\uD83D\uDC7A"],"","\uDBB8\uDDAD",["japanese_goblin"],25,23,15,0],
		"1f47b":[["\uD83D\uDC7B"],"\uE11B","\uDBB8\uDDAE",["ghost"],25,24,15,0],
		"1f47c":[["\uD83D\uDC7C"],"\uE04E","\uDBB8\uDDAF",["angel"],25,25,15,0],
		"1f47d":[["\uD83D\uDC7D"],"\uE10C","\uDBB8\uDDB0",["alien"],25,31,15,0],
		"1f47e":[["\uD83D\uDC7E"],"\uE12B","\uDBB8\uDDB1",["space_invader"],25,32,15,0],
		"1f47f":[["\uD83D\uDC7F"],"\uE11A","\uDBB8\uDDB2",["imp"],25,33,15,0],
		"1f480":[["\uD83D\uDC80"],"\uE11C","\uDBB8\uDDB3",["skull"],25,34,15,0],
		"1f481-200d-2640-fe0f":[["\uD83D\uDC81\u200D\u2640\uFE0F","\uD83D\uDC81\u200D\u2640","\uD83D\uDC81"],"","",["woman-tipping-hand","information_desk_person"],25,35,15,0],
		"1f481-200d-2642-fe0f":[["\uD83D\uDC81\u200D\u2642\uFE0F","\uD83D\uDC81\u200D\u2642"],"","",["man-tipping-hand"],25,41,15,0],
		"1f482-200d-2640-fe0f":[["\uD83D\uDC82\u200D\u2640\uFE0F","\uD83D\uDC82\u200D\u2640"],"","",["female-guard"],25,53,15,0],
		"1f482-200d-2642-fe0f":[["\uD83D\uDC82\u200D\u2642\uFE0F","\uD83D\uDC82\u200D\u2642","\uD83D\uDC82"],"","",["male-guard","guardsman"],25,59,15,0],
		"1f483":[["\uD83D\uDC83"],"\uE51F","\uDBB8\uDDB6",["dancer"],26,11,15,0],
		"1f484":[["\uD83D\uDC84"],"\uE31C","\uDBB8\uDD95",["lipstick"],26,17,15,0],
		"1f485":[["\uD83D\uDC85"],"\uE31D","\uDBB8\uDD96",["nail_care"],26,18,15,0],
		"1f486-200d-2640-fe0f":[["\uD83D\uDC86\u200D\u2640\uFE0F","\uD83D\uDC86\u200D\u2640","\uD83D\uDC86"],"","",["woman-getting-massage","massage"],26,24,15,0],
		"1f486-200d-2642-fe0f":[["\uD83D\uDC86\u200D\u2642\uFE0F","\uD83D\uDC86\u200D\u2642"],"","",["man-getting-massage"],26,30,15,0],
		"1f487-200d-2640-fe0f":[["\uD83D\uDC87\u200D\u2640\uFE0F","\uD83D\uDC87\u200D\u2640","\uD83D\uDC87"],"","",["woman-getting-haircut","haircut"],26,42,15,0],
		"1f487-200d-2642-fe0f":[["\uD83D\uDC87\u200D\u2642\uFE0F","\uD83D\uDC87\u200D\u2642"],"","",["man-getting-haircut"],26,48,15,0],
		"1f488":[["\uD83D\uDC88"],"\uE320","\uDBB8\uDD99",["barber"],27,0,15,0],
		"1f489":[["\uD83D\uDC89"],"\uE13B","\uDBB9\uDD09",["syringe"],27,1,15,0],
		"1f48a":[["\uD83D\uDC8A"],"\uE30F","\uDBB9\uDD0A",["pill"],27,2,15,0],
		"1f48b":[["\uD83D\uDC8B"],"\uE003","\uDBBA\uDC23",["kiss"],27,3,15,0],
		"1f48c":[["\uD83D\uDC8C"],"","\uDBBA\uDC24",["love_letter"],27,4,15,0],
		"1f48d":[["\uD83D\uDC8D"],"\uE034","\uDBBA\uDC25",["ring"],27,5,15,0],
		"1f48e":[["\uD83D\uDC8E"],"\uE035","\uDBBA\uDC26",["gem"],27,6,15,0],
		"1f48f":[["\uD83D\uDC8F"],"\uE111","\uDBBA\uDC27",["couplekiss"],27,7,15,0],
		"1f490":[["\uD83D\uDC90"],"\uE306","\uDBBA\uDC28",["bouquet"],27,33,15,0],
		"1f491":[["\uD83D\uDC91"],"\uE425","\uDBBA\uDC29",["couple_with_heart"],27,34,15,0],
		"1f492":[["\uD83D\uDC92"],"\uE43D","\uDBBA\uDC2A",["wedding"],28,0,15,0],
		"1f493":[["\uD83D\uDC93"],"\uE327","\uDBBA\uDF0D",["heartbeat"],28,1,15,0],
		"1f494":[["\uD83D\uDC94"],"\uE023","\uDBBA\uDF0E",["broken_heart"],28,2,15,0,"<\/3"],
		"1f495":[["\uD83D\uDC95"],"","\uDBBA\uDF0F",["two_hearts"],28,3,15,0],
		"1f496":[["\uD83D\uDC96"],"","\uDBBA\uDF10",["sparkling_heart"],28,4,15,0],
		"1f497":[["\uD83D\uDC97"],"\uE328","\uDBBA\uDF11",["heartpulse"],28,5,15,0],
		"1f498":[["\uD83D\uDC98"],"\uE329","\uDBBA\uDF12",["cupid"],28,6,15,0],
		"1f499":[["\uD83D\uDC99"],"\uE32A","\uDBBA\uDF13",["blue_heart"],28,7,15,0,"<3"],
		"1f49a":[["\uD83D\uDC9A"],"\uE32B","\uDBBA\uDF14",["green_heart"],28,8,15,0,"<3"],
		"1f49b":[["\uD83D\uDC9B"],"\uE32C","\uDBBA\uDF15",["yellow_heart"],28,9,15,0,"<3"],
		"1f49c":[["\uD83D\uDC9C"],"\uE32D","\uDBBA\uDF16",["purple_heart"],28,10,15,0,"<3"],
		"1f49d":[["\uD83D\uDC9D"],"\uE437","\uDBBA\uDF17",["gift_heart"],28,11,15,0],
		"1f49e":[["\uD83D\uDC9E"],"","\uDBBA\uDF18",["revolving_hearts"],28,12,15,0],
		"1f49f":[["\uD83D\uDC9F"],"\uE204","\uDBBA\uDF19",["heart_decoration"],28,13,15,0],
		"1f4a0":[["\uD83D\uDCA0"],"","\uDBBA\uDF55",["diamond_shape_with_a_dot_inside"],28,14,15,0],
		"1f4a1":[["\uD83D\uDCA1"],"\uE10F","\uDBBA\uDF56",["bulb"],28,15,15,0],
		"1f4a2":[["\uD83D\uDCA2"],"\uE334","\uDBBA\uDF57",["anger"],28,16,15,0],
		"1f4a3":[["\uD83D\uDCA3"],"\uE311","\uDBBA\uDF58",["bomb"],28,17,15,0],
		"1f4a4":[["\uD83D\uDCA4"],"\uE13C","\uDBBA\uDF59",["zzz"],28,18,15,0],
		"1f4a5":[["\uD83D\uDCA5"],"","\uDBBA\uDF5A",["boom","collision"],28,19,15,0],
		"1f4a6":[["\uD83D\uDCA6"],"\uE331","\uDBBA\uDF5B",["sweat_drops"],28,20,15,0],
		"1f4a7":[["\uD83D\uDCA7"],"","\uDBBA\uDF5C",["droplet"],28,21,15,0],
		"1f4a8":[["\uD83D\uDCA8"],"\uE330","\uDBBA\uDF5D",["dash"],28,22,15,0],
		"1f4a9":[["\uD83D\uDCA9"],"\uE05A","\uDBB9\uDCF4",["hankey","poop","shit"],28,23,15,0],
		"1f4aa":[["\uD83D\uDCAA"],"\uE14C","\uDBBA\uDF5E",["muscle"],28,24,15,0],
		"1f4ab":[["\uD83D\uDCAB"],"","\uDBBA\uDF5F",["dizzy"],28,30,15,0],
		"1f4ac":[["\uD83D\uDCAC"],"","\uDBB9\uDD32",["speech_balloon"],28,31,15,0],
		"1f4ad":[["\uD83D\uDCAD"],"","",["thought_balloon"],28,32,15,0],
		"1f4ae":[["\uD83D\uDCAE"],"","\uDBBA\uDF7A",["white_flower"],28,33,15,0],
		"1f4af":[["\uD83D\uDCAF"],"","\uDBBA\uDF7B",["100"],28,34,15,0],
		"1f4b0":[["\uD83D\uDCB0"],"\uE12F","\uDBB9\uDCDD",["moneybag"],28,35,15,0],
		"1f4b1":[["\uD83D\uDCB1"],"\uE149","\uDBB9\uDCDE",["currency_exchange"],28,36,15,0],
		"1f4b2":[["\uD83D\uDCB2"],"","\uDBB9\uDCE0",["heavy_dollar_sign"],28,37,15,0],
		"1f4b3":[["\uD83D\uDCB3"],"","\uDBB9\uDCE1",["credit_card"],28,38,15,0],
		"1f4b4":[["\uD83D\uDCB4"],"","\uDBB9\uDCE2",["yen"],28,39,15,0],
		"1f4b5":[["\uD83D\uDCB5"],"","\uDBB9\uDCE3",["dollar"],28,40,15,0],
		"1f4b6":[["\uD83D\uDCB6"],"","",["euro"],28,41,15,0],
		"1f4b7":[["\uD83D\uDCB7"],"","",["pound"],28,42,15,0],
		"1f4b8":[["\uD83D\uDCB8"],"","\uDBB9\uDCE4",["money_with_wings"],28,43,15,0],
		"1f4b9":[["\uD83D\uDCB9"],"\uE14A","\uDBB9\uDCDF",["chart"],28,44,15,0],
		"1f4ba":[["\uD83D\uDCBA"],"\uE11F","\uDBB9\uDD37",["seat"],28,45,15,0],
		"1f4bb":[["\uD83D\uDCBB"],"\uE00C","\uDBB9\uDD38",["computer"],28,46,15,0],
		"1f4bc":[["\uD83D\uDCBC"],"\uE11E","\uDBB9\uDD3B",["briefcase"],28,47,15,0],
		"1f4bd":[["\uD83D\uDCBD"],"\uE316","\uDBB9\uDD3C",["minidisc"],28,48,15,0],
		"1f4be":[["\uD83D\uDCBE"],"","\uDBB9\uDD3D",["floppy_disk"],28,49,15,0],
		"1f4bf":[["\uD83D\uDCBF"],"\uE126","\uDBBA\uDC1D",["cd"],28,50,15,0],
		"1f4c0":[["\uD83D\uDCC0"],"\uE127","\uDBBA\uDC1E",["dvd"],28,51,15,0],
		"1f4c1":[["\uD83D\uDCC1"],"","\uDBB9\uDD43",["file_folder"],28,52,15,0],
		"1f4c2":[["\uD83D\uDCC2"],"","\uDBB9\uDD44",["open_file_folder"],28,53,15,0],
		"1f4c3":[["\uD83D\uDCC3"],"","\uDBB9\uDD40",["page_with_curl"],28,54,15,0],
		"1f4c4":[["\uD83D\uDCC4"],"","\uDBB9\uDD41",["page_facing_up"],28,55,15,0],
		"1f4c5":[["\uD83D\uDCC5"],"","\uDBB9\uDD42",["date"],28,56,15,0],
		"1f4c6":[["\uD83D\uDCC6"],"","\uDBB9\uDD49",["calendar"],28,57,15,0],
		"1f4c7":[["\uD83D\uDCC7"],"","\uDBB9\uDD4D",["card_index"],28,58,15,0],
		"1f4c8":[["\uD83D\uDCC8"],"","\uDBB9\uDD4B",["chart_with_upwards_trend"],28,59,15,0],
		"1f4c9":[["\uD83D\uDCC9"],"","\uDBB9\uDD4C",["chart_with_downwards_trend"],29,0,15,0],
		"1f4ca":[["\uD83D\uDCCA"],"","\uDBB9\uDD4A",["bar_chart"],29,1,15,0],
		"1f4cb":[["\uD83D\uDCCB"],"","\uDBB9\uDD48",["clipboard"],29,2,15,0],
		"1f4cc":[["\uD83D\uDCCC"],"","\uDBB9\uDD4E",["pushpin"],29,3,15,0],
		"1f4cd":[["\uD83D\uDCCD"],"","\uDBB9\uDD3F",["round_pushpin"],29,4,15,0],
		"1f4ce":[["\uD83D\uDCCE"],"","\uDBB9\uDD3A",["paperclip"],29,5,15,0],
		"1f4cf":[["\uD83D\uDCCF"],"","\uDBB9\uDD50",["straight_ruler"],29,6,15,0],
		"1f4d0":[["\uD83D\uDCD0"],"","\uDBB9\uDD51",["triangular_ruler"],29,7,15,0],
		"1f4d1":[["\uD83D\uDCD1"],"","\uDBB9\uDD52",["bookmark_tabs"],29,8,15,0],
		"1f4d2":[["\uD83D\uDCD2"],"","\uDBB9\uDD4F",["ledger"],29,9,15,0],
		"1f4d3":[["\uD83D\uDCD3"],"","\uDBB9\uDD45",["notebook"],29,10,15,0],
		"1f4d4":[["\uD83D\uDCD4"],"","\uDBB9\uDD47",["notebook_with_decorative_cover"],29,11,15,0],
		"1f4d5":[["\uD83D\uDCD5"],"","\uDBB9\uDD02",["closed_book"],29,12,15,0],
		"1f4d6":[["\uD83D\uDCD6"],"\uE148","\uDBB9\uDD46",["book","open_book"],29,13,15,0],
		"1f4d7":[["\uD83D\uDCD7"],"","\uDBB9\uDCFF",["green_book"],29,14,15,0],
		"1f4d8":[["\uD83D\uDCD8"],"","\uDBB9\uDD00",["blue_book"],29,15,15,0],
		"1f4d9":[["\uD83D\uDCD9"],"","\uDBB9\uDD01",["orange_book"],29,16,15,0],
		"1f4da":[["\uD83D\uDCDA"],"","\uDBB9\uDD03",["books"],29,17,15,0],
		"1f4db":[["\uD83D\uDCDB"],"","\uDBB9\uDD04",["name_badge"],29,18,15,0],
		"1f4dc":[["\uD83D\uDCDC"],"","\uDBB9\uDCFD",["scroll"],29,19,15,0],
		"1f4dd":[["\uD83D\uDCDD"],"\uE301","\uDBB9\uDD27",["memo","pencil"],29,20,15,0],
		"1f4de":[["\uD83D\uDCDE"],"","\uDBB9\uDD24",["telephone_receiver"],29,21,15,0],
		"1f4df":[["\uD83D\uDCDF"],"","\uDBB9\uDD22",["pager"],29,22,15,0],
		"1f4e0":[["\uD83D\uDCE0"],"\uE00B","\uDBB9\uDD28",["fax"],29,23,15,0],
		"1f4e1":[["\uD83D\uDCE1"],"\uE14B","\uDBB9\uDD31",["satellite_antenna"],29,24,15,0],
		"1f4e2":[["\uD83D\uDCE2"],"\uE142","\uDBB9\uDD2F",["loudspeaker"],29,25,15,0],
		"1f4e3":[["\uD83D\uDCE3"],"\uE317","\uDBB9\uDD30",["mega"],29,26,15,0],
		"1f4e4":[["\uD83D\uDCE4"],"","\uDBB9\uDD33",["outbox_tray"],29,27,15,0],
		"1f4e5":[["\uD83D\uDCE5"],"","\uDBB9\uDD34",["inbox_tray"],29,28,15,0],
		"1f4e6":[["\uD83D\uDCE6"],"","\uDBB9\uDD35",["package"],29,29,15,0],
		"1f4e7":[["\uD83D\uDCE7"],"","\uDBBA\uDF92",["e-mail"],29,30,15,0],
		"1f4e8":[["\uD83D\uDCE8"],"","\uDBB9\uDD2A",["incoming_envelope"],29,31,15,0],
		"1f4e9":[["\uD83D\uDCE9"],"\uE103","\uDBB9\uDD2B",["envelope_with_arrow"],29,32,15,0],
		"1f4ea":[["\uD83D\uDCEA"],"","\uDBB9\uDD2C",["mailbox_closed"],29,33,15,0],
		"1f4eb":[["\uD83D\uDCEB"],"\uE101","\uDBB9\uDD2D",["mailbox"],29,34,15,0],
		"1f4ec":[["\uD83D\uDCEC"],"","",["mailbox_with_mail"],29,35,15,0],
		"1f4ed":[["\uD83D\uDCED"],"","",["mailbox_with_no_mail"],29,36,15,0],
		"1f4ee":[["\uD83D\uDCEE"],"\uE102","\uDBB9\uDD2E",["postbox"],29,37,15,0],
		"1f4ef":[["\uD83D\uDCEF"],"","",["postal_horn"],29,38,15,0],
		"1f4f0":[["\uD83D\uDCF0"],"","\uDBBA\uDC22",["newspaper"],29,39,15,0],
		"1f4f1":[["\uD83D\uDCF1"],"\uE00A","\uDBB9\uDD25",["iphone"],29,40,15,0],
		"1f4f2":[["\uD83D\uDCF2"],"\uE104","\uDBB9\uDD26",["calling"],29,41,15,0],
		"1f4f3":[["\uD83D\uDCF3"],"\uE250","\uDBBA\uDC39",["vibration_mode"],29,42,15,0],
		"1f4f4":[["\uD83D\uDCF4"],"\uE251","\uDBBA\uDC3A",["mobile_phone_off"],29,43,15,0],
		"1f4f5":[["\uD83D\uDCF5"],"","",["no_mobile_phones"],29,44,15,0],
		"1f4f6":[["\uD83D\uDCF6"],"\uE20B","\uDBBA\uDC38",["signal_strength"],29,45,15,0],
		"1f4f7":[["\uD83D\uDCF7"],"\uE008","\uDBB9\uDCEF",["camera"],29,46,15,0],
		"1f4f8":[["\uD83D\uDCF8"],"","",["camera_with_flash"],29,47,15,0],
		"1f4f9":[["\uD83D\uDCF9"],"","\uDBB9\uDCF9",["video_camera"],29,48,15,0],
		"1f4fa":[["\uD83D\uDCFA"],"\uE12A","\uDBBA\uDC1C",["tv"],29,49,15,0],
		"1f4fb":[["\uD83D\uDCFB"],"\uE128","\uDBBA\uDC1F",["radio"],29,50,15,0],
		"1f4fc":[["\uD83D\uDCFC"],"\uE129","\uDBBA\uDC20",["vhs"],29,51,15,0],
		"1f4fd-fe0f":[["\uD83D\uDCFD\uFE0F","\uD83D\uDCFD"],"","",["film_projector"],29,52,15,0],
		"1f4ff":[["\uD83D\uDCFF"],"","",["prayer_beads"],29,53,15,0],
		"1f500":[["\uD83D\uDD00"],"","",["twisted_rightwards_arrows"],29,54,15,0],
		"1f501":[["\uD83D\uDD01"],"","",["repeat"],29,55,15,0],
		"1f502":[["\uD83D\uDD02"],"","",["repeat_one"],29,56,15,0],
		"1f503":[["\uD83D\uDD03"],"","\uDBBA\uDF91",["arrows_clockwise"],29,57,15,0],
		"1f504":[["\uD83D\uDD04"],"","",["arrows_counterclockwise"],29,58,15,0],
		"1f505":[["\uD83D\uDD05"],"","",["low_brightness"],29,59,15,0],
		"1f506":[["\uD83D\uDD06"],"","",["high_brightness"],30,0,15,0],
		"1f507":[["\uD83D\uDD07"],"","",["mute"],30,1,15,0],
		"1f508":[["\uD83D\uDD08"],"","",["speaker"],30,2,15,0],
		"1f509":[["\uD83D\uDD09"],"","",["sound"],30,3,15,0],
		"1f50a":[["\uD83D\uDD0A"],"\uE141","\uDBBA\uDC21",["loud_sound"],30,4,15,0],
		"1f50b":[["\uD83D\uDD0B"],"","\uDBB9\uDCFC",["battery"],30,5,15,0],
		"1f50c":[["\uD83D\uDD0C"],"","\uDBB9\uDCFE",["electric_plug"],30,6,15,0],
		"1f50d":[["\uD83D\uDD0D"],"\uE114","\uDBBA\uDF85",["mag"],30,7,15,0],
		"1f50e":[["\uD83D\uDD0E"],"","\uDBBA\uDF8D",["mag_right"],30,8,15,0],
		"1f50f":[["\uD83D\uDD0F"],"","\uDBBA\uDF90",["lock_with_ink_pen"],30,9,15,0],
		"1f510":[["\uD83D\uDD10"],"","\uDBBA\uDF8A",["closed_lock_with_key"],30,10,15,0],
		"1f511":[["\uD83D\uDD11"],"\uE03F","\uDBBA\uDF82",["key"],30,11,15,0],
		"1f512":[["\uD83D\uDD12"],"\uE144","\uDBBA\uDF86",["lock"],30,12,15,0],
		"1f513":[["\uD83D\uDD13"],"\uE145","\uDBBA\uDF87",["unlock"],30,13,15,0],
		"1f514":[["\uD83D\uDD14"],"\uE325","\uDBB9\uDCF2",["bell"],30,14,15,0],
		"1f515":[["\uD83D\uDD15"],"","",["no_bell"],30,15,15,0],
		"1f516":[["\uD83D\uDD16"],"","\uDBBA\uDF8F",["bookmark"],30,16,15,0],
		"1f517":[["\uD83D\uDD17"],"","\uDBBA\uDF4B",["link"],30,17,15,0],
		"1f518":[["\uD83D\uDD18"],"","\uDBBA\uDF8C",["radio_button"],30,18,15,0],
		"1f519":[["\uD83D\uDD19"],"","\uDBBA\uDF8E",["back"],30,19,15,0],
		"1f51a":[["\uD83D\uDD1A"],"","\uDBB8\uDC1A",["end"],30,20,15,0],
		"1f51b":[["\uD83D\uDD1B"],"","\uDBB8\uDC19",["on"],30,21,15,0],
		"1f51c":[["\uD83D\uDD1C"],"","\uDBB8\uDC18",["soon"],30,22,15,0],
		"1f51d":[["\uD83D\uDD1D"],"\uE24C","\uDBBA\uDF42",["top"],30,23,15,0],
		"1f51e":[["\uD83D\uDD1E"],"\uE207","\uDBBA\uDF25",["underage"],30,24,15,0],
		"1f51f":[["\uD83D\uDD1F"],"","\uDBBA\uDC3B",["keycap_ten"],30,25,15,0],
		"1f520":[["\uD83D\uDD20"],"","\uDBBA\uDF7C",["capital_abcd"],30,26,15,0],
		"1f521":[["\uD83D\uDD21"],"","\uDBBA\uDF7D",["abcd"],30,27,15,0],
		"1f522":[["\uD83D\uDD22"],"","\uDBBA\uDF7E",["1234"],30,28,15,0],
		"1f523":[["\uD83D\uDD23"],"","\uDBBA\uDF7F",["symbols"],30,29,15,0],
		"1f524":[["\uD83D\uDD24"],"","\uDBBA\uDF80",["abc"],30,30,15,0],
		"1f525":[["\uD83D\uDD25"],"\uE11D","\uDBB9\uDCF6",["fire"],30,31,15,0],
		"1f526":[["\uD83D\uDD26"],"","\uDBB9\uDCFB",["flashlight"],30,32,15,0],
		"1f527":[["\uD83D\uDD27"],"","\uDBB9\uDCC9",["wrench"],30,33,15,0],
		"1f528":[["\uD83D\uDD28"],"\uE116","\uDBB9\uDCCA",["hammer"],30,34,15,0],
		"1f529":[["\uD83D\uDD29"],"","\uDBB9\uDCCB",["nut_and_bolt"],30,35,15,0],
		"1f52a":[["\uD83D\uDD2A"],"","\uDBB9\uDCFA",["hocho","knife"],30,36,15,0],
		"1f52b":[["\uD83D\uDD2B"],"\uE113","\uDBB9\uDCF5",["gun"],30,37,15,0],
		"1f52c":[["\uD83D\uDD2C"],"","",["microscope"],30,38,15,0],
		"1f52d":[["\uD83D\uDD2D"],"","",["telescope"],30,39,15,0],
		"1f52e":[["\uD83D\uDD2E"],"","\uDBB9\uDCF7",["crystal_ball"],30,40,15,0],
		"1f52f":[["\uD83D\uDD2F"],"\uE23E","\uDBB9\uDCF8",["six_pointed_star"],30,41,15,0],
		"1f530":[["\uD83D\uDD30"],"\uE209","\uDBB8\uDC44",["beginner"],30,42,15,0],
		"1f531":[["\uD83D\uDD31"],"\uE031","\uDBB9\uDCD2",["trident"],30,43,15,0],
		"1f532":[["\uD83D\uDD32"],"\uE21A","\uDBBA\uDF64",["black_square_button"],30,44,15,0],
		"1f533":[["\uD83D\uDD33"],"\uE21B","\uDBBA\uDF67",["white_square_button"],30,45,15,0],
		"1f534":[["\uD83D\uDD34"],"\uE219","\uDBBA\uDF63",["red_circle"],30,46,15,0],
		"1f535":[["\uD83D\uDD35"],"","\uDBBA\uDF64",["large_blue_circle"],30,47,15,0],
		"1f536":[["\uD83D\uDD36"],"","\uDBBA\uDF73",["large_orange_diamond"],30,48,15,0],
		"1f537":[["\uD83D\uDD37"],"","\uDBBA\uDF74",["large_blue_diamond"],30,49,15,0],
		"1f538":[["\uD83D\uDD38"],"","\uDBBA\uDF75",["small_orange_diamond"],30,50,15,0],
		"1f539":[["\uD83D\uDD39"],"","\uDBBA\uDF76",["small_blue_diamond"],30,51,15,0],
		"1f53a":[["\uD83D\uDD3A"],"","\uDBBA\uDF78",["small_red_triangle"],30,52,15,0],
		"1f53b":[["\uD83D\uDD3B"],"","\uDBBA\uDF79",["small_red_triangle_down"],30,53,15,0],
		"1f53c":[["\uD83D\uDD3C"],"","\uDBBA\uDF01",["arrow_up_small"],30,54,15,0],
		"1f53d":[["\uD83D\uDD3D"],"","\uDBBA\uDF00",["arrow_down_small"],30,55,15,0],
		"1f549-fe0f":[["\uD83D\uDD49\uFE0F","\uD83D\uDD49"],"","",["om_symbol"],30,56,15,0],
		"1f54a-fe0f":[["\uD83D\uDD4A\uFE0F","\uD83D\uDD4A"],"","",["dove_of_peace"],30,57,15,0],
		"1f54b":[["\uD83D\uDD4B"],"","",["kaaba"],30,58,15,0],
		"1f54c":[["\uD83D\uDD4C"],"","",["mosque"],30,59,15,0],
		"1f54d":[["\uD83D\uDD4D"],"","",["synagogue"],31,0,15,0],
		"1f54e":[["\uD83D\uDD4E"],"","",["menorah_with_nine_branches"],31,1,15,0],
		"1f550":[["\uD83D\uDD50"],"\uE024","\uDBB8\uDC1E",["clock1"],31,2,15,0],
		"1f551":[["\uD83D\uDD51"],"\uE025","\uDBB8\uDC1F",["clock2"],31,3,15,0],
		"1f552":[["\uD83D\uDD52"],"\uE026","\uDBB8\uDC20",["clock3"],31,4,15,0],
		"1f553":[["\uD83D\uDD53"],"\uE027","\uDBB8\uDC21",["clock4"],31,5,15,0],
		"1f554":[["\uD83D\uDD54"],"\uE028","\uDBB8\uDC22",["clock5"],31,6,15,0],
		"1f555":[["\uD83D\uDD55"],"\uE029","\uDBB8\uDC23",["clock6"],31,7,15,0],
		"1f556":[["\uD83D\uDD56"],"\uE02A","\uDBB8\uDC24",["clock7"],31,8,15,0],
		"1f557":[["\uD83D\uDD57"],"\uE02B","\uDBB8\uDC25",["clock8"],31,9,15,0],
		"1f558":[["\uD83D\uDD58"],"\uE02C","\uDBB8\uDC26",["clock9"],31,10,15,0],
		"1f559":[["\uD83D\uDD59"],"\uE02D","\uDBB8\uDC27",["clock10"],31,11,15,0],
		"1f55a":[["\uD83D\uDD5A"],"\uE02E","\uDBB8\uDC28",["clock11"],31,12,15,0],
		"1f55b":[["\uD83D\uDD5B"],"\uE02F","\uDBB8\uDC29",["clock12"],31,13,15,0],
		"1f55c":[["\uD83D\uDD5C"],"","",["clock130"],31,14,15,0],
		"1f55d":[["\uD83D\uDD5D"],"","",["clock230"],31,15,15,0],
		"1f55e":[["\uD83D\uDD5E"],"","",["clock330"],31,16,15,0],
		"1f55f":[["\uD83D\uDD5F"],"","",["clock430"],31,17,15,0],
		"1f560":[["\uD83D\uDD60"],"","",["clock530"],31,18,15,0],
		"1f561":[["\uD83D\uDD61"],"","",["clock630"],31,19,15,0],
		"1f562":[["\uD83D\uDD62"],"","",["clock730"],31,20,15,0],
		"1f563":[["\uD83D\uDD63"],"","",["clock830"],31,21,15,0],
		"1f564":[["\uD83D\uDD64"],"","",["clock930"],31,22,15,0],
		"1f565":[["\uD83D\uDD65"],"","",["clock1030"],31,23,15,0],
		"1f566":[["\uD83D\uDD66"],"","",["clock1130"],31,24,15,0],
		"1f567":[["\uD83D\uDD67"],"","",["clock1230"],31,25,15,0],
		"1f56f-fe0f":[["\uD83D\uDD6F\uFE0F","\uD83D\uDD6F"],"","",["candle"],31,26,15,0],
		"1f570-fe0f":[["\uD83D\uDD70\uFE0F","\uD83D\uDD70"],"","",["mantelpiece_clock"],31,27,15,0],
		"1f573-fe0f":[["\uD83D\uDD73\uFE0F","\uD83D\uDD73"],"","",["hole"],31,28,15,0],
		"1f574-fe0f":[["\uD83D\uDD74\uFE0F","\uD83D\uDD74"],"","",["man_in_business_suit_levitating"],31,29,15,0],
		"1f575-fe0f-200d-2640-fe0f":[["\uD83D\uDD75\uFE0F\u200D\u2640\uFE0F"],"","",["female-detective"],31,35,7,0],
		"1f575-fe0f-200d-2642-fe0f":[["\uD83D\uDD75\uFE0F\u200D\u2642\uFE0F","\uD83D\uDD75\uFE0F","\uD83D\uDD75"],"","",["male-detective","sleuth_or_spy"],31,41,7,0],
		"1f576-fe0f":[["\uD83D\uDD76\uFE0F","\uD83D\uDD76"],"","",["dark_sunglasses"],31,53,15,0],
		"1f577-fe0f":[["\uD83D\uDD77\uFE0F","\uD83D\uDD77"],"","",["spider"],31,54,15,0],
		"1f578-fe0f":[["\uD83D\uDD78\uFE0F","\uD83D\uDD78"],"","",["spider_web"],31,55,15,0],
		"1f579-fe0f":[["\uD83D\uDD79\uFE0F","\uD83D\uDD79"],"","",["joystick"],31,56,15,0],
		"1f57a":[["\uD83D\uDD7A"],"","",["man_dancing"],31,57,15,0],
		"1f587-fe0f":[["\uD83D\uDD87\uFE0F","\uD83D\uDD87"],"","",["linked_paperclips"],32,3,15,0],
		"1f58a-fe0f":[["\uD83D\uDD8A\uFE0F","\uD83D\uDD8A"],"","",["lower_left_ballpoint_pen"],32,4,15,0],
		"1f58b-fe0f":[["\uD83D\uDD8B\uFE0F","\uD83D\uDD8B"],"","",["lower_left_fountain_pen"],32,5,15,0],
		"1f58c-fe0f":[["\uD83D\uDD8C\uFE0F","\uD83D\uDD8C"],"","",["lower_left_paintbrush"],32,6,15,0],
		"1f58d-fe0f":[["\uD83D\uDD8D\uFE0F","\uD83D\uDD8D"],"","",["lower_left_crayon"],32,7,15,0],
		"1f590-fe0f":[["\uD83D\uDD90\uFE0F","\uD83D\uDD90"],"","",["raised_hand_with_fingers_splayed"],32,8,15,0],
		"1f595":[["\uD83D\uDD95"],"","",["middle_finger","reversed_hand_with_middle_finger_extended"],32,14,15,0],
		"1f596":[["\uD83D\uDD96"],"","",["spock-hand"],32,20,15,0],
		"1f5a4":[["\uD83D\uDDA4"],"","",["black_heart"],32,26,15,0],
		"1f5a5-fe0f":[["\uD83D\uDDA5\uFE0F","\uD83D\uDDA5"],"","",["desktop_computer"],32,27,15,0],
		"1f5a8-fe0f":[["\uD83D\uDDA8\uFE0F","\uD83D\uDDA8"],"","",["printer"],32,28,15,0],
		"1f5b1-fe0f":[["\uD83D\uDDB1\uFE0F","\uD83D\uDDB1"],"","",["three_button_mouse"],32,29,15,0],
		"1f5b2-fe0f":[["\uD83D\uDDB2\uFE0F","\uD83D\uDDB2"],"","",["trackball"],32,30,15,0],
		"1f5bc-fe0f":[["\uD83D\uDDBC\uFE0F","\uD83D\uDDBC"],"","",["frame_with_picture"],32,31,15,0],
		"1f5c2-fe0f":[["\uD83D\uDDC2\uFE0F","\uD83D\uDDC2"],"","",["card_index_dividers"],32,32,15,0],
		"1f5c3-fe0f":[["\uD83D\uDDC3\uFE0F","\uD83D\uDDC3"],"","",["card_file_box"],32,33,15,0],
		"1f5c4-fe0f":[["\uD83D\uDDC4\uFE0F","\uD83D\uDDC4"],"","",["file_cabinet"],32,34,15,0],
		"1f5d1-fe0f":[["\uD83D\uDDD1\uFE0F","\uD83D\uDDD1"],"","",["wastebasket"],32,35,15,0],
		"1f5d2-fe0f":[["\uD83D\uDDD2\uFE0F","\uD83D\uDDD2"],"","",["spiral_note_pad"],32,36,15,0],
		"1f5d3-fe0f":[["\uD83D\uDDD3\uFE0F","\uD83D\uDDD3"],"","",["spiral_calendar_pad"],32,37,15,0],
		"1f5dc-fe0f":[["\uD83D\uDDDC\uFE0F","\uD83D\uDDDC"],"","",["compression"],32,38,15,0],
		"1f5dd-fe0f":[["\uD83D\uDDDD\uFE0F","\uD83D\uDDDD"],"","",["old_key"],32,39,15,0],
		"1f5de-fe0f":[["\uD83D\uDDDE\uFE0F","\uD83D\uDDDE"],"","",["rolled_up_newspaper"],32,40,15,0],
		"1f5e1-fe0f":[["\uD83D\uDDE1\uFE0F","\uD83D\uDDE1"],"","",["dagger_knife"],32,41,15,0],
		"1f5e3-fe0f":[["\uD83D\uDDE3\uFE0F","\uD83D\uDDE3"],"","",["speaking_head_in_silhouette"],32,42,15,0],
		"1f5e8-fe0f":[["\uD83D\uDDE8\uFE0F","\uD83D\uDDE8"],"","",["left_speech_bubble"],32,43,15,0],
		"1f5ef-fe0f":[["\uD83D\uDDEF\uFE0F","\uD83D\uDDEF"],"","",["right_anger_bubble"],32,44,15,0],
		"1f5f3-fe0f":[["\uD83D\uDDF3\uFE0F","\uD83D\uDDF3"],"","",["ballot_box_with_ballot"],32,45,15,0],
		"1f5fa-fe0f":[["\uD83D\uDDFA\uFE0F","\uD83D\uDDFA"],"","",["world_map"],32,46,15,0],
		"1f5fb":[["\uD83D\uDDFB"],"\uE03B","\uDBB9\uDCC3",["mount_fuji"],32,47,15,0],
		"1f5fc":[["\uD83D\uDDFC"],"\uE509","\uDBB9\uDCC4",["tokyo_tower"],32,48,15,0],
		"1f5fd":[["\uD83D\uDDFD"],"\uE51D","\uDBB9\uDCC6",["statue_of_liberty"],32,49,15,0],
		"1f5fe":[["\uD83D\uDDFE"],"","\uDBB9\uDCC7",["japan"],32,50,15,0],
		"1f5ff":[["\uD83D\uDDFF"],"","\uDBB9\uDCC8",["moyai"],32,51,15,0],
		"1f600":[["\uD83D\uDE00"],"","",["grinning"],32,52,15,0,":D"],
		"1f601":[["\uD83D\uDE01"],"\uE404","\uDBB8\uDF33",["grin"],32,53,15,0],
		"1f602":[["\uD83D\uDE02"],"\uE412","\uDBB8\uDF34",["joy"],32,54,15,0],
		"1f603":[["\uD83D\uDE03"],"\uE057","\uDBB8\uDF30",["smiley"],32,55,15,0,":)"],
		"1f604":[["\uD83D\uDE04"],"\uE415","\uDBB8\uDF38",["smile"],32,56,15,0,":)"],
		"1f605":[["\uD83D\uDE05"],"","\uDBB8\uDF31",["sweat_smile"],32,57,15,0],
		"1f606":[["\uD83D\uDE06"],"","\uDBB8\uDF32",["laughing","satisfied"],32,58,15,0],
		"1f607":[["\uD83D\uDE07"],"","",["innocent"],32,59,15,0],
		"1f608":[["\uD83D\uDE08"],"","",["smiling_imp"],33,0,15,0],
		"1f609":[["\uD83D\uDE09"],"\uE405","\uDBB8\uDF47",["wink"],33,1,15,0,";)"],
		"1f60a":[["\uD83D\uDE0A"],"\uE056","\uDBB8\uDF35",["blush"],33,2,15,0,":)"],
		"1f60b":[["\uD83D\uDE0B"],"","\uDBB8\uDF2B",["yum"],33,3,15,0],
		"1f60c":[["\uD83D\uDE0C"],"\uE40A","\uDBB8\uDF3E",["relieved"],33,4,15,0],
		"1f60d":[["\uD83D\uDE0D"],"\uE106","\uDBB8\uDF27",["heart_eyes"],33,5,15,0],
		"1f60e":[["\uD83D\uDE0E"],"","",["sunglasses"],33,6,15,0],
		"1f60f":[["\uD83D\uDE0F"],"\uE402","\uDBB8\uDF43",["smirk"],33,7,15,0],
		"1f610":[["\uD83D\uDE10"],"","",["neutral_face"],33,8,15,0],
		"1f611":[["\uD83D\uDE11"],"","",["expressionless"],33,9,15,0],
		"1f612":[["\uD83D\uDE12"],"\uE40E","\uDBB8\uDF26",["unamused"],33,10,15,0,":("],
		"1f613":[["\uD83D\uDE13"],"\uE108","\uDBB8\uDF44",["sweat"],33,11,15,0],
		"1f614":[["\uD83D\uDE14"],"\uE403","\uDBB8\uDF40",["pensive"],33,12,15,0],
		"1f615":[["\uD83D\uDE15"],"","",["confused"],33,13,15,0],
		"1f616":[["\uD83D\uDE16"],"\uE407","\uDBB8\uDF3F",["confounded"],33,14,15,0],
		"1f617":[["\uD83D\uDE17"],"","",["kissing"],33,15,15,0],
		"1f618":[["\uD83D\uDE18"],"\uE418","\uDBB8\uDF2C",["kissing_heart"],33,16,15,0],
		"1f619":[["\uD83D\uDE19"],"","",["kissing_smiling_eyes"],33,17,15,0],
		"1f61a":[["\uD83D\uDE1A"],"\uE417","\uDBB8\uDF2D",["kissing_closed_eyes"],33,18,15,0],
		"1f61b":[["\uD83D\uDE1B"],"","",["stuck_out_tongue"],33,19,15,0,":p"],
		"1f61c":[["\uD83D\uDE1C"],"\uE105","\uDBB8\uDF29",["stuck_out_tongue_winking_eye"],33,20,15,0,";p"],
		"1f61d":[["\uD83D\uDE1D"],"\uE409","\uDBB8\uDF2A",["stuck_out_tongue_closed_eyes"],33,21,15,0],
		"1f61e":[["\uD83D\uDE1E"],"\uE058","\uDBB8\uDF23",["disappointed"],33,22,15,0,":("],
		"1f61f":[["\uD83D\uDE1F"],"","",["worried"],33,23,15,0],
		"1f620":[["\uD83D\uDE20"],"\uE059","\uDBB8\uDF20",["angry"],33,24,15,0],
		"1f621":[["\uD83D\uDE21"],"\uE416","\uDBB8\uDF3D",["rage"],33,25,15,0],
		"1f622":[["\uD83D\uDE22"],"\uE413","\uDBB8\uDF39",["cry"],33,26,15,0,":'("],
		"1f623":[["\uD83D\uDE23"],"\uE406","\uDBB8\uDF3C",["persevere"],33,27,15,0],
		"1f624":[["\uD83D\uDE24"],"","\uDBB8\uDF28",["triumph"],33,28,15,0],
		"1f625":[["\uD83D\uDE25"],"\uE401","\uDBB8\uDF45",["disappointed_relieved"],33,29,15,0],
		"1f626":[["\uD83D\uDE26"],"","",["frowning"],33,30,15,0],
		"1f627":[["\uD83D\uDE27"],"","",["anguished"],33,31,15,0],
		"1f628":[["\uD83D\uDE28"],"\uE40B","\uDBB8\uDF3B",["fearful"],33,32,15,0],
		"1f629":[["\uD83D\uDE29"],"","\uDBB8\uDF21",["weary"],33,33,15,0],
		"1f62a":[["\uD83D\uDE2A"],"\uE408","\uDBB8\uDF42",["sleepy"],33,34,15,0],
		"1f62b":[["\uD83D\uDE2B"],"","\uDBB8\uDF46",["tired_face"],33,35,15,0],
		"1f62c":[["\uD83D\uDE2C"],"","",["grimacing"],33,36,15,0],
		"1f62d":[["\uD83D\uDE2D"],"\uE411","\uDBB8\uDF3A",["sob"],33,37,15,0,":'("],
		"1f62e-200d-1f4a8":[["\uD83D\uDE2E\u200D\uD83D\uDCA8"],"","",["face_exhaling"],33,38,7,0],
		"1f62e":[["\uD83D\uDE2E"],"","",["open_mouth"],33,39,15,0],
		"1f62f":[["\uD83D\uDE2F"],"","",["hushed"],33,40,15,0],
		"1f630":[["\uD83D\uDE30"],"\uE40F","\uDBB8\uDF25",["cold_sweat"],33,41,15,0],
		"1f631":[["\uD83D\uDE31"],"\uE107","\uDBB8\uDF41",["scream"],33,42,15,0],
		"1f632":[["\uD83D\uDE32"],"\uE410","\uDBB8\uDF22",["astonished"],33,43,15,0],
		"1f633":[["\uD83D\uDE33"],"\uE40D","\uDBB8\uDF2F",["flushed"],33,44,15,0],
		"1f634":[["\uD83D\uDE34"],"","",["sleeping"],33,45,15,0],
		"1f635-200d-1f4ab":[["\uD83D\uDE35\u200D\uD83D\uDCAB"],"","",["face_with_spiral_eyes"],33,46,7,0],
		"1f635":[["\uD83D\uDE35"],"","\uDBB8\uDF24",["dizzy_face"],33,47,15,0],
		"1f636-200d-1f32b-fe0f":[["\uD83D\uDE36\u200D\uD83C\uDF2B\uFE0F","\uD83D\uDE36\u200D\uD83C\uDF2B"],"","",["face_in_clouds"],33,48,7,0],
		"1f636":[["\uD83D\uDE36"],"","",["no_mouth"],33,49,15,0],
		"1f637":[["\uD83D\uDE37"],"\uE40C","\uDBB8\uDF2E",["mask"],33,50,15,0],
		"1f638":[["\uD83D\uDE38"],"","\uDBB8\uDF49",["smile_cat"],33,51,15,0],
		"1f639":[["\uD83D\uDE39"],"","\uDBB8\uDF4A",["joy_cat"],33,52,15,0],
		"1f63a":[["\uD83D\uDE3A"],"","\uDBB8\uDF48",["smiley_cat"],33,53,15,0],
		"1f63b":[["\uD83D\uDE3B"],"","\uDBB8\uDF4C",["heart_eyes_cat"],33,54,15,0],
		"1f63c":[["\uD83D\uDE3C"],"","\uDBB8\uDF4F",["smirk_cat"],33,55,15,0],
		"1f63d":[["\uD83D\uDE3D"],"","\uDBB8\uDF4B",["kissing_cat"],33,56,15,0],
		"1f63e":[["\uD83D\uDE3E"],"","\uDBB8\uDF4E",["pouting_cat"],33,57,15,0],
		"1f63f":[["\uD83D\uDE3F"],"","\uDBB8\uDF4D",["crying_cat_face"],33,58,15,0],
		"1f640":[["\uD83D\uDE40"],"","\uDBB8\uDF50",["scream_cat"],33,59,15,0],
		"1f641":[["\uD83D\uDE41"],"","",["slightly_frowning_face"],34,0,15,0],
		"1f642":[["\uD83D\uDE42"],"","",["slightly_smiling_face"],34,1,15,0],
		"1f643":[["\uD83D\uDE43"],"","",["upside_down_face"],34,2,15,0],
		"1f644":[["\uD83D\uDE44"],"","",["face_with_rolling_eyes"],34,3,15,0],
		"1f645-200d-2640-fe0f":[["\uD83D\uDE45\u200D\u2640\uFE0F","\uD83D\uDE45\u200D\u2640","\uD83D\uDE45"],"","",["woman-gesturing-no","no_good"],34,4,15,0],
		"1f645-200d-2642-fe0f":[["\uD83D\uDE45\u200D\u2642\uFE0F","\uD83D\uDE45\u200D\u2642"],"","",["man-gesturing-no"],34,10,15,0],
		"1f646-200d-2640-fe0f":[["\uD83D\uDE46\u200D\u2640\uFE0F","\uD83D\uDE46\u200D\u2640","\uD83D\uDE46"],"","",["woman-gesturing-ok","ok_woman"],34,22,15,0],
		"1f646-200d-2642-fe0f":[["\uD83D\uDE46\u200D\u2642\uFE0F","\uD83D\uDE46\u200D\u2642"],"","",["man-gesturing-ok"],34,28,15,0],
		"1f647-200d-2640-fe0f":[["\uD83D\uDE47\u200D\u2640\uFE0F","\uD83D\uDE47\u200D\u2640"],"","",["woman-bowing"],34,40,15,0],
		"1f647-200d-2642-fe0f":[["\uD83D\uDE47\u200D\u2642\uFE0F","\uD83D\uDE47\u200D\u2642","\uD83D\uDE47"],"","",["man-bowing","bow"],34,46,15,0],
		"1f648":[["\uD83D\uDE48"],"","\uDBB8\uDF54",["see_no_evil"],34,58,15,0],
		"1f649":[["\uD83D\uDE49"],"","\uDBB8\uDF56",["hear_no_evil"],34,59,15,0],
		"1f64a":[["\uD83D\uDE4A"],"","\uDBB8\uDF55",["speak_no_evil"],35,0,15,0],
		"1f64b-200d-2640-fe0f":[["\uD83D\uDE4B\u200D\u2640\uFE0F","\uD83D\uDE4B\u200D\u2640","\uD83D\uDE4B"],"","",["woman-raising-hand","raising_hand"],35,1,15,0],
		"1f64b-200d-2642-fe0f":[["\uD83D\uDE4B\u200D\u2642\uFE0F","\uD83D\uDE4B\u200D\u2642"],"","",["man-raising-hand"],35,7,15,0],
		"1f64c":[["\uD83D\uDE4C"],"\uE427","\uDBB8\uDF58",["raised_hands"],35,19,15,0],
		"1f64d-200d-2640-fe0f":[["\uD83D\uDE4D\u200D\u2640\uFE0F","\uD83D\uDE4D\u200D\u2640","\uD83D\uDE4D"],"","",["woman-frowning","person_frowning"],35,25,15,0],
		"1f64d-200d-2642-fe0f":[["\uD83D\uDE4D\u200D\u2642\uFE0F","\uD83D\uDE4D\u200D\u2642"],"","",["man-frowning"],35,31,15,0],
		"1f64e-200d-2640-fe0f":[["\uD83D\uDE4E\u200D\u2640\uFE0F","\uD83D\uDE4E\u200D\u2640","\uD83D\uDE4E"],"","",["woman-pouting","person_with_pouting_face"],35,43,15,0],
		"1f64e-200d-2642-fe0f":[["\uD83D\uDE4E\u200D\u2642\uFE0F","\uD83D\uDE4E\u200D\u2642"],"","",["man-pouting"],35,49,15,0],
		"1f64f":[["\uD83D\uDE4F"],"\uE41D","\uDBB8\uDF5B",["pray"],36,1,15,0],
		"1f680":[["\uD83D\uDE80"],"\uE10D","\uDBB9\uDFED",["rocket"],36,7,15,0],
		"1f681":[["\uD83D\uDE81"],"","",["helicopter"],36,8,15,0],
		"1f682":[["\uD83D\uDE82"],"","",["steam_locomotive"],36,9,15,0],
		"1f683":[["\uD83D\uDE83"],"\uE01E","\uDBB9\uDFDF",["railway_car"],36,10,15,0],
		"1f684":[["\uD83D\uDE84"],"\uE435","\uDBB9\uDFE2",["bullettrain_side"],36,11,15,0],
		"1f685":[["\uD83D\uDE85"],"\uE01F","\uDBB9\uDFE3",["bullettrain_front"],36,12,15,0],
		"1f686":[["\uD83D\uDE86"],"","",["train2"],36,13,15,0],
		"1f687":[["\uD83D\uDE87"],"\uE434","\uDBB9\uDFE0",["metro"],36,14,15,0],
		"1f688":[["\uD83D\uDE88"],"","",["light_rail"],36,15,15,0],
		"1f689":[["\uD83D\uDE89"],"\uE039","\uDBB9\uDFEC",["station"],36,16,15,0],
		"1f68a":[["\uD83D\uDE8A"],"","",["tram"],36,17,15,0],
		"1f68b":[["\uD83D\uDE8B"],"","",["train"],36,18,15,0],
		"1f68c":[["\uD83D\uDE8C"],"\uE159","\uDBB9\uDFE6",["bus"],36,19,15,0],
		"1f68d":[["\uD83D\uDE8D"],"","",["oncoming_bus"],36,20,15,0],
		"1f68e":[["\uD83D\uDE8E"],"","",["trolleybus"],36,21,15,0],
		"1f68f":[["\uD83D\uDE8F"],"\uE150","\uDBB9\uDFE7",["busstop"],36,22,15,0],
		"1f690":[["\uD83D\uDE90"],"","",["minibus"],36,23,15,0],
		"1f691":[["\uD83D\uDE91"],"\uE431","\uDBB9\uDFF3",["ambulance"],36,24,15,0],
		"1f692":[["\uD83D\uDE92"],"\uE430","\uDBB9\uDFF2",["fire_engine"],36,25,15,0],
		"1f693":[["\uD83D\uDE93"],"\uE432","\uDBB9\uDFF4",["police_car"],36,26,15,0],
		"1f694":[["\uD83D\uDE94"],"","",["oncoming_police_car"],36,27,15,0],
		"1f695":[["\uD83D\uDE95"],"\uE15A","\uDBB9\uDFEF",["taxi"],36,28,15,0],
		"1f696":[["\uD83D\uDE96"],"","",["oncoming_taxi"],36,29,15,0],
		"1f697":[["\uD83D\uDE97"],"\uE01B","\uDBB9\uDFE4",["car","red_car"],36,30,15,0],
		"1f698":[["\uD83D\uDE98"],"","",["oncoming_automobile"],36,31,15,0],
		"1f699":[["\uD83D\uDE99"],"\uE42E","\uDBB9\uDFE5",["blue_car"],36,32,15,0],
		"1f69a":[["\uD83D\uDE9A"],"\uE42F","\uDBB9\uDFF1",["truck"],36,33,15,0],
		"1f69b":[["\uD83D\uDE9B"],"","",["articulated_lorry"],36,34,15,0],
		"1f69c":[["\uD83D\uDE9C"],"","",["tractor"],36,35,15,0],
		"1f69d":[["\uD83D\uDE9D"],"","",["monorail"],36,36,15,0],
		"1f69e":[["\uD83D\uDE9E"],"","",["mountain_railway"],36,37,15,0],
		"1f69f":[["\uD83D\uDE9F"],"","",["suspension_railway"],36,38,15,0],
		"1f6a0":[["\uD83D\uDEA0"],"","",["mountain_cableway"],36,39,15,0],
		"1f6a1":[["\uD83D\uDEA1"],"","",["aerial_tramway"],36,40,15,0],
		"1f6a2":[["\uD83D\uDEA2"],"\uE202","\uDBB9\uDFE8",["ship"],36,41,15,0],
		"1f6a3-200d-2640-fe0f":[["\uD83D\uDEA3\u200D\u2640\uFE0F","\uD83D\uDEA3\u200D\u2640"],"","",["woman-rowing-boat"],36,42,15,0],
		"1f6a3-200d-2642-fe0f":[["\uD83D\uDEA3\u200D\u2642\uFE0F","\uD83D\uDEA3\u200D\u2642","\uD83D\uDEA3"],"","",["man-rowing-boat","rowboat"],36,48,15,0],
		"1f6a4":[["\uD83D\uDEA4"],"\uE135","\uDBB9\uDFEE",["speedboat"],37,0,15,0],
		"1f6a5":[["\uD83D\uDEA5"],"\uE14E","\uDBB9\uDFF7",["traffic_light"],37,1,15,0],
		"1f6a6":[["\uD83D\uDEA6"],"","",["vertical_traffic_light"],37,2,15,0],
		"1f6a7":[["\uD83D\uDEA7"],"\uE137","\uDBB9\uDFF8",["construction"],37,3,15,0],
		"1f6a8":[["\uD83D\uDEA8"],"","\uDBB9\uDFF9",["rotating_light"],37,4,15,0],
		"1f6a9":[["\uD83D\uDEA9"],"","\uDBBA\uDF22",["triangular_flag_on_post"],37,5,15,0],
		"1f6aa":[["\uD83D\uDEAA"],"","\uDBB9\uDCF3",["door"],37,6,15,0],
		"1f6ab":[["\uD83D\uDEAB"],"","\uDBBA\uDF48",["no_entry_sign"],37,7,15,0],
		"1f6ac":[["\uD83D\uDEAC"],"\uE30E","\uDBBA\uDF1E",["smoking"],37,8,15,0],
		"1f6ad":[["\uD83D\uDEAD"],"\uE208","\uDBBA\uDF1F",["no_smoking"],37,9,15,0],
		"1f6ae":[["\uD83D\uDEAE"],"","",["put_litter_in_its_place"],37,10,15,0],
		"1f6af":[["\uD83D\uDEAF"],"","",["do_not_litter"],37,11,15,0],
		"1f6b0":[["\uD83D\uDEB0"],"","",["potable_water"],37,12,15,0],
		"1f6b1":[["\uD83D\uDEB1"],"","",["non-potable_water"],37,13,15,0],
		"1f6b2":[["\uD83D\uDEB2"],"\uE136","\uDBB9\uDFEB",["bike"],37,14,15,0],
		"1f6b3":[["\uD83D\uDEB3"],"","",["no_bicycles"],37,15,15,0],
		"1f6b4-200d-2640-fe0f":[["\uD83D\uDEB4\u200D\u2640\uFE0F","\uD83D\uDEB4\u200D\u2640"],"","",["woman-biking"],37,16,15,0],
		"1f6b4-200d-2642-fe0f":[["\uD83D\uDEB4\u200D\u2642\uFE0F","\uD83D\uDEB4\u200D\u2642","\uD83D\uDEB4"],"","",["man-biking","bicyclist"],37,22,15,0],
		"1f6b5-200d-2640-fe0f":[["\uD83D\uDEB5\u200D\u2640\uFE0F","\uD83D\uDEB5\u200D\u2640"],"","",["woman-mountain-biking"],37,34,15,0],
		"1f6b5-200d-2642-fe0f":[["\uD83D\uDEB5\u200D\u2642\uFE0F","\uD83D\uDEB5\u200D\u2642","\uD83D\uDEB5"],"","",["man-mountain-biking","mountain_bicyclist"],37,40,15,0],
		"1f6b6-200d-2640-fe0f":[["\uD83D\uDEB6\u200D\u2640\uFE0F","\uD83D\uDEB6\u200D\u2640"],"","",["woman-walking"],37,52,15,0],
		"1f6b6-200d-2642-fe0f":[["\uD83D\uDEB6\u200D\u2642\uFE0F","\uD83D\uDEB6\u200D\u2642","\uD83D\uDEB6"],"","",["man-walking","walking"],37,58,15,0],
		"1f6b7":[["\uD83D\uDEB7"],"","",["no_pedestrians"],38,10,15,0],
		"1f6b8":[["\uD83D\uDEB8"],"","",["children_crossing"],38,11,15,0],
		"1f6b9":[["\uD83D\uDEB9"],"\uE138","\uDBBA\uDF33",["mens"],38,12,15,0],
		"1f6ba":[["\uD83D\uDEBA"],"\uE139","\uDBBA\uDF34",["womens"],38,13,15,0],
		"1f6bb":[["\uD83D\uDEBB"],"\uE151","\uDBB9\uDD06",["restroom"],38,14,15,0],
		"1f6bc":[["\uD83D\uDEBC"],"\uE13A","\uDBBA\uDF35",["baby_symbol"],38,15,15,0],
		"1f6bd":[["\uD83D\uDEBD"],"\uE140","\uDBB9\uDD07",["toilet"],38,16,15,0],
		"1f6be":[["\uD83D\uDEBE"],"\uE309","\uDBB9\uDD08",["wc"],38,17,15,0],
		"1f6bf":[["\uD83D\uDEBF"],"","",["shower"],38,18,15,0],
		"1f6c0":[["\uD83D\uDEC0"],"\uE13F","\uDBB9\uDD05",["bath"],38,19,15,0],
		"1f6c1":[["\uD83D\uDEC1"],"","",["bathtub"],38,25,15,0],
		"1f6c2":[["\uD83D\uDEC2"],"","",["passport_control"],38,26,15,0],
		"1f6c3":[["\uD83D\uDEC3"],"","",["customs"],38,27,15,0],
		"1f6c4":[["\uD83D\uDEC4"],"","",["baggage_claim"],38,28,15,0],
		"1f6c5":[["\uD83D\uDEC5"],"","",["left_luggage"],38,29,15,0],
		"1f6cb-fe0f":[["\uD83D\uDECB\uFE0F","\uD83D\uDECB"],"","",["couch_and_lamp"],38,30,15,0],
		"1f6cc":[["\uD83D\uDECC"],"","",["sleeping_accommodation"],38,31,15,0],
		"1f6cd-fe0f":[["\uD83D\uDECD\uFE0F","\uD83D\uDECD"],"","",["shopping_bags"],38,37,15,0],
		"1f6ce-fe0f":[["\uD83D\uDECE\uFE0F","\uD83D\uDECE"],"","",["bellhop_bell"],38,38,15,0],
		"1f6cf-fe0f":[["\uD83D\uDECF\uFE0F","\uD83D\uDECF"],"","",["bed"],38,39,15,0],
		"1f6d0":[["\uD83D\uDED0"],"","",["place_of_worship"],38,40,15,0],
		"1f6d1":[["\uD83D\uDED1"],"","",["octagonal_sign"],38,41,15,0],
		"1f6d2":[["\uD83D\uDED2"],"","",["shopping_trolley"],38,42,15,0],
		"1f6d5":[["\uD83D\uDED5"],"","",["hindu_temple"],38,43,15,0],
		"1f6d6":[["\uD83D\uDED6"],"","",["hut"],38,44,15,0],
		"1f6d7":[["\uD83D\uDED7"],"","",["elevator"],38,45,15,0],
		"1f6e0-fe0f":[["\uD83D\uDEE0\uFE0F","\uD83D\uDEE0"],"","",["hammer_and_wrench"],38,46,15,0],
		"1f6e1-fe0f":[["\uD83D\uDEE1\uFE0F","\uD83D\uDEE1"],"","",["shield"],38,47,15,0],
		"1f6e2-fe0f":[["\uD83D\uDEE2\uFE0F","\uD83D\uDEE2"],"","",["oil_drum"],38,48,15,0],
		"1f6e3-fe0f":[["\uD83D\uDEE3\uFE0F","\uD83D\uDEE3"],"","",["motorway"],38,49,15,0],
		"1f6e4-fe0f":[["\uD83D\uDEE4\uFE0F","\uD83D\uDEE4"],"","",["railway_track"],38,50,15,0],
		"1f6e5-fe0f":[["\uD83D\uDEE5\uFE0F","\uD83D\uDEE5"],"","",["motor_boat"],38,51,15,0],
		"1f6e9-fe0f":[["\uD83D\uDEE9\uFE0F","\uD83D\uDEE9"],"","",["small_airplane"],38,52,15,0],
		"1f6eb":[["\uD83D\uDEEB"],"","",["airplane_departure"],38,53,15,0],
		"1f6ec":[["\uD83D\uDEEC"],"","",["airplane_arriving"],38,54,15,0],
		"1f6f0-fe0f":[["\uD83D\uDEF0\uFE0F","\uD83D\uDEF0"],"","",["satellite"],38,55,15,0],
		"1f6f3-fe0f":[["\uD83D\uDEF3\uFE0F","\uD83D\uDEF3"],"","",["passenger_ship"],38,56,15,0],
		"1f6f4":[["\uD83D\uDEF4"],"","",["scooter"],38,57,15,0],
		"1f6f5":[["\uD83D\uDEF5"],"","",["motor_scooter"],38,58,15,0],
		"1f6f6":[["\uD83D\uDEF6"],"","",["canoe"],38,59,15,0],
		"1f6f7":[["\uD83D\uDEF7"],"","",["sled"],39,0,15,0],
		"1f6f8":[["\uD83D\uDEF8"],"","",["flying_saucer"],39,1,15,0],
		"1f6f9":[["\uD83D\uDEF9"],"","",["skateboard"],39,2,15,0],
		"1f6fa":[["\uD83D\uDEFA"],"","",["auto_rickshaw"],39,3,15,0],
		"1f6fb":[["\uD83D\uDEFB"],"","",["pickup_truck"],39,4,15,0],
		"1f6fc":[["\uD83D\uDEFC"],"","",["roller_skate"],39,5,15,0],
		"1f7e0":[["\uD83D\uDFE0"],"","",["large_orange_circle"],39,6,15,0],
		"1f7e1":[["\uD83D\uDFE1"],"","",["large_yellow_circle"],39,7,15,0],
		"1f7e2":[["\uD83D\uDFE2"],"","",["large_green_circle"],39,8,15,0],
		"1f7e3":[["\uD83D\uDFE3"],"","",["large_purple_circle"],39,9,15,0],
		"1f7e4":[["\uD83D\uDFE4"],"","",["large_brown_circle"],39,10,15,0],
		"1f7e5":[["\uD83D\uDFE5"],"","",["large_red_square"],39,11,15,0],
		"1f7e6":[["\uD83D\uDFE6"],"","",["large_blue_square"],39,12,15,0],
		"1f7e7":[["\uD83D\uDFE7"],"","",["large_orange_square"],39,13,15,0],
		"1f7e8":[["\uD83D\uDFE8"],"","",["large_yellow_square"],39,14,15,0],
		"1f7e9":[["\uD83D\uDFE9"],"","",["large_green_square"],39,15,15,0],
		"1f7ea":[["\uD83D\uDFEA"],"","",["large_purple_square"],39,16,15,0],
		"1f7eb":[["\uD83D\uDFEB"],"","",["large_brown_square"],39,17,15,0],
		"1f90c":[["\uD83E\uDD0C"],"","",["pinched_fingers"],39,18,15,0],
		"1f90d":[["\uD83E\uDD0D"],"","",["white_heart"],39,24,15,0],
		"1f90e":[["\uD83E\uDD0E"],"","",["brown_heart"],39,25,15,0],
		"1f90f":[["\uD83E\uDD0F"],"","",["pinching_hand"],39,26,15,0],
		"1f910":[["\uD83E\uDD10"],"","",["zipper_mouth_face"],39,32,15,0],
		"1f911":[["\uD83E\uDD11"],"","",["money_mouth_face"],39,33,15,0],
		"1f912":[["\uD83E\uDD12"],"","",["face_with_thermometer"],39,34,15,0],
		"1f913":[["\uD83E\uDD13"],"","",["nerd_face"],39,35,15,0],
		"1f914":[["\uD83E\uDD14"],"","",["thinking_face"],39,36,15,0],
		"1f915":[["\uD83E\uDD15"],"","",["face_with_head_bandage"],39,37,15,0],
		"1f916":[["\uD83E\uDD16"],"","",["robot_face"],39,38,15,0],
		"1f917":[["\uD83E\uDD17"],"","",["hugging_face"],39,39,15,0],
		"1f918":[["\uD83E\uDD18"],"","",["the_horns","sign_of_the_horns"],39,40,15,0],
		"1f919":[["\uD83E\uDD19"],"","",["call_me_hand"],39,46,15,0],
		"1f91a":[["\uD83E\uDD1A"],"","",["raised_back_of_hand"],39,52,15,0],
		"1f91b":[["\uD83E\uDD1B"],"","",["left-facing_fist"],39,58,15,0],
		"1f91c":[["\uD83E\uDD1C"],"","",["right-facing_fist"],40,4,15,0],
		"1f91d":[["\uD83E\uDD1D"],"","",["handshake"],40,10,15,0],
		"1f91e":[["\uD83E\uDD1E"],"","",["crossed_fingers","hand_with_index_and_middle_fingers_crossed"],40,11,15,0],
		"1f91f":[["\uD83E\uDD1F"],"","",["i_love_you_hand_sign"],40,17,15,0],
		"1f920":[["\uD83E\uDD20"],"","",["face_with_cowboy_hat"],40,23,15,0],
		"1f921":[["\uD83E\uDD21"],"","",["clown_face"],40,24,15,0],
		"1f922":[["\uD83E\uDD22"],"","",["nauseated_face"],40,25,15,0],
		"1f923":[["\uD83E\uDD23"],"","",["rolling_on_the_floor_laughing"],40,26,15,0],
		"1f924":[["\uD83E\uDD24"],"","",["drooling_face"],40,27,15,0],
		"1f925":[["\uD83E\uDD25"],"","",["lying_face"],40,28,15,0],
		"1f926-200d-2640-fe0f":[["\uD83E\uDD26\u200D\u2640\uFE0F","\uD83E\uDD26\u200D\u2640"],"","",["woman-facepalming"],40,29,15,0],
		"1f926-200d-2642-fe0f":[["\uD83E\uDD26\u200D\u2642\uFE0F","\uD83E\uDD26\u200D\u2642"],"","",["man-facepalming"],40,35,15,0],
		"1f926":[["\uD83E\uDD26"],"","",["face_palm"],40,41,15,0],
		"1f927":[["\uD83E\uDD27"],"","",["sneezing_face"],40,47,15,0],
		"1f928":[["\uD83E\uDD28"],"","",["face_with_raised_eyebrow","face_with_one_eyebrow_raised"],40,48,15,0],
		"1f929":[["\uD83E\uDD29"],"","",["star-struck","grinning_face_with_star_eyes"],40,49,15,0],
		"1f92a":[["\uD83E\uDD2A"],"","",["zany_face","grinning_face_with_one_large_and_one_small_eye"],40,50,15,0],
		"1f92b":[["\uD83E\uDD2B"],"","",["shushing_face","face_with_finger_covering_closed_lips"],40,51,15,0],
		"1f92c":[["\uD83E\uDD2C"],"","",["face_with_symbols_on_mouth","serious_face_with_symbols_covering_mouth"],40,52,15,0],
		"1f92d":[["\uD83E\uDD2D"],"","",["face_with_hand_over_mouth","smiling_face_with_smiling_eyes_and_hand_covering_mouth"],40,53,15,0],
		"1f92e":[["\uD83E\uDD2E"],"","",["face_vomiting","face_with_open_mouth_vomiting"],40,54,15,0],
		"1f92f":[["\uD83E\uDD2F"],"","",["exploding_head","shocked_face_with_exploding_head"],40,55,15,0],
		"1f930":[["\uD83E\uDD30"],"","",["pregnant_woman"],40,56,15,0],
		"1f931":[["\uD83E\uDD31"],"","",["breast-feeding"],41,2,15,0],
		"1f932":[["\uD83E\uDD32"],"","",["palms_up_together"],41,8,15,0],
		"1f933":[["\uD83E\uDD33"],"","",["selfie"],41,14,15,0],
		"1f934":[["\uD83E\uDD34"],"","",["prince"],41,20,15,0],
		"1f935-200d-2640-fe0f":[["\uD83E\uDD35\u200D\u2640\uFE0F","\uD83E\uDD35\u200D\u2640"],"","",["woman_in_tuxedo"],41,26,15,0],
		"1f935-200d-2642-fe0f":[["\uD83E\uDD35\u200D\u2642\uFE0F","\uD83E\uDD35\u200D\u2642"],"","",["man_in_tuxedo"],41,32,15,0],
		"1f935":[["\uD83E\uDD35"],"","",["person_in_tuxedo"],41,38,15,0],
		"1f936":[["\uD83E\uDD36"],"","",["mrs_claus","mother_christmas"],41,44,15,0],
		"1f937-200d-2640-fe0f":[["\uD83E\uDD37\u200D\u2640\uFE0F","\uD83E\uDD37\u200D\u2640"],"","",["woman-shrugging"],41,50,15,0],
		"1f937-200d-2642-fe0f":[["\uD83E\uDD37\u200D\u2642\uFE0F","\uD83E\uDD37\u200D\u2642"],"","",["man-shrugging"],41,56,15,0],
		"1f937":[["\uD83E\uDD37"],"","",["shrug"],42,2,15,0],
		"1f938-200d-2640-fe0f":[["\uD83E\uDD38\u200D\u2640\uFE0F","\uD83E\uDD38\u200D\u2640"],"","",["woman-cartwheeling"],42,8,15,0],
		"1f938-200d-2642-fe0f":[["\uD83E\uDD38\u200D\u2642\uFE0F","\uD83E\uDD38\u200D\u2642"],"","",["man-cartwheeling"],42,14,15,0],
		"1f938":[["\uD83E\uDD38"],"","",["person_doing_cartwheel"],42,20,15,0],
		"1f939-200d-2640-fe0f":[["\uD83E\uDD39\u200D\u2640\uFE0F","\uD83E\uDD39\u200D\u2640"],"","",["woman-juggling"],42,26,15,0],
		"1f939-200d-2642-fe0f":[["\uD83E\uDD39\u200D\u2642\uFE0F","\uD83E\uDD39\u200D\u2642"],"","",["man-juggling"],42,32,15,0],
		"1f939":[["\uD83E\uDD39"],"","",["juggling"],42,38,15,0],
		"1f93a":[["\uD83E\uDD3A"],"","",["fencer"],42,44,15,0],
		"1f93c-200d-2640-fe0f":[["\uD83E\uDD3C\u200D\u2640\uFE0F","\uD83E\uDD3C\u200D\u2640"],"","",["woman-wrestling"],42,45,15,0],
		"1f93c-200d-2642-fe0f":[["\uD83E\uDD3C\u200D\u2642\uFE0F","\uD83E\uDD3C\u200D\u2642"],"","",["man-wrestling"],42,46,15,0],
		"1f93c":[["\uD83E\uDD3C"],"","",["wrestlers"],42,47,15,0],
		"1f93d-200d-2640-fe0f":[["\uD83E\uDD3D\u200D\u2640\uFE0F","\uD83E\uDD3D\u200D\u2640"],"","",["woman-playing-water-polo"],42,48,15,0],
		"1f93d-200d-2642-fe0f":[["\uD83E\uDD3D\u200D\u2642\uFE0F","\uD83E\uDD3D\u200D\u2642"],"","",["man-playing-water-polo"],42,54,15,0],
		"1f93d":[["\uD83E\uDD3D"],"","",["water_polo"],43,0,15,0],
		"1f93e-200d-2640-fe0f":[["\uD83E\uDD3E\u200D\u2640\uFE0F","\uD83E\uDD3E\u200D\u2640"],"","",["woman-playing-handball"],43,6,15,0],
		"1f93e-200d-2642-fe0f":[["\uD83E\uDD3E\u200D\u2642\uFE0F","\uD83E\uDD3E\u200D\u2642"],"","",["man-playing-handball"],43,12,15,0],
		"1f93e":[["\uD83E\uDD3E"],"","",["handball"],43,18,15,0],
		"1f93f":[["\uD83E\uDD3F"],"","",["diving_mask"],43,24,15,0],
		"1f940":[["\uD83E\uDD40"],"","",["wilted_flower"],43,25,15,0],
		"1f941":[["\uD83E\uDD41"],"","",["drum_with_drumsticks"],43,26,15,0],
		"1f942":[["\uD83E\uDD42"],"","",["clinking_glasses"],43,27,15,0],
		"1f943":[["\uD83E\uDD43"],"","",["tumbler_glass"],43,28,15,0],
		"1f944":[["\uD83E\uDD44"],"","",["spoon"],43,29,15,0],
		"1f945":[["\uD83E\uDD45"],"","",["goal_net"],43,30,15,0],
		"1f947":[["\uD83E\uDD47"],"","",["first_place_medal"],43,31,15,0],
		"1f948":[["\uD83E\uDD48"],"","",["second_place_medal"],43,32,15,0],
		"1f949":[["\uD83E\uDD49"],"","",["third_place_medal"],43,33,15,0],
		"1f94a":[["\uD83E\uDD4A"],"","",["boxing_glove"],43,34,15,0],
		"1f94b":[["\uD83E\uDD4B"],"","",["martial_arts_uniform"],43,35,15,0],
		"1f94c":[["\uD83E\uDD4C"],"","",["curling_stone"],43,36,15,0],
		"1f94d":[["\uD83E\uDD4D"],"","",["lacrosse"],43,37,15,0],
		"1f94e":[["\uD83E\uDD4E"],"","",["softball"],43,38,15,0],
		"1f94f":[["\uD83E\uDD4F"],"","",["flying_disc"],43,39,15,0],
		"1f950":[["\uD83E\uDD50"],"","",["croissant"],43,40,15,0],
		"1f951":[["\uD83E\uDD51"],"","",["avocado"],43,41,15,0],
		"1f952":[["\uD83E\uDD52"],"","",["cucumber"],43,42,15,0],
		"1f953":[["\uD83E\uDD53"],"","",["bacon"],43,43,15,0],
		"1f954":[["\uD83E\uDD54"],"","",["potato"],43,44,15,0],
		"1f955":[["\uD83E\uDD55"],"","",["carrot"],43,45,15,0],
		"1f956":[["\uD83E\uDD56"],"","",["baguette_bread"],43,46,15,0],
		"1f957":[["\uD83E\uDD57"],"","",["green_salad"],43,47,15,0],
		"1f958":[["\uD83E\uDD58"],"","",["shallow_pan_of_food"],43,48,15,0],
		"1f959":[["\uD83E\uDD59"],"","",["stuffed_flatbread"],43,49,15,0],
		"1f95a":[["\uD83E\uDD5A"],"","",["egg"],43,50,15,0],
		"1f95b":[["\uD83E\uDD5B"],"","",["glass_of_milk"],43,51,15,0],
		"1f95c":[["\uD83E\uDD5C"],"","",["peanuts"],43,52,15,0],
		"1f95d":[["\uD83E\uDD5D"],"","",["kiwifruit"],43,53,15,0],
		"1f95e":[["\uD83E\uDD5E"],"","",["pancakes"],43,54,15,0],
		"1f95f":[["\uD83E\uDD5F"],"","",["dumpling"],43,55,15,0],
		"1f960":[["\uD83E\uDD60"],"","",["fortune_cookie"],43,56,15,0],
		"1f961":[["\uD83E\uDD61"],"","",["takeout_box"],43,57,15,0],
		"1f962":[["\uD83E\uDD62"],"","",["chopsticks"],43,58,15,0],
		"1f963":[["\uD83E\uDD63"],"","",["bowl_with_spoon"],43,59,15,0],
		"1f964":[["\uD83E\uDD64"],"","",["cup_with_straw"],44,0,15,0],
		"1f965":[["\uD83E\uDD65"],"","",["coconut"],44,1,15,0],
		"1f966":[["\uD83E\uDD66"],"","",["broccoli"],44,2,15,0],
		"1f967":[["\uD83E\uDD67"],"","",["pie"],44,3,15,0],
		"1f968":[["\uD83E\uDD68"],"","",["pretzel"],44,4,15,0],
		"1f969":[["\uD83E\uDD69"],"","",["cut_of_meat"],44,5,15,0],
		"1f96a":[["\uD83E\uDD6A"],"","",["sandwich"],44,6,15,0],
		"1f96b":[["\uD83E\uDD6B"],"","",["canned_food"],44,7,15,0],
		"1f96c":[["\uD83E\uDD6C"],"","",["leafy_green"],44,8,15,0],
		"1f96d":[["\uD83E\uDD6D"],"","",["mango"],44,9,15,0],
		"1f96e":[["\uD83E\uDD6E"],"","",["moon_cake"],44,10,15,0],
		"1f96f":[["\uD83E\uDD6F"],"","",["bagel"],44,11,15,0],
		"1f970":[["\uD83E\uDD70"],"","",["smiling_face_with_3_hearts"],44,12,15,0],
		"1f971":[["\uD83E\uDD71"],"","",["yawning_face"],44,13,15,0],
		"1f972":[["\uD83E\uDD72"],"","",["smiling_face_with_tear"],44,14,15,0],
		"1f973":[["\uD83E\uDD73"],"","",["partying_face"],44,15,15,0],
		"1f974":[["\uD83E\uDD74"],"","",["woozy_face"],44,16,15,0],
		"1f975":[["\uD83E\uDD75"],"","",["hot_face"],44,17,15,0],
		"1f976":[["\uD83E\uDD76"],"","",["cold_face"],44,18,15,0],
		"1f977":[["\uD83E\uDD77"],"","",["ninja"],44,19,15,0],
		"1f978":[["\uD83E\uDD78"],"","",["disguised_face"],44,25,15,0],
		"1f97a":[["\uD83E\uDD7A"],"","",["pleading_face"],44,26,15,0],
		"1f97b":[["\uD83E\uDD7B"],"","",["sari"],44,27,15,0],
		"1f97c":[["\uD83E\uDD7C"],"","",["lab_coat"],44,28,15,0],
		"1f97d":[["\uD83E\uDD7D"],"","",["goggles"],44,29,15,0],
		"1f97e":[["\uD83E\uDD7E"],"","",["hiking_boot"],44,30,15,0],
		"1f97f":[["\uD83E\uDD7F"],"","",["womans_flat_shoe"],44,31,15,0],
		"1f980":[["\uD83E\uDD80"],"","",["crab"],44,32,15,0],
		"1f981":[["\uD83E\uDD81"],"","",["lion_face"],44,33,15,0],
		"1f982":[["\uD83E\uDD82"],"","",["scorpion"],44,34,15,0],
		"1f983":[["\uD83E\uDD83"],"","",["turkey"],44,35,15,0],
		"1f984":[["\uD83E\uDD84"],"","",["unicorn_face"],44,36,15,0],
		"1f985":[["\uD83E\uDD85"],"","",["eagle"],44,37,15,0],
		"1f986":[["\uD83E\uDD86"],"","",["duck"],44,38,15,0],
		"1f987":[["\uD83E\uDD87"],"","",["bat"],44,39,15,0],
		"1f988":[["\uD83E\uDD88"],"","",["shark"],44,40,15,0],
		"1f989":[["\uD83E\uDD89"],"","",["owl"],44,41,15,0],
		"1f98a":[["\uD83E\uDD8A"],"","",["fox_face"],44,42,15,0],
		"1f98b":[["\uD83E\uDD8B"],"","",["butterfly"],44,43,15,0],
		"1f98c":[["\uD83E\uDD8C"],"","",["deer"],44,44,15,0],
		"1f98d":[["\uD83E\uDD8D"],"","",["gorilla"],44,45,15,0],
		"1f98e":[["\uD83E\uDD8E"],"","",["lizard"],44,46,15,0],
		"1f98f":[["\uD83E\uDD8F"],"","",["rhinoceros"],44,47,15,0],
		"1f990":[["\uD83E\uDD90"],"","",["shrimp"],44,48,15,0],
		"1f991":[["\uD83E\uDD91"],"","",["squid"],44,49,15,0],
		"1f992":[["\uD83E\uDD92"],"","",["giraffe_face"],44,50,15,0],
		"1f993":[["\uD83E\uDD93"],"","",["zebra_face"],44,51,15,0],
		"1f994":[["\uD83E\uDD94"],"","",["hedgehog"],44,52,15,0],
		"1f995":[["\uD83E\uDD95"],"","",["sauropod"],44,53,15,0],
		"1f996":[["\uD83E\uDD96"],"","",["t-rex"],44,54,15,0],
		"1f997":[["\uD83E\uDD97"],"","",["cricket"],44,55,15,0],
		"1f998":[["\uD83E\uDD98"],"","",["kangaroo"],44,56,15,0],
		"1f999":[["\uD83E\uDD99"],"","",["llama"],44,57,15,0],
		"1f99a":[["\uD83E\uDD9A"],"","",["peacock"],44,58,15,0],
		"1f99b":[["\uD83E\uDD9B"],"","",["hippopotamus"],44,59,15,0],
		"1f99c":[["\uD83E\uDD9C"],"","",["parrot"],45,0,15,0],
		"1f99d":[["\uD83E\uDD9D"],"","",["raccoon"],45,1,15,0],
		"1f99e":[["\uD83E\uDD9E"],"","",["lobster"],45,2,15,0],
		"1f99f":[["\uD83E\uDD9F"],"","",["mosquito"],45,3,15,0],
		"1f9a0":[["\uD83E\uDDA0"],"","",["microbe"],45,4,15,0],
		"1f9a1":[["\uD83E\uDDA1"],"","",["badger"],45,5,15,0],
		"1f9a2":[["\uD83E\uDDA2"],"","",["swan"],45,6,15,0],
		"1f9a3":[["\uD83E\uDDA3"],"","",["mammoth"],45,7,15,0],
		"1f9a4":[["\uD83E\uDDA4"],"","",["dodo"],45,8,15,0],
		"1f9a5":[["\uD83E\uDDA5"],"","",["sloth"],45,9,15,0],
		"1f9a6":[["\uD83E\uDDA6"],"","",["otter"],45,10,15,0],
		"1f9a7":[["\uD83E\uDDA7"],"","",["orangutan"],45,11,15,0],
		"1f9a8":[["\uD83E\uDDA8"],"","",["skunk"],45,12,15,0],
		"1f9a9":[["\uD83E\uDDA9"],"","",["flamingo"],45,13,15,0],
		"1f9aa":[["\uD83E\uDDAA"],"","",["oyster"],45,14,15,0],
		"1f9ab":[["\uD83E\uDDAB"],"","",["beaver"],45,15,15,0],
		"1f9ac":[["\uD83E\uDDAC"],"","",["bison"],45,16,15,0],
		"1f9ad":[["\uD83E\uDDAD"],"","",["seal"],45,17,15,0],
		"1f9ae":[["\uD83E\uDDAE"],"","",["guide_dog"],45,18,15,0],
		"1f9af":[["\uD83E\uDDAF"],"","",["probing_cane"],45,19,15,0],
		"1f9b4":[["\uD83E\uDDB4"],"","",["bone"],45,20,15,0],
		"1f9b5":[["\uD83E\uDDB5"],"","",["leg"],45,21,15,0],
		"1f9b6":[["\uD83E\uDDB6"],"","",["foot"],45,27,15,0],
		"1f9b7":[["\uD83E\uDDB7"],"","",["tooth"],45,33,15,0],
		"1f9b8-200d-2640-fe0f":[["\uD83E\uDDB8\u200D\u2640\uFE0F","\uD83E\uDDB8\u200D\u2640"],"","",["female_superhero"],45,34,15,0],
		"1f9b8-200d-2642-fe0f":[["\uD83E\uDDB8\u200D\u2642\uFE0F","\uD83E\uDDB8\u200D\u2642"],"","",["male_superhero"],45,40,15,0],
		"1f9b8":[["\uD83E\uDDB8"],"","",["superhero"],45,46,15,0],
		"1f9b9-200d-2640-fe0f":[["\uD83E\uDDB9\u200D\u2640\uFE0F","\uD83E\uDDB9\u200D\u2640"],"","",["female_supervillain"],45,52,15,0],
		"1f9b9-200d-2642-fe0f":[["\uD83E\uDDB9\u200D\u2642\uFE0F","\uD83E\uDDB9\u200D\u2642"],"","",["male_supervillain"],45,58,15,0],
		"1f9b9":[["\uD83E\uDDB9"],"","",["supervillain"],46,4,15,0],
		"1f9ba":[["\uD83E\uDDBA"],"","",["safety_vest"],46,10,15,0],
		"1f9bb":[["\uD83E\uDDBB"],"","",["ear_with_hearing_aid"],46,11,15,0],
		"1f9bc":[["\uD83E\uDDBC"],"","",["motorized_wheelchair"],46,17,15,0],
		"1f9bd":[["\uD83E\uDDBD"],"","",["manual_wheelchair"],46,18,15,0],
		"1f9be":[["\uD83E\uDDBE"],"","",["mechanical_arm"],46,19,15,0],
		"1f9bf":[["\uD83E\uDDBF"],"","",["mechanical_leg"],46,20,15,0],
		"1f9c0":[["\uD83E\uDDC0"],"","",["cheese_wedge"],46,21,15,0],
		"1f9c1":[["\uD83E\uDDC1"],"","",["cupcake"],46,22,15,0],
		"1f9c2":[["\uD83E\uDDC2"],"","",["salt"],46,23,15,0],
		"1f9c3":[["\uD83E\uDDC3"],"","",["beverage_box"],46,24,15,0],
		"1f9c4":[["\uD83E\uDDC4"],"","",["garlic"],46,25,15,0],
		"1f9c5":[["\uD83E\uDDC5"],"","",["onion"],46,26,15,0],
		"1f9c6":[["\uD83E\uDDC6"],"","",["falafel"],46,27,15,0],
		"1f9c7":[["\uD83E\uDDC7"],"","",["waffle"],46,28,15,0],
		"1f9c8":[["\uD83E\uDDC8"],"","",["butter"],46,29,15,0],
		"1f9c9":[["\uD83E\uDDC9"],"","",["mate_drink"],46,30,15,0],
		"1f9ca":[["\uD83E\uDDCA"],"","",["ice_cube"],46,31,15,0],
		"1f9cb":[["\uD83E\uDDCB"],"","",["bubble_tea"],46,32,15,0],
		"1f9cd-200d-2640-fe0f":[["\uD83E\uDDCD\u200D\u2640\uFE0F","\uD83E\uDDCD\u200D\u2640"],"","",["woman_standing"],46,33,15,0],
		"1f9cd-200d-2642-fe0f":[["\uD83E\uDDCD\u200D\u2642\uFE0F","\uD83E\uDDCD\u200D\u2642"],"","",["man_standing"],46,39,15,0],
		"1f9cd":[["\uD83E\uDDCD"],"","",["standing_person"],46,45,15,0],
		"1f9ce-200d-2640-fe0f":[["\uD83E\uDDCE\u200D\u2640\uFE0F","\uD83E\uDDCE\u200D\u2640"],"","",["woman_kneeling"],46,51,15,0],
		"1f9ce-200d-2642-fe0f":[["\uD83E\uDDCE\u200D\u2642\uFE0F","\uD83E\uDDCE\u200D\u2642"],"","",["man_kneeling"],46,57,15,0],
		"1f9ce":[["\uD83E\uDDCE"],"","",["kneeling_person"],47,3,15,0],
		"1f9cf-200d-2640-fe0f":[["\uD83E\uDDCF\u200D\u2640\uFE0F","\uD83E\uDDCF\u200D\u2640"],"","",["deaf_woman"],47,9,15,0],
		"1f9cf-200d-2642-fe0f":[["\uD83E\uDDCF\u200D\u2642\uFE0F","\uD83E\uDDCF\u200D\u2642"],"","",["deaf_man"],47,15,15,0],
		"1f9cf":[["\uD83E\uDDCF"],"","",["deaf_person"],47,21,15,0],
		"1f9d0":[["\uD83E\uDDD0"],"","",["face_with_monocle"],47,27,15,0],
		"1f9d1-200d-1f33e":[["\uD83E\uDDD1\u200D\uD83C\uDF3E"],"","",["farmer"],47,28,15,0],
		"1f9d1-200d-1f373":[["\uD83E\uDDD1\u200D\uD83C\uDF73"],"","",["cook"],47,34,15,0],
		"1f9d1-200d-1f37c":[["\uD83E\uDDD1\u200D\uD83C\uDF7C"],"","",["person_feeding_baby"],47,40,15,0],
		"1f9d1-200d-1f384":[["\uD83E\uDDD1\u200D\uD83C\uDF84"],"","",["mx_claus"],47,46,15,0],
		"1f9d1-200d-1f393":[["\uD83E\uDDD1\u200D\uD83C\uDF93"],"","",["student"],47,52,15,0],
		"1f9d1-200d-1f3a4":[["\uD83E\uDDD1\u200D\uD83C\uDFA4"],"","",["singer"],47,58,15,0],
		"1f9d1-200d-1f3a8":[["\uD83E\uDDD1\u200D\uD83C\uDFA8"],"","",["artist"],48,4,15,0],
		"1f9d1-200d-1f3eb":[["\uD83E\uDDD1\u200D\uD83C\uDFEB"],"","",["teacher"],48,10,15,0],
		"1f9d1-200d-1f3ed":[["\uD83E\uDDD1\u200D\uD83C\uDFED"],"","",["factory_worker"],48,16,15,0],
		"1f9d1-200d-1f4bb":[["\uD83E\uDDD1\u200D\uD83D\uDCBB"],"","",["technologist"],48,22,15,0],
		"1f9d1-200d-1f4bc":[["\uD83E\uDDD1\u200D\uD83D\uDCBC"],"","",["office_worker"],48,28,15,0],
		"1f9d1-200d-1f527":[["\uD83E\uDDD1\u200D\uD83D\uDD27"],"","",["mechanic"],48,34,15,0],
		"1f9d1-200d-1f52c":[["\uD83E\uDDD1\u200D\uD83D\uDD2C"],"","",["scientist"],48,40,15,0],
		"1f9d1-200d-1f680":[["\uD83E\uDDD1\u200D\uD83D\uDE80"],"","",["astronaut"],48,46,15,0],
		"1f9d1-200d-1f692":[["\uD83E\uDDD1\u200D\uD83D\uDE92"],"","",["firefighter"],48,52,15,0],
		"1f9d1-200d-1f91d-200d-1f9d1":[["\uD83E\uDDD1\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1"],"","",["people_holding_hands"],48,58,15,0],
		"1f9d1-200d-1f9af":[["\uD83E\uDDD1\u200D\uD83E\uDDAF"],"","",["person_with_probing_cane"],49,24,15,0],
		"1f9d1-200d-1f9b0":[["\uD83E\uDDD1\u200D\uD83E\uDDB0"],"","",["red_haired_person"],49,30,15,0],
		"1f9d1-200d-1f9b1":[["\uD83E\uDDD1\u200D\uD83E\uDDB1"],"","",["curly_haired_person"],49,36,15,0],
		"1f9d1-200d-1f9b2":[["\uD83E\uDDD1\u200D\uD83E\uDDB2"],"","",["bald_person"],49,42,7,0],
		"1f9d1-200d-1f9b3":[["\uD83E\uDDD1\u200D\uD83E\uDDB3"],"","",["white_haired_person"],49,48,7,0],
		"1f9d1-200d-1f9bc":[["\uD83E\uDDD1\u200D\uD83E\uDDBC"],"","",["person_in_motorized_wheelchair"],49,54,15,0],
		"1f9d1-200d-1f9bd":[["\uD83E\uDDD1\u200D\uD83E\uDDBD"],"","",["person_in_manual_wheelchair"],50,0,15,0],
		"1f9d1-200d-2695-fe0f":[["\uD83E\uDDD1\u200D\u2695\uFE0F","\uD83E\uDDD1\u200D\u2695"],"","",["health_worker"],50,6,15,0],
		"1f9d1-200d-2696-fe0f":[["\uD83E\uDDD1\u200D\u2696\uFE0F","\uD83E\uDDD1\u200D\u2696"],"","",["judge"],50,12,15,0],
		"1f9d1-200d-2708-fe0f":[["\uD83E\uDDD1\u200D\u2708\uFE0F","\uD83E\uDDD1\u200D\u2708"],"","",["pilot"],50,18,15,0],
		"1f9d1":[["\uD83E\uDDD1"],"","",["adult"],50,24,15,0],
		"1f9d2":[["\uD83E\uDDD2"],"","",["child"],50,30,15,0],
		"1f9d3":[["\uD83E\uDDD3"],"","",["older_adult"],50,36,15,0],
		"1f9d4-200d-2640-fe0f":[["\uD83E\uDDD4\u200D\u2640\uFE0F","\uD83E\uDDD4\u200D\u2640"],"","",["woman_with_beard"],50,42,7,0],
		"1f9d4-200d-2642-fe0f":[["\uD83E\uDDD4\u200D\u2642\uFE0F","\uD83E\uDDD4\u200D\u2642"],"","",["man_with_beard"],50,48,7,0],
		"1f9d4":[["\uD83E\uDDD4"],"","",["bearded_person"],50,54,15,0],
		"1f9d5":[["\uD83E\uDDD5"],"","",["person_with_headscarf"],51,0,15,0],
		"1f9d6-200d-2640-fe0f":[["\uD83E\uDDD6\u200D\u2640\uFE0F","\uD83E\uDDD6\u200D\u2640"],"","",["woman_in_steamy_room"],51,6,15,0],
		"1f9d6-200d-2642-fe0f":[["\uD83E\uDDD6\u200D\u2642\uFE0F","\uD83E\uDDD6\u200D\u2642","\uD83E\uDDD6"],"","",["man_in_steamy_room","person_in_steamy_room"],51,12,15,0],
		"1f9d7-200d-2640-fe0f":[["\uD83E\uDDD7\u200D\u2640\uFE0F","\uD83E\uDDD7\u200D\u2640","\uD83E\uDDD7"],"","",["woman_climbing","person_climbing"],51,24,15,0],
		"1f9d7-200d-2642-fe0f":[["\uD83E\uDDD7\u200D\u2642\uFE0F","\uD83E\uDDD7\u200D\u2642"],"","",["man_climbing"],51,30,15,0],
		"1f9d8-200d-2640-fe0f":[["\uD83E\uDDD8\u200D\u2640\uFE0F","\uD83E\uDDD8\u200D\u2640","\uD83E\uDDD8"],"","",["woman_in_lotus_position","person_in_lotus_position"],51,42,15,0],
		"1f9d8-200d-2642-fe0f":[["\uD83E\uDDD8\u200D\u2642\uFE0F","\uD83E\uDDD8\u200D\u2642"],"","",["man_in_lotus_position"],51,48,15,0],
		"1f9d9-200d-2640-fe0f":[["\uD83E\uDDD9\u200D\u2640\uFE0F","\uD83E\uDDD9\u200D\u2640","\uD83E\uDDD9"],"","",["female_mage","mage"],52,0,15,0],
		"1f9d9-200d-2642-fe0f":[["\uD83E\uDDD9\u200D\u2642\uFE0F","\uD83E\uDDD9\u200D\u2642"],"","",["male_mage"],52,6,15,0],
		"1f9da-200d-2640-fe0f":[["\uD83E\uDDDA\u200D\u2640\uFE0F","\uD83E\uDDDA\u200D\u2640","\uD83E\uDDDA"],"","",["female_fairy","fairy"],52,18,15,0],
		"1f9da-200d-2642-fe0f":[["\uD83E\uDDDA\u200D\u2642\uFE0F","\uD83E\uDDDA\u200D\u2642"],"","",["male_fairy"],52,24,15,0],
		"1f9db-200d-2640-fe0f":[["\uD83E\uDDDB\u200D\u2640\uFE0F","\uD83E\uDDDB\u200D\u2640","\uD83E\uDDDB"],"","",["female_vampire","vampire"],52,36,15,0],
		"1f9db-200d-2642-fe0f":[["\uD83E\uDDDB\u200D\u2642\uFE0F","\uD83E\uDDDB\u200D\u2642"],"","",["male_vampire"],52,42,15,0],
		"1f9dc-200d-2640-fe0f":[["\uD83E\uDDDC\u200D\u2640\uFE0F","\uD83E\uDDDC\u200D\u2640"],"","",["mermaid"],52,54,15,0],
		"1f9dc-200d-2642-fe0f":[["\uD83E\uDDDC\u200D\u2642\uFE0F","\uD83E\uDDDC\u200D\u2642","\uD83E\uDDDC"],"","",["merman","merperson"],53,0,15,0],
		"1f9dd-200d-2640-fe0f":[["\uD83E\uDDDD\u200D\u2640\uFE0F","\uD83E\uDDDD\u200D\u2640"],"","",["female_elf"],53,12,15,0],
		"1f9dd-200d-2642-fe0f":[["\uD83E\uDDDD\u200D\u2642\uFE0F","\uD83E\uDDDD\u200D\u2642","\uD83E\uDDDD"],"","",["male_elf","elf"],53,18,15,0],
		"1f9de-200d-2640-fe0f":[["\uD83E\uDDDE\u200D\u2640\uFE0F","\uD83E\uDDDE\u200D\u2640"],"","",["female_genie"],53,30,15,0],
		"1f9de-200d-2642-fe0f":[["\uD83E\uDDDE\u200D\u2642\uFE0F","\uD83E\uDDDE\u200D\u2642","\uD83E\uDDDE"],"","",["male_genie","genie"],53,31,15,0],
		"1f9df-200d-2640-fe0f":[["\uD83E\uDDDF\u200D\u2640\uFE0F","\uD83E\uDDDF\u200D\u2640"],"","",["female_zombie"],53,33,15,0],
		"1f9df-200d-2642-fe0f":[["\uD83E\uDDDF\u200D\u2642\uFE0F","\uD83E\uDDDF\u200D\u2642","\uD83E\uDDDF"],"","",["male_zombie","zombie"],53,34,15,0],
		"1f9e0":[["\uD83E\uDDE0"],"","",["brain"],53,36,15,0],
		"1f9e1":[["\uD83E\uDDE1"],"","",["orange_heart"],53,37,15,0],
		"1f9e2":[["\uD83E\uDDE2"],"","",["billed_cap"],53,38,15,0],
		"1f9e3":[["\uD83E\uDDE3"],"","",["scarf"],53,39,15,0],
		"1f9e4":[["\uD83E\uDDE4"],"","",["gloves"],53,40,15,0],
		"1f9e5":[["\uD83E\uDDE5"],"","",["coat"],53,41,15,0],
		"1f9e6":[["\uD83E\uDDE6"],"","",["socks"],53,42,15,0],
		"1f9e7":[["\uD83E\uDDE7"],"","",["red_envelope"],53,43,15,0],
		"1f9e8":[["\uD83E\uDDE8"],"","",["firecracker"],53,44,15,0],
		"1f9e9":[["\uD83E\uDDE9"],"","",["jigsaw"],53,45,15,0],
		"1f9ea":[["\uD83E\uDDEA"],"","",["test_tube"],53,46,15,0],
		"1f9eb":[["\uD83E\uDDEB"],"","",["petri_dish"],53,47,15,0],
		"1f9ec":[["\uD83E\uDDEC"],"","",["dna"],53,48,15,0],
		"1f9ed":[["\uD83E\uDDED"],"","",["compass"],53,49,15,0],
		"1f9ee":[["\uD83E\uDDEE"],"","",["abacus"],53,50,15,0],
		"1f9ef":[["\uD83E\uDDEF"],"","",["fire_extinguisher"],53,51,15,0],
		"1f9f0":[["\uD83E\uDDF0"],"","",["toolbox"],53,52,15,0],
		"1f9f1":[["\uD83E\uDDF1"],"","",["bricks"],53,53,15,0],
		"1f9f2":[["\uD83E\uDDF2"],"","",["magnet"],53,54,15,0],
		"1f9f3":[["\uD83E\uDDF3"],"","",["luggage"],53,55,15,0],
		"1f9f4":[["\uD83E\uDDF4"],"","",["lotion_bottle"],53,56,15,0],
		"1f9f5":[["\uD83E\uDDF5"],"","",["thread"],53,57,15,0],
		"1f9f6":[["\uD83E\uDDF6"],"","",["yarn"],53,58,15,0],
		"1f9f7":[["\uD83E\uDDF7"],"","",["safety_pin"],53,59,15,0],
		"1f9f8":[["\uD83E\uDDF8"],"","",["teddy_bear"],54,0,15,0],
		"1f9f9":[["\uD83E\uDDF9"],"","",["broom"],54,1,15,0],
		"1f9fa":[["\uD83E\uDDFA"],"","",["basket"],54,2,15,0],
		"1f9fb":[["\uD83E\uDDFB"],"","",["roll_of_paper"],54,3,15,0],
		"1f9fc":[["\uD83E\uDDFC"],"","",["soap"],54,4,15,0],
		"1f9fd":[["\uD83E\uDDFD"],"","",["sponge"],54,5,15,0],
		"1f9fe":[["\uD83E\uDDFE"],"","",["receipt"],54,6,15,0],
		"1f9ff":[["\uD83E\uDDFF"],"","",["nazar_amulet"],54,7,15,0],
		"1fa70":[["\uD83E\uDE70"],"","",["ballet_shoes"],54,8,15,0],
		"1fa71":[["\uD83E\uDE71"],"","",["one-piece_swimsuit"],54,9,15,0],
		"1fa72":[["\uD83E\uDE72"],"","",["briefs"],54,10,15,0],
		"1fa73":[["\uD83E\uDE73"],"","",["shorts"],54,11,15,0],
		"1fa74":[["\uD83E\uDE74"],"","",["thong_sandal"],54,12,15,0],
		"1fa78":[["\uD83E\uDE78"],"","",["drop_of_blood"],54,13,15,0],
		"1fa79":[["\uD83E\uDE79"],"","",["adhesive_bandage"],54,14,15,0],
		"1fa7a":[["\uD83E\uDE7A"],"","",["stethoscope"],54,15,15,0],
		"1fa80":[["\uD83E\uDE80"],"","",["yo-yo"],54,16,15,0],
		"1fa81":[["\uD83E\uDE81"],"","",["kite"],54,17,15,0],
		"1fa82":[["\uD83E\uDE82"],"","",["parachute"],54,18,15,0],
		"1fa83":[["\uD83E\uDE83"],"","",["boomerang"],54,19,15,0],
		"1fa84":[["\uD83E\uDE84"],"","",["magic_wand"],54,20,15,0],
		"1fa85":[["\uD83E\uDE85"],"","",["pinata"],54,21,15,0],
		"1fa86":[["\uD83E\uDE86"],"","",["nesting_dolls"],54,22,15,0],
		"1fa90":[["\uD83E\uDE90"],"","",["ringed_planet"],54,23,15,0],
		"1fa91":[["\uD83E\uDE91"],"","",["chair"],54,24,15,0],
		"1fa92":[["\uD83E\uDE92"],"","",["razor"],54,25,15,0],
		"1fa93":[["\uD83E\uDE93"],"","",["axe"],54,26,15,0],
		"1fa94":[["\uD83E\uDE94"],"","",["diya_lamp"],54,27,15,0],
		"1fa95":[["\uD83E\uDE95"],"","",["banjo"],54,28,15,0],
		"1fa96":[["\uD83E\uDE96"],"","",["military_helmet"],54,29,15,0],
		"1fa97":[["\uD83E\uDE97"],"","",["accordion"],54,30,15,0],
		"1fa98":[["\uD83E\uDE98"],"","",["long_drum"],54,31,15,0],
		"1fa99":[["\uD83E\uDE99"],"","",["coin"],54,32,15,0],
		"1fa9a":[["\uD83E\uDE9A"],"","",["carpentry_saw"],54,33,15,0],
		"1fa9b":[["\uD83E\uDE9B"],"","",["screwdriver"],54,34,15,0],
		"1fa9c":[["\uD83E\uDE9C"],"","",["ladder"],54,35,15,0],
		"1fa9d":[["\uD83E\uDE9D"],"","",["hook"],54,36,15,0],
		"1fa9e":[["\uD83E\uDE9E"],"","",["mirror"],54,37,15,0],
		"1fa9f":[["\uD83E\uDE9F"],"","",["window"],54,38,15,0],
		"1faa0":[["\uD83E\uDEA0"],"","",["plunger"],54,39,15,0],
		"1faa1":[["\uD83E\uDEA1"],"","",["sewing_needle"],54,40,15,0],
		"1faa2":[["\uD83E\uDEA2"],"","",["knot"],54,41,15,0],
		"1faa3":[["\uD83E\uDEA3"],"","",["bucket"],54,42,15,0],
		"1faa4":[["\uD83E\uDEA4"],"","",["mouse_trap"],54,43,15,0],
		"1faa5":[["\uD83E\uDEA5"],"","",["toothbrush"],54,44,15,0],
		"1faa6":[["\uD83E\uDEA6"],"","",["headstone"],54,45,15,0],
		"1faa7":[["\uD83E\uDEA7"],"","",["placard"],54,46,15,0],
		"1faa8":[["\uD83E\uDEA8"],"","",["rock"],54,47,15,0],
		"1fab0":[["\uD83E\uDEB0"],"","",["fly"],54,48,15,0],
		"1fab1":[["\uD83E\uDEB1"],"","",["worm"],54,49,15,0],
		"1fab2":[["\uD83E\uDEB2"],"","",["beetle"],54,50,15,0],
		"1fab3":[["\uD83E\uDEB3"],"","",["cockroach"],54,51,15,0],
		"1fab4":[["\uD83E\uDEB4"],"","",["potted_plant"],54,52,15,0],
		"1fab5":[["\uD83E\uDEB5"],"","",["wood"],54,53,15,0],
		"1fab6":[["\uD83E\uDEB6"],"","",["feather"],54,54,15,0],
		"1fac0":[["\uD83E\uDEC0"],"","",["anatomical_heart"],54,55,15,0],
		"1fac1":[["\uD83E\uDEC1"],"","",["lungs"],54,56,15,0],
		"1fac2":[["\uD83E\uDEC2"],"","",["people_hugging"],54,57,15,0],
		"1fad0":[["\uD83E\uDED0"],"","",["blueberries"],54,58,15,0],
		"1fad1":[["\uD83E\uDED1"],"","",["bell_pepper"],54,59,15,0],
		"1fad2":[["\uD83E\uDED2"],"","",["olive"],55,0,15,0],
		"1fad3":[["\uD83E\uDED3"],"","",["flatbread"],55,1,15,0],
		"1fad4":[["\uD83E\uDED4"],"","",["tamale"],55,2,15,0],
		"1fad5":[["\uD83E\uDED5"],"","",["fondue"],55,3,15,0],
		"1fad6":[["\uD83E\uDED6"],"","",["teapot"],55,4,15,0],
		"203c-fe0f":[["\u203C\uFE0F","\u203C"],"","\uDBBA\uDF06",["bangbang"],55,5,15,0],
		"2049-fe0f":[["\u2049\uFE0F","\u2049"],"","\uDBBA\uDF05",["interrobang"],55,6,15,0],
		"2122-fe0f":[["\u2122\uFE0F","\u2122"],"\uE537","\uDBBA\uDF2A",["tm"],55,7,15,0],
		"2139-fe0f":[["\u2139\uFE0F","\u2139"],"","\uDBBA\uDF47",["information_source"],55,8,15,0],
		"2194-fe0f":[["\u2194\uFE0F","\u2194"],"","\uDBBA\uDEF6",["left_right_arrow"],55,9,15,0],
		"2195-fe0f":[["\u2195\uFE0F","\u2195"],"","\uDBBA\uDEF7",["arrow_up_down"],55,10,15,0],
		"2196-fe0f":[["\u2196\uFE0F","\u2196"],"\uE237","\uDBBA\uDEF2",["arrow_upper_left"],55,11,15,0],
		"2197-fe0f":[["\u2197\uFE0F","\u2197"],"\uE236","\uDBBA\uDEF0",["arrow_upper_right"],55,12,15,0],
		"2198-fe0f":[["\u2198\uFE0F","\u2198"],"\uE238","\uDBBA\uDEF1",["arrow_lower_right"],55,13,15,0],
		"2199-fe0f":[["\u2199\uFE0F","\u2199"],"\uE239","\uDBBA\uDEF3",["arrow_lower_left"],55,14,15,0],
		"21a9-fe0f":[["\u21A9\uFE0F","\u21A9"],"","\uDBBA\uDF83",["leftwards_arrow_with_hook"],55,15,15,0],
		"21aa-fe0f":[["\u21AA\uFE0F","\u21AA"],"","\uDBBA\uDF88",["arrow_right_hook"],55,16,15,0],
		"231a":[["\u231A"],"","\uDBB8\uDC1D",["watch"],55,17,15,0],
		"231b":[["\u231B"],"","\uDBB8\uDC1C",["hourglass"],55,18,15,0],
		"2328-fe0f":[["\u2328\uFE0F","\u2328"],"","",["keyboard"],55,19,15,0],
		"23cf-fe0f":[["\u23CF\uFE0F","\u23CF"],"","",["eject"],55,20,15,0],
		"23e9":[["\u23E9"],"\uE23C","\uDBBA\uDEFE",["fast_forward"],55,21,15,0],
		"23ea":[["\u23EA"],"\uE23D","\uDBBA\uDEFF",["rewind"],55,22,15,0],
		"23eb":[["\u23EB"],"","\uDBBA\uDF03",["arrow_double_up"],55,23,15,0],
		"23ec":[["\u23EC"],"","\uDBBA\uDF02",["arrow_double_down"],55,24,15,0],
		"23ed-fe0f":[["\u23ED\uFE0F","\u23ED"],"","",["black_right_pointing_double_triangle_with_vertical_bar"],55,25,15,0],
		"23ee-fe0f":[["\u23EE\uFE0F","\u23EE"],"","",["black_left_pointing_double_triangle_with_vertical_bar"],55,26,15,0],
		"23ef-fe0f":[["\u23EF\uFE0F","\u23EF"],"","",["black_right_pointing_triangle_with_double_vertical_bar"],55,27,15,0],
		"23f0":[["\u23F0"],"","\uDBB8\uDC2A",["alarm_clock"],55,28,15,0],
		"23f1-fe0f":[["\u23F1\uFE0F","\u23F1"],"","",["stopwatch"],55,29,15,0],
		"23f2-fe0f":[["\u23F2\uFE0F","\u23F2"],"","",["timer_clock"],55,30,15,0],
		"23f3":[["\u23F3"],"","\uDBB8\uDC1B",["hourglass_flowing_sand"],55,31,15,0],
		"23f8-fe0f":[["\u23F8\uFE0F","\u23F8"],"","",["double_vertical_bar"],55,32,15,0],
		"23f9-fe0f":[["\u23F9\uFE0F","\u23F9"],"","",["black_square_for_stop"],55,33,15,0],
		"23fa-fe0f":[["\u23FA\uFE0F","\u23FA"],"","",["black_circle_for_record"],55,34,15,0],
		"24c2-fe0f":[["\u24C2\uFE0F","\u24C2"],"","\uDBB9\uDFE1",["m"],55,35,15,0],
		"25aa-fe0f":[["\u25AA\uFE0F","\u25AA"],"","\uDBBA\uDF6E",["black_small_square"],55,36,15,0],
		"25ab-fe0f":[["\u25AB\uFE0F","\u25AB"],"","\uDBBA\uDF6D",["white_small_square"],55,37,15,0],
		"25b6-fe0f":[["\u25B6\uFE0F","\u25B6"],"\uE23A","\uDBBA\uDEFC",["arrow_forward"],55,38,15,0],
		"25c0-fe0f":[["\u25C0\uFE0F","\u25C0"],"\uE23B","\uDBBA\uDEFD",["arrow_backward"],55,39,15,0],
		"25fb-fe0f":[["\u25FB\uFE0F","\u25FB"],"","\uDBBA\uDF71",["white_medium_square"],55,40,15,0],
		"25fc-fe0f":[["\u25FC\uFE0F","\u25FC"],"","\uDBBA\uDF72",["black_medium_square"],55,41,15,0],
		"25fd":[["\u25FD"],"","\uDBBA\uDF6F",["white_medium_small_square"],55,42,15,0],
		"25fe":[["\u25FE"],"","\uDBBA\uDF70",["black_medium_small_square"],55,43,15,0],
		"2600-fe0f":[["\u2600\uFE0F","\u2600"],"\uE04A","\uDBB8\uDC00",["sunny"],55,44,15,0],
		"2601-fe0f":[["\u2601\uFE0F","\u2601"],"\uE049","\uDBB8\uDC01",["cloud"],55,45,15,0],
		"2602-fe0f":[["\u2602\uFE0F","\u2602"],"","",["umbrella"],55,46,15,0],
		"2603-fe0f":[["\u2603\uFE0F","\u2603"],"","",["snowman"],55,47,15,0],
		"2604-fe0f":[["\u2604\uFE0F","\u2604"],"","",["comet"],55,48,15,0],
		"260e-fe0f":[["\u260E\uFE0F","\u260E"],"\uE009","\uDBB9\uDD23",["phone","telephone"],55,49,15,0],
		"2611-fe0f":[["\u2611\uFE0F","\u2611"],"","\uDBBA\uDF8B",["ballot_box_with_check"],55,50,15,0],
		"2614":[["\u2614"],"\uE04B","\uDBB8\uDC02",["umbrella_with_rain_drops"],55,51,15,0],
		"2615":[["\u2615"],"\uE045","\uDBBA\uDD81",["coffee"],55,52,15,0],
		"2618-fe0f":[["\u2618\uFE0F","\u2618"],"","",["shamrock"],55,53,15,0],
		"261d-fe0f":[["\u261D\uFE0F","\u261D"],"\uE00F","\uDBBA\uDF98",["point_up"],55,54,15,0],
		"2620-fe0f":[["\u2620\uFE0F","\u2620"],"","",["skull_and_crossbones"],56,0,15,0],
		"2622-fe0f":[["\u2622\uFE0F","\u2622"],"","",["radioactive_sign"],56,1,15,0],
		"2623-fe0f":[["\u2623\uFE0F","\u2623"],"","",["biohazard_sign"],56,2,15,0],
		"2626-fe0f":[["\u2626\uFE0F","\u2626"],"","",["orthodox_cross"],56,3,15,0],
		"262a-fe0f":[["\u262A\uFE0F","\u262A"],"","",["star_and_crescent"],56,4,15,0],
		"262e-fe0f":[["\u262E\uFE0F","\u262E"],"","",["peace_symbol"],56,5,15,0],
		"262f-fe0f":[["\u262F\uFE0F","\u262F"],"","",["yin_yang"],56,6,15,0],
		"2638-fe0f":[["\u2638\uFE0F","\u2638"],"","",["wheel_of_dharma"],56,7,15,0],
		"2639-fe0f":[["\u2639\uFE0F","\u2639"],"","",["white_frowning_face"],56,8,15,0],
		"263a-fe0f":[["\u263A\uFE0F","\u263A"],"\uE414","\uDBB8\uDF36",["relaxed"],56,9,15,0],
		"2640-fe0f":[["\u2640\uFE0F","\u2640"],"","",["female_sign"],56,10,14,0],
		"2642-fe0f":[["\u2642\uFE0F","\u2642"],"","",["male_sign"],56,11,14,0],
		"2648":[["\u2648"],"\uE23F","\uDBB8\uDC2B",["aries"],56,12,15,0],
		"2649":[["\u2649"],"\uE240","\uDBB8\uDC2C",["taurus"],56,13,15,0],
		"264a":[["\u264A"],"\uE241","\uDBB8\uDC2D",["gemini"],56,14,15,0],
		"264b":[["\u264B"],"\uE242","\uDBB8\uDC2E",["cancer"],56,15,15,0],
		"264c":[["\u264C"],"\uE243","\uDBB8\uDC2F",["leo"],56,16,15,0],
		"264d":[["\u264D"],"\uE244","\uDBB8\uDC30",["virgo"],56,17,15,0],
		"264e":[["\u264E"],"\uE245","\uDBB8\uDC31",["libra"],56,18,15,0],
		"264f":[["\u264F"],"\uE246","\uDBB8\uDC32",["scorpius"],56,19,15,0],
		"2650":[["\u2650"],"\uE247","\uDBB8\uDC33",["sagittarius"],56,20,15,0],
		"2651":[["\u2651"],"\uE248","\uDBB8\uDC34",["capricorn"],56,21,15,0],
		"2652":[["\u2652"],"\uE249","\uDBB8\uDC35",["aquarius"],56,22,15,0],
		"2653":[["\u2653"],"\uE24A","\uDBB8\uDC36",["pisces"],56,23,15,0],
		"265f-fe0f":[["\u265F\uFE0F","\u265F"],"","",["chess_pawn"],56,24,15,0],
		"2660-fe0f":[["\u2660\uFE0F","\u2660"],"\uE20E","\uDBBA\uDF1B",["spades"],56,25,15,0],
		"2663-fe0f":[["\u2663\uFE0F","\u2663"],"\uE20F","\uDBBA\uDF1D",["clubs"],56,26,15,0],
		"2665-fe0f":[["\u2665\uFE0F","\u2665"],"\uE20C","\uDBBA\uDF1A",["hearts"],56,27,15,0],
		"2666-fe0f":[["\u2666\uFE0F","\u2666"],"\uE20D","\uDBBA\uDF1C",["diamonds"],56,28,15,0],
		"2668-fe0f":[["\u2668\uFE0F","\u2668"],"\uE123","\uDBB9\uDFFA",["hotsprings"],56,29,15,0],
		"267b-fe0f":[["\u267B\uFE0F","\u267B"],"","\uDBBA\uDF2C",["recycle"],56,30,15,0],
		"267e-fe0f":[["\u267E\uFE0F","\u267E"],"","",["infinity"],56,31,15,0],
		"267f":[["\u267F"],"\uE20A","\uDBBA\uDF20",["wheelchair"],56,32,15,0],
		"2692-fe0f":[["\u2692\uFE0F","\u2692"],"","",["hammer_and_pick"],56,33,15,0],
		"2693":[["\u2693"],"","\uDBB9\uDCC1",["anchor"],56,34,15,0],
		"2694-fe0f":[["\u2694\uFE0F","\u2694"],"","",["crossed_swords"],56,35,15,0],
		"2695-fe0f":[["\u2695\uFE0F","\u2695"],"","",["medical_symbol","staff_of_aesculapius"],56,36,14,0],
		"2696-fe0f":[["\u2696\uFE0F","\u2696"],"","",["scales"],56,37,15,0],
		"2697-fe0f":[["\u2697\uFE0F","\u2697"],"","",["alembic"],56,38,15,0],
		"2699-fe0f":[["\u2699\uFE0F","\u2699"],"","",["gear"],56,39,15,0],
		"269b-fe0f":[["\u269B\uFE0F","\u269B"],"","",["atom_symbol"],56,40,15,0],
		"269c-fe0f":[["\u269C\uFE0F","\u269C"],"","",["fleur_de_lis"],56,41,15,0],
		"26a0-fe0f":[["\u26A0\uFE0F","\u26A0"],"\uE252","\uDBBA\uDF23",["warning"],56,42,15,0],
		"26a1":[["\u26A1"],"\uE13D","\uDBB8\uDC04",["zap"],56,43,15,0],
		"26a7-fe0f":[["\u26A7\uFE0F","\u26A7"],"","",["transgender_symbol"],56,44,15,0],
		"26aa":[["\u26AA"],"","\uDBBA\uDF65",["white_circle"],56,45,15,0],
		"26ab":[["\u26AB"],"","\uDBBA\uDF66",["black_circle"],56,46,15,0],
		"26b0-fe0f":[["\u26B0\uFE0F","\u26B0"],"","",["coffin"],56,47,15,0],
		"26b1-fe0f":[["\u26B1\uFE0F","\u26B1"],"","",["funeral_urn"],56,48,15,0],
		"26bd":[["\u26BD"],"\uE018","\uDBB9\uDFD4",["soccer"],56,49,15,0],
		"26be":[["\u26BE"],"\uE016","\uDBB9\uDFD1",["baseball"],56,50,15,0],
		"26c4":[["\u26C4"],"\uE048","\uDBB8\uDC03",["snowman_without_snow"],56,51,15,0],
		"26c5":[["\u26C5"],"","\uDBB8\uDC0F",["partly_sunny"],56,52,15,0],
		"26c8-fe0f":[["\u26C8\uFE0F","\u26C8"],"","",["thunder_cloud_and_rain"],56,53,15,0],
		"26ce":[["\u26CE"],"\uE24B","\uDBB8\uDC37",["ophiuchus"],56,54,15,0],
		"26cf-fe0f":[["\u26CF\uFE0F","\u26CF"],"","",["pick"],56,55,15,0],
		"26d1-fe0f":[["\u26D1\uFE0F","\u26D1"],"","",["helmet_with_white_cross"],56,56,15,0],
		"26d3-fe0f":[["\u26D3\uFE0F","\u26D3"],"","",["chains"],56,57,15,0],
		"26d4":[["\u26D4"],"","\uDBBA\uDF26",["no_entry"],56,58,15,0],
		"26e9-fe0f":[["\u26E9\uFE0F","\u26E9"],"","",["shinto_shrine"],56,59,15,0],
		"26ea":[["\u26EA"],"\uE037","\uDBB9\uDCBB",["church"],57,0,15,0],
		"26f0-fe0f":[["\u26F0\uFE0F","\u26F0"],"","",["mountain"],57,1,15,0],
		"26f1-fe0f":[["\u26F1\uFE0F","\u26F1"],"","",["umbrella_on_ground"],57,2,15,0],
		"26f2":[["\u26F2"],"\uE121","\uDBB9\uDCBC",["fountain"],57,3,15,0],
		"26f3":[["\u26F3"],"\uE014","\uDBB9\uDFD2",["golf"],57,4,15,0],
		"26f4-fe0f":[["\u26F4\uFE0F","\u26F4"],"","",["ferry"],57,5,15,0],
		"26f5":[["\u26F5"],"\uE01C","\uDBB9\uDFEA",["boat","sailboat"],57,6,15,0],
		"26f7-fe0f":[["\u26F7\uFE0F","\u26F7"],"","",["skier"],57,7,15,0],
		"26f8-fe0f":[["\u26F8\uFE0F","\u26F8"],"","",["ice_skate"],57,8,15,0],
		"26f9-fe0f-200d-2640-fe0f":[["\u26F9\uFE0F\u200D\u2640\uFE0F"],"","",["woman-bouncing-ball"],57,9,7,0],
		"26f9-fe0f-200d-2642-fe0f":[["\u26F9\uFE0F\u200D\u2642\uFE0F","\u26F9\uFE0F","\u26F9"],"","",["man-bouncing-ball","person_with_ball"],57,15,7,0],
		"26fa":[["\u26FA"],"\uE122","\uDBB9\uDFFB",["tent"],57,27,15,0],
		"26fd":[["\u26FD"],"\uE03A","\uDBB9\uDFF5",["fuelpump"],57,28,15,0],
		"2702-fe0f":[["\u2702\uFE0F","\u2702"],"\uE313","\uDBB9\uDD3E",["scissors"],57,29,15,0],
		"2705":[["\u2705"],"","\uDBBA\uDF4A",["white_check_mark"],57,30,15,0],
		"2708-fe0f":[["\u2708\uFE0F","\u2708"],"\uE01D","\uDBB9\uDFE9",["airplane"],57,31,15,0],
		"2709-fe0f":[["\u2709\uFE0F","\u2709"],"","\uDBB9\uDD29",["email","envelope"],57,32,15,0],
		"270a":[["\u270A"],"\uE010","\uDBBA\uDF93",["fist"],57,33,15,0],
		"270b":[["\u270B"],"\uE012","\uDBBA\uDF95",["hand","raised_hand"],57,39,15,0],
		"270c-fe0f":[["\u270C\uFE0F","\u270C"],"\uE011","\uDBBA\uDF94",["v"],57,45,15,0],
		"270d-fe0f":[["\u270D\uFE0F","\u270D"],"","",["writing_hand"],57,51,15,0],
		"270f-fe0f":[["\u270F\uFE0F","\u270F"],"","\uDBB9\uDD39",["pencil2"],57,57,15,0],
		"2712-fe0f":[["\u2712\uFE0F","\u2712"],"","\uDBB9\uDD36",["black_nib"],57,58,15,0],
		"2714-fe0f":[["\u2714\uFE0F","\u2714"],"","\uDBBA\uDF49",["heavy_check_mark"],57,59,15,0],
		"2716-fe0f":[["\u2716\uFE0F","\u2716"],"","\uDBBA\uDF53",["heavy_multiplication_x"],58,0,15,0],
		"271d-fe0f":[["\u271D\uFE0F","\u271D"],"","",["latin_cross"],58,1,15,0],
		"2721-fe0f":[["\u2721\uFE0F","\u2721"],"","",["star_of_david"],58,2,15,0],
		"2728":[["\u2728"],"\uE32E","\uDBBA\uDF60",["sparkles"],58,3,15,0],
		"2733-fe0f":[["\u2733\uFE0F","\u2733"],"\uE206","\uDBBA\uDF62",["eight_spoked_asterisk"],58,4,15,0],
		"2734-fe0f":[["\u2734\uFE0F","\u2734"],"\uE205","\uDBBA\uDF61",["eight_pointed_black_star"],58,5,15,0],
		"2744-fe0f":[["\u2744\uFE0F","\u2744"],"","\uDBB8\uDC0E",["snowflake"],58,6,15,0],
		"2747-fe0f":[["\u2747\uFE0F","\u2747"],"","\uDBBA\uDF77",["sparkle"],58,7,15,0],
		"274c":[["\u274C"],"\uE333","\uDBBA\uDF45",["x"],58,8,15,0],
		"274e":[["\u274E"],"","\uDBBA\uDF46",["negative_squared_cross_mark"],58,9,15,0],
		"2753":[["\u2753"],"\uE020","\uDBBA\uDF09",["question"],58,10,15,0],
		"2754":[["\u2754"],"\uE336","\uDBBA\uDF0A",["grey_question"],58,11,15,0],
		"2755":[["\u2755"],"\uE337","\uDBBA\uDF0B",["grey_exclamation"],58,12,15,0],
		"2757":[["\u2757"],"\uE021","\uDBBA\uDF04",["exclamation","heavy_exclamation_mark"],58,13,15,0],
		"2763-fe0f":[["\u2763\uFE0F","\u2763"],"","",["heavy_heart_exclamation_mark_ornament"],58,14,15,0],
		"2764-fe0f-200d-1f525":[["\u2764\uFE0F\u200D\uD83D\uDD25","\u2764\u200D\uD83D\uDD25"],"","",["heart_on_fire"],58,15,7,0],
		"2764-fe0f-200d-1fa79":[["\u2764\uFE0F\u200D\uD83E\uDE79","\u2764\u200D\uD83E\uDE79"],"","",["mending_heart"],58,16,7,0],
		"2764-fe0f":[["\u2764\uFE0F","\u2764"],"\uE022","\uDBBA\uDF0C",["heart"],58,17,15,0,"<3"],
		"2795":[["\u2795"],"","\uDBBA\uDF51",["heavy_plus_sign"],58,18,15,0],
		"2796":[["\u2796"],"","\uDBBA\uDF52",["heavy_minus_sign"],58,19,15,0],
		"2797":[["\u2797"],"","\uDBBA\uDF54",["heavy_division_sign"],58,20,15,0],
		"27a1-fe0f":[["\u27A1\uFE0F","\u27A1"],"\uE234","\uDBBA\uDEFA",["arrow_right"],58,21,15,0],
		"27b0":[["\u27B0"],"","\uDBBA\uDF08",["curly_loop"],58,22,15,0],
		"27bf":[["\u27BF"],"\uE211","\uDBBA\uDC2B",["loop"],58,23,15,0],
		"2934-fe0f":[["\u2934\uFE0F","\u2934"],"","\uDBBA\uDEF4",["arrow_heading_up"],58,24,15,0],
		"2935-fe0f":[["\u2935\uFE0F","\u2935"],"","\uDBBA\uDEF5",["arrow_heading_down"],58,25,15,0],
		"2b05-fe0f":[["\u2B05\uFE0F","\u2B05"],"\uE235","\uDBBA\uDEFB",["arrow_left"],58,26,15,0],
		"2b06-fe0f":[["\u2B06\uFE0F","\u2B06"],"\uE232","\uDBBA\uDEF8",["arrow_up"],58,27,15,0],
		"2b07-fe0f":[["\u2B07\uFE0F","\u2B07"],"\uE233","\uDBBA\uDEF9",["arrow_down"],58,28,15,0],
		"2b1b":[["\u2B1B"],"","\uDBBA\uDF6C",["black_large_square"],58,29,15,0],
		"2b1c":[["\u2B1C"],"","\uDBBA\uDF6B",["white_large_square"],58,30,15,0],
		"2b50":[["\u2B50"],"\uE32F","\uDBBA\uDF68",["star"],58,31,15,0],
		"2b55":[["\u2B55"],"\uE332","\uDBBA\uDF44",["o"],58,32,15,0],
		"3030-fe0f":[["\u3030\uFE0F","\u3030"],"","\uDBBA\uDF07",["wavy_dash"],58,33,15,0],
		"303d-fe0f":[["\u303D\uFE0F","\u303D"],"\uE12C","\uDBBA\uDC1B",["part_alternation_mark"],58,34,15,0],
		"3297-fe0f":[["\u3297\uFE0F","\u3297"],"\uE30D","\uDBBA\uDF43",["congratulations"],58,35,15,0],
		"3299-fe0f":[["\u3299\uFE0F","\u3299"],"\uE315","\uDBBA\uDF2B",["secret"],58,36,15,0]
	};
	/** @private */
	emoji.prototype.emoticons_data = {
		":o)":"monkey_face",
		"<\/3":"broken_heart",
		"=)":"smiley",
		"=-)":"smiley",
		"C:":"smile",
		"c:":"smile",
		":D":"smile",
		":-D":"smile",
		":>":"laughing",
		":->":"laughing",
		";)":"wink",
		";-)":"wink",
		"8)":"sunglasses",
		":|":"neutral_face",
		":-|":"neutral_face",
		":\\":"confused",
		":-\\":"confused",
		":\/":"confused",
		":-\/":"confused",
		":*":"kissing_heart",
		":-*":"kissing_heart",
		":p":"stuck_out_tongue",
		":-p":"stuck_out_tongue",
		":P":"stuck_out_tongue",
		":-P":"stuck_out_tongue",
		":b":"stuck_out_tongue",
		":-b":"stuck_out_tongue",
		";p":"stuck_out_tongue_winking_eye",
		";-p":"stuck_out_tongue_winking_eye",
		";b":"stuck_out_tongue_winking_eye",
		";-b":"stuck_out_tongue_winking_eye",
		";P":"stuck_out_tongue_winking_eye",
		";-P":"stuck_out_tongue_winking_eye",
		"):":"disappointed",
		":(":"disappointed",
		":-(":"disappointed",
		">:(":"angry",
		">:-(":"angry",
		":'(":"cry",
		"D:":"anguished",
		":o":"open_mouth",
		":-o":"open_mouth",
		":O":"open_mouth",
		":-O":"open_mouth",
		":)":"slightly_smiling_face",
		"(:":"slightly_smiling_face",
		":-)":"slightly_smiling_face",
		"<3":"heart"
	};
	/** @private */
	emoji.prototype.variations_data = {
		"1f385":{"1f3fb":["1f385-1f3fb",7,16,15,["\uD83C\uDF85\uD83C\uDFFB"]],"1f3fc":["1f385-1f3fc",7,17,15,["\uD83C\uDF85\uD83C\uDFFC"]],"1f3fd":["1f385-1f3fd",7,18,15,["\uD83C\uDF85\uD83C\uDFFD"]],"1f3fe":["1f385-1f3fe",7,19,15,["\uD83C\uDF85\uD83C\uDFFE"]],"1f3ff":["1f385-1f3ff",7,20,15,["\uD83C\uDF85\uD83C\uDFFF"]]},
		"1f3c2":{"1f3fb":["1f3c2-1f3fb",8,17,15,["\uD83C\uDFC2\uD83C\uDFFB"]],"1f3fc":["1f3c2-1f3fc",8,18,15,["\uD83C\uDFC2\uD83C\uDFFC"]],"1f3fd":["1f3c2-1f3fd",8,19,15,["\uD83C\uDFC2\uD83C\uDFFD"]],"1f3fe":["1f3c2-1f3fe",8,20,15,["\uD83C\uDFC2\uD83C\uDFFE"]],"1f3ff":["1f3c2-1f3ff",8,21,15,["\uD83C\uDFC2\uD83C\uDFFF"]]},
		"1f3c3-200d-2640-fe0f":{"1f3fb":["1f3c3-1f3fb-200d-2640-fe0f",8,23,15,["\uD83C\uDFC3\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3c3-1f3fc-200d-2640-fe0f",8,24,15,["\uD83C\uDFC3\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3c3-1f3fd-200d-2640-fe0f",8,25,15,["\uD83C\uDFC3\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3c3-1f3fe-200d-2640-fe0f",8,26,15,["\uD83C\uDFC3\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3c3-1f3ff-200d-2640-fe0f",8,27,15,["\uD83C\uDFC3\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3c3-200d-2642-fe0f":{"1f3fb":["1f3c3-1f3fb-200d-2642-fe0f",8,29,15,["\uD83C\uDFC3\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFB"]],"1f3fc":["1f3c3-1f3fc-200d-2642-fe0f",8,30,15,["\uD83C\uDFC3\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFC"]],"1f3fd":["1f3c3-1f3fd-200d-2642-fe0f",8,31,15,["\uD83C\uDFC3\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFD"]],"1f3fe":["1f3c3-1f3fe-200d-2642-fe0f",8,32,15,["\uD83C\uDFC3\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFE"]],"1f3ff":["1f3c3-1f3ff-200d-2642-fe0f",8,33,15,["\uD83C\uDFC3\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFC3\uD83C\uDFFF"]]},
		"1f3c4-200d-2640-fe0f":{"1f3fb":["1f3c4-1f3fb-200d-2640-fe0f",8,41,15,["\uD83C\uDFC4\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3c4-1f3fc-200d-2640-fe0f",8,42,15,["\uD83C\uDFC4\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3c4-1f3fd-200d-2640-fe0f",8,43,15,["\uD83C\uDFC4\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3c4-1f3fe-200d-2640-fe0f",8,44,15,["\uD83C\uDFC4\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3c4-1f3ff-200d-2640-fe0f",8,45,15,["\uD83C\uDFC4\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3c4-200d-2642-fe0f":{"1f3fb":["1f3c4-1f3fb-200d-2642-fe0f",8,47,15,["\uD83C\uDFC4\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFB"]],"1f3fc":["1f3c4-1f3fc-200d-2642-fe0f",8,48,15,["\uD83C\uDFC4\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFC"]],"1f3fd":["1f3c4-1f3fd-200d-2642-fe0f",8,49,15,["\uD83C\uDFC4\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFD"]],"1f3fe":["1f3c4-1f3fe-200d-2642-fe0f",8,50,15,["\uD83C\uDFC4\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFE"]],"1f3ff":["1f3c4-1f3ff-200d-2642-fe0f",8,51,15,["\uD83C\uDFC4\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFC4\uD83C\uDFFF"]]},
		"1f3c7":{"1f3fb":["1f3c7-1f3fb",9,1,15,["\uD83C\uDFC7\uD83C\uDFFB"]],"1f3fc":["1f3c7-1f3fc",9,2,15,["\uD83C\uDFC7\uD83C\uDFFC"]],"1f3fd":["1f3c7-1f3fd",9,3,15,["\uD83C\uDFC7\uD83C\uDFFD"]],"1f3fe":["1f3c7-1f3fe",9,4,15,["\uD83C\uDFC7\uD83C\uDFFE"]],"1f3ff":["1f3c7-1f3ff",9,5,15,["\uD83C\uDFC7\uD83C\uDFFF"]]},
		"1f3ca-200d-2640-fe0f":{"1f3fb":["1f3ca-1f3fb-200d-2640-fe0f",9,9,15,["\uD83C\uDFCA\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3ca-1f3fc-200d-2640-fe0f",9,10,15,["\uD83C\uDFCA\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3ca-1f3fd-200d-2640-fe0f",9,11,15,["\uD83C\uDFCA\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3ca-1f3fe-200d-2640-fe0f",9,12,15,["\uD83C\uDFCA\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3ca-1f3ff-200d-2640-fe0f",9,13,15,["\uD83C\uDFCA\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3ca-200d-2642-fe0f":{"1f3fb":["1f3ca-1f3fb-200d-2642-fe0f",9,15,15,["\uD83C\uDFCA\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFB"]],"1f3fc":["1f3ca-1f3fc-200d-2642-fe0f",9,16,15,["\uD83C\uDFCA\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFC"]],"1f3fd":["1f3ca-1f3fd-200d-2642-fe0f",9,17,15,["\uD83C\uDFCA\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFD"]],"1f3fe":["1f3ca-1f3fe-200d-2642-fe0f",9,18,15,["\uD83C\uDFCA\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFE"]],"1f3ff":["1f3ca-1f3ff-200d-2642-fe0f",9,19,15,["\uD83C\uDFCA\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFCA\uD83C\uDFFF"]]},
		"1f3cb-fe0f-200d-2640-fe0f":{"1f3fb":["1f3cb-1f3fb-200d-2640-fe0f",9,27,15,["\uD83C\uDFCB\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3cb-1f3fc-200d-2640-fe0f",9,28,15,["\uD83C\uDFCB\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3cb-1f3fd-200d-2640-fe0f",9,29,15,["\uD83C\uDFCB\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3cb-1f3fe-200d-2640-fe0f",9,30,15,["\uD83C\uDFCB\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3cb-1f3ff-200d-2640-fe0f",9,31,15,["\uD83C\uDFCB\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3cb-fe0f-200d-2642-fe0f":{"1f3fb":["1f3cb-1f3fb-200d-2642-fe0f",9,33,15,["\uD83C\uDFCB\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFB"]],"1f3fc":["1f3cb-1f3fc-200d-2642-fe0f",9,34,15,["\uD83C\uDFCB\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFC"]],"1f3fd":["1f3cb-1f3fd-200d-2642-fe0f",9,35,15,["\uD83C\uDFCB\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFD"]],"1f3fe":["1f3cb-1f3fe-200d-2642-fe0f",9,36,15,["\uD83C\uDFCB\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFE"]],"1f3ff":["1f3cb-1f3ff-200d-2642-fe0f",9,37,15,["\uD83C\uDFCB\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFCB\uD83C\uDFFF"]]},
		"1f3cc-fe0f-200d-2640-fe0f":{"1f3fb":["1f3cc-1f3fb-200d-2640-fe0f",9,45,15,["\uD83C\uDFCC\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f3cc-1f3fc-200d-2640-fe0f",9,46,15,["\uD83C\uDFCC\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f3cc-1f3fd-200d-2640-fe0f",9,47,15,["\uD83C\uDFCC\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f3cc-1f3fe-200d-2640-fe0f",9,48,15,["\uD83C\uDFCC\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f3cc-1f3ff-200d-2640-fe0f",9,49,15,["\uD83C\uDFCC\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f3cc-fe0f-200d-2642-fe0f":{"1f3fb":["1f3cc-1f3fb-200d-2642-fe0f",9,51,15,["\uD83C\uDFCC\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFB"]],"1f3fc":["1f3cc-1f3fc-200d-2642-fe0f",9,52,15,["\uD83C\uDFCC\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFC"]],"1f3fd":["1f3cc-1f3fd-200d-2642-fe0f",9,53,15,["\uD83C\uDFCC\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFD"]],"1f3fe":["1f3cc-1f3fe-200d-2642-fe0f",9,54,15,["\uD83C\uDFCC\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFE"]],"1f3ff":["1f3cc-1f3ff-200d-2642-fe0f",9,55,15,["\uD83C\uDFCC\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83C\uDFCC\uD83C\uDFFF"]]},
		"1f442":{"1f3fb":["1f442-1f3fb",12,7,15,["\uD83D\uDC42\uD83C\uDFFB"]],"1f3fc":["1f442-1f3fc",12,8,15,["\uD83D\uDC42\uD83C\uDFFC"]],"1f3fd":["1f442-1f3fd",12,9,15,["\uD83D\uDC42\uD83C\uDFFD"]],"1f3fe":["1f442-1f3fe",12,10,15,["\uD83D\uDC42\uD83C\uDFFE"]],"1f3ff":["1f442-1f3ff",12,11,15,["\uD83D\uDC42\uD83C\uDFFF"]]},
		"1f443":{"1f3fb":["1f443-1f3fb",12,13,15,["\uD83D\uDC43\uD83C\uDFFB"]],"1f3fc":["1f443-1f3fc",12,14,15,["\uD83D\uDC43\uD83C\uDFFC"]],"1f3fd":["1f443-1f3fd",12,15,15,["\uD83D\uDC43\uD83C\uDFFD"]],"1f3fe":["1f443-1f3fe",12,16,15,["\uD83D\uDC43\uD83C\uDFFE"]],"1f3ff":["1f443-1f3ff",12,17,15,["\uD83D\uDC43\uD83C\uDFFF"]]},
		"1f446":{"1f3fb":["1f446-1f3fb",12,21,15,["\uD83D\uDC46\uD83C\uDFFB"]],"1f3fc":["1f446-1f3fc",12,22,15,["\uD83D\uDC46\uD83C\uDFFC"]],"1f3fd":["1f446-1f3fd",12,23,15,["\uD83D\uDC46\uD83C\uDFFD"]],"1f3fe":["1f446-1f3fe",12,24,15,["\uD83D\uDC46\uD83C\uDFFE"]],"1f3ff":["1f446-1f3ff",12,25,15,["\uD83D\uDC46\uD83C\uDFFF"]]},
		"1f447":{"1f3fb":["1f447-1f3fb",12,27,15,["\uD83D\uDC47\uD83C\uDFFB"]],"1f3fc":["1f447-1f3fc",12,28,15,["\uD83D\uDC47\uD83C\uDFFC"]],"1f3fd":["1f447-1f3fd",12,29,15,["\uD83D\uDC47\uD83C\uDFFD"]],"1f3fe":["1f447-1f3fe",12,30,15,["\uD83D\uDC47\uD83C\uDFFE"]],"1f3ff":["1f447-1f3ff",12,31,15,["\uD83D\uDC47\uD83C\uDFFF"]]},
		"1f448":{"1f3fb":["1f448-1f3fb",12,33,15,["\uD83D\uDC48\uD83C\uDFFB"]],"1f3fc":["1f448-1f3fc",12,34,15,["\uD83D\uDC48\uD83C\uDFFC"]],"1f3fd":["1f448-1f3fd",12,35,15,["\uD83D\uDC48\uD83C\uDFFD"]],"1f3fe":["1f448-1f3fe",12,36,15,["\uD83D\uDC48\uD83C\uDFFE"]],"1f3ff":["1f448-1f3ff",12,37,15,["\uD83D\uDC48\uD83C\uDFFF"]]},
		"1f449":{"1f3fb":["1f449-1f3fb",12,39,15,["\uD83D\uDC49\uD83C\uDFFB"]],"1f3fc":["1f449-1f3fc",12,40,15,["\uD83D\uDC49\uD83C\uDFFC"]],"1f3fd":["1f449-1f3fd",12,41,15,["\uD83D\uDC49\uD83C\uDFFD"]],"1f3fe":["1f449-1f3fe",12,42,15,["\uD83D\uDC49\uD83C\uDFFE"]],"1f3ff":["1f449-1f3ff",12,43,15,["\uD83D\uDC49\uD83C\uDFFF"]]},
		"1f44a":{"1f3fb":["1f44a-1f3fb",12,45,15,["\uD83D\uDC4A\uD83C\uDFFB"]],"1f3fc":["1f44a-1f3fc",12,46,15,["\uD83D\uDC4A\uD83C\uDFFC"]],"1f3fd":["1f44a-1f3fd",12,47,15,["\uD83D\uDC4A\uD83C\uDFFD"]],"1f3fe":["1f44a-1f3fe",12,48,15,["\uD83D\uDC4A\uD83C\uDFFE"]],"1f3ff":["1f44a-1f3ff",12,49,15,["\uD83D\uDC4A\uD83C\uDFFF"]]},
		"1f44b":{"1f3fb":["1f44b-1f3fb",12,51,15,["\uD83D\uDC4B\uD83C\uDFFB"]],"1f3fc":["1f44b-1f3fc",12,52,15,["\uD83D\uDC4B\uD83C\uDFFC"]],"1f3fd":["1f44b-1f3fd",12,53,15,["\uD83D\uDC4B\uD83C\uDFFD"]],"1f3fe":["1f44b-1f3fe",12,54,15,["\uD83D\uDC4B\uD83C\uDFFE"]],"1f3ff":["1f44b-1f3ff",12,55,15,["\uD83D\uDC4B\uD83C\uDFFF"]]},
		"1f44c":{"1f3fb":["1f44c-1f3fb",12,57,15,["\uD83D\uDC4C\uD83C\uDFFB"]],"1f3fc":["1f44c-1f3fc",12,58,15,["\uD83D\uDC4C\uD83C\uDFFC"]],"1f3fd":["1f44c-1f3fd",12,59,15,["\uD83D\uDC4C\uD83C\uDFFD"]],"1f3fe":["1f44c-1f3fe",13,0,15,["\uD83D\uDC4C\uD83C\uDFFE"]],"1f3ff":["1f44c-1f3ff",13,1,15,["\uD83D\uDC4C\uD83C\uDFFF"]]},
		"1f44d":{"1f3fb":["1f44d-1f3fb",13,3,15,["\uD83D\uDC4D\uD83C\uDFFB"]],"1f3fc":["1f44d-1f3fc",13,4,15,["\uD83D\uDC4D\uD83C\uDFFC"]],"1f3fd":["1f44d-1f3fd",13,5,15,["\uD83D\uDC4D\uD83C\uDFFD"]],"1f3fe":["1f44d-1f3fe",13,6,15,["\uD83D\uDC4D\uD83C\uDFFE"]],"1f3ff":["1f44d-1f3ff",13,7,15,["\uD83D\uDC4D\uD83C\uDFFF"]]},
		"1f44e":{"1f3fb":["1f44e-1f3fb",13,9,15,["\uD83D\uDC4E\uD83C\uDFFB"]],"1f3fc":["1f44e-1f3fc",13,10,15,["\uD83D\uDC4E\uD83C\uDFFC"]],"1f3fd":["1f44e-1f3fd",13,11,15,["\uD83D\uDC4E\uD83C\uDFFD"]],"1f3fe":["1f44e-1f3fe",13,12,15,["\uD83D\uDC4E\uD83C\uDFFE"]],"1f3ff":["1f44e-1f3ff",13,13,15,["\uD83D\uDC4E\uD83C\uDFFF"]]},
		"1f44f":{"1f3fb":["1f44f-1f3fb",13,15,15,["\uD83D\uDC4F\uD83C\uDFFB"]],"1f3fc":["1f44f-1f3fc",13,16,15,["\uD83D\uDC4F\uD83C\uDFFC"]],"1f3fd":["1f44f-1f3fd",13,17,15,["\uD83D\uDC4F\uD83C\uDFFD"]],"1f3fe":["1f44f-1f3fe",13,18,15,["\uD83D\uDC4F\uD83C\uDFFE"]],"1f3ff":["1f44f-1f3ff",13,19,15,["\uD83D\uDC4F\uD83C\uDFFF"]]},
		"1f450":{"1f3fb":["1f450-1f3fb",13,21,15,["\uD83D\uDC50\uD83C\uDFFB"]],"1f3fc":["1f450-1f3fc",13,22,15,["\uD83D\uDC50\uD83C\uDFFC"]],"1f3fd":["1f450-1f3fd",13,23,15,["\uD83D\uDC50\uD83C\uDFFD"]],"1f3fe":["1f450-1f3fe",13,24,15,["\uD83D\uDC50\uD83C\uDFFE"]],"1f3ff":["1f450-1f3ff",13,25,15,["\uD83D\uDC50\uD83C\uDFFF"]]},
		"1f466":{"1f3fb":["1f466-1f3fb",13,48,15,["\uD83D\uDC66\uD83C\uDFFB"]],"1f3fc":["1f466-1f3fc",13,49,15,["\uD83D\uDC66\uD83C\uDFFC"]],"1f3fd":["1f466-1f3fd",13,50,15,["\uD83D\uDC66\uD83C\uDFFD"]],"1f3fe":["1f466-1f3fe",13,51,15,["\uD83D\uDC66\uD83C\uDFFE"]],"1f3ff":["1f466-1f3ff",13,52,15,["\uD83D\uDC66\uD83C\uDFFF"]]},
		"1f467":{"1f3fb":["1f467-1f3fb",13,54,15,["\uD83D\uDC67\uD83C\uDFFB"]],"1f3fc":["1f467-1f3fc",13,55,15,["\uD83D\uDC67\uD83C\uDFFC"]],"1f3fd":["1f467-1f3fd",13,56,15,["\uD83D\uDC67\uD83C\uDFFD"]],"1f3fe":["1f467-1f3fe",13,57,15,["\uD83D\uDC67\uD83C\uDFFE"]],"1f3ff":["1f467-1f3ff",13,58,15,["\uD83D\uDC67\uD83C\uDFFF"]]},
		"1f468-200d-1f33e":{"1f3fb":["1f468-1f3fb-200d-1f33e",14,0,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF3E"]],"1f3fc":["1f468-1f3fc-200d-1f33e",14,1,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF3E"]],"1f3fd":["1f468-1f3fd-200d-1f33e",14,2,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF3E"]],"1f3fe":["1f468-1f3fe-200d-1f33e",14,3,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF3E"]],"1f3ff":["1f468-1f3ff-200d-1f33e",14,4,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF3E"]]},
		"1f468-200d-1f373":{"1f3fb":["1f468-1f3fb-200d-1f373",14,6,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF73"]],"1f3fc":["1f468-1f3fc-200d-1f373",14,7,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF73"]],"1f3fd":["1f468-1f3fd-200d-1f373",14,8,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF73"]],"1f3fe":["1f468-1f3fe-200d-1f373",14,9,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF73"]],"1f3ff":["1f468-1f3ff-200d-1f373",14,10,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF73"]]},
		"1f468-200d-1f37c":{"1f3fb":["1f468-1f3fb-200d-1f37c",14,12,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF7C"]],"1f3fc":["1f468-1f3fc-200d-1f37c",14,13,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF7C"]],"1f3fd":["1f468-1f3fd-200d-1f37c",14,14,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF7C"]],"1f3fe":["1f468-1f3fe-200d-1f37c",14,15,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF7C"]],"1f3ff":["1f468-1f3ff-200d-1f37c",14,16,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF7C"]]},
		"1f468-200d-1f393":{"1f3fb":["1f468-1f3fb-200d-1f393",14,18,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDF93"]],"1f3fc":["1f468-1f3fc-200d-1f393",14,19,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDF93"]],"1f3fd":["1f468-1f3fd-200d-1f393",14,20,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDF93"]],"1f3fe":["1f468-1f3fe-200d-1f393",14,21,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDF93"]],"1f3ff":["1f468-1f3ff-200d-1f393",14,22,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDF93"]]},
		"1f468-200d-1f3a4":{"1f3fb":["1f468-1f3fb-200d-1f3a4",14,24,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFA4"]],"1f3fc":["1f468-1f3fc-200d-1f3a4",14,25,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFA4"]],"1f3fd":["1f468-1f3fd-200d-1f3a4",14,26,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFA4"]],"1f3fe":["1f468-1f3fe-200d-1f3a4",14,27,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFA4"]],"1f3ff":["1f468-1f3ff-200d-1f3a4",14,28,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFA4"]]},
		"1f468-200d-1f3a8":{"1f3fb":["1f468-1f3fb-200d-1f3a8",14,30,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFA8"]],"1f3fc":["1f468-1f3fc-200d-1f3a8",14,31,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFA8"]],"1f3fd":["1f468-1f3fd-200d-1f3a8",14,32,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFA8"]],"1f3fe":["1f468-1f3fe-200d-1f3a8",14,33,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFA8"]],"1f3ff":["1f468-1f3ff-200d-1f3a8",14,34,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFA8"]]},
		"1f468-200d-1f3eb":{"1f3fb":["1f468-1f3fb-200d-1f3eb",14,36,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFEB"]],"1f3fc":["1f468-1f3fc-200d-1f3eb",14,37,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFEB"]],"1f3fd":["1f468-1f3fd-200d-1f3eb",14,38,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFEB"]],"1f3fe":["1f468-1f3fe-200d-1f3eb",14,39,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFEB"]],"1f3ff":["1f468-1f3ff-200d-1f3eb",14,40,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFEB"]]},
		"1f468-200d-1f3ed":{"1f3fb":["1f468-1f3fb-200d-1f3ed",14,42,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83C\uDFED"]],"1f3fc":["1f468-1f3fc-200d-1f3ed",14,43,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83C\uDFED"]],"1f3fd":["1f468-1f3fd-200d-1f3ed",14,44,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83C\uDFED"]],"1f3fe":["1f468-1f3fe-200d-1f3ed",14,45,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83C\uDFED"]],"1f3ff":["1f468-1f3ff-200d-1f3ed",14,46,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83C\uDFED"]]},
		"1f468-200d-1f4bb":{"1f3fb":["1f468-1f3fb-200d-1f4bb",15,3,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB"]],"1f3fc":["1f468-1f3fc-200d-1f4bb",15,4,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBB"]],"1f3fd":["1f468-1f3fd-200d-1f4bb",15,5,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBB"]],"1f3fe":["1f468-1f3fe-200d-1f4bb",15,6,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBB"]],"1f3ff":["1f468-1f3ff-200d-1f4bb",15,7,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDCBB"]]},
		"1f468-200d-1f4bc":{"1f3fb":["1f468-1f3fb-200d-1f4bc",15,9,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBC"]],"1f3fc":["1f468-1f3fc-200d-1f4bc",15,10,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBC"]],"1f3fd":["1f468-1f3fd-200d-1f4bc",15,11,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDCBC"]],"1f3fe":["1f468-1f3fe-200d-1f4bc",15,12,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDCBC"]],"1f3ff":["1f468-1f3ff-200d-1f4bc",15,13,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDCBC"]]},
		"1f468-200d-1f527":{"1f3fb":["1f468-1f3fb-200d-1f527",15,15,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD27"]],"1f3fc":["1f468-1f3fc-200d-1f527",15,16,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDD27"]],"1f3fd":["1f468-1f3fd-200d-1f527",15,17,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDD27"]],"1f3fe":["1f468-1f3fe-200d-1f527",15,18,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDD27"]],"1f3ff":["1f468-1f3ff-200d-1f527",15,19,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDD27"]]},
		"1f468-200d-1f52c":{"1f3fb":["1f468-1f3fb-200d-1f52c",15,21,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDD2C"]],"1f3fc":["1f468-1f3fc-200d-1f52c",15,22,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDD2C"]],"1f3fd":["1f468-1f3fd-200d-1f52c",15,23,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDD2C"]],"1f3fe":["1f468-1f3fe-200d-1f52c",15,24,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDD2C"]],"1f3ff":["1f468-1f3ff-200d-1f52c",15,25,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDD2C"]]},
		"1f468-200d-1f680":{"1f3fb":["1f468-1f3fb-200d-1f680",15,27,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDE80"]],"1f3fc":["1f468-1f3fc-200d-1f680",15,28,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDE80"]],"1f3fd":["1f468-1f3fd-200d-1f680",15,29,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDE80"]],"1f3fe":["1f468-1f3fe-200d-1f680",15,30,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDE80"]],"1f3ff":["1f468-1f3ff-200d-1f680",15,31,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDE80"]]},
		"1f468-200d-1f692":{"1f3fb":["1f468-1f3fb-200d-1f692",15,33,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDE92"]],"1f3fc":["1f468-1f3fc-200d-1f692",15,34,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDE92"]],"1f3fd":["1f468-1f3fd-200d-1f692",15,35,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83D\uDE92"]],"1f3fe":["1f468-1f3fe-200d-1f692",15,36,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83D\uDE92"]],"1f3ff":["1f468-1f3ff-200d-1f692",15,37,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83D\uDE92"]]},
		"1f468-200d-1f9af":{"1f3fb":["1f468-1f3fb-200d-1f9af",15,39,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDAF"]],"1f3fc":["1f468-1f3fc-200d-1f9af",15,40,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDAF"]],"1f3fd":["1f468-1f3fd-200d-1f9af",15,41,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDAF"]],"1f3fe":["1f468-1f3fe-200d-1f9af",15,42,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDAF"]],"1f3ff":["1f468-1f3ff-200d-1f9af",15,43,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDAF"]]},
		"1f468-200d-1f9b0":{"1f3fb":["1f468-1f3fb-200d-1f9b0",15,45,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDB0"]],"1f3fc":["1f468-1f3fc-200d-1f9b0",15,46,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDB0"]],"1f3fd":["1f468-1f3fd-200d-1f9b0",15,47,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDB0"]],"1f3fe":["1f468-1f3fe-200d-1f9b0",15,48,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDB0"]],"1f3ff":["1f468-1f3ff-200d-1f9b0",15,49,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDB0"]]},
		"1f468-200d-1f9b1":{"1f3fb":["1f468-1f3fb-200d-1f9b1",15,51,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDB1"]],"1f3fc":["1f468-1f3fc-200d-1f9b1",15,52,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDB1"]],"1f3fd":["1f468-1f3fd-200d-1f9b1",15,53,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDB1"]],"1f3fe":["1f468-1f3fe-200d-1f9b1",15,54,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDB1"]],"1f3ff":["1f468-1f3ff-200d-1f9b1",15,55,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDB1"]]},
		"1f468-200d-1f9b2":{"1f3fb":["1f468-1f3fb-200d-1f9b2",15,57,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDB2"]],"1f3fc":["1f468-1f3fc-200d-1f9b2",15,58,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDB2"]],"1f3fd":["1f468-1f3fd-200d-1f9b2",15,59,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDB2"]],"1f3fe":["1f468-1f3fe-200d-1f9b2",16,0,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDB2"]],"1f3ff":["1f468-1f3ff-200d-1f9b2",16,1,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDB2"]]},
		"1f468-200d-1f9b3":{"1f3fb":["1f468-1f3fb-200d-1f9b3",16,3,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDB3"]],"1f3fc":["1f468-1f3fc-200d-1f9b3",16,4,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDB3"]],"1f3fd":["1f468-1f3fd-200d-1f9b3",16,5,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDB3"]],"1f3fe":["1f468-1f3fe-200d-1f9b3",16,6,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDB3"]],"1f3ff":["1f468-1f3ff-200d-1f9b3",16,7,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDB3"]]},
		"1f468-200d-1f9bc":{"1f3fb":["1f468-1f3fb-200d-1f9bc",16,9,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDBC"]],"1f3fc":["1f468-1f3fc-200d-1f9bc",16,10,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDBC"]],"1f3fd":["1f468-1f3fd-200d-1f9bc",16,11,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDBC"]],"1f3fe":["1f468-1f3fe-200d-1f9bc",16,12,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDBC"]],"1f3ff":["1f468-1f3ff-200d-1f9bc",16,13,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDBC"]]},
		"1f468-200d-1f9bd":{"1f3fb":["1f468-1f3fb-200d-1f9bd",16,15,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDBD"]],"1f3fc":["1f468-1f3fc-200d-1f9bd",16,16,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDDBD"]],"1f3fd":["1f468-1f3fd-200d-1f9bd",16,17,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDDBD"]],"1f3fe":["1f468-1f3fe-200d-1f9bd",16,18,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDDBD"]],"1f3ff":["1f468-1f3ff-200d-1f9bd",16,19,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDDBD"]]},
		"1f468-200d-2695-fe0f":{"1f3fb":["1f468-1f3fb-200d-2695-fe0f",16,21,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2695\uFE0F"]],"1f3fc":["1f468-1f3fc-200d-2695-fe0f",16,22,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2695\uFE0F"]],"1f3fd":["1f468-1f3fd-200d-2695-fe0f",16,23,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2695\uFE0F"]],"1f3fe":["1f468-1f3fe-200d-2695-fe0f",16,24,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2695\uFE0F"]],"1f3ff":["1f468-1f3ff-200d-2695-fe0f",16,25,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2695\uFE0F"]]},
		"1f468-200d-2696-fe0f":{"1f3fb":["1f468-1f3fb-200d-2696-fe0f",16,27,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2696\uFE0F"]],"1f3fc":["1f468-1f3fc-200d-2696-fe0f",16,28,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2696\uFE0F"]],"1f3fd":["1f468-1f3fd-200d-2696-fe0f",16,29,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2696\uFE0F"]],"1f3fe":["1f468-1f3fe-200d-2696-fe0f",16,30,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2696\uFE0F"]],"1f3ff":["1f468-1f3ff-200d-2696-fe0f",16,31,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2696\uFE0F"]]},
		"1f468-200d-2708-fe0f":{"1f3fb":["1f468-1f3fb-200d-2708-fe0f",16,33,15,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2708\uFE0F"]],"1f3fc":["1f468-1f3fc-200d-2708-fe0f",16,34,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2708\uFE0F"]],"1f3fd":["1f468-1f3fd-200d-2708-fe0f",16,35,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2708\uFE0F"]],"1f3fe":["1f468-1f3fe-200d-2708-fe0f",16,36,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2708\uFE0F"]],"1f3ff":["1f468-1f3ff-200d-2708-fe0f",16,37,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2708\uFE0F"]]},
		"1f468-200d-2764-fe0f-200d-1f468":{"1f3fb-1f3fb":["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb",16,39,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fb-1f3fc":["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc",16,40,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fb-1f3fd":["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd",16,41,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fb-1f3fe":["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe",16,42,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fb-1f3ff":["1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff",16,43,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fc-1f3fb":["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb",16,44,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fc-1f3fc":["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc",16,45,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fc-1f3fd":["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd",16,46,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fc-1f3fe":["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe",16,47,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fc-1f3ff":["1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff",16,48,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fd-1f3fb":["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb",16,49,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fd-1f3fc":["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc",16,50,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fd-1f3fd":["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd",16,51,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fd-1f3fe":["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe",16,52,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fd-1f3ff":["1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff",16,53,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fe-1f3fb":["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb",16,54,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fe-1f3fc":["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc",16,55,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fe-1f3fd":["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd",16,56,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fe-1f3fe":["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe",16,57,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fe-1f3ff":["1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff",16,58,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3ff-1f3fb":["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb",16,59,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3ff-1f3fc":["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc",17,0,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3ff-1f3fd":["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd",17,1,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3ff-1f3fe":["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe",17,2,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3ff-1f3ff":["1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff",17,3,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF"]]},
		"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468":{"1f3fb-1f3fb":["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",17,5,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fb-1f3fc":["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",17,6,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fb-1f3fd":["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",17,7,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fb-1f3fe":["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",17,8,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fb-1f3ff":["1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",17,9,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fc-1f3fb":["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",17,10,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fc-1f3fc":["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",17,11,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fc-1f3fd":["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",17,12,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fc-1f3fe":["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",17,13,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fc-1f3ff":["1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",17,14,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fd-1f3fb":["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",17,15,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fd-1f3fc":["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",17,16,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fd-1f3fd":["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",17,17,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fd-1f3fe":["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",17,18,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fd-1f3ff":["1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",17,19,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fe-1f3fb":["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",17,20,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fe-1f3fc":["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",17,21,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fe-1f3fd":["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",17,22,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fe-1f3fe":["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",17,23,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fe-1f3ff":["1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",17,24,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3ff-1f3fb":["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",17,25,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3ff-1f3fc":["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",17,26,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3ff-1f3fd":["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",17,27,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3ff-1f3fe":["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",17,28,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3ff-1f3ff":["1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",17,29,7,["\uD83D\uDC68\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF"]]},
		"1f468":{"1f3fb":["1f468-1f3fb",17,31,15,["\uD83D\uDC68\uD83C\uDFFB"]],"1f3fc":["1f468-1f3fc",17,32,15,["\uD83D\uDC68\uD83C\uDFFC"]],"1f3fd":["1f468-1f3fd",17,33,15,["\uD83D\uDC68\uD83C\uDFFD"]],"1f3fe":["1f468-1f3fe",17,34,15,["\uD83D\uDC68\uD83C\uDFFE"]],"1f3ff":["1f468-1f3ff",17,35,15,["\uD83D\uDC68\uD83C\uDFFF"]]},
		"1f469-200d-1f33e":{"1f3fb":["1f469-1f3fb-200d-1f33e",17,37,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF3E"]],"1f3fc":["1f469-1f3fc-200d-1f33e",17,38,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF3E"]],"1f3fd":["1f469-1f3fd-200d-1f33e",17,39,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF3E"]],"1f3fe":["1f469-1f3fe-200d-1f33e",17,40,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF3E"]],"1f3ff":["1f469-1f3ff-200d-1f33e",17,41,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF3E"]]},
		"1f469-200d-1f373":{"1f3fb":["1f469-1f3fb-200d-1f373",17,43,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF73"]],"1f3fc":["1f469-1f3fc-200d-1f373",17,44,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF73"]],"1f3fd":["1f469-1f3fd-200d-1f373",17,45,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF73"]],"1f3fe":["1f469-1f3fe-200d-1f373",17,46,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF73"]],"1f3ff":["1f469-1f3ff-200d-1f373",17,47,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF73"]]},
		"1f469-200d-1f37c":{"1f3fb":["1f469-1f3fb-200d-1f37c",17,49,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF7C"]],"1f3fc":["1f469-1f3fc-200d-1f37c",17,50,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF7C"]],"1f3fd":["1f469-1f3fd-200d-1f37c",17,51,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF7C"]],"1f3fe":["1f469-1f3fe-200d-1f37c",17,52,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF7C"]],"1f3ff":["1f469-1f3ff-200d-1f37c",17,53,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF7C"]]},
		"1f469-200d-1f393":{"1f3fb":["1f469-1f3fb-200d-1f393",17,55,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDF93"]],"1f3fc":["1f469-1f3fc-200d-1f393",17,56,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDF93"]],"1f3fd":["1f469-1f3fd-200d-1f393",17,57,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDF93"]],"1f3fe":["1f469-1f3fe-200d-1f393",17,58,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDF93"]],"1f3ff":["1f469-1f3ff-200d-1f393",17,59,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDF93"]]},
		"1f469-200d-1f3a4":{"1f3fb":["1f469-1f3fb-200d-1f3a4",18,1,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFA4"]],"1f3fc":["1f469-1f3fc-200d-1f3a4",18,2,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFA4"]],"1f3fd":["1f469-1f3fd-200d-1f3a4",18,3,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFA4"]],"1f3fe":["1f469-1f3fe-200d-1f3a4",18,4,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFA4"]],"1f3ff":["1f469-1f3ff-200d-1f3a4",18,5,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFA4"]]},
		"1f469-200d-1f3a8":{"1f3fb":["1f469-1f3fb-200d-1f3a8",18,7,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFA8"]],"1f3fc":["1f469-1f3fc-200d-1f3a8",18,8,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFA8"]],"1f3fd":["1f469-1f3fd-200d-1f3a8",18,9,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFA8"]],"1f3fe":["1f469-1f3fe-200d-1f3a8",18,10,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFA8"]],"1f3ff":["1f469-1f3ff-200d-1f3a8",18,11,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFA8"]]},
		"1f469-200d-1f3eb":{"1f3fb":["1f469-1f3fb-200d-1f3eb",18,13,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFEB"]],"1f3fc":["1f469-1f3fc-200d-1f3eb",18,14,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFEB"]],"1f3fd":["1f469-1f3fd-200d-1f3eb",18,15,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFEB"]],"1f3fe":["1f469-1f3fe-200d-1f3eb",18,16,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFEB"]],"1f3ff":["1f469-1f3ff-200d-1f3eb",18,17,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFEB"]]},
		"1f469-200d-1f3ed":{"1f3fb":["1f469-1f3fb-200d-1f3ed",18,19,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83C\uDFED"]],"1f3fc":["1f469-1f3fc-200d-1f3ed",18,20,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83C\uDFED"]],"1f3fd":["1f469-1f3fd-200d-1f3ed",18,21,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83C\uDFED"]],"1f3fe":["1f469-1f3fe-200d-1f3ed",18,22,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83C\uDFED"]],"1f3ff":["1f469-1f3ff-200d-1f3ed",18,23,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83C\uDFED"]]},
		"1f469-200d-1f4bb":{"1f3fb":["1f469-1f3fb-200d-1f4bb",18,35,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB"]],"1f3fc":["1f469-1f3fc-200d-1f4bb",18,36,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDCBB"]],"1f3fd":["1f469-1f3fd-200d-1f4bb",18,37,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBB"]],"1f3fe":["1f469-1f3fe-200d-1f4bb",18,38,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDCBB"]],"1f3ff":["1f469-1f3ff-200d-1f4bb",18,39,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDCBB"]]},
		"1f469-200d-1f4bc":{"1f3fb":["1f469-1f3fb-200d-1f4bc",18,41,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBC"]],"1f3fc":["1f469-1f3fc-200d-1f4bc",18,42,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDCBC"]],"1f3fd":["1f469-1f3fd-200d-1f4bc",18,43,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDCBC"]],"1f3fe":["1f469-1f3fe-200d-1f4bc",18,44,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDCBC"]],"1f3ff":["1f469-1f3ff-200d-1f4bc",18,45,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDCBC"]]},
		"1f469-200d-1f527":{"1f3fb":["1f469-1f3fb-200d-1f527",18,47,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDD27"]],"1f3fc":["1f469-1f3fc-200d-1f527",18,48,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDD27"]],"1f3fd":["1f469-1f3fd-200d-1f527",18,49,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDD27"]],"1f3fe":["1f469-1f3fe-200d-1f527",18,50,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDD27"]],"1f3ff":["1f469-1f3ff-200d-1f527",18,51,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDD27"]]},
		"1f469-200d-1f52c":{"1f3fb":["1f469-1f3fb-200d-1f52c",18,53,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDD2C"]],"1f3fc":["1f469-1f3fc-200d-1f52c",18,54,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDD2C"]],"1f3fd":["1f469-1f3fd-200d-1f52c",18,55,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDD2C"]],"1f3fe":["1f469-1f3fe-200d-1f52c",18,56,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDD2C"]],"1f3ff":["1f469-1f3ff-200d-1f52c",18,57,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDD2C"]]},
		"1f469-200d-1f680":{"1f3fb":["1f469-1f3fb-200d-1f680",18,59,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDE80"]],"1f3fc":["1f469-1f3fc-200d-1f680",19,0,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE80"]],"1f3fd":["1f469-1f3fd-200d-1f680",19,1,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDE80"]],"1f3fe":["1f469-1f3fe-200d-1f680",19,2,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDE80"]],"1f3ff":["1f469-1f3ff-200d-1f680",19,3,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDE80"]]},
		"1f469-200d-1f692":{"1f3fb":["1f469-1f3fb-200d-1f692",19,5,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDE92"]],"1f3fc":["1f469-1f3fc-200d-1f692",19,6,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83D\uDE92"]],"1f3fd":["1f469-1f3fd-200d-1f692",19,7,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83D\uDE92"]],"1f3fe":["1f469-1f3fe-200d-1f692",19,8,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83D\uDE92"]],"1f3ff":["1f469-1f3ff-200d-1f692",19,9,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83D\uDE92"]]},
		"1f469-200d-1f9af":{"1f3fb":["1f469-1f3fb-200d-1f9af",19,11,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDAF"]],"1f3fc":["1f469-1f3fc-200d-1f9af",19,12,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDAF"]],"1f3fd":["1f469-1f3fd-200d-1f9af",19,13,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDAF"]],"1f3fe":["1f469-1f3fe-200d-1f9af",19,14,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDAF"]],"1f3ff":["1f469-1f3ff-200d-1f9af",19,15,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDAF"]]},
		"1f469-200d-1f9b0":{"1f3fb":["1f469-1f3fb-200d-1f9b0",19,17,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDB0"]],"1f3fc":["1f469-1f3fc-200d-1f9b0",19,18,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDB0"]],"1f3fd":["1f469-1f3fd-200d-1f9b0",19,19,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDB0"]],"1f3fe":["1f469-1f3fe-200d-1f9b0",19,20,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDB0"]],"1f3ff":["1f469-1f3ff-200d-1f9b0",19,21,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDB0"]]},
		"1f469-200d-1f9b1":{"1f3fb":["1f469-1f3fb-200d-1f9b1",19,23,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDB1"]],"1f3fc":["1f469-1f3fc-200d-1f9b1",19,24,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDB1"]],"1f3fd":["1f469-1f3fd-200d-1f9b1",19,25,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDB1"]],"1f3fe":["1f469-1f3fe-200d-1f9b1",19,26,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDB1"]],"1f3ff":["1f469-1f3ff-200d-1f9b1",19,27,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDB1"]]},
		"1f469-200d-1f9b2":{"1f3fb":["1f469-1f3fb-200d-1f9b2",19,29,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDB2"]],"1f3fc":["1f469-1f3fc-200d-1f9b2",19,30,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDB2"]],"1f3fd":["1f469-1f3fd-200d-1f9b2",19,31,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDB2"]],"1f3fe":["1f469-1f3fe-200d-1f9b2",19,32,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDB2"]],"1f3ff":["1f469-1f3ff-200d-1f9b2",19,33,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDB2"]]},
		"1f469-200d-1f9b3":{"1f3fb":["1f469-1f3fb-200d-1f9b3",19,35,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDB3"]],"1f3fc":["1f469-1f3fc-200d-1f9b3",19,36,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDB3"]],"1f3fd":["1f469-1f3fd-200d-1f9b3",19,37,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDB3"]],"1f3fe":["1f469-1f3fe-200d-1f9b3",19,38,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDB3"]],"1f3ff":["1f469-1f3ff-200d-1f9b3",19,39,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDB3"]]},
		"1f469-200d-1f9bc":{"1f3fb":["1f469-1f3fb-200d-1f9bc",19,41,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDBC"]],"1f3fc":["1f469-1f3fc-200d-1f9bc",19,42,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDBC"]],"1f3fd":["1f469-1f3fd-200d-1f9bc",19,43,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDBC"]],"1f3fe":["1f469-1f3fe-200d-1f9bc",19,44,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDBC"]],"1f3ff":["1f469-1f3ff-200d-1f9bc",19,45,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDBC"]]},
		"1f469-200d-1f9bd":{"1f3fb":["1f469-1f3fb-200d-1f9bd",19,47,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDDBD"]],"1f3fc":["1f469-1f3fc-200d-1f9bd",19,48,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDDBD"]],"1f3fd":["1f469-1f3fd-200d-1f9bd",19,49,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDDBD"]],"1f3fe":["1f469-1f3fe-200d-1f9bd",19,50,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDDBD"]],"1f3ff":["1f469-1f3ff-200d-1f9bd",19,51,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDDBD"]]},
		"1f469-200d-2695-fe0f":{"1f3fb":["1f469-1f3fb-200d-2695-fe0f",19,53,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2695\uFE0F"]],"1f3fc":["1f469-1f3fc-200d-2695-fe0f",19,54,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2695\uFE0F"]],"1f3fd":["1f469-1f3fd-200d-2695-fe0f",19,55,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2695\uFE0F"]],"1f3fe":["1f469-1f3fe-200d-2695-fe0f",19,56,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2695\uFE0F"]],"1f3ff":["1f469-1f3ff-200d-2695-fe0f",19,57,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2695\uFE0F"]]},
		"1f469-200d-2696-fe0f":{"1f3fb":["1f469-1f3fb-200d-2696-fe0f",19,59,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2696\uFE0F"]],"1f3fc":["1f469-1f3fc-200d-2696-fe0f",20,0,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2696\uFE0F"]],"1f3fd":["1f469-1f3fd-200d-2696-fe0f",20,1,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2696\uFE0F"]],"1f3fe":["1f469-1f3fe-200d-2696-fe0f",20,2,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2696\uFE0F"]],"1f3ff":["1f469-1f3ff-200d-2696-fe0f",20,3,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2696\uFE0F"]]},
		"1f469-200d-2708-fe0f":{"1f3fb":["1f469-1f3fb-200d-2708-fe0f",20,5,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2708\uFE0F"]],"1f3fc":["1f469-1f3fc-200d-2708-fe0f",20,6,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2708\uFE0F"]],"1f3fd":["1f469-1f3fd-200d-2708-fe0f",20,7,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2708\uFE0F"]],"1f3fe":["1f469-1f3fe-200d-2708-fe0f",20,8,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2708\uFE0F"]],"1f3ff":["1f469-1f3ff-200d-2708-fe0f",20,9,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2708\uFE0F"]]},
		"1f469-200d-2764-fe0f-200d-1f468":{"1f3fb-1f3fb":["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb",20,11,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fb-1f3fc":["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc",20,12,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fb-1f3fd":["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd",20,13,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fb-1f3fe":["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe",20,14,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fb-1f3ff":["1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff",20,15,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fc-1f3fb":["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb",20,16,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fc-1f3fc":["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc",20,17,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fc-1f3fd":["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd",20,18,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fc-1f3fe":["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe",20,19,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fc-1f3ff":["1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff",20,20,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fd-1f3fb":["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb",20,21,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fd-1f3fc":["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc",20,22,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fd-1f3fd":["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd",20,23,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fd-1f3fe":["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe",20,24,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fd-1f3ff":["1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff",20,25,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fe-1f3fb":["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb",20,26,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fe-1f3fc":["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc",20,27,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fe-1f3fd":["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd",20,28,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fe-1f3fe":["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe",20,29,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fe-1f3ff":["1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff",20,30,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3ff-1f3fb":["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb",20,31,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3ff-1f3fc":["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc",20,32,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3ff-1f3fd":["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd",20,33,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3ff-1f3fe":["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe",20,34,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3ff-1f3ff":["1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff",20,35,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC68\uD83C\uDFFF"]]},
		"1f469-200d-2764-fe0f-200d-1f469":{"1f3fb-1f3fb":["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb",20,37,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3fb-1f3fc":["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc",20,38,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3fb-1f3fd":["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd",20,39,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3fb-1f3fe":["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe",20,40,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3fb-1f3ff":["1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff",20,41,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFF"]],"1f3fc-1f3fb":["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb",20,42,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3fc-1f3fc":["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc",20,43,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3fc-1f3fd":["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd",20,44,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3fc-1f3fe":["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe",20,45,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3fc-1f3ff":["1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff",20,46,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFF"]],"1f3fd-1f3fb":["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb",20,47,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3fd-1f3fc":["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc",20,48,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3fd-1f3fd":["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd",20,49,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3fd-1f3fe":["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe",20,50,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3fd-1f3ff":["1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff",20,51,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFF"]],"1f3fe-1f3fb":["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb",20,52,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3fe-1f3fc":["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc",20,53,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3fe-1f3fd":["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd",20,54,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3fe-1f3fe":["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe",20,55,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3fe-1f3ff":["1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff",20,56,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFF"]],"1f3ff-1f3fb":["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb",20,57,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3ff-1f3fc":["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc",20,58,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3ff-1f3fd":["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd",20,59,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3ff-1f3fe":["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe",21,0,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3ff-1f3ff":["1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff",21,1,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC69\uD83C\uDFFF"]]},
		"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468":{"1f3fb-1f3fb":["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",21,3,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fb-1f3fc":["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",21,4,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fb-1f3fd":["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",21,5,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fb-1f3fe":["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",21,6,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fb-1f3ff":["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",21,7,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fc-1f3fb":["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",21,8,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fc-1f3fc":["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",21,9,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fc-1f3fd":["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",21,10,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fc-1f3fe":["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",21,11,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fc-1f3ff":["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",21,12,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fd-1f3fb":["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",21,13,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fd-1f3fc":["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",21,14,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fd-1f3fd":["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",21,15,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fd-1f3fe":["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",21,16,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fd-1f3ff":["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",21,17,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fe-1f3fb":["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",21,18,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fe-1f3fc":["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",21,19,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fe-1f3fd":["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",21,20,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fe-1f3fe":["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",21,21,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fe-1f3ff":["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",21,22,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3ff-1f3fb":["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",21,23,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3ff-1f3fc":["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",21,24,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3ff-1f3fd":["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",21,25,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3ff-1f3fe":["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",21,26,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3ff-1f3ff":["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",21,27,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68\uD83C\uDFFF"]]},
		"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469":{"1f3fb-1f3fb":["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",21,29,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3fb-1f3fc":["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",21,30,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3fb-1f3fd":["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",21,31,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3fb-1f3fe":["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",21,32,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3fb-1f3ff":["1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",21,33,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFF"]],"1f3fc-1f3fb":["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",21,34,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3fc-1f3fc":["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",21,35,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3fc-1f3fd":["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",21,36,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3fc-1f3fe":["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",21,37,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3fc-1f3ff":["1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",21,38,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFF"]],"1f3fd-1f3fb":["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",21,39,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3fd-1f3fc":["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",21,40,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3fd-1f3fd":["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",21,41,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3fd-1f3fe":["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",21,42,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3fd-1f3ff":["1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",21,43,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFF"]],"1f3fe-1f3fb":["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",21,44,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3fe-1f3fc":["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",21,45,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3fe-1f3fd":["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",21,46,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3fe-1f3fe":["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",21,47,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3fe-1f3ff":["1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",21,48,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFF"]],"1f3ff-1f3fb":["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",21,49,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3ff-1f3fc":["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",21,50,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3ff-1f3fd":["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",21,51,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3ff-1f3fe":["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",21,52,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3ff-1f3ff":["1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",21,53,7,["\uD83D\uDC69\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69\uD83C\uDFFF"]]},
		"1f469":{"1f3fb":["1f469-1f3fb",21,55,15,["\uD83D\uDC69\uD83C\uDFFB"]],"1f3fc":["1f469-1f3fc",21,56,15,["\uD83D\uDC69\uD83C\uDFFC"]],"1f3fd":["1f469-1f3fd",21,57,15,["\uD83D\uDC69\uD83C\uDFFD"]],"1f3fe":["1f469-1f3fe",21,58,15,["\uD83D\uDC69\uD83C\uDFFE"]],"1f3ff":["1f469-1f3ff",21,59,15,["\uD83D\uDC69\uD83C\uDFFF"]]},
		"1f46b":{"1f3fb":["1f46b-1f3fb",22,2,15,["\uD83D\uDC6B\uD83C\uDFFB"]],"1f3fc":["1f46b-1f3fc",22,3,15,["\uD83D\uDC6B\uD83C\uDFFC"]],"1f3fd":["1f46b-1f3fd",22,4,15,["\uD83D\uDC6B\uD83C\uDFFD"]],"1f3fe":["1f46b-1f3fe",22,5,15,["\uD83D\uDC6B\uD83C\uDFFE"]],"1f3ff":["1f46b-1f3ff",22,6,15,["\uD83D\uDC6B\uD83C\uDFFF"]],"1f3fb-1f3fc":["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc",22,7,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fb-1f3fd":["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd",22,8,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fb-1f3fe":["1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe",22,9,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fb-1f3ff":["1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff",22,10,15,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fc-1f3fb":["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb",22,11,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fc-1f3fd":["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd",22,12,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fc-1f3fe":["1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe",22,13,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fc-1f3ff":["1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff",22,14,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fd-1f3fb":["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb",22,15,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fd-1f3fc":["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc",22,16,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fd-1f3fe":["1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe",22,17,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fd-1f3ff":["1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff",22,18,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fe-1f3fb":["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb",22,19,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fe-1f3fc":["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc",22,20,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fe-1f3fd":["1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd",22,21,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fe-1f3ff":["1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff",22,22,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3ff-1f3fb":["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb",22,23,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3ff-1f3fc":["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc",22,24,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3ff-1f3fd":["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd",22,25,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3ff-1f3fe":["1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe",22,26,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE"]]},
		"1f46c":{"1f3fb":["1f46c-1f3fb",22,28,15,["\uD83D\uDC6C\uD83C\uDFFB"]],"1f3fc":["1f46c-1f3fc",22,29,15,["\uD83D\uDC6C\uD83C\uDFFC"]],"1f3fd":["1f46c-1f3fd",22,30,15,["\uD83D\uDC6C\uD83C\uDFFD"]],"1f3fe":["1f46c-1f3fe",22,31,15,["\uD83D\uDC6C\uD83C\uDFFE"]],"1f3ff":["1f46c-1f3ff",22,32,15,["\uD83D\uDC6C\uD83C\uDFFF"]],"1f3fb-1f3fc":["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc",22,33,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fb-1f3fd":["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd",22,34,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fb-1f3fe":["1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe",22,35,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fb-1f3ff":["1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff",22,36,7,["\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fc-1f3fb":["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb",22,37,15,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fc-1f3fd":["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd",22,38,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fc-1f3fe":["1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe",22,39,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fc-1f3ff":["1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff",22,40,7,["\uD83D\uDC68\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fd-1f3fb":["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb",22,41,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fd-1f3fc":["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc",22,42,15,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fd-1f3fe":["1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe",22,43,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE"]],"1f3fd-1f3ff":["1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff",22,44,7,["\uD83D\uDC68\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3fe-1f3fb":["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb",22,45,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3fe-1f3fc":["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc",22,46,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3fe-1f3fd":["1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd",22,47,15,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3fe-1f3ff":["1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff",22,48,7,["\uD83D\uDC68\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFF"]],"1f3ff-1f3fb":["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb",22,49,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB"]],"1f3ff-1f3fc":["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc",22,50,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFC"]],"1f3ff-1f3fd":["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd",22,51,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFD"]],"1f3ff-1f3fe":["1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe",22,52,15,["\uD83D\uDC68\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFE"]]},
		"1f46d":{"1f3fb":["1f46d-1f3fb",22,54,15,["\uD83D\uDC6D\uD83C\uDFFB"]],"1f3fc":["1f46d-1f3fc",22,55,15,["\uD83D\uDC6D\uD83C\uDFFC"]],"1f3fd":["1f46d-1f3fd",22,56,15,["\uD83D\uDC6D\uD83C\uDFFD"]],"1f3fe":["1f46d-1f3fe",22,57,15,["\uD83D\uDC6D\uD83C\uDFFE"]],"1f3ff":["1f46d-1f3ff",22,58,15,["\uD83D\uDC6D\uD83C\uDFFF"]],"1f3fb-1f3fc":["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc",22,59,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3fb-1f3fd":["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd",23,0,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3fb-1f3fe":["1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe",23,1,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3fb-1f3ff":["1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff",23,2,7,["\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFF"]],"1f3fc-1f3fb":["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb",23,3,15,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3fc-1f3fd":["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd",23,4,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3fc-1f3fe":["1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe",23,5,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3fc-1f3ff":["1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff",23,6,7,["\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFF"]],"1f3fd-1f3fb":["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb",23,7,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3fd-1f3fc":["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc",23,8,15,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3fd-1f3fe":["1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe",23,9,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFE"]],"1f3fd-1f3ff":["1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff",23,10,7,["\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFF"]],"1f3fe-1f3fb":["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb",23,11,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3fe-1f3fc":["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc",23,12,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3fe-1f3fd":["1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd",23,13,15,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3fe-1f3ff":["1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff",23,14,7,["\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFF"]],"1f3ff-1f3fb":["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb",23,15,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFB"]],"1f3ff-1f3fc":["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc",23,16,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFC"]],"1f3ff-1f3fd":["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd",23,17,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFD"]],"1f3ff-1f3fe":["1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe",23,18,15,["\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83D\uDC69\uD83C\uDFFE"]]},
		"1f46e-200d-2640-fe0f":{"1f3fb":["1f46e-1f3fb-200d-2640-fe0f",23,20,15,["\uD83D\uDC6E\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f46e-1f3fc-200d-2640-fe0f",23,21,15,["\uD83D\uDC6E\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f46e-1f3fd-200d-2640-fe0f",23,22,15,["\uD83D\uDC6E\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f46e-1f3fe-200d-2640-fe0f",23,23,15,["\uD83D\uDC6E\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f46e-1f3ff-200d-2640-fe0f",23,24,15,["\uD83D\uDC6E\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f46e-200d-2642-fe0f":{"1f3fb":["1f46e-1f3fb-200d-2642-fe0f",23,26,15,["\uD83D\uDC6E\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFB"]],"1f3fc":["1f46e-1f3fc-200d-2642-fe0f",23,27,15,["\uD83D\uDC6E\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFC"]],"1f3fd":["1f46e-1f3fd-200d-2642-fe0f",23,28,15,["\uD83D\uDC6E\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFD"]],"1f3fe":["1f46e-1f3fe-200d-2642-fe0f",23,29,15,["\uD83D\uDC6E\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFE"]],"1f3ff":["1f46e-1f3ff-200d-2642-fe0f",23,30,15,["\uD83D\uDC6E\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC6E\uD83C\uDFFF"]]},
		"1f470-200d-2640-fe0f":{"1f3fb":["1f470-1f3fb-200d-2640-fe0f",23,41,15,["\uD83D\uDC70\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f470-1f3fc-200d-2640-fe0f",23,42,15,["\uD83D\uDC70\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f470-1f3fd-200d-2640-fe0f",23,43,15,["\uD83D\uDC70\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f470-1f3fe-200d-2640-fe0f",23,44,15,["\uD83D\uDC70\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f470-1f3ff-200d-2640-fe0f",23,45,15,["\uD83D\uDC70\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f470-200d-2642-fe0f":{"1f3fb":["1f470-1f3fb-200d-2642-fe0f",23,47,15,["\uD83D\uDC70\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f470-1f3fc-200d-2642-fe0f",23,48,15,["\uD83D\uDC70\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f470-1f3fd-200d-2642-fe0f",23,49,15,["\uD83D\uDC70\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f470-1f3fe-200d-2642-fe0f",23,50,15,["\uD83D\uDC70\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f470-1f3ff-200d-2642-fe0f",23,51,15,["\uD83D\uDC70\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f470":{"1f3fb":["1f470-1f3fb",23,53,15,["\uD83D\uDC70\uD83C\uDFFB"]],"1f3fc":["1f470-1f3fc",23,54,15,["\uD83D\uDC70\uD83C\uDFFC"]],"1f3fd":["1f470-1f3fd",23,55,15,["\uD83D\uDC70\uD83C\uDFFD"]],"1f3fe":["1f470-1f3fe",23,56,15,["\uD83D\uDC70\uD83C\uDFFE"]],"1f3ff":["1f470-1f3ff",23,57,15,["\uD83D\uDC70\uD83C\uDFFF"]]},
		"1f471-200d-2640-fe0f":{"1f3fb":["1f471-1f3fb-200d-2640-fe0f",23,59,15,["\uD83D\uDC71\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f471-1f3fc-200d-2640-fe0f",24,0,15,["\uD83D\uDC71\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f471-1f3fd-200d-2640-fe0f",24,1,15,["\uD83D\uDC71\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f471-1f3fe-200d-2640-fe0f",24,2,15,["\uD83D\uDC71\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f471-1f3ff-200d-2640-fe0f",24,3,15,["\uD83D\uDC71\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f471-200d-2642-fe0f":{"1f3fb":["1f471-1f3fb-200d-2642-fe0f",24,5,15,["\uD83D\uDC71\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFB"]],"1f3fc":["1f471-1f3fc-200d-2642-fe0f",24,6,15,["\uD83D\uDC71\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFC"]],"1f3fd":["1f471-1f3fd-200d-2642-fe0f",24,7,15,["\uD83D\uDC71\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFD"]],"1f3fe":["1f471-1f3fe-200d-2642-fe0f",24,8,15,["\uD83D\uDC71\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFE"]],"1f3ff":["1f471-1f3ff-200d-2642-fe0f",24,9,15,["\uD83D\uDC71\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC71\uD83C\uDFFF"]]},
		"1f472":{"1f3fb":["1f472-1f3fb",24,17,15,["\uD83D\uDC72\uD83C\uDFFB"]],"1f3fc":["1f472-1f3fc",24,18,15,["\uD83D\uDC72\uD83C\uDFFC"]],"1f3fd":["1f472-1f3fd",24,19,15,["\uD83D\uDC72\uD83C\uDFFD"]],"1f3fe":["1f472-1f3fe",24,20,15,["\uD83D\uDC72\uD83C\uDFFE"]],"1f3ff":["1f472-1f3ff",24,21,15,["\uD83D\uDC72\uD83C\uDFFF"]]},
		"1f473-200d-2640-fe0f":{"1f3fb":["1f473-1f3fb-200d-2640-fe0f",24,23,15,["\uD83D\uDC73\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f473-1f3fc-200d-2640-fe0f",24,24,15,["\uD83D\uDC73\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f473-1f3fd-200d-2640-fe0f",24,25,15,["\uD83D\uDC73\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f473-1f3fe-200d-2640-fe0f",24,26,15,["\uD83D\uDC73\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f473-1f3ff-200d-2640-fe0f",24,27,15,["\uD83D\uDC73\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f473-200d-2642-fe0f":{"1f3fb":["1f473-1f3fb-200d-2642-fe0f",24,29,15,["\uD83D\uDC73\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFB"]],"1f3fc":["1f473-1f3fc-200d-2642-fe0f",24,30,15,["\uD83D\uDC73\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFC"]],"1f3fd":["1f473-1f3fd-200d-2642-fe0f",24,31,15,["\uD83D\uDC73\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFD"]],"1f3fe":["1f473-1f3fe-200d-2642-fe0f",24,32,15,["\uD83D\uDC73\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFE"]],"1f3ff":["1f473-1f3ff-200d-2642-fe0f",24,33,15,["\uD83D\uDC73\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC73\uD83C\uDFFF"]]},
		"1f474":{"1f3fb":["1f474-1f3fb",24,41,15,["\uD83D\uDC74\uD83C\uDFFB"]],"1f3fc":["1f474-1f3fc",24,42,15,["\uD83D\uDC74\uD83C\uDFFC"]],"1f3fd":["1f474-1f3fd",24,43,15,["\uD83D\uDC74\uD83C\uDFFD"]],"1f3fe":["1f474-1f3fe",24,44,15,["\uD83D\uDC74\uD83C\uDFFE"]],"1f3ff":["1f474-1f3ff",24,45,15,["\uD83D\uDC74\uD83C\uDFFF"]]},
		"1f475":{"1f3fb":["1f475-1f3fb",24,47,15,["\uD83D\uDC75\uD83C\uDFFB"]],"1f3fc":["1f475-1f3fc",24,48,15,["\uD83D\uDC75\uD83C\uDFFC"]],"1f3fd":["1f475-1f3fd",24,49,15,["\uD83D\uDC75\uD83C\uDFFD"]],"1f3fe":["1f475-1f3fe",24,50,15,["\uD83D\uDC75\uD83C\uDFFE"]],"1f3ff":["1f475-1f3ff",24,51,15,["\uD83D\uDC75\uD83C\uDFFF"]]},
		"1f476":{"1f3fb":["1f476-1f3fb",24,53,15,["\uD83D\uDC76\uD83C\uDFFB"]],"1f3fc":["1f476-1f3fc",24,54,15,["\uD83D\uDC76\uD83C\uDFFC"]],"1f3fd":["1f476-1f3fd",24,55,15,["\uD83D\uDC76\uD83C\uDFFD"]],"1f3fe":["1f476-1f3fe",24,56,15,["\uD83D\uDC76\uD83C\uDFFE"]],"1f3ff":["1f476-1f3ff",24,57,15,["\uD83D\uDC76\uD83C\uDFFF"]]},
		"1f477-200d-2640-fe0f":{"1f3fb":["1f477-1f3fb-200d-2640-fe0f",24,59,15,["\uD83D\uDC77\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f477-1f3fc-200d-2640-fe0f",25,0,15,["\uD83D\uDC77\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f477-1f3fd-200d-2640-fe0f",25,1,15,["\uD83D\uDC77\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f477-1f3fe-200d-2640-fe0f",25,2,15,["\uD83D\uDC77\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f477-1f3ff-200d-2640-fe0f",25,3,15,["\uD83D\uDC77\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f477-200d-2642-fe0f":{"1f3fb":["1f477-1f3fb-200d-2642-fe0f",25,5,15,["\uD83D\uDC77\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFB"]],"1f3fc":["1f477-1f3fc-200d-2642-fe0f",25,6,15,["\uD83D\uDC77\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFC"]],"1f3fd":["1f477-1f3fd-200d-2642-fe0f",25,7,15,["\uD83D\uDC77\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFD"]],"1f3fe":["1f477-1f3fe-200d-2642-fe0f",25,8,15,["\uD83D\uDC77\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFE"]],"1f3ff":["1f477-1f3ff-200d-2642-fe0f",25,9,15,["\uD83D\uDC77\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC77\uD83C\uDFFF"]]},
		"1f478":{"1f3fb":["1f478-1f3fb",25,17,15,["\uD83D\uDC78\uD83C\uDFFB"]],"1f3fc":["1f478-1f3fc",25,18,15,["\uD83D\uDC78\uD83C\uDFFC"]],"1f3fd":["1f478-1f3fd",25,19,15,["\uD83D\uDC78\uD83C\uDFFD"]],"1f3fe":["1f478-1f3fe",25,20,15,["\uD83D\uDC78\uD83C\uDFFE"]],"1f3ff":["1f478-1f3ff",25,21,15,["\uD83D\uDC78\uD83C\uDFFF"]]},
		"1f47c":{"1f3fb":["1f47c-1f3fb",25,26,15,["\uD83D\uDC7C\uD83C\uDFFB"]],"1f3fc":["1f47c-1f3fc",25,27,15,["\uD83D\uDC7C\uD83C\uDFFC"]],"1f3fd":["1f47c-1f3fd",25,28,15,["\uD83D\uDC7C\uD83C\uDFFD"]],"1f3fe":["1f47c-1f3fe",25,29,15,["\uD83D\uDC7C\uD83C\uDFFE"]],"1f3ff":["1f47c-1f3ff",25,30,15,["\uD83D\uDC7C\uD83C\uDFFF"]]},
		"1f481-200d-2640-fe0f":{"1f3fb":["1f481-1f3fb-200d-2640-fe0f",25,36,15,["\uD83D\uDC81\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFB"]],"1f3fc":["1f481-1f3fc-200d-2640-fe0f",25,37,15,["\uD83D\uDC81\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFC"]],"1f3fd":["1f481-1f3fd-200d-2640-fe0f",25,38,15,["\uD83D\uDC81\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFD"]],"1f3fe":["1f481-1f3fe-200d-2640-fe0f",25,39,15,["\uD83D\uDC81\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFE"]],"1f3ff":["1f481-1f3ff-200d-2640-fe0f",25,40,15,["\uD83D\uDC81\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDC81\uD83C\uDFFF"]]},
		"1f481-200d-2642-fe0f":{"1f3fb":["1f481-1f3fb-200d-2642-fe0f",25,42,15,["\uD83D\uDC81\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f481-1f3fc-200d-2642-fe0f",25,43,15,["\uD83D\uDC81\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f481-1f3fd-200d-2642-fe0f",25,44,15,["\uD83D\uDC81\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f481-1f3fe-200d-2642-fe0f",25,45,15,["\uD83D\uDC81\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f481-1f3ff-200d-2642-fe0f",25,46,15,["\uD83D\uDC81\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f482-200d-2640-fe0f":{"1f3fb":["1f482-1f3fb-200d-2640-fe0f",25,54,15,["\uD83D\uDC82\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f482-1f3fc-200d-2640-fe0f",25,55,15,["\uD83D\uDC82\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f482-1f3fd-200d-2640-fe0f",25,56,15,["\uD83D\uDC82\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f482-1f3fe-200d-2640-fe0f",25,57,15,["\uD83D\uDC82\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f482-1f3ff-200d-2640-fe0f",25,58,15,["\uD83D\uDC82\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f482-200d-2642-fe0f":{"1f3fb":["1f482-1f3fb-200d-2642-fe0f",26,0,15,["\uD83D\uDC82\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFB"]],"1f3fc":["1f482-1f3fc-200d-2642-fe0f",26,1,15,["\uD83D\uDC82\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFC"]],"1f3fd":["1f482-1f3fd-200d-2642-fe0f",26,2,15,["\uD83D\uDC82\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFD"]],"1f3fe":["1f482-1f3fe-200d-2642-fe0f",26,3,15,["\uD83D\uDC82\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFE"]],"1f3ff":["1f482-1f3ff-200d-2642-fe0f",26,4,15,["\uD83D\uDC82\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDC82\uD83C\uDFFF"]]},
		"1f483":{"1f3fb":["1f483-1f3fb",26,12,15,["\uD83D\uDC83\uD83C\uDFFB"]],"1f3fc":["1f483-1f3fc",26,13,15,["\uD83D\uDC83\uD83C\uDFFC"]],"1f3fd":["1f483-1f3fd",26,14,15,["\uD83D\uDC83\uD83C\uDFFD"]],"1f3fe":["1f483-1f3fe",26,15,15,["\uD83D\uDC83\uD83C\uDFFE"]],"1f3ff":["1f483-1f3ff",26,16,15,["\uD83D\uDC83\uD83C\uDFFF"]]},
		"1f485":{"1f3fb":["1f485-1f3fb",26,19,15,["\uD83D\uDC85\uD83C\uDFFB"]],"1f3fc":["1f485-1f3fc",26,20,15,["\uD83D\uDC85\uD83C\uDFFC"]],"1f3fd":["1f485-1f3fd",26,21,15,["\uD83D\uDC85\uD83C\uDFFD"]],"1f3fe":["1f485-1f3fe",26,22,15,["\uD83D\uDC85\uD83C\uDFFE"]],"1f3ff":["1f485-1f3ff",26,23,15,["\uD83D\uDC85\uD83C\uDFFF"]]},
		"1f486-200d-2640-fe0f":{"1f3fb":["1f486-1f3fb-200d-2640-fe0f",26,25,15,["\uD83D\uDC86\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFB"]],"1f3fc":["1f486-1f3fc-200d-2640-fe0f",26,26,15,["\uD83D\uDC86\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFC"]],"1f3fd":["1f486-1f3fd-200d-2640-fe0f",26,27,15,["\uD83D\uDC86\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFD"]],"1f3fe":["1f486-1f3fe-200d-2640-fe0f",26,28,15,["\uD83D\uDC86\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFE"]],"1f3ff":["1f486-1f3ff-200d-2640-fe0f",26,29,15,["\uD83D\uDC86\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDC86\uD83C\uDFFF"]]},
		"1f486-200d-2642-fe0f":{"1f3fb":["1f486-1f3fb-200d-2642-fe0f",26,31,15,["\uD83D\uDC86\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f486-1f3fc-200d-2642-fe0f",26,32,15,["\uD83D\uDC86\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f486-1f3fd-200d-2642-fe0f",26,33,15,["\uD83D\uDC86\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f486-1f3fe-200d-2642-fe0f",26,34,15,["\uD83D\uDC86\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f486-1f3ff-200d-2642-fe0f",26,35,15,["\uD83D\uDC86\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f487-200d-2640-fe0f":{"1f3fb":["1f487-1f3fb-200d-2640-fe0f",26,43,15,["\uD83D\uDC87\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFB"]],"1f3fc":["1f487-1f3fc-200d-2640-fe0f",26,44,15,["\uD83D\uDC87\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFC"]],"1f3fd":["1f487-1f3fd-200d-2640-fe0f",26,45,15,["\uD83D\uDC87\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFD"]],"1f3fe":["1f487-1f3fe-200d-2640-fe0f",26,46,15,["\uD83D\uDC87\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFE"]],"1f3ff":["1f487-1f3ff-200d-2640-fe0f",26,47,15,["\uD83D\uDC87\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDC87\uD83C\uDFFF"]]},
		"1f487-200d-2642-fe0f":{"1f3fb":["1f487-1f3fb-200d-2642-fe0f",26,49,15,["\uD83D\uDC87\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f487-1f3fc-200d-2642-fe0f",26,50,15,["\uD83D\uDC87\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f487-1f3fd-200d-2642-fe0f",26,51,15,["\uD83D\uDC87\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f487-1f3fe-200d-2642-fe0f",26,52,15,["\uD83D\uDC87\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f487-1f3ff-200d-2642-fe0f",26,53,15,["\uD83D\uDC87\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f48f":{"1f3fb":["1f48f-1f3fb",27,8,15,["\uD83D\uDC8F\uD83C\uDFFB"]],"1f3fc":["1f48f-1f3fc",27,9,15,["\uD83D\uDC8F\uD83C\uDFFC"]],"1f3fd":["1f48f-1f3fd",27,10,15,["\uD83D\uDC8F\uD83C\uDFFD"]],"1f3fe":["1f48f-1f3fe",27,11,15,["\uD83D\uDC8F\uD83C\uDFFE"]],"1f3ff":["1f48f-1f3ff",27,12,15,["\uD83D\uDC8F\uD83C\uDFFF"]],"1f3fb-1f3fc":["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",27,13,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3fb-1f3fd":["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",27,14,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3fb-1f3fe":["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",27,15,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFE"]],"1f3fb-1f3ff":["1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",27,16,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFF"]],"1f3fc-1f3fb":["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",27,17,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3fc-1f3fd":["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",27,18,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3fc-1f3fe":["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",27,19,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFE"]],"1f3fc-1f3ff":["1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",27,20,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFF"]],"1f3fd-1f3fb":["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",27,21,7,["\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3fd-1f3fc":["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",27,22,7,["\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3fd-1f3fe":["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",27,23,7,["\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFE"]],"1f3fd-1f3ff":["1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",27,24,7,["\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFF"]],"1f3fe-1f3fb":["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",27,25,7,["\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3fe-1f3fc":["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",27,26,7,["\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3fe-1f3fd":["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",27,27,7,["\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3fe-1f3ff":["1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",27,28,7,["\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFF"]],"1f3ff-1f3fb":["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",27,29,7,["\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3ff-1f3fc":["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",27,30,7,["\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3ff-1f3fd":["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",27,31,7,["\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3ff-1f3fe":["1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",27,32,7,["\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83E\uDDD1\uD83C\uDFFE"]]},
		"1f491":{"1f3fb":["1f491-1f3fb",27,35,15,["\uD83D\uDC91\uD83C\uDFFB"]],"1f3fc":["1f491-1f3fc",27,36,15,["\uD83D\uDC91\uD83C\uDFFC"]],"1f3fd":["1f491-1f3fd",27,37,15,["\uD83D\uDC91\uD83C\uDFFD"]],"1f3fe":["1f491-1f3fe",27,38,15,["\uD83D\uDC91\uD83C\uDFFE"]],"1f3ff":["1f491-1f3ff",27,39,15,["\uD83D\uDC91\uD83C\uDFFF"]],"1f3fb-1f3fc":["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc",27,40,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3fb-1f3fd":["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd",27,41,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3fb-1f3fe":["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe",27,42,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFE"]],"1f3fb-1f3ff":["1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff",27,43,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFF"]],"1f3fc-1f3fb":["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb",27,44,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3fc-1f3fd":["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd",27,45,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3fc-1f3fe":["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe",27,46,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFE"]],"1f3fc-1f3ff":["1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff",27,47,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFF"]],"1f3fd-1f3fb":["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb",27,48,7,["\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3fd-1f3fc":["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc",27,49,7,["\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3fd-1f3fe":["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe",27,50,7,["\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFE"]],"1f3fd-1f3ff":["1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff",27,51,7,["\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFF"]],"1f3fe-1f3fb":["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb",27,52,7,["\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3fe-1f3fc":["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc",27,53,7,["\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3fe-1f3fd":["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd",27,54,7,["\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3fe-1f3ff":["1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff",27,55,7,["\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFF"]],"1f3ff-1f3fb":["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb",27,56,7,["\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3ff-1f3fc":["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc",27,57,7,["\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3ff-1f3fd":["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd",27,58,7,["\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3ff-1f3fe":["1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe",27,59,7,["\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D\uD83E\uDDD1\uD83C\uDFFE"]]},
		"1f4aa":{"1f3fb":["1f4aa-1f3fb",28,25,15,["\uD83D\uDCAA\uD83C\uDFFB"]],"1f3fc":["1f4aa-1f3fc",28,26,15,["\uD83D\uDCAA\uD83C\uDFFC"]],"1f3fd":["1f4aa-1f3fd",28,27,15,["\uD83D\uDCAA\uD83C\uDFFD"]],"1f3fe":["1f4aa-1f3fe",28,28,15,["\uD83D\uDCAA\uD83C\uDFFE"]],"1f3ff":["1f4aa-1f3ff",28,29,15,["\uD83D\uDCAA\uD83C\uDFFF"]]},
		"1f574-fe0f":{"1f3fb":["1f574-1f3fb",31,30,15,["\uD83D\uDD74\uD83C\uDFFB"]],"1f3fc":["1f574-1f3fc",31,31,15,["\uD83D\uDD74\uD83C\uDFFC"]],"1f3fd":["1f574-1f3fd",31,32,15,["\uD83D\uDD74\uD83C\uDFFD"]],"1f3fe":["1f574-1f3fe",31,33,15,["\uD83D\uDD74\uD83C\uDFFE"]],"1f3ff":["1f574-1f3ff",31,34,15,["\uD83D\uDD74\uD83C\uDFFF"]]},
		"1f575-fe0f-200d-2640-fe0f":{"1f3fb":["1f575-1f3fb-200d-2640-fe0f",31,36,15,["\uD83D\uDD75\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f575-1f3fc-200d-2640-fe0f",31,37,15,["\uD83D\uDD75\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f575-1f3fd-200d-2640-fe0f",31,38,15,["\uD83D\uDD75\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f575-1f3fe-200d-2640-fe0f",31,39,15,["\uD83D\uDD75\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f575-1f3ff-200d-2640-fe0f",31,40,15,["\uD83D\uDD75\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f575-fe0f-200d-2642-fe0f":{"1f3fb":["1f575-1f3fb-200d-2642-fe0f",31,42,15,["\uD83D\uDD75\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFB"]],"1f3fc":["1f575-1f3fc-200d-2642-fe0f",31,43,15,["\uD83D\uDD75\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFC"]],"1f3fd":["1f575-1f3fd-200d-2642-fe0f",31,44,15,["\uD83D\uDD75\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFD"]],"1f3fe":["1f575-1f3fe-200d-2642-fe0f",31,45,15,["\uD83D\uDD75\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFE"]],"1f3ff":["1f575-1f3ff-200d-2642-fe0f",31,46,15,["\uD83D\uDD75\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDD75\uD83C\uDFFF"]]},
		"1f57a":{"1f3fb":["1f57a-1f3fb",31,58,15,["\uD83D\uDD7A\uD83C\uDFFB"]],"1f3fc":["1f57a-1f3fc",31,59,15,["\uD83D\uDD7A\uD83C\uDFFC"]],"1f3fd":["1f57a-1f3fd",32,0,15,["\uD83D\uDD7A\uD83C\uDFFD"]],"1f3fe":["1f57a-1f3fe",32,1,15,["\uD83D\uDD7A\uD83C\uDFFE"]],"1f3ff":["1f57a-1f3ff",32,2,15,["\uD83D\uDD7A\uD83C\uDFFF"]]},
		"1f590-fe0f":{"1f3fb":["1f590-1f3fb",32,9,15,["\uD83D\uDD90\uD83C\uDFFB"]],"1f3fc":["1f590-1f3fc",32,10,15,["\uD83D\uDD90\uD83C\uDFFC"]],"1f3fd":["1f590-1f3fd",32,11,15,["\uD83D\uDD90\uD83C\uDFFD"]],"1f3fe":["1f590-1f3fe",32,12,15,["\uD83D\uDD90\uD83C\uDFFE"]],"1f3ff":["1f590-1f3ff",32,13,15,["\uD83D\uDD90\uD83C\uDFFF"]]},
		"1f595":{"1f3fb":["1f595-1f3fb",32,15,15,["\uD83D\uDD95\uD83C\uDFFB"]],"1f3fc":["1f595-1f3fc",32,16,15,["\uD83D\uDD95\uD83C\uDFFC"]],"1f3fd":["1f595-1f3fd",32,17,15,["\uD83D\uDD95\uD83C\uDFFD"]],"1f3fe":["1f595-1f3fe",32,18,15,["\uD83D\uDD95\uD83C\uDFFE"]],"1f3ff":["1f595-1f3ff",32,19,15,["\uD83D\uDD95\uD83C\uDFFF"]]},
		"1f596":{"1f3fb":["1f596-1f3fb",32,21,15,["\uD83D\uDD96\uD83C\uDFFB"]],"1f3fc":["1f596-1f3fc",32,22,15,["\uD83D\uDD96\uD83C\uDFFC"]],"1f3fd":["1f596-1f3fd",32,23,15,["\uD83D\uDD96\uD83C\uDFFD"]],"1f3fe":["1f596-1f3fe",32,24,15,["\uD83D\uDD96\uD83C\uDFFE"]],"1f3ff":["1f596-1f3ff",32,25,15,["\uD83D\uDD96\uD83C\uDFFF"]]},
		"1f645-200d-2640-fe0f":{"1f3fb":["1f645-1f3fb-200d-2640-fe0f",34,5,15,["\uD83D\uDE45\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFB"]],"1f3fc":["1f645-1f3fc-200d-2640-fe0f",34,6,15,["\uD83D\uDE45\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFC"]],"1f3fd":["1f645-1f3fd-200d-2640-fe0f",34,7,15,["\uD83D\uDE45\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFD"]],"1f3fe":["1f645-1f3fe-200d-2640-fe0f",34,8,15,["\uD83D\uDE45\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFE"]],"1f3ff":["1f645-1f3ff-200d-2640-fe0f",34,9,15,["\uD83D\uDE45\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE45\uD83C\uDFFF"]]},
		"1f645-200d-2642-fe0f":{"1f3fb":["1f645-1f3fb-200d-2642-fe0f",34,11,15,["\uD83D\uDE45\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f645-1f3fc-200d-2642-fe0f",34,12,15,["\uD83D\uDE45\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f645-1f3fd-200d-2642-fe0f",34,13,15,["\uD83D\uDE45\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f645-1f3fe-200d-2642-fe0f",34,14,15,["\uD83D\uDE45\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f645-1f3ff-200d-2642-fe0f",34,15,15,["\uD83D\uDE45\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f646-200d-2640-fe0f":{"1f3fb":["1f646-1f3fb-200d-2640-fe0f",34,23,15,["\uD83D\uDE46\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFB"]],"1f3fc":["1f646-1f3fc-200d-2640-fe0f",34,24,15,["\uD83D\uDE46\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFC"]],"1f3fd":["1f646-1f3fd-200d-2640-fe0f",34,25,15,["\uD83D\uDE46\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFD"]],"1f3fe":["1f646-1f3fe-200d-2640-fe0f",34,26,15,["\uD83D\uDE46\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFE"]],"1f3ff":["1f646-1f3ff-200d-2640-fe0f",34,27,15,["\uD83D\uDE46\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE46\uD83C\uDFFF"]]},
		"1f646-200d-2642-fe0f":{"1f3fb":["1f646-1f3fb-200d-2642-fe0f",34,29,15,["\uD83D\uDE46\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f646-1f3fc-200d-2642-fe0f",34,30,15,["\uD83D\uDE46\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f646-1f3fd-200d-2642-fe0f",34,31,15,["\uD83D\uDE46\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f646-1f3fe-200d-2642-fe0f",34,32,15,["\uD83D\uDE46\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f646-1f3ff-200d-2642-fe0f",34,33,15,["\uD83D\uDE46\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f647-200d-2640-fe0f":{"1f3fb":["1f647-1f3fb-200d-2640-fe0f",34,41,15,["\uD83D\uDE47\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f647-1f3fc-200d-2640-fe0f",34,42,15,["\uD83D\uDE47\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f647-1f3fd-200d-2640-fe0f",34,43,15,["\uD83D\uDE47\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f647-1f3fe-200d-2640-fe0f",34,44,15,["\uD83D\uDE47\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f647-1f3ff-200d-2640-fe0f",34,45,15,["\uD83D\uDE47\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f647-200d-2642-fe0f":{"1f3fb":["1f647-1f3fb-200d-2642-fe0f",34,47,15,["\uD83D\uDE47\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFB"]],"1f3fc":["1f647-1f3fc-200d-2642-fe0f",34,48,15,["\uD83D\uDE47\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFC"]],"1f3fd":["1f647-1f3fd-200d-2642-fe0f",34,49,15,["\uD83D\uDE47\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFD"]],"1f3fe":["1f647-1f3fe-200d-2642-fe0f",34,50,15,["\uD83D\uDE47\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFE"]],"1f3ff":["1f647-1f3ff-200d-2642-fe0f",34,51,15,["\uD83D\uDE47\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDE47\uD83C\uDFFF"]]},
		"1f64b-200d-2640-fe0f":{"1f3fb":["1f64b-1f3fb-200d-2640-fe0f",35,2,15,["\uD83D\uDE4B\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFB"]],"1f3fc":["1f64b-1f3fc-200d-2640-fe0f",35,3,15,["\uD83D\uDE4B\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFC"]],"1f3fd":["1f64b-1f3fd-200d-2640-fe0f",35,4,15,["\uD83D\uDE4B\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFD"]],"1f3fe":["1f64b-1f3fe-200d-2640-fe0f",35,5,15,["\uD83D\uDE4B\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFE"]],"1f3ff":["1f64b-1f3ff-200d-2640-fe0f",35,6,15,["\uD83D\uDE4B\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE4B\uD83C\uDFFF"]]},
		"1f64b-200d-2642-fe0f":{"1f3fb":["1f64b-1f3fb-200d-2642-fe0f",35,8,15,["\uD83D\uDE4B\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f64b-1f3fc-200d-2642-fe0f",35,9,15,["\uD83D\uDE4B\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f64b-1f3fd-200d-2642-fe0f",35,10,15,["\uD83D\uDE4B\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f64b-1f3fe-200d-2642-fe0f",35,11,15,["\uD83D\uDE4B\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f64b-1f3ff-200d-2642-fe0f",35,12,15,["\uD83D\uDE4B\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f64c":{"1f3fb":["1f64c-1f3fb",35,20,15,["\uD83D\uDE4C\uD83C\uDFFB"]],"1f3fc":["1f64c-1f3fc",35,21,15,["\uD83D\uDE4C\uD83C\uDFFC"]],"1f3fd":["1f64c-1f3fd",35,22,15,["\uD83D\uDE4C\uD83C\uDFFD"]],"1f3fe":["1f64c-1f3fe",35,23,15,["\uD83D\uDE4C\uD83C\uDFFE"]],"1f3ff":["1f64c-1f3ff",35,24,15,["\uD83D\uDE4C\uD83C\uDFFF"]]},
		"1f64d-200d-2640-fe0f":{"1f3fb":["1f64d-1f3fb-200d-2640-fe0f",35,26,15,["\uD83D\uDE4D\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFB"]],"1f3fc":["1f64d-1f3fc-200d-2640-fe0f",35,27,15,["\uD83D\uDE4D\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFC"]],"1f3fd":["1f64d-1f3fd-200d-2640-fe0f",35,28,15,["\uD83D\uDE4D\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFD"]],"1f3fe":["1f64d-1f3fe-200d-2640-fe0f",35,29,15,["\uD83D\uDE4D\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFE"]],"1f3ff":["1f64d-1f3ff-200d-2640-fe0f",35,30,15,["\uD83D\uDE4D\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE4D\uD83C\uDFFF"]]},
		"1f64d-200d-2642-fe0f":{"1f3fb":["1f64d-1f3fb-200d-2642-fe0f",35,32,15,["\uD83D\uDE4D\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f64d-1f3fc-200d-2642-fe0f",35,33,15,["\uD83D\uDE4D\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f64d-1f3fd-200d-2642-fe0f",35,34,15,["\uD83D\uDE4D\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f64d-1f3fe-200d-2642-fe0f",35,35,15,["\uD83D\uDE4D\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f64d-1f3ff-200d-2642-fe0f",35,36,15,["\uD83D\uDE4D\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f64e-200d-2640-fe0f":{"1f3fb":["1f64e-1f3fb-200d-2640-fe0f",35,44,15,["\uD83D\uDE4E\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFB"]],"1f3fc":["1f64e-1f3fc-200d-2640-fe0f",35,45,15,["\uD83D\uDE4E\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFC"]],"1f3fd":["1f64e-1f3fd-200d-2640-fe0f",35,46,15,["\uD83D\uDE4E\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFD"]],"1f3fe":["1f64e-1f3fe-200d-2640-fe0f",35,47,15,["\uD83D\uDE4E\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFE"]],"1f3ff":["1f64e-1f3ff-200d-2640-fe0f",35,48,15,["\uD83D\uDE4E\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83D\uDE4E\uD83C\uDFFF"]]},
		"1f64e-200d-2642-fe0f":{"1f3fb":["1f64e-1f3fb-200d-2642-fe0f",35,50,15,["\uD83D\uDE4E\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f64e-1f3fc-200d-2642-fe0f",35,51,15,["\uD83D\uDE4E\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f64e-1f3fd-200d-2642-fe0f",35,52,15,["\uD83D\uDE4E\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f64e-1f3fe-200d-2642-fe0f",35,53,15,["\uD83D\uDE4E\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f64e-1f3ff-200d-2642-fe0f",35,54,15,["\uD83D\uDE4E\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f64f":{"1f3fb":["1f64f-1f3fb",36,2,15,["\uD83D\uDE4F\uD83C\uDFFB"]],"1f3fc":["1f64f-1f3fc",36,3,15,["\uD83D\uDE4F\uD83C\uDFFC"]],"1f3fd":["1f64f-1f3fd",36,4,15,["\uD83D\uDE4F\uD83C\uDFFD"]],"1f3fe":["1f64f-1f3fe",36,5,15,["\uD83D\uDE4F\uD83C\uDFFE"]],"1f3ff":["1f64f-1f3ff",36,6,15,["\uD83D\uDE4F\uD83C\uDFFF"]]},
		"1f6a3-200d-2640-fe0f":{"1f3fb":["1f6a3-1f3fb-200d-2640-fe0f",36,43,15,["\uD83D\uDEA3\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f6a3-1f3fc-200d-2640-fe0f",36,44,15,["\uD83D\uDEA3\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f6a3-1f3fd-200d-2640-fe0f",36,45,15,["\uD83D\uDEA3\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f6a3-1f3fe-200d-2640-fe0f",36,46,15,["\uD83D\uDEA3\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f6a3-1f3ff-200d-2640-fe0f",36,47,15,["\uD83D\uDEA3\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f6a3-200d-2642-fe0f":{"1f3fb":["1f6a3-1f3fb-200d-2642-fe0f",36,49,15,["\uD83D\uDEA3\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFB"]],"1f3fc":["1f6a3-1f3fc-200d-2642-fe0f",36,50,15,["\uD83D\uDEA3\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFC"]],"1f3fd":["1f6a3-1f3fd-200d-2642-fe0f",36,51,15,["\uD83D\uDEA3\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFD"]],"1f3fe":["1f6a3-1f3fe-200d-2642-fe0f",36,52,15,["\uD83D\uDEA3\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFE"]],"1f3ff":["1f6a3-1f3ff-200d-2642-fe0f",36,53,15,["\uD83D\uDEA3\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDEA3\uD83C\uDFFF"]]},
		"1f6b4-200d-2640-fe0f":{"1f3fb":["1f6b4-1f3fb-200d-2640-fe0f",37,17,15,["\uD83D\uDEB4\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f6b4-1f3fc-200d-2640-fe0f",37,18,15,["\uD83D\uDEB4\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f6b4-1f3fd-200d-2640-fe0f",37,19,15,["\uD83D\uDEB4\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f6b4-1f3fe-200d-2640-fe0f",37,20,15,["\uD83D\uDEB4\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f6b4-1f3ff-200d-2640-fe0f",37,21,15,["\uD83D\uDEB4\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f6b4-200d-2642-fe0f":{"1f3fb":["1f6b4-1f3fb-200d-2642-fe0f",37,23,15,["\uD83D\uDEB4\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFB"]],"1f3fc":["1f6b4-1f3fc-200d-2642-fe0f",37,24,15,["\uD83D\uDEB4\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFC"]],"1f3fd":["1f6b4-1f3fd-200d-2642-fe0f",37,25,15,["\uD83D\uDEB4\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFD"]],"1f3fe":["1f6b4-1f3fe-200d-2642-fe0f",37,26,15,["\uD83D\uDEB4\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFE"]],"1f3ff":["1f6b4-1f3ff-200d-2642-fe0f",37,27,15,["\uD83D\uDEB4\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDEB4\uD83C\uDFFF"]]},
		"1f6b5-200d-2640-fe0f":{"1f3fb":["1f6b5-1f3fb-200d-2640-fe0f",37,35,15,["\uD83D\uDEB5\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f6b5-1f3fc-200d-2640-fe0f",37,36,15,["\uD83D\uDEB5\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f6b5-1f3fd-200d-2640-fe0f",37,37,15,["\uD83D\uDEB5\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f6b5-1f3fe-200d-2640-fe0f",37,38,15,["\uD83D\uDEB5\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f6b5-1f3ff-200d-2640-fe0f",37,39,15,["\uD83D\uDEB5\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f6b5-200d-2642-fe0f":{"1f3fb":["1f6b5-1f3fb-200d-2642-fe0f",37,41,15,["\uD83D\uDEB5\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFB"]],"1f3fc":["1f6b5-1f3fc-200d-2642-fe0f",37,42,15,["\uD83D\uDEB5\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFC"]],"1f3fd":["1f6b5-1f3fd-200d-2642-fe0f",37,43,15,["\uD83D\uDEB5\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFD"]],"1f3fe":["1f6b5-1f3fe-200d-2642-fe0f",37,44,15,["\uD83D\uDEB5\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFE"]],"1f3ff":["1f6b5-1f3ff-200d-2642-fe0f",37,45,15,["\uD83D\uDEB5\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDEB5\uD83C\uDFFF"]]},
		"1f6b6-200d-2640-fe0f":{"1f3fb":["1f6b6-1f3fb-200d-2640-fe0f",37,53,15,["\uD83D\uDEB6\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f6b6-1f3fc-200d-2640-fe0f",37,54,15,["\uD83D\uDEB6\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f6b6-1f3fd-200d-2640-fe0f",37,55,15,["\uD83D\uDEB6\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f6b6-1f3fe-200d-2640-fe0f",37,56,15,["\uD83D\uDEB6\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f6b6-1f3ff-200d-2640-fe0f",37,57,15,["\uD83D\uDEB6\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f6b6-200d-2642-fe0f":{"1f3fb":["1f6b6-1f3fb-200d-2642-fe0f",37,59,15,["\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFB"]],"1f3fc":["1f6b6-1f3fc-200d-2642-fe0f",38,0,15,["\uD83D\uDEB6\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFC"]],"1f3fd":["1f6b6-1f3fd-200d-2642-fe0f",38,1,15,["\uD83D\uDEB6\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFD"]],"1f3fe":["1f6b6-1f3fe-200d-2642-fe0f",38,2,15,["\uD83D\uDEB6\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFE"]],"1f3ff":["1f6b6-1f3ff-200d-2642-fe0f",38,3,15,["\uD83D\uDEB6\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83D\uDEB6\uD83C\uDFFF"]]},
		"1f6c0":{"1f3fb":["1f6c0-1f3fb",38,20,15,["\uD83D\uDEC0\uD83C\uDFFB"]],"1f3fc":["1f6c0-1f3fc",38,21,15,["\uD83D\uDEC0\uD83C\uDFFC"]],"1f3fd":["1f6c0-1f3fd",38,22,15,["\uD83D\uDEC0\uD83C\uDFFD"]],"1f3fe":["1f6c0-1f3fe",38,23,15,["\uD83D\uDEC0\uD83C\uDFFE"]],"1f3ff":["1f6c0-1f3ff",38,24,15,["\uD83D\uDEC0\uD83C\uDFFF"]]},
		"1f6cc":{"1f3fb":["1f6cc-1f3fb",38,32,15,["\uD83D\uDECC\uD83C\uDFFB"]],"1f3fc":["1f6cc-1f3fc",38,33,15,["\uD83D\uDECC\uD83C\uDFFC"]],"1f3fd":["1f6cc-1f3fd",38,34,15,["\uD83D\uDECC\uD83C\uDFFD"]],"1f3fe":["1f6cc-1f3fe",38,35,15,["\uD83D\uDECC\uD83C\uDFFE"]],"1f3ff":["1f6cc-1f3ff",38,36,15,["\uD83D\uDECC\uD83C\uDFFF"]]},
		"1f90c":{"1f3fb":["1f90c-1f3fb",39,19,15,["\uD83E\uDD0C\uD83C\uDFFB"]],"1f3fc":["1f90c-1f3fc",39,20,15,["\uD83E\uDD0C\uD83C\uDFFC"]],"1f3fd":["1f90c-1f3fd",39,21,15,["\uD83E\uDD0C\uD83C\uDFFD"]],"1f3fe":["1f90c-1f3fe",39,22,15,["\uD83E\uDD0C\uD83C\uDFFE"]],"1f3ff":["1f90c-1f3ff",39,23,15,["\uD83E\uDD0C\uD83C\uDFFF"]]},
		"1f90f":{"1f3fb":["1f90f-1f3fb",39,27,15,["\uD83E\uDD0F\uD83C\uDFFB"]],"1f3fc":["1f90f-1f3fc",39,28,15,["\uD83E\uDD0F\uD83C\uDFFC"]],"1f3fd":["1f90f-1f3fd",39,29,15,["\uD83E\uDD0F\uD83C\uDFFD"]],"1f3fe":["1f90f-1f3fe",39,30,15,["\uD83E\uDD0F\uD83C\uDFFE"]],"1f3ff":["1f90f-1f3ff",39,31,15,["\uD83E\uDD0F\uD83C\uDFFF"]]},
		"1f918":{"1f3fb":["1f918-1f3fb",39,41,15,["\uD83E\uDD18\uD83C\uDFFB"]],"1f3fc":["1f918-1f3fc",39,42,15,["\uD83E\uDD18\uD83C\uDFFC"]],"1f3fd":["1f918-1f3fd",39,43,15,["\uD83E\uDD18\uD83C\uDFFD"]],"1f3fe":["1f918-1f3fe",39,44,15,["\uD83E\uDD18\uD83C\uDFFE"]],"1f3ff":["1f918-1f3ff",39,45,15,["\uD83E\uDD18\uD83C\uDFFF"]]},
		"1f919":{"1f3fb":["1f919-1f3fb",39,47,15,["\uD83E\uDD19\uD83C\uDFFB"]],"1f3fc":["1f919-1f3fc",39,48,15,["\uD83E\uDD19\uD83C\uDFFC"]],"1f3fd":["1f919-1f3fd",39,49,15,["\uD83E\uDD19\uD83C\uDFFD"]],"1f3fe":["1f919-1f3fe",39,50,15,["\uD83E\uDD19\uD83C\uDFFE"]],"1f3ff":["1f919-1f3ff",39,51,15,["\uD83E\uDD19\uD83C\uDFFF"]]},
		"1f91a":{"1f3fb":["1f91a-1f3fb",39,53,15,["\uD83E\uDD1A\uD83C\uDFFB"]],"1f3fc":["1f91a-1f3fc",39,54,15,["\uD83E\uDD1A\uD83C\uDFFC"]],"1f3fd":["1f91a-1f3fd",39,55,15,["\uD83E\uDD1A\uD83C\uDFFD"]],"1f3fe":["1f91a-1f3fe",39,56,15,["\uD83E\uDD1A\uD83C\uDFFE"]],"1f3ff":["1f91a-1f3ff",39,57,15,["\uD83E\uDD1A\uD83C\uDFFF"]]},
		"1f91b":{"1f3fb":["1f91b-1f3fb",39,59,15,["\uD83E\uDD1B\uD83C\uDFFB"]],"1f3fc":["1f91b-1f3fc",40,0,15,["\uD83E\uDD1B\uD83C\uDFFC"]],"1f3fd":["1f91b-1f3fd",40,1,15,["\uD83E\uDD1B\uD83C\uDFFD"]],"1f3fe":["1f91b-1f3fe",40,2,15,["\uD83E\uDD1B\uD83C\uDFFE"]],"1f3ff":["1f91b-1f3ff",40,3,15,["\uD83E\uDD1B\uD83C\uDFFF"]]},
		"1f91c":{"1f3fb":["1f91c-1f3fb",40,5,15,["\uD83E\uDD1C\uD83C\uDFFB"]],"1f3fc":["1f91c-1f3fc",40,6,15,["\uD83E\uDD1C\uD83C\uDFFC"]],"1f3fd":["1f91c-1f3fd",40,7,15,["\uD83E\uDD1C\uD83C\uDFFD"]],"1f3fe":["1f91c-1f3fe",40,8,15,["\uD83E\uDD1C\uD83C\uDFFE"]],"1f3ff":["1f91c-1f3ff",40,9,15,["\uD83E\uDD1C\uD83C\uDFFF"]]},
		"1f91e":{"1f3fb":["1f91e-1f3fb",40,12,15,["\uD83E\uDD1E\uD83C\uDFFB"]],"1f3fc":["1f91e-1f3fc",40,13,15,["\uD83E\uDD1E\uD83C\uDFFC"]],"1f3fd":["1f91e-1f3fd",40,14,15,["\uD83E\uDD1E\uD83C\uDFFD"]],"1f3fe":["1f91e-1f3fe",40,15,15,["\uD83E\uDD1E\uD83C\uDFFE"]],"1f3ff":["1f91e-1f3ff",40,16,15,["\uD83E\uDD1E\uD83C\uDFFF"]]},
		"1f91f":{"1f3fb":["1f91f-1f3fb",40,18,15,["\uD83E\uDD1F\uD83C\uDFFB"]],"1f3fc":["1f91f-1f3fc",40,19,15,["\uD83E\uDD1F\uD83C\uDFFC"]],"1f3fd":["1f91f-1f3fd",40,20,15,["\uD83E\uDD1F\uD83C\uDFFD"]],"1f3fe":["1f91f-1f3fe",40,21,15,["\uD83E\uDD1F\uD83C\uDFFE"]],"1f3ff":["1f91f-1f3ff",40,22,15,["\uD83E\uDD1F\uD83C\uDFFF"]]},
		"1f926-200d-2640-fe0f":{"1f3fb":["1f926-1f3fb-200d-2640-fe0f",40,30,15,["\uD83E\uDD26\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f926-1f3fc-200d-2640-fe0f",40,31,15,["\uD83E\uDD26\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f926-1f3fd-200d-2640-fe0f",40,32,15,["\uD83E\uDD26\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f926-1f3fe-200d-2640-fe0f",40,33,15,["\uD83E\uDD26\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f926-1f3ff-200d-2640-fe0f",40,34,15,["\uD83E\uDD26\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f926-200d-2642-fe0f":{"1f3fb":["1f926-1f3fb-200d-2642-fe0f",40,36,15,["\uD83E\uDD26\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f926-1f3fc-200d-2642-fe0f",40,37,15,["\uD83E\uDD26\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f926-1f3fd-200d-2642-fe0f",40,38,15,["\uD83E\uDD26\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f926-1f3fe-200d-2642-fe0f",40,39,15,["\uD83E\uDD26\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f926-1f3ff-200d-2642-fe0f",40,40,15,["\uD83E\uDD26\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f926":{"1f3fb":["1f926-1f3fb",40,42,15,["\uD83E\uDD26\uD83C\uDFFB"]],"1f3fc":["1f926-1f3fc",40,43,15,["\uD83E\uDD26\uD83C\uDFFC"]],"1f3fd":["1f926-1f3fd",40,44,15,["\uD83E\uDD26\uD83C\uDFFD"]],"1f3fe":["1f926-1f3fe",40,45,15,["\uD83E\uDD26\uD83C\uDFFE"]],"1f3ff":["1f926-1f3ff",40,46,15,["\uD83E\uDD26\uD83C\uDFFF"]]},
		"1f930":{"1f3fb":["1f930-1f3fb",40,57,15,["\uD83E\uDD30\uD83C\uDFFB"]],"1f3fc":["1f930-1f3fc",40,58,15,["\uD83E\uDD30\uD83C\uDFFC"]],"1f3fd":["1f930-1f3fd",40,59,15,["\uD83E\uDD30\uD83C\uDFFD"]],"1f3fe":["1f930-1f3fe",41,0,15,["\uD83E\uDD30\uD83C\uDFFE"]],"1f3ff":["1f930-1f3ff",41,1,15,["\uD83E\uDD30\uD83C\uDFFF"]]},
		"1f931":{"1f3fb":["1f931-1f3fb",41,3,15,["\uD83E\uDD31\uD83C\uDFFB"]],"1f3fc":["1f931-1f3fc",41,4,15,["\uD83E\uDD31\uD83C\uDFFC"]],"1f3fd":["1f931-1f3fd",41,5,15,["\uD83E\uDD31\uD83C\uDFFD"]],"1f3fe":["1f931-1f3fe",41,6,15,["\uD83E\uDD31\uD83C\uDFFE"]],"1f3ff":["1f931-1f3ff",41,7,15,["\uD83E\uDD31\uD83C\uDFFF"]]},
		"1f932":{"1f3fb":["1f932-1f3fb",41,9,15,["\uD83E\uDD32\uD83C\uDFFB"]],"1f3fc":["1f932-1f3fc",41,10,15,["\uD83E\uDD32\uD83C\uDFFC"]],"1f3fd":["1f932-1f3fd",41,11,15,["\uD83E\uDD32\uD83C\uDFFD"]],"1f3fe":["1f932-1f3fe",41,12,15,["\uD83E\uDD32\uD83C\uDFFE"]],"1f3ff":["1f932-1f3ff",41,13,15,["\uD83E\uDD32\uD83C\uDFFF"]]},
		"1f933":{"1f3fb":["1f933-1f3fb",41,15,15,["\uD83E\uDD33\uD83C\uDFFB"]],"1f3fc":["1f933-1f3fc",41,16,15,["\uD83E\uDD33\uD83C\uDFFC"]],"1f3fd":["1f933-1f3fd",41,17,15,["\uD83E\uDD33\uD83C\uDFFD"]],"1f3fe":["1f933-1f3fe",41,18,15,["\uD83E\uDD33\uD83C\uDFFE"]],"1f3ff":["1f933-1f3ff",41,19,15,["\uD83E\uDD33\uD83C\uDFFF"]]},
		"1f934":{"1f3fb":["1f934-1f3fb",41,21,15,["\uD83E\uDD34\uD83C\uDFFB"]],"1f3fc":["1f934-1f3fc",41,22,15,["\uD83E\uDD34\uD83C\uDFFC"]],"1f3fd":["1f934-1f3fd",41,23,15,["\uD83E\uDD34\uD83C\uDFFD"]],"1f3fe":["1f934-1f3fe",41,24,15,["\uD83E\uDD34\uD83C\uDFFE"]],"1f3ff":["1f934-1f3ff",41,25,15,["\uD83E\uDD34\uD83C\uDFFF"]]},
		"1f935-200d-2640-fe0f":{"1f3fb":["1f935-1f3fb-200d-2640-fe0f",41,27,15,["\uD83E\uDD35\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f935-1f3fc-200d-2640-fe0f",41,28,15,["\uD83E\uDD35\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f935-1f3fd-200d-2640-fe0f",41,29,15,["\uD83E\uDD35\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f935-1f3fe-200d-2640-fe0f",41,30,15,["\uD83E\uDD35\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f935-1f3ff-200d-2640-fe0f",41,31,15,["\uD83E\uDD35\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f935-200d-2642-fe0f":{"1f3fb":["1f935-1f3fb-200d-2642-fe0f",41,33,15,["\uD83E\uDD35\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f935-1f3fc-200d-2642-fe0f",41,34,15,["\uD83E\uDD35\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f935-1f3fd-200d-2642-fe0f",41,35,15,["\uD83E\uDD35\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f935-1f3fe-200d-2642-fe0f",41,36,15,["\uD83E\uDD35\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f935-1f3ff-200d-2642-fe0f",41,37,15,["\uD83E\uDD35\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f935":{"1f3fb":["1f935-1f3fb",41,39,15,["\uD83E\uDD35\uD83C\uDFFB"]],"1f3fc":["1f935-1f3fc",41,40,15,["\uD83E\uDD35\uD83C\uDFFC"]],"1f3fd":["1f935-1f3fd",41,41,15,["\uD83E\uDD35\uD83C\uDFFD"]],"1f3fe":["1f935-1f3fe",41,42,15,["\uD83E\uDD35\uD83C\uDFFE"]],"1f3ff":["1f935-1f3ff",41,43,15,["\uD83E\uDD35\uD83C\uDFFF"]]},
		"1f936":{"1f3fb":["1f936-1f3fb",41,45,15,["\uD83E\uDD36\uD83C\uDFFB"]],"1f3fc":["1f936-1f3fc",41,46,15,["\uD83E\uDD36\uD83C\uDFFC"]],"1f3fd":["1f936-1f3fd",41,47,15,["\uD83E\uDD36\uD83C\uDFFD"]],"1f3fe":["1f936-1f3fe",41,48,15,["\uD83E\uDD36\uD83C\uDFFE"]],"1f3ff":["1f936-1f3ff",41,49,15,["\uD83E\uDD36\uD83C\uDFFF"]]},
		"1f937-200d-2640-fe0f":{"1f3fb":["1f937-1f3fb-200d-2640-fe0f",41,51,15,["\uD83E\uDD37\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f937-1f3fc-200d-2640-fe0f",41,52,15,["\uD83E\uDD37\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f937-1f3fd-200d-2640-fe0f",41,53,15,["\uD83E\uDD37\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f937-1f3fe-200d-2640-fe0f",41,54,15,["\uD83E\uDD37\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f937-1f3ff-200d-2640-fe0f",41,55,15,["\uD83E\uDD37\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f937-200d-2642-fe0f":{"1f3fb":["1f937-1f3fb-200d-2642-fe0f",41,57,15,["\uD83E\uDD37\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f937-1f3fc-200d-2642-fe0f",41,58,15,["\uD83E\uDD37\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f937-1f3fd-200d-2642-fe0f",41,59,15,["\uD83E\uDD37\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f937-1f3fe-200d-2642-fe0f",42,0,15,["\uD83E\uDD37\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f937-1f3ff-200d-2642-fe0f",42,1,15,["\uD83E\uDD37\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f937":{"1f3fb":["1f937-1f3fb",42,3,15,["\uD83E\uDD37\uD83C\uDFFB"]],"1f3fc":["1f937-1f3fc",42,4,15,["\uD83E\uDD37\uD83C\uDFFC"]],"1f3fd":["1f937-1f3fd",42,5,15,["\uD83E\uDD37\uD83C\uDFFD"]],"1f3fe":["1f937-1f3fe",42,6,15,["\uD83E\uDD37\uD83C\uDFFE"]],"1f3ff":["1f937-1f3ff",42,7,15,["\uD83E\uDD37\uD83C\uDFFF"]]},
		"1f938-200d-2640-fe0f":{"1f3fb":["1f938-1f3fb-200d-2640-fe0f",42,9,15,["\uD83E\uDD38\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f938-1f3fc-200d-2640-fe0f",42,10,15,["\uD83E\uDD38\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f938-1f3fd-200d-2640-fe0f",42,11,15,["\uD83E\uDD38\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f938-1f3fe-200d-2640-fe0f",42,12,15,["\uD83E\uDD38\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f938-1f3ff-200d-2640-fe0f",42,13,15,["\uD83E\uDD38\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f938-200d-2642-fe0f":{"1f3fb":["1f938-1f3fb-200d-2642-fe0f",42,15,15,["\uD83E\uDD38\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f938-1f3fc-200d-2642-fe0f",42,16,15,["\uD83E\uDD38\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f938-1f3fd-200d-2642-fe0f",42,17,15,["\uD83E\uDD38\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f938-1f3fe-200d-2642-fe0f",42,18,15,["\uD83E\uDD38\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f938-1f3ff-200d-2642-fe0f",42,19,15,["\uD83E\uDD38\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f938":{"1f3fb":["1f938-1f3fb",42,21,15,["\uD83E\uDD38\uD83C\uDFFB"]],"1f3fc":["1f938-1f3fc",42,22,15,["\uD83E\uDD38\uD83C\uDFFC"]],"1f3fd":["1f938-1f3fd",42,23,15,["\uD83E\uDD38\uD83C\uDFFD"]],"1f3fe":["1f938-1f3fe",42,24,15,["\uD83E\uDD38\uD83C\uDFFE"]],"1f3ff":["1f938-1f3ff",42,25,15,["\uD83E\uDD38\uD83C\uDFFF"]]},
		"1f939-200d-2640-fe0f":{"1f3fb":["1f939-1f3fb-200d-2640-fe0f",42,27,15,["\uD83E\uDD39\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f939-1f3fc-200d-2640-fe0f",42,28,15,["\uD83E\uDD39\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f939-1f3fd-200d-2640-fe0f",42,29,15,["\uD83E\uDD39\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f939-1f3fe-200d-2640-fe0f",42,30,15,["\uD83E\uDD39\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f939-1f3ff-200d-2640-fe0f",42,31,15,["\uD83E\uDD39\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f939-200d-2642-fe0f":{"1f3fb":["1f939-1f3fb-200d-2642-fe0f",42,33,15,["\uD83E\uDD39\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f939-1f3fc-200d-2642-fe0f",42,34,15,["\uD83E\uDD39\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f939-1f3fd-200d-2642-fe0f",42,35,15,["\uD83E\uDD39\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f939-1f3fe-200d-2642-fe0f",42,36,15,["\uD83E\uDD39\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f939-1f3ff-200d-2642-fe0f",42,37,15,["\uD83E\uDD39\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f939":{"1f3fb":["1f939-1f3fb",42,39,15,["\uD83E\uDD39\uD83C\uDFFB"]],"1f3fc":["1f939-1f3fc",42,40,15,["\uD83E\uDD39\uD83C\uDFFC"]],"1f3fd":["1f939-1f3fd",42,41,15,["\uD83E\uDD39\uD83C\uDFFD"]],"1f3fe":["1f939-1f3fe",42,42,15,["\uD83E\uDD39\uD83C\uDFFE"]],"1f3ff":["1f939-1f3ff",42,43,15,["\uD83E\uDD39\uD83C\uDFFF"]]},
		"1f93d-200d-2640-fe0f":{"1f3fb":["1f93d-1f3fb-200d-2640-fe0f",42,49,15,["\uD83E\uDD3D\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f93d-1f3fc-200d-2640-fe0f",42,50,15,["\uD83E\uDD3D\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f93d-1f3fd-200d-2640-fe0f",42,51,15,["\uD83E\uDD3D\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f93d-1f3fe-200d-2640-fe0f",42,52,15,["\uD83E\uDD3D\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f93d-1f3ff-200d-2640-fe0f",42,53,15,["\uD83E\uDD3D\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f93d-200d-2642-fe0f":{"1f3fb":["1f93d-1f3fb-200d-2642-fe0f",42,55,15,["\uD83E\uDD3D\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f93d-1f3fc-200d-2642-fe0f",42,56,15,["\uD83E\uDD3D\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f93d-1f3fd-200d-2642-fe0f",42,57,15,["\uD83E\uDD3D\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f93d-1f3fe-200d-2642-fe0f",42,58,15,["\uD83E\uDD3D\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f93d-1f3ff-200d-2642-fe0f",42,59,15,["\uD83E\uDD3D\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f93d":{"1f3fb":["1f93d-1f3fb",43,1,15,["\uD83E\uDD3D\uD83C\uDFFB"]],"1f3fc":["1f93d-1f3fc",43,2,15,["\uD83E\uDD3D\uD83C\uDFFC"]],"1f3fd":["1f93d-1f3fd",43,3,15,["\uD83E\uDD3D\uD83C\uDFFD"]],"1f3fe":["1f93d-1f3fe",43,4,15,["\uD83E\uDD3D\uD83C\uDFFE"]],"1f3ff":["1f93d-1f3ff",43,5,15,["\uD83E\uDD3D\uD83C\uDFFF"]]},
		"1f93e-200d-2640-fe0f":{"1f3fb":["1f93e-1f3fb-200d-2640-fe0f",43,7,15,["\uD83E\uDD3E\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f93e-1f3fc-200d-2640-fe0f",43,8,15,["\uD83E\uDD3E\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f93e-1f3fd-200d-2640-fe0f",43,9,15,["\uD83E\uDD3E\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f93e-1f3fe-200d-2640-fe0f",43,10,15,["\uD83E\uDD3E\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f93e-1f3ff-200d-2640-fe0f",43,11,15,["\uD83E\uDD3E\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f93e-200d-2642-fe0f":{"1f3fb":["1f93e-1f3fb-200d-2642-fe0f",43,13,15,["\uD83E\uDD3E\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f93e-1f3fc-200d-2642-fe0f",43,14,15,["\uD83E\uDD3E\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f93e-1f3fd-200d-2642-fe0f",43,15,15,["\uD83E\uDD3E\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f93e-1f3fe-200d-2642-fe0f",43,16,15,["\uD83E\uDD3E\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f93e-1f3ff-200d-2642-fe0f",43,17,15,["\uD83E\uDD3E\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f93e":{"1f3fb":["1f93e-1f3fb",43,19,15,["\uD83E\uDD3E\uD83C\uDFFB"]],"1f3fc":["1f93e-1f3fc",43,20,15,["\uD83E\uDD3E\uD83C\uDFFC"]],"1f3fd":["1f93e-1f3fd",43,21,15,["\uD83E\uDD3E\uD83C\uDFFD"]],"1f3fe":["1f93e-1f3fe",43,22,15,["\uD83E\uDD3E\uD83C\uDFFE"]],"1f3ff":["1f93e-1f3ff",43,23,15,["\uD83E\uDD3E\uD83C\uDFFF"]]},
		"1f977":{"1f3fb":["1f977-1f3fb",44,20,15,["\uD83E\uDD77\uD83C\uDFFB"]],"1f3fc":["1f977-1f3fc",44,21,15,["\uD83E\uDD77\uD83C\uDFFC"]],"1f3fd":["1f977-1f3fd",44,22,15,["\uD83E\uDD77\uD83C\uDFFD"]],"1f3fe":["1f977-1f3fe",44,23,15,["\uD83E\uDD77\uD83C\uDFFE"]],"1f3ff":["1f977-1f3ff",44,24,15,["\uD83E\uDD77\uD83C\uDFFF"]]},
		"1f9b5":{"1f3fb":["1f9b5-1f3fb",45,22,15,["\uD83E\uDDB5\uD83C\uDFFB"]],"1f3fc":["1f9b5-1f3fc",45,23,15,["\uD83E\uDDB5\uD83C\uDFFC"]],"1f3fd":["1f9b5-1f3fd",45,24,15,["\uD83E\uDDB5\uD83C\uDFFD"]],"1f3fe":["1f9b5-1f3fe",45,25,15,["\uD83E\uDDB5\uD83C\uDFFE"]],"1f3ff":["1f9b5-1f3ff",45,26,15,["\uD83E\uDDB5\uD83C\uDFFF"]]},
		"1f9b6":{"1f3fb":["1f9b6-1f3fb",45,28,15,["\uD83E\uDDB6\uD83C\uDFFB"]],"1f3fc":["1f9b6-1f3fc",45,29,15,["\uD83E\uDDB6\uD83C\uDFFC"]],"1f3fd":["1f9b6-1f3fd",45,30,15,["\uD83E\uDDB6\uD83C\uDFFD"]],"1f3fe":["1f9b6-1f3fe",45,31,15,["\uD83E\uDDB6\uD83C\uDFFE"]],"1f3ff":["1f9b6-1f3ff",45,32,15,["\uD83E\uDDB6\uD83C\uDFFF"]]},
		"1f9b8-200d-2640-fe0f":{"1f3fb":["1f9b8-1f3fb-200d-2640-fe0f",45,35,15,["\uD83E\uDDB8\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f9b8-1f3fc-200d-2640-fe0f",45,36,15,["\uD83E\uDDB8\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f9b8-1f3fd-200d-2640-fe0f",45,37,15,["\uD83E\uDDB8\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f9b8-1f3fe-200d-2640-fe0f",45,38,15,["\uD83E\uDDB8\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f9b8-1f3ff-200d-2640-fe0f",45,39,15,["\uD83E\uDDB8\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f9b8-200d-2642-fe0f":{"1f3fb":["1f9b8-1f3fb-200d-2642-fe0f",45,41,15,["\uD83E\uDDB8\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9b8-1f3fc-200d-2642-fe0f",45,42,15,["\uD83E\uDDB8\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9b8-1f3fd-200d-2642-fe0f",45,43,15,["\uD83E\uDDB8\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9b8-1f3fe-200d-2642-fe0f",45,44,15,["\uD83E\uDDB8\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9b8-1f3ff-200d-2642-fe0f",45,45,15,["\uD83E\uDDB8\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9b8":{"1f3fb":["1f9b8-1f3fb",45,47,15,["\uD83E\uDDB8\uD83C\uDFFB"]],"1f3fc":["1f9b8-1f3fc",45,48,15,["\uD83E\uDDB8\uD83C\uDFFC"]],"1f3fd":["1f9b8-1f3fd",45,49,15,["\uD83E\uDDB8\uD83C\uDFFD"]],"1f3fe":["1f9b8-1f3fe",45,50,15,["\uD83E\uDDB8\uD83C\uDFFE"]],"1f3ff":["1f9b8-1f3ff",45,51,15,["\uD83E\uDDB8\uD83C\uDFFF"]]},
		"1f9b9-200d-2640-fe0f":{"1f3fb":["1f9b9-1f3fb-200d-2640-fe0f",45,53,15,["\uD83E\uDDB9\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f9b9-1f3fc-200d-2640-fe0f",45,54,15,["\uD83E\uDDB9\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f9b9-1f3fd-200d-2640-fe0f",45,55,15,["\uD83E\uDDB9\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f9b9-1f3fe-200d-2640-fe0f",45,56,15,["\uD83E\uDDB9\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f9b9-1f3ff-200d-2640-fe0f",45,57,15,["\uD83E\uDDB9\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f9b9-200d-2642-fe0f":{"1f3fb":["1f9b9-1f3fb-200d-2642-fe0f",45,59,15,["\uD83E\uDDB9\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9b9-1f3fc-200d-2642-fe0f",46,0,15,["\uD83E\uDDB9\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9b9-1f3fd-200d-2642-fe0f",46,1,15,["\uD83E\uDDB9\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9b9-1f3fe-200d-2642-fe0f",46,2,15,["\uD83E\uDDB9\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9b9-1f3ff-200d-2642-fe0f",46,3,15,["\uD83E\uDDB9\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9b9":{"1f3fb":["1f9b9-1f3fb",46,5,15,["\uD83E\uDDB9\uD83C\uDFFB"]],"1f3fc":["1f9b9-1f3fc",46,6,15,["\uD83E\uDDB9\uD83C\uDFFC"]],"1f3fd":["1f9b9-1f3fd",46,7,15,["\uD83E\uDDB9\uD83C\uDFFD"]],"1f3fe":["1f9b9-1f3fe",46,8,15,["\uD83E\uDDB9\uD83C\uDFFE"]],"1f3ff":["1f9b9-1f3ff",46,9,15,["\uD83E\uDDB9\uD83C\uDFFF"]]},
		"1f9bb":{"1f3fb":["1f9bb-1f3fb",46,12,15,["\uD83E\uDDBB\uD83C\uDFFB"]],"1f3fc":["1f9bb-1f3fc",46,13,15,["\uD83E\uDDBB\uD83C\uDFFC"]],"1f3fd":["1f9bb-1f3fd",46,14,15,["\uD83E\uDDBB\uD83C\uDFFD"]],"1f3fe":["1f9bb-1f3fe",46,15,15,["\uD83E\uDDBB\uD83C\uDFFE"]],"1f3ff":["1f9bb-1f3ff",46,16,15,["\uD83E\uDDBB\uD83C\uDFFF"]]},
		"1f9cd-200d-2640-fe0f":{"1f3fb":["1f9cd-1f3fb-200d-2640-fe0f",46,34,15,["\uD83E\uDDCD\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f9cd-1f3fc-200d-2640-fe0f",46,35,15,["\uD83E\uDDCD\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f9cd-1f3fd-200d-2640-fe0f",46,36,15,["\uD83E\uDDCD\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f9cd-1f3fe-200d-2640-fe0f",46,37,15,["\uD83E\uDDCD\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f9cd-1f3ff-200d-2640-fe0f",46,38,15,["\uD83E\uDDCD\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f9cd-200d-2642-fe0f":{"1f3fb":["1f9cd-1f3fb-200d-2642-fe0f",46,40,15,["\uD83E\uDDCD\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9cd-1f3fc-200d-2642-fe0f",46,41,15,["\uD83E\uDDCD\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9cd-1f3fd-200d-2642-fe0f",46,42,15,["\uD83E\uDDCD\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9cd-1f3fe-200d-2642-fe0f",46,43,15,["\uD83E\uDDCD\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9cd-1f3ff-200d-2642-fe0f",46,44,15,["\uD83E\uDDCD\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9cd":{"1f3fb":["1f9cd-1f3fb",46,46,15,["\uD83E\uDDCD\uD83C\uDFFB"]],"1f3fc":["1f9cd-1f3fc",46,47,15,["\uD83E\uDDCD\uD83C\uDFFC"]],"1f3fd":["1f9cd-1f3fd",46,48,15,["\uD83E\uDDCD\uD83C\uDFFD"]],"1f3fe":["1f9cd-1f3fe",46,49,15,["\uD83E\uDDCD\uD83C\uDFFE"]],"1f3ff":["1f9cd-1f3ff",46,50,15,["\uD83E\uDDCD\uD83C\uDFFF"]]},
		"1f9ce-200d-2640-fe0f":{"1f3fb":["1f9ce-1f3fb-200d-2640-fe0f",46,52,15,["\uD83E\uDDCE\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f9ce-1f3fc-200d-2640-fe0f",46,53,15,["\uD83E\uDDCE\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f9ce-1f3fd-200d-2640-fe0f",46,54,15,["\uD83E\uDDCE\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f9ce-1f3fe-200d-2640-fe0f",46,55,15,["\uD83E\uDDCE\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f9ce-1f3ff-200d-2640-fe0f",46,56,15,["\uD83E\uDDCE\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f9ce-200d-2642-fe0f":{"1f3fb":["1f9ce-1f3fb-200d-2642-fe0f",46,58,15,["\uD83E\uDDCE\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9ce-1f3fc-200d-2642-fe0f",46,59,15,["\uD83E\uDDCE\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9ce-1f3fd-200d-2642-fe0f",47,0,15,["\uD83E\uDDCE\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9ce-1f3fe-200d-2642-fe0f",47,1,15,["\uD83E\uDDCE\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9ce-1f3ff-200d-2642-fe0f",47,2,15,["\uD83E\uDDCE\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9ce":{"1f3fb":["1f9ce-1f3fb",47,4,15,["\uD83E\uDDCE\uD83C\uDFFB"]],"1f3fc":["1f9ce-1f3fc",47,5,15,["\uD83E\uDDCE\uD83C\uDFFC"]],"1f3fd":["1f9ce-1f3fd",47,6,15,["\uD83E\uDDCE\uD83C\uDFFD"]],"1f3fe":["1f9ce-1f3fe",47,7,15,["\uD83E\uDDCE\uD83C\uDFFE"]],"1f3ff":["1f9ce-1f3ff",47,8,15,["\uD83E\uDDCE\uD83C\uDFFF"]]},
		"1f9cf-200d-2640-fe0f":{"1f3fb":["1f9cf-1f3fb-200d-2640-fe0f",47,10,15,["\uD83E\uDDCF\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f9cf-1f3fc-200d-2640-fe0f",47,11,15,["\uD83E\uDDCF\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f9cf-1f3fd-200d-2640-fe0f",47,12,15,["\uD83E\uDDCF\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f9cf-1f3fe-200d-2640-fe0f",47,13,15,["\uD83E\uDDCF\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f9cf-1f3ff-200d-2640-fe0f",47,14,15,["\uD83E\uDDCF\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f9cf-200d-2642-fe0f":{"1f3fb":["1f9cf-1f3fb-200d-2642-fe0f",47,16,15,["\uD83E\uDDCF\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9cf-1f3fc-200d-2642-fe0f",47,17,15,["\uD83E\uDDCF\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9cf-1f3fd-200d-2642-fe0f",47,18,15,["\uD83E\uDDCF\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9cf-1f3fe-200d-2642-fe0f",47,19,15,["\uD83E\uDDCF\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9cf-1f3ff-200d-2642-fe0f",47,20,15,["\uD83E\uDDCF\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9cf":{"1f3fb":["1f9cf-1f3fb",47,22,15,["\uD83E\uDDCF\uD83C\uDFFB"]],"1f3fc":["1f9cf-1f3fc",47,23,15,["\uD83E\uDDCF\uD83C\uDFFC"]],"1f3fd":["1f9cf-1f3fd",47,24,15,["\uD83E\uDDCF\uD83C\uDFFD"]],"1f3fe":["1f9cf-1f3fe",47,25,15,["\uD83E\uDDCF\uD83C\uDFFE"]],"1f3ff":["1f9cf-1f3ff",47,26,15,["\uD83E\uDDCF\uD83C\uDFFF"]]},
		"1f9d1-200d-1f33e":{"1f3fb":["1f9d1-1f3fb-200d-1f33e",47,29,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDF3E"]],"1f3fc":["1f9d1-1f3fc-200d-1f33e",47,30,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDF3E"]],"1f3fd":["1f9d1-1f3fd-200d-1f33e",47,31,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDF3E"]],"1f3fe":["1f9d1-1f3fe-200d-1f33e",47,32,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDF3E"]],"1f3ff":["1f9d1-1f3ff-200d-1f33e",47,33,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDF3E"]]},
		"1f9d1-200d-1f373":{"1f3fb":["1f9d1-1f3fb-200d-1f373",47,35,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDF73"]],"1f3fc":["1f9d1-1f3fc-200d-1f373",47,36,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDF73"]],"1f3fd":["1f9d1-1f3fd-200d-1f373",47,37,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDF73"]],"1f3fe":["1f9d1-1f3fe-200d-1f373",47,38,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDF73"]],"1f3ff":["1f9d1-1f3ff-200d-1f373",47,39,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDF73"]]},
		"1f9d1-200d-1f37c":{"1f3fb":["1f9d1-1f3fb-200d-1f37c",47,41,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDF7C"]],"1f3fc":["1f9d1-1f3fc-200d-1f37c",47,42,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDF7C"]],"1f3fd":["1f9d1-1f3fd-200d-1f37c",47,43,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDF7C"]],"1f3fe":["1f9d1-1f3fe-200d-1f37c",47,44,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDF7C"]],"1f3ff":["1f9d1-1f3ff-200d-1f37c",47,45,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDF7C"]]},
		"1f9d1-200d-1f384":{"1f3fb":["1f9d1-1f3fb-200d-1f384",47,47,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDF84"]],"1f3fc":["1f9d1-1f3fc-200d-1f384",47,48,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDF84"]],"1f3fd":["1f9d1-1f3fd-200d-1f384",47,49,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDF84"]],"1f3fe":["1f9d1-1f3fe-200d-1f384",47,50,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDF84"]],"1f3ff":["1f9d1-1f3ff-200d-1f384",47,51,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDF84"]]},
		"1f9d1-200d-1f393":{"1f3fb":["1f9d1-1f3fb-200d-1f393",47,53,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDF93"]],"1f3fc":["1f9d1-1f3fc-200d-1f393",47,54,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDF93"]],"1f3fd":["1f9d1-1f3fd-200d-1f393",47,55,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDF93"]],"1f3fe":["1f9d1-1f3fe-200d-1f393",47,56,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDF93"]],"1f3ff":["1f9d1-1f3ff-200d-1f393",47,57,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDF93"]]},
		"1f9d1-200d-1f3a4":{"1f3fb":["1f9d1-1f3fb-200d-1f3a4",47,59,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDFA4"]],"1f3fc":["1f9d1-1f3fc-200d-1f3a4",48,0,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDFA4"]],"1f3fd":["1f9d1-1f3fd-200d-1f3a4",48,1,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDFA4"]],"1f3fe":["1f9d1-1f3fe-200d-1f3a4",48,2,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDFA4"]],"1f3ff":["1f9d1-1f3ff-200d-1f3a4",48,3,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDFA4"]]},
		"1f9d1-200d-1f3a8":{"1f3fb":["1f9d1-1f3fb-200d-1f3a8",48,5,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDFA8"]],"1f3fc":["1f9d1-1f3fc-200d-1f3a8",48,6,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDFA8"]],"1f3fd":["1f9d1-1f3fd-200d-1f3a8",48,7,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDFA8"]],"1f3fe":["1f9d1-1f3fe-200d-1f3a8",48,8,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDFA8"]],"1f3ff":["1f9d1-1f3ff-200d-1f3a8",48,9,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDFA8"]]},
		"1f9d1-200d-1f3eb":{"1f3fb":["1f9d1-1f3fb-200d-1f3eb",48,11,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDFEB"]],"1f3fc":["1f9d1-1f3fc-200d-1f3eb",48,12,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDFEB"]],"1f3fd":["1f9d1-1f3fd-200d-1f3eb",48,13,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDFEB"]],"1f3fe":["1f9d1-1f3fe-200d-1f3eb",48,14,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDFEB"]],"1f3ff":["1f9d1-1f3ff-200d-1f3eb",48,15,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDFEB"]]},
		"1f9d1-200d-1f3ed":{"1f3fb":["1f9d1-1f3fb-200d-1f3ed",48,17,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83C\uDFED"]],"1f3fc":["1f9d1-1f3fc-200d-1f3ed",48,18,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDFED"]],"1f3fd":["1f9d1-1f3fd-200d-1f3ed",48,19,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83C\uDFED"]],"1f3fe":["1f9d1-1f3fe-200d-1f3ed",48,20,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83C\uDFED"]],"1f3ff":["1f9d1-1f3ff-200d-1f3ed",48,21,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83C\uDFED"]]},
		"1f9d1-200d-1f4bb":{"1f3fb":["1f9d1-1f3fb-200d-1f4bb",48,23,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBB"]],"1f3fc":["1f9d1-1f3fc-200d-1f4bb",48,24,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83D\uDCBB"]],"1f3fd":["1f9d1-1f3fd-200d-1f4bb",48,25,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDCBB"]],"1f3fe":["1f9d1-1f3fe-200d-1f4bb",48,26,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83D\uDCBB"]],"1f3ff":["1f9d1-1f3ff-200d-1f4bb",48,27,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDCBB"]]},
		"1f9d1-200d-1f4bc":{"1f3fb":["1f9d1-1f3fb-200d-1f4bc",48,29,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDCBC"]],"1f3fc":["1f9d1-1f3fc-200d-1f4bc",48,30,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83D\uDCBC"]],"1f3fd":["1f9d1-1f3fd-200d-1f4bc",48,31,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDCBC"]],"1f3fe":["1f9d1-1f3fe-200d-1f4bc",48,32,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83D\uDCBC"]],"1f3ff":["1f9d1-1f3ff-200d-1f4bc",48,33,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDCBC"]]},
		"1f9d1-200d-1f527":{"1f3fb":["1f9d1-1f3fb-200d-1f527",48,35,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDD27"]],"1f3fc":["1f9d1-1f3fc-200d-1f527",48,36,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83D\uDD27"]],"1f3fd":["1f9d1-1f3fd-200d-1f527",48,37,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDD27"]],"1f3fe":["1f9d1-1f3fe-200d-1f527",48,38,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83D\uDD27"]],"1f3ff":["1f9d1-1f3ff-200d-1f527",48,39,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDD27"]]},
		"1f9d1-200d-1f52c":{"1f3fb":["1f9d1-1f3fb-200d-1f52c",48,41,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDD2C"]],"1f3fc":["1f9d1-1f3fc-200d-1f52c",48,42,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83D\uDD2C"]],"1f3fd":["1f9d1-1f3fd-200d-1f52c",48,43,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDD2C"]],"1f3fe":["1f9d1-1f3fe-200d-1f52c",48,44,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83D\uDD2C"]],"1f3ff":["1f9d1-1f3ff-200d-1f52c",48,45,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDD2C"]]},
		"1f9d1-200d-1f680":{"1f3fb":["1f9d1-1f3fb-200d-1f680",48,47,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDE80"]],"1f3fc":["1f9d1-1f3fc-200d-1f680",48,48,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83D\uDE80"]],"1f3fd":["1f9d1-1f3fd-200d-1f680",48,49,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDE80"]],"1f3fe":["1f9d1-1f3fe-200d-1f680",48,50,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83D\uDE80"]],"1f3ff":["1f9d1-1f3ff-200d-1f680",48,51,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDE80"]]},
		"1f9d1-200d-1f692":{"1f3fb":["1f9d1-1f3fb-200d-1f692",48,53,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83D\uDE92"]],"1f3fc":["1f9d1-1f3fc-200d-1f692",48,54,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83D\uDE92"]],"1f3fd":["1f9d1-1f3fd-200d-1f692",48,55,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83D\uDE92"]],"1f3fe":["1f9d1-1f3fe-200d-1f692",48,56,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83D\uDE92"]],"1f3ff":["1f9d1-1f3ff-200d-1f692",48,57,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83D\uDE92"]]},
		"1f9d1-200d-1f91d-200d-1f9d1":{"1f3fb-1f3fb":["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb",48,59,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3fb-1f3fc":["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc",49,0,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3fb-1f3fd":["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd",49,1,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3fb-1f3fe":["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe",49,2,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFE"]],"1f3fb-1f3ff":["1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff",49,3,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFF"]],"1f3fc-1f3fb":["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb",49,4,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3fc-1f3fc":["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc",49,5,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3fc-1f3fd":["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd",49,6,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3fc-1f3fe":["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe",49,7,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFE"]],"1f3fc-1f3ff":["1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff",49,8,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFF"]],"1f3fd-1f3fb":["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb",49,9,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3fd-1f3fc":["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc",49,10,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3fd-1f3fd":["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd",49,11,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3fd-1f3fe":["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe",49,12,7,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFE"]],"1f3fd-1f3ff":["1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff",49,13,7,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFF"]],"1f3fe-1f3fb":["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb",49,14,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3fe-1f3fc":["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc",49,15,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3fe-1f3fd":["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd",49,16,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3fe-1f3fe":["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe",49,17,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFE"]],"1f3fe-1f3ff":["1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff",49,18,7,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFF"]],"1f3ff-1f3fb":["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb",49,19,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFB"]],"1f3ff-1f3fc":["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc",49,20,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFC"]],"1f3ff-1f3fd":["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd",49,21,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFD"]],"1f3ff-1f3fe":["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe",49,22,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFE"]],"1f3ff-1f3ff":["1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff",49,23,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1\uD83C\uDFFF"]]},
		"1f9d1-200d-1f9af":{"1f3fb":["1f9d1-1f3fb-200d-1f9af",49,25,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDAF"]],"1f3fc":["1f9d1-1f3fc-200d-1f9af",49,26,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDAF"]],"1f3fd":["1f9d1-1f3fd-200d-1f9af",49,27,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDAF"]],"1f3fe":["1f9d1-1f3fe-200d-1f9af",49,28,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDAF"]],"1f3ff":["1f9d1-1f3ff-200d-1f9af",49,29,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDAF"]]},
		"1f9d1-200d-1f9b0":{"1f3fb":["1f9d1-1f3fb-200d-1f9b0",49,31,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDB0"]],"1f3fc":["1f9d1-1f3fc-200d-1f9b0",49,32,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDB0"]],"1f3fd":["1f9d1-1f3fd-200d-1f9b0",49,33,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDB0"]],"1f3fe":["1f9d1-1f3fe-200d-1f9b0",49,34,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDB0"]],"1f3ff":["1f9d1-1f3ff-200d-1f9b0",49,35,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDB0"]]},
		"1f9d1-200d-1f9b1":{"1f3fb":["1f9d1-1f3fb-200d-1f9b1",49,37,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDB1"]],"1f3fc":["1f9d1-1f3fc-200d-1f9b1",49,38,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDB1"]],"1f3fd":["1f9d1-1f3fd-200d-1f9b1",49,39,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDB1"]],"1f3fe":["1f9d1-1f3fe-200d-1f9b1",49,40,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDB1"]],"1f3ff":["1f9d1-1f3ff-200d-1f9b1",49,41,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDB1"]]},
		"1f9d1-200d-1f9b2":{"1f3fb":["1f9d1-1f3fb-200d-1f9b2",49,43,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDB2"]],"1f3fc":["1f9d1-1f3fc-200d-1f9b2",49,44,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDB2"]],"1f3fd":["1f9d1-1f3fd-200d-1f9b2",49,45,7,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDB2"]],"1f3fe":["1f9d1-1f3fe-200d-1f9b2",49,46,7,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDB2"]],"1f3ff":["1f9d1-1f3ff-200d-1f9b2",49,47,7,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDB2"]]},
		"1f9d1-200d-1f9b3":{"1f3fb":["1f9d1-1f3fb-200d-1f9b3",49,49,7,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDB3"]],"1f3fc":["1f9d1-1f3fc-200d-1f9b3",49,50,7,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDB3"]],"1f3fd":["1f9d1-1f3fd-200d-1f9b3",49,51,7,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDB3"]],"1f3fe":["1f9d1-1f3fe-200d-1f9b3",49,52,7,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDB3"]],"1f3ff":["1f9d1-1f3ff-200d-1f9b3",49,53,7,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDB3"]]},
		"1f9d1-200d-1f9bc":{"1f3fb":["1f9d1-1f3fb-200d-1f9bc",49,55,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDBC"]],"1f3fc":["1f9d1-1f3fc-200d-1f9bc",49,56,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDBC"]],"1f3fd":["1f9d1-1f3fd-200d-1f9bc",49,57,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDBC"]],"1f3fe":["1f9d1-1f3fe-200d-1f9bc",49,58,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDBC"]],"1f3ff":["1f9d1-1f3ff-200d-1f9bc",49,59,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDBC"]]},
		"1f9d1-200d-1f9bd":{"1f3fb":["1f9d1-1f3fb-200d-1f9bd",50,1,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDDBD"]],"1f3fc":["1f9d1-1f3fc-200d-1f9bd",50,2,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDDBD"]],"1f3fd":["1f9d1-1f3fd-200d-1f9bd",50,3,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDDBD"]],"1f3fe":["1f9d1-1f3fe-200d-1f9bd",50,4,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDDBD"]],"1f3ff":["1f9d1-1f3ff-200d-1f9bd",50,5,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\uD83E\uDDBD"]]},
		"1f9d1-200d-2695-fe0f":{"1f3fb":["1f9d1-1f3fb-200d-2695-fe0f",50,7,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\u2695\uFE0F"]],"1f3fc":["1f9d1-1f3fc-200d-2695-fe0f",50,8,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\u2695\uFE0F"]],"1f3fd":["1f9d1-1f3fd-200d-2695-fe0f",50,9,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\u2695\uFE0F"]],"1f3fe":["1f9d1-1f3fe-200d-2695-fe0f",50,10,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\u2695\uFE0F"]],"1f3ff":["1f9d1-1f3ff-200d-2695-fe0f",50,11,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\u2695\uFE0F"]]},
		"1f9d1-200d-2696-fe0f":{"1f3fb":["1f9d1-1f3fb-200d-2696-fe0f",50,13,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\u2696\uFE0F"]],"1f3fc":["1f9d1-1f3fc-200d-2696-fe0f",50,14,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\u2696\uFE0F"]],"1f3fd":["1f9d1-1f3fd-200d-2696-fe0f",50,15,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\u2696\uFE0F"]],"1f3fe":["1f9d1-1f3fe-200d-2696-fe0f",50,16,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\u2696\uFE0F"]],"1f3ff":["1f9d1-1f3ff-200d-2696-fe0f",50,17,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\u2696\uFE0F"]]},
		"1f9d1-200d-2708-fe0f":{"1f3fb":["1f9d1-1f3fb-200d-2708-fe0f",50,19,15,["\uD83E\uDDD1\uD83C\uDFFB\u200D\u2708\uFE0F"]],"1f3fc":["1f9d1-1f3fc-200d-2708-fe0f",50,20,15,["\uD83E\uDDD1\uD83C\uDFFC\u200D\u2708\uFE0F"]],"1f3fd":["1f9d1-1f3fd-200d-2708-fe0f",50,21,15,["\uD83E\uDDD1\uD83C\uDFFD\u200D\u2708\uFE0F"]],"1f3fe":["1f9d1-1f3fe-200d-2708-fe0f",50,22,15,["\uD83E\uDDD1\uD83C\uDFFE\u200D\u2708\uFE0F"]],"1f3ff":["1f9d1-1f3ff-200d-2708-fe0f",50,23,15,["\uD83E\uDDD1\uD83C\uDFFF\u200D\u2708\uFE0F"]]},
		"1f9d1":{"1f3fb":["1f9d1-1f3fb",50,25,15,["\uD83E\uDDD1\uD83C\uDFFB"]],"1f3fc":["1f9d1-1f3fc",50,26,15,["\uD83E\uDDD1\uD83C\uDFFC"]],"1f3fd":["1f9d1-1f3fd",50,27,15,["\uD83E\uDDD1\uD83C\uDFFD"]],"1f3fe":["1f9d1-1f3fe",50,28,15,["\uD83E\uDDD1\uD83C\uDFFE"]],"1f3ff":["1f9d1-1f3ff",50,29,15,["\uD83E\uDDD1\uD83C\uDFFF"]]},
		"1f9d2":{"1f3fb":["1f9d2-1f3fb",50,31,15,["\uD83E\uDDD2\uD83C\uDFFB"]],"1f3fc":["1f9d2-1f3fc",50,32,15,["\uD83E\uDDD2\uD83C\uDFFC"]],"1f3fd":["1f9d2-1f3fd",50,33,15,["\uD83E\uDDD2\uD83C\uDFFD"]],"1f3fe":["1f9d2-1f3fe",50,34,15,["\uD83E\uDDD2\uD83C\uDFFE"]],"1f3ff":["1f9d2-1f3ff",50,35,15,["\uD83E\uDDD2\uD83C\uDFFF"]]},
		"1f9d3":{"1f3fb":["1f9d3-1f3fb",50,37,15,["\uD83E\uDDD3\uD83C\uDFFB"]],"1f3fc":["1f9d3-1f3fc",50,38,15,["\uD83E\uDDD3\uD83C\uDFFC"]],"1f3fd":["1f9d3-1f3fd",50,39,15,["\uD83E\uDDD3\uD83C\uDFFD"]],"1f3fe":["1f9d3-1f3fe",50,40,15,["\uD83E\uDDD3\uD83C\uDFFE"]],"1f3ff":["1f9d3-1f3ff",50,41,15,["\uD83E\uDDD3\uD83C\uDFFF"]]},
		"1f9d4-200d-2640-fe0f":{"1f3fb":["1f9d4-1f3fb-200d-2640-fe0f",50,43,7,["\uD83E\uDDD4\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f9d4-1f3fc-200d-2640-fe0f",50,44,7,["\uD83E\uDDD4\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f9d4-1f3fd-200d-2640-fe0f",50,45,7,["\uD83E\uDDD4\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f9d4-1f3fe-200d-2640-fe0f",50,46,7,["\uD83E\uDDD4\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f9d4-1f3ff-200d-2640-fe0f",50,47,7,["\uD83E\uDDD4\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f9d4-200d-2642-fe0f":{"1f3fb":["1f9d4-1f3fb-200d-2642-fe0f",50,49,7,["\uD83E\uDDD4\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9d4-1f3fc-200d-2642-fe0f",50,50,7,["\uD83E\uDDD4\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9d4-1f3fd-200d-2642-fe0f",50,51,7,["\uD83E\uDDD4\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9d4-1f3fe-200d-2642-fe0f",50,52,7,["\uD83E\uDDD4\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9d4-1f3ff-200d-2642-fe0f",50,53,7,["\uD83E\uDDD4\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9d4":{"1f3fb":["1f9d4-1f3fb",50,55,15,["\uD83E\uDDD4\uD83C\uDFFB"]],"1f3fc":["1f9d4-1f3fc",50,56,15,["\uD83E\uDDD4\uD83C\uDFFC"]],"1f3fd":["1f9d4-1f3fd",50,57,15,["\uD83E\uDDD4\uD83C\uDFFD"]],"1f3fe":["1f9d4-1f3fe",50,58,15,["\uD83E\uDDD4\uD83C\uDFFE"]],"1f3ff":["1f9d4-1f3ff",50,59,15,["\uD83E\uDDD4\uD83C\uDFFF"]]},
		"1f9d5":{"1f3fb":["1f9d5-1f3fb",51,1,15,["\uD83E\uDDD5\uD83C\uDFFB"]],"1f3fc":["1f9d5-1f3fc",51,2,15,["\uD83E\uDDD5\uD83C\uDFFC"]],"1f3fd":["1f9d5-1f3fd",51,3,15,["\uD83E\uDDD5\uD83C\uDFFD"]],"1f3fe":["1f9d5-1f3fe",51,4,15,["\uD83E\uDDD5\uD83C\uDFFE"]],"1f3ff":["1f9d5-1f3ff",51,5,15,["\uD83E\uDDD5\uD83C\uDFFF"]]},
		"1f9d6-200d-2640-fe0f":{"1f3fb":["1f9d6-1f3fb-200d-2640-fe0f",51,7,15,["\uD83E\uDDD6\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f9d6-1f3fc-200d-2640-fe0f",51,8,15,["\uD83E\uDDD6\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f9d6-1f3fd-200d-2640-fe0f",51,9,15,["\uD83E\uDDD6\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f9d6-1f3fe-200d-2640-fe0f",51,10,15,["\uD83E\uDDD6\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f9d6-1f3ff-200d-2640-fe0f",51,11,15,["\uD83E\uDDD6\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f9d6-200d-2642-fe0f":{"1f3fb":["1f9d6-1f3fb-200d-2642-fe0f",51,13,15,["\uD83E\uDDD6\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83E\uDDD6\uD83C\uDFFB"]],"1f3fc":["1f9d6-1f3fc-200d-2642-fe0f",51,14,15,["\uD83E\uDDD6\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83E\uDDD6\uD83C\uDFFC"]],"1f3fd":["1f9d6-1f3fd-200d-2642-fe0f",51,15,15,["\uD83E\uDDD6\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83E\uDDD6\uD83C\uDFFD"]],"1f3fe":["1f9d6-1f3fe-200d-2642-fe0f",51,16,15,["\uD83E\uDDD6\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83E\uDDD6\uD83C\uDFFE"]],"1f3ff":["1f9d6-1f3ff-200d-2642-fe0f",51,17,15,["\uD83E\uDDD6\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83E\uDDD6\uD83C\uDFFF"]]},
		"1f9d7-200d-2640-fe0f":{"1f3fb":["1f9d7-1f3fb-200d-2640-fe0f",51,25,15,["\uD83E\uDDD7\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83E\uDDD7\uD83C\uDFFB"]],"1f3fc":["1f9d7-1f3fc-200d-2640-fe0f",51,26,15,["\uD83E\uDDD7\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83E\uDDD7\uD83C\uDFFC"]],"1f3fd":["1f9d7-1f3fd-200d-2640-fe0f",51,27,15,["\uD83E\uDDD7\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83E\uDDD7\uD83C\uDFFD"]],"1f3fe":["1f9d7-1f3fe-200d-2640-fe0f",51,28,15,["\uD83E\uDDD7\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83E\uDDD7\uD83C\uDFFE"]],"1f3ff":["1f9d7-1f3ff-200d-2640-fe0f",51,29,15,["\uD83E\uDDD7\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83E\uDDD7\uD83C\uDFFF"]]},
		"1f9d7-200d-2642-fe0f":{"1f3fb":["1f9d7-1f3fb-200d-2642-fe0f",51,31,15,["\uD83E\uDDD7\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9d7-1f3fc-200d-2642-fe0f",51,32,15,["\uD83E\uDDD7\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9d7-1f3fd-200d-2642-fe0f",51,33,15,["\uD83E\uDDD7\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9d7-1f3fe-200d-2642-fe0f",51,34,15,["\uD83E\uDDD7\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9d7-1f3ff-200d-2642-fe0f",51,35,15,["\uD83E\uDDD7\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9d8-200d-2640-fe0f":{"1f3fb":["1f9d8-1f3fb-200d-2640-fe0f",51,43,15,["\uD83E\uDDD8\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83E\uDDD8\uD83C\uDFFB"]],"1f3fc":["1f9d8-1f3fc-200d-2640-fe0f",51,44,15,["\uD83E\uDDD8\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83E\uDDD8\uD83C\uDFFC"]],"1f3fd":["1f9d8-1f3fd-200d-2640-fe0f",51,45,15,["\uD83E\uDDD8\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83E\uDDD8\uD83C\uDFFD"]],"1f3fe":["1f9d8-1f3fe-200d-2640-fe0f",51,46,15,["\uD83E\uDDD8\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83E\uDDD8\uD83C\uDFFE"]],"1f3ff":["1f9d8-1f3ff-200d-2640-fe0f",51,47,15,["\uD83E\uDDD8\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83E\uDDD8\uD83C\uDFFF"]]},
		"1f9d8-200d-2642-fe0f":{"1f3fb":["1f9d8-1f3fb-200d-2642-fe0f",51,49,15,["\uD83E\uDDD8\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9d8-1f3fc-200d-2642-fe0f",51,50,15,["\uD83E\uDDD8\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9d8-1f3fd-200d-2642-fe0f",51,51,15,["\uD83E\uDDD8\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9d8-1f3fe-200d-2642-fe0f",51,52,15,["\uD83E\uDDD8\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9d8-1f3ff-200d-2642-fe0f",51,53,15,["\uD83E\uDDD8\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9d9-200d-2640-fe0f":{"1f3fb":["1f9d9-1f3fb-200d-2640-fe0f",52,1,15,["\uD83E\uDDD9\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83E\uDDD9\uD83C\uDFFB"]],"1f3fc":["1f9d9-1f3fc-200d-2640-fe0f",52,2,15,["\uD83E\uDDD9\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83E\uDDD9\uD83C\uDFFC"]],"1f3fd":["1f9d9-1f3fd-200d-2640-fe0f",52,3,15,["\uD83E\uDDD9\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83E\uDDD9\uD83C\uDFFD"]],"1f3fe":["1f9d9-1f3fe-200d-2640-fe0f",52,4,15,["\uD83E\uDDD9\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83E\uDDD9\uD83C\uDFFE"]],"1f3ff":["1f9d9-1f3ff-200d-2640-fe0f",52,5,15,["\uD83E\uDDD9\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83E\uDDD9\uD83C\uDFFF"]]},
		"1f9d9-200d-2642-fe0f":{"1f3fb":["1f9d9-1f3fb-200d-2642-fe0f",52,7,15,["\uD83E\uDDD9\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9d9-1f3fc-200d-2642-fe0f",52,8,15,["\uD83E\uDDD9\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9d9-1f3fd-200d-2642-fe0f",52,9,15,["\uD83E\uDDD9\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9d9-1f3fe-200d-2642-fe0f",52,10,15,["\uD83E\uDDD9\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9d9-1f3ff-200d-2642-fe0f",52,11,15,["\uD83E\uDDD9\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9da-200d-2640-fe0f":{"1f3fb":["1f9da-1f3fb-200d-2640-fe0f",52,19,15,["\uD83E\uDDDA\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83E\uDDDA\uD83C\uDFFB"]],"1f3fc":["1f9da-1f3fc-200d-2640-fe0f",52,20,15,["\uD83E\uDDDA\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83E\uDDDA\uD83C\uDFFC"]],"1f3fd":["1f9da-1f3fd-200d-2640-fe0f",52,21,15,["\uD83E\uDDDA\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83E\uDDDA\uD83C\uDFFD"]],"1f3fe":["1f9da-1f3fe-200d-2640-fe0f",52,22,15,["\uD83E\uDDDA\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83E\uDDDA\uD83C\uDFFE"]],"1f3ff":["1f9da-1f3ff-200d-2640-fe0f",52,23,15,["\uD83E\uDDDA\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83E\uDDDA\uD83C\uDFFF"]]},
		"1f9da-200d-2642-fe0f":{"1f3fb":["1f9da-1f3fb-200d-2642-fe0f",52,25,15,["\uD83E\uDDDA\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9da-1f3fc-200d-2642-fe0f",52,26,15,["\uD83E\uDDDA\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9da-1f3fd-200d-2642-fe0f",52,27,15,["\uD83E\uDDDA\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9da-1f3fe-200d-2642-fe0f",52,28,15,["\uD83E\uDDDA\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9da-1f3ff-200d-2642-fe0f",52,29,15,["\uD83E\uDDDA\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9db-200d-2640-fe0f":{"1f3fb":["1f9db-1f3fb-200d-2640-fe0f",52,37,15,["\uD83E\uDDDB\uD83C\uDFFB\u200D\u2640\uFE0F","\uD83E\uDDDB\uD83C\uDFFB"]],"1f3fc":["1f9db-1f3fc-200d-2640-fe0f",52,38,15,["\uD83E\uDDDB\uD83C\uDFFC\u200D\u2640\uFE0F","\uD83E\uDDDB\uD83C\uDFFC"]],"1f3fd":["1f9db-1f3fd-200d-2640-fe0f",52,39,15,["\uD83E\uDDDB\uD83C\uDFFD\u200D\u2640\uFE0F","\uD83E\uDDDB\uD83C\uDFFD"]],"1f3fe":["1f9db-1f3fe-200d-2640-fe0f",52,40,15,["\uD83E\uDDDB\uD83C\uDFFE\u200D\u2640\uFE0F","\uD83E\uDDDB\uD83C\uDFFE"]],"1f3ff":["1f9db-1f3ff-200d-2640-fe0f",52,41,15,["\uD83E\uDDDB\uD83C\uDFFF\u200D\u2640\uFE0F","\uD83E\uDDDB\uD83C\uDFFF"]]},
		"1f9db-200d-2642-fe0f":{"1f3fb":["1f9db-1f3fb-200d-2642-fe0f",52,43,15,["\uD83E\uDDDB\uD83C\uDFFB\u200D\u2642\uFE0F"]],"1f3fc":["1f9db-1f3fc-200d-2642-fe0f",52,44,15,["\uD83E\uDDDB\uD83C\uDFFC\u200D\u2642\uFE0F"]],"1f3fd":["1f9db-1f3fd-200d-2642-fe0f",52,45,15,["\uD83E\uDDDB\uD83C\uDFFD\u200D\u2642\uFE0F"]],"1f3fe":["1f9db-1f3fe-200d-2642-fe0f",52,46,15,["\uD83E\uDDDB\uD83C\uDFFE\u200D\u2642\uFE0F"]],"1f3ff":["1f9db-1f3ff-200d-2642-fe0f",52,47,15,["\uD83E\uDDDB\uD83C\uDFFF\u200D\u2642\uFE0F"]]},
		"1f9dc-200d-2640-fe0f":{"1f3fb":["1f9dc-1f3fb-200d-2640-fe0f",52,55,15,["\uD83E\uDDDC\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f9dc-1f3fc-200d-2640-fe0f",52,56,15,["\uD83E\uDDDC\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f9dc-1f3fd-200d-2640-fe0f",52,57,15,["\uD83E\uDDDC\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f9dc-1f3fe-200d-2640-fe0f",52,58,15,["\uD83E\uDDDC\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f9dc-1f3ff-200d-2640-fe0f",52,59,15,["\uD83E\uDDDC\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f9dc-200d-2642-fe0f":{"1f3fb":["1f9dc-1f3fb-200d-2642-fe0f",53,1,15,["\uD83E\uDDDC\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83E\uDDDC\uD83C\uDFFB"]],"1f3fc":["1f9dc-1f3fc-200d-2642-fe0f",53,2,15,["\uD83E\uDDDC\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83E\uDDDC\uD83C\uDFFC"]],"1f3fd":["1f9dc-1f3fd-200d-2642-fe0f",53,3,15,["\uD83E\uDDDC\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83E\uDDDC\uD83C\uDFFD"]],"1f3fe":["1f9dc-1f3fe-200d-2642-fe0f",53,4,15,["\uD83E\uDDDC\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83E\uDDDC\uD83C\uDFFE"]],"1f3ff":["1f9dc-1f3ff-200d-2642-fe0f",53,5,15,["\uD83E\uDDDC\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83E\uDDDC\uD83C\uDFFF"]]},
		"1f9dd-200d-2640-fe0f":{"1f3fb":["1f9dd-1f3fb-200d-2640-fe0f",53,13,15,["\uD83E\uDDDD\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["1f9dd-1f3fc-200d-2640-fe0f",53,14,15,["\uD83E\uDDDD\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["1f9dd-1f3fd-200d-2640-fe0f",53,15,15,["\uD83E\uDDDD\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["1f9dd-1f3fe-200d-2640-fe0f",53,16,15,["\uD83E\uDDDD\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["1f9dd-1f3ff-200d-2640-fe0f",53,17,15,["\uD83E\uDDDD\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"1f9dd-200d-2642-fe0f":{"1f3fb":["1f9dd-1f3fb-200d-2642-fe0f",53,19,15,["\uD83E\uDDDD\uD83C\uDFFB\u200D\u2642\uFE0F","\uD83E\uDDDD\uD83C\uDFFB"]],"1f3fc":["1f9dd-1f3fc-200d-2642-fe0f",53,20,15,["\uD83E\uDDDD\uD83C\uDFFC\u200D\u2642\uFE0F","\uD83E\uDDDD\uD83C\uDFFC"]],"1f3fd":["1f9dd-1f3fd-200d-2642-fe0f",53,21,15,["\uD83E\uDDDD\uD83C\uDFFD\u200D\u2642\uFE0F","\uD83E\uDDDD\uD83C\uDFFD"]],"1f3fe":["1f9dd-1f3fe-200d-2642-fe0f",53,22,15,["\uD83E\uDDDD\uD83C\uDFFE\u200D\u2642\uFE0F","\uD83E\uDDDD\uD83C\uDFFE"]],"1f3ff":["1f9dd-1f3ff-200d-2642-fe0f",53,23,15,["\uD83E\uDDDD\uD83C\uDFFF\u200D\u2642\uFE0F","\uD83E\uDDDD\uD83C\uDFFF"]]},
		"261d-fe0f":{"1f3fb":["261d-1f3fb",55,55,15,["\u261D\uD83C\uDFFB"]],"1f3fc":["261d-1f3fc",55,56,15,["\u261D\uD83C\uDFFC"]],"1f3fd":["261d-1f3fd",55,57,15,["\u261D\uD83C\uDFFD"]],"1f3fe":["261d-1f3fe",55,58,15,["\u261D\uD83C\uDFFE"]],"1f3ff":["261d-1f3ff",55,59,15,["\u261D\uD83C\uDFFF"]]},
		"26f9-fe0f-200d-2640-fe0f":{"1f3fb":["26f9-1f3fb-200d-2640-fe0f",57,10,15,["\u26F9\uD83C\uDFFB\u200D\u2640\uFE0F"]],"1f3fc":["26f9-1f3fc-200d-2640-fe0f",57,11,15,["\u26F9\uD83C\uDFFC\u200D\u2640\uFE0F"]],"1f3fd":["26f9-1f3fd-200d-2640-fe0f",57,12,15,["\u26F9\uD83C\uDFFD\u200D\u2640\uFE0F"]],"1f3fe":["26f9-1f3fe-200d-2640-fe0f",57,13,15,["\u26F9\uD83C\uDFFE\u200D\u2640\uFE0F"]],"1f3ff":["26f9-1f3ff-200d-2640-fe0f",57,14,15,["\u26F9\uD83C\uDFFF\u200D\u2640\uFE0F"]]},
		"26f9-fe0f-200d-2642-fe0f":{"1f3fb":["26f9-1f3fb-200d-2642-fe0f",57,16,15,["\u26F9\uD83C\uDFFB\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFB"]],"1f3fc":["26f9-1f3fc-200d-2642-fe0f",57,17,15,["\u26F9\uD83C\uDFFC\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFC"]],"1f3fd":["26f9-1f3fd-200d-2642-fe0f",57,18,15,["\u26F9\uD83C\uDFFD\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFD"]],"1f3fe":["26f9-1f3fe-200d-2642-fe0f",57,19,15,["\u26F9\uD83C\uDFFE\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFE"]],"1f3ff":["26f9-1f3ff-200d-2642-fe0f",57,20,15,["\u26F9\uD83C\uDFFF\u200D\u2642\uFE0F","\u26F9\uD83C\uDFFF"]]},
		"270a":{"1f3fb":["270a-1f3fb",57,34,15,["\u270A\uD83C\uDFFB"]],"1f3fc":["270a-1f3fc",57,35,15,["\u270A\uD83C\uDFFC"]],"1f3fd":["270a-1f3fd",57,36,15,["\u270A\uD83C\uDFFD"]],"1f3fe":["270a-1f3fe",57,37,15,["\u270A\uD83C\uDFFE"]],"1f3ff":["270a-1f3ff",57,38,15,["\u270A\uD83C\uDFFF"]]},
		"270b":{"1f3fb":["270b-1f3fb",57,40,15,["\u270B\uD83C\uDFFB"]],"1f3fc":["270b-1f3fc",57,41,15,["\u270B\uD83C\uDFFC"]],"1f3fd":["270b-1f3fd",57,42,15,["\u270B\uD83C\uDFFD"]],"1f3fe":["270b-1f3fe",57,43,15,["\u270B\uD83C\uDFFE"]],"1f3ff":["270b-1f3ff",57,44,15,["\u270B\uD83C\uDFFF"]]},
		"270c-fe0f":{"1f3fb":["270c-1f3fb",57,46,15,["\u270C\uD83C\uDFFB"]],"1f3fc":["270c-1f3fc",57,47,15,["\u270C\uD83C\uDFFC"]],"1f3fd":["270c-1f3fd",57,48,15,["\u270C\uD83C\uDFFD"]],"1f3fe":["270c-1f3fe",57,49,15,["\u270C\uD83C\uDFFE"]],"1f3ff":["270c-1f3ff",57,50,15,["\u270C\uD83C\uDFFF"]]},
		"270d-fe0f":{"1f3fb":["270d-1f3fb",57,52,15,["\u270D\uD83C\uDFFB"]],"1f3fc":["270d-1f3fc",57,53,15,["\u270D\uD83C\uDFFC"]],"1f3fd":["270d-1f3fd",57,54,15,["\u270D\uD83C\uDFFD"]],"1f3fe":["270d-1f3fe",57,55,15,["\u270D\uD83C\uDFFE"]],"1f3ff":["270d-1f3ff",57,56,15,["\u270D\uD83C\uDFFF"]]}
	};
	/** @private */
	emoji.prototype.obsoletes_data = {
		"1f3c3-200d-2642-fe0f":["1f3c3",8,34,15],
		"1f3c3-1f3fb-200d-2642-fe0f":["1f3c3-1f3fb",8,35,15],
		"1f3c3-1f3fc-200d-2642-fe0f":["1f3c3-1f3fc",8,36,15],
		"1f3c3-1f3fd-200d-2642-fe0f":["1f3c3-1f3fd",8,37,15],
		"1f3c3-1f3fe-200d-2642-fe0f":["1f3c3-1f3fe",8,38,15],
		"1f3c3-1f3ff-200d-2642-fe0f":["1f3c3-1f3ff",8,39,15],
		"1f3c4-200d-2642-fe0f":["1f3c4",8,52,15],
		"1f3c4-1f3fb-200d-2642-fe0f":["1f3c4-1f3fb",8,53,15],
		"1f3c4-1f3fc-200d-2642-fe0f":["1f3c4-1f3fc",8,54,15],
		"1f3c4-1f3fd-200d-2642-fe0f":["1f3c4-1f3fd",8,55,15],
		"1f3c4-1f3fe-200d-2642-fe0f":["1f3c4-1f3fe",8,56,15],
		"1f3c4-1f3ff-200d-2642-fe0f":["1f3c4-1f3ff",8,57,15],
		"1f3ca-200d-2642-fe0f":["1f3ca",9,20,15],
		"1f3ca-1f3fb-200d-2642-fe0f":["1f3ca-1f3fb",9,21,15],
		"1f3ca-1f3fc-200d-2642-fe0f":["1f3ca-1f3fc",9,22,15],
		"1f3ca-1f3fd-200d-2642-fe0f":["1f3ca-1f3fd",9,23,15],
		"1f3ca-1f3fe-200d-2642-fe0f":["1f3ca-1f3fe",9,24,15],
		"1f3ca-1f3ff-200d-2642-fe0f":["1f3ca-1f3ff",9,25,15],
		"1f3cb-fe0f-200d-2642-fe0f":["1f3cb-fe0f",9,38,15],
		"1f3cb-1f3fb-200d-2642-fe0f":["1f3cb-1f3fb",9,39,15],
		"1f3cb-1f3fc-200d-2642-fe0f":["1f3cb-1f3fc",9,40,15],
		"1f3cb-1f3fd-200d-2642-fe0f":["1f3cb-1f3fd",9,41,15],
		"1f3cb-1f3fe-200d-2642-fe0f":["1f3cb-1f3fe",9,42,15],
		"1f3cb-1f3ff-200d-2642-fe0f":["1f3cb-1f3ff",9,43,15],
		"1f3cc-fe0f-200d-2642-fe0f":["1f3cc-fe0f",9,56,15],
		"1f3cc-1f3fb-200d-2642-fe0f":["1f3cc-1f3fb",9,57,15],
		"1f3cc-1f3fc-200d-2642-fe0f":["1f3cc-1f3fc",9,58,15],
		"1f3cc-1f3fd-200d-2642-fe0f":["1f3cc-1f3fd",9,59,15],
		"1f3cc-1f3fe-200d-2642-fe0f":["1f3cc-1f3fe",10,0,15],
		"1f3cc-1f3ff-200d-2642-fe0f":["1f3cc-1f3ff",10,1,15],
		"1f468-200d-1f469-200d-1f466":["1f46a",22,0,15],
		"1f46e-200d-2642-fe0f":["1f46e",23,31,15],
		"1f46e-1f3fb-200d-2642-fe0f":["1f46e-1f3fb",23,32,15],
		"1f46e-1f3fc-200d-2642-fe0f":["1f46e-1f3fc",23,33,15],
		"1f46e-1f3fd-200d-2642-fe0f":["1f46e-1f3fd",23,34,15],
		"1f46e-1f3fe-200d-2642-fe0f":["1f46e-1f3fe",23,35,15],
		"1f46e-1f3ff-200d-2642-fe0f":["1f46e-1f3ff",23,36,15],
		"1f46f-200d-2640-fe0f":["1f46f",23,39,15],
		"1f471-200d-2642-fe0f":["1f471",24,10,15],
		"1f471-1f3fb-200d-2642-fe0f":["1f471-1f3fb",24,11,15],
		"1f471-1f3fc-200d-2642-fe0f":["1f471-1f3fc",24,12,15],
		"1f471-1f3fd-200d-2642-fe0f":["1f471-1f3fd",24,13,15],
		"1f471-1f3fe-200d-2642-fe0f":["1f471-1f3fe",24,14,15],
		"1f471-1f3ff-200d-2642-fe0f":["1f471-1f3ff",24,15,15],
		"1f473-200d-2642-fe0f":["1f473",24,34,15],
		"1f473-1f3fb-200d-2642-fe0f":["1f473-1f3fb",24,35,15],
		"1f473-1f3fc-200d-2642-fe0f":["1f473-1f3fc",24,36,15],
		"1f473-1f3fd-200d-2642-fe0f":["1f473-1f3fd",24,37,15],
		"1f473-1f3fe-200d-2642-fe0f":["1f473-1f3fe",24,38,15],
		"1f473-1f3ff-200d-2642-fe0f":["1f473-1f3ff",24,39,15],
		"1f477-200d-2642-fe0f":["1f477",25,10,15],
		"1f477-1f3fb-200d-2642-fe0f":["1f477-1f3fb",25,11,15],
		"1f477-1f3fc-200d-2642-fe0f":["1f477-1f3fc",25,12,15],
		"1f477-1f3fd-200d-2642-fe0f":["1f477-1f3fd",25,13,15],
		"1f477-1f3fe-200d-2642-fe0f":["1f477-1f3fe",25,14,15],
		"1f477-1f3ff-200d-2642-fe0f":["1f477-1f3ff",25,15,15],
		"1f481-200d-2640-fe0f":["1f481",25,47,15],
		"1f481-1f3fb-200d-2640-fe0f":["1f481-1f3fb",25,48,15],
		"1f481-1f3fc-200d-2640-fe0f":["1f481-1f3fc",25,49,15],
		"1f481-1f3fd-200d-2640-fe0f":["1f481-1f3fd",25,50,15],
		"1f481-1f3fe-200d-2640-fe0f":["1f481-1f3fe",25,51,15],
		"1f481-1f3ff-200d-2640-fe0f":["1f481-1f3ff",25,52,15],
		"1f482-200d-2642-fe0f":["1f482",26,5,15],
		"1f482-1f3fb-200d-2642-fe0f":["1f482-1f3fb",26,6,15],
		"1f482-1f3fc-200d-2642-fe0f":["1f482-1f3fc",26,7,15],
		"1f482-1f3fd-200d-2642-fe0f":["1f482-1f3fd",26,8,15],
		"1f482-1f3fe-200d-2642-fe0f":["1f482-1f3fe",26,9,15],
		"1f482-1f3ff-200d-2642-fe0f":["1f482-1f3ff",26,10,15],
		"1f486-200d-2640-fe0f":["1f486",26,36,15],
		"1f486-1f3fb-200d-2640-fe0f":["1f486-1f3fb",26,37,15],
		"1f486-1f3fc-200d-2640-fe0f":["1f486-1f3fc",26,38,15],
		"1f486-1f3fd-200d-2640-fe0f":["1f486-1f3fd",26,39,15],
		"1f486-1f3fe-200d-2640-fe0f":["1f486-1f3fe",26,40,15],
		"1f486-1f3ff-200d-2640-fe0f":["1f486-1f3ff",26,41,15],
		"1f487-200d-2640-fe0f":["1f487",26,54,15],
		"1f487-1f3fb-200d-2640-fe0f":["1f487-1f3fb",26,55,15],
		"1f487-1f3fc-200d-2640-fe0f":["1f487-1f3fc",26,56,15],
		"1f487-1f3fd-200d-2640-fe0f":["1f487-1f3fd",26,57,15],
		"1f487-1f3fe-200d-2640-fe0f":["1f487-1f3fe",26,58,15],
		"1f487-1f3ff-200d-2640-fe0f":["1f487-1f3ff",26,59,15],
		"1f575-fe0f-200d-2642-fe0f":["1f575-fe0f",31,47,15],
		"1f575-1f3fb-200d-2642-fe0f":["1f575-1f3fb",31,48,15],
		"1f575-1f3fc-200d-2642-fe0f":["1f575-1f3fc",31,49,15],
		"1f575-1f3fd-200d-2642-fe0f":["1f575-1f3fd",31,50,15],
		"1f575-1f3fe-200d-2642-fe0f":["1f575-1f3fe",31,51,15],
		"1f575-1f3ff-200d-2642-fe0f":["1f575-1f3ff",31,52,15],
		"1f645-200d-2640-fe0f":["1f645",34,16,15],
		"1f645-1f3fb-200d-2640-fe0f":["1f645-1f3fb",34,17,15],
		"1f645-1f3fc-200d-2640-fe0f":["1f645-1f3fc",34,18,15],
		"1f645-1f3fd-200d-2640-fe0f":["1f645-1f3fd",34,19,15],
		"1f645-1f3fe-200d-2640-fe0f":["1f645-1f3fe",34,20,15],
		"1f645-1f3ff-200d-2640-fe0f":["1f645-1f3ff",34,21,15],
		"1f646-200d-2640-fe0f":["1f646",34,34,15],
		"1f646-1f3fb-200d-2640-fe0f":["1f646-1f3fb",34,35,15],
		"1f646-1f3fc-200d-2640-fe0f":["1f646-1f3fc",34,36,15],
		"1f646-1f3fd-200d-2640-fe0f":["1f646-1f3fd",34,37,15],
		"1f646-1f3fe-200d-2640-fe0f":["1f646-1f3fe",34,38,15],
		"1f646-1f3ff-200d-2640-fe0f":["1f646-1f3ff",34,39,15],
		"1f647-200d-2642-fe0f":["1f647",34,52,15],
		"1f647-1f3fb-200d-2642-fe0f":["1f647-1f3fb",34,53,15],
		"1f647-1f3fc-200d-2642-fe0f":["1f647-1f3fc",34,54,15],
		"1f647-1f3fd-200d-2642-fe0f":["1f647-1f3fd",34,55,15],
		"1f647-1f3fe-200d-2642-fe0f":["1f647-1f3fe",34,56,15],
		"1f647-1f3ff-200d-2642-fe0f":["1f647-1f3ff",34,57,15],
		"1f64b-200d-2640-fe0f":["1f64b",35,13,15],
		"1f64b-1f3fb-200d-2640-fe0f":["1f64b-1f3fb",35,14,15],
		"1f64b-1f3fc-200d-2640-fe0f":["1f64b-1f3fc",35,15,15],
		"1f64b-1f3fd-200d-2640-fe0f":["1f64b-1f3fd",35,16,15],
		"1f64b-1f3fe-200d-2640-fe0f":["1f64b-1f3fe",35,17,15],
		"1f64b-1f3ff-200d-2640-fe0f":["1f64b-1f3ff",35,18,15],
		"1f64d-200d-2640-fe0f":["1f64d",35,37,15],
		"1f64d-1f3fb-200d-2640-fe0f":["1f64d-1f3fb",35,38,15],
		"1f64d-1f3fc-200d-2640-fe0f":["1f64d-1f3fc",35,39,15],
		"1f64d-1f3fd-200d-2640-fe0f":["1f64d-1f3fd",35,40,15],
		"1f64d-1f3fe-200d-2640-fe0f":["1f64d-1f3fe",35,41,15],
		"1f64d-1f3ff-200d-2640-fe0f":["1f64d-1f3ff",35,42,15],
		"1f64e-200d-2640-fe0f":["1f64e",35,55,15],
		"1f64e-1f3fb-200d-2640-fe0f":["1f64e-1f3fb",35,56,15],
		"1f64e-1f3fc-200d-2640-fe0f":["1f64e-1f3fc",35,57,15],
		"1f64e-1f3fd-200d-2640-fe0f":["1f64e-1f3fd",35,58,15],
		"1f64e-1f3fe-200d-2640-fe0f":["1f64e-1f3fe",35,59,15],
		"1f64e-1f3ff-200d-2640-fe0f":["1f64e-1f3ff",36,0,15],
		"1f6a3-200d-2642-fe0f":["1f6a3",36,54,15],
		"1f6a3-1f3fb-200d-2642-fe0f":["1f6a3-1f3fb",36,55,15],
		"1f6a3-1f3fc-200d-2642-fe0f":["1f6a3-1f3fc",36,56,15],
		"1f6a3-1f3fd-200d-2642-fe0f":["1f6a3-1f3fd",36,57,15],
		"1f6a3-1f3fe-200d-2642-fe0f":["1f6a3-1f3fe",36,58,15],
		"1f6a3-1f3ff-200d-2642-fe0f":["1f6a3-1f3ff",36,59,15],
		"1f6b4-200d-2642-fe0f":["1f6b4",37,28,15],
		"1f6b4-1f3fb-200d-2642-fe0f":["1f6b4-1f3fb",37,29,15],
		"1f6b4-1f3fc-200d-2642-fe0f":["1f6b4-1f3fc",37,30,15],
		"1f6b4-1f3fd-200d-2642-fe0f":["1f6b4-1f3fd",37,31,15],
		"1f6b4-1f3fe-200d-2642-fe0f":["1f6b4-1f3fe",37,32,15],
		"1f6b4-1f3ff-200d-2642-fe0f":["1f6b4-1f3ff",37,33,15],
		"1f6b5-200d-2642-fe0f":["1f6b5",37,46,15],
		"1f6b5-1f3fb-200d-2642-fe0f":["1f6b5-1f3fb",37,47,15],
		"1f6b5-1f3fc-200d-2642-fe0f":["1f6b5-1f3fc",37,48,15],
		"1f6b5-1f3fd-200d-2642-fe0f":["1f6b5-1f3fd",37,49,15],
		"1f6b5-1f3fe-200d-2642-fe0f":["1f6b5-1f3fe",37,50,15],
		"1f6b5-1f3ff-200d-2642-fe0f":["1f6b5-1f3ff",37,51,15],
		"1f6b6-200d-2642-fe0f":["1f6b6",38,4,15],
		"1f6b6-1f3fb-200d-2642-fe0f":["1f6b6-1f3fb",38,5,15],
		"1f6b6-1f3fc-200d-2642-fe0f":["1f6b6-1f3fc",38,6,15],
		"1f6b6-1f3fd-200d-2642-fe0f":["1f6b6-1f3fd",38,7,15],
		"1f6b6-1f3fe-200d-2642-fe0f":["1f6b6-1f3fe",38,8,15],
		"1f6b6-1f3ff-200d-2642-fe0f":["1f6b6-1f3ff",38,9,15],
		"1f9d6-200d-2642-fe0f":["1f9d6",51,18,15],
		"1f9d6-1f3fb-200d-2642-fe0f":["1f9d6-1f3fb",51,19,15],
		"1f9d6-1f3fc-200d-2642-fe0f":["1f9d6-1f3fc",51,20,15],
		"1f9d6-1f3fd-200d-2642-fe0f":["1f9d6-1f3fd",51,21,15],
		"1f9d6-1f3fe-200d-2642-fe0f":["1f9d6-1f3fe",51,22,15],
		"1f9d6-1f3ff-200d-2642-fe0f":["1f9d6-1f3ff",51,23,15],
		"1f9d7-200d-2640-fe0f":["1f9d7",51,36,15],
		"1f9d7-1f3fb-200d-2640-fe0f":["1f9d7-1f3fb",51,37,15],
		"1f9d7-1f3fc-200d-2640-fe0f":["1f9d7-1f3fc",51,38,15],
		"1f9d7-1f3fd-200d-2640-fe0f":["1f9d7-1f3fd",51,39,15],
		"1f9d7-1f3fe-200d-2640-fe0f":["1f9d7-1f3fe",51,40,15],
		"1f9d7-1f3ff-200d-2640-fe0f":["1f9d7-1f3ff",51,41,15],
		"1f9d8-200d-2640-fe0f":["1f9d8",51,54,15],
		"1f9d8-1f3fb-200d-2640-fe0f":["1f9d8-1f3fb",51,55,15],
		"1f9d8-1f3fc-200d-2640-fe0f":["1f9d8-1f3fc",51,56,15],
		"1f9d8-1f3fd-200d-2640-fe0f":["1f9d8-1f3fd",51,57,15],
		"1f9d8-1f3fe-200d-2640-fe0f":["1f9d8-1f3fe",51,58,15],
		"1f9d8-1f3ff-200d-2640-fe0f":["1f9d8-1f3ff",51,59,15],
		"1f9d9-200d-2640-fe0f":["1f9d9",52,12,15],
		"1f9d9-1f3fb-200d-2640-fe0f":["1f9d9-1f3fb",52,13,15],
		"1f9d9-1f3fc-200d-2640-fe0f":["1f9d9-1f3fc",52,14,15],
		"1f9d9-1f3fd-200d-2640-fe0f":["1f9d9-1f3fd",52,15,15],
		"1f9d9-1f3fe-200d-2640-fe0f":["1f9d9-1f3fe",52,16,15],
		"1f9d9-1f3ff-200d-2640-fe0f":["1f9d9-1f3ff",52,17,15],
		"1f9da-200d-2640-fe0f":["1f9da",52,30,15],
		"1f9da-1f3fb-200d-2640-fe0f":["1f9da-1f3fb",52,31,15],
		"1f9da-1f3fc-200d-2640-fe0f":["1f9da-1f3fc",52,32,15],
		"1f9da-1f3fd-200d-2640-fe0f":["1f9da-1f3fd",52,33,15],
		"1f9da-1f3fe-200d-2640-fe0f":["1f9da-1f3fe",52,34,15],
		"1f9da-1f3ff-200d-2640-fe0f":["1f9da-1f3ff",52,35,15],
		"1f9db-200d-2640-fe0f":["1f9db",52,48,15],
		"1f9db-1f3fb-200d-2640-fe0f":["1f9db-1f3fb",52,49,15],
		"1f9db-1f3fc-200d-2640-fe0f":["1f9db-1f3fc",52,50,15],
		"1f9db-1f3fd-200d-2640-fe0f":["1f9db-1f3fd",52,51,15],
		"1f9db-1f3fe-200d-2640-fe0f":["1f9db-1f3fe",52,52,15],
		"1f9db-1f3ff-200d-2640-fe0f":["1f9db-1f3ff",52,53,15],
		"1f9dc-200d-2642-fe0f":["1f9dc",53,6,15],
		"1f9dc-1f3fb-200d-2642-fe0f":["1f9dc-1f3fb",53,7,15],
		"1f9dc-1f3fc-200d-2642-fe0f":["1f9dc-1f3fc",53,8,15],
		"1f9dc-1f3fd-200d-2642-fe0f":["1f9dc-1f3fd",53,9,15],
		"1f9dc-1f3fe-200d-2642-fe0f":["1f9dc-1f3fe",53,10,15],
		"1f9dc-1f3ff-200d-2642-fe0f":["1f9dc-1f3ff",53,11,15],
		"1f9dd-200d-2642-fe0f":["1f9dd",53,24,15],
		"1f9dd-1f3fb-200d-2642-fe0f":["1f9dd-1f3fb",53,25,15],
		"1f9dd-1f3fc-200d-2642-fe0f":["1f9dd-1f3fc",53,26,15],
		"1f9dd-1f3fd-200d-2642-fe0f":["1f9dd-1f3fd",53,27,15],
		"1f9dd-1f3fe-200d-2642-fe0f":["1f9dd-1f3fe",53,28,15],
		"1f9dd-1f3ff-200d-2642-fe0f":["1f9dd-1f3ff",53,29,15],
		"1f9de-200d-2642-fe0f":["1f9de",53,32,15],
		"1f9df-200d-2642-fe0f":["1f9df",53,35,15],
		"26f9-fe0f-200d-2642-fe0f":["26f9-fe0f",57,21,15],
		"26f9-1f3fb-200d-2642-fe0f":["26f9-1f3fb",57,22,15],
		"26f9-1f3fc-200d-2642-fe0f":["26f9-1f3fc",57,23,15],
		"26f9-1f3fd-200d-2642-fe0f":["26f9-1f3fd",57,24,15],
		"26f9-1f3fe-200d-2642-fe0f":["26f9-1f3fe",57,25,15],
		"26f9-1f3ff-200d-2642-fe0f":["26f9-1f3ff",57,26,15]
	};


	// export
	if (true){
		if ( true && module.exports){
			exports = module.exports = emoji;
		}
		exports.EmojiConvertor = emoji;
	}else {}

}).call(function(){
	return this || (typeof window !== 'undefined' ? window : global);
}());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)))

/***/ }),
/* 6 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"People\",\"emojis\":[{\"no\":6,\"code\":\"1F604\",\"char\":\"😄\",\"name\":\"grinning face with smiling eyes\"},{\"no\":5,\"code\":\"1F603\",\"char\":\"😃\",\"name\":\"grinning face with big eyes\"},{\"no\":1,\"code\":\"1F600\",\"char\":\"😀\",\"name\":\"grinning face\"},{\"no\":10,\"code\":\"1F60A\",\"char\":\"😊\",\"name\":\"smiling face with smiling eyes\"},{\"no\":9,\"code\":\"1F609\",\"char\":\"😉\",\"name\":\"winking face\"},{\"no\":13,\"code\":\"1F60D\",\"char\":\"😍\",\"name\":\"smiling face with heart-eyes\"},{\"no\":14,\"code\":\"1F618\",\"char\":\"😘\",\"name\":\"face blowing a kiss\"},{\"no\":17,\"code\":\"1F61A\",\"char\":\"😚\",\"name\":\"kissing face with closed eyes\"},{\"no\":15,\"code\":\"1F617\",\"char\":\"😗\",\"name\":\"kissing face\"},{\"no\":16,\"code\":\"1F619\",\"char\":\"😙\",\"name\":\"kissing face with smiling eyes\"},{\"no\":39,\"code\":\"1F61C\",\"char\":\"😜\",\"name\":\"winking face with tongue\"},{\"no\":40,\"code\":\"1F61D\",\"char\":\"😝\",\"name\":\"squinting face with tongue\"},{\"no\":38,\"code\":\"1F61B\",\"char\":\"😛\",\"name\":\"face with tongue\"},{\"no\":65,\"code\":\"1F633\",\"char\":\"😳\",\"name\":\"flushed face\"},{\"no\":2,\"code\":\"1F601\",\"char\":\"😁\",\"name\":\"beaming face with smiling eyes\"},{\"no\":44,\"code\":\"1F614\",\"char\":\"😔\",\"name\":\"pensive face\"},{\"no\":37,\"code\":\"1F60C\",\"char\":\"😌\",\"name\":\"relieved face\"},{\"no\":42,\"code\":\"1F612\",\"char\":\"😒\",\"name\":\"unamused face\"},{\"no\":52,\"code\":\"1F61E\",\"char\":\"😞\",\"name\":\"disappointed face\"},{\"no\":29,\"code\":\"1F623\",\"char\":\"😣\",\"name\":\"persevering face\"},{\"no\":55,\"code\":\"1F622\",\"char\":\"😢\",\"name\":\"crying face\"},{\"no\":3,\"code\":\"1F602\",\"char\":\"😂\",\"name\":\"face with tears of joy\"},{\"no\":56,\"code\":\"1F62D\",\"char\":\"😭\",\"name\":\"loudly crying face\"},{\"no\":34,\"code\":\"1F62A\",\"char\":\"😪\",\"name\":\"sleepy face\"},{\"no\":30,\"code\":\"1F625\",\"char\":\"😥\",\"name\":\"sad but relieved face\"},{\"no\":63,\"code\":\"1F630\",\"char\":\"😰\",\"name\":\"anxious face with sweat\"},{\"no\":7,\"code\":\"1F605\",\"char\":\"😅\",\"name\":\"grinning face with sweat\"},{\"no\":43,\"code\":\"1F613\",\"char\":\"😓\",\"name\":\"downcast face with sweat\"},{\"no\":60,\"code\":\"1F629\",\"char\":\"😩\",\"name\":\"weary face\"},{\"no\":35,\"code\":\"1F62B\",\"char\":\"😫\",\"name\":\"tired face\"},{\"no\":59,\"code\":\"1F628\",\"char\":\"😨\",\"name\":\"fearful face\"},{\"no\":64,\"code\":\"1F631\",\"char\":\"😱\",\"name\":\"face screaming in fear\"},{\"no\":69,\"code\":\"1F620\",\"char\":\"😠\",\"name\":\"angry face\"},{\"no\":68,\"code\":\"1F621\",\"char\":\"😡\",\"name\":\"pouting face\"},{\"no\":54,\"code\":\"1F624\",\"char\":\"😤\",\"name\":\"face with steam from nose\"},{\"no\":51,\"code\":\"1F616\",\"char\":\"😖\",\"name\":\"confounded face\"},{\"no\":8,\"code\":\"1F606\",\"char\":\"😆\",\"name\":\"grinning squinting face\"},{\"no\":11,\"code\":\"1F60B\",\"char\":\"😋\",\"name\":\"face savoring food\"},{\"no\":71,\"code\":\"1F637\",\"char\":\"😷\",\"name\":\"face with medical mask\"},{\"no\":12,\"code\":\"1F60E\",\"char\":\"😎\",\"name\":\"smiling face with sunglasses\"},{\"no\":36,\"code\":\"1F634\",\"char\":\"😴\",\"name\":\"sleeping face\"},{\"no\":67,\"code\":\"1F635\",\"char\":\"😵\",\"name\":\"dizzy face\"},{\"no\":48,\"code\":\"1F632\",\"char\":\"😲\",\"name\":\"astonished face\"},{\"no\":53,\"code\":\"1F61F\",\"char\":\"😟\",\"name\":\"worried face\"},{\"no\":57,\"code\":\"1F626\",\"char\":\"😦\",\"name\":\"frowning face with open mouth\"},{\"no\":58,\"code\":\"1F627\",\"char\":\"😧\",\"name\":\"anguished face\"},{\"no\":86,\"code\":\"1F47F\",\"char\":\"👿\",\"name\":\"angry face with horns\"},{\"no\":31,\"code\":\"1F62E\",\"char\":\"😮\",\"name\":\"face with open mouth\"},{\"no\":62,\"code\":\"1F62C\",\"char\":\"😬\",\"name\":\"grimacing face\"},{\"no\":24,\"code\":\"1F610\",\"char\":\"😐\",\"name\":\"neutral face\"},{\"no\":45,\"code\":\"1F615\",\"char\":\"😕\",\"name\":\"confused face\"},{\"no\":33,\"code\":\"1F62F\",\"char\":\"😯\",\"name\":\"hushed face\"},{\"no\":28,\"code\":\"1F60F\",\"char\":\"😏\",\"name\":\"smirking face\"},{\"no\":25,\"code\":\"1F611\",\"char\":\"😑\",\"name\":\"expressionless face\"},{\"no\":462,\"code\":\"1F472\",\"char\":\"👲\",\"name\":\"man with Chinese cap\"},{\"no\":444,\"code\":\"1F473\",\"char\":\"👳\",\"name\":\"person wearing turban\"},{\"no\":360,\"code\":\"1F46E\",\"char\":\"👮\",\"name\":\"police officer\"},{\"no\":414,\"code\":\"1F477\",\"char\":\"👷\",\"name\":\"construction worker\"},{\"no\":396,\"code\":\"1F482\",\"char\":\"💂\",\"name\":\"guard\"},{\"no\":108,\"code\":\"1F476\",\"char\":\"👶\",\"name\":\"baby\"},{\"no\":120,\"code\":\"1F466\",\"char\":\"👦\",\"name\":\"boy\"},{\"no\":126,\"code\":\"1F467\",\"char\":\"👧\",\"name\":\"girl\"},{\"no\":138,\"code\":\"1F468\",\"char\":\"👨\",\"name\":\"man\"},{\"no\":144,\"code\":\"1F469\",\"char\":\"👩\",\"name\":\"woman\"},{\"no\":156,\"code\":\"1F474\",\"char\":\"👴\",\"name\":\"old man\"},{\"no\":162,\"code\":\"1F475\",\"char\":\"👵\",\"name\":\"old woman\"},{\"no\":480,\"code\":\"1F471\",\"char\":\"👱\",\"name\":\"blond-haired person\"},{\"no\":522,\"code\":\"1F47C\",\"char\":\"👼\",\"name\":\"baby angel\"},{\"no\":438,\"code\":\"1F478\",\"char\":\"👸\",\"name\":\"princess\"},{\"no\":96,\"code\":\"1F63A\",\"char\":\"😺\",\"name\":\"grinning cat face\"},{\"no\":97,\"code\":\"1F638\",\"char\":\"😸\",\"name\":\"grinning cat face with smiling eyes\"},{\"no\":99,\"code\":\"1F63B\",\"char\":\"😻\",\"name\":\"smiling cat face with heart-eyes\"},{\"no\":101,\"code\":\"1F63D\",\"char\":\"😽\",\"name\":\"kissing cat face\"},{\"no\":100,\"code\":\"1F63C\",\"char\":\"😼\",\"name\":\"cat face with wry smile\"},{\"no\":102,\"code\":\"1F640\",\"char\":\"🙀\",\"name\":\"weary cat face\"},{\"no\":103,\"code\":\"1F63F\",\"char\":\"😿\",\"name\":\"crying cat face\"},{\"no\":98,\"code\":\"1F639\",\"char\":\"😹\",\"name\":\"cat face with tears of joy\"},{\"no\":104,\"code\":\"1F63E\",\"char\":\"😾\",\"name\":\"pouting cat face\"},{\"no\":87,\"code\":\"1F479\",\"char\":\"👹\",\"name\":\"ogre\"},{\"no\":88,\"code\":\"1F47A\",\"char\":\"👺\",\"name\":\"goblin\"},{\"no\":105,\"code\":\"1F648\",\"char\":\"🙈\",\"name\":\"see-no-evil monkey\"},{\"no\":106,\"code\":\"1F649\",\"char\":\"🙉\",\"name\":\"hear-no-evil monkey\"},{\"no\":107,\"code\":\"1F64A\",\"char\":\"🙊\",\"name\":\"speak-no-evil monkey\"},{\"no\":89,\"code\":\"1F480\",\"char\":\"💀\",\"name\":\"skull\"},{\"no\":92,\"code\":\"1F47D\",\"char\":\"👽\",\"name\":\"alien\"},{\"no\":95,\"code\":\"1F4A9\",\"char\":\"💩\",\"name\":\"pile of poo\"},{\"no\":1927,\"code\":\"1F525\",\"char\":\"🔥\",\"name\":\"fire\"},{\"no\":1934,\"code\":\"2728\",\"char\":\"✨\",\"name\":\"sparkles\"},{\"no\":1902,\"code\":\"1F31F\",\"char\":\"🌟\",\"name\":\"glowing star\"},{\"no\":1469,\"code\":\"1F4AB\",\"char\":\"💫\",\"name\":\"dizzy\"},{\"no\":1466,\"code\":\"1F4A5\",\"char\":\"💥\",\"name\":\"collision\"},{\"no\":1464,\"code\":\"1F4A2\",\"char\":\"💢\",\"name\":\"anger symbol\"},{\"no\":1467,\"code\":\"1F4A6\",\"char\":\"💦\",\"name\":\"sweat droplets\"},{\"no\":1928,\"code\":\"1F4A7\",\"char\":\"💧\",\"name\":\"droplet\"},{\"no\":1463,\"code\":\"1F4A4\",\"char\":\"💤\",\"name\":\"zzz\"},{\"no\":1468,\"code\":\"1F4A8\",\"char\":\"💨\",\"name\":\"dashing away\"},{\"no\":1425,\"code\":\"1F442\",\"char\":\"👂\",\"name\":\"ear\"},{\"no\":1438,\"code\":\"1F440\",\"char\":\"👀\",\"name\":\"eyes\"},{\"no\":1431,\"code\":\"1F443\",\"char\":\"👃\",\"name\":\"nose\"},{\"no\":1442,\"code\":\"1F445\",\"char\":\"👅\",\"name\":\"tongue\"},{\"no\":1443,\"code\":\"1F444\",\"char\":\"👄\",\"name\":\"mouth\"},{\"no\":1328,\"code\":\"1F44D\",\"char\":\"👍\",\"name\":\"thumbs up\"},{\"no\":1334,\"code\":\"1F44E\",\"char\":\"👎\",\"name\":\"thumbs down\"},{\"no\":1322,\"code\":\"1F44C\",\"char\":\"👌\",\"name\":\"OK hand\"},{\"no\":1346,\"code\":\"1F44A\",\"char\":\"👊\",\"name\":\"oncoming fist\"},{\"no\":1340,\"code\":\"270A\",\"char\":\"✊\",\"name\":\"raised fist\"},{\"no\":1370,\"code\":\"1F44B\",\"char\":\"👋\",\"name\":\"waving hand\"},{\"no\":1316,\"code\":\"270B\",\"char\":\"✋\",\"name\":\"raised hand\"},{\"no\":1394,\"code\":\"1F450\",\"char\":\"👐\",\"name\":\"open hands\"},{\"no\":1262,\"code\":\"1F446\",\"char\":\"👆\",\"name\":\"backhand index pointing up\"},{\"no\":1274,\"code\":\"1F447\",\"char\":\"👇\",\"name\":\"backhand index pointing down\"},{\"no\":1250,\"code\":\"1F449\",\"char\":\"👉\",\"name\":\"backhand index pointing right\"},{\"no\":1244,\"code\":\"1F448\",\"char\":\"👈\",\"name\":\"backhand index pointing left\"},{\"no\":1400,\"code\":\"1F64C\",\"char\":\"🙌\",\"name\":\"raising hands\"},{\"no\":1412,\"code\":\"1F64F\",\"char\":\"🙏\",\"name\":\"folded hands\"},{\"no\":1388,\"code\":\"1F44F\",\"char\":\"👏\",\"name\":\"clapping hands\"},{\"no\":1238,\"code\":\"1F4AA\",\"char\":\"💪\",\"name\":\"flexed biceps\"},{\"no\":834,\"code\":\"1F6B6\",\"char\":\"🚶\",\"name\":\"person walking\"},{\"no\":852,\"code\":\"1F3C3\",\"char\":\"🏃\",\"name\":\"person running\"},{\"no\":870,\"code\":\"1F483\",\"char\":\"💃\",\"name\":\"woman dancing\"},{\"no\":1195,\"code\":\"1F46B\",\"char\":\"👫\",\"name\":\"man and woman holding hands\"},{\"no\":1206,\"code\":\"1F46A\",\"char\":\"👪\",\"name\":\"family\"},{\"no\":1198,\"code\":\"1F48F\",\"char\":\"💏\",\"name\":\"kiss\"},{\"no\":1202,\"code\":\"1F491\",\"char\":\"💑\",\"name\":\"couple with heart\"},{\"no\":882,\"code\":\"1F46F\",\"char\":\"👯\",\"name\":\"people with bunny ears\"},{\"no\":690,\"code\":\"1F646\",\"char\":\"🙆\",\"name\":\"person gesturing OK\"},{\"no\":672,\"code\":\"1F645\",\"char\":\"🙅\",\"name\":\"person gesturing NO\"},{\"no\":708,\"code\":\"1F481\",\"char\":\"💁\",\"name\":\"person tipping hand\"},{\"no\":726,\"code\":\"1F64B\",\"char\":\"🙋\",\"name\":\"person raising hand\"},{\"no\":798,\"code\":\"1F486\",\"char\":\"💆\",\"name\":\"person getting massage\"},{\"no\":816,\"code\":\"1F487\",\"char\":\"💇\",\"name\":\"person getting haircut\"},{\"no\":1419,\"code\":\"1F485\",\"char\":\"💅\",\"name\":\"nail polish\"},{\"no\":504,\"code\":\"1F470\",\"char\":\"👰\",\"name\":\"bride with veil\"},{\"no\":654,\"code\":\"1F64E\",\"char\":\"🙎\",\"name\":\"person pouting\"},{\"no\":636,\"code\":\"1F64D\",\"char\":\"🙍\",\"name\":\"person frowning\"},{\"no\":744,\"code\":\"1F647\",\"char\":\"🙇\",\"name\":\"person bowing\"},{\"no\":1500,\"code\":\"1F3A9\",\"char\":\"🎩\",\"name\":\"top hat\"},{\"no\":1498,\"code\":\"1F451\",\"char\":\"👑\",\"name\":\"crown\"},{\"no\":1499,\"code\":\"1F452\",\"char\":\"👒\",\"name\":\"woman’s hat\"},{\"no\":1494,\"code\":\"1F45F\",\"char\":\"👟\",\"name\":\"running shoe\"},{\"no\":1493,\"code\":\"1F45E\",\"char\":\"👞\",\"name\":\"man’s shoe\"},{\"no\":1496,\"code\":\"1F461\",\"char\":\"👡\",\"name\":\"woman’s sandal\"},{\"no\":1495,\"code\":\"1F460\",\"char\":\"👠\",\"name\":\"high-heeled shoe\"},{\"no\":1497,\"code\":\"1F462\",\"char\":\"👢\",\"name\":\"woman’s boot\"},{\"no\":1478,\"code\":\"1F455\",\"char\":\"👕\",\"name\":\"t-shirt\"},{\"no\":1477,\"code\":\"1F454\",\"char\":\"👔\",\"name\":\"necktie\"},{\"no\":1487,\"code\":\"1F45A\",\"char\":\"👚\",\"name\":\"woman’s clothes\"},{\"no\":1484,\"code\":\"1F457\",\"char\":\"👗\",\"name\":\"dress\"},{\"no\":1976,\"code\":\"1F3BD\",\"char\":\"🎽\",\"name\":\"running shirt\"},{\"no\":1479,\"code\":\"1F456\",\"char\":\"👖\",\"name\":\"jeans\"},{\"no\":1485,\"code\":\"1F458\",\"char\":\"👘\",\"name\":\"kimono\"},{\"no\":1486,\"code\":\"1F459\",\"char\":\"👙\",\"name\":\"bikini\"},{\"no\":2097,\"code\":\"1F4BC\",\"char\":\"💼\",\"name\":\"briefcase\"},{\"no\":1489,\"code\":\"1F45C\",\"char\":\"👜\",\"name\":\"handbag\"},{\"no\":1490,\"code\":\"1F45D\",\"char\":\"👝\",\"name\":\"clutch bag\"},{\"no\":1488,\"code\":\"1F45B\",\"char\":\"👛\",\"name\":\"purse\"},{\"no\":1475,\"code\":\"1F453\",\"char\":\"👓\",\"name\":\"glasses\"},{\"no\":1944,\"code\":\"1F380\",\"char\":\"🎀\",\"name\":\"ribbon\"},{\"no\":1918,\"code\":\"1F302\",\"char\":\"🌂\",\"name\":\"closed umbrella\"},{\"no\":1505,\"code\":\"1F484\",\"char\":\"💄\",\"name\":\"lipstick\"},{\"no\":1454,\"code\":\"1F49B\",\"char\":\"💛\",\"name\":\"yellow heart\"},{\"no\":1452,\"code\":\"1F499\",\"char\":\"💙\",\"name\":\"blue heart\"},{\"no\":1456,\"code\":\"1F49C\",\"char\":\"💜\",\"name\":\"purple heart\"},{\"no\":1453,\"code\":\"1F49A\",\"char\":\"💚\",\"name\":\"green heart\"},{\"no\":1448,\"code\":\"1F494\",\"char\":\"💔\",\"name\":\"broken heart\"},{\"no\":1451,\"code\":\"1F497\",\"char\":\"💗\",\"name\":\"growing heart\"},{\"no\":1447,\"code\":\"1F493\",\"char\":\"💓\",\"name\":\"beating heart\"},{\"no\":1449,\"code\":\"1F495\",\"char\":\"💕\",\"name\":\"two hearts\"},{\"no\":1450,\"code\":\"1F496\",\"char\":\"💖\",\"name\":\"sparkling heart\"},{\"no\":1459,\"code\":\"1F49E\",\"char\":\"💞\",\"name\":\"revolving hearts\"},{\"no\":1445,\"code\":\"1F498\",\"char\":\"💘\",\"name\":\"heart with arrow\"},{\"no\":1462,\"code\":\"1F48C\",\"char\":\"💌\",\"name\":\"love letter\"},{\"no\":1444,\"code\":\"1F48B\",\"char\":\"💋\",\"name\":\"kiss mark\"},{\"no\":1506,\"code\":\"1F48D\",\"char\":\"💍\",\"name\":\"ring\"},{\"no\":1507,\"code\":\"1F48E\",\"char\":\"💎\",\"name\":\"gem stone\"},{\"no\":958,\"code\":\"1F464\",\"char\":\"👤\",\"name\":\"bust in silhouette\"},{\"no\":1470,\"code\":\"1F4AC\",\"char\":\"💬\",\"name\":\"speech balloon\"},{\"no\":1437,\"code\":\"1F463\",\"char\":\"👣\",\"name\":\"footprints\"}]},{\"name\":\"Nature\",\"emojis\":[{\"no\":1511,\"code\":\"1F436\",\"char\":\"🐶\",\"name\":\"dog face\"},{\"no\":1514,\"code\":\"1F43A\",\"char\":\"🐺\",\"name\":\"wolf face\"},{\"no\":1516,\"code\":\"1F431\",\"char\":\"🐱\",\"name\":\"cat face\"},{\"no\":1543,\"code\":\"1F42D\",\"char\":\"🐭\",\"name\":\"mouse face\"},{\"no\":1546,\"code\":\"1F439\",\"char\":\"🐹\",\"name\":\"hamster face\"},{\"no\":1547,\"code\":\"1F430\",\"char\":\"🐰\",\"name\":\"rabbit face\"},{\"no\":1568,\"code\":\"1F438\",\"char\":\"🐸\",\"name\":\"frog face\"},{\"no\":1519,\"code\":\"1F42F\",\"char\":\"🐯\",\"name\":\"tiger face\"},{\"no\":1553,\"code\":\"1F428\",\"char\":\"🐨\",\"name\":\"koala\"},{\"no\":1552,\"code\":\"1F43B\",\"char\":\"🐻\",\"name\":\"bear face\"},{\"no\":1531,\"code\":\"1F437\",\"char\":\"🐷\",\"name\":\"pig face\"},{\"no\":1534,\"code\":\"1F43D\",\"char\":\"🐽\",\"name\":\"pig nose\"},{\"no\":1527,\"code\":\"1F42E\",\"char\":\"🐮\",\"name\":\"cow face\"},{\"no\":1533,\"code\":\"1F417\",\"char\":\"🐗\",\"name\":\"boar\"},{\"no\":1508,\"code\":\"1F435\",\"char\":\"🐵\",\"name\":\"monkey face\"},{\"no\":1509,\"code\":\"1F412\",\"char\":\"🐒\",\"name\":\"monkey\"},{\"no\":1522,\"code\":\"1F434\",\"char\":\"🐴\",\"name\":\"horse face\"},{\"no\":1536,\"code\":\"1F411\",\"char\":\"🐑\",\"name\":\"ewe\"},{\"no\":1541,\"code\":\"1F418\",\"char\":\"🐘\",\"name\":\"elephant\"},{\"no\":1554,\"code\":\"1F43C\",\"char\":\"🐼\",\"name\":\"panda face\"},{\"no\":1563,\"code\":\"1F427\",\"char\":\"🐧\",\"name\":\"penguin\"},{\"no\":1562,\"code\":\"1F426\",\"char\":\"🐦\",\"name\":\"bird\"},{\"no\":1560,\"code\":\"1F424\",\"char\":\"🐤\",\"name\":\"baby chick\"},{\"no\":1561,\"code\":\"1F425\",\"char\":\"🐥\",\"name\":\"front-facing baby chick\"},{\"no\":1559,\"code\":\"1F423\",\"char\":\"🐣\",\"name\":\"hatching chick\"},{\"no\":1557,\"code\":\"1F414\",\"char\":\"🐔\",\"name\":\"chicken\"},{\"no\":1572,\"code\":\"1F40D\",\"char\":\"🐍\",\"name\":\"snake\"},{\"no\":1570,\"code\":\"1F422\",\"char\":\"🐢\",\"name\":\"turtle\"},{\"no\":1591,\"code\":\"1F41B\",\"char\":\"🐛\",\"name\":\"bug\"},{\"no\":1593,\"code\":\"1F41D\",\"char\":\"🐝\",\"name\":\"honeybee\"},{\"no\":1592,\"code\":\"1F41C\",\"char\":\"🐜\",\"name\":\"ant\"},{\"no\":1594,\"code\":\"1F41E\",\"char\":\"🐞\",\"name\":\"lady beetle\"},{\"no\":1589,\"code\":\"1F40C\",\"char\":\"🐌\",\"name\":\"snail\"},{\"no\":1584,\"code\":\"1F419\",\"char\":\"🐙\",\"name\":\"octopus\"},{\"no\":1585,\"code\":\"1F41A\",\"char\":\"🐚\",\"name\":\"spiral shell\"},{\"no\":1581,\"code\":\"1F420\",\"char\":\"🐠\",\"name\":\"tropical fish\"},{\"no\":1580,\"code\":\"1F41F\",\"char\":\"🐟\",\"name\":\"fish\"},{\"no\":1579,\"code\":\"1F42C\",\"char\":\"🐬\",\"name\":\"dolphin\"},{\"no\":1577,\"code\":\"1F433\",\"char\":\"🐳\",\"name\":\"spouting whale\"},{\"no\":1523,\"code\":\"1F40E\",\"char\":\"🐎\",\"name\":\"horse\"},{\"no\":1573,\"code\":\"1F432\",\"char\":\"🐲\",\"name\":\"dragon face\"},{\"no\":1582,\"code\":\"1F421\",\"char\":\"🐡\",\"name\":\"blowfish\"},{\"no\":1539,\"code\":\"1F42B\",\"char\":\"🐫\",\"name\":\"two-hump camel\"},{\"no\":1513,\"code\":\"1F429\",\"char\":\"🐩\",\"name\":\"poodle\"},{\"no\":1555,\"code\":\"1F43E\",\"char\":\"🐾\",\"name\":\"paw prints\"},{\"no\":1599,\"code\":\"1F490\",\"char\":\"💐\",\"name\":\"bouquet\"},{\"no\":1600,\"code\":\"1F338\",\"char\":\"🌸\",\"name\":\"cherry blossom\"},{\"no\":1608,\"code\":\"1F337\",\"char\":\"🌷\",\"name\":\"tulip\"},{\"no\":1617,\"code\":\"1F340\",\"char\":\"🍀\",\"name\":\"four leaf clover\"},{\"no\":1603,\"code\":\"1F339\",\"char\":\"🌹\",\"name\":\"rose\"},{\"no\":1606,\"code\":\"1F33B\",\"char\":\"🌻\",\"name\":\"sunflower\"},{\"no\":1605,\"code\":\"1F33A\",\"char\":\"🌺\",\"name\":\"hibiscus\"},{\"no\":1618,\"code\":\"1F341\",\"char\":\"🍁\",\"name\":\"maple leaf\"},{\"no\":1620,\"code\":\"1F343\",\"char\":\"🍃\",\"name\":\"leaf fluttering in wind\"},{\"no\":1619,\"code\":\"1F342\",\"char\":\"🍂\",\"name\":\"fallen leaf\"},{\"no\":1615,\"code\":\"1F33F\",\"char\":\"🌿\",\"name\":\"herb\"},{\"no\":1614,\"code\":\"1F33E\",\"char\":\"🌾\",\"name\":\"sheaf of rice\"},{\"no\":1645,\"code\":\"1F344\",\"char\":\"🍄\",\"name\":\"mushroom\"},{\"no\":1613,\"code\":\"1F335\",\"char\":\"🌵\",\"name\":\"cactus\"},{\"no\":1612,\"code\":\"1F334\",\"char\":\"🌴\",\"name\":\"palm tree\"},{\"no\":1647,\"code\":\"1F330\",\"char\":\"🌰\",\"name\":\"chestnut\"},{\"no\":1609,\"code\":\"1F331\",\"char\":\"🌱\",\"name\":\"seedling\"},{\"no\":1607,\"code\":\"1F33C\",\"char\":\"🌼\",\"name\":\"blossom\"},{\"no\":1885,\"code\":\"1F311\",\"char\":\"🌑\",\"name\":\"new moon\"},{\"no\":1887,\"code\":\"1F313\",\"char\":\"🌓\",\"name\":\"first quarter moon\"},{\"no\":1888,\"code\":\"1F314\",\"char\":\"🌔\",\"name\":\"waxing gibbous moon\"},{\"no\":1889,\"code\":\"1F315\",\"char\":\"🌕\",\"name\":\"full moon\"},{\"no\":1895,\"code\":\"1F31B\",\"char\":\"🌛\",\"name\":\"first quarter moon face\"},{\"no\":1893,\"code\":\"1F319\",\"char\":\"🌙\",\"name\":\"crescent moon\"},{\"no\":1725,\"code\":\"1F30F\",\"char\":\"🌏\",\"name\":\"globe showing Asia-Australia\"},{\"no\":1731,\"code\":\"1F30B\",\"char\":\"🌋\",\"name\":\"volcano\"},{\"no\":1777,\"code\":\"1F30C\",\"char\":\"🌌\",\"name\":\"milky way\"},{\"no\":1903,\"code\":\"1F320\",\"char\":\"🌠\",\"name\":\"shooting star\"},{\"no\":1905,\"code\":\"26C5\",\"char\":\"⛅\",\"name\":\"sun behind cloud\"},{\"no\":1925,\"code\":\"26C4\",\"char\":\"⛄\",\"name\":\"snowman without snow\"},{\"no\":1916,\"code\":\"1F300\",\"char\":\"🌀\",\"name\":\"cyclone\"},{\"no\":1769,\"code\":\"1F301\",\"char\":\"🌁\",\"name\":\"foggy\"},{\"no\":1917,\"code\":\"1F308\",\"char\":\"🌈\",\"name\":\"rainbow\"},{\"no\":1929,\"code\":\"1F30A\",\"char\":\"🌊\",\"name\":\"water wave\"}]},{\"name\":\"Objects\",\"emojis\":[{\"no\":1939,\"code\":\"1F38D\",\"char\":\"🎍\",\"name\":\"pine decoration\"},{\"no\":1458,\"code\":\"1F49D\",\"char\":\"💝\",\"name\":\"heart with ribbon\"},{\"no\":1940,\"code\":\"1F38E\",\"char\":\"🎎\",\"name\":\"Japanese dolls\"},{\"no\":1492,\"code\":\"1F392\",\"char\":\"🎒\",\"name\":\"school backpack\"},{\"no\":1501,\"code\":\"1F393\",\"char\":\"🎓\",\"name\":\"graduation cap\"},{\"no\":1941,\"code\":\"1F38F\",\"char\":\"🎏\",\"name\":\"carp streamer\"},{\"no\":1932,\"code\":\"1F386\",\"char\":\"🎆\",\"name\":\"fireworks\"},{\"no\":1933,\"code\":\"1F387\",\"char\":\"🎇\",\"name\":\"sparkler\"},{\"no\":1942,\"code\":\"1F390\",\"char\":\"🎐\",\"name\":\"wind chime\"},{\"no\":1943,\"code\":\"1F391\",\"char\":\"🎑\",\"name\":\"moon viewing ceremony\"},{\"no\":1930,\"code\":\"1F383\",\"char\":\"🎃\",\"name\":\"jack-o-lantern\"},{\"no\":91,\"code\":\"1F47B\",\"char\":\"👻\",\"name\":\"ghost\"},{\"no\":528,\"code\":\"1F385\",\"char\":\"🎅\",\"name\":\"Santa Claus\"},{\"no\":1931,\"code\":\"1F384\",\"char\":\"🎄\",\"name\":\"Christmas tree\"},{\"no\":1945,\"code\":\"1F381\",\"char\":\"🎁\",\"name\":\"wrapped gift\"},{\"no\":1938,\"code\":\"1F38B\",\"char\":\"🎋\",\"name\":\"tanabata tree\"},{\"no\":1936,\"code\":\"1F389\",\"char\":\"🎉\",\"name\":\"party popper\"},{\"no\":1937,\"code\":\"1F38A\",\"char\":\"🎊\",\"name\":\"confetti ball\"},{\"no\":1935,\"code\":\"1F388\",\"char\":\"🎈\",\"name\":\"balloon\"},{\"no\":2359,\"code\":\"1F38C\",\"char\":\"🎌\",\"name\":\"crossed flags\"},{\"no\":2150,\"code\":\"1F52E\",\"char\":\"🔮\",\"name\":\"crystal ball\"},{\"no\":2032,\"code\":\"1F3A5\",\"char\":\"🎥\",\"name\":\"movie camera\"},{\"no\":2037,\"code\":\"1F4F7\",\"char\":\"📷\",\"name\":\"camera\"},{\"no\":2039,\"code\":\"1F4F9\",\"char\":\"📹\",\"name\":\"video camera\"},{\"no\":2040,\"code\":\"1F4FC\",\"char\":\"📼\",\"name\":\"videocassette\"},{\"no\":2030,\"code\":\"1F4BF\",\"char\":\"💿\",\"name\":\"optical disk\"},{\"no\":2031,\"code\":\"1F4C0\",\"char\":\"📀\",\"name\":\"dvd\"},{\"no\":2028,\"code\":\"1F4BD\",\"char\":\"💽\",\"name\":\"computer disk\"},{\"no\":2029,\"code\":\"1F4BE\",\"char\":\"💾\",\"name\":\"floppy disk\"},{\"no\":2022,\"code\":\"1F4BB\",\"char\":\"💻\",\"name\":\"laptop computer\"},{\"no\":2014,\"code\":\"1F4F1\",\"char\":\"📱\",\"name\":\"mobile phone\"},{\"no\":2017,\"code\":\"1F4DE\",\"char\":\"📞\",\"name\":\"telephone receiver\"},{\"no\":2018,\"code\":\"1F4DF\",\"char\":\"📟\",\"name\":\"pager\"},{\"no\":2019,\"code\":\"1F4E0\",\"char\":\"📠\",\"name\":\"fax machine\"},{\"no\":2045,\"code\":\"1F4E1\",\"char\":\"📡\",\"name\":\"satellite antenna\"},{\"no\":2036,\"code\":\"1F4FA\",\"char\":\"📺\",\"name\":\"television\"},{\"no\":2007,\"code\":\"1F4FB\",\"char\":\"📻\",\"name\":\"radio\"},{\"no\":1993,\"code\":\"1F50A\",\"char\":\"🔊\",\"name\":\"speaker high volume\"},{\"no\":1997,\"code\":\"1F514\",\"char\":\"🔔\",\"name\":\"bell\"},{\"no\":1994,\"code\":\"1F4E2\",\"char\":\"📢\",\"name\":\"loudspeaker\"},{\"no\":1995,\"code\":\"1F4E3\",\"char\":\"📣\",\"name\":\"megaphone\"},{\"no\":1855,\"code\":\"23F3\",\"char\":\"⏳\",\"name\":\"hourglass not done\"},{\"no\":1854,\"code\":\"231B\",\"char\":\"⌛\",\"name\":\"hourglass done\"},{\"no\":1857,\"code\":\"23F0\",\"char\":\"⏰\",\"name\":\"alarm clock\"},{\"no\":1856,\"code\":\"231A\",\"char\":\"⌚\",\"name\":\"watch\"},{\"no\":2121,\"code\":\"1F513\",\"char\":\"🔓\",\"name\":\"unlocked\"},{\"no\":2120,\"code\":\"1F512\",\"char\":\"🔒\",\"name\":\"locked\"},{\"no\":2122,\"code\":\"1F50F\",\"char\":\"🔏\",\"name\":\"locked with pen\"},{\"no\":2123,\"code\":\"1F510\",\"char\":\"🔐\",\"name\":\"locked with key\"},{\"no\":2124,\"code\":\"1F511\",\"char\":\"🔑\",\"name\":\"key\"},{\"no\":2042,\"code\":\"1F50E\",\"char\":\"🔎\",\"name\":\"magnifying glass tilted right\"},{\"no\":2047,\"code\":\"1F4A1\",\"char\":\"💡\",\"name\":\"light bulb\"},{\"no\":2048,\"code\":\"1F526\",\"char\":\"🔦\",\"name\":\"flashlight\"},{\"no\":2021,\"code\":\"1F50C\",\"char\":\"🔌\",\"name\":\"electric plug\"},{\"no\":2020,\"code\":\"1F50B\",\"char\":\"🔋\",\"name\":\"battery\"},{\"no\":2041,\"code\":\"1F50D\",\"char\":\"🔍\",\"name\":\"magnifying glass tilted left\"},{\"no\":939,\"code\":\"1F6C0\",\"char\":\"🛀\",\"name\":\"person taking bath\"},{\"no\":1851,\"code\":\"1F6BD\",\"char\":\"🚽\",\"name\":\"toilet\"},{\"no\":2135,\"code\":\"1F527\",\"char\":\"🔧\",\"name\":\"wrench\"},{\"no\":2136,\"code\":\"1F529\",\"char\":\"🔩\",\"name\":\"nut and bolt\"},{\"no\":2126,\"code\":\"1F528\",\"char\":\"🔨\",\"name\":\"hammer\"},{\"no\":1848,\"code\":\"1F6AA\",\"char\":\"🚪\",\"name\":\"door\"},{\"no\":2145,\"code\":\"1F6AC\",\"char\":\"🚬\",\"name\":\"cigarette\"},{\"no\":1465,\"code\":\"1F4A3\",\"char\":\"💣\",\"name\":\"bomb\"},{\"no\":2132,\"code\":\"1F52B\",\"char\":\"🔫\",\"name\":\"pistol\"},{\"no\":1721,\"code\":\"1F52A\",\"char\":\"🔪\",\"name\":\"kitchen knife\"},{\"no\":2144,\"code\":\"1F48A\",\"char\":\"💊\",\"name\":\"pill\"},{\"no\":2143,\"code\":\"1F489\",\"char\":\"💉\",\"name\":\"syringe\"},{\"no\":2067,\"code\":\"1F4B0\",\"char\":\"💰\",\"name\":\"money bag\"},{\"no\":2068,\"code\":\"1F4B4\",\"char\":\"💴\",\"name\":\"yen banknote\"},{\"no\":2069,\"code\":\"1F4B5\",\"char\":\"💵\",\"name\":\"dollar banknote\"},{\"no\":2073,\"code\":\"1F4B3\",\"char\":\"💳\",\"name\":\"credit card\"},{\"no\":2072,\"code\":\"1F4B8\",\"char\":\"💸\",\"name\":\"money with wings\"},{\"no\":2015,\"code\":\"1F4F2\",\"char\":\"📲\",\"name\":\"mobile phone with arrow\"},{\"no\":2078,\"code\":\"1F4E7\",\"char\":\"📧\",\"name\":\"e-mail\"},{\"no\":2082,\"code\":\"1F4E5\",\"char\":\"📥\",\"name\":\"inbox tray\"},{\"no\":2081,\"code\":\"1F4E4\",\"char\":\"📤\",\"name\":\"outbox tray\"},{\"no\":2080,\"code\":\"1F4E9\",\"char\":\"📩\",\"name\":\"envelope with arrow\"},{\"no\":2079,\"code\":\"1F4E8\",\"char\":\"📨\",\"name\":\"incoming envelope\"},{\"no\":2084,\"code\":\"1F4EB\",\"char\":\"📫\",\"name\":\"closed mailbox with raised flag\"},{\"no\":2085,\"code\":\"1F4EA\",\"char\":\"📪\",\"name\":\"closed mailbox with lowered flag\"},{\"no\":2088,\"code\":\"1F4EE\",\"char\":\"📮\",\"name\":\"postbox\"},{\"no\":2083,\"code\":\"1F4E6\",\"char\":\"📦\",\"name\":\"package\"},{\"no\":2096,\"code\":\"1F4DD\",\"char\":\"📝\",\"name\":\"memo\"},{\"no\":2061,\"code\":\"1F4C4\",\"char\":\"📄\",\"name\":\"page facing up\"},{\"no\":2059,\"code\":\"1F4C3\",\"char\":\"📃\",\"name\":\"page with curl\"},{\"no\":2064,\"code\":\"1F4D1\",\"char\":\"📑\",\"name\":\"bookmark tabs\"},{\"no\":2108,\"code\":\"1F4CA\",\"char\":\"📊\",\"name\":\"bar chart\"},{\"no\":2106,\"code\":\"1F4C8\",\"char\":\"📈\",\"name\":\"chart increasing\"},{\"no\":2107,\"code\":\"1F4C9\",\"char\":\"📉\",\"name\":\"chart decreasing\"},{\"no\":2060,\"code\":\"1F4DC\",\"char\":\"📜\",\"name\":\"scroll\"},{\"no\":2109,\"code\":\"1F4CB\",\"char\":\"📋\",\"name\":\"clipboard\"},{\"no\":2101,\"code\":\"1F4C5\",\"char\":\"📅\",\"name\":\"calendar\"},{\"no\":2102,\"code\":\"1F4C6\",\"char\":\"📆\",\"name\":\"tear-off calendar\"},{\"no\":2105,\"code\":\"1F4C7\",\"char\":\"📇\",\"name\":\"card index\"},{\"no\":2098,\"code\":\"1F4C1\",\"char\":\"📁\",\"name\":\"file folder\"},{\"no\":2099,\"code\":\"1F4C2\",\"char\":\"📂\",\"name\":\"open file folder\"},{\"no\":2110,\"code\":\"1F4CC\",\"char\":\"📌\",\"name\":\"pushpin\"},{\"no\":2112,\"code\":\"1F4CE\",\"char\":\"📎\",\"name\":\"paperclip\"},{\"no\":2114,\"code\":\"1F4CF\",\"char\":\"📏\",\"name\":\"straight ruler\"},{\"no\":2115,\"code\":\"1F4D0\",\"char\":\"📐\",\"name\":\"triangular ruler\"},{\"no\":2051,\"code\":\"1F4D5\",\"char\":\"📕\",\"name\":\"closed book\"},{\"no\":2053,\"code\":\"1F4D7\",\"char\":\"📗\",\"name\":\"green book\"},{\"no\":2054,\"code\":\"1F4D8\",\"char\":\"📘\",\"name\":\"blue book\"},{\"no\":2055,\"code\":\"1F4D9\",\"char\":\"📙\",\"name\":\"orange book\"},{\"no\":2057,\"code\":\"1F4D3\",\"char\":\"📓\",\"name\":\"notebook\"},{\"no\":2050,\"code\":\"1F4D4\",\"char\":\"📔\",\"name\":\"notebook with decorative cover\"},{\"no\":2058,\"code\":\"1F4D2\",\"char\":\"📒\",\"name\":\"ledger\"},{\"no\":2056,\"code\":\"1F4DA\",\"char\":\"📚\",\"name\":\"books\"},{\"no\":2052,\"code\":\"1F4D6\",\"char\":\"📖\",\"name\":\"open book\"},{\"no\":2065,\"code\":\"1F516\",\"char\":\"🔖\",\"name\":\"bookmark\"},{\"no\":2254,\"code\":\"1F4DB\",\"char\":\"📛\",\"name\":\"name badge\"},{\"no\":2062,\"code\":\"1F4F0\",\"char\":\"📰\",\"name\":\"newspaper\"},{\"no\":1785,\"code\":\"1F3A8\",\"char\":\"🎨\",\"name\":\"artist palette\"},{\"no\":2035,\"code\":\"1F3AC\",\"char\":\"🎬\",\"name\":\"clapper board\"},{\"no\":2005,\"code\":\"1F3A4\",\"char\":\"🎤\",\"name\":\"microphone\"},{\"no\":2006,\"code\":\"1F3A7\",\"char\":\"🎧\",\"name\":\"headphone\"},{\"no\":1999,\"code\":\"1F3BC\",\"char\":\"🎼\",\"name\":\"musical score\"},{\"no\":2000,\"code\":\"1F3B5\",\"char\":\"🎵\",\"name\":\"musical note\"},{\"no\":2001,\"code\":\"1F3B6\",\"char\":\"🎶\",\"name\":\"musical notes\"},{\"no\":2010,\"code\":\"1F3B9\",\"char\":\"🎹\",\"name\":\"musical keyboard\"},{\"no\":2012,\"code\":\"1F3BB\",\"char\":\"🎻\",\"name\":\"violin\"},{\"no\":2011,\"code\":\"1F3BA\",\"char\":\"🎺\",\"name\":\"trumpet\"},{\"no\":2008,\"code\":\"1F3B7\",\"char\":\"🎷\",\"name\":\"saxophone\"},{\"no\":2009,\"code\":\"1F3B8\",\"char\":\"🎸\",\"name\":\"guitar\"},{\"no\":93,\"code\":\"1F47E\",\"char\":\"👾\",\"name\":\"alien monster\"},{\"no\":1980,\"code\":\"1F3AE\",\"char\":\"🎮\",\"name\":\"video game\"},{\"no\":1987,\"code\":\"1F0CF\",\"char\":\"🃏\",\"name\":\"joker\"},{\"no\":1989,\"code\":\"1F3B4\",\"char\":\"🎴\",\"name\":\"flower playing cards\"},{\"no\":1988,\"code\":\"1F004\",\"char\":\"🀄\",\"name\":\"mahjong red dragon\"},{\"no\":1982,\"code\":\"1F3B2\",\"char\":\"🎲\",\"name\":\"game die\"},{\"no\":1972,\"code\":\"1F3AF\",\"char\":\"🎯\",\"name\":\"direct hit\"},{\"no\":1959,\"code\":\"1F3C8\",\"char\":\"🏈\",\"name\":\"american football\"},{\"no\":1957,\"code\":\"1F3C0\",\"char\":\"🏀\",\"name\":\"basketball\"},{\"no\":1955,\"code\":\"26BD\",\"char\":\"⚽\",\"name\":\"soccer ball\"},{\"no\":1956,\"code\":\"26BE\",\"char\":\"⚾\",\"name\":\"baseball\"},{\"no\":1961,\"code\":\"1F3BE\",\"char\":\"🎾\",\"name\":\"tennis\"},{\"no\":1962,\"code\":\"1F3B1\",\"char\":\"🎱\",\"name\":\"pool 8 ball\"},{\"no\":1963,\"code\":\"1F3B3\",\"char\":\"🎳\",\"name\":\"bowling\"},{\"no\":1973,\"code\":\"26F3\",\"char\":\"⛳\",\"name\":\"flag in hole\"},{\"no\":2357,\"code\":\"1F3C1\",\"char\":\"🏁\",\"name\":\"chequered flag\"},{\"no\":1950,\"code\":\"1F3C6\",\"char\":\"🏆\",\"name\":\"trophy\"},{\"no\":1977,\"code\":\"1F3BF\",\"char\":\"🎿\",\"name\":\"skis\"},{\"no\":968,\"code\":\"1F3C2\",\"char\":\"🏂\",\"name\":\"snowboarder\"},{\"no\":1028,\"code\":\"1F3CA\",\"char\":\"🏊\",\"name\":\"person swimming\"},{\"no\":992,\"code\":\"1F3C4\",\"char\":\"🏄\",\"name\":\"person surfing\"},{\"no\":1975,\"code\":\"1F3A3\",\"char\":\"🎣\",\"name\":\"fishing pole\"},{\"no\":1706,\"code\":\"1F375\",\"char\":\"🍵\",\"name\":\"teacup without handle\"},{\"no\":1707,\"code\":\"1F376\",\"char\":\"🍶\",\"name\":\"sake\"},{\"no\":1712,\"code\":\"1F37A\",\"char\":\"🍺\",\"name\":\"beer mug\"},{\"no\":1713,\"code\":\"1F37B\",\"char\":\"🍻\",\"name\":\"clinking beer mugs\"},{\"no\":1710,\"code\":\"1F378\",\"char\":\"🍸\",\"name\":\"cocktail glass\"},{\"no\":1711,\"code\":\"1F379\",\"char\":\"🍹\",\"name\":\"tropical drink\"},{\"no\":1709,\"code\":\"1F377\",\"char\":\"🍷\",\"name\":\"wine glass\"},{\"no\":1719,\"code\":\"1F374\",\"char\":\"🍴\",\"name\":\"fork and knife\"},{\"no\":1660,\"code\":\"1F355\",\"char\":\"🍕\",\"name\":\"pizza\"},{\"no\":1658,\"code\":\"1F354\",\"char\":\"🍔\",\"name\":\"hamburger\"},{\"no\":1659,\"code\":\"1F35F\",\"char\":\"🍟\",\"name\":\"french fries\"},{\"no\":1655,\"code\":\"1F357\",\"char\":\"🍗\",\"name\":\"poultry leg\"},{\"no\":1654,\"code\":\"1F356\",\"char\":\"🍖\",\"name\":\"meat on bone\"},{\"no\":1680,\"code\":\"1F35D\",\"char\":\"🍝\",\"name\":\"spaghetti\"},{\"no\":1678,\"code\":\"1F35B\",\"char\":\"🍛\",\"name\":\"curry rice\"},{\"no\":1684,\"code\":\"1F364\",\"char\":\"🍤\",\"name\":\"fried shrimp\"},{\"no\":1674,\"code\":\"1F371\",\"char\":\"🍱\",\"name\":\"bento box\"},{\"no\":1683,\"code\":\"1F363\",\"char\":\"🍣\",\"name\":\"sushi\"},{\"no\":1685,\"code\":\"1F365\",\"char\":\"🍥\",\"name\":\"fish cake with swirl\"},{\"no\":1676,\"code\":\"1F359\",\"char\":\"🍙\",\"name\":\"rice ball\"},{\"no\":1675,\"code\":\"1F358\",\"char\":\"🍘\",\"name\":\"rice cracker\"},{\"no\":1677,\"code\":\"1F35A\",\"char\":\"🍚\",\"name\":\"cooked rice\"},{\"no\":1679,\"code\":\"1F35C\",\"char\":\"🍜\",\"name\":\"steaming bowl\"},{\"no\":1669,\"code\":\"1F372\",\"char\":\"🍲\",\"name\":\"pot of food\"},{\"no\":1682,\"code\":\"1F362\",\"char\":\"🍢\",\"name\":\"oden\"},{\"no\":1686,\"code\":\"1F361\",\"char\":\"🍡\",\"name\":\"dango\"},{\"no\":1667,\"code\":\"1F373\",\"char\":\"🍳\",\"name\":\"cooking\"},{\"no\":1648,\"code\":\"1F35E\",\"char\":\"🍞\",\"name\":\"bread\"},{\"no\":1693,\"code\":\"1F369\",\"char\":\"🍩\",\"name\":\"doughnut\"},{\"no\":1701,\"code\":\"1F36E\",\"char\":\"🍮\",\"name\":\"custard\"},{\"no\":1690,\"code\":\"1F366\",\"char\":\"🍦\",\"name\":\"soft ice cream\"},{\"no\":1692,\"code\":\"1F368\",\"char\":\"🍨\",\"name\":\"ice cream\"},{\"no\":1691,\"code\":\"1F367\",\"char\":\"🍧\",\"name\":\"shaved ice\"},{\"no\":1695,\"code\":\"1F382\",\"char\":\"🎂\",\"name\":\"birthday cake\"},{\"no\":1696,\"code\":\"1F370\",\"char\":\"🍰\",\"name\":\"shortcake\"},{\"no\":1694,\"code\":\"1F36A\",\"char\":\"🍪\",\"name\":\"cookie\"},{\"no\":1698,\"code\":\"1F36B\",\"char\":\"🍫\",\"name\":\"chocolate bar\"},{\"no\":1699,\"code\":\"1F36C\",\"char\":\"🍬\",\"name\":\"candy\"},{\"no\":1700,\"code\":\"1F36D\",\"char\":\"🍭\",\"name\":\"lollipop\"},{\"no\":1702,\"code\":\"1F36F\",\"char\":\"🍯\",\"name\":\"honey pot\"},{\"no\":1628,\"code\":\"1F34E\",\"char\":\"🍎\",\"name\":\"red apple\"},{\"no\":1629,\"code\":\"1F34F\",\"char\":\"🍏\",\"name\":\"green apple\"},{\"no\":1624,\"code\":\"1F34A\",\"char\":\"🍊\",\"name\":\"tangerine\"},{\"no\":1632,\"code\":\"1F352\",\"char\":\"🍒\",\"name\":\"cherries\"},{\"no\":1621,\"code\":\"1F347\",\"char\":\"🍇\",\"name\":\"grapes\"},{\"no\":1623,\"code\":\"1F349\",\"char\":\"🍉\",\"name\":\"watermelon\"},{\"no\":1633,\"code\":\"1F353\",\"char\":\"🍓\",\"name\":\"strawberry\"},{\"no\":1631,\"code\":\"1F351\",\"char\":\"🍑\",\"name\":\"peach\"},{\"no\":1622,\"code\":\"1F348\",\"char\":\"🍈\",\"name\":\"melon\"},{\"no\":1626,\"code\":\"1F34C\",\"char\":\"🍌\",\"name\":\"banana\"},{\"no\":1627,\"code\":\"1F34D\",\"char\":\"🍍\",\"name\":\"pineapple\"},{\"no\":1681,\"code\":\"1F360\",\"char\":\"🍠\",\"name\":\"roasted sweet potato\"},{\"no\":1638,\"code\":\"1F346\",\"char\":\"🍆\",\"name\":\"eggplant\"},{\"no\":1635,\"code\":\"1F345\",\"char\":\"🍅\",\"name\":\"tomato\"},{\"no\":1641,\"code\":\"1F33D\",\"char\":\"🌽\",\"name\":\"ear of corn\"}]},{\"name\":\"Places\",\"emojis\":[{\"no\":1744,\"code\":\"1F3E0\",\"char\":\"🏠\",\"name\":\"house\"},{\"no\":1745,\"code\":\"1F3E1\",\"char\":\"🏡\",\"name\":\"house with garden\"},{\"no\":1754,\"code\":\"1F3EB\",\"char\":\"🏫\",\"name\":\"school\"},{\"no\":1746,\"code\":\"1F3E2\",\"char\":\"🏢\",\"name\":\"office building\"},{\"no\":1747,\"code\":\"1F3E3\",\"char\":\"🏣\",\"name\":\"Japanese post office\"},{\"no\":1749,\"code\":\"1F3E5\",\"char\":\"🏥\",\"name\":\"hospital\"},{\"no\":1750,\"code\":\"1F3E6\",\"char\":\"🏦\",\"name\":\"bank\"},{\"no\":1753,\"code\":\"1F3EA\",\"char\":\"🏪\",\"name\":\"convenience store\"},{\"no\":1752,\"code\":\"1F3E9\",\"char\":\"🏩\",\"name\":\"love hotel\"},{\"no\":1751,\"code\":\"1F3E8\",\"char\":\"🏨\",\"name\":\"hotel\"},{\"no\":1759,\"code\":\"1F492\",\"char\":\"💒\",\"name\":\"wedding\"},{\"no\":1762,\"code\":\"26EA\",\"char\":\"⛪\",\"name\":\"church\"},{\"no\":1755,\"code\":\"1F3EC\",\"char\":\"🏬\",\"name\":\"department store\"},{\"no\":1774,\"code\":\"1F307\",\"char\":\"🌇\",\"name\":\"sunset\"},{\"no\":1773,\"code\":\"1F306\",\"char\":\"🌆\",\"name\":\"cityscape at dusk\"},{\"no\":1757,\"code\":\"1F3EF\",\"char\":\"🏯\",\"name\":\"Japanese castle\"},{\"no\":1758,\"code\":\"1F3F0\",\"char\":\"🏰\",\"name\":\"castle\"},{\"no\":1768,\"code\":\"26FA\",\"char\":\"⛺\",\"name\":\"tent\"},{\"no\":1756,\"code\":\"1F3ED\",\"char\":\"🏭\",\"name\":\"factory\"},{\"no\":1760,\"code\":\"1F5FC\",\"char\":\"🗼\",\"name\":\"Tokyo tower\"},{\"no\":1728,\"code\":\"1F5FE\",\"char\":\"🗾\",\"name\":\"map of Japan\"},{\"no\":1732,\"code\":\"1F5FB\",\"char\":\"🗻\",\"name\":\"mount fuji\"},{\"no\":1771,\"code\":\"1F304\",\"char\":\"🌄\",\"name\":\"sunrise over mountains\"},{\"no\":1772,\"code\":\"1F305\",\"char\":\"🌅\",\"name\":\"sunrise\"},{\"no\":1770,\"code\":\"1F303\",\"char\":\"🌃\",\"name\":\"night with stars\"},{\"no\":1761,\"code\":\"1F5FD\",\"char\":\"🗽\",\"name\":\"Statue of Liberty\"},{\"no\":1775,\"code\":\"1F309\",\"char\":\"🌉\",\"name\":\"bridge at night\"},{\"no\":1778,\"code\":\"1F3A0\",\"char\":\"🎠\",\"name\":\"carousel horse\"},{\"no\":1779,\"code\":\"1F3A1\",\"char\":\"🎡\",\"name\":\"ferris wheel\"},{\"no\":1767,\"code\":\"26F2\",\"char\":\"⛲\",\"name\":\"fountain\"},{\"no\":1780,\"code\":\"1F3A2\",\"char\":\"🎢\",\"name\":\"roller coaster\"},{\"no\":1834,\"code\":\"1F6A2\",\"char\":\"🚢\",\"name\":\"ship\"},{\"no\":1828,\"code\":\"26F5\",\"char\":\"⛵\",\"name\":\"sailboat\"},{\"no\":1830,\"code\":\"1F6A4\",\"char\":\"🚤\",\"name\":\"speedboat\"},{\"no\":1845,\"code\":\"1F680\",\"char\":\"🚀\",\"name\":\"rocket\"},{\"no\":1839,\"code\":\"1F4BA\",\"char\":\"💺\",\"name\":\"seat\"},{\"no\":1794,\"code\":\"1F689\",\"char\":\"🚉\",\"name\":\"station\"},{\"no\":1789,\"code\":\"1F684\",\"char\":\"🚄\",\"name\":\"high-speed train\"},{\"no\":1790,\"code\":\"1F685\",\"char\":\"🚅\",\"name\":\"bullet train\"},{\"no\":1792,\"code\":\"1F687\",\"char\":\"🚇\",\"name\":\"metro\"},{\"no\":1788,\"code\":\"1F683\",\"char\":\"🚃\",\"name\":\"railway car\"},{\"no\":1799,\"code\":\"1F68C\",\"char\":\"🚌\",\"name\":\"bus\"},{\"no\":1811,\"code\":\"1F699\",\"char\":\"🚙\",\"name\":\"sport utility vehicle\"},{\"no\":1809,\"code\":\"1F697\",\"char\":\"🚗\",\"name\":\"automobile\"},{\"no\":1807,\"code\":\"1F695\",\"char\":\"🚕\",\"name\":\"taxi\"},{\"no\":1812,\"code\":\"1F69A\",\"char\":\"🚚\",\"name\":\"delivery truck\"},{\"no\":1822,\"code\":\"1F6A8\",\"char\":\"🚨\",\"name\":\"police car light\"},{\"no\":1805,\"code\":\"1F693\",\"char\":\"🚓\",\"name\":\"police car\"},{\"no\":1804,\"code\":\"1F692\",\"char\":\"🚒\",\"name\":\"fire engine\"},{\"no\":1803,\"code\":\"1F691\",\"char\":\"🚑\",\"name\":\"ambulance\"},{\"no\":1815,\"code\":\"1F6B2\",\"char\":\"🚲\",\"name\":\"bicycle\"},{\"no\":1781,\"code\":\"1F488\",\"char\":\"💈\",\"name\":\"barber pole\"},{\"no\":1818,\"code\":\"1F68F\",\"char\":\"🚏\",\"name\":\"bus stop\"},{\"no\":1948,\"code\":\"1F3AB\",\"char\":\"🎫\",\"name\":\"ticket\"},{\"no\":1823,\"code\":\"1F6A5\",\"char\":\"🚥\",\"name\":\"horizontal traffic light\"},{\"no\":1825,\"code\":\"1F6A7\",\"char\":\"🚧\",\"name\":\"construction\"},{\"no\":2255,\"code\":\"1F530\",\"char\":\"🔰\",\"name\":\"Japanese symbol for beginner\"},{\"no\":1821,\"code\":\"26FD\",\"char\":\"⛽\",\"name\":\"fuel pump\"},{\"no\":2049,\"code\":\"1F3EE\",\"char\":\"🏮\",\"name\":\"red paper lantern\"},{\"no\":1786,\"code\":\"1F3B0\",\"char\":\"🎰\",\"name\":\"slot machine\"},{\"no\":2148,\"code\":\"1F5FF\",\"char\":\"🗿\",\"name\":\"moai\"},{\"no\":1782,\"code\":\"1F3AA\",\"char\":\"🎪\",\"name\":\"circus tent\"},{\"no\":1783,\"code\":\"1F3AD\",\"char\":\"🎭\",\"name\":\"performing arts\"},{\"no\":2111,\"code\":\"1F4CD\",\"char\":\"📍\",\"name\":\"round pushpin\"},{\"no\":2358,\"code\":\"1F6A9\",\"char\":\"🚩\",\"name\":\"triangular flag\"}]},{\"name\":\"Symbols\",\"emojis\":[{\"no\":2294,\"code\":\"1F51F\",\"char\":\"🔟\",\"name\":\"keycap 10\"},{\"no\":2298,\"code\":\"1F522\",\"char\":\"🔢\",\"name\":\"input numbers\"},{\"no\":2299,\"code\":\"1F523\",\"char\":\"🔣\",\"name\":\"input symbols\"},{\"no\":2296,\"code\":\"1F520\",\"char\":\"🔠\",\"name\":\"input latin uppercase\"},{\"no\":2297,\"code\":\"1F521\",\"char\":\"🔡\",\"name\":\"input latin lowercase\"},{\"no\":2300,\"code\":\"1F524\",\"char\":\"🔤\",\"name\":\"input latin letters\"},{\"no\":2234,\"code\":\"1F53C\",\"char\":\"🔼\",\"name\":\"up button\"},{\"no\":2236,\"code\":\"1F53D\",\"char\":\"🔽\",\"name\":\"down button\"},{\"no\":2232,\"code\":\"23EA\",\"char\":\"⏪\",\"name\":\"fast reverse button\"},{\"no\":2228,\"code\":\"23E9\",\"char\":\"⏩\",\"name\":\"fast-forward button\"},{\"no\":2235,\"code\":\"23EB\",\"char\":\"⏫\",\"name\":\"fast up button\"},{\"no\":2237,\"code\":\"23EC\",\"char\":\"⏬\",\"name\":\"fast down button\"},{\"no\":2313,\"code\":\"1F197\",\"char\":\"🆗\",\"name\":\"OK button\"},{\"no\":2310,\"code\":\"1F195\",\"char\":\"🆕\",\"name\":\"NEW button\"},{\"no\":2316,\"code\":\"1F199\",\"char\":\"🆙\",\"name\":\"UP! button\"},{\"no\":2305,\"code\":\"1F192\",\"char\":\"🆒\",\"name\":\"COOL button\"},{\"no\":2306,\"code\":\"1F193\",\"char\":\"🆓\",\"name\":\"FREE button\"},{\"no\":2311,\"code\":\"1F196\",\"char\":\"🆖\",\"name\":\"NG button\"},{\"no\":2245,\"code\":\"1F4F6\",\"char\":\"📶\",\"name\":\"antenna bars\"},{\"no\":2242,\"code\":\"1F3A6\",\"char\":\"🎦\",\"name\":\"cinema\"},{\"no\":2318,\"code\":\"1F201\",\"char\":\"🈁\",\"name\":\"Japanese “here” button\"},{\"no\":2322,\"code\":\"1F22F\",\"char\":\"🈯\",\"name\":\"Japanese “reserved” button\"},{\"no\":2330,\"code\":\"1F233\",\"char\":\"🈳\",\"name\":\"Japanese “vacancy” button\"},{\"no\":2334,\"code\":\"1F235\",\"char\":\"🈵\",\"name\":\"Japanese “no vacancy” button\"},{\"no\":2329,\"code\":\"1F234\",\"char\":\"🈴\",\"name\":\"Japanese “passing grade” button\"},{\"no\":2326,\"code\":\"1F232\",\"char\":\"🈲\",\"name\":\"Japanese “prohibited” button\"},{\"no\":2323,\"code\":\"1F250\",\"char\":\"🉐\",\"name\":\"Japanese “bargain” button\"},{\"no\":2324,\"code\":\"1F239\",\"char\":\"🈹\",\"name\":\"Japanese “discount” button\"},{\"no\":2333,\"code\":\"1F23A\",\"char\":\"🈺\",\"name\":\"Japanese “open for business” button\"},{\"no\":2321,\"code\":\"1F236\",\"char\":\"🈶\",\"name\":\"Japanese “not free of charge” button\"},{\"no\":2325,\"code\":\"1F21A\",\"char\":\"🈚\",\"name\":\"Japanese “free of charge” button\"},{\"no\":2158,\"code\":\"1F6BB\",\"char\":\"🚻\",\"name\":\"restroom\"},{\"no\":2156,\"code\":\"1F6B9\",\"char\":\"🚹\",\"name\":\"men’s room\"},{\"no\":2157,\"code\":\"1F6BA\",\"char\":\"🚺\",\"name\":\"women’s room\"},{\"no\":2159,\"code\":\"1F6BC\",\"char\":\"🚼\",\"name\":\"baby symbol\"},{\"no\":2160,\"code\":\"1F6BE\",\"char\":\"🚾\",\"name\":\"water closet\"},{\"no\":2170,\"code\":\"1F6AD\",\"char\":\"🚭\",\"name\":\"no smoking\"},{\"no\":2328,\"code\":\"1F238\",\"char\":\"🈸\",\"name\":\"Japanese “application” button\"},{\"no\":2327,\"code\":\"1F251\",\"char\":\"🉑\",\"name\":\"Japanese “acceptable” button\"},{\"no\":2304,\"code\":\"1F191\",\"char\":\"🆑\",\"name\":\"CL button\"},{\"no\":2315,\"code\":\"1F198\",\"char\":\"🆘\",\"name\":\"SOS button\"},{\"no\":2308,\"code\":\"1F194\",\"char\":\"🆔\",\"name\":\"ID button\"},{\"no\":2168,\"code\":\"1F6AB\",\"char\":\"🚫\",\"name\":\"prohibited\"},{\"no\":2175,\"code\":\"1F51E\",\"char\":\"🔞\",\"name\":\"no one under eighteen\"},{\"no\":2167,\"code\":\"26D4\",\"char\":\"⛔\",\"name\":\"no entry\"},{\"no\":2262,\"code\":\"274E\",\"char\":\"❎\",\"name\":\"cross mark button\"},{\"no\":2257,\"code\":\"2705\",\"char\":\"✅\",\"name\":\"white heavy check mark\"},{\"no\":1460,\"code\":\"1F49F\",\"char\":\"💟\",\"name\":\"heart decoration\"},{\"no\":2317,\"code\":\"1F19A\",\"char\":\"🆚\",\"name\":\"VS button\"},{\"no\":2246,\"code\":\"1F4F3\",\"char\":\"📳\",\"name\":\"vibration mode\"},{\"no\":2247,\"code\":\"1F4F4\",\"char\":\"📴\",\"name\":\"mobile phone off\"},{\"no\":2302,\"code\":\"1F18E\",\"char\":\"🆎\",\"name\":\"AB button (blood type)\"},{\"no\":2349,\"code\":\"1F4A0\",\"char\":\"💠\",\"name\":\"diamond with a dot\"},{\"no\":2223,\"code\":\"26CE\",\"char\":\"⛎\",\"name\":\"Ophiuchus\"},{\"no\":2210,\"code\":\"1F52F\",\"char\":\"🔯\",\"name\":\"dotted six-pointed star\"},{\"no\":2152,\"code\":\"1F3E7\",\"char\":\"🏧\",\"name\":\"ATM sign\"},{\"no\":2074,\"code\":\"1F4B9\",\"char\":\"💹\",\"name\":\"chart increasing with yen\"},{\"no\":2076,\"code\":\"1F4B2\",\"char\":\"💲\",\"name\":\"heavy dollar sign\"},{\"no\":2075,\"code\":\"1F4B1\",\"char\":\"💱\",\"name\":\"currency exchange\"},{\"no\":2261,\"code\":\"274C\",\"char\":\"❌\",\"name\":\"cross mark\"},{\"no\":2277,\"code\":\"2757\",\"char\":\"❗\",\"name\":\"exclamation mark\"},{\"no\":2274,\"code\":\"2753\",\"char\":\"❓\",\"name\":\"question mark\"},{\"no\":2276,\"code\":\"2755\",\"char\":\"❕\",\"name\":\"white exclamation mark\"},{\"no\":2275,\"code\":\"2754\",\"char\":\"❔\",\"name\":\"white question mark\"},{\"no\":2256,\"code\":\"2B55\",\"char\":\"⭕\",\"name\":\"heavy large circle\"},{\"no\":2198,\"code\":\"1F51D\",\"char\":\"🔝\",\"name\":\"TOP arrow\"},{\"no\":2195,\"code\":\"1F51A\",\"char\":\"🔚\",\"name\":\"END arrow\"},{\"no\":2194,\"code\":\"1F519\",\"char\":\"🔙\",\"name\":\"BACK arrow\"},{\"no\":2196,\"code\":\"1F51B\",\"char\":\"🔛\",\"name\":\"ON! arrow\"},{\"no\":2197,\"code\":\"1F51C\",\"char\":\"🔜\",\"name\":\"SOON arrow\"},{\"no\":2192,\"code\":\"1F503\",\"char\":\"🔃\",\"name\":\"clockwise vertical arrows\"},{\"no\":1861,\"code\":\"1F55B\",\"char\":\"🕛\",\"name\":\"twelve o’clock\"},{\"no\":1863,\"code\":\"1F550\",\"char\":\"🕐\",\"name\":\"one o’clock\"},{\"no\":1865,\"code\":\"1F551\",\"char\":\"🕑\",\"name\":\"two o’clock\"},{\"no\":1867,\"code\":\"1F552\",\"char\":\"🕒\",\"name\":\"three o’clock\"},{\"no\":1869,\"code\":\"1F553\",\"char\":\"🕓\",\"name\":\"four o’clock\"},{\"no\":1871,\"code\":\"1F554\",\"char\":\"🕔\",\"name\":\"five o’clock\"},{\"no\":1873,\"code\":\"1F555\",\"char\":\"🕕\",\"name\":\"six o’clock\"},{\"no\":1875,\"code\":\"1F556\",\"char\":\"🕖\",\"name\":\"seven o’clock\"},{\"no\":1877,\"code\":\"1F557\",\"char\":\"🕗\",\"name\":\"eight o’clock\"},{\"no\":1879,\"code\":\"1F558\",\"char\":\"🕘\",\"name\":\"nine o’clock\"},{\"no\":1881,\"code\":\"1F559\",\"char\":\"🕙\",\"name\":\"ten o’clock\"},{\"no\":1883,\"code\":\"1F55A\",\"char\":\"🕚\",\"name\":\"eleven o’clock\"},{\"no\":2263,\"code\":\"2795\",\"char\":\"➕\",\"name\":\"heavy plus sign\"},{\"no\":2264,\"code\":\"2796\",\"char\":\"➖\",\"name\":\"heavy minus sign\"},{\"no\":2265,\"code\":\"2797\",\"char\":\"➗\",\"name\":\"heavy division sign\"},{\"no\":1601,\"code\":\"1F4AE\",\"char\":\"💮\",\"name\":\"white flower\"},{\"no\":2295,\"code\":\"1F4AF\",\"char\":\"💯\",\"name\":\"hundred points\"},{\"no\":2350,\"code\":\"1F518\",\"char\":\"🔘\",\"name\":\"radio button\"},{\"no\":2141,\"code\":\"1F517\",\"char\":\"🔗\",\"name\":\"link\"},{\"no\":2266,\"code\":\"27B0\",\"char\":\"➰\",\"name\":\"curly loop\"},{\"no\":2253,\"code\":\"1F531\",\"char\":\"🔱\",\"name\":\"trident emblem\"},{\"no\":2347,\"code\":\"1F53A\",\"char\":\"🔺\",\"name\":\"red triangle pointed up\"},{\"no\":2351,\"code\":\"1F532\",\"char\":\"🔲\",\"name\":\"black square button\"},{\"no\":2352,\"code\":\"1F533\",\"char\":\"🔳\",\"name\":\"white square button\"},{\"no\":2355,\"code\":\"1F534\",\"char\":\"🔴\",\"name\":\"red circle\"},{\"no\":2356,\"code\":\"1F535\",\"char\":\"🔵\",\"name\":\"blue circle\"},{\"no\":2348,\"code\":\"1F53B\",\"char\":\"🔻\",\"name\":\"red triangle pointed down\"},{\"no\":2342,\"code\":\"2B1C\",\"char\":\"⬜\",\"name\":\"white large square\"},{\"no\":2341,\"code\":\"2B1B\",\"char\":\"⬛\",\"name\":\"black large square\"},{\"no\":2343,\"code\":\"1F536\",\"char\":\"🔶\",\"name\":\"large orange diamond\"},{\"no\":2344,\"code\":\"1F537\",\"char\":\"🔷\",\"name\":\"large blue diamond\"},{\"no\":2345,\"code\":\"1F538\",\"char\":\"🔸\",\"name\":\"small orange diamond\"},{\"no\":2346,\"code\":\"1F539\",\"char\":\"🔹\",\"name\":\"small blue diamond\"}]}]");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _defaultComponentDecorator = __webpack_require__(17);

var _defaultComponentDecorator2 = _interopRequireDefault(_defaultComponentDecorator);

var _defaultHrefDecorator = __webpack_require__(18);

var _defaultHrefDecorator2 = _interopRequireDefault(_defaultHrefDecorator);

var _defaultMatchDecorator = __webpack_require__(19);

var _defaultMatchDecorator2 = _interopRequireDefault(_defaultMatchDecorator);

var _defaultTextDecorator = __webpack_require__(27);

var _defaultTextDecorator2 = _interopRequireDefault(_defaultTextDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Linkify = function (_React$Component) {
  _inherits(Linkify, _React$Component);

  function Linkify() {
    _classCallCheck(this, Linkify);

    return _possibleConstructorReturn(this, (Linkify.__proto__ || Object.getPrototypeOf(Linkify)).apply(this, arguments));
  }

  _createClass(Linkify, [{
    key: 'parseString',
    value: function parseString(string) {
      var _this2 = this;

      if (string === '') {
        return string;
      }

      var matches = this.props.matchDecorator(string);
      if (!matches) {
        return string;
      }

      var elements = [];
      var lastIndex = 0;
      matches.forEach(function (match, i) {
        // Push preceding text if there is any
        if (match.index > lastIndex) {
          elements.push(string.substring(lastIndex, match.index));
        }

        var decoratedHref = _this2.props.hrefDecorator(match.url);
        var decoratedText = _this2.props.textDecorator(match.text);
        var decoratedComponent = _this2.props.componentDecorator(decoratedHref, decoratedText, i);
        elements.push(decoratedComponent);

        lastIndex = match.lastIndex;
      });

      // Push remaining text if there is any
      if (string.length > lastIndex) {
        elements.push(string.substring(lastIndex));
      }

      return elements.length === 1 ? elements[0] : elements;
    }
  }, {
    key: 'parse',
    value: function parse(children) {
      var _this3 = this;

      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (typeof children === 'string') {
        return this.parseString(children);
      } else if (React.isValidElement(children) && children.type !== 'a' && children.type !== 'button') {
        return React.cloneElement(children, { key: key }, this.parse(children.props.children));
      } else if (Array.isArray(children)) {
        return children.map(function (child, i) {
          return _this3.parse(child, i);
        });
      }

      return children;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        this.parse(this.props.children)
      );
    }
  }]);

  return Linkify;
}(React.Component);

Linkify.defaultProps = {
  componentDecorator: _defaultComponentDecorator2.default,
  hrefDecorator: _defaultHrefDecorator2.default,
  matchDecorator: _defaultMatchDecorator2.default,
  textDecorator: _defaultTextDecorator2.default
};
exports.default = Linkify;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (decoratedHref, decoratedText, key) {
  return React.createElement(
    'a',
    { href: decoratedHref, key: key },
    decoratedText
  );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (href) {
  return href;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _linkifyIt = __webpack_require__(20);

var _linkifyIt2 = _interopRequireDefault(_linkifyIt);

var _tlds = __webpack_require__(26);

var _tlds2 = _interopRequireDefault(_tlds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkify = new _linkifyIt2.default();
linkify.tlds(_tlds2.default);

exports.default = function (text) {
  return linkify.match(text);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



////////////////////////////////////////////////////////////////////////////////
// Helpers

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

function _class(obj) { return Object.prototype.toString.call(obj); }
function isString(obj) { return _class(obj) === '[object String]'; }
function isObject(obj) { return _class(obj) === '[object Object]'; }
function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
function isFunction(obj) { return _class(obj) === '[object Function]'; }


function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};


function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}


var defaultSchemas = {
  'http:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http =  new RegExp(
          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  'https:':  'http:',
  'ftp:':    'http:',
  '//':      {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
      // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http =  new RegExp(
          '^' +
          self.re.src_auth +
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
          self.re.src_port +
          self.re.src_host_terminator +
          self.re.src_path,

          'i'
        );
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
        if (pos >= 3 && text[pos - 3] === '/') { return 0; }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  'mailto:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto =  new RegExp(
          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};

/*eslint-disable max-len*/

// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

/*eslint-enable max-len*/

////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__   = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
}

// Schemas compiler. Build regexps.
//
function compile(self) {

  // Load & clone RE patterns.
  var re = self.re = __webpack_require__(21)(self.__opts__);

  // Define dynamic patterns
  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }
  tlds.push(re.src_xn);

  re.src_tlds = tlds.join('|');

  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }

  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

  //
  // Compile each schema
  //

  var aliases = [];

  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name];

    // skip disabled methods
    if (val === null) { return; }

    var compiled = { validate: null, link: null };

    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  });

  //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate =
      self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize =
      self.__compiled__[self.__schemas__[alias]].normalize;
  });

  //
  // Fake record for guessed links
  //
  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

  //
  // Build schema condition
  //
  var slist = Object.keys(self.__compiled__)
                      .filter(function (name) {
                        // Filter disabled & fake schemas
                        return name.length > 0 && self.__compiled__[name];
                      })
                      .map(escapeRE)
                      .join('|');
  // (?!_) cause 1.5x slowdown
  self.re.schema_test   = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');

  self.re.pretest = RegExp(
    '(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@',
    'i'
  );

  //
  // Cleanup
  //

  resetScanCache(self);
}

/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/
function Match(self, shift) {
  var start = self.__index__,
      end   = self.__last_index__,
      text  = self.__text_cache__.slice(start, end);

  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/
  this.schema    = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/
  this.index     = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/
  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/
  this.raw       = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/
  this.text      = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/
  this.url       = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}


/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__           = assign({}, defaultOptions, options);

  // Cache last tested result. Used to skip repeating steps on next `match` call.
  this.__index__          = -1;
  this.__last_index__     = -1; // Next scan position
  this.__schema__         = '';
  this.__text_cache__     = '';

  this.__schemas__        = assign({}, defaultSchemas, schemas);
  this.__compiled__       = {};

  this.__tlds__           = tlds_default;
  this.__tlds_replaced__  = false;

  this.re = {};

  compile(this);
}


/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};


/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};


/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/
LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) { return false; }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

  // try to scan for link with schema - that's the most simple rule
  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);
      if (len) {
        this.__schema__     = m[2];
        this.__index__      = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__     = '';
            this.__index__      = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');
    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {

        shift = me.index + me[1].length;
        next  = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ ||
            (shift === this.__index__ && next > this.__last_index__)) {
          this.__schema__     = 'mailto:';
          this.__index__      = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};


/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/
LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};


/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};


/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/
LinkifyIt.prototype.match = function match(text) {
  var shift = 0, result = [];

  // Try to take previous element from cache, if .test() called before
  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }

  // Cut head if cache was used
  var tail = shift ? text.slice(shift) : text;

  // Scan string until end reached
  while (this.test(tail)) {
    result.push(createMatch(this, shift));

    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};


/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [ list ];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list)
                                  .sort()
                                  .filter(function (el, idx, arr) {
                                    return el !== arr[idx - 1];
                                  })
                                  .reverse();

  compile(this);
  return this;
};

/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/
LinkifyIt.prototype.normalize = function normalize(match) {

  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1

  if (!match.schema) { match.url = 'http://' + match.url; }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};


/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/
LinkifyIt.prototype.onCompile = function onCompile() {
};


module.exports = LinkifyIt;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (opts) {
  var re = {};

  // Use direct extract instead of `regenerate` to reduse browserified size
  re.src_Any = __webpack_require__(22).source;
  re.src_Cc  = __webpack_require__(23).source;
  re.src_Z   = __webpack_require__(24).source;
  re.src_P   = __webpack_require__(25).source;

  // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
  re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join('|');

  // \p{\Z\Cc} (white spaces + control)
  re.src_ZCc = [ re.src_Z, re.src_Cc ].join('|');

  // Experimental. List of chars, completely prohibited in links
  // because can separate it from other part of text
  var text_separators = '[><\uff5c]';

  // All possible word characters (everything without punctuation, spaces & controls)
  // Defined via punctuation & spaces to save space
  // Should be something like \p{\L\N\S\M} (\w but without `_`)
  re.src_pseudo_letter       = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
  // The same as abothe but without [0-9]
  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

  ////////////////////////////////////////////////////////////////////////////////

  re.src_ip4 =

    '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

  // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
  re.src_auth    = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

  re.src_port =

    '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

  re.src_host_terminator =

    '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

  re.src_path =

    '(?:' +
      '[/?#]' +
        '(?:' +
          '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-]).|' +
          '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' +
          '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' +
          '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' +
          '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' +
          "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" +
          "\\'(?=" + re.src_pseudo_letter + '|[-]).|' +  // allow `I'm_king` if no pair found
          '\\.{2,4}[a-zA-Z0-9%/]|' + // github has ... in commit range links,
                                     // google has .... in links (issue #66)
                                     // Restrict to
                                     // - english
                                     // - percent-encoded
                                     // - parts of file path
                                     // until more examples found.
          '\\.(?!' + re.src_ZCc + '|[.]).|' +
          (opts && opts['---'] ?
            '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
            :
            '\\-+|'
          ) +
          '\\,(?!' + re.src_ZCc + ').|' +      // allow `,,,` in paths
          '\\!(?!' + re.src_ZCc + '|[!]).|' +
          '\\?(?!' + re.src_ZCc + '|[?]).' +
        ')+' +
      '|\\/' +
    ')?';

  // Allow anything in markdown spec, forbid quote (") at the first position
  // because emails enclosed in quotes are far more common
  re.src_email_name =

    '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';

  re.src_xn =

    'xn--[a-z0-9\\-]{1,59}';

  // More to read about domain names
  // http://serverfault.com/questions/638260/

  re.src_domain_root =

    // Allow letters & digits (http://test1)
    '(?:' +
      re.src_xn +
      '|' +
      re.src_pseudo_letter + '{1,63}' +
    ')';

  re.src_domain =

    '(?:' +
      re.src_xn +
      '|' +
      '(?:' + re.src_pseudo_letter + ')' +
      '|' +
      '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
    ')';

  re.src_host =

    '(?:' +
    // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain/*_root*/ + ')' +
    ')';

  re.tpl_host_fuzzy =

    '(?:' +
      re.src_ip4 +
    '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' +
    ')';

  re.tpl_host_no_ip_fuzzy =

    '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

  re.src_host_strict =

    re.src_host + re.src_host_terminator;

  re.tpl_host_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_host_terminator;

  re.src_host_port_strict =

    re.src_host + re.src_port + re.src_host_terminator;

  re.tpl_host_port_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

  re.tpl_host_port_no_ip_fuzzy_strict =

    re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;


  ////////////////////////////////////////////////////////////////////////////////
  // Main rules

  // Rude test fuzzy links by host, for quick deny
  re.tpl_host_fuzzy_test =

    'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

  re.tpl_email_fuzzy =

      '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')' +
      '(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

  re.tpl_link_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

  re.tpl_link_no_ip_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

  return re;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports=/[\0-\x1F\x7F-\x9F]/

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/

/***/ }),
/* 26 */
/***/ (function(module) {

module.exports = JSON.parse("[\"aaa\",\"aarp\",\"abarth\",\"abb\",\"abbott\",\"abbvie\",\"abc\",\"able\",\"abogado\",\"abudhabi\",\"ac\",\"academy\",\"accenture\",\"accountant\",\"accountants\",\"aco\",\"actor\",\"ad\",\"adac\",\"ads\",\"adult\",\"ae\",\"aeg\",\"aero\",\"aetna\",\"af\",\"afl\",\"africa\",\"ag\",\"agakhan\",\"agency\",\"ai\",\"aig\",\"airbus\",\"airforce\",\"airtel\",\"akdn\",\"al\",\"alfaromeo\",\"alibaba\",\"alipay\",\"allfinanz\",\"allstate\",\"ally\",\"alsace\",\"alstom\",\"am\",\"amazon\",\"americanexpress\",\"americanfamily\",\"amex\",\"amfam\",\"amica\",\"amsterdam\",\"analytics\",\"android\",\"anquan\",\"anz\",\"ao\",\"aol\",\"apartments\",\"app\",\"apple\",\"aq\",\"aquarelle\",\"ar\",\"arab\",\"aramco\",\"archi\",\"army\",\"arpa\",\"art\",\"arte\",\"as\",\"asda\",\"asia\",\"associates\",\"at\",\"athleta\",\"attorney\",\"au\",\"auction\",\"audi\",\"audible\",\"audio\",\"auspost\",\"author\",\"auto\",\"autos\",\"avianca\",\"aw\",\"aws\",\"ax\",\"axa\",\"az\",\"azure\",\"ba\",\"baby\",\"baidu\",\"banamex\",\"bananarepublic\",\"band\",\"bank\",\"bar\",\"barcelona\",\"barclaycard\",\"barclays\",\"barefoot\",\"bargains\",\"baseball\",\"basketball\",\"bauhaus\",\"bayern\",\"bb\",\"bbc\",\"bbt\",\"bbva\",\"bcg\",\"bcn\",\"bd\",\"be\",\"beats\",\"beauty\",\"beer\",\"bentley\",\"berlin\",\"best\",\"bestbuy\",\"bet\",\"bf\",\"bg\",\"bh\",\"bharti\",\"bi\",\"bible\",\"bid\",\"bike\",\"bing\",\"bingo\",\"bio\",\"biz\",\"bj\",\"black\",\"blackfriday\",\"blockbuster\",\"blog\",\"bloomberg\",\"blue\",\"bm\",\"bms\",\"bmw\",\"bn\",\"bnpparibas\",\"bo\",\"boats\",\"boehringer\",\"bofa\",\"bom\",\"bond\",\"boo\",\"book\",\"booking\",\"bosch\",\"bostik\",\"boston\",\"bot\",\"boutique\",\"box\",\"br\",\"bradesco\",\"bridgestone\",\"broadway\",\"broker\",\"brother\",\"brussels\",\"bs\",\"bt\",\"build\",\"builders\",\"business\",\"buy\",\"buzz\",\"bv\",\"bw\",\"by\",\"bz\",\"bzh\",\"ca\",\"cab\",\"cafe\",\"cal\",\"call\",\"calvinklein\",\"cam\",\"camera\",\"camp\",\"canon\",\"capetown\",\"capital\",\"capitalone\",\"car\",\"caravan\",\"cards\",\"care\",\"career\",\"careers\",\"cars\",\"casa\",\"case\",\"cash\",\"casino\",\"cat\",\"catering\",\"catholic\",\"cba\",\"cbn\",\"cbre\",\"cbs\",\"cc\",\"cd\",\"center\",\"ceo\",\"cern\",\"cf\",\"cfa\",\"cfd\",\"cg\",\"ch\",\"chanel\",\"channel\",\"charity\",\"chase\",\"chat\",\"cheap\",\"chintai\",\"christmas\",\"chrome\",\"church\",\"ci\",\"cipriani\",\"circle\",\"cisco\",\"citadel\",\"citi\",\"citic\",\"city\",\"cityeats\",\"ck\",\"cl\",\"claims\",\"cleaning\",\"click\",\"clinic\",\"clinique\",\"clothing\",\"cloud\",\"club\",\"clubmed\",\"cm\",\"cn\",\"co\",\"coach\",\"codes\",\"coffee\",\"college\",\"cologne\",\"com\",\"comcast\",\"commbank\",\"community\",\"company\",\"compare\",\"computer\",\"comsec\",\"condos\",\"construction\",\"consulting\",\"contact\",\"contractors\",\"cooking\",\"cookingchannel\",\"cool\",\"coop\",\"corsica\",\"country\",\"coupon\",\"coupons\",\"courses\",\"cpa\",\"cr\",\"credit\",\"creditcard\",\"creditunion\",\"cricket\",\"crown\",\"crs\",\"cruise\",\"cruises\",\"cu\",\"cuisinella\",\"cv\",\"cw\",\"cx\",\"cy\",\"cymru\",\"cyou\",\"cz\",\"dabur\",\"dad\",\"dance\",\"data\",\"date\",\"dating\",\"datsun\",\"day\",\"dclk\",\"dds\",\"de\",\"deal\",\"dealer\",\"deals\",\"degree\",\"delivery\",\"dell\",\"deloitte\",\"delta\",\"democrat\",\"dental\",\"dentist\",\"desi\",\"design\",\"dev\",\"dhl\",\"diamonds\",\"diet\",\"digital\",\"direct\",\"directory\",\"discount\",\"discover\",\"dish\",\"diy\",\"dj\",\"dk\",\"dm\",\"dnp\",\"do\",\"docs\",\"doctor\",\"dog\",\"domains\",\"dot\",\"download\",\"drive\",\"dtv\",\"dubai\",\"dunlop\",\"dupont\",\"durban\",\"dvag\",\"dvr\",\"dz\",\"earth\",\"eat\",\"ec\",\"eco\",\"edeka\",\"edu\",\"education\",\"ee\",\"eg\",\"email\",\"emerck\",\"energy\",\"engineer\",\"engineering\",\"enterprises\",\"epson\",\"equipment\",\"er\",\"ericsson\",\"erni\",\"es\",\"esq\",\"estate\",\"et\",\"etisalat\",\"eu\",\"eurovision\",\"eus\",\"events\",\"exchange\",\"expert\",\"exposed\",\"express\",\"extraspace\",\"fage\",\"fail\",\"fairwinds\",\"faith\",\"family\",\"fan\",\"fans\",\"farm\",\"farmers\",\"fashion\",\"fast\",\"fedex\",\"feedback\",\"ferrari\",\"ferrero\",\"fi\",\"fiat\",\"fidelity\",\"fido\",\"film\",\"final\",\"finance\",\"financial\",\"fire\",\"firestone\",\"firmdale\",\"fish\",\"fishing\",\"fit\",\"fitness\",\"fj\",\"fk\",\"flickr\",\"flights\",\"flir\",\"florist\",\"flowers\",\"fly\",\"fm\",\"fo\",\"foo\",\"food\",\"foodnetwork\",\"football\",\"ford\",\"forex\",\"forsale\",\"forum\",\"foundation\",\"fox\",\"fr\",\"free\",\"fresenius\",\"frl\",\"frogans\",\"frontdoor\",\"frontier\",\"ftr\",\"fujitsu\",\"fun\",\"fund\",\"furniture\",\"futbol\",\"fyi\",\"ga\",\"gal\",\"gallery\",\"gallo\",\"gallup\",\"game\",\"games\",\"gap\",\"garden\",\"gay\",\"gb\",\"gbiz\",\"gd\",\"gdn\",\"ge\",\"gea\",\"gent\",\"genting\",\"george\",\"gf\",\"gg\",\"ggee\",\"gh\",\"gi\",\"gift\",\"gifts\",\"gives\",\"giving\",\"gl\",\"glass\",\"gle\",\"global\",\"globo\",\"gm\",\"gmail\",\"gmbh\",\"gmo\",\"gmx\",\"gn\",\"godaddy\",\"gold\",\"goldpoint\",\"golf\",\"goo\",\"goodyear\",\"goog\",\"google\",\"gop\",\"got\",\"gov\",\"gp\",\"gq\",\"gr\",\"grainger\",\"graphics\",\"gratis\",\"green\",\"gripe\",\"grocery\",\"group\",\"gs\",\"gt\",\"gu\",\"guardian\",\"gucci\",\"guge\",\"guide\",\"guitars\",\"guru\",\"gw\",\"gy\",\"hair\",\"hamburg\",\"hangout\",\"haus\",\"hbo\",\"hdfc\",\"hdfcbank\",\"health\",\"healthcare\",\"help\",\"helsinki\",\"here\",\"hermes\",\"hgtv\",\"hiphop\",\"hisamitsu\",\"hitachi\",\"hiv\",\"hk\",\"hkt\",\"hm\",\"hn\",\"hockey\",\"holdings\",\"holiday\",\"homedepot\",\"homegoods\",\"homes\",\"homesense\",\"honda\",\"horse\",\"hospital\",\"host\",\"hosting\",\"hot\",\"hoteles\",\"hotels\",\"hotmail\",\"house\",\"how\",\"hr\",\"hsbc\",\"ht\",\"hu\",\"hughes\",\"hyatt\",\"hyundai\",\"ibm\",\"icbc\",\"ice\",\"icu\",\"id\",\"ie\",\"ieee\",\"ifm\",\"ikano\",\"il\",\"im\",\"imamat\",\"imdb\",\"immo\",\"immobilien\",\"in\",\"inc\",\"industries\",\"infiniti\",\"info\",\"ing\",\"ink\",\"institute\",\"insurance\",\"insure\",\"int\",\"international\",\"intuit\",\"investments\",\"io\",\"ipiranga\",\"iq\",\"ir\",\"irish\",\"is\",\"ismaili\",\"ist\",\"istanbul\",\"it\",\"itau\",\"itv\",\"jaguar\",\"java\",\"jcb\",\"je\",\"jeep\",\"jetzt\",\"jewelry\",\"jio\",\"jll\",\"jm\",\"jmp\",\"jnj\",\"jo\",\"jobs\",\"joburg\",\"jot\",\"joy\",\"jp\",\"jpmorgan\",\"jprs\",\"juegos\",\"juniper\",\"kaufen\",\"kddi\",\"ke\",\"kerryhotels\",\"kerrylogistics\",\"kerryproperties\",\"kfh\",\"kg\",\"kh\",\"ki\",\"kia\",\"kids\",\"kim\",\"kinder\",\"kindle\",\"kitchen\",\"kiwi\",\"km\",\"kn\",\"koeln\",\"komatsu\",\"kosher\",\"kp\",\"kpmg\",\"kpn\",\"kr\",\"krd\",\"kred\",\"kuokgroup\",\"kw\",\"ky\",\"kyoto\",\"kz\",\"la\",\"lacaixa\",\"lamborghini\",\"lamer\",\"lancaster\",\"lancia\",\"land\",\"landrover\",\"lanxess\",\"lasalle\",\"lat\",\"latino\",\"latrobe\",\"law\",\"lawyer\",\"lb\",\"lc\",\"lds\",\"lease\",\"leclerc\",\"lefrak\",\"legal\",\"lego\",\"lexus\",\"lgbt\",\"li\",\"lidl\",\"life\",\"lifeinsurance\",\"lifestyle\",\"lighting\",\"like\",\"lilly\",\"limited\",\"limo\",\"lincoln\",\"linde\",\"link\",\"lipsy\",\"live\",\"living\",\"lk\",\"llc\",\"llp\",\"loan\",\"loans\",\"locker\",\"locus\",\"loft\",\"lol\",\"london\",\"lotte\",\"lotto\",\"love\",\"lpl\",\"lplfinancial\",\"lr\",\"ls\",\"lt\",\"ltd\",\"ltda\",\"lu\",\"lundbeck\",\"luxe\",\"luxury\",\"lv\",\"ly\",\"ma\",\"macys\",\"madrid\",\"maif\",\"maison\",\"makeup\",\"man\",\"management\",\"mango\",\"map\",\"market\",\"marketing\",\"markets\",\"marriott\",\"marshalls\",\"maserati\",\"mattel\",\"mba\",\"mc\",\"mckinsey\",\"md\",\"me\",\"med\",\"media\",\"meet\",\"melbourne\",\"meme\",\"memorial\",\"men\",\"menu\",\"merckmsd\",\"mg\",\"mh\",\"miami\",\"microsoft\",\"mil\",\"mini\",\"mint\",\"mit\",\"mitsubishi\",\"mk\",\"ml\",\"mlb\",\"mls\",\"mm\",\"mma\",\"mn\",\"mo\",\"mobi\",\"mobile\",\"moda\",\"moe\",\"moi\",\"mom\",\"monash\",\"money\",\"monster\",\"mormon\",\"mortgage\",\"moscow\",\"moto\",\"motorcycles\",\"mov\",\"movie\",\"mp\",\"mq\",\"mr\",\"ms\",\"msd\",\"mt\",\"mtn\",\"mtr\",\"mu\",\"museum\",\"music\",\"mutual\",\"mv\",\"mw\",\"mx\",\"my\",\"mz\",\"na\",\"nab\",\"nagoya\",\"name\",\"natura\",\"navy\",\"nba\",\"nc\",\"ne\",\"nec\",\"net\",\"netbank\",\"netflix\",\"network\",\"neustar\",\"new\",\"news\",\"next\",\"nextdirect\",\"nexus\",\"nf\",\"nfl\",\"ng\",\"ngo\",\"nhk\",\"ni\",\"nico\",\"nike\",\"nikon\",\"ninja\",\"nissan\",\"nissay\",\"nl\",\"no\",\"nokia\",\"northwesternmutual\",\"norton\",\"now\",\"nowruz\",\"nowtv\",\"np\",\"nr\",\"nra\",\"nrw\",\"ntt\",\"nu\",\"nyc\",\"nz\",\"obi\",\"observer\",\"office\",\"okinawa\",\"olayan\",\"olayangroup\",\"oldnavy\",\"ollo\",\"om\",\"omega\",\"one\",\"ong\",\"onl\",\"online\",\"ooo\",\"open\",\"oracle\",\"orange\",\"org\",\"organic\",\"origins\",\"osaka\",\"otsuka\",\"ott\",\"ovh\",\"pa\",\"page\",\"panasonic\",\"paris\",\"pars\",\"partners\",\"parts\",\"party\",\"passagens\",\"pay\",\"pccw\",\"pe\",\"pet\",\"pf\",\"pfizer\",\"pg\",\"ph\",\"pharmacy\",\"phd\",\"philips\",\"phone\",\"photo\",\"photography\",\"photos\",\"physio\",\"pics\",\"pictet\",\"pictures\",\"pid\",\"pin\",\"ping\",\"pink\",\"pioneer\",\"pizza\",\"pk\",\"pl\",\"place\",\"play\",\"playstation\",\"plumbing\",\"plus\",\"pm\",\"pn\",\"pnc\",\"pohl\",\"poker\",\"politie\",\"porn\",\"post\",\"pr\",\"pramerica\",\"praxi\",\"press\",\"prime\",\"pro\",\"prod\",\"productions\",\"prof\",\"progressive\",\"promo\",\"properties\",\"property\",\"protection\",\"pru\",\"prudential\",\"ps\",\"pt\",\"pub\",\"pw\",\"pwc\",\"py\",\"qa\",\"qpon\",\"quebec\",\"quest\",\"racing\",\"radio\",\"re\",\"read\",\"realestate\",\"realtor\",\"realty\",\"recipes\",\"red\",\"redstone\",\"redumbrella\",\"rehab\",\"reise\",\"reisen\",\"reit\",\"reliance\",\"ren\",\"rent\",\"rentals\",\"repair\",\"report\",\"republican\",\"rest\",\"restaurant\",\"review\",\"reviews\",\"rexroth\",\"rich\",\"richardli\",\"ricoh\",\"ril\",\"rio\",\"rip\",\"ro\",\"rocher\",\"rocks\",\"rodeo\",\"rogers\",\"room\",\"rs\",\"rsvp\",\"ru\",\"rugby\",\"ruhr\",\"run\",\"rw\",\"rwe\",\"ryukyu\",\"sa\",\"saarland\",\"safe\",\"safety\",\"sakura\",\"sale\",\"salon\",\"samsclub\",\"samsung\",\"sandvik\",\"sandvikcoromant\",\"sanofi\",\"sap\",\"sarl\",\"sas\",\"save\",\"saxo\",\"sb\",\"sbi\",\"sbs\",\"sc\",\"sca\",\"scb\",\"schaeffler\",\"schmidt\",\"scholarships\",\"school\",\"schule\",\"schwarz\",\"science\",\"scot\",\"sd\",\"se\",\"search\",\"seat\",\"secure\",\"security\",\"seek\",\"select\",\"sener\",\"services\",\"ses\",\"seven\",\"sew\",\"sex\",\"sexy\",\"sfr\",\"sg\",\"sh\",\"shangrila\",\"sharp\",\"shaw\",\"shell\",\"shia\",\"shiksha\",\"shoes\",\"shop\",\"shopping\",\"shouji\",\"show\",\"showtime\",\"si\",\"silk\",\"sina\",\"singles\",\"site\",\"sj\",\"sk\",\"ski\",\"skin\",\"sky\",\"skype\",\"sl\",\"sling\",\"sm\",\"smart\",\"smile\",\"sn\",\"sncf\",\"so\",\"soccer\",\"social\",\"softbank\",\"software\",\"sohu\",\"solar\",\"solutions\",\"song\",\"sony\",\"soy\",\"spa\",\"space\",\"sport\",\"spot\",\"sr\",\"srl\",\"ss\",\"st\",\"stada\",\"staples\",\"star\",\"statebank\",\"statefarm\",\"stc\",\"stcgroup\",\"stockholm\",\"storage\",\"store\",\"stream\",\"studio\",\"study\",\"style\",\"su\",\"sucks\",\"supplies\",\"supply\",\"support\",\"surf\",\"surgery\",\"suzuki\",\"sv\",\"swatch\",\"swiss\",\"sx\",\"sy\",\"sydney\",\"systems\",\"sz\",\"tab\",\"taipei\",\"talk\",\"taobao\",\"target\",\"tatamotors\",\"tatar\",\"tattoo\",\"tax\",\"taxi\",\"tc\",\"tci\",\"td\",\"tdk\",\"team\",\"tech\",\"technology\",\"tel\",\"temasek\",\"tennis\",\"teva\",\"tf\",\"tg\",\"th\",\"thd\",\"theater\",\"theatre\",\"tiaa\",\"tickets\",\"tienda\",\"tiffany\",\"tips\",\"tires\",\"tirol\",\"tj\",\"tjmaxx\",\"tjx\",\"tk\",\"tkmaxx\",\"tl\",\"tm\",\"tmall\",\"tn\",\"to\",\"today\",\"tokyo\",\"tools\",\"top\",\"toray\",\"toshiba\",\"total\",\"tours\",\"town\",\"toyota\",\"toys\",\"tr\",\"trade\",\"trading\",\"training\",\"travel\",\"travelchannel\",\"travelers\",\"travelersinsurance\",\"trust\",\"trv\",\"tt\",\"tube\",\"tui\",\"tunes\",\"tushu\",\"tv\",\"tvs\",\"tw\",\"tz\",\"ua\",\"ubank\",\"ubs\",\"ug\",\"uk\",\"unicom\",\"university\",\"uno\",\"uol\",\"ups\",\"us\",\"uy\",\"uz\",\"va\",\"vacations\",\"vana\",\"vanguard\",\"vc\",\"ve\",\"vegas\",\"ventures\",\"verisign\",\"vermögensberater\",\"vermögensberatung\",\"versicherung\",\"vet\",\"vg\",\"vi\",\"viajes\",\"video\",\"vig\",\"viking\",\"villas\",\"vin\",\"vip\",\"virgin\",\"visa\",\"vision\",\"viva\",\"vivo\",\"vlaanderen\",\"vn\",\"vodka\",\"volkswagen\",\"volvo\",\"vote\",\"voting\",\"voto\",\"voyage\",\"vu\",\"vuelos\",\"wales\",\"walmart\",\"walter\",\"wang\",\"wanggou\",\"watch\",\"watches\",\"weather\",\"weatherchannel\",\"webcam\",\"weber\",\"website\",\"wed\",\"wedding\",\"weibo\",\"weir\",\"wf\",\"whoswho\",\"wien\",\"wiki\",\"williamhill\",\"win\",\"windows\",\"wine\",\"winners\",\"wme\",\"wolterskluwer\",\"woodside\",\"work\",\"works\",\"world\",\"wow\",\"ws\",\"wtc\",\"wtf\",\"xbox\",\"xerox\",\"xfinity\",\"xihuan\",\"xin\",\"xxx\",\"xyz\",\"yachts\",\"yahoo\",\"yamaxun\",\"yandex\",\"ye\",\"yodobashi\",\"yoga\",\"yokohama\",\"you\",\"youtube\",\"yt\",\"yun\",\"za\",\"zappos\",\"zara\",\"zero\",\"zip\",\"zm\",\"zone\",\"zuerich\",\"zw\",\"ελ\",\"ευ\",\"бг\",\"бел\",\"дети\",\"ею\",\"католик\",\"ком\",\"мкд\",\"мон\",\"москва\",\"онлайн\",\"орг\",\"рус\",\"рф\",\"сайт\",\"срб\",\"укр\",\"қаз\",\"հայ\",\"ישראל\",\"קום\",\"ابوظبي\",\"اتصالات\",\"ارامكو\",\"الاردن\",\"البحرين\",\"الجزائر\",\"السعودية\",\"العليان\",\"المغرب\",\"امارات\",\"ایران\",\"بارت\",\"بازار\",\"بيتك\",\"بھارت\",\"تونس\",\"سودان\",\"سورية\",\"شبكة\",\"عراق\",\"عرب\",\"عمان\",\"فلسطين\",\"قطر\",\"كاثوليك\",\"كوم\",\"مصر\",\"مليسيا\",\"موريتانيا\",\"موقع\",\"همراه\",\"پاکستان\",\"ڀارت\",\"कॉम\",\"नेट\",\"भारत\",\"भारतम्\",\"भारोत\",\"संगठन\",\"বাংলা\",\"ভারত\",\"ভাৰত\",\"ਭਾਰਤ\",\"ભારત\",\"ଭାରତ\",\"இந்தியா\",\"இலங்கை\",\"சிங்கப்பூர்\",\"భారత్\",\"ಭಾರತ\",\"ഭാരതം\",\"ලංකා\",\"คอม\",\"ไทย\",\"ລາວ\",\"გე\",\"みんな\",\"アマゾン\",\"クラウド\",\"グーグル\",\"コム\",\"ストア\",\"セール\",\"ファッション\",\"ポイント\",\"世界\",\"中信\",\"中国\",\"中國\",\"中文网\",\"亚马逊\",\"企业\",\"佛山\",\"信息\",\"健康\",\"八卦\",\"公司\",\"公益\",\"台湾\",\"台灣\",\"商城\",\"商店\",\"商标\",\"嘉里\",\"嘉里大酒店\",\"在线\",\"大拿\",\"天主教\",\"娱乐\",\"家電\",\"广东\",\"微博\",\"慈善\",\"我爱你\",\"手机\",\"招聘\",\"政务\",\"政府\",\"新加坡\",\"新闻\",\"时尚\",\"書籍\",\"机构\",\"淡马锡\",\"游戏\",\"澳門\",\"点看\",\"移动\",\"组织机构\",\"网址\",\"网店\",\"网站\",\"网络\",\"联通\",\"诺基亚\",\"谷歌\",\"购物\",\"通販\",\"集团\",\"電訊盈科\",\"飞利浦\",\"食品\",\"餐厅\",\"香格里拉\",\"香港\",\"닷넷\",\"닷컴\",\"삼성\",\"한국\"]");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (text) {
  return text;
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(30);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Launcher", function() { return /* reexport */ components_LauncherNew; });

// EXTERNAL MODULE: ./src/styles/emojiPicker.css
var emojiPicker = __webpack_require__(8);

// EXTERNAL MODULE: ./src/styles/chat-window.css
var chat_window = __webpack_require__(9);

// EXTERNAL MODULE: ./src/styles/launcher.css
var launcher = __webpack_require__(10);

// EXTERNAL MODULE: ./src/styles/header.css
var header = __webpack_require__(11);

// EXTERNAL MODULE: ./src/styles/message.css
var styles_message = __webpack_require__(12);

// EXTERNAL MODULE: ./src/styles/user-input.css
var user_input = __webpack_require__(13);

// EXTERNAL MODULE: ./src/styles/popup-window.css
var popup_window = __webpack_require__(14);

// EXTERNAL MODULE: ./src/styles/pin-message.css
var pin_message = __webpack_require__(15);

// CONCATENATED MODULE: ./src/styles/index.js








// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_arity.js
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };

    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };

    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };

    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };

    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };

    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };

    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };

    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };

    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };

    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };

    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };

    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_pipe.js
function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isPlaceholder.js
function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_curry1.js

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_curry2.js


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;

      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_curry3.js



/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;

      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });

      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isArray.js
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
/* harmony default export */ var _isArray = (Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
});
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isString.js
function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isArrayLike.js



/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */

var _isArrayLike =
/*#__PURE__*/
_curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }

  if (!x) {
    return false;
  }

  if (typeof x !== 'object') {
    return false;
  }

  if (_isString(x)) {
    return false;
  }

  if (x.nodeType === 1) {
    return !!x.length;
  }

  if (x.length === 0) {
    return true;
  }

  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }

  return false;
});

/* harmony default export */ var internal_isArrayLike = (_isArrayLike);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_xwrap.js
var XWrap =
/*#__PURE__*/
function () {
  function XWrap(fn) {
    this.f = fn;
  }

  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };

  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };

  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}
// CONCATENATED MODULE: ./node_modules/ramda/es/bind.js


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */

var bind_bind =
/*#__PURE__*/
_curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});

/* harmony default export */ var es_bind = (bind_bind);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_reduce.js




function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    idx += 1;
  }

  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();

  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    step = iter.next();
  }

  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](es_bind(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap(fn);
  }

  if (internal_isArrayLike(list)) {
    return _arrayReduce(fn, acc, list);
  }

  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }

  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }

  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }

  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}
// CONCATENATED MODULE: ./node_modules/ramda/es/reduce.js


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */

var reduce =
/*#__PURE__*/
_curry3(_reduce);

/* harmony default export */ var es_reduce = (reduce);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_checkForMethod.js

/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */

function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;

    if (length === 0) {
      return fn();
    }

    var obj = arguments[length - 1];
    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/slice.js


/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */

var slice =
/*#__PURE__*/
_curry3(
/*#__PURE__*/
_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

/* harmony default export */ var es_slice = (slice);
// CONCATENATED MODULE: ./node_modules/ramda/es/tail.js



/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */

var tail =
/*#__PURE__*/
_curry1(
/*#__PURE__*/
_checkForMethod('tail',
/*#__PURE__*/
es_slice(1, Infinity)));

/* harmony default export */ var es_tail = (tail);
// CONCATENATED MODULE: ./node_modules/ramda/es/pipe.js




/**
 * Performs left-to-right function composition. The first argument may have
 * any arity; the remaining arguments must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */

function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }

  return _arity(arguments[0].length, es_reduce(_pipe, arguments[0], es_tail(arguments)));
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isInteger.js
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
/* harmony default export */ var _isInteger = (Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
});
// CONCATENATED MODULE: ./node_modules/ramda/es/nth.js


/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */

var nth_nth =
/*#__PURE__*/
_curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});

/* harmony default export */ var es_nth = (nth_nth);
// CONCATENATED MODULE: ./node_modules/ramda/es/paths.js



/**
 * Retrieves the values at given paths of an object.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Object
 * @typedefn Idx = [String | Int]
 * @sig [Idx] -> {a} -> [a | Undefined]
 * @param {Array} pathsArray The array of paths to be fetched.
 * @param {Object} obj The object to retrieve the nested properties from.
 * @return {Array} A list consisting of values at paths specified by "pathsArray".
 * @see R.path
 * @example
 *
 *      R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
 *      R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
 */

var paths_paths =
/*#__PURE__*/
_curry2(function paths(pathsArray, obj) {
  return pathsArray.map(function (paths) {
    var val = obj;
    var idx = 0;
    var p;

    while (idx < paths.length) {
      if (val == null) {
        return;
      }

      p = paths[idx];
      val = _isInteger(p) ? es_nth(p, val) : val[p];
      idx += 1;
    }

    return val;
  });
});

/* harmony default export */ var es_paths = (paths_paths);
// CONCATENATED MODULE: ./node_modules/ramda/es/path.js


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop, R.nth
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 */

var path_path =
/*#__PURE__*/
_curry2(function path(pathAr, obj) {
  return es_paths([pathAr], obj)[0];
});

/* harmony default export */ var es_path = (path_path);
// CONCATENATED MODULE: ./node_modules/ramda/es/prop.js


/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig Idx -> {s: a} -> a | Undefined
 * @param {String|Number} p The property name or array index
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path, R.nth
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *      R.prop(0, [100]); //=> 100
 *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 */

var prop_prop =
/*#__PURE__*/
_curry2(function prop(p, obj) {
  return es_path([p], obj);
});

/* harmony default export */ var es_prop = (prop_prop);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isNumber.js
function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}
// CONCATENATED MODULE: ./node_modules/ramda/es/length.js


/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */

var length_length =
/*#__PURE__*/
_curry1(function length(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});

/* harmony default export */ var es_length = (length_length);
// CONCATENATED MODULE: ./node_modules/ramda/es/last.js

/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */

var last =
/*#__PURE__*/
es_nth(-1);
/* harmony default export */ var es_last = (last);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_arrayFromIterator.js
function _arrayFromIterator(iter) {
  var list = [];
  var next;

  while (!(next = iter.next()).done) {
    list.push(next.value);
  }

  return list;
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_includesWith.js
function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }

    idx += 1;
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_functionName.js
function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_has.js
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_objectIs.js
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}

/* harmony default export */ var internal_objectIs = (typeof Object.is === 'function' ? Object.is : _objectIs);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isArguments.js

var _isArguments_toString = Object.prototype.toString;

var _isArguments_isArguments =
/*#__PURE__*/
function () {
  return _isArguments_toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return _isArguments_toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
}();

/* harmony default export */ var internal_isArguments = (_isArguments_isArguments);
// CONCATENATED MODULE: ./node_modules/ramda/es/keys.js


 // cover IE < 9 keys issues

var hasEnumBug = !
/*#__PURE__*/
{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug

var hasArgsEnumBug =
/*#__PURE__*/
function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;

  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }

    idx += 1;
  }

  return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */


var keys_keys = typeof Object.keys === 'function' && !hasArgsEnumBug ?
/*#__PURE__*/
_curry1(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) :
/*#__PURE__*/
_curry1(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }

  var prop, nIdx;
  var ks = [];

  var checkArgsLength = hasArgsEnumBug && internal_isArguments(obj);

  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }

  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;

    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];

      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }

      nIdx -= 1;
    }
  }

  return ks;
});
/* harmony default export */ var es_keys = (keys_keys);
// CONCATENATED MODULE: ./node_modules/ramda/es/type.js

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */

var type_type =
/*#__PURE__*/
_curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});

/* harmony default export */ var es_type = (type_type);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_equals.js







/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);

  var b = _arrayFromIterator(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  } // if *a* array contains any element that is not included in *b*


  return !_includesWith(function (b, aItem) {
    return !_includesWith(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (internal_objectIs(a, b)) {
    return true;
  }

  var typeA = es_type(a);

  if (typeA !== es_type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }

      break;

    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && internal_objectIs(a.valueOf(), b.valueOf()))) {
        return false;
      }

      break;

    case 'Date':
      if (!internal_objectIs(a.valueOf(), b.valueOf())) {
        return false;
      }

      break;

    case 'Error':
      return a.name === b.name && a.message === b.message;

    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }

      break;
  }

  var idx = stackA.length - 1;

  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }

    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;

    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = es_keys(a);

  if (keysA.length !== es_keys(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;

  while (idx >= 0) {
    var key = keysA[idx];

    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }

    idx -= 1;
  }

  return true;
}
// CONCATENATED MODULE: ./node_modules/ramda/es/equals.js


/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */

var equals_equals =
/*#__PURE__*/
_curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

/* harmony default export */ var es_equals = (equals_equals);
// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react-linkify/dist/index.js
var dist = __webpack_require__(4);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./src/components/Messages/TextMessage.js


var TextMessage_TextMessage = function TextMessage(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-message--text"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(dist_default.a, {
    properties: {
      target: '_blank'
    }
  }, props.data.text));
};
/* harmony default export */ var Messages_TextMessage = (TextMessage_TextMessage);
// CONCATENATED MODULE: ./src/components/Messages/EmojiMessage.js

var EmojiMessage_EmojiMessage = function EmojiMessage(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-message--emoji"
  }, props.data.emoji);
};
/* harmony default export */ var Messages_EmojiMessage = (EmojiMessage_EmojiMessage);
// CONCATENATED MODULE: ./src/components/icons/FileIcon.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FileIcon_FileIcon = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FileIcon, _Component);
  function FileIcon() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = FileIcon.prototype;
  _proto._handleClick = function _handleClick(e) {
    e.preventDefault();
    this.props.onClick && this.props.onClick(e);
  };
  _proto.render = function render() {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("button", {
      onFocus: this.props.onFocus,
      onBlur: this.props.onBlur,
      onClick: this._handleClick.bind(this),
      className: "sc-user-input--file-icon-wrapper"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
      version: "1.1",
      className: "sc-user-input--file-icon",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: "60px",
      height: "60px",
      viewBox: "0 0 55 55",
      enableBackground: "new 0 0 60 60"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
      d: "M43.922,6.653c-2.643-2.644-6.201-4.107-9.959-4.069c-3.774,0.019-7.32,1.497-9.983,4.161l-12.3,12.3l-8.523,8.521\r c-4.143,4.144-4.217,10.812-0.167,14.862c1.996,1.996,4.626,2.989,7.277,2.989c2.73,0,5.482-1.055,7.583-3.156l15.547-15.545\r c0.002-0.002,0.002-0.004,0.004-0.005l5.358-5.358c1.394-1.393,2.176-3.24,2.201-5.2c0.026-1.975-0.716-3.818-2.09-5.192\r c-2.834-2.835-7.496-2.787-10.394,0.108L9.689,29.857c-0.563,0.563-0.563,1.474,0,2.036c0.281,0.28,0.649,0.421,1.018,0.421\r c0.369,0,0.737-0.141,1.018-0.421l18.787-18.788c1.773-1.774,4.609-1.824,6.322-0.11c0.82,0.82,1.263,1.928,1.247,3.119\r c-0.017,1.205-0.497,2.342-1.357,3.201l-5.55,5.551c-0.002,0.002-0.002,0.004-0.004,0.005L15.814,40.225\r c-3.02,3.02-7.86,3.094-10.789,0.167c-2.928-2.929-2.854-7.77,0.167-10.791l0.958-0.958c0.001-0.002,0.004-0.002,0.005-0.004\r L26.016,8.78c2.123-2.124,4.951-3.303,7.961-3.317c2.998,0.02,5.814,1.13,7.91,3.226c4.35,4.351,4.309,11.472-0.093,15.873\r L25.459,40.895c-0.563,0.562-0.563,1.473,0,2.035c0.281,0.281,0.65,0.422,1.018,0.422c0.369,0,0.737-0.141,1.018-0.422\r L43.83,26.596C49.354,21.073,49.395,12.126,43.922,6.653z"
    }))));
  };
  return FileIcon;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);
/* harmony default export */ var icons_FileIcon = (FileIcon_FileIcon);
// CONCATENATED MODULE: ./src/components/Messages/FileMessage.js


var FileMessage_FileMessage = function FileMessage(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("a", {
    className: "sc-message--file",
    href: props.data.url,
    download: props.data.fileName
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(icons_FileIcon, null), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("p", null, props.data.fileName));
};
/* harmony default export */ var Messages_FileMessage = (FileMessage_FileMessage);
// CONCATENATED MODULE: ./src/assets/chat-icon.svg
/* harmony default export */ var chat_icon = (__webpack_require__.p + "chat-icon.f032be1d.svg");
// CONCATENATED MODULE: ./src/components/Messages/index.js







function Message(_ref) {
  var message = _ref.message;
  var type = es_prop('type', message);
  var author = es_prop('author', message);
  var me = es_equals(author, 'me');
  function renderMessageOfType(type) {
    switch (type) {
      case 'text':
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Messages_TextMessage, message);
      case 'emoji':
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Messages_EmojiMessage, message);
      case 'file':
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Messages_FileMessage, message);
      default:
        console.error("Attempting to load message with unsupported file type '" + type + "'");
    }
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-message"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: classnames_default()('sc-message--content', {
      'sent': me
    }, {
      'received': !me
    })
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-message--avatar",
    style: {
      backgroundImage: "url(" + chat_icon + ")"
    }
  }), renderMessageOfType(type)));
}
/* harmony default export */ var Messages = (Message);
// CONCATENATED MODULE: ./src/components/MessageList.js



function MessageList(props) {
  var element = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  var elementCurrent = es_prop('current', element);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (elementCurrent) {
      elementCurrent.scrollTop = elementCurrent.scrollHeight;
    }
  }, [props]);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-message-list",
    ref: element
  }, props.messages.map(function (message, i) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Messages, {
      message: message,
      key: i
    });
  }));
}
/* harmony default export */ var components_MessageList = (MessageList);
// CONCATENATED MODULE: ./src/components/icons/SendIcon.js
function SendIcon_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; SendIcon_setPrototypeOf(subClass, superClass); }
function SendIcon_setPrototypeOf(o, p) { SendIcon_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SendIcon_setPrototypeOf(o, p); }

var SendIcon_SendIcon = /*#__PURE__*/function (_Component) {
  SendIcon_inheritsLoose(SendIcon, _Component);
  function SendIcon() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = SendIcon.prototype;
  _proto.render = function render() {
    var _this = this;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("button", {
      onFocus: this.props.onFocus,
      onBlur: this.props.onBlur,
      onClick: function onClick(e) {
        e.preventDefault();
        _this.props.onClick(e);
      },
      className: "sc-user-input--send-icon-wrapper"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
      version: "1.1",
      className: "sc-user-input--send-icon",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: "37.393px",
      height: "37.393px",
      viewBox: "0 0 37.393 37.393",
      enableBackground: "new 0 0 37.393 37.393"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", {
      id: "Layer_2"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
      d: "M36.511,17.594L2.371,2.932c-0.374-0.161-0.81-0.079-1.1,0.21C0.982,3.43,0.896,3.865,1.055,4.241l5.613,13.263\r L2.082,32.295c-0.115,0.372-0.004,0.777,0.285,1.038c0.188,0.169,0.427,0.258,0.67,0.258c0.132,0,0.266-0.026,0.392-0.08\r l33.079-14.078c0.368-0.157,0.607-0.519,0.608-0.919S36.879,17.752,36.511,17.594z M4.632,30.825L8.469,18.45h8.061\r c0.552,0,1-0.448,1-1s-0.448-1-1-1H8.395L3.866,5.751l29.706,12.757L4.632,30.825z"
    }))));
  };
  return SendIcon;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);
/* harmony default export */ var icons_SendIcon = (SendIcon_SendIcon);
// CONCATENATED MODULE: ./src/components/icons/EmojiIcon.js

var EmojiIcon_EmojiIcon = function EmojiIcon(_ref) {
  var tooltip = _ref.tooltip,
    onClick = _ref.onClick,
    isActive = _ref.isActive;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-user-input--picker-wrapper"
  }, tooltip, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("button", {
    id: "sc-emoji-picker-button",
    className: "sc-user-input--emoji-icon-wrapper",
    onClick: onClick
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("svg", {
    className: "sc-user-input--emoji-icon " + (isActive ? 'active' : ''),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "100%",
    height: "10px",
    viewBox: "0 0 37 37",
    enableBackground: "new 0 0 37 37"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M18.696,37C8.387,37,0,29.006,0,18.696C0,8.387,8.387,0,18.696,0c10.31,0,18.696,8.387,18.696,18.696 C37,29.006,29.006,37,18.696,37z M18.696,2C9.49,2,2,9.49,2,18.696c0,9.206,7.49,16.696,16.696,16.696 c9.206,0,16.696-7.49,16.696-16.696C35.393,9.49,27.902,2,18.696,2z"
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("circle", {
    cx: "12.379",
    cy: "14.359",
    r: "1.938"
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("circle", {
    cx: "24.371",
    cy: "14.414",
    r: "1.992"
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("g", null, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("path", {
    d: "M18.035,27.453c-5.748,0-8.342-4.18-8.449-4.357c-0.286-0.473-0.135-1.087,0.338-1.373 c0.471-0.286,1.084-0.136,1.372,0.335c0.094,0.151,2.161,3.396,6.74,3.396c4.713,0,7.518-3.462,7.545-3.497 c0.343-0.432,0.973-0.504,1.405-0.161c0.433,0.344,0.505,0.973,0.161,1.405C27.009,23.374,23.703,27.453,18.035,27.453z"
  })))));
};
/* harmony default export */ var icons_EmojiIcon = (EmojiIcon_EmojiIcon);
// CONCATENATED MODULE: ./src/components/popups/PopupWindow.js
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function PopupWindow_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; PopupWindow_setPrototypeOf(subClass, superClass); }
function PopupWindow_setPrototypeOf(o, p) { PopupWindow_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PopupWindow_setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PopupWindow_PopupWindow = /*#__PURE__*/function (_Component) {
  PopupWindow_inheritsLoose(PopupWindow, _Component);
  function PopupWindow() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "interceptLauncherClick", function (e) {
      var isOpen = _this.props.isOpen;
      var clickedOutside = !_this.emojiPopup.contains(e.target) && isOpen;
      clickedOutside && _this.props.onClickedOutside(e);
    });
    return _this;
  }
  var _proto = PopupWindow.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.scLauncher = document.querySelector('#sc-launcher');
    this.scLauncher.addEventListener('click', this.interceptLauncherClick);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.scLauncher.removeEventListener('click', this.interceptLauncherClick);
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props,
      isOpen = _this$props.isOpen,
      children = _this$props.children;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: "sc-popup-window",
      ref: function ref(e) {
        return _this2.emojiPopup = e;
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: "sc-popup-window--cointainer " + (isOpen ? '' : 'closed')
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("input", {
      onChange: this.props.onInputChange,
      className: "sc-popup-window--search",
      placeholder: "Search emoji..."
    }), children));
  };
  return PopupWindow;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);
/* harmony default export */ var popups_PopupWindow = (PopupWindow_PopupWindow);
// EXTERNAL MODULE: ./node_modules/emoji-js/lib/emoji.js
var emoji = __webpack_require__(5);
var emoji_default = /*#__PURE__*/__webpack_require__.n(emoji);

// EXTERNAL MODULE: ./src/components/emoji-picker/emojiData.json
var emojiData = __webpack_require__(6);

// CONCATENATED MODULE: ./src/components/emoji-picker/EmojiPicker.js



var emojiConvertor = new emoji_default.a();
emojiConvertor.init_env();
var EmojiPicker_EmojiPicker = function EmojiPicker(_ref) {
  var onEmojiPicked = _ref.onEmojiPicked,
    filter = _ref.filter;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-emoji-picker"
  }, emojiData.map(function (category) {
    var filteredEmojis = category.emojis.filter(function (_ref2) {
      var name = _ref2.name;
      return name.includes(filter);
    });
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: "sc-emoji-picker--category",
      key: category.name
    }, filteredEmojis.length > 0 && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: "sc-emoji-picker--category-title"
    }, category.name), filteredEmojis.map(function (_ref3) {
      var _char = _ref3["char"],
        _name = _ref3._name;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
        key: _char,
        className: "sc-emoji-picker--emoji",
        onClick: function onClick() {
          return onEmojiPicked(_char);
        }
      }, _char);
    }));
  }));
};
/* harmony default export */ var emoji_picker_EmojiPicker = (EmojiPicker_EmojiPicker);
// CONCATENATED MODULE: ./src/components/UserInput.js
function UserInput_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function UserInput_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; UserInput_setPrototypeOf(subClass, superClass); }
function UserInput_setPrototypeOf(o, p) { UserInput_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UserInput_setPrototypeOf(o, p); }
function UserInput_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var UserInput_UserInput = /*#__PURE__*/function (_Component) {
  UserInput_inheritsLoose(UserInput, _Component);
  function UserInput() {
    var _this;
    _this = _Component.call(this) || this;
    UserInput_defineProperty(UserInput_assertThisInitialized(_this), "toggleEmojiPicker", function (e) {
      e.preventDefault();
      if (!_this.state.emojiPickerIsOpen) {
        _this.setState({
          emojiPickerIsOpen: true
        });
      }
    });
    UserInput_defineProperty(UserInput_assertThisInitialized(_this), "closeEmojiPicker", function (e) {
      if (_this.emojiPickerButton.contains(e.target)) {
        e.stopPropagation();
        e.preventDefault();
      }
      _this.setState({
        emojiPickerIsOpen: false
      });
    });
    UserInput_defineProperty(UserInput_assertThisInitialized(_this), "_handleEmojiPicked", function (emoji) {
      _this.setState({
        emojiPickerIsOpen: false
      });
      if (_this.state.inputHasText) {
        _this.userInput.innerHTML += emoji;
      } else {
        _this.props.onSubmit({
          author: 'me',
          type: 'emoji',
          data: {
            emoji: emoji
          }
        });
      }
    });
    UserInput_defineProperty(UserInput_assertThisInitialized(_this), "handleEmojiFilterChange", function (event) {
      var emojiFilter = event.target.value;
      _this.setState({
        emojiFilter: emojiFilter
      });
    });
    UserInput_defineProperty(UserInput_assertThisInitialized(_this), "_renderEmojiPopup", function () {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(popups_PopupWindow, {
        isOpen: _this.state.emojiPickerIsOpen,
        onClickedOutside: _this.closeEmojiPicker,
        onInputChange: _this.handleEmojiFilterChange
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(emoji_picker_EmojiPicker, {
        onEmojiPicked: _this._handleEmojiPicked,
        filter: _this.state.emojiFilter
      }));
    });
    _this.state = {
      inputActive: false,
      inputHasText: false,
      emojiPickerIsOpen: false,
      emojiFilter: ''
    };
    return _this;
  }
  var _proto = UserInput.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.emojiPickerButton = document.querySelector('#sc-emoji-picker-button');
  };
  _proto.handleKeyDown = function handleKeyDown(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      return this._submitText(event);
    }
  };
  _proto.handleKeyUp = function handleKeyUp(event) {
    var inputHasText = event.target.innerHTML.length !== 0 && event.target.innerText !== '\n';
    this.setState({
      inputHasText: inputHasText
    });
  };
  _proto._showFilePicker = function _showFilePicker() {
    this._fileUploadButton.click();
  };
  _proto._submitText = function _submitText(event) {
    event.preventDefault();
    var text = this.userInput.textContent;
    if (text && text.length > 0) {
      this.props.onSubmit({
        author: 'me',
        type: 'text',
        data: {
          text: text
        }
      });
      this.userInput.innerHTML = '';
    }
  };
  _proto._onFilesSelected = function _onFilesSelected(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.props.onFilesSelected(event.target.files);
    }
  };
  _proto._renderSendOrFileIcon = function _renderSendOrFileIcon() {
    var _this2 = this;
    if (!this.props.fileUpload) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: "sc-user-input--button"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(icons_SendIcon, {
        onClick: this._submitText.bind(this)
      }));
    }
    if (this.state.inputHasText) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
        className: "sc-user-input--button"
      }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(icons_SendIcon, {
        onClick: this._submitText.bind(this)
      }));
    }
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: "sc-user-input--button"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(icons_FileIcon, {
      onClick: this._showFilePicker.bind(this)
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("input", {
      type: "file",
      name: "files[]",
      multiple: true,
      ref: function ref(e) {
        _this2._fileUploadButton = e;
      },
      onChange: this._onFilesSelected.bind(this)
    }));
  };
  _proto.render = function render() {
    var _this3 = this;
    var _this$state = this.state,
      emojiPickerIsOpen = _this$state.emojiPickerIsOpen,
      inputActive = _this$state.inputActive;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("form", {
      className: "sc-user-input " + (inputActive ? 'active' : '')
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      role: "button",
      tabIndex: "0",
      onFocus: function onFocus() {
        _this3.setState({
          inputActive: true
        });
      },
      onBlur: function onBlur() {
        _this3.setState({
          inputActive: false
        });
      },
      ref: function ref(e) {
        _this3.userInput = e;
      },
      onKeyDown: this.handleKeyDown.bind(this),
      onKeyUp: this.handleKeyUp.bind(this),
      contentEditable: "true",
      placeholder: this.props.placeholder,
      className: "sc-user-input--text"
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: "sc-user-input--buttons"
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: "sc-user-input--button"
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: "sc-user-input--button"
    }, this.props.showEmoji && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(icons_EmojiIcon, {
      onClick: this.toggleEmojiPicker,
      isActive: emojiPickerIsOpen,
      tooltip: this._renderEmojiPopup()
    })), this._renderSendOrFileIcon()));
  };
  return UserInput;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);
UserInput_UserInput.propTypes = {
  onSubmit: prop_types_default.a.func.isRequired,
  onFilesSelected: prop_types_default.a.func.isRequired,
  showEmoji: prop_types_default.a.bool
};
/* harmony default export */ var components_UserInput = (UserInput_UserInput);
// CONCATENATED MODULE: ./src/assets/close-icon.png
/* harmony default export */ var close_icon = (__webpack_require__.p + "close-icon.3faa3158.png");
// CONCATENATED MODULE: ./src/components/Header.js


function Header(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-header"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("img", {
    className: "sc-header--img",
    src: props.imageUrl,
    alt: ""
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-header--team-name"
  }, " ", props.teamName, " "), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-header--close-button",
    onClick: props.onClose
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("img", {
    src: close_icon,
    alt: ""
  })));
}
/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./node_modules/ramda/es/defaultTo.js

/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      const defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42(false);  //=> false
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */

var defaultTo =
/*#__PURE__*/
_curry2(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});

/* harmony default export */ var es_defaultTo = (defaultTo);
// CONCATENATED MODULE: ./node_modules/ramda/es/pathOr.js



/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */

var pathOr_pathOr =
/*#__PURE__*/
_curry3(function pathOr(d, p, obj) {
  return es_defaultTo(d, es_path(p, obj));
});

/* harmony default export */ var es_pathOr = (pathOr_pathOr);
// CONCATENATED MODULE: ./node_modules/ramda/es/propOr.js


/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      const alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      const favorite = R.prop('favoriteLibrary');
 *      const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */

var propOr_propOr =
/*#__PURE__*/
_curry3(function propOr(val, p, obj) {
  return es_pathOr(val, [p], obj);
});

/* harmony default export */ var es_propOr = (propOr_propOr);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_curryN.js


/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;

    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;

      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }

      combined[combinedIdx] = result;

      if (!_isPlaceholder(result)) {
        left -= 1;
      }

      combinedIdx += 1;
    }

    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/curryN.js




/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */

var curryN_curryN =
/*#__PURE__*/
_curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }

  return _arity(length, _curryN(length, [], fn));
});

/* harmony default export */ var es_curryN = (curryN_curryN);
// CONCATENATED MODULE: ./node_modules/ramda/es/ifElse.js


/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when, R.cond
 * @example
 *
 *      const incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */

var ifElse_ifElse =
/*#__PURE__*/
_curry3(function ifElse(condition, onTrue, onFalse) {
  return es_curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});

/* harmony default export */ var es_ifElse = (ifElse_ifElse);
// CONCATENATED MODULE: ./src/assets/image.png
/* harmony default export */ var assets_image = (__webpack_require__.p + "image.6779a2a6.png");
// CONCATENATED MODULE: ./src/components/PinMessage.js




function PinMessage(_ref) {
  var pinMessage = _ref.pinMessage,
    onPinMessage = _ref.onPinMessage;
  var image = es_propOr(assets_image, 'imageUrl', pinMessage);
  var title = pipe(es_prop('title'), es_ifElse(function (item) {
    return es_length(item) > 34;
  }, function (item) {
    return item.slice(0, 34) + "...";
  }, function (item) {
    return item;
  }))(pinMessage);
  var text = pipe(es_prop('text'), es_ifElse(function (item) {
    return es_length(item) > 50;
  }, function (item) {
    return item.slice(0, 50) + "...";
  }, function (item) {
    return item;
  }))(pinMessage);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-pin--message",
    onClick: function onClick() {
      return onPinMessage(pinMessage);
    }
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("img", {
    className: "sc-pin--message--img",
    src: image,
    alt: ""
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-pin--message--desc"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-pin--message--title"
  }, title), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", null, text)));
}
PinMessage.propTypes = {
  pinMessage: prop_types_default.a.object,
  onPinMessage: prop_types_default.a.func
};
/* harmony default export */ var components_PinMessage = (PinMessage);
// CONCATENATED MODULE: ./src/components/ChatWindow.js







function ChatWindow(props) {
  var isOpen = props.isOpen,
    onClose = props.onClose,
    agentProfile = props.agentProfile,
    showEmoji = props.showEmoji,
    fileUpload = props.fileUpload,
    messageList = props.messageList,
    onUserInputSubmit = props.onUserInputSubmit,
    onFilesSelected = props.onFilesSelected,
    pinMessage = props.pinMessage,
    onPinMessage = props.onPinMessage,
    placeholder = props.placeholder;
  var teamName = agentProfile.teamName,
    imageUrl = agentProfile.imageUrl;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: classnames_default()('sc-chat-window', {
      'opened': isOpen
    }, {
      'closed': !isOpen
    })
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(components_Header, {
    teamName: teamName,
    imageUrl: imageUrl,
    onClose: onClose
  }), pinMessage && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(components_PinMessage, {
    pinMessage: pinMessage,
    onPinMessage: onPinMessage
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(components_MessageList, {
    messages: messageList,
    imageUrl: imageUrl
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(components_UserInput, {
    onSubmit: onUserInputSubmit,
    onFilesSelected: onFilesSelected,
    showEmoji: showEmoji,
    fileUpload: fileUpload,
    placeholder: placeholder
  }));
}
ChatWindow.propTypes = {
  isOpen: prop_types_default.a.bool.isRequired,
  onClose: prop_types_default.a.func.isRequired,
  agentProfile: prop_types_default.a.object.isRequired,
  showEmoji: prop_types_default.a.bool,
  fileUpload: prop_types_default.a.bool,
  messageList: prop_types_default.a.array,
  onUserInputSubmit: prop_types_default.a.func.isRequired,
  onFilesSelected: prop_types_default.a.func,
  pinMessage: prop_types_default.a.object,
  onPinMessage: prop_types_default.a.func,
  placeholder: prop_types_default.a.string
};
/* harmony default export */ var components_ChatWindow = (ChatWindow);
// CONCATENATED MODULE: ./src/assets/logo-no-bg.svg
/* harmony default export */ var logo_no_bg = (__webpack_require__.p + "logo-no-bg.4d881dc9.svg");
// CONCATENATED MODULE: ./src/assets/sounds/notification.mp3
/* harmony default export */ var notification = (__webpack_require__.p + "notification.aa8f8c40.mp3");
// CONCATENATED MODULE: ./src/components/LauncherNew.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function LauncherNew(props) {
  var isOpen = props.isOpen,
    onClick = props.onClick,
    mute = props.mute,
    showEmoji = props.showEmoji,
    agentProfile = props.agentProfile,
    messageList = props.messageList,
    newMessagesCount = props.newMessagesCount,
    onMessageWasSent = props.onMessageWasSent,
    onFilesSelected = props.onFilesSelected,
    fileUpload = props.fileUpload,
    pinMessage = props.pinMessage,
    onPinMessage = props.onPinMessage,
    placeholder = props.placeholder;
  var defaultState = {
    isOpen: false,
    messageList: messageList
  };
  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(defaultState),
    state = _useState[0],
    setState = _useState[1];
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    setState(function (state) {
      return _extends({}, state, {
        isOpen: isOpen
      });
    });
  }, [isOpen]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    var prevMessageListLength = pipe(es_prop('messageList'), es_length)(state);
    var massageListLength = es_length(messageList);
    var isIncoming = pipe(es_last, es_prop('author'), es_equals('them'))(messageList);
    var isNew = massageListLength > prevMessageListLength;
    if (isIncoming && isNew) {
      if (!mute) {
        playIncomingMessageSound();
      }
      setState(function (state) {
        return _extends({}, state, {
          messageList: messageList
        });
      });
    }
  }, [messageList]);
  function playIncomingMessageSound() {
    var audio = new Audio(notification);
    audio.play();
  }
  function handleClick() {
    if (onClick) {
      onClick();
    } else {
      setState(function (state) {
        return _extends({}, state, {
          isOpen: !state.isOpen
        });
      });
    }
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    id: "sc-launcher"
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: classnames_default()('sc-launcher', {
      'opened': state.isOpen
    }),
    onClick: handleClick
  }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(LauncherNew_MessageCount, {
    count: newMessagesCount,
    isOpen: state.isOpen
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("img", {
    className: 'sc-open-icon',
    src: close_icon
  }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("img", {
    className: 'sc-closed-icon',
    src: logo_no_bg
  })), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(components_ChatWindow, {
    messageList: messageList,
    onUserInputSubmit: onMessageWasSent,
    onFilesSelected: onFilesSelected,
    agentProfile: agentProfile,
    isOpen: state.isOpen,
    onClose: onClick,
    showEmoji: showEmoji,
    fileUpload: fileUpload,
    pinMessage: pinMessage,
    onPinMessage: onPinMessage,
    placeholder: placeholder
  }));
}
var LauncherNew_MessageCount = function MessageCount(_ref) {
  var count = _ref.count,
    isOpen = _ref.isOpen;
  if (count === 0 || isOpen === true) return null;
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
    className: "sc-new-messages-count"
  }, count);
};
LauncherNew.propTypes = {
  isOpen: prop_types_default.a.bool,
  onClick: prop_types_default.a.func,
  mute: prop_types_default.a.bool,
  showEmoji: prop_types_default.a.bool,
  messageList: prop_types_default.a.arrayOf(prop_types_default.a.object),
  newMessagesCount: prop_types_default.a.number,
  onMessageWasSent: prop_types_default.a.func,
  onMessageWasReceived: prop_types_default.a.func,
  fileUpload: prop_types_default.a.bool,
  pinMessage: prop_types_default.a.object,
  onPinMessage: prop_types_default.a.func,
  placeholder: prop_types_default.a.string
};
LauncherNew.defaultProps = {
  isOpen: false,
  mute: false,
  showEmoji: true,
  messageList: [],
  newMessagesCount: 0,
  fileUpload: true,
  placeholder: 'Write a reply...'
};
/* harmony default export */ var components_LauncherNew = (LauncherNew);
// CONCATENATED MODULE: ./src/index.js

// import Launcher from './components/Launcher';



/***/ })
/******/ ])["default"];
});