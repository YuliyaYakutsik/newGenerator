/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/main/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/jquery/dist/jquery.js from dll-reference library ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference library */ "dll-reference library"))(1);

/***/ }),

/***/ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js":
/*!*******************************************************************!*\
  !*** ./node_modules/magnific-popup/dist/jquery.magnific-popup.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
if (true) { 
 // AMD. Register as an anonymous module. 
 !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); 
 } else {} 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));

/***/ }),

/***/ "./node_modules/owl.carousel/dist/owl.carousel.js":
/*!********************************************************!*\
  !*** ./node_modules/owl.carousel/dist/owl.carousel.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var window = global;
var window = (window || {});
window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
(function() {
var define = false;

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap( $( '<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});

			this._mergers = this._items.map(function() {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
              position -= settings.lazyLoadEager;
              n++;
            }
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function() {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function() {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function() {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = $('<div/>',{
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $( '<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap( $( '<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
		html.attr( 'height', height );
		html.attr( 'width', width );
		if (video.type === 'youtube') {
			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
		} else if (video.type === 'vimeo') {
			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
		} else if (video.type === 'vzaar') {
			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
		}

		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);

}.call(window));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/blocks/modal/modal.js":
/*!***********************************!*\
  !*** ./src/blocks/modal/modal.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a new Modal class.
 * @class
 */
var Modal = function Modal() {
    var self = this;

    self.body = (0, _jquery2.default)('body');

    /**
     * Add events listeners
     */
    self.setupListener = function () {
        self.body.on('click', '.modal_trigger', self.router);
        self.body.on('click', '.modal_close', self.close);
    };

    /**
     * Routes open and close methods
     * @param {Object} event
     */
    self.router = function (event) {
        event.preventDefault();

        var target = (0, _jquery2.default)(this);
        var src = '';
        var type = '';

        if (target.hasClass('modal_trigger')) {

            src = target.attr('href');
            type = target.data('modal-type') || 'inline';

            self.open(src, type);
        } else if (target.hasClass('modal_close')) {

            self.close();
        }
    };

    /**
     * Open modal
     */
    self.open = function (src, type) {
        _jquery2.default.magnificPopup.open({
            items: {
                src: src,
                type: type
            },
            callbacks: {
                beforeOpen: function beforeOpen() {
                    self.body.addClass('modal_js_open');
                },
                close: function close() {
                    self.body.removeClass('modal_js_open');
                    var questionForm = (0, _jquery2.default)('#question-form');
                    var questionFormElement = questionForm.find('.form__element');
                    var message = questionForm.find('.form-message');

                    questionFormElement.removeClass('input-alert');

                    if (questionForm.hasClass('show-message-success')) {
                        questionForm.removeClass('show-message-success');
                        message.removeClass('show-message-success');
                        questionFormElement.removeClass('focused');
                        questionFormElement.each(function () {
                            (0, _jquery2.default)(this).val('');
                        });
                    }
                }
            },
            showCloseBtn: false,
            midClick: true
        });
    };

    /**
     * Close modal
     */
    self.close = function () {
        _jquery2.default.magnificPopup.close();
    };

    /**
     * Init module
     */
    self.init = function () {
        self.setupListener();
    };
};

if (!('modules' in _jquery2.default)) {
    _jquery2.default.modules = {};
}

var modal = new Modal();

(0, _jquery2.default)(function () {
    return modal.init();
});

/***/ }),

/***/ "./src/blocks/steps/steps.js":
/*!***********************************!*\
  !*** ./src/blocks/steps/steps.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a new Steps class.
 * @class
 */
var Steps = function Steps() {
    var self = this;

    /**
     * Add events listeners
     */
    self.setupListener = function () {
        (0, _jquery2.default)(window).on('resize', self.animateSteps);
    };

    /**
     * Animate Steps-Tablet
     */
    self.animateSteps = function () {
        var owl = (0, _jquery2.default)('.steps__list');
        var owlContainer = owl.closest('.steps__list__wrapper');
        var owlControlLeft = owlContainer.find('.steps__controls__left');
        var owlControlRight = owlContainer.find('.steps__controls__right');

        if ((0, _jquery2.default)(window).width() <= '767') {
            if (!owl.hasClass('owl-carousel')) {
                owl.addClass('owl-carousel').addClass('.owl-theme');
                owl.find('.steps__item').addClass('steps__item_carousel');
                owlControlLeft.addClass('active');
                owlControlRight.addClass('active');

                owl.owlCarousel({
                    loop: false,
                    items: 1,
                    slideBy: 1,
                    smartSpeed: 300,
                    mouseDrag: false
                });

                owl.on('changed.owl.carousel', function () {
                    var items = owlContainer.find('.owl-dots');

                    if (items.find('.owl-dot.active').index() === 0) {
                        owlControlLeft.addClass('disabled');
                        owlControlRight.removeClass('disabled');
                    } else if (items.find('.owl-dot.active').index() === items.find('.owl-dot').length - 1) {
                        owlControlRight.addClass('disabled');
                        owlControlLeft.removeClass('disabled');
                    } else {
                        owlControlLeft.removeClass('disabled');
                        owlControlRight.removeClass('disabled');
                    }
                });

                owlControlLeft.on('click', function (e) {
                    e.preventDefault();

                    owl.trigger('prev.owl.carousel');
                });

                owlControlRight.on('click', function (e) {
                    e.preventDefault();

                    owl.trigger('next.owl.carousel');
                });
            }
        } else {
            if (owl.hasClass('owl-carousel')) {
                owl.off('changed.owl.carousel');
                owl.removeClass('owl-carousel').removeClass('.owl-theme');
                owlControlLeft.removeClass('active');
                owlControlRight.removeClass('active');
                owlControlRight.off();
                owlControlLeft.off();
                owl.trigger('destroy.owl.carousel');
                (0, _jquery2.default)('.steps__item').removeClass('steps__item_carousel');
            }
        }
    };

    self.init = function () {
        self.animateSteps();
        self.setupListener();
    };
};

if (!('modules' in _jquery2.default)) {
    _jquery2.default.modules = {};
}
var steps = new Steps();

(0, _jquery2.default)(function () {
    return steps.init();
});

/***/ }),

/***/ "./src/pages/main/main.js":
/*!********************************!*\
  !*** ./src/pages/main/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../blocks/steps/steps */ "./src/blocks/steps/steps.js");

__webpack_require__(/*! ../../blocks/modal/modal */ "./src/blocks/modal/modal.js");

/***/ }),

/***/ "dll-reference library":
/*!**************************!*\
  !*** external "library" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = library;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGlicmFyeSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWFnbmlmaWMtcG9wdXAvZGlzdC9qcXVlcnkubWFnbmlmaWMtcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL293bC5jYXJvdXNlbC9kaXN0L293bC5jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy9zcmMvYmxvY2tzL21vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy9zcmMvYmxvY2tzL3N0ZXBzL3N0ZXBzLmpzIiwid2VicGFjazovLy9zcmMvcGFnZXMvbWFpbi9tYWluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxpYnJhcnlcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9tYWluL21haW4uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYnJhcnkgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYnJhcnlcIikpKDEpOyIsIi8qISBNYWduaWZpYyBQb3B1cCAtIHYxLjEuMCAtIDIwMTYtMDItMjBcbiogaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvXG4qIENvcHlyaWdodCAoYykgMjAxNiBEbWl0cnkgU2VtZW5vdjsgKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHsgXG5pZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7IFxuIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS4gXG4gZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpOyBcbiB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JykgeyBcbiAvLyBOb2RlL0NvbW1vbkpTIFxuIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpOyBcbiB9IGVsc2UgeyBcbiAvLyBCcm93c2VyIGdsb2JhbHMgXG4gZmFjdG9yeSh3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0byk7IFxuIH0gXG4gfShmdW5jdGlvbigkKSB7IFxuXG4vKj4+Y29yZSovXG4vKipcbiAqIFxuICogTWFnbmlmaWMgUG9wdXAgQ29yZSBKUyBmaWxlXG4gKiBcbiAqL1xuXG5cbi8qKlxuICogUHJpdmF0ZSBzdGF0aWMgY29uc3RhbnRzXG4gKi9cbnZhciBDTE9TRV9FVkVOVCA9ICdDbG9zZScsXG5cdEJFRk9SRV9DTE9TRV9FVkVOVCA9ICdCZWZvcmVDbG9zZScsXG5cdEFGVEVSX0NMT1NFX0VWRU5UID0gJ0FmdGVyQ2xvc2UnLFxuXHRCRUZPUkVfQVBQRU5EX0VWRU5UID0gJ0JlZm9yZUFwcGVuZCcsXG5cdE1BUktVUF9QQVJTRV9FVkVOVCA9ICdNYXJrdXBQYXJzZScsXG5cdE9QRU5fRVZFTlQgPSAnT3BlbicsXG5cdENIQU5HRV9FVkVOVCA9ICdDaGFuZ2UnLFxuXHROUyA9ICdtZnAnLFxuXHRFVkVOVF9OUyA9ICcuJyArIE5TLFxuXHRSRUFEWV9DTEFTUyA9ICdtZnAtcmVhZHknLFxuXHRSRU1PVklOR19DTEFTUyA9ICdtZnAtcmVtb3ZpbmcnLFxuXHRQUkVWRU5UX0NMT1NFX0NMQVNTID0gJ21mcC1wcmV2ZW50LWNsb3NlJztcblxuXG4vKipcbiAqIFByaXZhdGUgdmFycyBcbiAqL1xuLypqc2hpbnQgLVcwNzkgKi9cbnZhciBtZnAsIC8vIEFzIHdlIGhhdmUgb25seSBvbmUgaW5zdGFuY2Ugb2YgTWFnbmlmaWNQb3B1cCBvYmplY3QsIHdlIGRlZmluZSBpdCBsb2NhbGx5IHRvIG5vdCB0byB1c2UgJ3RoaXMnXG5cdE1hZ25pZmljUG9wdXAgPSBmdW5jdGlvbigpe30sXG5cdF9pc0pRID0gISEod2luZG93LmpRdWVyeSksXG5cdF9wcmV2U3RhdHVzLFxuXHRfd2luZG93ID0gJCh3aW5kb3cpLFxuXHRfZG9jdW1lbnQsXG5cdF9wcmV2Q29udGVudFR5cGUsXG5cdF93cmFwQ2xhc3Nlcyxcblx0X2N1cnJQb3B1cFR5cGU7XG5cblxuLyoqXG4gKiBQcml2YXRlIGZ1bmN0aW9uc1xuICovXG52YXIgX21mcE9uID0gZnVuY3Rpb24obmFtZSwgZikge1xuXHRcdG1mcC5ldi5vbihOUyArIG5hbWUgKyBFVkVOVF9OUywgZik7XG5cdH0sXG5cdF9nZXRFbCA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgYXBwZW5kVG8sIGh0bWwsIHJhdykge1xuXHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGVsLmNsYXNzTmFtZSA9ICdtZnAtJytjbGFzc05hbWU7XG5cdFx0aWYoaHRtbCkge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gaHRtbDtcblx0XHR9XG5cdFx0aWYoIXJhdykge1xuXHRcdFx0ZWwgPSAkKGVsKTtcblx0XHRcdGlmKGFwcGVuZFRvKSB7XG5cdFx0XHRcdGVsLmFwcGVuZFRvKGFwcGVuZFRvKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYoYXBwZW5kVG8pIHtcblx0XHRcdGFwcGVuZFRvLmFwcGVuZENoaWxkKGVsKTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsO1xuXHR9LFxuXHRfbWZwVHJpZ2dlciA9IGZ1bmN0aW9uKGUsIGRhdGEpIHtcblx0XHRtZnAuZXYudHJpZ2dlckhhbmRsZXIoTlMgKyBlLCBkYXRhKTtcblxuXHRcdGlmKG1mcC5zdC5jYWxsYmFja3MpIHtcblx0XHRcdC8vIGNvbnZlcnRzIFwibWZwRXZlbnROYW1lXCIgdG8gXCJldmVudE5hbWVcIiBjYWxsYmFjayBhbmQgdHJpZ2dlcnMgaXQgaWYgaXQncyBwcmVzZW50XG5cdFx0XHRlID0gZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGUuc2xpY2UoMSk7XG5cdFx0XHRpZihtZnAuc3QuY2FsbGJhY2tzW2VdKSB7XG5cdFx0XHRcdG1mcC5zdC5jYWxsYmFja3NbZV0uYXBwbHkobWZwLCAkLmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9nZXRDbG9zZUJ0biA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRpZih0eXBlICE9PSBfY3VyclBvcHVwVHlwZSB8fCAhbWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bikge1xuXHRcdFx0bWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0biA9ICQoIG1mcC5zdC5jbG9zZU1hcmt1cC5yZXBsYWNlKCcldGl0bGUlJywgbWZwLnN0LnRDbG9zZSApICk7XG5cdFx0XHRfY3VyclBvcHVwVHlwZSA9IHR5cGU7XG5cdFx0fVxuXHRcdHJldHVybiBtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuO1xuXHR9LFxuXHQvLyBJbml0aWFsaXplIE1hZ25pZmljIFBvcHVwIG9ubHkgd2hlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZVxuXHRfY2hlY2tJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCEkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UpIHtcblx0XHRcdC8qanNoaW50IC1XMDIwICovXG5cdFx0XHRtZnAgPSBuZXcgTWFnbmlmaWNQb3B1cCgpO1xuXHRcdFx0bWZwLmluaXQoKTtcblx0XHRcdCQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSA9IG1mcDtcblx0XHR9XG5cdH0sXG5cdC8vIENTUyB0cmFuc2l0aW9uIGRldGVjdGlvbiwgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MjY0ODk5L2RldGVjdC1jc3MtdHJhbnNpdGlvbnMtdXNpbmctamF2YXNjcmlwdC1hbmQtd2l0aG91dC1tb2Rlcm5penJcblx0c3VwcG9ydHNUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlLCAvLyAncycgZm9yIHN0eWxlLiBiZXR0ZXIgdG8gY3JlYXRlIGFuIGVsZW1lbnQgaWYgYm9keSB5ZXQgdG8gZXhpc3Rcblx0XHRcdHYgPSBbJ21zJywnTycsJ01veicsJ1dlYmtpdCddOyAvLyAndicgZm9yIHZlbmRvclxuXG5cdFx0aWYoIHNbJ3RyYW5zaXRpb24nXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuIHRydWU7IFxuXHRcdH1cblx0XHRcdFxuXHRcdHdoaWxlKCB2Lmxlbmd0aCApIHtcblx0XHRcdGlmKCB2LnBvcCgpICsgJ1RyYW5zaXRpb24nIGluIHMgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcdFx0XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblxuLyoqXG4gKiBQdWJsaWMgZnVuY3Rpb25zXG4gKi9cbk1hZ25pZmljUG9wdXAucHJvdG90eXBlID0ge1xuXG5cdGNvbnN0cnVjdG9yOiBNYWduaWZpY1BvcHVwLFxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyBNYWduaWZpYyBQb3B1cCBwbHVnaW4uIFxuXHQgKiBUaGlzIGZ1bmN0aW9uIGlzIHRyaWdnZXJlZCBvbmx5IG9uY2Ugd2hlbiAkLmZuLm1hZ25pZmljUG9wdXAgb3IgJC5tYWduaWZpY1BvcHVwIGlzIGV4ZWN1dGVkXG5cdCAqL1xuXHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgYXBwVmVyc2lvbiA9IG5hdmlnYXRvci5hcHBWZXJzaW9uO1xuXHRcdG1mcC5pc0xvd0lFID0gbWZwLmlzSUU4ID0gZG9jdW1lbnQuYWxsICYmICFkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyO1xuXHRcdG1mcC5pc0FuZHJvaWQgPSAoL2FuZHJvaWQvZ2kpLnRlc3QoYXBwVmVyc2lvbik7XG5cdFx0bWZwLmlzSU9TID0gKC9pcGhvbmV8aXBhZHxpcG9kL2dpKS50ZXN0KGFwcFZlcnNpb24pO1xuXHRcdG1mcC5zdXBwb3J0c1RyYW5zaXRpb24gPSBzdXBwb3J0c1RyYW5zaXRpb25zKCk7XG5cblx0XHQvLyBXZSBkaXNhYmxlIGZpeGVkIHBvc2l0aW9uZWQgbGlnaHRib3ggb24gZGV2aWNlcyB0aGF0IGRvbid0IGhhbmRsZSBpdCBuaWNlbHkuXG5cdFx0Ly8gSWYgeW91IGtub3cgYSBiZXR0ZXIgd2F5IG9mIGRldGVjdGluZyB0aGlzIC0gbGV0IG1lIGtub3cuXG5cdFx0bWZwLnByb2JhYmx5TW9iaWxlID0gKG1mcC5pc0FuZHJvaWQgfHwgbWZwLmlzSU9TIHx8IC8oT3BlcmEgTWluaSl8S2luZGxlfHdlYk9TfEJsYWNrQmVycnl8KE9wZXJhIE1vYmkpfChXaW5kb3dzIFBob25lKXxJRU1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKTtcblx0XHRfZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcblxuXHRcdG1mcC5wb3B1cHNDYWNoZSA9IHt9O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBPcGVucyBwb3B1cFxuXHQgKiBAcGFyYW0gIGRhdGEgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0b3BlbjogZnVuY3Rpb24oZGF0YSkge1xuXG5cdFx0dmFyIGk7XG5cblx0XHRpZihkYXRhLmlzT2JqID09PSBmYWxzZSkgeyBcblx0XHRcdC8vIGNvbnZlcnQgalF1ZXJ5IGNvbGxlY3Rpb24gdG8gYXJyYXkgdG8gYXZvaWQgY29uZmxpY3RzIGxhdGVyXG5cdFx0XHRtZnAuaXRlbXMgPSBkYXRhLml0ZW1zLnRvQXJyYXkoKTtcblxuXHRcdFx0bWZwLmluZGV4ID0gMDtcblx0XHRcdHZhciBpdGVtcyA9IGRhdGEuaXRlbXMsXG5cdFx0XHRcdGl0ZW07XG5cdFx0XHRmb3IoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpdGVtID0gaXRlbXNbaV07XG5cdFx0XHRcdGlmKGl0ZW0ucGFyc2VkKSB7XG5cdFx0XHRcdFx0aXRlbSA9IGl0ZW0uZWxbMF07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoaXRlbSA9PT0gZGF0YS5lbFswXSkge1xuXHRcdFx0XHRcdG1mcC5pbmRleCA9IGk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLml0ZW1zID0gJC5pc0FycmF5KGRhdGEuaXRlbXMpID8gZGF0YS5pdGVtcyA6IFtkYXRhLml0ZW1zXTtcblx0XHRcdG1mcC5pbmRleCA9IGRhdGEuaW5kZXggfHwgMDtcblx0XHR9XG5cblx0XHQvLyBpZiBwb3B1cCBpcyBhbHJlYWR5IG9wZW5lZCAtIHdlIGp1c3QgdXBkYXRlIHRoZSBjb250ZW50XG5cdFx0aWYobWZwLmlzT3Blbikge1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdG1mcC50eXBlcyA9IFtdOyBcblx0XHRfd3JhcENsYXNzZXMgPSAnJztcblx0XHRpZihkYXRhLm1haW5FbCAmJiBkYXRhLm1haW5FbC5sZW5ndGgpIHtcblx0XHRcdG1mcC5ldiA9IGRhdGEubWFpbkVsLmVxKDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuZXYgPSBfZG9jdW1lbnQ7XG5cdFx0fVxuXG5cdFx0aWYoZGF0YS5rZXkpIHtcblx0XHRcdGlmKCFtZnAucG9wdXBzQ2FjaGVbZGF0YS5rZXldKSB7XG5cdFx0XHRcdG1mcC5wb3B1cHNDYWNoZVtkYXRhLmtleV0gPSB7fTtcblx0XHRcdH1cblx0XHRcdG1mcC5jdXJyVGVtcGxhdGUgPSBtZnAucG9wdXBzQ2FjaGVbZGF0YS5rZXldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuY3VyclRlbXBsYXRlID0ge307XG5cdFx0fVxuXG5cblxuXHRcdG1mcC5zdCA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMsIGRhdGEgKTsgXG5cdFx0bWZwLmZpeGVkQ29udGVudFBvcyA9IG1mcC5zdC5maXhlZENvbnRlbnRQb3MgPT09ICdhdXRvJyA/ICFtZnAucHJvYmFibHlNb2JpbGUgOiBtZnAuc3QuZml4ZWRDb250ZW50UG9zO1xuXG5cdFx0aWYobWZwLnN0Lm1vZGFsKSB7XG5cdFx0XHRtZnAuc3QuY2xvc2VPbkNvbnRlbnRDbGljayA9IGZhbHNlO1xuXHRcdFx0bWZwLnN0LmNsb3NlT25CZ0NsaWNrID0gZmFsc2U7XG5cdFx0XHRtZnAuc3Quc2hvd0Nsb3NlQnRuID0gZmFsc2U7XG5cdFx0XHRtZnAuc3QuZW5hYmxlRXNjYXBlS2V5ID0gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXG5cdFx0Ly8gQnVpbGRpbmcgbWFya3VwXG5cdFx0Ly8gbWFpbiBjb250YWluZXJzIGFyZSBjcmVhdGVkIG9ubHkgb25jZVxuXHRcdGlmKCFtZnAuYmdPdmVybGF5KSB7XG5cblx0XHRcdC8vIERhcmsgb3ZlcmxheVxuXHRcdFx0bWZwLmJnT3ZlcmxheSA9IF9nZXRFbCgnYmcnKS5vbignY2xpY2snK0VWRU5UX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0bWZwLmNsb3NlKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0bWZwLndyYXAgPSBfZ2V0RWwoJ3dyYXAnKS5hdHRyKCd0YWJpbmRleCcsIC0xKS5vbignY2xpY2snK0VWRU5UX05TLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmKG1mcC5fY2hlY2tJZkNsb3NlKGUudGFyZ2V0KSkge1xuXHRcdFx0XHRcdG1mcC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bWZwLmNvbnRhaW5lciA9IF9nZXRFbCgnY29udGFpbmVyJywgbWZwLndyYXApO1xuXHRcdH1cblxuXHRcdG1mcC5jb250ZW50Q29udGFpbmVyID0gX2dldEVsKCdjb250ZW50Jyk7XG5cdFx0aWYobWZwLnN0LnByZWxvYWRlcikge1xuXHRcdFx0bWZwLnByZWxvYWRlciA9IF9nZXRFbCgncHJlbG9hZGVyJywgbWZwLmNvbnRhaW5lciwgbWZwLnN0LnRMb2FkaW5nKTtcblx0XHR9XG5cblxuXHRcdC8vIEluaXRpYWxpemluZyBtb2R1bGVzXG5cdFx0dmFyIG1vZHVsZXMgPSAkLm1hZ25pZmljUG9wdXAubW9kdWxlcztcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgbiA9IG1vZHVsZXNbaV07XG5cdFx0XHRuID0gbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG4uc2xpY2UoMSk7XG5cdFx0XHRtZnBbJ2luaXQnK25dLmNhbGwobWZwKTtcblx0XHR9XG5cdFx0X21mcFRyaWdnZXIoJ0JlZm9yZU9wZW4nKTtcblxuXG5cdFx0aWYobWZwLnN0LnNob3dDbG9zZUJ0bikge1xuXHRcdFx0Ly8gQ2xvc2UgYnV0dG9uXG5cdFx0XHRpZighbWZwLnN0LmNsb3NlQnRuSW5zaWRlKSB7XG5cdFx0XHRcdG1mcC53cmFwLmFwcGVuZCggX2dldENsb3NlQnRuKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9tZnBPbihNQVJLVVBfUEFSU0VfRVZFTlQsIGZ1bmN0aW9uKGUsIHRlbXBsYXRlLCB2YWx1ZXMsIGl0ZW0pIHtcblx0XHRcdFx0XHR2YWx1ZXMuY2xvc2VfcmVwbGFjZVdpdGggPSBfZ2V0Q2xvc2VCdG4oaXRlbS50eXBlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdF93cmFwQ2xhc3NlcyArPSAnIG1mcC1jbG9zZS1idG4taW4nO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKG1mcC5zdC5hbGlnblRvcCkge1xuXHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWFsaWduLXRvcCc7XG5cdFx0fVxuXG5cdFxuXG5cdFx0aWYobWZwLmZpeGVkQ29udGVudFBvcykge1xuXHRcdFx0bWZwLndyYXAuY3NzKHtcblx0XHRcdFx0b3ZlcmZsb3c6IG1mcC5zdC5vdmVyZmxvd1ksXG5cdFx0XHRcdG92ZXJmbG93WDogJ2hpZGRlbicsXG5cdFx0XHRcdG92ZXJmbG93WTogbWZwLnN0Lm92ZXJmbG93WVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC53cmFwLmNzcyh7IFxuXHRcdFx0XHR0b3A6IF93aW5kb3cuc2Nyb2xsVG9wKCksXG5cdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYoIG1mcC5zdC5maXhlZEJnUG9zID09PSBmYWxzZSB8fCAobWZwLnN0LmZpeGVkQmdQb3MgPT09ICdhdXRvJyAmJiAhbWZwLmZpeGVkQ29udGVudFBvcykgKSB7XG5cdFx0XHRtZnAuYmdPdmVybGF5LmNzcyh7XG5cdFx0XHRcdGhlaWdodDogX2RvY3VtZW50LmhlaWdodCgpLFxuXHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJ1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0XG5cblx0XHRpZihtZnAuc3QuZW5hYmxlRXNjYXBlS2V5KSB7XG5cdFx0XHQvLyBDbG9zZSBvbiBFU0Mga2V5XG5cdFx0XHRfZG9jdW1lbnQub24oJ2tleXVwJyArIEVWRU5UX05TLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmKGUua2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdFx0XHRtZnAuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0X3dpbmRvdy5vbigncmVzaXplJyArIEVWRU5UX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC51cGRhdGVTaXplKCk7XG5cdFx0fSk7XG5cblxuXHRcdGlmKCFtZnAuc3QuY2xvc2VPbkNvbnRlbnRDbGljaykge1xuXHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWF1dG8tY3Vyc29yJztcblx0XHR9XG5cdFx0XG5cdFx0aWYoX3dyYXBDbGFzc2VzKVxuXHRcdFx0bWZwLndyYXAuYWRkQ2xhc3MoX3dyYXBDbGFzc2VzKTtcblxuXG5cdFx0Ly8gdGhpcyB0cmlnZ2VycyByZWNhbGN1bGF0aW9uIG9mIGxheW91dCwgc28gd2UgZ2V0IGl0IG9uY2UgdG8gbm90IHRvIHRyaWdnZXIgdHdpY2Vcblx0XHR2YXIgd2luZG93SGVpZ2h0ID0gbWZwLndIID0gX3dpbmRvdy5oZWlnaHQoKTtcblxuXHRcdFxuXHRcdHZhciB3aW5kb3dTdHlsZXMgPSB7fTtcblxuXHRcdGlmKCBtZnAuZml4ZWRDb250ZW50UG9zICkge1xuICAgICAgICAgICAgaWYobWZwLl9oYXNTY3JvbGxCYXIod2luZG93SGVpZ2h0KSl7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBtZnAuX2dldFNjcm9sbGJhclNpemUoKTtcbiAgICAgICAgICAgICAgICBpZihzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1N0eWxlcy5tYXJnaW5SaWdodCA9IHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0XHRpZihtZnAuZml4ZWRDb250ZW50UG9zKSB7XG5cdFx0XHRpZighbWZwLmlzSUU3KSB7XG5cdFx0XHRcdHdpbmRvd1N0eWxlcy5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaWU3IGRvdWJsZS1zY3JvbGwgYnVnXG5cdFx0XHRcdCQoJ2JvZHksIGh0bWwnKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdFxuXHRcdFxuXHRcdHZhciBjbGFzc2VzVG9hZGQgPSBtZnAuc3QubWFpbkNsYXNzO1xuXHRcdGlmKG1mcC5pc0lFNykge1xuXHRcdFx0Y2xhc3Nlc1RvYWRkICs9ICcgbWZwLWllNyc7XG5cdFx0fVxuXHRcdGlmKGNsYXNzZXNUb2FkZCkge1xuXHRcdFx0bWZwLl9hZGRDbGFzc1RvTUZQKCBjbGFzc2VzVG9hZGQgKTtcblx0XHR9XG5cblx0XHQvLyBhZGQgY29udGVudFxuXHRcdG1mcC51cGRhdGVJdGVtSFRNTCgpO1xuXG5cdFx0X21mcFRyaWdnZXIoJ0J1aWxkQ29udHJvbHMnKTtcblxuXHRcdC8vIHJlbW92ZSBzY3JvbGxiYXIsIGFkZCBtYXJnaW4gZS50LmNcblx0XHQkKCdodG1sJykuY3NzKHdpbmRvd1N0eWxlcyk7XG5cdFx0XG5cdFx0Ly8gYWRkIGV2ZXJ5dGhpbmcgdG8gRE9NXG5cdFx0bWZwLmJnT3ZlcmxheS5hZGQobWZwLndyYXApLnByZXBlbmRUbyggbWZwLnN0LnByZXBlbmRUbyB8fCAkKGRvY3VtZW50LmJvZHkpICk7XG5cblx0XHQvLyBTYXZlIGxhc3QgZm9jdXNlZCBlbGVtZW50XG5cdFx0bWZwLl9sYXN0Rm9jdXNlZEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0XHRcblx0XHQvLyBXYWl0IGZvciBuZXh0IGN5Y2xlIHRvIGFsbG93IENTUyB0cmFuc2l0aW9uXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFxuXHRcdFx0aWYobWZwLmNvbnRlbnQpIHtcblx0XHRcdFx0bWZwLl9hZGRDbGFzc1RvTUZQKFJFQURZX0NMQVNTKTtcblx0XHRcdFx0bWZwLl9zZXRGb2N1cygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaWYgY29udGVudCBpcyBub3QgZGVmaW5lZCAobm90IGxvYWRlZCBlLnQuYykgd2UgYWRkIGNsYXNzIG9ubHkgZm9yIEJHXG5cdFx0XHRcdG1mcC5iZ092ZXJsYXkuYWRkQ2xhc3MoUkVBRFlfQ0xBU1MpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBUcmFwIHRoZSBmb2N1cyBpbiBwb3B1cFxuXHRcdFx0X2RvY3VtZW50Lm9uKCdmb2N1c2luJyArIEVWRU5UX05TLCBtZnAuX29uRm9jdXNJbik7XG5cblx0XHR9LCAxNik7XG5cblx0XHRtZnAuaXNPcGVuID0gdHJ1ZTtcblx0XHRtZnAudXBkYXRlU2l6ZSh3aW5kb3dIZWlnaHQpO1xuXHRcdF9tZnBUcmlnZ2VyKE9QRU5fRVZFTlQpO1xuXG5cdFx0cmV0dXJuIGRhdGE7XG5cdH0sXG5cblx0LyoqXG5cdCAqIENsb3NlcyB0aGUgcG9wdXBcblx0ICovXG5cdGNsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRpZighbWZwLmlzT3BlbikgcmV0dXJuO1xuXHRcdF9tZnBUcmlnZ2VyKEJFRk9SRV9DTE9TRV9FVkVOVCk7XG5cblx0XHRtZnAuaXNPcGVuID0gZmFsc2U7XG5cdFx0Ly8gZm9yIENTUzMgYW5pbWF0aW9uXG5cdFx0aWYobWZwLnN0LnJlbW92YWxEZWxheSAmJiAhbWZwLmlzTG93SUUgJiYgbWZwLnN1cHBvcnRzVHJhbnNpdGlvbiApICB7XG5cdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoUkVNT1ZJTkdfQ0xBU1MpO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0bWZwLl9jbG9zZSgpO1xuXHRcdFx0fSwgbWZwLnN0LnJlbW92YWxEZWxheSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5fY2xvc2UoKTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEhlbHBlciBmb3IgY2xvc2UoKSBmdW5jdGlvblxuXHQgKi9cblx0X2Nsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRfbWZwVHJpZ2dlcihDTE9TRV9FVkVOVCk7XG5cblx0XHR2YXIgY2xhc3Nlc1RvUmVtb3ZlID0gUkVNT1ZJTkdfQ0xBU1MgKyAnICcgKyBSRUFEWV9DTEFTUyArICcgJztcblxuXHRcdG1mcC5iZ092ZXJsYXkuZGV0YWNoKCk7XG5cdFx0bWZwLndyYXAuZGV0YWNoKCk7XG5cdFx0bWZwLmNvbnRhaW5lci5lbXB0eSgpO1xuXG5cdFx0aWYobWZwLnN0Lm1haW5DbGFzcykge1xuXHRcdFx0Y2xhc3Nlc1RvUmVtb3ZlICs9IG1mcC5zdC5tYWluQ2xhc3MgKyAnICc7XG5cdFx0fVxuXG5cdFx0bWZwLl9yZW1vdmVDbGFzc0Zyb21NRlAoY2xhc3Nlc1RvUmVtb3ZlKTtcblxuXHRcdGlmKG1mcC5maXhlZENvbnRlbnRQb3MpIHtcblx0XHRcdHZhciB3aW5kb3dTdHlsZXMgPSB7bWFyZ2luUmlnaHQ6ICcnfTtcblx0XHRcdGlmKG1mcC5pc0lFNykge1xuXHRcdFx0XHQkKCdib2R5LCBodG1sJykuY3NzKCdvdmVyZmxvdycsICcnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvd1N0eWxlcy5vdmVyZmxvdyA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0JCgnaHRtbCcpLmNzcyh3aW5kb3dTdHlsZXMpO1xuXHRcdH1cblx0XHRcblx0XHRfZG9jdW1lbnQub2ZmKCdrZXl1cCcgKyBFVkVOVF9OUyArICcgZm9jdXNpbicgKyBFVkVOVF9OUyk7XG5cdFx0bWZwLmV2Lm9mZihFVkVOVF9OUyk7XG5cblx0XHQvLyBjbGVhbiB1cCBET00gZWxlbWVudHMgdGhhdCBhcmVuJ3QgcmVtb3ZlZFxuXHRcdG1mcC53cmFwLmF0dHIoJ2NsYXNzJywgJ21mcC13cmFwJykucmVtb3ZlQXR0cignc3R5bGUnKTtcblx0XHRtZnAuYmdPdmVybGF5LmF0dHIoJ2NsYXNzJywgJ21mcC1iZycpO1xuXHRcdG1mcC5jb250YWluZXIuYXR0cignY2xhc3MnLCAnbWZwLWNvbnRhaW5lcicpO1xuXG5cdFx0Ly8gcmVtb3ZlIGNsb3NlIGJ1dHRvbiBmcm9tIHRhcmdldCBlbGVtZW50XG5cdFx0aWYobWZwLnN0LnNob3dDbG9zZUJ0biAmJlxuXHRcdCghbWZwLnN0LmNsb3NlQnRuSW5zaWRlIHx8IG1mcC5jdXJyVGVtcGxhdGVbbWZwLmN1cnJJdGVtLnR5cGVdID09PSB0cnVlKSkge1xuXHRcdFx0aWYobWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bilcblx0XHRcdFx0bWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bi5kZXRhY2goKTtcblx0XHR9XG5cblxuXHRcdGlmKG1mcC5zdC5hdXRvRm9jdXNMYXN0ICYmIG1mcC5fbGFzdEZvY3VzZWRFbCkge1xuXHRcdFx0JChtZnAuX2xhc3RGb2N1c2VkRWwpLmZvY3VzKCk7IC8vIHB1dCB0YWIgZm9jdXMgYmFja1xuXHRcdH1cblx0XHRtZnAuY3Vyckl0ZW0gPSBudWxsO1x0XG5cdFx0bWZwLmNvbnRlbnQgPSBudWxsO1xuXHRcdG1mcC5jdXJyVGVtcGxhdGUgPSBudWxsO1xuXHRcdG1mcC5wcmV2SGVpZ2h0ID0gMDtcblxuXHRcdF9tZnBUcmlnZ2VyKEFGVEVSX0NMT1NFX0VWRU5UKTtcblx0fSxcblx0XG5cdHVwZGF0ZVNpemU6IGZ1bmN0aW9uKHdpbkhlaWdodCkge1xuXG5cdFx0aWYobWZwLmlzSU9TKSB7XG5cdFx0XHQvLyBmaXhlcyBpT1MgbmF2IGJhcnMgaHR0cHM6Ly9naXRodWIuY29tL2RpbXNlbWVub3YvTWFnbmlmaWMtUG9wdXAvaXNzdWVzLzJcblx0XHRcdHZhciB6b29tTGV2ZWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRcdHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB6b29tTGV2ZWw7XG5cdFx0XHRtZnAud3JhcC5jc3MoJ2hlaWdodCcsIGhlaWdodCk7XG5cdFx0XHRtZnAud0ggPSBoZWlnaHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC53SCA9IHdpbkhlaWdodCB8fCBfd2luZG93LmhlaWdodCgpO1xuXHRcdH1cblx0XHQvLyBGaXhlcyAjODQ6IHBvcHVwIGluY29ycmVjdGx5IHBvc2l0aW9uZWQgd2l0aCBwb3NpdGlvbjpyZWxhdGl2ZSBvbiBib2R5XG5cdFx0aWYoIW1mcC5maXhlZENvbnRlbnRQb3MpIHtcblx0XHRcdG1mcC53cmFwLmNzcygnaGVpZ2h0JywgbWZwLndIKTtcblx0XHR9XG5cblx0XHRfbWZwVHJpZ2dlcignUmVzaXplJyk7XG5cblx0fSxcblxuXHQvKipcblx0ICogU2V0IGNvbnRlbnQgb2YgcG9wdXAgYmFzZWQgb24gY3VycmVudCBpbmRleFxuXHQgKi9cblx0dXBkYXRlSXRlbUhUTUw6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpdGVtID0gbWZwLml0ZW1zW21mcC5pbmRleF07XG5cblx0XHQvLyBEZXRhY2ggYW5kIHBlcmZvcm0gbW9kaWZpY2F0aW9uc1xuXHRcdG1mcC5jb250ZW50Q29udGFpbmVyLmRldGFjaCgpO1xuXG5cdFx0aWYobWZwLmNvbnRlbnQpXG5cdFx0XHRtZnAuY29udGVudC5kZXRhY2goKTtcblxuXHRcdGlmKCFpdGVtLnBhcnNlZCkge1xuXHRcdFx0aXRlbSA9IG1mcC5wYXJzZUVsKCBtZnAuaW5kZXggKTtcblx0XHR9XG5cblx0XHR2YXIgdHlwZSA9IGl0ZW0udHlwZTtcblxuXHRcdF9tZnBUcmlnZ2VyKCdCZWZvcmVDaGFuZ2UnLCBbbWZwLmN1cnJJdGVtID8gbWZwLmN1cnJJdGVtLnR5cGUgOiAnJywgdHlwZV0pO1xuXHRcdC8vIEJlZm9yZUNoYW5nZSBldmVudCB3b3JrcyBsaWtlIHNvOlxuXHRcdC8vIF9tZnBPbignQmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZSwgcHJldlR5cGUsIG5ld1R5cGUpIHsgfSk7XG5cblx0XHRtZnAuY3Vyckl0ZW0gPSBpdGVtO1xuXG5cdFx0aWYoIW1mcC5jdXJyVGVtcGxhdGVbdHlwZV0pIHtcblx0XHRcdHZhciBtYXJrdXAgPSBtZnAuc3RbdHlwZV0gPyBtZnAuc3RbdHlwZV0ubWFya3VwIDogZmFsc2U7XG5cblx0XHRcdC8vIGFsbG93cyB0byBtb2RpZnkgbWFya3VwXG5cdFx0XHRfbWZwVHJpZ2dlcignRmlyc3RNYXJrdXBQYXJzZScsIG1hcmt1cCk7XG5cblx0XHRcdGlmKG1hcmt1cCkge1xuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlW3R5cGVdID0gJChtYXJrdXApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbWFya3VwIGZvdW5kIHdlIGp1c3QgZGVmaW5lIHRoYXQgdGVtcGxhdGUgaXMgcGFyc2VkXG5cdFx0XHRcdG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKF9wcmV2Q29udGVudFR5cGUgJiYgX3ByZXZDb250ZW50VHlwZSAhPT0gaXRlbS50eXBlKSB7XG5cdFx0XHRtZnAuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdtZnAtJytfcHJldkNvbnRlbnRUeXBlKyctaG9sZGVyJyk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0NvbnRlbnQgPSBtZnBbJ2dldCcgKyB0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKV0oaXRlbSwgbWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSk7XG5cdFx0bWZwLmFwcGVuZENvbnRlbnQobmV3Q29udGVudCwgdHlwZSk7XG5cblx0XHRpdGVtLnByZWxvYWRlZCA9IHRydWU7XG5cblx0XHRfbWZwVHJpZ2dlcihDSEFOR0VfRVZFTlQsIGl0ZW0pO1xuXHRcdF9wcmV2Q29udGVudFR5cGUgPSBpdGVtLnR5cGU7XG5cblx0XHQvLyBBcHBlbmQgY29udGFpbmVyIGJhY2sgYWZ0ZXIgaXRzIGNvbnRlbnQgY2hhbmdlZFxuXHRcdG1mcC5jb250YWluZXIucHJlcGVuZChtZnAuY29udGVudENvbnRhaW5lcik7XG5cblx0XHRfbWZwVHJpZ2dlcignQWZ0ZXJDaGFuZ2UnKTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBTZXQgSFRNTCBjb250ZW50IG9mIHBvcHVwXG5cdCAqL1xuXHRhcHBlbmRDb250ZW50OiBmdW5jdGlvbihuZXdDb250ZW50LCB0eXBlKSB7XG5cdFx0bWZwLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXG5cdFx0aWYobmV3Q29udGVudCkge1xuXHRcdFx0aWYobWZwLnN0LnNob3dDbG9zZUJ0biAmJiBtZnAuc3QuY2xvc2VCdG5JbnNpZGUgJiZcblx0XHRcdFx0bWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBtYXJrdXAsIHdlIGp1c3QgYXBwZW5kIGNsb3NlIGJ1dHRvbiBlbGVtZW50IGluc2lkZVxuXHRcdFx0XHRpZighbWZwLmNvbnRlbnQuZmluZCgnLm1mcC1jbG9zZScpLmxlbmd0aCkge1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmFwcGVuZChfZ2V0Q2xvc2VCdG4oKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1mcC5jb250ZW50ID0gbmV3Q29udGVudDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLmNvbnRlbnQgPSAnJztcblx0XHR9XG5cblx0XHRfbWZwVHJpZ2dlcihCRUZPUkVfQVBQRU5EX0VWRU5UKTtcblx0XHRtZnAuY29udGFpbmVyLmFkZENsYXNzKCdtZnAtJyt0eXBlKyctaG9sZGVyJyk7XG5cblx0XHRtZnAuY29udGVudENvbnRhaW5lci5hcHBlbmQobWZwLmNvbnRlbnQpO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgTWFnbmlmaWMgUG9wdXAgZGF0YSBvYmplY3QgYmFzZWQgb24gZ2l2ZW4gZGF0YVxuXHQgKiBAcGFyYW0gIHtpbnR9IGluZGV4IEluZGV4IG9mIGl0ZW0gdG8gcGFyc2Vcblx0ICovXG5cdHBhcnNlRWw6IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbaW5kZXhdLFxuXHRcdFx0dHlwZTtcblxuXHRcdGlmKGl0ZW0udGFnTmFtZSkge1xuXHRcdFx0aXRlbSA9IHsgZWw6ICQoaXRlbSkgfTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHlwZSA9IGl0ZW0udHlwZTtcblx0XHRcdGl0ZW0gPSB7IGRhdGE6IGl0ZW0sIHNyYzogaXRlbS5zcmMgfTtcblx0XHR9XG5cblx0XHRpZihpdGVtLmVsKSB7XG5cdFx0XHR2YXIgdHlwZXMgPSBtZnAudHlwZXM7XG5cblx0XHRcdC8vIGNoZWNrIGZvciAnbWZwLVRZUEUnIGNsYXNzXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYoIGl0ZW0uZWwuaGFzQ2xhc3MoJ21mcC0nK3R5cGVzW2ldKSApIHtcblx0XHRcdFx0XHR0eXBlID0gdHlwZXNbaV07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aXRlbS5zcmMgPSBpdGVtLmVsLmF0dHIoJ2RhdGEtbWZwLXNyYycpO1xuXHRcdFx0aWYoIWl0ZW0uc3JjKSB7XG5cdFx0XHRcdGl0ZW0uc3JjID0gaXRlbS5lbC5hdHRyKCdocmVmJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aXRlbS50eXBlID0gdHlwZSB8fCBtZnAuc3QudHlwZSB8fCAnaW5saW5lJztcblx0XHRpdGVtLmluZGV4ID0gaW5kZXg7XG5cdFx0aXRlbS5wYXJzZWQgPSB0cnVlO1xuXHRcdG1mcC5pdGVtc1tpbmRleF0gPSBpdGVtO1xuXHRcdF9tZnBUcmlnZ2VyKCdFbGVtZW50UGFyc2UnLCBpdGVtKTtcblxuXHRcdHJldHVybiBtZnAuaXRlbXNbaW5kZXhdO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHNpbmdsZSBwb3B1cCBvciBhIGdyb3VwIG9mIHBvcHVwc1xuXHQgKi9cblx0YWRkR3JvdXA6IGZ1bmN0aW9uKGVsLCBvcHRpb25zKSB7XG5cdFx0dmFyIGVIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5tZnBFbCA9IHRoaXM7XG5cdFx0XHRtZnAuX29wZW5DbGljayhlLCBlbCwgb3B0aW9ucyk7XG5cdFx0fTtcblxuXHRcdGlmKCFvcHRpb25zKSB7XG5cdFx0XHRvcHRpb25zID0ge307XG5cdFx0fVxuXG5cdFx0dmFyIGVOYW1lID0gJ2NsaWNrLm1hZ25pZmljUG9wdXAnO1xuXHRcdG9wdGlvbnMubWFpbkVsID0gZWw7XG5cblx0XHRpZihvcHRpb25zLml0ZW1zKSB7XG5cdFx0XHRvcHRpb25zLmlzT2JqID0gdHJ1ZTtcblx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIGVIYW5kbGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucy5pc09iaiA9IGZhbHNlO1xuXHRcdFx0aWYob3B0aW9ucy5kZWxlZ2F0ZSkge1xuXHRcdFx0XHRlbC5vZmYoZU5hbWUpLm9uKGVOYW1lLCBvcHRpb25zLmRlbGVnYXRlICwgZUhhbmRsZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0aW9ucy5pdGVtcyA9IGVsO1xuXHRcdFx0XHRlbC5vZmYoZU5hbWUpLm9uKGVOYW1lLCBlSGFuZGxlcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfb3BlbkNsaWNrOiBmdW5jdGlvbihlLCBlbCwgb3B0aW9ucykge1xuXHRcdHZhciBtaWRDbGljayA9IG9wdGlvbnMubWlkQ2xpY2sgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubWlkQ2xpY2sgOiAkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMubWlkQ2xpY2s7XG5cblxuXHRcdGlmKCFtaWRDbGljayAmJiAoIGUud2hpY2ggPT09IDIgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLnNoaWZ0S2V5ICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGRpc2FibGVPbiA9IG9wdGlvbnMuZGlzYWJsZU9uICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmRpc2FibGVPbiA6ICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cy5kaXNhYmxlT247XG5cblx0XHRpZihkaXNhYmxlT24pIHtcblx0XHRcdGlmKCQuaXNGdW5jdGlvbihkaXNhYmxlT24pKSB7XG5cdFx0XHRcdGlmKCAhZGlzYWJsZU9uLmNhbGwobWZwKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHsgLy8gZWxzZSBpdCdzIG51bWJlclxuXHRcdFx0XHRpZiggX3dpbmRvdy53aWR0aCgpIDwgZGlzYWJsZU9uICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoZS50eXBlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdC8vIFRoaXMgd2lsbCBwcmV2ZW50IHBvcHVwIGZyb20gY2xvc2luZyBpZiBlbGVtZW50IGlzIGluc2lkZSBhbmQgcG9wdXAgaXMgYWxyZWFkeSBvcGVuZWRcblx0XHRcdGlmKG1mcC5pc09wZW4pIHtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRvcHRpb25zLmVsID0gJChlLm1mcEVsKTtcblx0XHRpZihvcHRpb25zLmRlbGVnYXRlKSB7XG5cdFx0XHRvcHRpb25zLml0ZW1zID0gZWwuZmluZChvcHRpb25zLmRlbGVnYXRlKTtcblx0XHR9XG5cdFx0bWZwLm9wZW4ob3B0aW9ucyk7XG5cdH0sXG5cblxuXHQvKipcblx0ICogVXBkYXRlcyB0ZXh0IG9uIHByZWxvYWRlclxuXHQgKi9cblx0dXBkYXRlU3RhdHVzOiBmdW5jdGlvbihzdGF0dXMsIHRleHQpIHtcblxuXHRcdGlmKG1mcC5wcmVsb2FkZXIpIHtcblx0XHRcdGlmKF9wcmV2U3RhdHVzICE9PSBzdGF0dXMpIHtcblx0XHRcdFx0bWZwLmNvbnRhaW5lci5yZW1vdmVDbGFzcygnbWZwLXMtJytfcHJldlN0YXR1cyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCF0ZXh0ICYmIHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSB7XG5cdFx0XHRcdHRleHQgPSBtZnAuc3QudExvYWRpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XHRzdGF0dXM6IHN0YXR1cyxcblx0XHRcdFx0dGV4dDogdGV4dFxuXHRcdFx0fTtcblx0XHRcdC8vIGFsbG93cyB0byBtb2RpZnkgc3RhdHVzXG5cdFx0XHRfbWZwVHJpZ2dlcignVXBkYXRlU3RhdHVzJywgZGF0YSk7XG5cblx0XHRcdHN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuXHRcdFx0dGV4dCA9IGRhdGEudGV4dDtcblxuXHRcdFx0bWZwLnByZWxvYWRlci5odG1sKHRleHQpO1xuXG5cdFx0XHRtZnAucHJlbG9hZGVyLmZpbmQoJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0bWZwLmNvbnRhaW5lci5hZGRDbGFzcygnbWZwLXMtJytzdGF0dXMpO1xuXHRcdFx0X3ByZXZTdGF0dXMgPSBzdGF0dXM7XG5cdFx0fVxuXHR9LFxuXG5cblx0Lypcblx0XHRcIlByaXZhdGVcIiBoZWxwZXJzIHRoYXQgYXJlbid0IHByaXZhdGUgYXQgYWxsXG5cdCAqL1xuXHQvLyBDaGVjayB0byBjbG9zZSBwb3B1cCBvciBub3Rcblx0Ly8gXCJ0YXJnZXRcIiBpcyBhbiBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWRcblx0X2NoZWNrSWZDbG9zZTogZnVuY3Rpb24odGFyZ2V0KSB7XG5cblx0XHRpZigkKHRhcmdldCkuaGFzQ2xhc3MoUFJFVkVOVF9DTE9TRV9DTEFTUykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgY2xvc2VPbkNvbnRlbnQgPSBtZnAuc3QuY2xvc2VPbkNvbnRlbnRDbGljaztcblx0XHR2YXIgY2xvc2VPbkJnID0gbWZwLnN0LmNsb3NlT25CZ0NsaWNrO1xuXG5cdFx0aWYoY2xvc2VPbkNvbnRlbnQgJiYgY2xvc2VPbkJnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBXZSBjbG9zZSB0aGUgcG9wdXAgaWYgY2xpY2sgaXMgb24gY2xvc2UgYnV0dG9uIG9yIG9uIHByZWxvYWRlci4gT3IgaWYgdGhlcmUgaXMgbm8gY29udGVudC5cblx0XHRcdGlmKCFtZnAuY29udGVudCB8fCAkKHRhcmdldCkuaGFzQ2xhc3MoJ21mcC1jbG9zZScpIHx8IChtZnAucHJlbG9hZGVyICYmIHRhcmdldCA9PT0gbWZwLnByZWxvYWRlclswXSkgKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBpZiBjbGljayBpcyBvdXRzaWRlIHRoZSBjb250ZW50XG5cdFx0XHRpZiggICh0YXJnZXQgIT09IG1mcC5jb250ZW50WzBdICYmICEkLmNvbnRhaW5zKG1mcC5jb250ZW50WzBdLCB0YXJnZXQpKSAgKSB7XG5cdFx0XHRcdGlmKGNsb3NlT25CZykge1xuXHRcdFx0XHRcdC8vIGxhc3QgY2hlY2ssIGlmIHRoZSBjbGlja2VkIGVsZW1lbnQgaXMgaW4gRE9NLCAoaW4gY2FzZSBpdCdzIHJlbW92ZWQgb25jbGljaylcblx0XHRcdFx0XHRpZiggJC5jb250YWlucyhkb2N1bWVudCwgdGFyZ2V0KSApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGNsb3NlT25Db250ZW50KSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0X2FkZENsYXNzVG9NRlA6IGZ1bmN0aW9uKGNOYW1lKSB7XG5cdFx0bWZwLmJnT3ZlcmxheS5hZGRDbGFzcyhjTmFtZSk7XG5cdFx0bWZwLndyYXAuYWRkQ2xhc3MoY05hbWUpO1xuXHR9LFxuXHRfcmVtb3ZlQ2xhc3NGcm9tTUZQOiBmdW5jdGlvbihjTmFtZSkge1xuXHRcdHRoaXMuYmdPdmVybGF5LnJlbW92ZUNsYXNzKGNOYW1lKTtcblx0XHRtZnAud3JhcC5yZW1vdmVDbGFzcyhjTmFtZSk7XG5cdH0sXG5cdF9oYXNTY3JvbGxCYXI6IGZ1bmN0aW9uKHdpbkhlaWdodCkge1xuXHRcdHJldHVybiAoICAobWZwLmlzSUU3ID8gX2RvY3VtZW50LmhlaWdodCgpIDogZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpID4gKHdpbkhlaWdodCB8fCBfd2luZG93LmhlaWdodCgpKSApO1xuXHR9LFxuXHRfc2V0Rm9jdXM6IGZ1bmN0aW9uKCkge1xuXHRcdChtZnAuc3QuZm9jdXMgPyBtZnAuY29udGVudC5maW5kKG1mcC5zdC5mb2N1cykuZXEoMCkgOiBtZnAud3JhcCkuZm9jdXMoKTtcblx0fSxcblx0X29uRm9jdXNJbjogZnVuY3Rpb24oZSkge1xuXHRcdGlmKCBlLnRhcmdldCAhPT0gbWZwLndyYXBbMF0gJiYgISQuY29udGFpbnMobWZwLndyYXBbMF0sIGUudGFyZ2V0KSApIHtcblx0XHRcdG1mcC5fc2V0Rm9jdXMoKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdF9wYXJzZU1hcmt1cDogZnVuY3Rpb24odGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuXHRcdHZhciBhcnI7XG5cdFx0aWYoaXRlbS5kYXRhKSB7XG5cdFx0XHR2YWx1ZXMgPSAkLmV4dGVuZChpdGVtLmRhdGEsIHZhbHVlcyk7XG5cdFx0fVxuXHRcdF9tZnBUcmlnZ2VyKE1BUktVUF9QQVJTRV9FVkVOVCwgW3RlbXBsYXRlLCB2YWx1ZXMsIGl0ZW1dICk7XG5cblx0XHQkLmVhY2godmFsdWVzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHRpZih2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGFyciA9IGtleS5zcGxpdCgnXycpO1xuXHRcdFx0aWYoYXJyLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0dmFyIGVsID0gdGVtcGxhdGUuZmluZChFVkVOVF9OUyArICctJythcnJbMF0pO1xuXG5cdFx0XHRcdGlmKGVsLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHR2YXIgYXR0ciA9IGFyclsxXTtcblx0XHRcdFx0XHRpZihhdHRyID09PSAncmVwbGFjZVdpdGgnKSB7XG5cdFx0XHRcdFx0XHRpZihlbFswXSAhPT0gdmFsdWVbMF0pIHtcblx0XHRcdFx0XHRcdFx0ZWwucmVwbGFjZVdpdGgodmFsdWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZihhdHRyID09PSAnaW1nJykge1xuXHRcdFx0XHRcdFx0aWYoZWwuaXMoJ2ltZycpKSB7XG5cdFx0XHRcdFx0XHRcdGVsLmF0dHIoJ3NyYycsIHZhbHVlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGVsLnJlcGxhY2VXaXRoKCAkKCc8aW1nPicpLmF0dHIoJ3NyYycsIHZhbHVlKS5hdHRyKCdjbGFzcycsIGVsLmF0dHIoJ2NsYXNzJykpICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsLmF0dHIoYXJyWzFdLCB2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRlbXBsYXRlLmZpbmQoRVZFTlRfTlMgKyAnLScra2V5KS5odG1sKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblxuXHRfZ2V0U2Nyb2xsYmFyU2l6ZTogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gdGh4IERhdmlkXG5cdFx0aWYobWZwLnNjcm9sbGJhclNpemUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRzY3JvbGxEaXYuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogOTlweDsgaGVpZ2h0OiA5OXB4OyBvdmVyZmxvdzogc2Nyb2xsOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTk5OTlweDsnO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuXHRcdFx0bWZwLnNjcm9sbGJhclNpemUgPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG5cdFx0fVxuXHRcdHJldHVybiBtZnAuc2Nyb2xsYmFyU2l6ZTtcblx0fVxuXG59OyAvKiBNYWduaWZpY1BvcHVwIGNvcmUgcHJvdG90eXBlIGVuZCAqL1xuXG5cblxuXG4vKipcbiAqIFB1YmxpYyBzdGF0aWMgZnVuY3Rpb25zXG4gKi9cbiQubWFnbmlmaWNQb3B1cCA9IHtcblx0aW5zdGFuY2U6IG51bGwsXG5cdHByb3RvOiBNYWduaWZpY1BvcHVwLnByb3RvdHlwZSxcblx0bW9kdWxlczogW10sXG5cblx0b3BlbjogZnVuY3Rpb24ob3B0aW9ucywgaW5kZXgpIHtcblx0XHRfY2hlY2tJbnN0YW5jZSgpO1xuXG5cdFx0aWYoIW9wdGlvbnMpIHtcblx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRvcHRpb25zLmlzT2JqID0gdHJ1ZTtcblx0XHRvcHRpb25zLmluZGV4ID0gaW5kZXggfHwgMDtcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZS5vcGVuKG9wdGlvbnMpO1xuXHR9LFxuXG5cdGNsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJC5tYWduaWZpY1BvcHVwLmluc3RhbmNlICYmICQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZS5jbG9zZSgpO1xuXHR9LFxuXG5cdHJlZ2lzdGVyTW9kdWxlOiBmdW5jdGlvbihuYW1lLCBtb2R1bGUpIHtcblx0XHRpZihtb2R1bGUub3B0aW9ucykge1xuXHRcdFx0JC5tYWduaWZpY1BvcHVwLmRlZmF1bHRzW25hbWVdID0gbW9kdWxlLm9wdGlvbnM7XG5cdFx0fVxuXHRcdCQuZXh0ZW5kKHRoaXMucHJvdG8sIG1vZHVsZS5wcm90byk7XG5cdFx0dGhpcy5tb2R1bGVzLnB1c2gobmFtZSk7XG5cdH0sXG5cblx0ZGVmYXVsdHM6IHtcblxuXHRcdC8vIEluZm8gYWJvdXQgb3B0aW9ucyBpcyBpbiBkb2NzOlxuXHRcdC8vIGh0dHA6Ly9kaW1zZW1lbm92LmNvbS9wbHVnaW5zL21hZ25pZmljLXBvcHVwL2RvY3VtZW50YXRpb24uaHRtbCNvcHRpb25zXG5cblx0XHRkaXNhYmxlT246IDAsXG5cblx0XHRrZXk6IG51bGwsXG5cblx0XHRtaWRDbGljazogZmFsc2UsXG5cblx0XHRtYWluQ2xhc3M6ICcnLFxuXG5cdFx0cHJlbG9hZGVyOiB0cnVlLFxuXG5cdFx0Zm9jdXM6ICcnLCAvLyBDU1Mgc2VsZWN0b3Igb2YgaW5wdXQgdG8gZm9jdXMgYWZ0ZXIgcG9wdXAgaXMgb3BlbmVkXG5cblx0XHRjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcblxuXHRcdGNsb3NlT25CZ0NsaWNrOiB0cnVlLFxuXG5cdFx0Y2xvc2VCdG5JbnNpZGU6IHRydWUsXG5cblx0XHRzaG93Q2xvc2VCdG46IHRydWUsXG5cblx0XHRlbmFibGVFc2NhcGVLZXk6IHRydWUsXG5cblx0XHRtb2RhbDogZmFsc2UsXG5cblx0XHRhbGlnblRvcDogZmFsc2UsXG5cblx0XHRyZW1vdmFsRGVsYXk6IDAsXG5cblx0XHRwcmVwZW5kVG86IG51bGwsXG5cblx0XHRmaXhlZENvbnRlbnRQb3M6ICdhdXRvJyxcblxuXHRcdGZpeGVkQmdQb3M6ICdhdXRvJyxcblxuXHRcdG92ZXJmbG93WTogJ2F1dG8nLFxuXG5cdFx0Y2xvc2VNYXJrdXA6ICc8YnV0dG9uIHRpdGxlPVwiJXRpdGxlJVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1jbG9zZVwiPiYjMjE1OzwvYnV0dG9uPicsXG5cblx0XHR0Q2xvc2U6ICdDbG9zZSAoRXNjKScsXG5cblx0XHR0TG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuXG5cdFx0YXV0b0ZvY3VzTGFzdDogdHJ1ZVxuXG5cdH1cbn07XG5cblxuXG4kLmZuLm1hZ25pZmljUG9wdXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdF9jaGVja0luc3RhbmNlKCk7XG5cblx0dmFyIGpxRWwgPSAkKHRoaXMpO1xuXG5cdC8vIFdlIGNhbGwgc29tZSBBUEkgbWV0aG9kIG9mIGZpcnN0IHBhcmFtIGlzIGEgc3RyaW5nXG5cdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdGlmKG9wdGlvbnMgPT09ICdvcGVuJykge1xuXHRcdFx0dmFyIGl0ZW1zLFxuXHRcdFx0XHRpdGVtT3B0cyA9IF9pc0pRID8ganFFbC5kYXRhKCdtYWduaWZpY1BvcHVwJykgOiBqcUVsWzBdLm1hZ25pZmljUG9wdXAsXG5cdFx0XHRcdGluZGV4ID0gcGFyc2VJbnQoYXJndW1lbnRzWzFdLCAxMCkgfHwgMDtcblxuXHRcdFx0aWYoaXRlbU9wdHMuaXRlbXMpIHtcblx0XHRcdFx0aXRlbXMgPSBpdGVtT3B0cy5pdGVtc1tpbmRleF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpdGVtcyA9IGpxRWw7XG5cdFx0XHRcdGlmKGl0ZW1PcHRzLmRlbGVnYXRlKSB7XG5cdFx0XHRcdFx0aXRlbXMgPSBpdGVtcy5maW5kKGl0ZW1PcHRzLmRlbGVnYXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpdGVtcyA9IGl0ZW1zLmVxKCBpbmRleCApO1xuXHRcdFx0fVxuXHRcdFx0bWZwLl9vcGVuQ2xpY2soe21mcEVsOml0ZW1zfSwganFFbCwgaXRlbU9wdHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZihtZnAuaXNPcGVuKVxuXHRcdFx0XHRtZnBbb3B0aW9uc10uYXBwbHkobWZwLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblx0XHR9XG5cblx0fSBlbHNlIHtcblx0XHQvLyBjbG9uZSBvcHRpb25zIG9ialxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgb3B0aW9ucyk7XG5cblx0XHQvKlxuXHRcdCAqIEFzIFplcHRvIGRvZXNuJ3Qgc3VwcG9ydCAuZGF0YSgpIG1ldGhvZCBmb3Igb2JqZWN0c1xuXHRcdCAqIGFuZCBpdCB3b3JrcyBvbmx5IGluIG5vcm1hbCBicm93c2Vyc1xuXHRcdCAqIHdlIGFzc2lnbiBcIm9wdGlvbnNcIiBvYmplY3QgZGlyZWN0bHkgdG8gdGhlIERPTSBlbGVtZW50LiBGVFchXG5cdFx0ICovXG5cdFx0aWYoX2lzSlEpIHtcblx0XHRcdGpxRWwuZGF0YSgnbWFnbmlmaWNQb3B1cCcsIG9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRqcUVsWzBdLm1hZ25pZmljUG9wdXAgPSBvcHRpb25zO1xuXHRcdH1cblxuXHRcdG1mcC5hZGRHcm91cChqcUVsLCBvcHRpb25zKTtcblxuXHR9XG5cdHJldHVybiBqcUVsO1xufTtcblxuLyo+PmNvcmUqL1xuXG4vKj4+aW5saW5lKi9cblxudmFyIElOTElORV9OUyA9ICdpbmxpbmUnLFxuXHRfaGlkZGVuQ2xhc3MsXG5cdF9pbmxpbmVQbGFjZWhvbGRlcixcblx0X2xhc3RJbmxpbmVFbGVtZW50LFxuXHRfcHV0SW5saW5lRWxlbWVudHNCYWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoX2xhc3RJbmxpbmVFbGVtZW50KSB7XG5cdFx0XHRfaW5saW5lUGxhY2Vob2xkZXIuYWZ0ZXIoIF9sYXN0SW5saW5lRWxlbWVudC5hZGRDbGFzcyhfaGlkZGVuQ2xhc3MpICkuZGV0YWNoKCk7XG5cdFx0XHRfbGFzdElubGluZUVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKElOTElORV9OUywge1xuXHRvcHRpb25zOiB7XG5cdFx0aGlkZGVuQ2xhc3M6ICdoaWRlJywgLy8gd2lsbCBiZSBhcHBlbmRlZCB3aXRoIGBtZnAtYCBwcmVmaXhcblx0XHRtYXJrdXA6ICcnLFxuXHRcdHROb3RGb3VuZDogJ0NvbnRlbnQgbm90IGZvdW5kJ1xuXHR9LFxuXHRwcm90bzoge1xuXG5cdFx0aW5pdElubGluZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRtZnAudHlwZXMucHVzaChJTkxJTkVfTlMpO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrJy4nK0lOTElORV9OUywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9wdXRJbmxpbmVFbGVtZW50c0JhY2soKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRnZXRJbmxpbmU6IGZ1bmN0aW9uKGl0ZW0sIHRlbXBsYXRlKSB7XG5cblx0XHRcdF9wdXRJbmxpbmVFbGVtZW50c0JhY2soKTtcblxuXHRcdFx0aWYoaXRlbS5zcmMpIHtcblx0XHRcdFx0dmFyIGlubGluZVN0ID0gbWZwLnN0LmlubGluZSxcblx0XHRcdFx0XHRlbCA9ICQoaXRlbS5zcmMpO1xuXG5cdFx0XHRcdGlmKGVsLmxlbmd0aCkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGFyZ2V0IGVsZW1lbnQgaGFzIHBhcmVudCAtIHdlIHJlcGxhY2UgaXQgd2l0aCBwbGFjZWhvbGRlciBhbmQgcHV0IGl0IGJhY2sgYWZ0ZXIgcG9wdXAgaXMgY2xvc2VkXG5cdFx0XHRcdFx0dmFyIHBhcmVudCA9IGVsWzBdLnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0aWYocGFyZW50ICYmIHBhcmVudC50YWdOYW1lKSB7XG5cdFx0XHRcdFx0XHRpZighX2lubGluZVBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0XHRcdF9oaWRkZW5DbGFzcyA9IGlubGluZVN0LmhpZGRlbkNsYXNzO1xuXHRcdFx0XHRcdFx0XHRfaW5saW5lUGxhY2Vob2xkZXIgPSBfZ2V0RWwoX2hpZGRlbkNsYXNzKTtcblx0XHRcdFx0XHRcdFx0X2hpZGRlbkNsYXNzID0gJ21mcC0nK19oaWRkZW5DbGFzcztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIHJlcGxhY2UgdGFyZ2V0IGlubGluZSBlbGVtZW50IHdpdGggcGxhY2Vob2xkZXJcblx0XHRcdFx0XHRcdF9sYXN0SW5saW5lRWxlbWVudCA9IGVsLmFmdGVyKF9pbmxpbmVQbGFjZWhvbGRlcikuZGV0YWNoKCkucmVtb3ZlQ2xhc3MoX2hpZGRlbkNsYXNzKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2Vycm9yJywgaW5saW5lU3QudE5vdEZvdW5kKTtcblx0XHRcdFx0XHRlbCA9ICQoJzxkaXY+Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpdGVtLmlubGluZUVsZW1lbnQgPSBlbDtcblx0XHRcdFx0cmV0dXJuIGVsO1xuXHRcdFx0fVxuXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xuXHRcdFx0bWZwLl9wYXJzZU1hcmt1cCh0ZW1wbGF0ZSwge30sIGl0ZW0pO1xuXHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHRcdH1cblx0fVxufSk7XG5cbi8qPj5pbmxpbmUqL1xuXG4vKj4+YWpheCovXG52YXIgQUpBWF9OUyA9ICdhamF4Jyxcblx0X2FqYXhDdXIsXG5cdF9yZW1vdmVBamF4Q3Vyc29yID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoX2FqYXhDdXIpIHtcblx0XHRcdCQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoX2FqYXhDdXIpO1xuXHRcdH1cblx0fSxcblx0X2Rlc3Ryb3lBamF4UmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuXHRcdF9yZW1vdmVBamF4Q3Vyc29yKCk7XG5cdFx0aWYobWZwLnJlcSkge1xuXHRcdFx0bWZwLnJlcS5hYm9ydCgpO1xuXHRcdH1cblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKEFKQVhfTlMsIHtcblxuXHRvcHRpb25zOiB7XG5cdFx0c2V0dGluZ3M6IG51bGwsXG5cdFx0Y3Vyc29yOiAnbWZwLWFqYXgtY3VyJyxcblx0XHR0RXJyb3I6ICc8YSBocmVmPVwiJXVybCVcIj5UaGUgY29udGVudDwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nXG5cdH0sXG5cblx0cHJvdG86IHtcblx0XHRpbml0QWpheDogZnVuY3Rpb24oKSB7XG5cdFx0XHRtZnAudHlwZXMucHVzaChBSkFYX05TKTtcblx0XHRcdF9hamF4Q3VyID0gbWZwLnN0LmFqYXguY3Vyc29yO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrJy4nK0FKQVhfTlMsIF9kZXN0cm95QWpheFJlcXVlc3QpO1xuXHRcdFx0X21mcE9uKCdCZWZvcmVDaGFuZ2UuJyArIEFKQVhfTlMsIF9kZXN0cm95QWpheFJlcXVlc3QpO1xuXHRcdH0sXG5cdFx0Z2V0QWpheDogZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0XHRpZihfYWpheEN1cikge1xuXHRcdFx0XHQkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKF9hamF4Q3VyKTtcblx0XHRcdH1cblxuXHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnbG9hZGluZycpO1xuXG5cdFx0XHR2YXIgb3B0cyA9ICQuZXh0ZW5kKHtcblx0XHRcdFx0dXJsOiBpdGVtLnNyYyxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcblx0XHRcdFx0XHR2YXIgdGVtcCA9IHtcblx0XHRcdFx0XHRcdGRhdGE6ZGF0YSxcblx0XHRcdFx0XHRcdHhocjpqcVhIUlxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRfbWZwVHJpZ2dlcignUGFyc2VBamF4JywgdGVtcCk7XG5cblx0XHRcdFx0XHRtZnAuYXBwZW5kQ29udGVudCggJCh0ZW1wLmRhdGEpLCBBSkFYX05TICk7XG5cblx0XHRcdFx0XHRpdGVtLmZpbmlzaGVkID0gdHJ1ZTtcblxuXHRcdFx0XHRcdF9yZW1vdmVBamF4Q3Vyc29yKCk7XG5cblx0XHRcdFx0XHRtZnAuX3NldEZvY3VzKCk7XG5cblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bWZwLndyYXAuYWRkQ2xhc3MoUkVBRFlfQ0xBU1MpO1xuXHRcdFx0XHRcdH0sIDE2KTtcblxuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cblx0XHRcdFx0XHRfbWZwVHJpZ2dlcignQWpheENvbnRlbnRBZGRlZCcpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X3JlbW92ZUFqYXhDdXJzb3IoKTtcblx0XHRcdFx0XHRpdGVtLmZpbmlzaGVkID0gaXRlbS5sb2FkRXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2Vycm9yJywgbWZwLnN0LmFqYXgudEVycm9yLnJlcGxhY2UoJyV1cmwlJywgaXRlbS5zcmMpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgbWZwLnN0LmFqYXguc2V0dGluZ3MpO1xuXG5cdFx0XHRtZnAucmVxID0gJC5hamF4KG9wdHMpO1xuXG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PmFqYXgqL1xuXG4vKj4+aW1hZ2UqL1xudmFyIF9pbWdJbnRlcnZhbCxcblx0X2dldFRpdGxlID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdGlmKGl0ZW0uZGF0YSAmJiBpdGVtLmRhdGEudGl0bGUgIT09IHVuZGVmaW5lZClcblx0XHRcdHJldHVybiBpdGVtLmRhdGEudGl0bGU7XG5cblx0XHR2YXIgc3JjID0gbWZwLnN0LmltYWdlLnRpdGxlU3JjO1xuXG5cdFx0aWYoc3JjKSB7XG5cdFx0XHRpZigkLmlzRnVuY3Rpb24oc3JjKSkge1xuXHRcdFx0XHRyZXR1cm4gc3JjLmNhbGwobWZwLCBpdGVtKTtcblx0XHRcdH0gZWxzZSBpZihpdGVtLmVsKSB7XG5cdFx0XHRcdHJldHVybiBpdGVtLmVsLmF0dHIoc3JjKSB8fCAnJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoJ2ltYWdlJywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRtYXJrdXA6ICc8ZGl2IGNsYXNzPVwibWZwLWZpZ3VyZVwiPicrXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdCc8ZmlndXJlPicrXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1pbWdcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0JzxmaWdjYXB0aW9uPicrXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWJvdHRvbS1iYXJcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLXRpdGxlXCI+PC9kaXY+Jytcblx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jb3VudGVyXCI+PC9kaXY+Jytcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicrXG5cdFx0XHRcdFx0XHQnPC9maWdjYXB0aW9uPicrXG5cdFx0XHRcdFx0JzwvZmlndXJlPicrXG5cdFx0XHRcdCc8L2Rpdj4nLFxuXHRcdGN1cnNvcjogJ21mcC16b29tLW91dC1jdXInLFxuXHRcdHRpdGxlU3JjOiAndGl0bGUnLFxuXHRcdHZlcnRpY2FsRml0OiB0cnVlLFxuXHRcdHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nXG5cdH0sXG5cblx0cHJvdG86IHtcblx0XHRpbml0SW1hZ2U6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGltZ1N0ID0gbWZwLnN0LmltYWdlLFxuXHRcdFx0XHRucyA9ICcuaW1hZ2UnO1xuXG5cdFx0XHRtZnAudHlwZXMucHVzaCgnaW1hZ2UnKTtcblxuXHRcdFx0X21mcE9uKE9QRU5fRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuY3Vyckl0ZW0udHlwZSA9PT0gJ2ltYWdlJyAmJiBpbWdTdC5jdXJzb3IpIHtcblx0XHRcdFx0XHQkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKGltZ1N0LmN1cnNvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihpbWdTdC5jdXJzb3IpIHtcblx0XHRcdFx0XHQkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKGltZ1N0LmN1cnNvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3dpbmRvdy5vZmYoJ3Jlc2l6ZScgKyBFVkVOVF9OUyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKCdSZXNpemUnK25zLCBtZnAucmVzaXplSW1hZ2UpO1xuXHRcdFx0aWYobWZwLmlzTG93SUUpIHtcblx0XHRcdFx0X21mcE9uKCdBZnRlckNoYW5nZScsIG1mcC5yZXNpemVJbWFnZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRyZXNpemVJbWFnZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1mcC5jdXJySXRlbTtcblx0XHRcdGlmKCFpdGVtIHx8ICFpdGVtLmltZykgcmV0dXJuO1xuXG5cdFx0XHRpZihtZnAuc3QuaW1hZ2UudmVydGljYWxGaXQpIHtcblx0XHRcdFx0dmFyIGRlY3IgPSAwO1xuXHRcdFx0XHQvLyBmaXggYm94LXNpemluZyBpbiBpZTcvOFxuXHRcdFx0XHRpZihtZnAuaXNMb3dJRSkge1xuXHRcdFx0XHRcdGRlY3IgPSBwYXJzZUludChpdGVtLmltZy5jc3MoJ3BhZGRpbmctdG9wJyksIDEwKSArIHBhcnNlSW50KGl0ZW0uaW1nLmNzcygncGFkZGluZy1ib3R0b20nKSwxMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlbS5pbWcuY3NzKCdtYXgtaGVpZ2h0JywgbWZwLndILWRlY3IpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0X29uSW1hZ2VIYXNTaXplOiBmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHRpZihpdGVtLmltZykge1xuXG5cdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cblx0XHRcdFx0aWYoX2ltZ0ludGVydmFsKSB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfaW1nSW50ZXJ2YWwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aXRlbS5pc0NoZWNraW5nSW1nU2l6ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdF9tZnBUcmlnZ2VyKCdJbWFnZUhhc1NpemUnLCBpdGVtKTtcblxuXHRcdFx0XHRpZihpdGVtLmltZ0hpZGRlbikge1xuXHRcdFx0XHRcdGlmKG1mcC5jb250ZW50KVxuXHRcdFx0XHRcdFx0bWZwLmNvbnRlbnQucmVtb3ZlQ2xhc3MoJ21mcC1sb2FkaW5nJyk7XG5cblx0XHRcdFx0XHRpdGVtLmltZ0hpZGRlbiA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogRnVuY3Rpb24gdGhhdCBsb29wcyB1bnRpbCB0aGUgaW1hZ2UgaGFzIHNpemUgdG8gZGlzcGxheSBlbGVtZW50cyB0aGF0IHJlbHkgb24gaXQgYXNhcFxuXHRcdCAqL1xuXHRcdGZpbmRJbWFnZVNpemU6IGZ1bmN0aW9uKGl0ZW0pIHtcblxuXHRcdFx0dmFyIGNvdW50ZXIgPSAwLFxuXHRcdFx0XHRpbWcgPSBpdGVtLmltZ1swXSxcblx0XHRcdFx0bWZwU2V0SW50ZXJ2YWwgPSBmdW5jdGlvbihkZWxheSkge1xuXG5cdFx0XHRcdFx0aWYoX2ltZ0ludGVydmFsKSB7XG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKF9pbWdJbnRlcnZhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGRlY2VsZXJhdGluZyBpbnRlcnZhbCB0aGF0IGNoZWNrcyBmb3Igc2l6ZSBvZiBhbiBpbWFnZVxuXHRcdFx0XHRcdF9pbWdJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYoaW1nLm5hdHVyYWxXaWR0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0bWZwLl9vbkltYWdlSGFzU2l6ZShpdGVtKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZihjb3VudGVyID4gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoX2ltZ0ludGVydmFsKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y291bnRlcisrO1xuXHRcdFx0XHRcdFx0aWYoY291bnRlciA9PT0gMykge1xuXHRcdFx0XHRcdFx0XHRtZnBTZXRJbnRlcnZhbCgxMCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYoY291bnRlciA9PT0gNDApIHtcblx0XHRcdFx0XHRcdFx0bWZwU2V0SW50ZXJ2YWwoNTApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGNvdW50ZXIgPT09IDEwMCkge1xuXHRcdFx0XHRcdFx0XHRtZnBTZXRJbnRlcnZhbCg1MDApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIGRlbGF5KTtcblx0XHRcdFx0fTtcblxuXHRcdFx0bWZwU2V0SW50ZXJ2YWwoMSk7XG5cdFx0fSxcblxuXHRcdGdldEltYWdlOiBmdW5jdGlvbihpdGVtLCB0ZW1wbGF0ZSkge1xuXG5cdFx0XHR2YXIgZ3VhcmQgPSAwLFxuXG5cdFx0XHRcdC8vIGltYWdlIGxvYWQgY29tcGxldGUgaGFuZGxlclxuXHRcdFx0XHRvbkxvYWRDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKGl0ZW0pIHtcblx0XHRcdFx0XHRcdGlmIChpdGVtLmltZ1swXS5jb21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmltZy5vZmYoJy5tZnBsb2FkZXInKTtcblxuXHRcdFx0XHRcdFx0XHRpZihpdGVtID09PSBtZnAuY3Vyckl0ZW0pe1xuXHRcdFx0XHRcdFx0XHRcdG1mcC5fb25JbWFnZUhhc1NpemUoaXRlbSk7XG5cblx0XHRcdFx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0aXRlbS5sb2FkZWQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdJbWFnZUxvYWRDb21wbGV0ZScpO1xuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gaWYgaW1hZ2UgY29tcGxldGUgY2hlY2sgZmFpbHMgMjAwIHRpbWVzICgyMCBzZWMpLCB3ZSBhc3N1bWUgdGhhdCB0aGVyZSB3YXMgYW4gZXJyb3IuXG5cdFx0XHRcdFx0XHRcdGd1YXJkKys7XG5cdFx0XHRcdFx0XHRcdGlmKGd1YXJkIDwgMjAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChvbkxvYWRDb21wbGV0ZSwxMDApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdG9uTG9hZEVycm9yKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gaW1hZ2UgZXJyb3IgaGFuZGxlclxuXHRcdFx0XHRvbkxvYWRFcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmKGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0uaW1nLm9mZignLm1mcGxvYWRlcicpO1xuXHRcdFx0XHRcdFx0aWYoaXRlbSA9PT0gbWZwLmN1cnJJdGVtKXtcblx0XHRcdFx0XHRcdFx0bWZwLl9vbkltYWdlSGFzU2l6ZShpdGVtKTtcblx0XHRcdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBpbWdTdC50RXJyb3IucmVwbGFjZSgnJXVybCUnLCBpdGVtLnNyYykgKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGl0ZW0ubG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGl0ZW0ubG9hZEVycm9yID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltZ1N0ID0gbWZwLnN0LmltYWdlO1xuXG5cblx0XHRcdHZhciBlbCA9IHRlbXBsYXRlLmZpbmQoJy5tZnAtaW1nJyk7XG5cdFx0XHRpZihlbC5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdFx0XHRpbWcuY2xhc3NOYW1lID0gJ21mcC1pbWcnO1xuXHRcdFx0XHRpZihpdGVtLmVsICYmIGl0ZW0uZWwuZmluZCgnaW1nJykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0aW1nLmFsdCA9IGl0ZW0uZWwuZmluZCgnaW1nJykuYXR0cignYWx0Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlbS5pbWcgPSAkKGltZykub24oJ2xvYWQubWZwbG9hZGVyJywgb25Mb2FkQ29tcGxldGUpLm9uKCdlcnJvci5tZnBsb2FkZXInLCBvbkxvYWRFcnJvcik7XG5cdFx0XHRcdGltZy5zcmMgPSBpdGVtLnNyYztcblxuXHRcdFx0XHQvLyB3aXRob3V0IGNsb25lKCkgXCJlcnJvclwiIGV2ZW50IGlzIG5vdCBmaXJpbmcgd2hlbiBJTUcgaXMgcmVwbGFjZWQgYnkgbmV3IElNR1xuXHRcdFx0XHQvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGF2b2lkIHN1Y2ggY2xvbmluZ1xuXHRcdFx0XHRpZihlbC5pcygnaW1nJykpIHtcblx0XHRcdFx0XHRpdGVtLmltZyA9IGl0ZW0uaW1nLmNsb25lKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpbWcgPSBpdGVtLmltZ1swXTtcblx0XHRcdFx0aWYoaW1nLm5hdHVyYWxXaWR0aCA+IDApIHtcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYoIWltZy53aWR0aCkge1xuXHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1mcC5fcGFyc2VNYXJrdXAodGVtcGxhdGUsIHtcblx0XHRcdFx0dGl0bGU6IF9nZXRUaXRsZShpdGVtKSxcblx0XHRcdFx0aW1nX3JlcGxhY2VXaXRoOiBpdGVtLmltZ1xuXHRcdFx0fSwgaXRlbSk7XG5cblx0XHRcdG1mcC5yZXNpemVJbWFnZSgpO1xuXG5cdFx0XHRpZihpdGVtLmhhc1NpemUpIHtcblx0XHRcdFx0aWYoX2ltZ0ludGVydmFsKSBjbGVhckludGVydmFsKF9pbWdJbnRlcnZhbCk7XG5cblx0XHRcdFx0aWYoaXRlbS5sb2FkRXJyb3IpIHtcblx0XHRcdFx0XHR0ZW1wbGF0ZS5hZGRDbGFzcygnbWZwLWxvYWRpbmcnKTtcblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdlcnJvcicsIGltZ1N0LnRFcnJvci5yZXBsYWNlKCcldXJsJScsIGl0ZW0uc3JjKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRlbXBsYXRlLnJlbW92ZUNsYXNzKCdtZnAtbG9hZGluZycpO1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdsb2FkaW5nJyk7XG5cdFx0XHRpdGVtLmxvYWRpbmcgPSB0cnVlO1xuXG5cdFx0XHRpZighaXRlbS5oYXNTaXplKSB7XG5cdFx0XHRcdGl0ZW0uaW1nSGlkZGVuID0gdHJ1ZTtcblx0XHRcdFx0dGVtcGxhdGUuYWRkQ2xhc3MoJ21mcC1sb2FkaW5nJyk7XG5cdFx0XHRcdG1mcC5maW5kSW1hZ2VTaXplKGl0ZW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PmltYWdlKi9cblxuLyo+Pnpvb20qL1xudmFyIGhhc01velRyYW5zZm9ybSxcblx0Z2V0SGFzTW96VHJhbnNmb3JtID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoaGFzTW96VHJhbnNmb3JtID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGhhc01velRyYW5zZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKS5zdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0cmV0dXJuIGhhc01velRyYW5zZm9ybTtcblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKCd6b29tJywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRlYXNpbmc6ICdlYXNlLWluLW91dCcsXG5cdFx0ZHVyYXRpb246IDMwMCxcblx0XHRvcGVuZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LmlzKCdpbWcnKSA/IGVsZW1lbnQgOiBlbGVtZW50LmZpbmQoJ2ltZycpO1xuXHRcdH1cblx0fSxcblxuXHRwcm90bzoge1xuXG5cdFx0aW5pdFpvb206IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHpvb21TdCA9IG1mcC5zdC56b29tLFxuXHRcdFx0XHRucyA9ICcuem9vbScsXG5cdFx0XHRcdGltYWdlO1xuXG5cdFx0XHRpZighem9vbVN0LmVuYWJsZWQgfHwgIW1mcC5zdXBwb3J0c1RyYW5zaXRpb24pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZHVyYXRpb24gPSB6b29tU3QuZHVyYXRpb24sXG5cdFx0XHRcdGdldEVsVG9BbmltYXRlID0gZnVuY3Rpb24oaW1hZ2UpIHtcblx0XHRcdFx0XHR2YXIgbmV3SW1nID0gaW1hZ2UuY2xvbmUoKS5yZW1vdmVBdHRyKCdzdHlsZScpLnJlbW92ZUF0dHIoJ2NsYXNzJykuYWRkQ2xhc3MoJ21mcC1hbmltYXRlZC1pbWFnZScpLFxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbiA9ICdhbGwgJysoem9vbVN0LmR1cmF0aW9uLzEwMDApKydzICcgKyB6b29tU3QuZWFzaW5nLFxuXHRcdFx0XHRcdFx0Y3NzT2JqID0ge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0XHRcdFx0ekluZGV4OiA5OTk5LFxuXHRcdFx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0XHRcdCctd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHknOiAnaGlkZGVuJ1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHQgPSAndHJhbnNpdGlvbic7XG5cblx0XHRcdFx0XHRjc3NPYmpbJy13ZWJraXQtJyt0XSA9IGNzc09ialsnLW1vei0nK3RdID0gY3NzT2JqWyctby0nK3RdID0gY3NzT2JqW3RdID0gdHJhbnNpdGlvbjtcblxuXHRcdFx0XHRcdG5ld0ltZy5jc3MoY3NzT2JqKTtcblx0XHRcdFx0XHRyZXR1cm4gbmV3SW1nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzaG93TWFpbkNvbnRlbnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRtZnAuY29udGVudC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvcGVuVGltZW91dCxcblx0XHRcdFx0YW5pbWF0ZWRJbWc7XG5cblx0XHRcdF9tZnBPbignQnVpbGRDb250cm9scycrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuX2FsbG93Wm9vbSgpKSB7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQob3BlblRpbWVvdXQpO1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblxuXHRcdFx0XHRcdC8vIEJhc2ljYWxseSwgYWxsIGNvZGUgYmVsb3cgZG9lcyBpcyBjbG9uZXMgZXhpc3RpbmcgaW1hZ2UsIHB1dHMgaW4gb24gdG9wIG9mIHRoZSBjdXJyZW50IG9uZSBhbmQgYW5pbWF0ZWQgaXRcblxuXHRcdFx0XHRcdGltYWdlID0gbWZwLl9nZXRJdGVtVG9ab29tKCk7XG5cblx0XHRcdFx0XHRpZighaW1hZ2UpIHtcblx0XHRcdFx0XHRcdHNob3dNYWluQ29udGVudCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGFuaW1hdGVkSW1nID0gZ2V0RWxUb0FuaW1hdGUoaW1hZ2UpO1xuXG5cdFx0XHRcdFx0YW5pbWF0ZWRJbWcuY3NzKCBtZnAuX2dldE9mZnNldCgpICk7XG5cblx0XHRcdFx0XHRtZnAud3JhcC5hcHBlbmQoYW5pbWF0ZWRJbWcpO1xuXG5cdFx0XHRcdFx0b3BlblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcuY3NzKCBtZnAuX2dldE9mZnNldCggdHJ1ZSApICk7XG5cdFx0XHRcdFx0XHRvcGVuVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdFx0c2hvd01haW5Db250ZW50KCk7XG5cblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlZEltZy5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRpbWFnZSA9IGFuaW1hdGVkSW1nID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0XHRfbWZwVHJpZ2dlcignWm9vbUFuaW1hdGlvbkVuZGVkJyk7XG5cdFx0XHRcdFx0XHRcdH0sIDE2KTsgLy8gYXZvaWQgYmxpbmsgd2hlbiBzd2l0Y2hpbmcgaW1hZ2VzXG5cblx0XHRcdFx0XHRcdH0sIGR1cmF0aW9uKTsgLy8gdGhpcyB0aW1lb3V0IGVxdWFscyBhbmltYXRpb24gZHVyYXRpb25cblxuXHRcdFx0XHRcdH0sIDE2KTsgLy8gYnkgYWRkaW5nIHRoaXMgdGltZW91dCB3ZSBhdm9pZCBzaG9ydCBnbGl0Y2ggYXQgdGhlIGJlZ2lubmluZyBvZiBhbmltYXRpb25cblxuXG5cdFx0XHRcdFx0Ly8gTG90cyBvZiB0aW1lb3V0cy4uLlxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdF9tZnBPbihCRUZPUkVfQ0xPU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuX2FsbG93Wm9vbSgpKSB7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQob3BlblRpbWVvdXQpO1xuXG5cdFx0XHRcdFx0bWZwLnN0LnJlbW92YWxEZWxheSA9IGR1cmF0aW9uO1xuXG5cdFx0XHRcdFx0aWYoIWltYWdlKSB7XG5cdFx0XHRcdFx0XHRpbWFnZSA9IG1mcC5fZ2V0SXRlbVRvWm9vbSgpO1xuXHRcdFx0XHRcdFx0aWYoIWltYWdlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nID0gZ2V0RWxUb0FuaW1hdGUoaW1hZ2UpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGFuaW1hdGVkSW1nLmNzcyggbWZwLl9nZXRPZmZzZXQodHJ1ZSkgKTtcblx0XHRcdFx0XHRtZnAud3JhcC5hcHBlbmQoYW5pbWF0ZWRJbWcpO1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZy5jc3MoIG1mcC5fZ2V0T2Zmc2V0KCkgKTtcblx0XHRcdFx0XHR9LCAxNik7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fYWxsb3dab29tKCkpIHtcblx0XHRcdFx0XHRzaG93TWFpbkNvbnRlbnQoKTtcblx0XHRcdFx0XHRpZihhbmltYXRlZEltZykge1xuXHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcucmVtb3ZlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGltYWdlID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdF9hbGxvd1pvb206IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIG1mcC5jdXJySXRlbS50eXBlID09PSAnaW1hZ2UnO1xuXHRcdH0sXG5cblx0XHRfZ2V0SXRlbVRvWm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZihtZnAuY3Vyckl0ZW0uaGFzU2l6ZSkge1xuXHRcdFx0XHRyZXR1cm4gbWZwLmN1cnJJdGVtLmltZztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gR2V0IGVsZW1lbnQgcG9zdGlvbiByZWxhdGl2ZSB0byB2aWV3cG9ydFxuXHRcdF9nZXRPZmZzZXQ6IGZ1bmN0aW9uKGlzTGFyZ2UpIHtcblx0XHRcdHZhciBlbDtcblx0XHRcdGlmKGlzTGFyZ2UpIHtcblx0XHRcdFx0ZWwgPSBtZnAuY3Vyckl0ZW0uaW1nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWwgPSBtZnAuc3Quem9vbS5vcGVuZXIobWZwLmN1cnJJdGVtLmVsIHx8IG1mcC5jdXJySXRlbSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvZmZzZXQgPSBlbC5vZmZzZXQoKTtcblx0XHRcdHZhciBwYWRkaW5nVG9wID0gcGFyc2VJbnQoZWwuY3NzKCdwYWRkaW5nLXRvcCcpLDEwKTtcblx0XHRcdHZhciBwYWRkaW5nQm90dG9tID0gcGFyc2VJbnQoZWwuY3NzKCdwYWRkaW5nLWJvdHRvbScpLDEwKTtcblx0XHRcdG9mZnNldC50b3AgLT0gKCAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgLSBwYWRkaW5nVG9wICk7XG5cblxuXHRcdFx0LypcblxuXHRcdFx0QW5pbWF0aW5nIGxlZnQgKyB0b3AgKyB3aWR0aC9oZWlnaHQgbG9va3MgZ2xpdGNoeSBpbiBGaXJlZm94LCBidXQgcGVyZmVjdCBpbiBDaHJvbWUuIEFuZCB2aWNlLXZlcnNhLlxuXG5cdFx0XHQgKi9cblx0XHRcdHZhciBvYmogPSB7XG5cdFx0XHRcdHdpZHRoOiBlbC53aWR0aCgpLFxuXHRcdFx0XHQvLyBmaXggWmVwdG8gaGVpZ2h0K3BhZGRpbmcgaXNzdWVcblx0XHRcdFx0aGVpZ2h0OiAoX2lzSlEgPyBlbC5pbm5lckhlaWdodCgpIDogZWxbMF0ub2Zmc2V0SGVpZ2h0KSAtIHBhZGRpbmdCb3R0b20gLSBwYWRkaW5nVG9wXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBJIGhhdGUgdG8gZG8gdGhpcywgYnV0IHRoZXJlIGlzIG5vIGFub3RoZXIgb3B0aW9uXG5cdFx0XHRpZiggZ2V0SGFzTW96VHJhbnNmb3JtKCkgKSB7XG5cdFx0XHRcdG9ialsnLW1vei10cmFuc2Zvcm0nXSA9IG9ialsndHJhbnNmb3JtJ10gPSAndHJhbnNsYXRlKCcgKyBvZmZzZXQubGVmdCArICdweCwnICsgb2Zmc2V0LnRvcCArICdweCknO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2JqLmxlZnQgPSBvZmZzZXQubGVmdDtcblx0XHRcdFx0b2JqLnRvcCA9IG9mZnNldC50b3A7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblxuXHR9XG59KTtcblxuXG5cbi8qPj56b29tKi9cblxuLyo+PmlmcmFtZSovXG5cbnZhciBJRlJBTUVfTlMgPSAnaWZyYW1lJyxcblx0X2VtcHR5UGFnZSA9ICcvL2Fib3V0OmJsYW5rJyxcblxuXHRfZml4SWZyYW1lQnVncyA9IGZ1bmN0aW9uKGlzU2hvd2luZykge1xuXHRcdGlmKG1mcC5jdXJyVGVtcGxhdGVbSUZSQU1FX05TXSkge1xuXHRcdFx0dmFyIGVsID0gbWZwLmN1cnJUZW1wbGF0ZVtJRlJBTUVfTlNdLmZpbmQoJ2lmcmFtZScpO1xuXHRcdFx0aWYoZWwubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIHJlc2V0IHNyYyBhZnRlciB0aGUgcG9wdXAgaXMgY2xvc2VkIHRvIGF2b2lkIFwidmlkZW8ga2VlcHMgcGxheWluZyBhZnRlciBwb3B1cCBpcyBjbG9zZWRcIiBidWdcblx0XHRcdFx0aWYoIWlzU2hvd2luZykge1xuXHRcdFx0XHRcdGVsWzBdLnNyYyA9IF9lbXB0eVBhZ2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJRTggYmxhY2sgc2NyZWVuIGJ1ZyBmaXhcblx0XHRcdFx0aWYobWZwLmlzSUU4KSB7XG5cdFx0XHRcdFx0ZWwuY3NzKCdkaXNwbGF5JywgaXNTaG93aW5nID8gJ2Jsb2NrJyA6ICdub25lJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShJRlJBTUVfTlMsIHtcblxuXHRvcHRpb25zOiB7XG5cdFx0bWFya3VwOiAnPGRpdiBjbGFzcz1cIm1mcC1pZnJhbWUtc2NhbGVyXCI+Jytcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicrXG5cdFx0XHRcdFx0JzxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgc3JjPVwiLy9hYm91dDpibGFua1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nK1xuXHRcdFx0XHQnPC9kaXY+JyxcblxuXHRcdHNyY0FjdGlvbjogJ2lmcmFtZV9zcmMnLFxuXG5cdFx0Ly8gd2UgZG9uJ3QgY2FyZSBhbmQgc3VwcG9ydCBvbmx5IG9uZSBkZWZhdWx0IHR5cGUgb2YgVVJMIGJ5IGRlZmF1bHRcblx0XHRwYXR0ZXJuczoge1xuXHRcdFx0eW91dHViZToge1xuXHRcdFx0XHRpbmRleDogJ3lvdXR1YmUuY29tJyxcblx0XHRcdFx0aWQ6ICd2PScsXG5cdFx0XHRcdHNyYzogJy8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyVpZCU/YXV0b3BsYXk9MSdcblx0XHRcdH0sXG5cdFx0XHR2aW1lbzoge1xuXHRcdFx0XHRpbmRleDogJ3ZpbWVvLmNvbS8nLFxuXHRcdFx0XHRpZDogJy8nLFxuXHRcdFx0XHRzcmM6ICcvL3BsYXllci52aW1lby5jb20vdmlkZW8vJWlkJT9hdXRvcGxheT0xJ1xuXHRcdFx0fSxcblx0XHRcdGdtYXBzOiB7XG5cdFx0XHRcdGluZGV4OiAnLy9tYXBzLmdvb2dsZS4nLFxuXHRcdFx0XHRzcmM6ICclaWQlJm91dHB1dD1lbWJlZCdcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cHJvdG86IHtcblx0XHRpbml0SWZyYW1lOiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC50eXBlcy5wdXNoKElGUkFNRV9OUyk7XG5cblx0XHRcdF9tZnBPbignQmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZSwgcHJldlR5cGUsIG5ld1R5cGUpIHtcblx0XHRcdFx0aWYocHJldlR5cGUgIT09IG5ld1R5cGUpIHtcblx0XHRcdFx0XHRpZihwcmV2VHlwZSA9PT0gSUZSQU1FX05TKSB7XG5cdFx0XHRcdFx0XHRfZml4SWZyYW1lQnVncygpOyAvLyBpZnJhbWUgaWYgcmVtb3ZlZFxuXHRcdFx0XHRcdH0gZWxzZSBpZihuZXdUeXBlID09PSBJRlJBTUVfTlMpIHtcblx0XHRcdFx0XHRcdF9maXhJZnJhbWVCdWdzKHRydWUpOyAvLyBpZnJhbWUgaXMgc2hvd2luZ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fS8vIGVsc2Uge1xuXHRcdFx0XHRcdC8vIGlmcmFtZSBzb3VyY2UgaXMgc3dpdGNoZWQsIGRvbid0IGRvIGFueXRoaW5nXG5cdFx0XHRcdC8vfVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCArICcuJyArIElGUkFNRV9OUywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdF9maXhJZnJhbWVCdWdzKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0Z2V0SWZyYW1lOiBmdW5jdGlvbihpdGVtLCB0ZW1wbGF0ZSkge1xuXHRcdFx0dmFyIGVtYmVkU3JjID0gaXRlbS5zcmM7XG5cdFx0XHR2YXIgaWZyYW1lU3QgPSBtZnAuc3QuaWZyYW1lO1xuXG5cdFx0XHQkLmVhY2goaWZyYW1lU3QucGF0dGVybnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihlbWJlZFNyYy5pbmRleE9mKCB0aGlzLmluZGV4ICkgPiAtMSkge1xuXHRcdFx0XHRcdGlmKHRoaXMuaWQpIHtcblx0XHRcdFx0XHRcdGlmKHR5cGVvZiB0aGlzLmlkID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0XHRlbWJlZFNyYyA9IGVtYmVkU3JjLnN1YnN0cihlbWJlZFNyYy5sYXN0SW5kZXhPZih0aGlzLmlkKSt0aGlzLmlkLmxlbmd0aCwgZW1iZWRTcmMubGVuZ3RoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGVtYmVkU3JjID0gdGhpcy5pZC5jYWxsKCB0aGlzLCBlbWJlZFNyYyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbWJlZFNyYyA9IHRoaXMuc3JjLnJlcGxhY2UoJyVpZCUnLCBlbWJlZFNyYyApO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gYnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgZGF0YU9iaiA9IHt9O1xuXHRcdFx0aWYoaWZyYW1lU3Quc3JjQWN0aW9uKSB7XG5cdFx0XHRcdGRhdGFPYmpbaWZyYW1lU3Quc3JjQWN0aW9uXSA9IGVtYmVkU3JjO1xuXHRcdFx0fVxuXHRcdFx0bWZwLl9wYXJzZU1hcmt1cCh0ZW1wbGF0ZSwgZGF0YU9iaiwgaXRlbSk7XG5cblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cblx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0XHR9XG5cdH1cbn0pO1xuXG5cblxuLyo+PmlmcmFtZSovXG5cbi8qPj5nYWxsZXJ5Ki9cbi8qKlxuICogR2V0IGxvb3BlZCBpbmRleCBkZXBlbmRpbmcgb24gbnVtYmVyIG9mIHNsaWRlc1xuICovXG52YXIgX2dldExvb3BlZElkID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHR2YXIgbnVtU2xpZGVzID0gbWZwLml0ZW1zLmxlbmd0aDtcblx0XHRpZihpbmRleCA+IG51bVNsaWRlcyAtIDEpIHtcblx0XHRcdHJldHVybiBpbmRleCAtIG51bVNsaWRlcztcblx0XHR9IGVsc2UgIGlmKGluZGV4IDwgMCkge1xuXHRcdFx0cmV0dXJuIG51bVNsaWRlcyArIGluZGV4O1xuXHRcdH1cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH0sXG5cdF9yZXBsYWNlQ3VyclRvdGFsID0gZnVuY3Rpb24odGV4dCwgY3VyciwgdG90YWwpIHtcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKC8lY3VyciUvZ2ksIGN1cnIgKyAxKS5yZXBsYWNlKC8ldG90YWwlL2dpLCB0b3RhbCk7XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZSgnZ2FsbGVyeScsIHtcblxuXHRvcHRpb25zOiB7XG5cdFx0ZW5hYmxlZDogZmFsc2UsXG5cdFx0YXJyb3dNYXJrdXA6ICc8YnV0dG9uIHRpdGxlPVwiJXRpdGxlJVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1hcnJvdyBtZnAtYXJyb3ctJWRpciVcIj48L2J1dHRvbj4nLFxuXHRcdHByZWxvYWQ6IFswLDJdLFxuXHRcdG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcblx0XHRhcnJvd3M6IHRydWUsXG5cblx0XHR0UHJldjogJ1ByZXZpb3VzIChMZWZ0IGFycm93IGtleSknLFxuXHRcdHROZXh0OiAnTmV4dCAoUmlnaHQgYXJyb3cga2V5KScsXG5cdFx0dENvdW50ZXI6ICclY3VyciUgb2YgJXRvdGFsJSdcblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRHYWxsZXJ5OiBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIGdTdCA9IG1mcC5zdC5nYWxsZXJ5LFxuXHRcdFx0XHRucyA9ICcubWZwLWdhbGxlcnknO1xuXG5cdFx0XHRtZnAuZGlyZWN0aW9uID0gdHJ1ZTsgLy8gdHJ1ZSAtIG5leHQsIGZhbHNlIC0gcHJldlxuXG5cdFx0XHRpZighZ1N0IHx8ICFnU3QuZW5hYmxlZCApIHJldHVybiBmYWxzZTtcblxuXHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWdhbGxlcnknO1xuXG5cdFx0XHRfbWZwT24oT1BFTl9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0aWYoZ1N0Lm5hdmlnYXRlQnlJbWdDbGljaykge1xuXHRcdFx0XHRcdG1mcC53cmFwLm9uKCdjbGljaycrbnMsICcubWZwLWltZycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYobWZwLml0ZW1zLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0bWZwLm5leHQoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X2RvY3VtZW50Lm9uKCdrZXlkb3duJytucywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG5cdFx0XHRcdFx0XHRtZnAucHJldigpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuXHRcdFx0XHRcdFx0bWZwLm5leHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbignVXBkYXRlU3RhdHVzJytucywgZnVuY3Rpb24oZSwgZGF0YSkge1xuXHRcdFx0XHRpZihkYXRhLnRleHQpIHtcblx0XHRcdFx0XHRkYXRhLnRleHQgPSBfcmVwbGFjZUN1cnJUb3RhbChkYXRhLnRleHQsIG1mcC5jdXJySXRlbS5pbmRleCwgbWZwLml0ZW1zLmxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oTUFSS1VQX1BBUlNFX0VWRU5UK25zLCBmdW5jdGlvbihlLCBlbGVtZW50LCB2YWx1ZXMsIGl0ZW0pIHtcblx0XHRcdFx0dmFyIGwgPSBtZnAuaXRlbXMubGVuZ3RoO1xuXHRcdFx0XHR2YWx1ZXMuY291bnRlciA9IGwgPiAxID8gX3JlcGxhY2VDdXJyVG90YWwoZ1N0LnRDb3VudGVyLCBpdGVtLmluZGV4LCBsKSA6ICcnO1xuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbignQnVpbGRDb250cm9scycgKyBucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5pdGVtcy5sZW5ndGggPiAxICYmIGdTdC5hcnJvd3MgJiYgIW1mcC5hcnJvd0xlZnQpIHtcblx0XHRcdFx0XHR2YXIgbWFya3VwID0gZ1N0LmFycm93TWFya3VwLFxuXHRcdFx0XHRcdFx0YXJyb3dMZWZ0ID0gbWZwLmFycm93TGVmdCA9ICQoIG1hcmt1cC5yZXBsYWNlKC8ldGl0bGUlL2dpLCBnU3QudFByZXYpLnJlcGxhY2UoLyVkaXIlL2dpLCAnbGVmdCcpICkuYWRkQ2xhc3MoUFJFVkVOVF9DTE9TRV9DTEFTUyksXG5cdFx0XHRcdFx0XHRhcnJvd1JpZ2h0ID0gbWZwLmFycm93UmlnaHQgPSAkKCBtYXJrdXAucmVwbGFjZSgvJXRpdGxlJS9naSwgZ1N0LnROZXh0KS5yZXBsYWNlKC8lZGlyJS9naSwgJ3JpZ2h0JykgKS5hZGRDbGFzcyhQUkVWRU5UX0NMT1NFX0NMQVNTKTtcblxuXHRcdFx0XHRcdGFycm93TGVmdC5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdG1mcC5wcmV2KCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YXJyb3dSaWdodC5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdG1mcC5uZXh0KCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRtZnAuY29udGFpbmVyLmFwcGVuZChhcnJvd0xlZnQuYWRkKGFycm93UmlnaHQpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDSEFOR0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZihtZnAuX3ByZWxvYWRUaW1lb3V0KSBjbGVhclRpbWVvdXQobWZwLl9wcmVsb2FkVGltZW91dCk7XG5cblx0XHRcdFx0bWZwLl9wcmVsb2FkVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0bWZwLnByZWxvYWROZWFyYnlJbWFnZXMoKTtcblx0XHRcdFx0XHRtZnAuX3ByZWxvYWRUaW1lb3V0ID0gbnVsbDtcblx0XHRcdFx0fSwgMTYpO1xuXHRcdFx0fSk7XG5cblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0X2RvY3VtZW50Lm9mZihucyk7XG5cdFx0XHRcdG1mcC53cmFwLm9mZignY2xpY2snK25zKTtcblx0XHRcdFx0bWZwLmFycm93UmlnaHQgPSBtZnAuYXJyb3dMZWZ0ID0gbnVsbDtcblx0XHRcdH0pO1xuXG5cdFx0fSxcblx0XHRuZXh0OiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSB0cnVlO1xuXHRcdFx0bWZwLmluZGV4ID0gX2dldExvb3BlZElkKG1mcC5pbmRleCArIDEpO1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0fSxcblx0XHRwcmV2OiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSBmYWxzZTtcblx0XHRcdG1mcC5pbmRleCA9IF9nZXRMb29wZWRJZChtZnAuaW5kZXggLSAxKTtcblx0XHRcdG1mcC51cGRhdGVJdGVtSFRNTCgpO1xuXHRcdH0sXG5cdFx0Z29UbzogZnVuY3Rpb24obmV3SW5kZXgpIHtcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSAobmV3SW5kZXggPj0gbWZwLmluZGV4KTtcblx0XHRcdG1mcC5pbmRleCA9IG5ld0luZGV4O1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0fSxcblx0XHRwcmVsb2FkTmVhcmJ5SW1hZ2VzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBwID0gbWZwLnN0LmdhbGxlcnkucHJlbG9hZCxcblx0XHRcdFx0cHJlbG9hZEJlZm9yZSA9IE1hdGgubWluKHBbMF0sIG1mcC5pdGVtcy5sZW5ndGgpLFxuXHRcdFx0XHRwcmVsb2FkQWZ0ZXIgPSBNYXRoLm1pbihwWzFdLCBtZnAuaXRlbXMubGVuZ3RoKSxcblx0XHRcdFx0aTtcblxuXHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChtZnAuZGlyZWN0aW9uID8gcHJlbG9hZEFmdGVyIDogcHJlbG9hZEJlZm9yZSk7IGkrKykge1xuXHRcdFx0XHRtZnAuX3ByZWxvYWRJdGVtKG1mcC5pbmRleCtpKTtcblx0XHRcdH1cblx0XHRcdGZvcihpID0gMTsgaSA8PSAobWZwLmRpcmVjdGlvbiA/IHByZWxvYWRCZWZvcmUgOiBwcmVsb2FkQWZ0ZXIpOyBpKyspIHtcblx0XHRcdFx0bWZwLl9wcmVsb2FkSXRlbShtZnAuaW5kZXgtaSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfcHJlbG9hZEl0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRpbmRleCA9IF9nZXRMb29wZWRJZChpbmRleCk7XG5cblx0XHRcdGlmKG1mcC5pdGVtc1tpbmRleF0ucHJlbG9hZGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbaW5kZXhdO1xuXHRcdFx0aWYoIWl0ZW0ucGFyc2VkKSB7XG5cdFx0XHRcdGl0ZW0gPSBtZnAucGFyc2VFbCggaW5kZXggKTtcblx0XHRcdH1cblxuXHRcdFx0X21mcFRyaWdnZXIoJ0xhenlMb2FkJywgaXRlbSk7XG5cblx0XHRcdGlmKGl0ZW0udHlwZSA9PT0gJ2ltYWdlJykge1xuXHRcdFx0XHRpdGVtLmltZyA9ICQoJzxpbWcgY2xhc3M9XCJtZnAtaW1nXCIgLz4nKS5vbignbG9hZC5tZnBsb2FkZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHR9KS5vbignZXJyb3IubWZwbG9hZGVyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblx0XHRcdFx0XHRpdGVtLmxvYWRFcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0X21mcFRyaWdnZXIoJ0xhenlMb2FkRXJyb3InLCBpdGVtKTtcblx0XHRcdFx0fSkuYXR0cignc3JjJywgaXRlbS5zcmMpO1xuXHRcdFx0fVxuXG5cblx0XHRcdGl0ZW0ucHJlbG9hZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+Z2FsbGVyeSovXG5cbi8qPj5yZXRpbmEqL1xuXG52YXIgUkVUSU5BX05TID0gJ3JldGluYSc7XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShSRVRJTkFfTlMsIHtcblx0b3B0aW9uczoge1xuXHRcdHJlcGxhY2VTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdHJldHVybiBpdGVtLnNyYy5yZXBsYWNlKC9cXC5cXHcrJC8sIGZ1bmN0aW9uKG0pIHsgcmV0dXJuICdAMngnICsgbTsgfSk7XG5cdFx0fSxcblx0XHRyYXRpbzogMSAvLyBGdW5jdGlvbiBvciBudW1iZXIuICBTZXQgdG8gMSB0byBkaXNhYmxlLlxuXHR9LFxuXHRwcm90bzoge1xuXHRcdGluaXRSZXRpbmE6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKSB7XG5cblx0XHRcdFx0dmFyIHN0ID0gbWZwLnN0LnJldGluYSxcblx0XHRcdFx0XHRyYXRpbyA9IHN0LnJhdGlvO1xuXG5cdFx0XHRcdHJhdGlvID0gIWlzTmFOKHJhdGlvKSA/IHJhdGlvIDogcmF0aW8oKTtcblxuXHRcdFx0XHRpZihyYXRpbyA+IDEpIHtcblx0XHRcdFx0XHRfbWZwT24oJ0ltYWdlSGFzU2l6ZScgKyAnLicgKyBSRVRJTkFfTlMsIGZ1bmN0aW9uKGUsIGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0uaW1nLmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdtYXgtd2lkdGgnOiBpdGVtLmltZ1swXS5uYXR1cmFsV2lkdGggLyByYXRpbyxcblx0XHRcdFx0XHRcdFx0J3dpZHRoJzogJzEwMCUnXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRfbWZwT24oJ0VsZW1lbnRQYXJzZScgKyAnLicgKyBSRVRJTkFfTlMsIGZ1bmN0aW9uKGUsIGl0ZW0pIHtcblx0XHRcdFx0XHRcdGl0ZW0uc3JjID0gc3QucmVwbGFjZVNyYyhpdGVtLCByYXRpbyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fVxufSk7XG5cbi8qPj5yZXRpbmEqL1xuIF9jaGVja0luc3RhbmNlKCk7IH0pKTsiLCIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG52YXIgalF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbnZhciAkID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbnZhciB3aW5kb3cgPSBnbG9iYWw7XG52YXIgd2luZG93ID0gKHdpbmRvdyB8fCB7fSk7XG53aW5kb3cualF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbihmdW5jdGlvbigpIHtcbnZhciBkZWZpbmUgPSBmYWxzZTtcblxuLyoqXG4gKiBPd2wgQ2Fyb3VzZWwgdjIuMy40XG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE4IERhdmlkIERldXRzY2hcbiAqIExpY2Vuc2VkIHVuZGVyOiBTRUUgTElDRU5TRSBJTiBodHRwczovL2dpdGh1Yi5jb20vT3dsQ2Fyb3VzZWwyL093bENhcm91c2VsMi9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi8qKlxuICogT3dsIGNhcm91c2VsXG4gKiBAdmVyc2lvbiAyLjMuNFxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBAdG9kbyBMYXp5IExvYWQgSWNvblxuICogQHRvZG8gcHJldmVudCBhbmltYXRpb25lbmQgYnVibGluZ1xuICogQHRvZG8gaXRlbXNTY2FsZVVwXG4gKiBAdG9kbyBUZXN0IFplcHRvXG4gKiBAdG9kbyBzdGFnZVBhZGRpbmcgY2FsY3VsYXRlIHdyb25nIGFjdGl2ZSBjbGFzc2VzXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBjYXJvdXNlbC5cblx0ICogQGNsYXNzIFRoZSBPd2wgQ2Fyb3VzZWwuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxqUXVlcnl9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBjcmVhdGUgdGhlIGNhcm91c2VsIGZvci5cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zXG5cdCAqL1xuXHRmdW5jdGlvbiBPd2woZWxlbWVudCwgb3B0aW9ucykge1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBzZXR0aW5ncyBmb3IgdGhlIGNhcm91c2VsLlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLnNldHRpbmdzID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgb3B0aW9ucyBzZXQgYnkgdGhlIGNhbGxlciBpbmNsdWRpbmcgZGVmYXVsdHMuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBPd2wuRGVmYXVsdHMsIG9wdGlvbnMpO1xuXG5cdFx0LyoqXG5cdFx0ICogUGx1Z2luIGVsZW1lbnQuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG5cdFx0LyoqXG5cdFx0ICogUHJveGllZCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZXMgdG8gdGhlIHJ1bm5pbmcgcGx1Z2lucyBvZiB0aGlzIGNhcm91c2VsLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9wbHVnaW5zID0ge307XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50bHkgc3VwcHJlc3NlZCBldmVudHMgdG8gcHJldmVudCB0aGVtIGZyb20gYmVpbmcgcmV0cmlnZ2VyZWQuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3N1cHJlc3MgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFic29sdXRlIGN1cnJlbnQgcG9zaXRpb24uXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2N1cnJlbnQgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fc3BlZWQgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ29vcmRpbmF0ZXMgb2YgYWxsIGl0ZW1zIGluIHBpeGVsLlxuXHRcdCAqIEB0b2RvIFRoZSBuYW1lIG9mIHRoaXMgbWVtYmVyIGlzIG1pc3NsZWFkaW5nLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9jb29yZGluYXRlcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBicmVha3BvaW50LlxuXHRcdCAqIEB0b2RvIFJlYWwgbWVkaWEgcXVlcmllcyB3b3VsZCBiZSBuaWNlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9icmVha3BvaW50ID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgd2lkdGggb2YgdGhlIHBsdWdpbiBlbGVtZW50LlxuXHRcdCAqL1xuXHRcdHRoaXMuX3dpZHRoID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCByZWFsIGl0ZW1zLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9pdGVtcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGNsb25lZCBpdGVtcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fY2xvbmVzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBNZXJnZSB2YWx1ZXMgb2YgYWxsIGl0ZW1zLlxuXHRcdCAqIEB0b2RvIE1heWJlIHRoaXMgY291bGQgYmUgcGFydCBvZiBhIHBsdWdpbi5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fbWVyZ2VycyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogV2lkdGhzIG9mIGFsbCBpdGVtcy5cblx0XHQgKi9cblx0XHR0aGlzLl93aWR0aHMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEludmFsaWRhdGVkIHBhcnRzIHdpdGhpbiB0aGUgdXBkYXRlIHByb2Nlc3MuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2ludmFsaWRhdGVkID0ge307XG5cblx0XHQvKipcblx0XHQgKiBPcmRlcmVkIGxpc3Qgb2Ygd29ya2VycyBmb3IgdGhlIHVwZGF0ZSBwcm9jZXNzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9waXBlID0gW107XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHN0YXRlIGluZm9ybWF0aW9uIGZvciB0aGUgZHJhZyBvcGVyYXRpb24uXG5cdFx0ICogQHRvZG8gIzI2MVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9kcmFnID0ge1xuXHRcdFx0dGltZTogbnVsbCxcblx0XHRcdHRhcmdldDogbnVsbCxcblx0XHRcdHBvaW50ZXI6IG51bGwsXG5cdFx0XHRzdGFnZToge1xuXHRcdFx0XHRzdGFydDogbnVsbCxcblx0XHRcdFx0Y3VycmVudDogbnVsbFxuXHRcdFx0fSxcblx0XHRcdGRpcmVjdGlvbjogbnVsbFxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHN0YXRlIGluZm9ybWF0aW9uIGFuZCB0aGVpciB0YWdzLlxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3N0YXRlcyA9IHtcblx0XHRcdGN1cnJlbnQ6IHt9LFxuXHRcdFx0dGFnczoge1xuXHRcdFx0XHQnaW5pdGlhbGl6aW5nJzogWyAnYnVzeScgXSxcblx0XHRcdFx0J2FuaW1hdGluZyc6IFsgJ2J1c3knIF0sXG5cdFx0XHRcdCdkcmFnZ2luZyc6IFsgJ2ludGVyYWN0aW5nJyBdXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdCQuZWFjaChbICdvblJlc2l6ZScsICdvblRocm90dGxlZFJlc2l6ZScgXSwgJC5wcm94eShmdW5jdGlvbihpLCBoYW5kbGVyKSB7XG5cdFx0XHR0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSA9ICQucHJveHkodGhpc1toYW5kbGVyXSwgdGhpcyk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0JC5lYWNoKE93bC5QbHVnaW5zLCAkLnByb3h5KGZ1bmN0aW9uKGtleSwgcGx1Z2luKSB7XG5cdFx0XHR0aGlzLl9wbHVnaW5zW2tleS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGtleS5zbGljZSgxKV1cblx0XHRcdFx0PSBuZXcgcGx1Z2luKHRoaXMpO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdCQuZWFjaChPd2wuV29ya2VycywgJC5wcm94eShmdW5jdGlvbihwcmlvcml0eSwgd29ya2VyKSB7XG5cdFx0XHR0aGlzLl9waXBlLnB1c2goe1xuXHRcdFx0XHQnZmlsdGVyJzogd29ya2VyLmZpbHRlcixcblx0XHRcdFx0J3J1bic6ICQucHJveHkod29ya2VyLnJ1biwgdGhpcylcblx0XHRcdH0pO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdHRoaXMuc2V0dXAoKTtcblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBjYXJvdXNlbC5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLkRlZmF1bHRzID0ge1xuXHRcdGl0ZW1zOiAzLFxuXHRcdGxvb3A6IGZhbHNlLFxuXHRcdGNlbnRlcjogZmFsc2UsXG5cdFx0cmV3aW5kOiBmYWxzZSxcblx0XHRjaGVja1Zpc2liaWxpdHk6IHRydWUsXG5cblx0XHRtb3VzZURyYWc6IHRydWUsXG5cdFx0dG91Y2hEcmFnOiB0cnVlLFxuXHRcdHB1bGxEcmFnOiB0cnVlLFxuXHRcdGZyZWVEcmFnOiBmYWxzZSxcblxuXHRcdG1hcmdpbjogMCxcblx0XHRzdGFnZVBhZGRpbmc6IDAsXG5cblx0XHRtZXJnZTogZmFsc2UsXG5cdFx0bWVyZ2VGaXQ6IHRydWUsXG5cdFx0YXV0b1dpZHRoOiBmYWxzZSxcblxuXHRcdHN0YXJ0UG9zaXRpb246IDAsXG5cdFx0cnRsOiBmYWxzZSxcblxuXHRcdHNtYXJ0U3BlZWQ6IDI1MCxcblx0XHRmbHVpZFNwZWVkOiBmYWxzZSxcblx0XHRkcmFnRW5kU3BlZWQ6IGZhbHNlLFxuXG5cdFx0cmVzcG9uc2l2ZToge30sXG5cdFx0cmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAyMDAsXG5cdFx0cmVzcG9uc2l2ZUJhc2VFbGVtZW50OiB3aW5kb3csXG5cblx0XHRmYWxsYmFja0Vhc2luZzogJ3N3aW5nJyxcblx0XHRzbGlkZVRyYW5zaXRpb246ICcnLFxuXG5cdFx0aW5mbzogZmFsc2UsXG5cblx0XHRuZXN0ZWRJdGVtU2VsZWN0b3I6IGZhbHNlLFxuXHRcdGl0ZW1FbGVtZW50OiAnZGl2Jyxcblx0XHRzdGFnZUVsZW1lbnQ6ICdkaXYnLFxuXG5cdFx0cmVmcmVzaENsYXNzOiAnb3dsLXJlZnJlc2gnLFxuXHRcdGxvYWRlZENsYXNzOiAnb3dsLWxvYWRlZCcsXG5cdFx0bG9hZGluZ0NsYXNzOiAnb3dsLWxvYWRpbmcnLFxuXHRcdHJ0bENsYXNzOiAnb3dsLXJ0bCcsXG5cdFx0cmVzcG9uc2l2ZUNsYXNzOiAnb3dsLXJlc3BvbnNpdmUnLFxuXHRcdGRyYWdDbGFzczogJ293bC1kcmFnJyxcblx0XHRpdGVtQ2xhc3M6ICdvd2wtaXRlbScsXG5cdFx0c3RhZ2VDbGFzczogJ293bC1zdGFnZScsXG5cdFx0c3RhZ2VPdXRlckNsYXNzOiAnb3dsLXN0YWdlLW91dGVyJyxcblx0XHRncmFiQ2xhc3M6ICdvd2wtZ3JhYidcblx0fTtcblxuXHQvKipcblx0ICogRW51bWVyYXRpb24gZm9yIHdpZHRoLlxuXHQgKiBAcHVibGljXG5cdCAqIEByZWFkb25seVxuXHQgKiBAZW51bSB7U3RyaW5nfVxuXHQgKi9cblx0T3dsLldpZHRoID0ge1xuXHRcdERlZmF1bHQ6ICdkZWZhdWx0Jyxcblx0XHRJbm5lcjogJ2lubmVyJyxcblx0XHRPdXRlcjogJ291dGVyJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBFbnVtZXJhdGlvbiBmb3IgdHlwZXMuXG5cdCAqIEBwdWJsaWNcblx0ICogQHJlYWRvbmx5XG5cdCAqIEBlbnVtIHtTdHJpbmd9XG5cdCAqL1xuXHRPd2wuVHlwZSA9IHtcblx0XHRFdmVudDogJ2V2ZW50Jyxcblx0XHRTdGF0ZTogJ3N0YXRlJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDb250YWlucyBhbGwgcmVnaXN0ZXJlZCBwbHVnaW5zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wuUGx1Z2lucyA9IHt9O1xuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIHdvcmtlcnMgaW52b2x2ZWQgaW4gdGhlIHVwZGF0ZSBwcm9jZXNzLlxuXHQgKi9cblx0T3dsLldvcmtlcnMgPSBbIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl93aWR0aCA9IHRoaXMuJGVsZW1lbnQud2lkdGgoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdGNhY2hlLmN1cnJlbnQgPSB0aGlzLl9pdGVtcyAmJiB0aGlzLl9pdGVtc1t0aGlzLnJlbGF0aXZlKHRoaXMuX2N1cnJlbnQpXTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignLmNsb25lZCcpLnJlbW92ZSgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0dmFyIG1hcmdpbiA9IHRoaXMuc2V0dGluZ3MubWFyZ2luIHx8ICcnLFxuXHRcdFx0XHRncmlkID0gIXRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoLFxuXHRcdFx0XHRydGwgPSB0aGlzLnNldHRpbmdzLnJ0bCxcblx0XHRcdFx0Y3NzID0ge1xuXHRcdFx0XHRcdCd3aWR0aCc6ICdhdXRvJyxcblx0XHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBydGwgPyBtYXJnaW4gOiAnJyxcblx0XHRcdFx0XHQnbWFyZ2luLXJpZ2h0JzogcnRsID8gJycgOiBtYXJnaW5cblx0XHRcdFx0fTtcblxuXHRcdFx0IWdyaWQgJiYgdGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5jc3MoY3NzKTtcblxuXHRcdFx0Y2FjaGUuY3NzID0gY3NzO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0dmFyIHdpZHRoID0gKHRoaXMud2lkdGgoKSAvIHRoaXMuc2V0dGluZ3MuaXRlbXMpLnRvRml4ZWQoMykgLSB0aGlzLnNldHRpbmdzLm1hcmdpbixcblx0XHRcdFx0bWVyZ2UgPSBudWxsLFxuXHRcdFx0XHRpdGVyYXRvciA9IHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdFx0Z3JpZCA9ICF0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCxcblx0XHRcdFx0d2lkdGhzID0gW107XG5cblx0XHRcdGNhY2hlLml0ZW1zID0ge1xuXHRcdFx0XHRtZXJnZTogZmFsc2UsXG5cdFx0XHRcdHdpZHRoOiB3aWR0aFxuXHRcdFx0fTtcblxuXHRcdFx0d2hpbGUgKGl0ZXJhdG9yLS0pIHtcblx0XHRcdFx0bWVyZ2UgPSB0aGlzLl9tZXJnZXJzW2l0ZXJhdG9yXTtcblx0XHRcdFx0bWVyZ2UgPSB0aGlzLnNldHRpbmdzLm1lcmdlRml0ICYmIE1hdGgubWluKG1lcmdlLCB0aGlzLnNldHRpbmdzLml0ZW1zKSB8fCBtZXJnZTtcblxuXHRcdFx0XHRjYWNoZS5pdGVtcy5tZXJnZSA9IG1lcmdlID4gMSB8fCBjYWNoZS5pdGVtcy5tZXJnZTtcblxuXHRcdFx0XHR3aWR0aHNbaXRlcmF0b3JdID0gIWdyaWQgPyB0aGlzLl9pdGVtc1tpdGVyYXRvcl0ud2lkdGgoKSA6IHdpZHRoICogbWVyZ2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3dpZHRocyA9IHdpZHRocztcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgY2xvbmVzID0gW10sXG5cdFx0XHRcdGl0ZW1zID0gdGhpcy5faXRlbXMsXG5cdFx0XHRcdHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncyxcblx0XHRcdFx0Ly8gVE9ETzogU2hvdWxkIGJlIGNvbXB1dGVkIGZyb20gbnVtYmVyIG9mIG1pbiB3aWR0aCBpdGVtcyBpbiBzdGFnZVxuXHRcdFx0XHR2aWV3ID0gTWF0aC5tYXgoc2V0dGluZ3MuaXRlbXMgKiAyLCA0KSxcblx0XHRcdFx0c2l6ZSA9IE1hdGguY2VpbChpdGVtcy5sZW5ndGggLyAyKSAqIDIsXG5cdFx0XHRcdHJlcGVhdCA9IHNldHRpbmdzLmxvb3AgJiYgaXRlbXMubGVuZ3RoID8gc2V0dGluZ3MucmV3aW5kID8gdmlldyA6IE1hdGgubWF4KHZpZXcsIHNpemUpIDogMCxcblx0XHRcdFx0YXBwZW5kID0gJycsXG5cdFx0XHRcdHByZXBlbmQgPSAnJztcblxuXHRcdFx0cmVwZWF0IC89IDI7XG5cblx0XHRcdHdoaWxlIChyZXBlYXQgPiAwKSB7XG5cdFx0XHRcdC8vIFN3aXRjaCB0byBvbmx5IHVzaW5nIGFwcGVuZGVkIGNsb25lc1xuXHRcdFx0XHRjbG9uZXMucHVzaCh0aGlzLm5vcm1hbGl6ZShjbG9uZXMubGVuZ3RoIC8gMiwgdHJ1ZSkpO1xuXHRcdFx0XHRhcHBlbmQgPSBhcHBlbmQgKyBpdGVtc1tjbG9uZXNbY2xvbmVzLmxlbmd0aCAtIDFdXVswXS5vdXRlckhUTUw7XG5cdFx0XHRcdGNsb25lcy5wdXNoKHRoaXMubm9ybWFsaXplKGl0ZW1zLmxlbmd0aCAtIDEgLSAoY2xvbmVzLmxlbmd0aCAtIDEpIC8gMiwgdHJ1ZSkpO1xuXHRcdFx0XHRwcmVwZW5kID0gaXRlbXNbY2xvbmVzW2Nsb25lcy5sZW5ndGggLSAxXV1bMF0ub3V0ZXJIVE1MICsgcHJlcGVuZDtcblx0XHRcdFx0cmVwZWF0IC09IDE7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2Nsb25lcyA9IGNsb25lcztcblxuXHRcdFx0JChhcHBlbmQpLmFkZENsYXNzKCdjbG9uZWQnKS5hcHBlbmRUbyh0aGlzLiRzdGFnZSk7XG5cdFx0XHQkKHByZXBlbmQpLmFkZENsYXNzKCdjbG9uZWQnKS5wcmVwZW5kVG8odGhpcy4kc3RhZ2UpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBydGwgPSB0aGlzLnNldHRpbmdzLnJ0bCA/IDEgOiAtMSxcblx0XHRcdFx0c2l6ZSA9IHRoaXMuX2Nsb25lcy5sZW5ndGggKyB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRcdGl0ZXJhdG9yID0gLTEsXG5cdFx0XHRcdHByZXZpb3VzID0gMCxcblx0XHRcdFx0Y3VycmVudCA9IDAsXG5cdFx0XHRcdGNvb3JkaW5hdGVzID0gW107XG5cblx0XHRcdHdoaWxlICgrK2l0ZXJhdG9yIDwgc2l6ZSkge1xuXHRcdFx0XHRwcmV2aW91cyA9IGNvb3JkaW5hdGVzW2l0ZXJhdG9yIC0gMV0gfHwgMDtcblx0XHRcdFx0Y3VycmVudCA9IHRoaXMuX3dpZHRoc1t0aGlzLnJlbGF0aXZlKGl0ZXJhdG9yKV0gKyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcblx0XHRcdFx0Y29vcmRpbmF0ZXMucHVzaChwcmV2aW91cyArIGN1cnJlbnQgKiBydGwpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBwYWRkaW5nID0gdGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcsXG5cdFx0XHRcdGNvb3JkaW5hdGVzID0gdGhpcy5fY29vcmRpbmF0ZXMsXG5cdFx0XHRcdGNzcyA9IHtcblx0XHRcdFx0XHQnd2lkdGgnOiBNYXRoLmNlaWwoTWF0aC5hYnMoY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXMubGVuZ3RoIC0gMV0pKSArIHBhZGRpbmcgKiAyLFxuXHRcdFx0XHRcdCdwYWRkaW5nLWxlZnQnOiBwYWRkaW5nIHx8ICcnLFxuXHRcdFx0XHRcdCdwYWRkaW5nLXJpZ2h0JzogcGFkZGluZyB8fCAnJ1xuXHRcdFx0XHR9O1xuXG5cdFx0XHR0aGlzLiRzdGFnZS5jc3MoY3NzKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdHZhciBpdGVyYXRvciA9IHRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aCxcblx0XHRcdFx0Z3JpZCA9ICF0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCxcblx0XHRcdFx0aXRlbXMgPSB0aGlzLiRzdGFnZS5jaGlsZHJlbigpO1xuXG5cdFx0XHRpZiAoZ3JpZCAmJiBjYWNoZS5pdGVtcy5tZXJnZSkge1xuXHRcdFx0XHR3aGlsZSAoaXRlcmF0b3ItLSkge1xuXHRcdFx0XHRcdGNhY2hlLmNzcy53aWR0aCA9IHRoaXMuX3dpZHRoc1t0aGlzLnJlbGF0aXZlKGl0ZXJhdG9yKV07XG5cdFx0XHRcdFx0aXRlbXMuZXEoaXRlcmF0b3IpLmNzcyhjYWNoZS5jc3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGdyaWQpIHtcblx0XHRcdFx0Y2FjaGUuY3NzLndpZHRoID0gY2FjaGUuaXRlbXMud2lkdGg7XG5cdFx0XHRcdGl0ZW1zLmNzcyhjYWNoZS5jc3MpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnaXRlbXMnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aCA8IDEgJiYgdGhpcy4kc3RhZ2UucmVtb3ZlQXR0cignc3R5bGUnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdGNhY2hlLmN1cnJlbnQgPSBjYWNoZS5jdXJyZW50ID8gdGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5pbmRleChjYWNoZS5jdXJyZW50KSA6IDA7XG5cdFx0XHRjYWNoZS5jdXJyZW50ID0gTWF0aC5tYXgodGhpcy5taW5pbXVtKCksIE1hdGgubWluKHRoaXMubWF4aW11bSgpLCBjYWNoZS5jdXJyZW50KSk7XG5cdFx0XHR0aGlzLnJlc2V0KGNhY2hlLmN1cnJlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAncG9zaXRpb24nIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuYW5pbWF0ZSh0aGlzLmNvb3JkaW5hdGVzKHRoaXMuX2N1cnJlbnQpKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ3Bvc2l0aW9uJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcnRsID0gdGhpcy5zZXR0aW5ncy5ydGwgPyAxIDogLTEsXG5cdFx0XHRcdHBhZGRpbmcgPSB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyAqIDIsXG5cdFx0XHRcdGJlZ2luID0gdGhpcy5jb29yZGluYXRlcyh0aGlzLmN1cnJlbnQoKSkgKyBwYWRkaW5nLFxuXHRcdFx0XHRlbmQgPSBiZWdpbiArIHRoaXMud2lkdGgoKSAqIHJ0bCxcblx0XHRcdFx0aW5uZXIsIG91dGVyLCBtYXRjaGVzID0gW10sIGksIG47XG5cblx0XHRcdGZvciAoaSA9IDAsIG4gPSB0aGlzLl9jb29yZGluYXRlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0aW5uZXIgPSB0aGlzLl9jb29yZGluYXRlc1tpIC0gMV0gfHwgMDtcblx0XHRcdFx0b3V0ZXIgPSBNYXRoLmFicyh0aGlzLl9jb29yZGluYXRlc1tpXSkgKyBwYWRkaW5nICogcnRsO1xuXG5cdFx0XHRcdGlmICgodGhpcy5vcChpbm5lciwgJzw9JywgYmVnaW4pICYmICh0aGlzLm9wKGlubmVyLCAnPicsIGVuZCkpKVxuXHRcdFx0XHRcdHx8ICh0aGlzLm9wKG91dGVyLCAnPCcsIGJlZ2luKSAmJiB0aGlzLm9wKG91dGVyLCAnPicsIGVuZCkpKSB7XG5cdFx0XHRcdFx0bWF0Y2hlcy5wdXNoKGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJzplcSgnICsgbWF0Y2hlcy5qb2luKCcpLCA6ZXEoJykgKyAnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5jZW50ZXInKS5yZW1vdmVDbGFzcygnY2VudGVyJyk7XG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5jZW50ZXIpIHtcblx0XHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5lcSh0aGlzLmN1cnJlbnQoKSkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBdO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgdGhlIHN0YWdlIERPTSBlbGVtZW50XG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmluaXRpYWxpemVTdGFnZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJHN0YWdlID0gdGhpcy4kZWxlbWVudC5maW5kKCcuJyArIHRoaXMuc2V0dGluZ3Muc3RhZ2VDbGFzcyk7XG5cblx0XHQvLyBpZiB0aGUgc3RhZ2UgaXMgYWxyZWFkeSBpbiB0aGUgRE9NLCBncmFiIGl0IGFuZCBza2lwIHN0YWdlIGluaXRpYWxpemF0aW9uXG5cdFx0aWYgKHRoaXMuJHN0YWdlLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmdDbGFzcyk7XG5cblx0XHQvLyBjcmVhdGUgc3RhZ2Vcblx0XHR0aGlzLiRzdGFnZSA9ICQoJzwnICsgdGhpcy5zZXR0aW5ncy5zdGFnZUVsZW1lbnQgKyAnPicsIHtcblx0XHRcdFwiY2xhc3NcIjogdGhpcy5zZXR0aW5ncy5zdGFnZUNsYXNzXG5cdFx0fSkud3JhcCggJCggJzxkaXYvPicsIHtcblx0XHRcdFwiY2xhc3NcIjogdGhpcy5zZXR0aW5ncy5zdGFnZU91dGVyQ2xhc3Ncblx0XHR9KSk7XG5cblx0XHQvLyBhcHBlbmQgc3RhZ2Vcblx0XHR0aGlzLiRlbGVtZW50LmFwcGVuZCh0aGlzLiRzdGFnZS5wYXJlbnQoKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBpdGVtIERPTSBlbGVtZW50c1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pbml0aWFsaXplSXRlbXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgJGl0ZW1zID0gdGhpcy4kZWxlbWVudC5maW5kKCcub3dsLWl0ZW0nKTtcblxuXHRcdC8vIGlmIHRoZSBpdGVtcyBhcmUgYWxyZWFkeSBpbiB0aGUgRE9NLCBncmFiIHRoZW0gYW5kIHNraXAgaXRlbSBpbml0aWFsaXphdGlvblxuXHRcdGlmICgkaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLl9pdGVtcyA9ICRpdGVtcy5nZXQoKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xuXHRcdFx0XHRyZXR1cm4gJChpdGVtKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLl9tZXJnZXJzID0gdGhpcy5faXRlbXMubWFwKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGFwcGVuZCBjb250ZW50XG5cdFx0dGhpcy5yZXBsYWNlKHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oKS5ub3QodGhpcy4kc3RhZ2UucGFyZW50KCkpKTtcblxuXHRcdC8vIGNoZWNrIHZpc2liaWxpdHlcblx0XHRpZiAodGhpcy5pc1Zpc2libGUoKSkge1xuXHRcdFx0Ly8gdXBkYXRlIHZpZXdcblx0XHRcdHRoaXMucmVmcmVzaCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBpbnZhbGlkYXRlIHdpZHRoXG5cdFx0XHR0aGlzLmludmFsaWRhdGUoJ3dpZHRoJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kZWxlbWVudFxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRlZENsYXNzKTtcblx0fTtcblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVudGVyKCdpbml0aWFsaXppbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ2luaXRpYWxpemUnKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5zZXR0aW5ncy5ydGxDbGFzcywgdGhpcy5zZXR0aW5ncy5ydGwpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoICYmICF0aGlzLmlzKCdwcmUtbG9hZGluZycpKSB7XG5cdFx0XHR2YXIgaW1ncywgbmVzdGVkU2VsZWN0b3IsIHdpZHRoO1xuXHRcdFx0aW1ncyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaW1nJyk7XG5cdFx0XHRuZXN0ZWRTZWxlY3RvciA9IHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yID8gJy4nICsgdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IgOiB1bmRlZmluZWQ7XG5cdFx0XHR3aWR0aCA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4obmVzdGVkU2VsZWN0b3IpLndpZHRoKCk7XG5cblx0XHRcdGlmIChpbWdzLmxlbmd0aCAmJiB3aWR0aCA8PSAwKSB7XG5cdFx0XHRcdHRoaXMucHJlbG9hZEF1dG9XaWR0aEltYWdlcyhpbWdzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmluaXRpYWxpemVTdGFnZSgpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZUl0ZW1zKCk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMucmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk7XG5cblx0XHR0aGlzLmxlYXZlKCdpbml0aWFsaXppbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ2luaXRpYWxpemVkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufSB2aXNpYmlsaXR5IG9mICRlbGVtZW50XG5cdCAqICAgICAgICAgICAgICAgICAgICBpZiB5b3Uga25vdyB0aGUgY2Fyb3VzZWwgd2lsbCBhbHdheXMgYmUgdmlzaWJsZSB5b3UgY2FuIHNldCBgY2hlY2tWaXNpYmlsaXR5YCB0byBgZmFsc2VgIHRvXG5cdCAqICAgICAgICAgICAgICAgICAgICBwcmV2ZW50IHRoZSBleHBlbnNpdmUgYnJvd3NlciBsYXlvdXQgZm9yY2VkIHJlZmxvdyB0aGUgJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykgZG9lc1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXR0aW5ncy5jaGVja1Zpc2liaWxpdHlcblx0XHRcdD8gdGhpcy4kZWxlbWVudC5pcygnOnZpc2libGUnKVxuXHRcdFx0OiB0cnVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXR1cHMgdGhlIGN1cnJlbnQgc2V0dGluZ3MuXG5cdCAqIEB0b2RvIFJlbW92ZSByZXNwb25zaXZlIGNsYXNzZXMuIFdoeSBzaG91bGQgYWRhcHRpdmUgZGVzaWducyBiZSBicm91Z2h0IGludG8gSUU4P1xuXHQgKiBAdG9kbyBTdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGJ5IHVzaW5nIGBtYXRjaE1lZGlhYCB3b3VsZCBiZSBuaWNlLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHZpZXdwb3J0ID0gdGhpcy52aWV3cG9ydCgpLFxuXHRcdFx0b3ZlcndyaXRlcyA9IHRoaXMub3B0aW9ucy5yZXNwb25zaXZlLFxuXHRcdFx0bWF0Y2ggPSAtMSxcblx0XHRcdHNldHRpbmdzID0gbnVsbDtcblxuXHRcdGlmICghb3ZlcndyaXRlcykge1xuXHRcdFx0c2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JC5lYWNoKG92ZXJ3cml0ZXMsIGZ1bmN0aW9uKGJyZWFrcG9pbnQpIHtcblx0XHRcdFx0aWYgKGJyZWFrcG9pbnQgPD0gdmlld3BvcnQgJiYgYnJlYWtwb2ludCA+IG1hdGNoKSB7XG5cdFx0XHRcdFx0bWF0Y2ggPSBOdW1iZXIoYnJlYWtwb2ludCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIG92ZXJ3cml0ZXNbbWF0Y2hdKTtcblx0XHRcdGlmICh0eXBlb2Ygc2V0dGluZ3Muc3RhZ2VQYWRkaW5nID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHNldHRpbmdzLnN0YWdlUGFkZGluZyA9IHNldHRpbmdzLnN0YWdlUGFkZGluZygpO1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHNldHRpbmdzLnJlc3BvbnNpdmU7XG5cblx0XHRcdC8vIHJlc3BvbnNpdmUgY2xhc3Ncblx0XHRcdGlmIChzZXR0aW5ncy5yZXNwb25zaXZlQ2xhc3MpIHtcblx0XHRcdFx0dGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycsXG5cdFx0XHRcdFx0dGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycpLnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyB0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUNsYXNzICsgJy0pXFxcXFMrXFxcXHMnLCAnZycpLCAnJDEnICsgbWF0Y2gpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdzZXR0aW5ncycsIHZhbHVlOiBzZXR0aW5ncyB9IH0pO1xuXHRcdHRoaXMuX2JyZWFrcG9pbnQgPSBtYXRjaDtcblx0XHR0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdzZXR0aW5ncycpO1xuXHRcdHRoaXMudHJpZ2dlcignY2hhbmdlZCcsIHsgcHJvcGVydHk6IHsgbmFtZTogJ3NldHRpbmdzJywgdmFsdWU6IHRoaXMuc2V0dGluZ3MgfSB9KTtcblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlcyBvcHRpb24gbG9naWMgaWYgbmVjZXNzZXJ5LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9wdGlvbnNMb2dpYyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCkge1xuXHRcdFx0dGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcgPSBmYWxzZTtcblx0XHRcdHRoaXMuc2V0dGluZ3MubWVyZ2UgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFByZXBhcmVzIGFuIGl0ZW0gYmVmb3JlIGFkZC5cblx0ICogQHRvZG8gUmVuYW1lIGV2ZW50IHBhcmFtZXRlciBgY29udGVudGAgdG8gYGl0ZW1gLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtqUXVlcnl8SFRNTEVsZW1lbnR9IC0gVGhlIGl0ZW0gY29udGFpbmVyLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdHZhciBldmVudCA9IHRoaXMudHJpZ2dlcigncHJlcGFyZScsIHsgY29udGVudDogaXRlbSB9KTtcblxuXHRcdGlmICghZXZlbnQuZGF0YSkge1xuXHRcdFx0ZXZlbnQuZGF0YSA9ICQoJzwnICsgdGhpcy5zZXR0aW5ncy5pdGVtRWxlbWVudCArICcvPicpXG5cdFx0XHRcdC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuaXRlbUNsYXNzKS5hcHBlbmQoaXRlbSlcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3ByZXBhcmVkJywgeyBjb250ZW50OiBldmVudC5kYXRhIH0pO1xuXG5cdFx0cmV0dXJuIGV2ZW50LmRhdGE7XG5cdH07XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHZpZXcuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0biA9IHRoaXMuX3BpcGUubGVuZ3RoLFxuXHRcdFx0ZmlsdGVyID0gJC5wcm94eShmdW5jdGlvbihwKSB7IHJldHVybiB0aGlzW3BdIH0sIHRoaXMuX2ludmFsaWRhdGVkKSxcblx0XHRcdGNhY2hlID0ge307XG5cblx0XHR3aGlsZSAoaSA8IG4pIHtcblx0XHRcdGlmICh0aGlzLl9pbnZhbGlkYXRlZC5hbGwgfHwgJC5ncmVwKHRoaXMuX3BpcGVbaV0uZmlsdGVyLCBmaWx0ZXIpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy5fcGlwZVtpXS5ydW4oY2FjaGUpO1xuXHRcdFx0fVxuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHRoaXMuX2ludmFsaWRhdGVkID0ge307XG5cblx0XHQhdGhpcy5pcygndmFsaWQnKSAmJiB0aGlzLmVudGVyKCd2YWxpZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgdmlldy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge093bC5XaWR0aH0gW2RpbWVuc2lvbj1Pd2wuV2lkdGguRGVmYXVsdF0gLSBUaGUgZGltZW5zaW9uIHRvIHJldHVybi5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgd2lkdGggb2YgdGhlIHZpZXcgaW4gcGl4ZWwuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24oZGltZW5zaW9uKSB7XG5cdFx0ZGltZW5zaW9uID0gZGltZW5zaW9uIHx8IE93bC5XaWR0aC5EZWZhdWx0O1xuXHRcdHN3aXRjaCAoZGltZW5zaW9uKSB7XG5cdFx0XHRjYXNlIE93bC5XaWR0aC5Jbm5lcjpcblx0XHRcdGNhc2UgT3dsLldpZHRoLk91dGVyOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fd2lkdGg7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fd2lkdGggLSB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyAqIDIgKyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlZnJlc2hlcyB0aGUgY2Fyb3VzZWwgcHJpbWFyaWx5IGZvciBhZGFwdGl2ZSBwdXJwb3Nlcy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5lbnRlcigncmVmcmVzaGluZycpO1xuXHRcdHRoaXMudHJpZ2dlcigncmVmcmVzaCcpO1xuXG5cdFx0dGhpcy5zZXR1cCgpO1xuXG5cdFx0dGhpcy5vcHRpb25zTG9naWMoKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnJlZnJlc2hDbGFzcyk7XG5cblx0XHR0aGlzLnVwZGF0ZSgpO1xuXG5cdFx0dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucmVmcmVzaENsYXNzKTtcblxuXHRcdHRoaXMubGVhdmUoJ3JlZnJlc2hpbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3JlZnJlc2hlZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2luZG93IGByZXNpemVgIGV2ZW50LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uVGhyb3R0bGVkUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKTtcblx0XHR0aGlzLnJlc2l6ZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5faGFuZGxlcnMub25SZXNpemUsIHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZVJlZnJlc2hSYXRlKTtcblx0fTtcblxuXHQvKipcblx0ICogQ2hlY2tzIHdpbmRvdyBgcmVzaXplYCBldmVudC5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghdGhpcy5faXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX3dpZHRoID09PSB0aGlzLiRlbGVtZW50LndpZHRoKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaXNWaXNpYmxlKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmVudGVyKCdyZXNpemluZycpO1xuXG5cdFx0aWYgKHRoaXMudHJpZ2dlcigncmVzaXplJykuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcblx0XHRcdHRoaXMubGVhdmUoJ3Jlc2l6aW5nJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCd3aWR0aCcpO1xuXG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cblx0XHR0aGlzLmxlYXZlKCdyZXNpemluZycpO1xuXHRcdHRoaXMudHJpZ2dlcigncmVzaXplZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgZXZlbnQgaGFuZGxlcnMuXG5cdCAqIEB0b2RvIENoZWNrIGBtc1BvaW50ZXJFbmFibGVkYFxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVnaXN0ZXJFdmVudEhhbmRsZXJzID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCQuc3VwcG9ydC50cmFuc2l0aW9uKSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbigkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQgKyAnLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uVHJhbnNpdGlvbkVuZCwgdGhpcykpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnJlc3BvbnNpdmUgIT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLm9uKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZXJzLm9uVGhyb3R0bGVkUmVzaXplKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5tb3VzZURyYWcpIHtcblx0XHRcdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmRyYWdDbGFzcyk7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbignbW91c2Vkb3duLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ1N0YXJ0LCB0aGlzKSk7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbignZHJhZ3N0YXJ0Lm93bC5jb3JlIHNlbGVjdHN0YXJ0Lm93bC5jb3JlJywgZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZSB9KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy50b3VjaERyYWcpe1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJ3RvdWNoc3RhcnQub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnU3RhcnQsIHRoaXMpKTtcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCd0b3VjaGNhbmNlbC5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdFbmQsIHRoaXMpKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgYHRvdWNoc3RhcnRgIGFuZCBgbW91c2Vkb3duYCBldmVudHMuXG5cdCAqIEB0b2RvIEhvcml6b250YWwgc3dpcGUgdGhyZXNob2xkIGFzIG9wdGlvblxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vbkRyYWdTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHN0YWdlID0gbnVsbDtcblxuXHRcdGlmIChldmVudC53aGljaCA9PT0gMykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICgkLnN1cHBvcnQudHJhbnNmb3JtKSB7XG5cdFx0XHRzdGFnZSA9IHRoaXMuJHN0YWdlLmNzcygndHJhbnNmb3JtJykucmVwbGFjZSgvLipcXCh8XFwpfCAvZywgJycpLnNwbGl0KCcsJyk7XG5cdFx0XHRzdGFnZSA9IHtcblx0XHRcdFx0eDogc3RhZ2Vbc3RhZ2UubGVuZ3RoID09PSAxNiA/IDEyIDogNF0sXG5cdFx0XHRcdHk6IHN0YWdlW3N0YWdlLmxlbmd0aCA9PT0gMTYgPyAxMyA6IDVdXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFnZSA9IHRoaXMuJHN0YWdlLnBvc2l0aW9uKCk7XG5cdFx0XHRzdGFnZSA9IHtcblx0XHRcdFx0eDogdGhpcy5zZXR0aW5ncy5ydGwgP1xuXHRcdFx0XHRcdHN0YWdlLmxlZnQgKyB0aGlzLiRzdGFnZS53aWR0aCgpIC0gdGhpcy53aWR0aCgpICsgdGhpcy5zZXR0aW5ncy5tYXJnaW4gOlxuXHRcdFx0XHRcdHN0YWdlLmxlZnQsXG5cdFx0XHRcdHk6IHN0YWdlLnRvcFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pcygnYW5pbWF0aW5nJykpIHtcblx0XHRcdCQuc3VwcG9ydC50cmFuc2Zvcm0gPyB0aGlzLmFuaW1hdGUoc3RhZ2UueCkgOiB0aGlzLiRzdGFnZS5zdG9wKClcblx0XHRcdHRoaXMuaW52YWxpZGF0ZSgncG9zaXRpb24nKTtcblx0XHR9XG5cblx0XHR0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5ncmFiQ2xhc3MsIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nKTtcblxuXHRcdHRoaXMuc3BlZWQoMCk7XG5cblx0XHR0aGlzLl9kcmFnLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHR0aGlzLl9kcmFnLnRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblx0XHR0aGlzLl9kcmFnLnN0YWdlLnN0YXJ0ID0gc3RhZ2U7XG5cdFx0dGhpcy5fZHJhZy5zdGFnZS5jdXJyZW50ID0gc3RhZ2U7XG5cdFx0dGhpcy5fZHJhZy5wb2ludGVyID0gdGhpcy5wb2ludGVyKGV2ZW50KTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwLm93bC5jb3JlIHRvdWNoZW5kLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ0VuZCwgdGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub25lKCdtb3VzZW1vdmUub3dsLmNvcmUgdG91Y2htb3ZlLm93bC5jb3JlJywgJC5wcm94eShmdW5jdGlvbihldmVudCkge1xuXHRcdFx0dmFyIGRlbHRhID0gdGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcucG9pbnRlciwgdGhpcy5wb2ludGVyKGV2ZW50KSk7XG5cblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUub3dsLmNvcmUgdG91Y2htb3ZlLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ01vdmUsIHRoaXMpKTtcblxuXHRcdFx0aWYgKE1hdGguYWJzKGRlbHRhLngpIDwgTWF0aC5hYnMoZGVsdGEueSkgJiYgdGhpcy5pcygndmFsaWQnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRoaXMuZW50ZXIoJ2RyYWdnaW5nJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2RyYWcnKTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgdGhlIGB0b3VjaG1vdmVgIGFuZCBgbW91c2Vtb3ZlYCBldmVudHMuXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uRHJhZ01vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBtaW5pbXVtID0gbnVsbCxcblx0XHRcdG1heGltdW0gPSBudWxsLFxuXHRcdFx0cHVsbCA9IG51bGwsXG5cdFx0XHRkZWx0YSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnBvaW50ZXIsIHRoaXMucG9pbnRlcihldmVudCkpLFxuXHRcdFx0c3RhZ2UgPSB0aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5zdGFnZS5zdGFydCwgZGVsdGEpO1xuXG5cdFx0aWYgKCF0aGlzLmlzKCdkcmFnZ2luZycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmxvb3ApIHtcblx0XHRcdG1pbmltdW0gPSB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWluaW11bSgpKTtcblx0XHRcdG1heGltdW0gPSB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWF4aW11bSgpICsgMSkgLSBtaW5pbXVtO1xuXHRcdFx0c3RhZ2UueCA9ICgoKHN0YWdlLnggLSBtaW5pbXVtKSAlIG1heGltdW0gKyBtYXhpbXVtKSAlIG1heGltdW0pICsgbWluaW11bTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWluaW11bSA9IHRoaXMuc2V0dGluZ3MucnRsID8gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSkgOiB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWluaW11bSgpKTtcblx0XHRcdG1heGltdW0gPSB0aGlzLnNldHRpbmdzLnJ0bCA/IHRoaXMuY29vcmRpbmF0ZXModGhpcy5taW5pbXVtKCkpIDogdGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSk7XG5cdFx0XHRwdWxsID0gdGhpcy5zZXR0aW5ncy5wdWxsRHJhZyA/IC0xICogZGVsdGEueCAvIDUgOiAwO1xuXHRcdFx0c3RhZ2UueCA9IE1hdGgubWF4KE1hdGgubWluKHN0YWdlLngsIG1pbmltdW0gKyBwdWxsKSwgbWF4aW11bSArIHB1bGwpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2RyYWcuc3RhZ2UuY3VycmVudCA9IHN0YWdlO1xuXG5cdFx0dGhpcy5hbmltYXRlKHN0YWdlLngpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIHRoZSBgdG91Y2hlbmRgIGFuZCBgbW91c2V1cGAgZXZlbnRzLlxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEB0b2RvIFRocmVzaG9sZCBmb3IgY2xpY2sgZXZlbnRcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uRHJhZ0VuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIGRlbHRhID0gdGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcucG9pbnRlciwgdGhpcy5wb2ludGVyKGV2ZW50KSksXG5cdFx0XHRzdGFnZSA9IHRoaXMuX2RyYWcuc3RhZ2UuY3VycmVudCxcblx0XHRcdGRpcmVjdGlvbiA9IGRlbHRhLnggPiAwIF4gdGhpcy5zZXR0aW5ncy5ydGwgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG5cdFx0JChkb2N1bWVudCkub2ZmKCcub3dsLmNvcmUnKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmdyYWJDbGFzcyk7XG5cblx0XHRpZiAoZGVsdGEueCAhPT0gMCAmJiB0aGlzLmlzKCdkcmFnZ2luZycpIHx8ICF0aGlzLmlzKCd2YWxpZCcpKSB7XG5cdFx0XHR0aGlzLnNwZWVkKHRoaXMuc2V0dGluZ3MuZHJhZ0VuZFNwZWVkIHx8IHRoaXMuc2V0dGluZ3Muc21hcnRTcGVlZCk7XG5cdFx0XHR0aGlzLmN1cnJlbnQodGhpcy5jbG9zZXN0KHN0YWdlLngsIGRlbHRhLnggIT09IDAgPyBkaXJlY3Rpb24gOiB0aGlzLl9kcmFnLmRpcmVjdGlvbikpO1xuXHRcdFx0dGhpcy5pbnZhbGlkYXRlKCdwb3NpdGlvbicpO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblxuXHRcdFx0dGhpcy5fZHJhZy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cblx0XHRcdGlmIChNYXRoLmFicyhkZWx0YS54KSA+IDMgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLl9kcmFnLnRpbWUgPiAzMDApIHtcblx0XHRcdFx0dGhpcy5fZHJhZy50YXJnZXQub25lKCdjbGljay5vd2wuY29yZScsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pcygnZHJhZ2dpbmcnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGVhdmUoJ2RyYWdnaW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdkcmFnZ2VkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGNsb3Nlc3QgaXRlbSBmb3IgYSBjb29yZGluYXRlLlxuXHQgKiBAdG9kbyBTZXR0aW5nIGBmcmVlRHJhZ2AgbWFrZXMgYGNsb3Nlc3RgIG5vdCByZXVzYWJsZS4gU2VlICMxNjUuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNvb3JkaW5hdGUgLSBUaGUgY29vcmRpbmF0ZSBpbiBwaXhlbC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvbiAtIFRoZSBkaXJlY3Rpb24gdG8gY2hlY2sgZm9yIHRoZSBjbG9zZXN0IGl0ZW0uIEV0aGVyIGBsZWZ0YCBvciBgcmlnaHRgLlxuXHQgKiBAcmV0dXJuIHtOdW1iZXJ9IC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjbG9zZXN0IGl0ZW0uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihjb29yZGluYXRlLCBkaXJlY3Rpb24pIHtcblx0XHR2YXIgcG9zaXRpb24gPSAtMSxcblx0XHRcdHB1bGwgPSAzMCxcblx0XHRcdHdpZHRoID0gdGhpcy53aWR0aCgpLFxuXHRcdFx0Y29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzKCk7XG5cblx0XHRpZiAoIXRoaXMuc2V0dGluZ3MuZnJlZURyYWcpIHtcblx0XHRcdC8vIGNoZWNrIGNsb3Nlc3QgaXRlbVxuXHRcdFx0JC5lYWNoKGNvb3JkaW5hdGVzLCAkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuXHRcdFx0XHQvLyBvbiBhIGxlZnQgcHVsbCwgY2hlY2sgb24gY3VycmVudCBpbmRleFxuXHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcgJiYgY29vcmRpbmF0ZSA+IHZhbHVlIC0gcHVsbCAmJiBjb29yZGluYXRlIDwgdmFsdWUgKyBwdWxsKSB7XG5cdFx0XHRcdFx0cG9zaXRpb24gPSBpbmRleDtcblx0XHRcdFx0Ly8gb24gYSByaWdodCBwdWxsLCBjaGVjayBvbiBwcmV2aW91cyBpbmRleFxuXHRcdFx0XHQvLyB0byBkbyBzbywgc3VidHJhY3Qgd2lkdGggZnJvbSB2YWx1ZSBhbmQgc2V0IHBvc2l0aW9uID0gaW5kZXggKyAxXG5cdFx0XHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnICYmIGNvb3JkaW5hdGUgPiB2YWx1ZSAtIHdpZHRoIC0gcHVsbCAmJiBjb29yZGluYXRlIDwgdmFsdWUgLSB3aWR0aCArIHB1bGwpIHtcblx0XHRcdFx0XHRwb3NpdGlvbiA9IGluZGV4ICsgMTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wKGNvb3JkaW5hdGUsICc8JywgdmFsdWUpXG5cdFx0XHRcdFx0JiYgdGhpcy5vcChjb29yZGluYXRlLCAnPicsIGNvb3JkaW5hdGVzW2luZGV4ICsgMV0gIT09IHVuZGVmaW5lZCA/IGNvb3JkaW5hdGVzW2luZGV4ICsgMV0gOiB2YWx1ZSAtIHdpZHRoKSkge1xuXHRcdFx0XHRcdHBvc2l0aW9uID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyBpbmRleCArIDEgOiBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcG9zaXRpb24gPT09IC0xO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5zZXR0aW5ncy5sb29wKSB7XG5cdFx0XHQvLyBub24gbG9vcCBib3VuZHJpZXNcblx0XHRcdGlmICh0aGlzLm9wKGNvb3JkaW5hdGUsICc+JywgY29vcmRpbmF0ZXNbdGhpcy5taW5pbXVtKCldKSkge1xuXHRcdFx0XHRwb3NpdGlvbiA9IGNvb3JkaW5hdGUgPSB0aGlzLm1pbmltdW0oKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcChjb29yZGluYXRlLCAnPCcsIGNvb3JkaW5hdGVzW3RoaXMubWF4aW11bSgpXSkpIHtcblx0XHRcdFx0cG9zaXRpb24gPSBjb29yZGluYXRlID0gdGhpcy5tYXhpbXVtKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvc2l0aW9uO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBbmltYXRlcyB0aGUgc3RhZ2UuXG5cdCAqIEB0b2RvICMyNzBcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gY29vcmRpbmF0ZSAtIFRoZSBjb29yZGluYXRlIGluIHBpeGVscy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKGNvb3JkaW5hdGUpIHtcblx0XHR2YXIgYW5pbWF0ZSA9IHRoaXMuc3BlZWQoKSA+IDA7XG5cblx0XHR0aGlzLmlzKCdhbmltYXRpbmcnKSAmJiB0aGlzLm9uVHJhbnNpdGlvbkVuZCgpO1xuXG5cdFx0aWYgKGFuaW1hdGUpIHtcblx0XHRcdHRoaXMuZW50ZXIoJ2FuaW1hdGluZycpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFuc2xhdGUnKTtcblx0XHR9XG5cblx0XHRpZiAoJC5zdXBwb3J0LnRyYW5zZm9ybTNkICYmICQuc3VwcG9ydC50cmFuc2l0aW9uKSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5jc3Moe1xuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgY29vcmRpbmF0ZSArICdweCwwcHgsMHB4KScsXG5cdFx0XHRcdHRyYW5zaXRpb246ICh0aGlzLnNwZWVkKCkgLyAxMDAwKSArICdzJyArIChcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLnNsaWRlVHJhbnNpdGlvbiA/ICcgJyArIHRoaXMuc2V0dGluZ3Muc2xpZGVUcmFuc2l0aW9uIDogJydcblx0XHRcdFx0KVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmIChhbmltYXRlKSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5hbmltYXRlKHtcblx0XHRcdFx0bGVmdDogY29vcmRpbmF0ZSArICdweCdcblx0XHRcdH0sIHRoaXMuc3BlZWQoKSwgdGhpcy5zZXR0aW5ncy5mYWxsYmFja0Vhc2luZywgJC5wcm94eSh0aGlzLm9uVHJhbnNpdGlvbkVuZCwgdGhpcykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5jc3Moe1xuXHRcdFx0XHRsZWZ0OiBjb29yZGluYXRlICsgJ3B4J1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGUgY2Fyb3VzZWwgaXMgaW4gYSBzcGVjaWZpYyBzdGF0ZSBvciBub3QuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSAtIFRoZSBzdGF0ZSB0byBjaGVjay5cblx0ICogQHJldHVybnMge0Jvb2xlYW59IC0gVGhlIGZsYWcgd2hpY2ggaW5kaWNhdGVzIGlmIHRoZSBjYXJvdXNlbCBpcyBidXN5LlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YXRlcy5jdXJyZW50W3N0YXRlXSAmJiB0aGlzLl9zdGF0ZXMuY3VycmVudFtzdGF0ZV0gPiAwO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIG5ldyBhYnNvbHV0ZSBwb3NpdGlvbiBvciBub3RoaW5nIHRvIGxlYXZlIGl0IHVuY2hhbmdlZC5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgaXRlbS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLl9jdXJyZW50O1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9pdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbik7XG5cblx0XHRpZiAodGhpcy5fY3VycmVudCAhPT0gcG9zaXRpb24pIHtcblx0XHRcdHZhciBldmVudCA9IHRoaXMudHJpZ2dlcignY2hhbmdlJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAncG9zaXRpb24nLCB2YWx1ZTogcG9zaXRpb24gfSB9KTtcblxuXHRcdFx0aWYgKGV2ZW50LmRhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKGV2ZW50LmRhdGEpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jdXJyZW50ID0gcG9zaXRpb247XG5cblx0XHRcdHRoaXMuaW52YWxpZGF0ZSgncG9zaXRpb24nKTtcblxuXHRcdFx0dGhpcy50cmlnZ2VyKCdjaGFuZ2VkJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAncG9zaXRpb24nLCB2YWx1ZTogdGhpcy5fY3VycmVudCB9IH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBJbnZhbGlkYXRlcyB0aGUgZ2l2ZW4gcGFydCBvZiB0aGUgdXBkYXRlIHJvdXRpbmUuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbcGFydF0gLSBUaGUgcGFydCB0byBpbnZhbGlkYXRlLlxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPFN0cmluZz59IC0gVGhlIGludmFsaWRhdGVkIHBhcnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pbnZhbGlkYXRlID0gZnVuY3Rpb24ocGFydCkge1xuXHRcdGlmICgkLnR5cGUocGFydCkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLl9pbnZhbGlkYXRlZFtwYXJ0XSA9IHRydWU7XG5cdFx0XHR0aGlzLmlzKCd2YWxpZCcpICYmIHRoaXMubGVhdmUoJ3ZhbGlkJyk7XG5cdFx0fVxuXHRcdHJldHVybiAkLm1hcCh0aGlzLl9pbnZhbGlkYXRlZCwgZnVuY3Rpb24odiwgaSkgeyByZXR1cm4gaSB9KTtcblx0fTtcblxuXHQvKipcblx0ICogUmVzZXRzIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgbmV3IGl0ZW0uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uKTtcblxuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fc3BlZWQgPSAwO1xuXHRcdHRoaXMuX2N1cnJlbnQgPSBwb3NpdGlvbjtcblxuXHRcdHRoaXMuc3VwcHJlc3MoWyAndHJhbnNsYXRlJywgJ3RyYW5zbGF0ZWQnIF0pO1xuXG5cdFx0dGhpcy5hbmltYXRlKHRoaXMuY29vcmRpbmF0ZXMocG9zaXRpb24pKTtcblxuXHRcdHRoaXMucmVsZWFzZShbICd0cmFuc2xhdGUnLCAndHJhbnNsYXRlZCcgXSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIE5vcm1hbGl6ZXMgYW4gYWJzb2x1dGUgb3IgYSByZWxhdGl2ZSBwb3NpdGlvbiBvZiBhbiBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBvciByZWxhdGl2ZSBwb3NpdGlvbiB0byBub3JtYWxpemUuXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbGF0aXZlPWZhbHNlXSAtIFdoZXRoZXIgdGhlIGdpdmVuIHBvc2l0aW9uIGlzIHJlbGF0aXZlIG9yIG5vdC5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgbm9ybWFsaXplZCBwb3NpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24ocG9zaXRpb24sIHJlbGF0aXZlKSB7XG5cdFx0dmFyIG4gPSB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRtID0gcmVsYXRpdmUgPyAwIDogdGhpcy5fY2xvbmVzLmxlbmd0aDtcblxuXHRcdGlmICghdGhpcy5pc051bWVyaWMocG9zaXRpb24pIHx8IG4gPCAxKSB7XG5cdFx0XHRwb3NpdGlvbiA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2UgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBuICsgbSkge1xuXHRcdFx0cG9zaXRpb24gPSAoKHBvc2l0aW9uIC0gbSAvIDIpICUgbiArIG4pICUgbiArIG0gLyAyO1xuXHRcdH1cblxuXHRcdHJldHVybiBwb3NpdGlvbjtcblx0fTtcblxuXHQvKipcblx0ICogQ29udmVydHMgYW4gYWJzb2x1dGUgcG9zaXRpb24gb2YgYW4gaXRlbSBpbnRvIGEgcmVsYXRpdmUgb25lLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiB0byBjb252ZXJ0LlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBjb252ZXJ0ZWQgcG9zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlbGF0aXZlID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRwb3NpdGlvbiAtPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMjtcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBtYXhpbXVtIHBvc2l0aW9uIGZvciB0aGUgY3VycmVudCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbGF0aXZlPWZhbHNlXSAtIFdoZXRoZXIgdG8gcmV0dXJuIGFuIGFic29sdXRlIHBvc2l0aW9uIG9yIGEgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm1heGltdW0gPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuXHRcdHZhciBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MsXG5cdFx0XHRtYXhpbXVtID0gdGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoLFxuXHRcdFx0aXRlcmF0b3IsXG5cdFx0XHRyZWNpcHJvY2FsSXRlbXNXaWR0aCxcblx0XHRcdGVsZW1lbnRXaWR0aDtcblxuXHRcdGlmIChzZXR0aW5ncy5sb29wKSB7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDIgKyB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuXHRcdH0gZWxzZSBpZiAoc2V0dGluZ3MuYXV0b1dpZHRoIHx8IHNldHRpbmdzLm1lcmdlKSB7XG5cdFx0XHRpdGVyYXRvciA9IHRoaXMuX2l0ZW1zLmxlbmd0aDtcblx0XHRcdGlmIChpdGVyYXRvcikge1xuXHRcdFx0XHRyZWNpcHJvY2FsSXRlbXNXaWR0aCA9IHRoaXMuX2l0ZW1zWy0taXRlcmF0b3JdLndpZHRoKCk7XG5cdFx0XHRcdGVsZW1lbnRXaWR0aCA9IHRoaXMuJGVsZW1lbnQud2lkdGgoKTtcblx0XHRcdFx0d2hpbGUgKGl0ZXJhdG9yLS0pIHtcblx0XHRcdFx0XHRyZWNpcHJvY2FsSXRlbXNXaWR0aCArPSB0aGlzLl9pdGVtc1tpdGVyYXRvcl0ud2lkdGgoKSArIHRoaXMuc2V0dGluZ3MubWFyZ2luO1xuXHRcdFx0XHRcdGlmIChyZWNpcHJvY2FsSXRlbXNXaWR0aCA+IGVsZW1lbnRXaWR0aCkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtYXhpbXVtID0gaXRlcmF0b3IgKyAxO1xuXHRcdH0gZWxzZSBpZiAoc2V0dGluZ3MuY2VudGVyKSB7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIHNldHRpbmdzLml0ZW1zO1xuXHRcdH1cblxuXHRcdGlmIChyZWxhdGl2ZSkge1xuXHRcdFx0bWF4aW11bSAtPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5tYXgobWF4aW11bSwgMCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIG1pbmltdW0gcG9zaXRpb24gZm9yIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0byByZXR1cm4gYW4gYWJzb2x1dGUgcG9zaXRpb24gb3IgYSByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdE93bC5wcm90b3R5cGUubWluaW11bSA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG5cdFx0cmV0dXJuIHJlbGF0aXZlID8gMCA6IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIGFuIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHJldHVybiB7alF1ZXJ5fEFycmF5LjxqUXVlcnk+fSAtIFRoZSBpdGVtIGF0IHRoZSBnaXZlbiBwb3NpdGlvbiBvciBhbGwgaXRlbXMgaWYgbm8gcG9zaXRpb24gd2FzIGdpdmVuLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pdGVtcyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLl9pdGVtcy5zbGljZSgpO1xuXHRcdH1cblxuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXHRcdHJldHVybiB0aGlzLl9pdGVtc1twb3NpdGlvbl07XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgYW4gaXRlbSBhdCB0aGUgc3BlY2lmaWVkIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuXHQgKiBAcmV0dXJuIHtqUXVlcnl8QXJyYXkuPGpRdWVyeT59IC0gVGhlIGl0ZW0gYXQgdGhlIGdpdmVuIHBvc2l0aW9uIG9yIGFsbCBpdGVtcyBpZiBubyBwb3NpdGlvbiB3YXMgZ2l2ZW4uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm1lcmdlcnMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fbWVyZ2Vycy5zbGljZSgpO1xuXHRcdH1cblxuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXHRcdHJldHVybiB0aGlzLl9tZXJnZXJzW3Bvc2l0aW9uXTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgYWJzb2x1dGUgcG9zaXRpb25zIG9mIGNsb25lcyBmb3IgYW4gaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHJldHVybnMge0FycmF5LjxOdW1iZXI+fSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbnMgb2YgY2xvbmVzIGZvciB0aGUgaXRlbSBvciBhbGwgaWYgbm8gcG9zaXRpb24gd2FzIGdpdmVuLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5jbG9uZXMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHZhciBvZGQgPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMixcblx0XHRcdGV2ZW4gPSBvZGQgKyB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRtYXAgPSBmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gaW5kZXggJSAyID09PSAwID8gZXZlbiArIGluZGV4IC8gMiA6IG9kZCAtIChpbmRleCArIDEpIC8gMiB9O1xuXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLl9jbG9uZXMsIGZ1bmN0aW9uKHYsIGkpIHsgcmV0dXJuIG1hcChpKSB9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJC5tYXAodGhpcy5fY2xvbmVzLCBmdW5jdGlvbih2LCBpKSB7IHJldHVybiB2ID09PSBwb3NpdGlvbiA/IG1hcChpKSA6IG51bGwgfSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGN1cnJlbnQgYW5pbWF0aW9uIHNwZWVkLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIGFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMgb3Igbm90aGluZyB0byBsZWF2ZSBpdCB1bmNoYW5nZWQuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIGN1cnJlbnQgYW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuc3BlZWQgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdGlmIChzcGVlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLl9zcGVlZCA9IHNwZWVkO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLl9zcGVlZDtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgY29vcmRpbmF0ZSBvZiBhbiBpdGVtLlxuXHQgKiBAdG9kbyBUaGUgbmFtZSBvZiB0aGlzIG1ldGhvZCBpcyBtaXNzbGVhbmRpbmcuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHdpdGhpbiBgbWluaW11bSgpYCBhbmQgYG1heGltdW0oKWAuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ8QXJyYXkuPE51bWJlcj59IC0gVGhlIGNvb3JkaW5hdGUgb2YgdGhlIGl0ZW0gaW4gcGl4ZWwgb3IgYWxsIGNvb3JkaW5hdGVzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5jb29yZGluYXRlcyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0dmFyIG11bHRpcGxpZXIgPSAxLFxuXHRcdFx0bmV3UG9zaXRpb24gPSBwb3NpdGlvbiAtIDEsXG5cdFx0XHRjb29yZGluYXRlO1xuXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLl9jb29yZGluYXRlcywgJC5wcm94eShmdW5jdGlvbihjb29yZGluYXRlLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb29yZGluYXRlcyhpbmRleCk7XG5cdFx0XHR9LCB0aGlzKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuY2VudGVyKSB7XG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5ydGwpIHtcblx0XHRcdFx0bXVsdGlwbGllciA9IC0xO1xuXHRcdFx0XHRuZXdQb3NpdGlvbiA9IHBvc2l0aW9uICsgMTtcblx0XHRcdH1cblxuXHRcdFx0Y29vcmRpbmF0ZSA9IHRoaXMuX2Nvb3JkaW5hdGVzW3Bvc2l0aW9uXTtcblx0XHRcdGNvb3JkaW5hdGUgKz0gKHRoaXMud2lkdGgoKSAtIGNvb3JkaW5hdGUgKyAodGhpcy5fY29vcmRpbmF0ZXNbbmV3UG9zaXRpb25dIHx8IDApKSAvIDIgKiBtdWx0aXBsaWVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb29yZGluYXRlID0gdGhpcy5fY29vcmRpbmF0ZXNbbmV3UG9zaXRpb25dIHx8IDA7XG5cdFx0fVxuXG5cdFx0Y29vcmRpbmF0ZSA9IE1hdGguY2VpbChjb29yZGluYXRlKTtcblxuXHRcdHJldHVybiBjb29yZGluYXRlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGVzIHRoZSBzcGVlZCBmb3IgYSB0cmFuc2xhdGlvbi5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge051bWJlcn0gZnJvbSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgc3RhcnQgaXRlbS5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IHRvIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSB0YXJnZXQgaXRlbS5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtmYWN0b3I9dW5kZWZpbmVkXSAtIFRoZSB0aW1lIGZhY3RvciBpbiBtaWxsaXNlY29uZHMuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNsYXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oZnJvbSwgdG8sIGZhY3Rvcikge1xuXHRcdGlmIChmYWN0b3IgPT09IDApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmFicyh0byAtIGZyb20pLCAxKSwgNikgKiBNYXRoLmFicygoZmFjdG9yIHx8IHRoaXMuc2V0dGluZ3Muc21hcnRTcGVlZCkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIHNwZWNpZmllZCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBzcGVlZCkge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50KCksXG5cdFx0XHRyZXZlcnQgPSBudWxsLFxuXHRcdFx0ZGlzdGFuY2UgPSBwb3NpdGlvbiAtIHRoaXMucmVsYXRpdmUoY3VycmVudCksXG5cdFx0XHRkaXJlY3Rpb24gPSAoZGlzdGFuY2UgPiAwKSAtIChkaXN0YW5jZSA8IDApLFxuXHRcdFx0aXRlbXMgPSB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRtaW5pbXVtID0gdGhpcy5taW5pbXVtKCksXG5cdFx0XHRtYXhpbXVtID0gdGhpcy5tYXhpbXVtKCk7XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5sb29wKSB7XG5cdFx0XHRpZiAoIXRoaXMuc2V0dGluZ3MucmV3aW5kICYmIE1hdGguYWJzKGRpc3RhbmNlKSA+IGl0ZW1zIC8gMikge1xuXHRcdFx0XHRkaXN0YW5jZSArPSBkaXJlY3Rpb24gKiAtMSAqIGl0ZW1zO1xuXHRcdFx0fVxuXG5cdFx0XHRwb3NpdGlvbiA9IGN1cnJlbnQgKyBkaXN0YW5jZTtcblx0XHRcdHJldmVydCA9ICgocG9zaXRpb24gLSBtaW5pbXVtKSAlIGl0ZW1zICsgaXRlbXMpICUgaXRlbXMgKyBtaW5pbXVtO1xuXG5cdFx0XHRpZiAocmV2ZXJ0ICE9PSBwb3NpdGlvbiAmJiByZXZlcnQgLSBkaXN0YW5jZSA8PSBtYXhpbXVtICYmIHJldmVydCAtIGRpc3RhbmNlID4gMCkge1xuXHRcdFx0XHRjdXJyZW50ID0gcmV2ZXJ0IC0gZGlzdGFuY2U7XG5cdFx0XHRcdHBvc2l0aW9uID0gcmV2ZXJ0O1xuXHRcdFx0XHR0aGlzLnJlc2V0KGN1cnJlbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5yZXdpbmQpIHtcblx0XHRcdG1heGltdW0gKz0gMTtcblx0XHRcdHBvc2l0aW9uID0gKHBvc2l0aW9uICUgbWF4aW11bSArIG1heGltdW0pICUgbWF4aW11bTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9zaXRpb24gPSBNYXRoLm1heChtaW5pbXVtLCBNYXRoLm1pbihtYXhpbXVtLCBwb3NpdGlvbikpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3BlZWQodGhpcy5kdXJhdGlvbihjdXJyZW50LCBwb3NpdGlvbiwgc3BlZWQpKTtcblx0XHR0aGlzLmN1cnJlbnQocG9zaXRpb24pO1xuXG5cdFx0aWYgKHRoaXMuaXNWaXNpYmxlKCkpIHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIG5leHQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdHNwZWVkID0gc3BlZWQgfHwgZmFsc2U7XG5cdFx0dGhpcy50byh0aGlzLnJlbGF0aXZlKHRoaXMuY3VycmVudCgpKSArIDEsIHNwZWVkKTtcblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBwcmV2aW91cyBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKHNwZWVkKSB7XG5cdFx0c3BlZWQgPSBzcGVlZCB8fCBmYWxzZTtcblx0XHR0aGlzLnRvKHRoaXMucmVsYXRpdmUodGhpcy5jdXJyZW50KCkpIC0gMSwgc3BlZWQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIHRoZSBlbmQgb2YgYW4gYW5pbWF0aW9uLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuXHRcdC8vIGlmIGNzczIgYW5pbWF0aW9uIHRoZW4gZXZlbnQgb2JqZWN0IGlzIHVuZGVmaW5lZFxuXHRcdGlmIChldmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0Ly8gQ2F0Y2ggb25seSBvd2wtc3RhZ2UgdHJhbnNpdGlvbkVuZCBldmVudFxuXHRcdFx0aWYgKChldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC5vcmlnaW5hbFRhcmdldCkgIT09IHRoaXMuJHN0YWdlLmdldCgwKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5sZWF2ZSgnYW5pbWF0aW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCd0cmFuc2xhdGVkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdmlld3BvcnQgd2lkdGguXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybiB7TnVtYmVyfSAtIFRoZSB3aWR0aCBpbiBwaXhlbC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUudmlld3BvcnQgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgd2lkdGg7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQmFzZUVsZW1lbnQgIT09IHdpbmRvdykge1xuXHRcdFx0d2lkdGggPSAkKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQmFzZUVsZW1lbnQpLndpZHRoKCk7XG5cdFx0fSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCkge1xuXHRcdFx0d2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIHtcblx0XHRcdHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0NhbiBub3QgZGV0ZWN0IHZpZXdwb3J0IHdpZHRoLicpO1xuXHRcdH1cblx0XHRyZXR1cm4gd2lkdGg7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlcGxhY2VzIHRoZSBjdXJyZW50IGNvbnRlbnQuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxqUXVlcnl8U3RyaW5nfSBjb250ZW50IC0gVGhlIG5ldyBjb250ZW50LlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oY29udGVudCkge1xuXHRcdHRoaXMuJHN0YWdlLmVtcHR5KCk7XG5cdFx0dGhpcy5faXRlbXMgPSBbXTtcblxuXHRcdGlmIChjb250ZW50KSB7XG5cdFx0XHRjb250ZW50ID0gKGNvbnRlbnQgaW5zdGFuY2VvZiBqUXVlcnkpID8gY29udGVudCA6ICQoY29udGVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yKSB7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC5maW5kKCcuJyArIHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRjb250ZW50LmZpbHRlcihmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLm5vZGVUeXBlID09PSAxO1xuXHRcdH0pLmVhY2goJC5wcm94eShmdW5jdGlvbihpbmRleCwgaXRlbSkge1xuXHRcdFx0aXRlbSA9IHRoaXMucHJlcGFyZShpdGVtKTtcblx0XHRcdHRoaXMuJHN0YWdlLmFwcGVuZChpdGVtKTtcblx0XHRcdHRoaXMuX2l0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHR0aGlzLl9tZXJnZXJzLnB1c2goaXRlbS5maW5kKCdbZGF0YS1tZXJnZV0nKS5hZGRCYWNrKCdbZGF0YS1tZXJnZV0nKS5hdHRyKCdkYXRhLW1lcmdlJykgKiAxIHx8IDEpO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdHRoaXMucmVzZXQodGhpcy5pc051bWVyaWModGhpcy5zZXR0aW5ncy5zdGFydFBvc2l0aW9uKSA/IHRoaXMuc2V0dGluZ3Muc3RhcnRQb3NpdGlvbiA6IDApO1xuXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdpdGVtcycpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGRzIGFuIGl0ZW0uXG5cdCAqIEB0b2RvIFVzZSBgaXRlbWAgaW5zdGVhZCBvZiBgY29udGVudGAgZm9yIHRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxqUXVlcnl8U3RyaW5nfSBjb250ZW50IC0gVGhlIGl0ZW0gY29udGVudCB0byBhZGQuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIGF0IHdoaWNoIHRvIGluc2VydCB0aGUgaXRlbSBvdGhlcndpc2UgdGhlIGl0ZW0gd2lsbCBiZSBhZGRlZCB0byB0aGUgZW5kLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihjb250ZW50LCBwb3NpdGlvbikge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5yZWxhdGl2ZSh0aGlzLl9jdXJyZW50KTtcblxuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuX2l0ZW1zLmxlbmd0aCA6IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblx0XHRjb250ZW50ID0gY29udGVudCBpbnN0YW5jZW9mIGpRdWVyeSA/IGNvbnRlbnQgOiAkKGNvbnRlbnQpO1xuXG5cdFx0dGhpcy50cmlnZ2VyKCdhZGQnLCB7IGNvbnRlbnQ6IGNvbnRlbnQsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblxuXHRcdGNvbnRlbnQgPSB0aGlzLnByZXBhcmUoY29udGVudCk7XG5cblx0XHRpZiAodGhpcy5faXRlbXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uID09PSB0aGlzLl9pdGVtcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLiRzdGFnZS5hcHBlbmQoY29udGVudCk7XG5cdFx0XHR0aGlzLl9pdGVtcy5sZW5ndGggIT09IDAgJiYgdGhpcy5faXRlbXNbcG9zaXRpb24gLSAxXS5hZnRlcihjb250ZW50KTtcblx0XHRcdHRoaXMuX2l0ZW1zLnB1c2goY29udGVudCk7XG5cdFx0XHR0aGlzLl9tZXJnZXJzLnB1c2goY29udGVudC5maW5kKCdbZGF0YS1tZXJnZV0nKS5hZGRCYWNrKCdbZGF0YS1tZXJnZV0nKS5hdHRyKCdkYXRhLW1lcmdlJykgKiAxIHx8IDEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9pdGVtc1twb3NpdGlvbl0uYmVmb3JlKGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5faXRlbXMuc3BsaWNlKHBvc2l0aW9uLCAwLCBjb250ZW50KTtcblx0XHRcdHRoaXMuX21lcmdlcnMuc3BsaWNlKHBvc2l0aW9uLCAwLCBjb250ZW50LmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFkZEJhY2soJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5faXRlbXNbY3VycmVudF0gJiYgdGhpcy5yZXNldCh0aGlzLl9pdGVtc1tjdXJyZW50XS5pbmRleCgpKTtcblxuXHRcdHRoaXMuaW52YWxpZGF0ZSgnaXRlbXMnKTtcblxuXHRcdHRoaXMudHJpZ2dlcignYWRkZWQnLCB7IGNvbnRlbnQ6IGNvbnRlbnQsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblx0fTtcblxuXHQvKipcblx0ICogUmVtb3ZlcyBhbiBpdGVtIGJ5IGl0cyBwb3NpdGlvbi5cblx0ICogQHRvZG8gVXNlIGBpdGVtYCBpbnN0ZWFkIG9mIGBjb250ZW50YCBmb3IgdGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gdG8gcmVtb3ZlLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3JlbW92ZScsIHsgY29udGVudDogdGhpcy5faXRlbXNbcG9zaXRpb25dLCBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG5cblx0XHR0aGlzLl9pdGVtc1twb3NpdGlvbl0ucmVtb3ZlKCk7XG5cdFx0dGhpcy5faXRlbXMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcblx0XHR0aGlzLl9tZXJnZXJzLnNwbGljZShwb3NpdGlvbiwgMSk7XG5cblx0XHR0aGlzLmludmFsaWRhdGUoJ2l0ZW1zJyk7XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3JlbW92ZWQnLCB7IGNvbnRlbnQ6IG51bGwsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblx0fTtcblxuXHQvKipcblx0ICogUHJlbG9hZHMgaW1hZ2VzIHdpdGggYXV0byB3aWR0aC5cblx0ICogQHRvZG8gUmVwbGFjZSBieSBhIG1vcmUgZ2VuZXJpYyBhcHByb2FjaFxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnByZWxvYWRBdXRvV2lkdGhJbWFnZXMgPSBmdW5jdGlvbihpbWFnZXMpIHtcblx0XHRpbWFnZXMuZWFjaCgkLnByb3h5KGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcblx0XHRcdHRoaXMuZW50ZXIoJ3ByZS1sb2FkaW5nJyk7XG5cdFx0XHRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHRcdCQobmV3IEltYWdlKCkpLm9uZSgnbG9hZCcsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlbGVtZW50LmF0dHIoJ3NyYycsIGUudGFyZ2V0LnNyYyk7XG5cdFx0XHRcdGVsZW1lbnQuY3NzKCdvcGFjaXR5JywgMSk7XG5cdFx0XHRcdHRoaXMubGVhdmUoJ3ByZS1sb2FkaW5nJyk7XG5cdFx0XHRcdCF0aGlzLmlzKCdwcmUtbG9hZGluZycpICYmICF0aGlzLmlzKCdpbml0aWFsaXppbmcnKSAmJiB0aGlzLnJlZnJlc2goKTtcblx0XHRcdH0sIHRoaXMpKS5hdHRyKCdzcmMnLCBlbGVtZW50LmF0dHIoJ3NyYycpIHx8IGVsZW1lbnQuYXR0cignZGF0YS1zcmMnKSB8fCBlbGVtZW50LmF0dHIoJ2RhdGEtc3JjLXJldGluYScpKTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBjYXJvdXNlbC5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR0aGlzLiRlbGVtZW50Lm9mZignLm93bC5jb3JlJyk7XG5cdFx0dGhpcy4kc3RhZ2Uub2ZmKCcub3dsLmNvcmUnKTtcblx0XHQkKGRvY3VtZW50KS5vZmYoJy5vd2wuY29yZScpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZSAhPT0gZmFsc2UpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG5cdFx0XHR0aGlzLm9mZih3aW5kb3csICdyZXNpemUnLCB0aGlzLl9oYW5kbGVycy5vblRocm90dGxlZFJlc2l6ZSk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSBpbiB0aGlzLl9wbHVnaW5zKSB7XG5cdFx0XHR0aGlzLl9wbHVnaW5zW2ldLmRlc3Ryb3koKTtcblx0XHR9XG5cblx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignLmNsb25lZCcpLnJlbW92ZSgpO1xuXG5cdFx0dGhpcy4kc3RhZ2UudW53cmFwKCk7XG5cdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5jb250ZW50cygpLnVud3JhcCgpO1xuXHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkudW53cmFwKCk7XG5cdFx0dGhpcy4kc3RhZ2UucmVtb3ZlKCk7XG5cdFx0dGhpcy4kZWxlbWVudFxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5yZWZyZXNoQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmdDbGFzcylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGVkQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnJ0bENsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5kcmFnQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmdyYWJDbGFzcylcblx0XHRcdC5hdHRyKCdjbGFzcycsIHRoaXMuJGVsZW1lbnQuYXR0cignY2xhc3MnKS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5vcHRpb25zLnJlc3BvbnNpdmVDbGFzcyArICctXFxcXFMrXFxcXHMnLCAnZycpLCAnJykpXG5cdFx0XHQucmVtb3ZlRGF0YSgnb3dsLmNhcm91c2VsJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIE9wZXJhdG9ycyB0byBjYWxjdWxhdGUgcmlnaHQtdG8tbGVmdCBhbmQgbGVmdC10by1yaWdodC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2FdIC0gVGhlIGxlZnQgc2lkZSBvcGVyYW5kLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW29dIC0gVGhlIG9wZXJhdG9yLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2JdIC0gVGhlIHJpZ2h0IHNpZGUgb3BlcmFuZC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub3AgPSBmdW5jdGlvbihhLCBvLCBiKSB7XG5cdFx0dmFyIHJ0bCA9IHRoaXMuc2V0dGluZ3MucnRsO1xuXHRcdHN3aXRjaCAobykge1xuXHRcdFx0Y2FzZSAnPCc6XG5cdFx0XHRcdHJldHVybiBydGwgPyBhID4gYiA6IGEgPCBiO1xuXHRcdFx0Y2FzZSAnPic6XG5cdFx0XHRcdHJldHVybiBydGwgPyBhIDwgYiA6IGEgPiBiO1xuXHRcdFx0Y2FzZSAnPj0nOlxuXHRcdFx0XHRyZXR1cm4gcnRsID8gYSA8PSBiIDogYSA+PSBiO1xuXHRcdFx0Y2FzZSAnPD0nOlxuXHRcdFx0XHRyZXR1cm4gcnRsID8gYSA+PSBiIDogYSA8PSBiO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBBdHRhY2hlcyB0byBhbiBpbnRlcm5hbCBldmVudC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGV2ZW50IHNvdXJjZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IG5hbWUuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGV2ZW50IGhhbmRsZXIgdG8gYXR0YWNoLlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGNhcHR1cmUgLSBXZXRoZXIgdGhlIGV2ZW50IHNob3VsZCBiZSBoYW5kbGVkIGF0IHRoZSBjYXB0dXJpbmcgcGhhc2Ugb3Igbm90LlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuXHRcdGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuXHRcdH0gZWxzZSBpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xuXHRcdFx0ZWxlbWVudC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIERldGFjaGVzIGZyb20gYW4gaW50ZXJuYWwgZXZlbnQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCBzb3VyY2UuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBhdHRhY2hlZCBldmVudCBoYW5kbGVyIHRvIGRldGFjaC5cblx0ICogQHBhcmFtIHtCb29sZWFufSBjYXB0dXJlIC0gV2V0aGVyIHRoZSBhdHRhY2hlZCBldmVudCBoYW5kbGVyIHdhcyByZWdpc3RlcmVkIGFzIGEgY2FwdHVyaW5nIGxpc3RlbmVyIG9yIG5vdC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZWxlbWVudCwgZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG5cdFx0aWYgKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSk7XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50LmRldGFjaEV2ZW50KSB7XG5cdFx0XHRlbGVtZW50LmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogVHJpZ2dlcnMgYSBwdWJsaWMgZXZlbnQuXG5cdCAqIEB0b2RvIFJlbW92ZSBgc3RhdHVzYCwgYHJlbGF0ZWRUYXJnZXRgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBUaGUgZXZlbnQgbmFtZS5cblx0ICogQHBhcmFtIHsqfSBbZGF0YT1udWxsXSAtIFRoZSBldmVudCBkYXRhLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW25hbWVzcGFjZT1jYXJvdXNlbF0gLSBUaGUgZXZlbnQgbmFtZXNwYWNlLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW3N0YXRlXSAtIFRoZSBzdGF0ZSB3aGljaCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtlbnRlcj1mYWxzZV0gLSBJbmRpY2F0ZXMgaWYgdGhlIGNhbGwgZW50ZXJzIHRoZSBzcGVjaWZpZWQgc3RhdGUgb3Igbm90LlxuXHQgKiBAcmV0dXJucyB7RXZlbnR9IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEsIG5hbWVzcGFjZSwgc3RhdGUsIGVudGVyKSB7XG5cdFx0dmFyIHN0YXR1cyA9IHtcblx0XHRcdGl0ZW06IHsgY291bnQ6IHRoaXMuX2l0ZW1zLmxlbmd0aCwgaW5kZXg6IHRoaXMuY3VycmVudCgpIH1cblx0XHR9LCBoYW5kbGVyID0gJC5jYW1lbENhc2UoXG5cdFx0XHQkLmdyZXAoWyAnb24nLCBuYW1lLCBuYW1lc3BhY2UgXSwgZnVuY3Rpb24odikgeyByZXR1cm4gdiB9KVxuXHRcdFx0XHQuam9pbignLScpLnRvTG93ZXJDYXNlKClcblx0XHQpLCBldmVudCA9ICQuRXZlbnQoXG5cdFx0XHRbIG5hbWUsICdvd2wnLCBuYW1lc3BhY2UgfHwgJ2Nhcm91c2VsJyBdLmpvaW4oJy4nKS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0JC5leHRlbmQoeyByZWxhdGVkVGFyZ2V0OiB0aGlzIH0sIHN0YXR1cywgZGF0YSlcblx0XHQpO1xuXG5cdFx0aWYgKCF0aGlzLl9zdXByZXNzW25hbWVdKSB7XG5cdFx0XHQkLmVhY2godGhpcy5fcGx1Z2lucywgZnVuY3Rpb24obmFtZSwgcGx1Z2luKSB7XG5cdFx0XHRcdGlmIChwbHVnaW4ub25UcmlnZ2VyKSB7XG5cdFx0XHRcdFx0cGx1Z2luLm9uVHJpZ2dlcihldmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnJlZ2lzdGVyKHsgdHlwZTogT3dsLlR5cGUuRXZlbnQsIG5hbWU6IG5hbWUgfSk7XG5cdFx0XHR0aGlzLiRlbGVtZW50LnRyaWdnZXIoZXZlbnQpO1xuXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncyAmJiB0eXBlb2YgdGhpcy5zZXR0aW5nc1toYW5kbGVyXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0aGlzLnNldHRpbmdzW2hhbmRsZXJdLmNhbGwodGhpcywgZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudDtcblx0fTtcblxuXHQvKipcblx0ICogRW50ZXJzIGEgc3RhdGUuXG5cdCAqIEBwYXJhbSBuYW1lIC0gVGhlIHN0YXRlIG5hbWUuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmVudGVyID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdCQuZWFjaChbIG5hbWUgXS5jb25jYXQodGhpcy5fc3RhdGVzLnRhZ3NbbmFtZV0gfHwgW10pLCAkLnByb3h5KGZ1bmN0aW9uKGksIG5hbWUpIHtcblx0XHRcdGlmICh0aGlzLl9zdGF0ZXMuY3VycmVudFtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuX3N0YXRlcy5jdXJyZW50W25hbWVdID0gMDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0rKztcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIExlYXZlcyBhIHN0YXRlLlxuXHQgKiBAcGFyYW0gbmFtZSAtIFRoZSBzdGF0ZSBuYW1lLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5sZWF2ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHQkLmVhY2goWyBuYW1lIF0uY29uY2F0KHRoaXMuX3N0YXRlcy50YWdzW25hbWVdIHx8IFtdKSwgJC5wcm94eShmdW5jdGlvbihpLCBuYW1lKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZXMuY3VycmVudFtuYW1lXS0tO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGFuIGV2ZW50IG9yIHN0YXRlLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgLSBUaGUgZXZlbnQgb3Igc3RhdGUgdG8gcmVnaXN0ZXIuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24ob2JqZWN0KSB7XG5cdFx0aWYgKG9iamVjdC50eXBlID09PSBPd2wuVHlwZS5FdmVudCkge1xuXHRcdFx0aWYgKCEkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdKSB7XG5cdFx0XHRcdCQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0gPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCEkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdLm93bCkge1xuXHRcdFx0XHR2YXIgX2RlZmF1bHQgPSAkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdLl9kZWZhdWx0O1xuXHRcdFx0XHQkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdLl9kZWZhdWx0ID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGlmIChfZGVmYXVsdCAmJiBfZGVmYXVsdC5hcHBseSAmJiAoIWUubmFtZXNwYWNlIHx8IGUubmFtZXNwYWNlLmluZGV4T2YoJ293bCcpID09PSAtMSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfZGVmYXVsdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZS5uYW1lc3BhY2UgJiYgZS5uYW1lc3BhY2UuaW5kZXhPZignb3dsJykgPiAtMTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5vd2wgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAob2JqZWN0LnR5cGUgPT09IE93bC5UeXBlLlN0YXRlKSB7XG5cdFx0XHRpZiAoIXRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSkge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0gPSBvYmplY3QudGFncztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSA9IHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXS5jb25jYXQob2JqZWN0LnRhZ3MpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0gPSAkLmdyZXAodGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdLCAkLnByb3h5KGZ1bmN0aW9uKHRhZywgaSkge1xuXHRcdFx0XHRyZXR1cm4gJC5pbkFycmF5KHRhZywgdGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdKSA9PT0gaTtcblx0XHRcdH0sIHRoaXMpKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFN1cHByZXNzZXMgZXZlbnRzLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7QXJyYXkuPFN0cmluZz59IGV2ZW50cyAtIFRoZSBldmVudHMgdG8gc3VwcHJlc3MuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnN1cHByZXNzID0gZnVuY3Rpb24oZXZlbnRzKSB7XG5cdFx0JC5lYWNoKGV2ZW50cywgJC5wcm94eShmdW5jdGlvbihpbmRleCwgZXZlbnQpIHtcblx0XHRcdHRoaXMuX3N1cHJlc3NbZXZlbnRdID0gdHJ1ZTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlbGVhc2VzIHN1cHByZXNzZWQgZXZlbnRzLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7QXJyYXkuPFN0cmluZz59IGV2ZW50cyAtIFRoZSBldmVudHMgdG8gcmVsZWFzZS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uKGV2ZW50cykge1xuXHRcdCQuZWFjaChldmVudHMsICQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGV2ZW50KSB7XG5cdFx0XHRkZWxldGUgdGhpcy5fc3VwcmVzc1tldmVudF07XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHVuaWZpZWQgcG9pbnRlciBjb29yZGluYXRlcyBmcm9tIGV2ZW50LlxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gLSBUaGUgYG1vdXNlZG93bmAgb3IgYHRvdWNoc3RhcnRgIGV2ZW50LlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIENvbnRhaW5zIGB4YCBhbmQgYHlgIGNvb3JkaW5hdGVzIG9mIGN1cnJlbnQgcG9pbnRlciBwb3NpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucG9pbnRlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHJlc3VsdCA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuXG5cdFx0ZXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcblxuXHRcdGV2ZW50ID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA/XG5cdFx0XHRldmVudC50b3VjaGVzWzBdIDogZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID9cblx0XHRcdFx0ZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldmVudDtcblxuXHRcdGlmIChldmVudC5wYWdlWCkge1xuXHRcdFx0cmVzdWx0LnggPSBldmVudC5wYWdlWDtcblx0XHRcdHJlc3VsdC55ID0gZXZlbnQucGFnZVk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdC54ID0gZXZlbnQuY2xpZW50WDtcblx0XHRcdHJlc3VsdC55ID0gZXZlbnQuY2xpZW50WTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBhIE51bWJlciBvciBzb21ldGhpbmcgdGhhdCBjYW4gYmUgY29lcmNlZCB0byBhIE51bWJlclxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R8QXJyYXl8Qm9vbGVhbnxSZWdFeHB8RnVuY3Rpb258U3ltYm9sfSAtIFRoZSBpbnB1dCB0byBiZSB0ZXN0ZWRcblx0ICogQHJldHVybnMge0Jvb2xlYW59IC0gQW4gaW5kaWNhdGlvbiBpZiB0aGUgaW5wdXQgaXMgYSBOdW1iZXIgb3IgY2FuIGJlIGNvZXJjZWQgdG8gYSBOdW1iZXJcblx0ICovXG5cdE93bC5wcm90b3R5cGUuaXNOdW1lcmljID0gZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0cmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG51bWJlcikpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBkaWZmZXJlbmNlIG9mIHR3byB2ZWN0b3JzLlxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtPYmplY3R9IC0gVGhlIGZpcnN0IHZlY3Rvci5cblx0ICogQHBhcmFtIHtPYmplY3R9IC0gVGhlIHNlY29uZCB2ZWN0b3IuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IC0gVGhlIGRpZmZlcmVuY2UuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmRpZmZlcmVuY2UgPSBmdW5jdGlvbihmaXJzdCwgc2Vjb25kKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHg6IGZpcnN0LnggLSBzZWNvbmQueCxcblx0XHRcdHk6IGZpcnN0LnkgLSBzZWNvbmQueVxuXHRcdH07XG5cdH07XG5cblx0LyoqXG5cdCAqIFRoZSBqUXVlcnkgUGx1Z2luIGZvciB0aGUgT3dsIENhcm91c2VsXG5cdCAqIEB0b2RvIE5hdmlnYXRpb24gcGx1Z2luIGBuZXh0YCBhbmQgYHByZXZgXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdCQuZm4ub3dsQ2Fyb3VzZWwgPSBmdW5jdGlvbihvcHRpb24pIHtcblx0XHR2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0ZGF0YSA9ICR0aGlzLmRhdGEoJ293bC5jYXJvdXNlbCcpO1xuXG5cdFx0XHRpZiAoIWRhdGEpIHtcblx0XHRcdFx0ZGF0YSA9IG5ldyBPd2wodGhpcywgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pO1xuXHRcdFx0XHQkdGhpcy5kYXRhKCdvd2wuY2Fyb3VzZWwnLCBkYXRhKTtcblxuXHRcdFx0XHQkLmVhY2goW1xuXHRcdFx0XHRcdCduZXh0JywgJ3ByZXYnLCAndG8nLCAnZGVzdHJveScsICdyZWZyZXNoJywgJ3JlcGxhY2UnLCAnYWRkJywgJ3JlbW92ZSdcblx0XHRcdFx0XSwgZnVuY3Rpb24oaSwgZXZlbnQpIHtcblx0XHRcdFx0XHRkYXRhLnJlZ2lzdGVyKHsgdHlwZTogT3dsLlR5cGUuRXZlbnQsIG5hbWU6IGV2ZW50IH0pO1xuXHRcdFx0XHRcdGRhdGEuJGVsZW1lbnQub24oZXZlbnQgKyAnLm93bC5jYXJvdXNlbC5jb3JlJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5yZWxhdGVkVGFyZ2V0ICE9PSB0aGlzKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3VwcHJlc3MoWyBldmVudCBdKTtcblx0XHRcdFx0XHRcdFx0ZGF0YVtldmVudF0uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5yZWxlYXNlKFsgZXZlbnQgXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgZGF0YSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycgJiYgb3B0aW9uLmNoYXJBdCgwKSAhPT0gJ18nKSB7XG5cdFx0XHRcdGRhdGFbb3B0aW9uXS5hcHBseShkYXRhLCBhcmdzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHQvKipcblx0ICogVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgalF1ZXJ5IFBsdWdpblxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yID0gT3dsO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogQXV0b1JlZnJlc2ggUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjMuNFxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBhdXRvIHJlZnJlc2ggcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIEF1dG8gUmVmcmVzaCBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEF1dG9SZWZyZXNoID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogUmVmcmVzaCBpbnRlcnZhbC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSB2aXNpYmxlIG9yIG5vdC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5fdmlzaWJsZSA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9SZWZyZXNoKSB7XG5cdFx0XHRcdFx0dGhpcy53YXRjaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEF1dG9SZWZyZXNoLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvUmVmcmVzaC5EZWZhdWx0cyA9IHtcblx0XHRhdXRvUmVmcmVzaDogdHJ1ZSxcblx0XHRhdXRvUmVmcmVzaEludGVydmFsOiA1MDBcblx0fTtcblxuXHQvKipcblx0ICogV2F0Y2hlcyB0aGUgZWxlbWVudC5cblx0ICovXG5cdEF1dG9SZWZyZXNoLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLl9pbnRlcnZhbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX3Zpc2libGUgPSB0aGlzLl9jb3JlLmlzVmlzaWJsZSgpO1xuXHRcdHRoaXMuX2ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCQucHJveHkodGhpcy5yZWZyZXNoLCB0aGlzKSwgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvUmVmcmVzaEludGVydmFsKTtcblx0fTtcblxuXHQvKipcblx0ICogUmVmcmVzaGVzIHRoZSBlbGVtZW50LlxuXHQgKi9cblx0QXV0b1JlZnJlc2gucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5fY29yZS5pc1Zpc2libGUoKSA9PT0gdGhpcy5fdmlzaWJsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX3Zpc2libGUgPSAhdGhpcy5fdmlzaWJsZTtcblxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ293bC1oaWRkZW4nLCAhdGhpcy5fdmlzaWJsZSk7XG5cblx0XHR0aGlzLl92aXNpYmxlICYmICh0aGlzLl9jb3JlLmludmFsaWRhdGUoJ3dpZHRoJykgJiYgdGhpcy5fY29yZS5yZWZyZXNoKCkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKi9cblx0QXV0b1JlZnJlc2gucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5BdXRvUmVmcmVzaCA9IEF1dG9SZWZyZXNoO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogTGF6eSBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMy40XG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgbGF6eSBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgTGF6eSBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIExhenkgPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFscmVhZHkgbG9hZGVkIGl0ZW1zLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7QXJyYXkuPGpRdWVyeT59XG5cdFx0ICovXG5cdFx0dGhpcy5fbG9hZGVkID0gW107XG5cblx0XHQvKipcblx0XHQgKiBFdmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwgY2hhbmdlLm93bC5jYXJvdXNlbCByZXNpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoIWUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLl9jb3JlLnNldHRpbmdzIHx8ICF0aGlzLl9jb3JlLnNldHRpbmdzLmxhenlMb2FkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKChlLnByb3BlcnR5ICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKSB8fCBlLnR5cGUgPT0gJ2luaXRpYWxpemVkJykge1xuXHRcdFx0XHRcdHZhciBzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRcdFx0XHRuID0gKHNldHRpbmdzLmNlbnRlciAmJiBNYXRoLmNlaWwoc2V0dGluZ3MuaXRlbXMgLyAyKSB8fCBzZXR0aW5ncy5pdGVtcyksXG5cdFx0XHRcdFx0XHRpID0gKChzZXR0aW5ncy5jZW50ZXIgJiYgbiAqIC0xKSB8fCAwKSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uID0gKGUucHJvcGVydHkgJiYgZS5wcm9wZXJ0eS52YWx1ZSAhPT0gdW5kZWZpbmVkID8gZS5wcm9wZXJ0eS52YWx1ZSA6IHRoaXMuX2NvcmUuY3VycmVudCgpKSArIGksXG5cdFx0XHRcdFx0XHRjbG9uZXMgPSB0aGlzLl9jb3JlLmNsb25lcygpLmxlbmd0aCxcblx0XHRcdFx0XHRcdGxvYWQgPSAkLnByb3h5KGZ1bmN0aW9uKGksIHYpIHsgdGhpcy5sb2FkKHYpIH0sIHRoaXMpO1xuXHRcdFx0XHRcdC8vVE9ETzogTmVlZCBkb2N1bWVudGF0aW9uIGZvciB0aGlzIG5ldyBvcHRpb25cblx0XHRcdFx0XHRpZiAoc2V0dGluZ3MubGF6eUxvYWRFYWdlciA+IDApIHtcblx0XHRcdFx0XHRcdG4gKz0gc2V0dGluZ3MubGF6eUxvYWRFYWdlcjtcblx0XHRcdFx0XHRcdC8vIElmIHRoZSBjYXJvdXNlbCBpcyBsb29waW5nIGFsc28gcHJlbG9hZCBpbWFnZXMgdGhhdCBhcmUgdG8gdGhlIFwibGVmdFwiXG5cdFx0XHRcdFx0XHRpZiAoc2V0dGluZ3MubG9vcCkge1xuICAgICAgICAgICAgICBwb3NpdGlvbiAtPSBzZXR0aW5ncy5sYXp5TG9hZEVhZ2VyO1xuICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICB9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0d2hpbGUgKGkrKyA8IG4pIHtcblx0XHRcdFx0XHRcdHRoaXMubG9hZChjbG9uZXMgLyAyICsgdGhpcy5fY29yZS5yZWxhdGl2ZShwb3NpdGlvbikpO1xuXHRcdFx0XHRcdFx0Y2xvbmVzICYmICQuZWFjaCh0aGlzLl9jb3JlLmNsb25lcyh0aGlzLl9jb3JlLnJlbGF0aXZlKHBvc2l0aW9uKSksIGxvYWQpO1xuXHRcdFx0XHRcdFx0cG9zaXRpb24rKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCB0aGUgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIExhenkuRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0TGF6eS5EZWZhdWx0cyA9IHtcblx0XHRsYXp5TG9hZDogZmFsc2UsXG5cdFx0bGF6eUxvYWRFYWdlcjogMFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBMb2FkcyBhbGwgcmVzb3VyY2VzIG9mIGFuIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBwb3NpdGlvbi5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRMYXp5LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHR2YXIgJGl0ZW0gPSB0aGlzLl9jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKHBvc2l0aW9uKSxcblx0XHRcdCRlbGVtZW50cyA9ICRpdGVtICYmICRpdGVtLmZpbmQoJy5vd2wtbGF6eScpO1xuXG5cdFx0aWYgKCEkZWxlbWVudHMgfHwgJC5pbkFycmF5KCRpdGVtLmdldCgwKSwgdGhpcy5fbG9hZGVkKSA+IC0xKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0JGVsZW1lbnRzLmVhY2goJC5wcm94eShmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuXHRcdFx0dmFyICRlbGVtZW50ID0gJChlbGVtZW50KSwgaW1hZ2UsXG4gICAgICAgICAgICAgICAgdXJsID0gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSAmJiAkZWxlbWVudC5hdHRyKCdkYXRhLXNyYy1yZXRpbmEnKSkgfHwgJGVsZW1lbnQuYXR0cignZGF0YS1zcmMnKSB8fCAkZWxlbWVudC5hdHRyKCdkYXRhLXNyY3NldCcpO1xuXG5cdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuXG5cdFx0XHRpZiAoJGVsZW1lbnQuaXMoJ2ltZycpKSB7XG5cdFx0XHRcdCRlbGVtZW50Lm9uZSgnbG9hZC5vd2wubGF6eScsICQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdvcGFjaXR5JywgMSk7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdsb2FkZWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuXHRcdFx0XHR9LCB0aGlzKSkuYXR0cignc3JjJywgdXJsKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJGVsZW1lbnQuaXMoJ3NvdXJjZScpKSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQub25lKCdsb2FkLm93bC5sYXp5JywgJC5wcm94eShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29yZS50cmlnZ2VyKCdsb2FkZWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMpKS5hdHRyKCdzcmNzZXQnLCB1cmwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdFx0aW1hZ2Uub25sb2FkID0gJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5jc3Moe1xuXHRcdFx0XHRcdFx0J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKFwiJyArIHVybCArICdcIiknLFxuXHRcdFx0XHRcdFx0J29wYWNpdHknOiAnMSdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWRlZCcsIHsgZWxlbWVudDogJGVsZW1lbnQsIHVybDogdXJsIH0sICdsYXp5Jyk7XG5cdFx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0XHRpbWFnZS5zcmMgPSB1cmw7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0dGhpcy5fbG9hZGVkLnB1c2goJGl0ZW0uZ2V0KDApKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0TGF6eS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLmhhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLmhhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5MYXp5ID0gTGF6eTtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEF1dG9IZWlnaHQgUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjMuNFxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGF1dG8gaGVpZ2h0IHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBBdXRvIEhlaWdodCBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEF1dG9IZWlnaHQgPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHR0aGlzLl9wcmV2aW91c0hlaWdodCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsIHJlZnJlc2hlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodCkge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHQgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAncG9zaXRpb24nKXtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdsb2FkZWQub3dsLmxhenknOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodFxuXHRcdFx0XHRcdCYmIGUuZWxlbWVudC5jbG9zZXN0KCcuJyArIHRoaXMuX2NvcmUuc2V0dGluZ3MuaXRlbUNsYXNzKS5pbmRleCgpID09PSB0aGlzLl9jb3JlLmN1cnJlbnQoKSkge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQXV0b0hlaWdodC5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cdFx0dGhpcy5faW50ZXJ2YWxJZCA9IG51bGw7XG5cdFx0dmFyIHJlZlRoaXMgPSB0aGlzO1xuXG5cdFx0Ly8gVGhlc2UgY2hhbmdlcyBoYXZlIGJlZW4gdGFrZW4gZnJvbSBhIFBSIGJ5IGdhdnJvY2hlbGVnbm91IHByb3Bvc2VkIGluICMxNTc1XG5cdFx0Ly8gYW5kIGhhdmUgYmVlbiBtYWRlIGNvbXBhdGlibGUgd2l0aCB0aGUgbGF0ZXN0IGpRdWVyeSB2ZXJzaW9uXG5cdFx0JCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAocmVmVGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0KSB7XG5cdFx0XHRcdHJlZlRoaXMudXBkYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBBdXRvcmVzaXplIHRoZSBoZWlnaHQgb2YgdGhlIGNhcm91c2VsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcblx0XHQvLyBXaGVuIGNhcm91c2VsIGhhcyBpbWFnZXMsIHRoZSBoZWlnaHQgaXMgZGVwZW5kZW50IG9uIHRoZSB3aWR0aFxuXHRcdC8vIGFuZCBzaG91bGQgYWxzbyBjaGFuZ2Ugb24gcmVzaXplXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcblx0XHRcdGlmIChyZWZUaGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHQpIHtcblx0XHRcdFx0aWYgKHJlZlRoaXMuX2ludGVydmFsSWQgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChyZWZUaGlzLl9pbnRlcnZhbElkKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlZlRoaXMuX2ludGVydmFsSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJlZlRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH0sIDI1MCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvSGVpZ2h0LkRlZmF1bHRzID0ge1xuXHRcdGF1dG9IZWlnaHQ6IGZhbHNlLFxuXHRcdGF1dG9IZWlnaHRDbGFzczogJ293bC1oZWlnaHQnXG5cdH07XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHZpZXcuXG5cdCAqL1xuXHRBdXRvSGVpZ2h0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgc3RhcnQgPSB0aGlzLl9jb3JlLl9jdXJyZW50LFxuXHRcdFx0ZW5kID0gc3RhcnQgKyB0aGlzLl9jb3JlLnNldHRpbmdzLml0ZW1zLFxuXHRcdFx0bGF6eUxvYWRFbmFibGVkID0gdGhpcy5fY29yZS5zZXR0aW5ncy5sYXp5TG9hZCxcblx0XHRcdHZpc2libGUgPSB0aGlzLl9jb3JlLiRzdGFnZS5jaGlsZHJlbigpLnRvQXJyYXkoKS5zbGljZShzdGFydCwgZW5kKSxcblx0XHRcdGhlaWdodHMgPSBbXSxcblx0XHRcdG1heGhlaWdodCA9IDA7XG5cblx0XHQkLmVhY2godmlzaWJsZSwgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcblx0XHRcdGhlaWdodHMucHVzaCgkKGl0ZW0pLmhlaWdodCgpKTtcblx0XHR9KTtcblxuXHRcdG1heGhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xuXG5cdFx0aWYgKG1heGhlaWdodCA8PSAxICYmIGxhenlMb2FkRW5hYmxlZCAmJiB0aGlzLl9wcmV2aW91c0hlaWdodCkge1xuXHRcdFx0bWF4aGVpZ2h0ID0gdGhpcy5fcHJldmlvdXNIZWlnaHQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5fcHJldmlvdXNIZWlnaHQgPSBtYXhoZWlnaHQ7XG5cblx0XHR0aGlzLl9jb3JlLiRzdGFnZS5wYXJlbnQoKVxuXHRcdFx0LmhlaWdodChtYXhoZWlnaHQpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0Q2xhc3MpO1xuXHR9O1xuXG5cdEF1dG9IZWlnaHQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9PSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuQXV0b0hlaWdodCA9IEF1dG9IZWlnaHQ7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBWaWRlbyBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMy40XG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgdmlkZW8gcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIFZpZGVvIFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgVmlkZW8gPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBDYWNoZSBhbGwgdmlkZW8gVVJMcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl92aWRlb3MgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgcGxheWluZyBpdGVtLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuX3BsYXlpbmcgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEB0b2RvIFRoZSBjbG9uZWQgY29udGVudCByZW1vdmFsZSBpcyB0b28gbGF0ZVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnJlZ2lzdGVyKHsgdHlwZTogJ3N0YXRlJywgbmFtZTogJ3BsYXlpbmcnLCB0YWdzOiBbICdpbnRlcmFjdGluZycgXSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncmVzaXplLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy52aWRlbyAmJiB0aGlzLmlzSW5GdWxsU2NyZWVuKCkpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3JlZnJlc2hlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuaXMoJ3Jlc2l6aW5nJykpIHtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLiRzdGFnZS5maW5kKCcuY2xvbmVkIC5vd2wtdmlkZW8tZnJhbWUnKS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PT0gJ3Bvc2l0aW9uJyAmJiB0aGlzLl9wbGF5aW5nKSB7XG5cdFx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3ByZXBhcmVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoIWUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyICRlbGVtZW50ID0gJChlLmNvbnRlbnQpLmZpbmQoJy5vd2wtdmlkZW8nKTtcblxuXHRcdFx0XHRpZiAoJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdFx0XHR0aGlzLmZldGNoKCRlbGVtZW50LCAkKGUuY29udGVudCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIFZpZGVvLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24oJ2NsaWNrLm93bC52aWRlbycsICcub3dsLXZpZGVvLXBsYXktaWNvbicsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0dGhpcy5wbGF5KGUpO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRWaWRlby5EZWZhdWx0cyA9IHtcblx0XHR2aWRlbzogZmFsc2UsXG5cdFx0dmlkZW9IZWlnaHQ6IGZhbHNlLFxuXHRcdHZpZGVvV2lkdGg6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIHZpZGVvIElEIGFuZCB0aGUgdHlwZSAoWW91VHViZS9WaW1lby92emFhciBvbmx5KS5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gdGFyZ2V0IC0gVGhlIHRhcmdldCBjb250YWluaW5nIHRoZSB2aWRlbyBkYXRhLlxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gaXRlbSAtIFRoZSBpdGVtIGNvbnRhaW5pbmcgdGhlIHZpZGVvLlxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24odGFyZ2V0LCBpdGVtKSB7XG5cdFx0XHR2YXIgdHlwZSA9IChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAodGFyZ2V0LmF0dHIoJ2RhdGEtdmltZW8taWQnKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICd2aW1lbyc7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0YXJnZXQuYXR0cignZGF0YS12emFhci1pZCcpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3Z6YWFyJ1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3lvdXR1YmUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkoKSxcblx0XHRcdFx0aWQgPSB0YXJnZXQuYXR0cignZGF0YS12aW1lby1pZCcpIHx8IHRhcmdldC5hdHRyKCdkYXRhLXlvdXR1YmUtaWQnKSB8fCB0YXJnZXQuYXR0cignZGF0YS12emFhci1pZCcpLFxuXHRcdFx0XHR3aWR0aCA9IHRhcmdldC5hdHRyKCdkYXRhLXdpZHRoJykgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy52aWRlb1dpZHRoLFxuXHRcdFx0XHRoZWlnaHQgPSB0YXJnZXQuYXR0cignZGF0YS1oZWlnaHQnKSB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLnZpZGVvSGVpZ2h0LFxuXHRcdFx0XHR1cmwgPSB0YXJnZXQuYXR0cignaHJlZicpO1xuXG5cdFx0aWYgKHVybCkge1xuXG5cdFx0XHQvKlxuXHRcdFx0XHRcdFBhcnNlcyB0aGUgaWQncyBvdXQgb2YgdGhlIGZvbGxvd2luZyB1cmxzIChhbmQgcHJvYmFibHkgbW9yZSk6XG5cdFx0XHRcdFx0aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj06aWRcblx0XHRcdFx0XHRodHRwczovL3lvdXR1LmJlLzppZFxuXHRcdFx0XHRcdGh0dHBzOi8vdmltZW8uY29tLzppZFxuXHRcdFx0XHRcdGh0dHBzOi8vdmltZW8uY29tL2NoYW5uZWxzLzpjaGFubmVsLzppZFxuXHRcdFx0XHRcdGh0dHBzOi8vdmltZW8uY29tL2dyb3Vwcy86Z3JvdXAvdmlkZW9zLzppZFxuXHRcdFx0XHRcdGh0dHBzOi8vYXBwLnZ6YWFyLmNvbS92aWRlb3MvOmlkXG5cblx0XHRcdFx0XHRWaXN1YWwgZXhhbXBsZTogaHR0cHM6Ly9yZWdleHBlci5jb20vIyhodHRwJTNBJTdDaHR0cHMlM0ElN0MpJTVDJTJGJTVDJTJGKHBsYXllci4lN0N3d3cuJTdDYXBwLiklM0YodmltZW8lNUMuY29tJTdDeW91dHUoYmUlNUMuY29tJTdDJTVDLmJlJTdDYmUlNUMuZ29vZ2xlYXBpcyU1Qy5jb20pJTdDdnphYXIlNUMuY29tKSU1QyUyRih2aWRlbyU1QyUyRiU3Q3ZpZGVvcyU1QyUyRiU3Q2VtYmVkJTVDJTJGJTdDY2hhbm5lbHMlNUMlMkYuJTJCJTVDJTJGJTdDZ3JvdXBzJTVDJTJGLiUyQiU1QyUyRiU3Q3dhdGNoJTVDJTNGdiUzRCU3Q3YlNUMlMkYpJTNGKCU1QkEtWmEtejAtOS5fJTI1LSU1RCopKCU1QyUyNiU1Q1MlMkIpJTNGXG5cdFx0XHQqL1xuXG5cdFx0XHRpZCA9IHVybC5tYXRjaCgvKGh0dHA6fGh0dHBzOnwpXFwvXFwvKHBsYXllci58d3d3LnxhcHAuKT8odmltZW9cXC5jb218eW91dHUoYmVcXC5jb218XFwuYmV8YmVcXC5nb29nbGVhcGlzXFwuY29tfGJlXFwtbm9jb29raWVcXC5jb20pfHZ6YWFyXFwuY29tKVxcLyh2aWRlb1xcL3x2aWRlb3NcXC98ZW1iZWRcXC98Y2hhbm5lbHNcXC8uK1xcL3xncm91cHNcXC8uK1xcL3x3YXRjaFxcP3Y9fHZcXC8pPyhbQS1aYS16MC05Ll8lLV0qKShcXCZcXFMrKT8vKTtcblxuXHRcdFx0aWYgKGlkWzNdLmluZGV4T2YoJ3lvdXR1JykgPiAtMSkge1xuXHRcdFx0XHR0eXBlID0gJ3lvdXR1YmUnO1xuXHRcdFx0fSBlbHNlIGlmIChpZFszXS5pbmRleE9mKCd2aW1lbycpID4gLTEpIHtcblx0XHRcdFx0dHlwZSA9ICd2aW1lbyc7XG5cdFx0XHR9IGVsc2UgaWYgKGlkWzNdLmluZGV4T2YoJ3Z6YWFyJykgPiAtMSkge1xuXHRcdFx0XHR0eXBlID0gJ3Z6YWFyJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVmlkZW8gVVJMIG5vdCBzdXBwb3J0ZWQuJyk7XG5cdFx0XHR9XG5cdFx0XHRpZCA9IGlkWzZdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdmlkZW8gVVJMLicpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3ZpZGVvc1t1cmxdID0ge1xuXHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdGlkOiBpZCxcblx0XHRcdHdpZHRoOiB3aWR0aCxcblx0XHRcdGhlaWdodDogaGVpZ2h0XG5cdFx0fTtcblxuXHRcdGl0ZW0uYXR0cignZGF0YS12aWRlbycsIHVybCk7XG5cblx0XHR0aGlzLnRodW1ibmFpbCh0YXJnZXQsIHRoaXMuX3ZpZGVvc1t1cmxdKTtcblx0fTtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB2aWRlbyB0aHVtYm5haWwuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtqUXVlcnl9IHRhcmdldCAtIFRoZSB0YXJnZXQgY29udGFpbmluZyB0aGUgdmlkZW8gZGF0YS5cblx0ICogQHBhcmFtIHtPYmplY3R9IGluZm8gLSBUaGUgdmlkZW8gaW5mbyBvYmplY3QuXG5cdCAqIEBzZWUgYGZldGNoYFxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLnRodW1ibmFpbCA9IGZ1bmN0aW9uKHRhcmdldCwgdmlkZW8pIHtcblx0XHR2YXIgdG5MaW5rLFxuXHRcdFx0aWNvbixcblx0XHRcdHBhdGgsXG5cdFx0XHRkaW1lbnNpb25zID0gdmlkZW8ud2lkdGggJiYgdmlkZW8uaGVpZ2h0ID8gJ3dpZHRoOicgKyB2aWRlby53aWR0aCArICdweDtoZWlnaHQ6JyArIHZpZGVvLmhlaWdodCArICdweDsnIDogJycsXG5cdFx0XHRjdXN0b21UbiA9IHRhcmdldC5maW5kKCdpbWcnKSxcblx0XHRcdHNyY1R5cGUgPSAnc3JjJyxcblx0XHRcdGxhenlDbGFzcyA9ICcnLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzLFxuXHRcdFx0Y3JlYXRlID0gZnVuY3Rpb24ocGF0aCkge1xuXHRcdFx0XHRpY29uID0gJzxkaXYgY2xhc3M9XCJvd2wtdmlkZW8tcGxheS1pY29uXCI+PC9kaXY+JztcblxuXHRcdFx0XHRpZiAoc2V0dGluZ3MubGF6eUxvYWQpIHtcblx0XHRcdFx0XHR0bkxpbmsgPSAkKCc8ZGl2Lz4nLHtcblx0XHRcdFx0XHRcdFwiY2xhc3NcIjogJ293bC12aWRlby10biAnICsgbGF6eUNsYXNzLFxuXHRcdFx0XHRcdFx0XCJzcmNUeXBlXCI6IHBhdGhcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0bkxpbmsgPSAkKCAnPGRpdi8+Jywge1xuXHRcdFx0XHRcdFx0XCJjbGFzc1wiOiBcIm93bC12aWRlby10blwiLFxuXHRcdFx0XHRcdFx0XCJzdHlsZVwiOiAnb3BhY2l0eToxO2JhY2tncm91bmQtaW1hZ2U6dXJsKCcgKyBwYXRoICsgJyknXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFyZ2V0LmFmdGVyKHRuTGluayk7XG5cdFx0XHRcdHRhcmdldC5hZnRlcihpY29uKTtcblx0XHRcdH07XG5cblx0XHQvLyB3cmFwIHZpZGVvIGNvbnRlbnQgaW50byBvd2wtdmlkZW8td3JhcHBlciBkaXZcblx0XHR0YXJnZXQud3JhcCggJCggJzxkaXYvPicsIHtcblx0XHRcdFwiY2xhc3NcIjogXCJvd2wtdmlkZW8td3JhcHBlclwiLFxuXHRcdFx0XCJzdHlsZVwiOiBkaW1lbnNpb25zXG5cdFx0fSkpO1xuXG5cdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MubGF6eUxvYWQpIHtcblx0XHRcdHNyY1R5cGUgPSAnZGF0YS1zcmMnO1xuXHRcdFx0bGF6eUNsYXNzID0gJ293bC1sYXp5Jztcblx0XHR9XG5cblx0XHQvLyBjdXN0b20gdGh1bWJuYWlsXG5cdFx0aWYgKGN1c3RvbVRuLmxlbmd0aCkge1xuXHRcdFx0Y3JlYXRlKGN1c3RvbVRuLmF0dHIoc3JjVHlwZSkpO1xuXHRcdFx0Y3VzdG9tVG4ucmVtb3ZlKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHZpZGVvLnR5cGUgPT09ICd5b3V0dWJlJykge1xuXHRcdFx0cGF0aCA9IFwiLy9pbWcueW91dHViZS5jb20vdmkvXCIgKyB2aWRlby5pZCArIFwiL2hxZGVmYXVsdC5qcGdcIjtcblx0XHRcdGNyZWF0ZShwYXRoKTtcblx0XHR9IGVsc2UgaWYgKHZpZGVvLnR5cGUgPT09ICd2aW1lbycpIHtcblx0XHRcdCQuYWpheCh7XG5cdFx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0XHR1cmw6ICcvL3ZpbWVvLmNvbS9hcGkvdjIvdmlkZW8vJyArIHZpZGVvLmlkICsgJy5qc29uJyxcblx0XHRcdFx0anNvbnA6ICdjYWxsYmFjaycsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbnAnLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdFx0cGF0aCA9IGRhdGFbMF0udGh1bWJuYWlsX2xhcmdlO1xuXHRcdFx0XHRcdGNyZWF0ZShwYXRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndnphYXInKSB7XG5cdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdFx0dXJsOiAnLy92emFhci5jb20vYXBpL3ZpZGVvcy8nICsgdmlkZW8uaWQgKyAnLmpzb24nLFxuXHRcdFx0XHRqc29ucDogJ2NhbGxiYWNrJyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29ucCcsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0XHRwYXRoID0gZGF0YS5mcmFtZWdyYWJfdXJsO1xuXHRcdFx0XHRcdGNyZWF0ZShwYXRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdG9wcyB0aGUgY3VycmVudCB2aWRlby5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ3N0b3AnLCBudWxsLCAndmlkZW8nKTtcblx0XHR0aGlzLl9wbGF5aW5nLmZpbmQoJy5vd2wtdmlkZW8tZnJhbWUnKS5yZW1vdmUoKTtcblx0XHR0aGlzLl9wbGF5aW5nLnJlbW92ZUNsYXNzKCdvd2wtdmlkZW8tcGxheWluZycpO1xuXHRcdHRoaXMuX3BsYXlpbmcgPSBudWxsO1xuXHRcdHRoaXMuX2NvcmUubGVhdmUoJ3BsYXlpbmcnKTtcblx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ3N0b3BwZWQnLCBudWxsLCAndmlkZW8nKTtcblx0fTtcblxuXHQvKipcblx0ICogU3RhcnRzIHRoZSBjdXJyZW50IHZpZGVvLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdFZpZGVvLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLFxuXHRcdFx0aXRlbSA9IHRhcmdldC5jbG9zZXN0KCcuJyArIHRoaXMuX2NvcmUuc2V0dGluZ3MuaXRlbUNsYXNzKSxcblx0XHRcdHZpZGVvID0gdGhpcy5fdmlkZW9zW2l0ZW0uYXR0cignZGF0YS12aWRlbycpXSxcblx0XHRcdHdpZHRoID0gdmlkZW8ud2lkdGggfHwgJzEwMCUnLFxuXHRcdFx0aGVpZ2h0ID0gdmlkZW8uaGVpZ2h0IHx8IHRoaXMuX2NvcmUuJHN0YWdlLmhlaWdodCgpLFxuXHRcdFx0aHRtbCxcblx0XHRcdGlmcmFtZTtcblxuXHRcdGlmICh0aGlzLl9wbGF5aW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fY29yZS5lbnRlcigncGxheWluZycpO1xuXHRcdHRoaXMuX2NvcmUudHJpZ2dlcigncGxheScsIG51bGwsICd2aWRlbycpO1xuXG5cdFx0aXRlbSA9IHRoaXMuX2NvcmUuaXRlbXModGhpcy5fY29yZS5yZWxhdGl2ZShpdGVtLmluZGV4KCkpKTtcblxuXHRcdHRoaXMuX2NvcmUucmVzZXQoaXRlbS5pbmRleCgpKTtcblxuXHRcdGh0bWwgPSAkKCAnPGlmcmFtZSBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIHdlYmtpdEFsbG93RnVsbFNjcmVlbiA+PC9pZnJhbWU+JyApO1xuXHRcdGh0bWwuYXR0ciggJ2hlaWdodCcsIGhlaWdodCApO1xuXHRcdGh0bWwuYXR0ciggJ3dpZHRoJywgd2lkdGggKTtcblx0XHRpZiAodmlkZW8udHlwZSA9PT0gJ3lvdXR1YmUnKSB7XG5cdFx0XHRodG1sLmF0dHIoICdzcmMnLCAnLy93d3cueW91dHViZS5jb20vZW1iZWQvJyArIHZpZGVvLmlkICsgJz9hdXRvcGxheT0xJnJlbD0wJnY9JyArIHZpZGVvLmlkICk7XG5cdFx0fSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndmltZW8nKSB7XG5cdFx0XHRodG1sLmF0dHIoICdzcmMnLCAnLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLycgKyB2aWRlby5pZCArICc/YXV0b3BsYXk9MScgKTtcblx0XHR9IGVsc2UgaWYgKHZpZGVvLnR5cGUgPT09ICd2emFhcicpIHtcblx0XHRcdGh0bWwuYXR0ciggJ3NyYycsICcvL3ZpZXcudnphYXIuY29tLycgKyB2aWRlby5pZCArICcvcGxheWVyP2F1dG9wbGF5PXRydWUnICk7XG5cdFx0fVxuXG5cdFx0aWZyYW1lID0gJChodG1sKS53cmFwKCAnPGRpdiBjbGFzcz1cIm93bC12aWRlby1mcmFtZVwiIC8+JyApLmluc2VydEFmdGVyKGl0ZW0uZmluZCgnLm93bC12aWRlbycpKTtcblxuXHRcdHRoaXMuX3BsYXlpbmcgPSBpdGVtLmFkZENsYXNzKCdvd2wtdmlkZW8tcGxheWluZycpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciBhbiB2aWRlbyBpcyBjdXJyZW50bHkgaW4gZnVsbCBzY3JlZW4gbW9kZSBvciBub3QuXG5cdCAqIEB0b2RvIEJhZCBzdHlsZSBiZWNhdXNlIGxvb2tzIGxpa2UgYSByZWFkb25seSBtZXRob2QgYnV0IGNoYW5nZXMgbWVtYmVycy5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICovXG5cdFZpZGVvLnByb3RvdHlwZS5pc0luRnVsbFNjcmVlbiA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgfHwgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQgfHxcblx0XHRcdFx0ZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ7XG5cblx0XHRyZXR1cm4gZWxlbWVudCAmJiAkKGVsZW1lbnQpLnBhcmVudCgpLmhhc0NsYXNzKCdvd2wtdmlkZW8tZnJhbWUnKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICovXG5cdFZpZGVvLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoJ2NsaWNrLm93bC52aWRlbycpO1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuVmlkZW8gPSBWaWRlbztcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEFuaW1hdGUgUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjMuNFxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGFuaW1hdGUgcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIE5hdmlnYXRpb24gUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBzY29wZSAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBBbmltYXRlID0gZnVuY3Rpb24oc2NvcGUpIHtcblx0XHR0aGlzLmNvcmUgPSBzY29wZTtcblx0XHR0aGlzLmNvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBbmltYXRlLkRlZmF1bHRzLCB0aGlzLmNvcmUub3B0aW9ucyk7XG5cdFx0dGhpcy5zd2FwcGluZyA9IHRydWU7XG5cdFx0dGhpcy5wcmV2aW91cyA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLm5leHQgPSB1bmRlZmluZWQ7XG5cblx0XHR0aGlzLmhhbmRsZXJzID0ge1xuXHRcdFx0J2NoYW5nZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKSB7XG5cdFx0XHRcdFx0dGhpcy5wcmV2aW91cyA9IHRoaXMuY29yZS5jdXJyZW50KCk7XG5cdFx0XHRcdFx0dGhpcy5uZXh0ID0gZS5wcm9wZXJ0eS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnZHJhZy5vd2wuY2Fyb3VzZWwgZHJhZ2dlZC5vd2wuY2Fyb3VzZWwgdHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0dGhpcy5zd2FwcGluZyA9IGUudHlwZSA9PSAndHJhbnNsYXRlZCc7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3RyYW5zbGF0ZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuc3dhcHBpbmcgJiYgKHRoaXMuY29yZS5vcHRpb25zLmFuaW1hdGVPdXQgfHwgdGhpcy5jb3JlLm9wdGlvbnMuYW5pbWF0ZUluKSkge1xuXHRcdFx0XHRcdHRoaXMuc3dhcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHR0aGlzLmNvcmUuJGVsZW1lbnQub24odGhpcy5oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QW5pbWF0ZS5EZWZhdWx0cyA9IHtcblx0XHRhbmltYXRlT3V0OiBmYWxzZSxcblx0XHRhbmltYXRlSW46IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIFRvZ2dsZXMgdGhlIGFuaW1hdGlvbiBjbGFzc2VzIHdoZW5ldmVyIGFuIHRyYW5zbGF0aW9ucyBzdGFydHMuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybnMge0Jvb2xlYW58dW5kZWZpbmVkfVxuXHQgKi9cblx0QW5pbWF0ZS5wcm90b3R5cGUuc3dhcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYgKHRoaXMuY29yZS5zZXR0aW5ncy5pdGVtcyAhPT0gMSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghJC5zdXBwb3J0LmFuaW1hdGlvbiB8fCAhJC5zdXBwb3J0LnRyYW5zaXRpb24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNvcmUuc3BlZWQoMCk7XG5cblx0XHR2YXIgbGVmdCxcblx0XHRcdGNsZWFyID0gJC5wcm94eSh0aGlzLmNsZWFyLCB0aGlzKSxcblx0XHRcdHByZXZpb3VzID0gdGhpcy5jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKHRoaXMucHJldmlvdXMpLFxuXHRcdFx0bmV4dCA9IHRoaXMuY29yZS4kc3RhZ2UuY2hpbGRyZW4oKS5lcSh0aGlzLm5leHQpLFxuXHRcdFx0aW5jb21pbmcgPSB0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZUluLFxuXHRcdFx0b3V0Z29pbmcgPSB0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZU91dDtcblxuXHRcdGlmICh0aGlzLmNvcmUuY3VycmVudCgpID09PSB0aGlzLnByZXZpb3VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG91dGdvaW5nKSB7XG5cdFx0XHRsZWZ0ID0gdGhpcy5jb3JlLmNvb3JkaW5hdGVzKHRoaXMucHJldmlvdXMpIC0gdGhpcy5jb3JlLmNvb3JkaW5hdGVzKHRoaXMubmV4dCk7XG5cdFx0XHRwcmV2aW91cy5vbmUoJC5zdXBwb3J0LmFuaW1hdGlvbi5lbmQsIGNsZWFyKVxuXHRcdFx0XHQuY3NzKCB7ICdsZWZ0JzogbGVmdCArICdweCcgfSApXG5cdFx0XHRcdC5hZGRDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLW91dCcpXG5cdFx0XHRcdC5hZGRDbGFzcyhvdXRnb2luZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGluY29taW5nKSB7XG5cdFx0XHRuZXh0Lm9uZSgkLnN1cHBvcnQuYW5pbWF0aW9uLmVuZCwgY2xlYXIpXG5cdFx0XHRcdC5hZGRDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLWluJylcblx0XHRcdFx0LmFkZENsYXNzKGluY29taW5nKTtcblx0XHR9XG5cdH07XG5cblx0QW5pbWF0ZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0JChlLnRhcmdldCkuY3NzKCB7ICdsZWZ0JzogJycgfSApXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIG93bC1hbmltYXRlZC1vdXQgb3dsLWFuaW1hdGVkLWluJylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZUluKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlT3V0KTtcblx0XHR0aGlzLmNvcmUub25UcmFuc2l0aW9uRW5kKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEFuaW1hdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5oYW5kbGVycykge1xuXHRcdFx0dGhpcy5jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLmhhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5BbmltYXRlID0gQW5pbWF0ZTtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEF1dG9wbGF5IFBsdWdpblxuICogQHZlcnNpb24gMi4zLjRcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGF1dGhvciBUb20gRGUgQ2FsdXfDqVxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGF1dG9wbGF5IHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBBdXRvcGxheSBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IHNjb3BlIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEF1dG9wbGF5ID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGF1dG9wbGF5IHRpbWVvdXQgaWQuXG5cdFx0ICogQHR5cGUge051bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9jYWxsID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIERlcGVuZGluZyBvbiB0aGUgc3RhdGUgb2YgdGhlIHBsdWdpbiwgdGhpcyB2YXJpYWJsZSBjb250YWlucyBlaXRoZXJcblx0XHQgKiB0aGUgc3RhcnQgdGltZSBvZiB0aGUgdGltZXIgb3IgdGhlIGN1cnJlbnQgdGltZXIgdmFsdWUgaWYgaXQnc1xuXHRcdCAqIHBhdXNlZC4gU2luY2Ugd2Ugc3RhcnQgaW4gYSBwYXVzZWQgc3RhdGUgd2UgaW5pdGlhbGl6ZSB0aGUgdGltZXJcblx0XHQgKiB2YWx1ZS5cblx0XHQgKiBAdHlwZSB7TnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX3RpbWUgPSAwO1xuXG5cdFx0LyoqXG5cdFx0ICogU3RvcmVzIHRoZSB0aW1lb3V0IGN1cnJlbnRseSB1c2VkLlxuXHRcdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fdGltZW91dCA9IDA7XG5cblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgd2hlbmV2ZXIgdGhlIGF1dG9wbGF5IGlzIHBhdXNlZC5cblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT09ICdzZXR0aW5ncycpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheSkge1xuXHRcdFx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT09ICdwb3NpdGlvbicgJiYgdGhpcy5fcGF1c2VkKSB7XG5cdFx0XHRcdFx0Ly8gUmVzZXQgdGhlIHRpbWVyLiBUaGlzIGNvZGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHBvc2l0aW9uXG5cdFx0XHRcdFx0Ly8gb2YgdGhlIGNhcm91c2VsIHdhcyBjaGFuZ2VkIHRocm91Z2ggdXNlciBpbnRlcmFjdGlvbi5cblx0XHRcdFx0XHR0aGlzLl90aW1lID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5KSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3BsYXkub3dsLmF1dG9wbGF5JzogJC5wcm94eShmdW5jdGlvbihlLCB0LCBzKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHRoaXMucGxheSh0LCBzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnc3RvcC5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J21vdXNlb3Zlci5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheUhvdmVyUGF1c2UgJiYgdGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnbW91c2VsZWF2ZS5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheUhvdmVyUGF1c2UgJiYgdGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0XHRcdHRoaXMucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCd0b3VjaHN0YXJ0Lm93bC5jb3JlJzogJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlIb3ZlclBhdXNlICYmIHRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3RvdWNoZW5kLm93bC5jb3JlJzogJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlIb3ZlclBhdXNlKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEF1dG9wbGF5LkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEF1dG9wbGF5LkRlZmF1bHRzID0ge1xuXHRcdGF1dG9wbGF5OiBmYWxzZSxcblx0XHRhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG5cdFx0YXV0b3BsYXlIb3ZlclBhdXNlOiBmYWxzZSxcblx0XHRhdXRvcGxheVNwZWVkOiBmYWxzZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHNsaWRlIGFuZCBzZXQgYSB0aW1lb3V0IGZvciB0aGUgbmV4dCB0cmFuc2l0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSBhbmltYXRpb24gc3BlZWQgZm9yIHRoZSBhbmltYXRpb25zLlxuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24oc3BlZWQpIHtcblx0XHR0aGlzLl9jYWxsID0gd2luZG93LnNldFRpbWVvdXQoXG5cdFx0XHQkLnByb3h5KHRoaXMuX25leHQsIHRoaXMsIHNwZWVkKSxcblx0XHRcdHRoaXMuX3RpbWVvdXQgKiAoTWF0aC5yb3VuZCh0aGlzLnJlYWQoKSAvIHRoaXMuX3RpbWVvdXQpICsgMSkgLSB0aGlzLnJlYWQoKVxuXHRcdCk7XG5cblx0XHRpZiAodGhpcy5fY29yZS5pcygnaW50ZXJhY3RpbmcnKSB8fCBkb2N1bWVudC5oaWRkZW4pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fY29yZS5uZXh0KHNwZWVkIHx8IHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlTcGVlZCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVhZHMgdGhlIGN1cnJlbnQgdGltZXIgdmFsdWUgd2hlbiB0aGUgdGltZXIgaXMgcGxheWluZy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLl90aW1lO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdGFydHMgdGhlIGF1dG9wbGF5LlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbdGltZW91dF0gLSBUaGUgaW50ZXJ2YWwgYmVmb3JlIHRoZSBuZXh0IGFuaW1hdGlvbiBzdGFydHMuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIGFuaW1hdGlvbiBzcGVlZCBmb3IgdGhlIGFuaW1hdGlvbnMuXG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKHRpbWVvdXQsIHNwZWVkKSB7XG5cdFx0dmFyIGVsYXBzZWQ7XG5cblx0XHRpZiAoIXRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdHRoaXMuX2NvcmUuZW50ZXIoJ3JvdGF0aW5nJyk7XG5cdFx0fVxuXG5cdFx0dGltZW91dCA9IHRpbWVvdXQgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheVRpbWVvdXQ7XG5cblx0XHQvLyBDYWxjdWxhdGUgdGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgbGFzdCB0cmFuc2l0aW9uLiBJZiB0aGUgY2Fyb3VzZWxcblx0XHQvLyB3YXNuJ3QgcGxheWluZyB0aGlzIGNhbGN1bGF0aW9uIHdpbGwgeWllbGQgemVyby5cblx0XHRlbGFwc2VkID0gTWF0aC5taW4odGhpcy5fdGltZSAlICh0aGlzLl90aW1lb3V0IHx8IHRpbWVvdXQpLCB0aW1lb3V0KTtcblxuXHRcdGlmICh0aGlzLl9wYXVzZWQpIHtcblx0XHRcdC8vIFN0YXJ0IHRoZSBjbG9jay5cblx0XHRcdHRoaXMuX3RpbWUgPSB0aGlzLnJlYWQoKTtcblx0XHRcdHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBDbGVhciB0aGUgYWN0aXZlIHRpbWVvdXQgdG8gYWxsb3cgcmVwbGFjZW1lbnQuXG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX2NhbGwpO1xuXHRcdH1cblxuXHRcdC8vIEFkanVzdCB0aGUgb3JpZ2luIG9mIHRoZSB0aW1lciB0byBtYXRjaCB0aGUgbmV3IHRpbWVvdXQgdmFsdWUuXG5cdFx0dGhpcy5fdGltZSArPSB0aGlzLnJlYWQoKSAlIHRpbWVvdXQgLSBlbGFwc2VkO1xuXG5cdFx0dGhpcy5fdGltZW91dCA9IHRpbWVvdXQ7XG5cdFx0dGhpcy5fY2FsbCA9IHdpbmRvdy5zZXRUaW1lb3V0KCQucHJveHkodGhpcy5fbmV4dCwgdGhpcywgc3BlZWQpLCB0aW1lb3V0IC0gZWxhcHNlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFN0b3BzIHRoZSBhdXRvcGxheS5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0Ly8gUmVzZXQgdGhlIGNsb2NrLlxuXHRcdFx0dGhpcy5fdGltZSA9IDA7XG5cdFx0XHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xuXG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX2NhbGwpO1xuXHRcdFx0dGhpcy5fY29yZS5sZWF2ZSgncm90YXRpbmcnKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFBhdXNlcyB0aGUgYXV0b3BsYXkuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEF1dG9wbGF5LnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpICYmICF0aGlzLl9wYXVzZWQpIHtcblx0XHRcdC8vIFBhdXNlIHRoZSBjbG9jay5cblx0XHRcdHRoaXMuX3RpbWUgPSB0aGlzLnJlYWQoKTtcblx0XHRcdHRoaXMuX3BhdXNlZCA9IHRydWU7XG5cblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fY2FsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHR0aGlzLnN0b3AoKTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLmF1dG9wbGF5ID0gQXV0b3BsYXk7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIFBsdWdpblxuICogQHZlcnNpb24gMi4zLjRcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBuYXZpZ2F0aW9uIHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBOYXZpZ2F0aW9uIFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsLlxuXHQgKi9cblx0dmFyIE5hdmlnYXRpb24gPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcGx1Z2luIGlzIGluaXRpYWxpemVkIG9yIG5vdC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBjdXJyZW50IHBhZ2luZyBpbmRleGVzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7QXJyYXl9XG5cdFx0ICovXG5cdFx0dGhpcy5fcGFnZXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBET00gZWxlbWVudHMgb2YgdGhlIHVzZXIgaW50ZXJmYWNlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvbnRyb2xzID0ge307XG5cblx0XHQvKipcblx0XHQgKiBNYXJrdXAgZm9yIGFuIGluZGljYXRvci5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge0FycmF5LjxTdHJpbmc+fVxuXHRcdCAqL1xuXHRcdHRoaXMuX3RlbXBsYXRlcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGNhcm91c2VsIGVsZW1lbnQuXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cblx0XHQgKi9cblx0XHR0aGlzLiRlbGVtZW50ID0gdGhpcy5fY29yZS4kZWxlbWVudDtcblxuXHRcdC8qKlxuXHRcdCAqIE92ZXJyaWRkZW4gbWV0aG9kcyBvZiB0aGUgY2Fyb3VzZWwuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5fb3ZlcnJpZGVzID0ge1xuXHRcdFx0bmV4dDogdGhpcy5fY29yZS5uZXh0LFxuXHRcdFx0cHJldjogdGhpcy5fY29yZS5wcmV2LFxuXHRcdFx0dG86IHRoaXMuX2NvcmUudG9cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J3ByZXBhcmVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RzRGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuX3RlbXBsYXRlcy5wdXNoKCc8ZGl2IGNsYXNzPVwiJyArIHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90Q2xhc3MgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHQkKGUuY29udGVudCkuZmluZCgnW2RhdGEtZG90XScpLmFkZEJhY2soJ1tkYXRhLWRvdF0nKS5hdHRyKCdkYXRhLWRvdCcpICsgJzwvZGl2PicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdhZGRlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90c0RhdGEpIHtcblx0XHRcdFx0XHR0aGlzLl90ZW1wbGF0ZXMuc3BsaWNlKGUucG9zaXRpb24sIDAsIHRoaXMuX3RlbXBsYXRlcy5wb3AoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3JlbW92ZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90c0RhdGEpIHtcblx0XHRcdFx0XHR0aGlzLl90ZW1wbGF0ZXMuc3BsaWNlKGUucG9zaXRpb24sIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpIHtcblx0XHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiAhdGhpcy5faW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2luaXRpYWxpemUnLCBudWxsLCAnbmF2aWdhdGlvbicpO1xuXHRcdFx0XHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdFx0dGhpcy5kcmF3KCk7XG5cdFx0XHRcdFx0dGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcignaW5pdGlhbGl6ZWQnLCBudWxsLCAnbmF2aWdhdGlvbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdyZWZyZXNoZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9pbml0aWFsaXplZCkge1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcigncmVmcmVzaCcsIG51bGwsICduYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ3JlZnJlc2hlZCcsIG51bGwsICduYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTmF2aWdhdGlvbi5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKiBAdG9kbyBSZW5hbWUgYHNsaWRlQnlgIHRvIGBuYXZCeWBcblx0ICovXG5cdE5hdmlnYXRpb24uRGVmYXVsdHMgPSB7XG5cdFx0bmF2OiBmYWxzZSxcblx0XHRuYXZUZXh0OiBbXG5cdFx0XHQnPHNwYW4gYXJpYS1sYWJlbD1cIicgKyAnUHJldmlvdXMnICsgJ1wiPiYjeDIwMzk7PC9zcGFuPicsXG5cdFx0XHQnPHNwYW4gYXJpYS1sYWJlbD1cIicgKyAnTmV4dCcgKyAnXCI+JiN4MjAzYTs8L3NwYW4+J1xuXHRcdF0sXG5cdFx0bmF2U3BlZWQ6IGZhbHNlLFxuXHRcdG5hdkVsZW1lbnQ6ICdidXR0b24gdHlwZT1cImJ1dHRvblwiIHJvbGU9XCJwcmVzZW50YXRpb25cIicsXG5cdFx0bmF2Q29udGFpbmVyOiBmYWxzZSxcblx0XHRuYXZDb250YWluZXJDbGFzczogJ293bC1uYXYnLFxuXHRcdG5hdkNsYXNzOiBbXG5cdFx0XHQnb3dsLXByZXYnLFxuXHRcdFx0J293bC1uZXh0J1xuXHRcdF0sXG5cdFx0c2xpZGVCeTogMSxcblx0XHRkb3RDbGFzczogJ293bC1kb3QnLFxuXHRcdGRvdHNDbGFzczogJ293bC1kb3RzJyxcblx0XHRkb3RzOiB0cnVlLFxuXHRcdGRvdHNFYWNoOiBmYWxzZSxcblx0XHRkb3RzRGF0YTogZmFsc2UsXG5cdFx0ZG90c1NwZWVkOiBmYWxzZSxcblx0XHRkb3RzQ29udGFpbmVyOiBmYWxzZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyB0aGUgbGF5b3V0IG9mIHRoZSBwbHVnaW4gYW5kIGV4dGVuZHMgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG92ZXJyaWRlLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xuXG5cdFx0Ly8gY3JlYXRlIERPTSBzdHJ1Y3R1cmUgZm9yIHJlbGF0aXZlIG5hdmlnYXRpb25cblx0XHR0aGlzLl9jb250cm9scy4kcmVsYXRpdmUgPSAoc2V0dGluZ3MubmF2Q29udGFpbmVyID8gJChzZXR0aW5ncy5uYXZDb250YWluZXIpXG5cdFx0XHQ6ICQoJzxkaXY+JykuYWRkQ2xhc3Moc2V0dGluZ3MubmF2Q29udGFpbmVyQ2xhc3MpLmFwcGVuZFRvKHRoaXMuJGVsZW1lbnQpKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRwcmV2aW91cyA9ICQoJzwnICsgc2V0dGluZ3MubmF2RWxlbWVudCArICc+Jylcblx0XHRcdC5hZGRDbGFzcyhzZXR0aW5ncy5uYXZDbGFzc1swXSlcblx0XHRcdC5odG1sKHNldHRpbmdzLm5hdlRleHRbMF0pXG5cdFx0XHQucHJlcGVuZFRvKHRoaXMuX2NvbnRyb2xzLiRyZWxhdGl2ZSlcblx0XHRcdC5vbignY2xpY2snLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dGhpcy5wcmV2KHNldHRpbmdzLm5hdlNwZWVkKTtcblx0XHRcdH0sIHRoaXMpKTtcblx0XHR0aGlzLl9jb250cm9scy4kbmV4dCA9ICQoJzwnICsgc2V0dGluZ3MubmF2RWxlbWVudCArICc+Jylcblx0XHRcdC5hZGRDbGFzcyhzZXR0aW5ncy5uYXZDbGFzc1sxXSlcblx0XHRcdC5odG1sKHNldHRpbmdzLm5hdlRleHRbMV0pXG5cdFx0XHQuYXBwZW5kVG8odGhpcy5fY29udHJvbHMuJHJlbGF0aXZlKVxuXHRcdFx0Lm9uKCdjbGljaycsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR0aGlzLm5leHQoc2V0dGluZ3MubmF2U3BlZWQpO1xuXHRcdFx0fSwgdGhpcykpO1xuXG5cdFx0Ly8gY3JlYXRlIERPTSBzdHJ1Y3R1cmUgZm9yIGFic29sdXRlIG5hdmlnYXRpb25cblx0XHRpZiAoIXNldHRpbmdzLmRvdHNEYXRhKSB7XG5cdFx0XHR0aGlzLl90ZW1wbGF0ZXMgPSBbICQoJzxidXR0b24gcm9sZT1cImJ1dHRvblwiPicpXG5cdFx0XHRcdC5hZGRDbGFzcyhzZXR0aW5ncy5kb3RDbGFzcylcblx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKSlcblx0XHRcdFx0LnByb3AoJ291dGVySFRNTCcpIF07XG5cdFx0fVxuXG5cdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlID0gKHNldHRpbmdzLmRvdHNDb250YWluZXIgPyAkKHNldHRpbmdzLmRvdHNDb250YWluZXIpXG5cdFx0XHQ6ICQoJzxkaXY+JykuYWRkQ2xhc3Moc2V0dGluZ3MuZG90c0NsYXNzKS5hcHBlbmRUbyh0aGlzLiRlbGVtZW50KSkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cblx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUub24oJ2NsaWNrJywgJ2J1dHRvbicsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIGluZGV4ID0gJChlLnRhcmdldCkucGFyZW50KCkuaXModGhpcy5fY29udHJvbHMuJGFic29sdXRlKVxuXHRcdFx0XHQ/ICQoZS50YXJnZXQpLmluZGV4KCkgOiAkKGUudGFyZ2V0KS5wYXJlbnQoKS5pbmRleCgpO1xuXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRoaXMudG8oaW5kZXgsIHNldHRpbmdzLmRvdHNTcGVlZCk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0LyokZWwub24oJ2ZvY3VzaW4nLCBmdW5jdGlvbigpIHtcblx0XHRcdCQoZG9jdW1lbnQpLm9mZihcIi5jYXJvdXNlbFwiKTtcblxuXHRcdFx0JChkb2N1bWVudCkub24oJ2tleWRvd24uY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmKGUua2V5Q29kZSA9PSAzNykge1xuXHRcdFx0XHRcdCRlbC50cmlnZ2VyKCdwcmV2Lm93bCcpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoZS5rZXlDb2RlID09IDM5KSB7XG5cdFx0XHRcdFx0JGVsLnRyaWdnZXIoJ25leHQub3dsJylcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7Ki9cblxuXHRcdC8vIG92ZXJyaWRlIHB1YmxpYyBtZXRob2RzIG9mIHRoZSBjYXJvdXNlbFxuXHRcdGZvciAob3ZlcnJpZGUgaW4gdGhpcy5fb3ZlcnJpZGVzKSB7XG5cdFx0XHR0aGlzLl9jb3JlW292ZXJyaWRlXSA9ICQucHJveHkodGhpc1tvdmVycmlkZV0sIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBjb250cm9sLCBwcm9wZXJ0eSwgb3ZlcnJpZGUsIHNldHRpbmdzO1xuXHRcdHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncztcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKGNvbnRyb2wgaW4gdGhpcy5fY29udHJvbHMpIHtcblx0XHRcdGlmIChjb250cm9sID09PSAnJHJlbGF0aXZlJyAmJiBzZXR0aW5ncy5uYXZDb250YWluZXIpIHtcblx0XHRcdFx0dGhpcy5fY29udHJvbHNbY29udHJvbF0uaHRtbCgnJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9jb250cm9sc1tjb250cm9sXS5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChvdmVycmlkZSBpbiB0aGlzLm92ZXJpZGVzKSB7XG5cdFx0XHR0aGlzLl9jb3JlW292ZXJyaWRlXSA9IHRoaXMuX292ZXJyaWRlc1tvdmVycmlkZV07XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgaW50ZXJuYWwgc3RhdGUuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpLCBqLCBrLFxuXHRcdFx0bG93ZXIgPSB0aGlzLl9jb3JlLmNsb25lcygpLmxlbmd0aCAvIDIsXG5cdFx0XHR1cHBlciA9IGxvd2VyICsgdGhpcy5fY29yZS5pdGVtcygpLmxlbmd0aCxcblx0XHRcdG1heGltdW0gPSB0aGlzLl9jb3JlLm1heGltdW0odHJ1ZSksXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRzaXplID0gc2V0dGluZ3MuY2VudGVyIHx8IHNldHRpbmdzLmF1dG9XaWR0aCB8fCBzZXR0aW5ncy5kb3RzRGF0YVxuXHRcdFx0XHQ/IDEgOiBzZXR0aW5ncy5kb3RzRWFjaCB8fCBzZXR0aW5ncy5pdGVtcztcblxuXHRcdGlmIChzZXR0aW5ncy5zbGlkZUJ5ICE9PSAncGFnZScpIHtcblx0XHRcdHNldHRpbmdzLnNsaWRlQnkgPSBNYXRoLm1pbihzZXR0aW5ncy5zbGlkZUJ5LCBzZXR0aW5ncy5pdGVtcyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNldHRpbmdzLmRvdHMgfHwgc2V0dGluZ3Muc2xpZGVCeSA9PSAncGFnZScpIHtcblx0XHRcdHRoaXMuX3BhZ2VzID0gW107XG5cblx0XHRcdGZvciAoaSA9IGxvd2VyLCBqID0gMCwgayA9IDA7IGkgPCB1cHBlcjsgaSsrKSB7XG5cdFx0XHRcdGlmIChqID49IHNpemUgfHwgaiA9PT0gMCkge1xuXHRcdFx0XHRcdHRoaXMuX3BhZ2VzLnB1c2goe1xuXHRcdFx0XHRcdFx0c3RhcnQ6IE1hdGgubWluKG1heGltdW0sIGkgLSBsb3dlciksXG5cdFx0XHRcdFx0XHRlbmQ6IGkgLSBsb3dlciArIHNpemUgLSAxXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0aWYgKE1hdGgubWluKG1heGltdW0sIGkgLSBsb3dlcikgPT09IG1heGltdW0pIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRqID0gMCwgKytrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGogKz0gdGhpcy5fY29yZS5tZXJnZXJzKHRoaXMuX2NvcmUucmVsYXRpdmUoaSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogRHJhd3MgdGhlIHVzZXIgaW50ZXJmYWNlLlxuXHQgKiBAdG9kbyBUaGUgb3B0aW9uIGBkb3RzRGF0YWAgd29udCB3b3JrLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRpZmZlcmVuY2UsXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRkaXNhYmxlZCA9IHRoaXMuX2NvcmUuaXRlbXMoKS5sZW5ndGggPD0gc2V0dGluZ3MuaXRlbXMsXG5cdFx0XHRpbmRleCA9IHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpLFxuXHRcdFx0bG9vcCA9IHNldHRpbmdzLmxvb3AgfHwgc2V0dGluZ3MucmV3aW5kO1xuXG5cdFx0dGhpcy5fY29udHJvbHMuJHJlbGF0aXZlLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFzZXR0aW5ncy5uYXYgfHwgZGlzYWJsZWQpO1xuXG5cdFx0aWYgKHNldHRpbmdzLm5hdikge1xuXHRcdFx0dGhpcy5fY29udHJvbHMuJHByZXZpb3VzLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFsb29wICYmIGluZGV4IDw9IHRoaXMuX2NvcmUubWluaW11bSh0cnVlKSk7XG5cdFx0XHR0aGlzLl9jb250cm9scy4kbmV4dC50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCAhbG9vcCAmJiBpbmRleCA+PSB0aGlzLl9jb3JlLm1heGltdW0odHJ1ZSkpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCAhc2V0dGluZ3MuZG90cyB8fCBkaXNhYmxlZCk7XG5cblx0XHRpZiAoc2V0dGluZ3MuZG90cykge1xuXHRcdFx0ZGlmZmVyZW5jZSA9IHRoaXMuX3BhZ2VzLmxlbmd0aCAtIHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLmxlbmd0aDtcblxuXHRcdFx0aWYgKHNldHRpbmdzLmRvdHNEYXRhICYmIGRpZmZlcmVuY2UgIT09IDApIHtcblx0XHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmh0bWwodGhpcy5fdGVtcGxhdGVzLmpvaW4oJycpKTtcblx0XHRcdH0gZWxzZSBpZiAoZGlmZmVyZW5jZSA+IDApIHtcblx0XHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmFwcGVuZChuZXcgQXJyYXkoZGlmZmVyZW5jZSArIDEpLmpvaW4odGhpcy5fdGVtcGxhdGVzWzBdKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGRpZmZlcmVuY2UgPCAwKSB7XG5cdFx0XHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLnNsaWNlKGRpZmZlcmVuY2UpLnJlbW92ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLmVxKCQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBFeHRlbmRzIGV2ZW50IGRhdGEuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgb2JqZWN0IHdoaWNoIGdldHMgdGhyb3duLlxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUub25UcmlnZ2VyID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgc2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xuXG5cdFx0ZXZlbnQucGFnZSA9IHtcblx0XHRcdGluZGV4OiAkLmluQXJyYXkodGhpcy5jdXJyZW50KCksIHRoaXMuX3BhZ2VzKSxcblx0XHRcdGNvdW50OiB0aGlzLl9wYWdlcy5sZW5ndGgsXG5cdFx0XHRzaXplOiBzZXR0aW5ncyAmJiAoc2V0dGluZ3MuY2VudGVyIHx8IHNldHRpbmdzLmF1dG9XaWR0aCB8fCBzZXR0aW5ncy5kb3RzRGF0YVxuXHRcdFx0XHQ/IDEgOiBzZXR0aW5ncy5kb3RzRWFjaCB8fCBzZXR0aW5ncy5pdGVtcylcblx0XHR9O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBjdXJyZW50IHBhZ2UgcG9zaXRpb24gb2YgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLl9jb3JlLnJlbGF0aXZlKHRoaXMuX2NvcmUuY3VycmVudCgpKTtcblx0XHRyZXR1cm4gJC5ncmVwKHRoaXMuX3BhZ2VzLCAkLnByb3h5KGZ1bmN0aW9uKHBhZ2UsIGluZGV4KSB7XG5cdFx0XHRyZXR1cm4gcGFnZS5zdGFydCA8PSBjdXJyZW50ICYmIHBhZ2UuZW5kID49IGN1cnJlbnQ7XG5cdFx0fSwgdGhpcykpLnBvcCgpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBjdXJyZW50IHN1Y2Nlc29yL3ByZWRlY2Vzc29yIHBvc2l0aW9uLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKHN1Y2Nlc3Nvcikge1xuXHRcdHZhciBwb3NpdGlvbiwgbGVuZ3RoLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xuXG5cdFx0aWYgKHNldHRpbmdzLnNsaWRlQnkgPT0gJ3BhZ2UnKSB7XG5cdFx0XHRwb3NpdGlvbiA9ICQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpO1xuXHRcdFx0bGVuZ3RoID0gdGhpcy5fcGFnZXMubGVuZ3RoO1xuXHRcdFx0c3VjY2Vzc29yID8gKytwb3NpdGlvbiA6IC0tcG9zaXRpb247XG5cdFx0XHRwb3NpdGlvbiA9IHRoaXMuX3BhZ2VzWygocG9zaXRpb24gJSBsZW5ndGgpICsgbGVuZ3RoKSAlIGxlbmd0aF0uc3RhcnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBvc2l0aW9uID0gdGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSk7XG5cdFx0XHRsZW5ndGggPSB0aGlzLl9jb3JlLml0ZW1zKCkubGVuZ3RoO1xuXHRcdFx0c3VjY2Vzc29yID8gcG9zaXRpb24gKz0gc2V0dGluZ3Muc2xpZGVCeSA6IHBvc2l0aW9uIC09IHNldHRpbmdzLnNsaWRlQnk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvc2l0aW9uO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIG5leHQgaXRlbSBvciBwYWdlLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWQ9ZmFsc2VdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLmdldFBvc2l0aW9uKHRydWUpLCBzcGVlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgcHJldmlvdXMgaXRlbSBvciBwYWdlLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWQ9ZmFsc2VdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLmdldFBvc2l0aW9uKGZhbHNlKSwgc3BlZWQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIHNwZWNpZmllZCBpdGVtIG9yIHBhZ2UuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIG9yIHBhZ2UuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICogQHBhcmFtIHtCb29sZWFufSBbc3RhbmRhcmQ9ZmFsc2VdIC0gV2hldGhlciB0byB1c2UgdGhlIHN0YW5kYXJkIGJlaGF2aW91ciBvciBub3QuXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBzcGVlZCwgc3RhbmRhcmQpIHtcblx0XHR2YXIgbGVuZ3RoO1xuXG5cdFx0aWYgKCFzdGFuZGFyZCAmJiB0aGlzLl9wYWdlcy5sZW5ndGgpIHtcblx0XHRcdGxlbmd0aCA9IHRoaXMuX3BhZ2VzLmxlbmd0aDtcblx0XHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLl9wYWdlc1soKHBvc2l0aW9uICUgbGVuZ3RoKSArIGxlbmd0aCkgJSBsZW5ndGhdLnN0YXJ0LCBzcGVlZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKShwb3NpdGlvbiwgc3BlZWQpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuTmF2aWdhdGlvbiA9IE5hdmlnYXRpb247XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBIYXNoIFBsdWdpblxuICogQHZlcnNpb24gMi4zLjRcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBoYXNoIHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBIYXNoIFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgSGFzaCA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIEhhc2ggaW5kZXggZm9yIHRoZSBpdGVtcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYXNoZXMgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBjYXJvdXNlbCBlbGVtZW50LlxuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy4kZWxlbWVudCA9IHRoaXMuX2NvcmUuJGVsZW1lbnQ7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLnN0YXJ0UG9zaXRpb24gPT09ICdVUkxIYXNoJykge1xuXHRcdFx0XHRcdCQod2luZG93KS50cmlnZ2VyKCdoYXNoY2hhbmdlLm93bC5uYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3ByZXBhcmVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHR2YXIgaGFzaCA9ICQoZS5jb250ZW50KS5maW5kKCdbZGF0YS1oYXNoXScpLmFkZEJhY2soJ1tkYXRhLWhhc2hdJykuYXR0cignZGF0YS1oYXNoJyk7XG5cblx0XHRcdFx0XHRpZiAoIWhhc2gpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLl9oYXNoZXNbaGFzaF0gPSBlLmNvbnRlbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT09ICdwb3NpdGlvbicpIHtcblx0XHRcdFx0XHR2YXIgY3VycmVudCA9IHRoaXMuX2NvcmUuaXRlbXModGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSkpLFxuXHRcdFx0XHRcdFx0aGFzaCA9ICQubWFwKHRoaXMuX2hhc2hlcywgZnVuY3Rpb24oaXRlbSwgaGFzaCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gY3VycmVudCA/IGhhc2ggOiBudWxsO1xuXHRcdFx0XHRcdFx0fSkuam9pbigpO1xuXG5cdFx0XHRcdFx0aWYgKCFoYXNoIHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpID09PSBoYXNoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEhhc2guRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciB0aGUgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyIGZvciBoYXNoIG5hdmlnYXRpb25cblx0XHQkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2Uub3dsLm5hdmlnYXRpb24nLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpLFxuXHRcdFx0XHRpdGVtcyA9IHRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCksXG5cdFx0XHRcdHBvc2l0aW9uID0gdGhpcy5faGFzaGVzW2hhc2hdICYmIGl0ZW1zLmluZGV4KHRoaXMuX2hhc2hlc1toYXNoXSk7XG5cblx0XHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID09PSB0aGlzLl9jb3JlLmN1cnJlbnQoKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2NvcmUudG8odGhpcy5fY29yZS5yZWxhdGl2ZShwb3NpdGlvbiksIGZhbHNlLCB0cnVlKTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0SGFzaC5EZWZhdWx0cyA9IHtcblx0XHRVUkxoYXNoTGlzdGVuZXI6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEhhc2gucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHQkKHdpbmRvdykub2ZmKCdoYXNoY2hhbmdlLm93bC5uYXZpZ2F0aW9uJyk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5IYXNoID0gSGFzaDtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIFN1cHBvcnQgUGx1Z2luXG4gKlxuICogQHZlcnNpb24gMi4zLjRcbiAqIEBhdXRob3IgVml2aWQgUGxhbmV0IFNvZnR3YXJlIEdtYkhcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHR2YXIgc3R5bGUgPSAkKCc8c3VwcG9ydD4nKS5nZXQoMCkuc3R5bGUsXG5cdFx0cHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zJy5zcGxpdCgnICcpLFxuXHRcdGV2ZW50cyA9IHtcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0ZW5kOiB7XG5cdFx0XHRcdFx0V2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuXHRcdFx0XHRcdE1velRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcblx0XHRcdFx0XHRPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0XHRlbmQ6IHtcblx0XHRcdFx0XHRXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuXHRcdFx0XHRcdE1vekFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG5cdFx0XHRcdFx0T0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuXHRcdFx0XHRcdGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dGVzdHMgPSB7XG5cdFx0XHRjc3N0cmFuc2Zvcm1zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgndHJhbnNmb3JtJyk7XG5cdFx0XHR9LFxuXHRcdFx0Y3NzdHJhbnNmb3JtczNkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgncGVyc3BlY3RpdmUnKTtcblx0XHRcdH0sXG5cdFx0XHRjc3N0cmFuc2l0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIXRlc3QoJ3RyYW5zaXRpb24nKTtcblx0XHRcdH0sXG5cdFx0XHRjc3NhbmltYXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgnYW5pbWF0aW9uJyk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRmdW5jdGlvbiB0ZXN0KHByb3BlcnR5LCBwcmVmaXhlZCkge1xuXHRcdHZhciByZXN1bHQgPSBmYWxzZSxcblx0XHRcdHVwcGVyID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuXHRcdCQuZWFjaCgocHJvcGVydHkgKyAnICcgKyBwcmVmaXhlcy5qb2luKHVwcGVyICsgJyAnKSArIHVwcGVyKS5zcGxpdCgnICcpLCBmdW5jdGlvbihpLCBwcm9wZXJ0eSkge1xuXHRcdFx0aWYgKHN0eWxlW3Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHByZWZpeGVkID8gcHJvcGVydHkgOiB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlZml4ZWQocHJvcGVydHkpIHtcblx0XHRyZXR1cm4gdGVzdChwcm9wZXJ0eSwgdHJ1ZSk7XG5cdH1cblxuXHRpZiAodGVzdHMuY3NzdHJhbnNpdGlvbnMoKSkge1xuXHRcdC8qIGpzaGludCAtVzA1MyAqL1xuXHRcdCQuc3VwcG9ydC50cmFuc2l0aW9uID0gbmV3IFN0cmluZyhwcmVmaXhlZCgndHJhbnNpdGlvbicpKVxuXHRcdCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCA9IGV2ZW50cy50cmFuc2l0aW9uLmVuZFsgJC5zdXBwb3J0LnRyYW5zaXRpb24gXTtcblx0fVxuXG5cdGlmICh0ZXN0cy5jc3NhbmltYXRpb25zKCkpIHtcblx0XHQvKiBqc2hpbnQgLVcwNTMgKi9cblx0XHQkLnN1cHBvcnQuYW5pbWF0aW9uID0gbmV3IFN0cmluZyhwcmVmaXhlZCgnYW5pbWF0aW9uJykpXG5cdFx0JC5zdXBwb3J0LmFuaW1hdGlvbi5lbmQgPSBldmVudHMuYW5pbWF0aW9uLmVuZFsgJC5zdXBwb3J0LmFuaW1hdGlvbiBdO1xuXHR9XG5cblx0aWYgKHRlc3RzLmNzc3RyYW5zZm9ybXMoKSkge1xuXHRcdC8qIGpzaGludCAtVzA1MyAqL1xuXHRcdCQuc3VwcG9ydC50cmFuc2Zvcm0gPSBuZXcgU3RyaW5nKHByZWZpeGVkKCd0cmFuc2Zvcm0nKSk7XG5cdFx0JC5zdXBwb3J0LnRyYW5zZm9ybTNkID0gdGVzdHMuY3NzdHJhbnNmb3JtczNkKCk7XG5cdH1cblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG59LmNhbGwod2luZG93KSk7IiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdtYWduaWZpYy1wb3B1cCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBNb2RhbCBjbGFzcy5cbiAqIEBjbGFzc1xuICovXG5jb25zdCBNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgc2VsZi5ib2R5ID0gJCgnYm9keScpO1xuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50cyBsaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBzZWxmLnNldHVwTGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5ib2R5Lm9uKCdjbGljaycsICcubW9kYWxfdHJpZ2dlcicsIHNlbGYucm91dGVyKTtcbiAgICAgICAgc2VsZi5ib2R5Lm9uKCdjbGljaycsICcubW9kYWxfY2xvc2UnLCBzZWxmLmNsb3NlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm91dGVzIG9wZW4gYW5kIGNsb3NlIG1ldGhvZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBzZWxmLnJvdXRlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IHRhcmdldCA9ICQodGhpcyk7XG4gICAgICAgIGxldCBzcmMgPSAnJztcbiAgICAgICAgbGV0IHR5cGUgPSAnJztcblxuICAgICAgICBpZiAodGFyZ2V0Lmhhc0NsYXNzKCdtb2RhbF90cmlnZ2VyJykpIHtcblxuICAgICAgICAgICAgc3JjID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIHR5cGUgPSB0YXJnZXQuZGF0YSgnbW9kYWwtdHlwZScpIHx8ICdpbmxpbmUnO1xuXG4gICAgICAgICAgICBzZWxmLm9wZW4oc3JjLCB0eXBlKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5oYXNDbGFzcygnbW9kYWxfY2xvc2UnKSkge1xuXG4gICAgICAgICAgICBzZWxmLmNsb3NlKCk7XG5cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBPcGVuIG1vZGFsXG4gICAgICovXG4gICAgc2VsZi5vcGVuID0gZnVuY3Rpb24oc3JjLCB0eXBlKSB7XG4gICAgICAgICQubWFnbmlmaWNQb3B1cC5vcGVuKHtcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgc3JjOiBzcmMsXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgIGJlZm9yZU9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmJvZHkuYWRkQ2xhc3MoJ21vZGFsX2pzX29wZW4nKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ib2R5LnJlbW92ZUNsYXNzKCdtb2RhbF9qc19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBxdWVzdGlvbkZvcm0gPSAkKCcjcXVlc3Rpb24tZm9ybScpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcXVlc3Rpb25Gb3JtRWxlbWVudCA9IHF1ZXN0aW9uRm9ybS5maW5kKCcuZm9ybV9fZWxlbWVudCcpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHF1ZXN0aW9uRm9ybS5maW5kKCcuZm9ybS1tZXNzYWdlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25Gb3JtRWxlbWVudC5yZW1vdmVDbGFzcygnaW5wdXQtYWxlcnQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocXVlc3Rpb25Gb3JtLmhhc0NsYXNzKCdzaG93LW1lc3NhZ2Utc3VjY2VzcycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbkZvcm0ucmVtb3ZlQ2xhc3MoJ3Nob3ctbWVzc2FnZS1zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnJlbW92ZUNsYXNzKCdzaG93LW1lc3NhZ2Utc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25Gb3JtRWxlbWVudC5yZW1vdmVDbGFzcygnZm9jdXNlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25Gb3JtRWxlbWVudC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykudmFsKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dDbG9zZUJ0bjogZmFsc2UsXG4gICAgICAgICAgICBtaWRDbGljazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgbW9kYWxcbiAgICAgKi9cbiAgICBzZWxmLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0IG1vZHVsZVxuICAgICAqL1xuICAgIHNlbGYuaW5pdCA9ICgpID0+IHtcbiAgICAgICAgc2VsZi5zZXR1cExpc3RlbmVyKCk7XG4gICAgfTtcbn07XG5cbmlmICghKCdtb2R1bGVzJyBpbiAkKSkge1xuICAgICQubW9kdWxlcyA9IHt9O1xufVxuXG5jb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgpO1xuXG4kKCgpID0+IG1vZGFsLmluaXQoKSk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdvd2wuY2Fyb3VzZWwnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgU3RlcHMgY2xhc3MuXG4gKiBAY2xhc3NcbiAqL1xuY29uc3QgU3RlcHMgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudHMgbGlzdGVuZXJzXG4gICAgICovXG4gICAgc2VsZi5zZXR1cExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHNlbGYuYW5pbWF0ZVN0ZXBzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQW5pbWF0ZSBTdGVwcy1UYWJsZXRcbiAgICAgKi9cbiAgICBzZWxmLmFuaW1hdGVTdGVwcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgb3dsID0gJCgnLnN0ZXBzX19saXN0Jyk7XG4gICAgICAgIGxldCBvd2xDb250YWluZXIgPSBvd2wuY2xvc2VzdCgnLnN0ZXBzX19saXN0X193cmFwcGVyJyk7XG4gICAgICAgIGxldCBvd2xDb250cm9sTGVmdCA9IG93bENvbnRhaW5lci5maW5kKCcuc3RlcHNfX2NvbnRyb2xzX19sZWZ0Jyk7XG4gICAgICAgIGxldCBvd2xDb250cm9sUmlnaHQgPSBvd2xDb250YWluZXIuZmluZCgnLnN0ZXBzX19jb250cm9sc19fcmlnaHQnKTtcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gJzc2NycpIHtcbiAgICAgICAgICAgIGlmICghb3dsLmhhc0NsYXNzKCdvd2wtY2Fyb3VzZWwnKSkge1xuICAgICAgICAgICAgICAgIG93bC5hZGRDbGFzcygnb3dsLWNhcm91c2VsJykuYWRkQ2xhc3MoJy5vd2wtdGhlbWUnKTtcbiAgICAgICAgICAgICAgICBvd2wuZmluZCgnLnN0ZXBzX19pdGVtJykuYWRkQ2xhc3MoJ3N0ZXBzX19pdGVtX2Nhcm91c2VsJyk7XG4gICAgICAgICAgICAgICAgb3dsQ29udHJvbExlZnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG93bENvbnRyb2xSaWdodC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBvd2wub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQnk6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNtYXJ0U3BlZWQ6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgbW91c2VEcmFnOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgb3dsLm9uKCdjaGFuZ2VkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbXMgPSBvd2xDb250YWluZXIuZmluZCgnLm93bC1kb3RzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1zLmZpbmQoJy5vd2wtZG90LmFjdGl2ZScpLmluZGV4KCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bENvbnRyb2xMZWZ0LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3dsQ29udHJvbFJpZ2h0LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW1zLmZpbmQoJy5vd2wtZG90LmFjdGl2ZScpLmluZGV4KCkgPT09IChpdGVtcy5maW5kKCcub3dsLWRvdCcpLmxlbmd0aCAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bENvbnRyb2xSaWdodC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bENvbnRyb2xMZWZ0LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3dsQ29udHJvbExlZnQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvd2xDb250cm9sUmlnaHQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG93bENvbnRyb2xMZWZ0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIG93bC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgb3dsQ29udHJvbFJpZ2h0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIG93bC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG93bC5oYXNDbGFzcygnb3dsLWNhcm91c2VsJykpIHtcbiAgICAgICAgICAgICAgICBvd2wub2ZmKCdjaGFuZ2VkLm93bC5jYXJvdXNlbCcpO1xuICAgICAgICAgICAgICAgIG93bC5yZW1vdmVDbGFzcygnb3dsLWNhcm91c2VsJykucmVtb3ZlQ2xhc3MoJy5vd2wtdGhlbWUnKTtcbiAgICAgICAgICAgICAgICBvd2xDb250cm9sTGVmdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgb3dsQ29udHJvbFJpZ2h0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBvd2xDb250cm9sUmlnaHQub2ZmKCk7XG4gICAgICAgICAgICAgICAgb3dsQ29udHJvbExlZnQub2ZmKCk7XG4gICAgICAgICAgICAgICAgb3dsLnRyaWdnZXIoJ2Rlc3Ryb3kub3dsLmNhcm91c2VsJyk7XG4gICAgICAgICAgICAgICAgJCgnLnN0ZXBzX19pdGVtJykucmVtb3ZlQ2xhc3MoJ3N0ZXBzX19pdGVtX2Nhcm91c2VsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2VsZi5pbml0ID0gKCkgPT4ge1xuICAgICAgICBzZWxmLmFuaW1hdGVTdGVwcygpO1xuICAgICAgICBzZWxmLnNldHVwTGlzdGVuZXIoKTtcbiAgICB9O1xufTtcblxuaWYgKCEoJ21vZHVsZXMnIGluICQpKSB7XG4gICAgJC5tb2R1bGVzID0ge307XG59XG5jb25zdCBzdGVwcyA9IG5ldyBTdGVwcygpO1xuXG4kKCgpID0+IHN0ZXBzLmluaXQoKSk7XG4iLCJpbXBvcnQgJy4uLy4uL2Jsb2Nrcy9zdGVwcy9zdGVwcyc7XG5pbXBvcnQgJy4uLy4uL2Jsb2Nrcy9tb2RhbC9tb2RhbCc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxpYnJhcnk7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsVUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ24wREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsNEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBO0FBQ0E7QUE1QkE7QUE4QkE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQ0RBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=