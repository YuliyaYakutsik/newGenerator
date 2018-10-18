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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/core.js");
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

/***/ "./src/blocks/header/header.js":
/*!*************************************!*\
  !*** ./src/blocks/header/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a new Header class.
 * @class
 */
var Header = function Header() {
    var self = this;

    /**
     * Add events listeners
     */
    self.setupListener = function () {
        (0, _jquery2.default)(window).on('resize', self.showHeaderMenu);
        (0, _jquery2.default)('.mainPage').on('click', self.goToTop);
        (0, _jquery2.default)('.header__burger-menu__link').on('click', self.burgerMenu);
    };

    /**
     * Shows HeaderMenu
     */
    self.showHeaderMenu = function () {
        var headerMenu = (0, _jquery2.default)('.header__menu');

        if ((0, _jquery2.default)(window).width() >= '1024' && headerMenu.hasClass('header__menu_burger_active')) {
            headerMenu.removeClass('header__menu_burger_active');
            (0, _jquery2.default)('.header__burger-menu__link').removeClass('header__burger-menu__link_active');
        }
    };

    /**
     * Scroll Page to the Top
     * @param {Object} e
     */
    self.goToTop = function (e) {
        e.preventDefault();

        (0, _jquery2.default)('body, html').animate({ scrollTop: 0 }, 600);
    };

    /**
     * Shows burger-menu
     * @param {Object} e
     */
    self.burgerMenu = function (e) {
        e.preventDefault();

        if ((0, _jquery2.default)(this).hasClass('header__burger-menu__link_active')) {
            (0, _jquery2.default)(this).removeClass('header__burger-menu__link_active');
            (0, _jquery2.default)('.header__menu').removeClass('header__menu_burger_active');
            (0, _jquery2.default)('html').removeClass('fixed');
        } else {
            (0, _jquery2.default)(this).addClass('header__burger-menu__link_active');
            (0, _jquery2.default)('.header__menu').addClass('header__menu_burger_active');
            (0, _jquery2.default)('html').addClass('fixed');
        }
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

var header = new Header();

(0, _jquery2.default)(function () {
    return header.init();
});

/***/ }),

/***/ "./src/blocks/main/main.js":
/*!*********************************!*\
  !*** ./src/blocks/main/main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a new Main class.
 * @class
 */
var Main = function Main() {
    var self = this;

    self.window = (0, _jquery2.default)(window);
    self.html = (0, _jquery2.default)('html');
    self.body = (0, _jquery2.default)('body');
    self.modules = _jquery2.default.modules;

    /**
     * Init all modules in $.modules
     */
    self.initModules = function () {
        for (var module in self.modules) {

            if (self.modules.hasOwnProperty(module)) {

                if (typeof self.modules[module].init !== 'undefined' && module !== 'main') {

                    self.modules[module].init();
                }
            }
        }
    };

    /**
     * Init module
     */
    self.init = function () {
        self.initModules();
    };
};

if (!('modules' in _jquery2.default)) {
    _jquery2.default.modules = {};
}

_jquery2.default.modules.main = new Main();

exports.default = Main;

/***/ }),

/***/ "./src/blocks/menu/menu.js":
/*!*********************************!*\
  !*** ./src/blocks/menu/menu.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a new Menu class.
 * @class
 */
var Menu = function Menu() {
    var self = this;

    /**
     * Add events listeners
     */
    self.setupListener = function () {
        if (window.location.hash) {
            self.showSection(window.location.hash, false);
        }

        (0, _jquery2.default)(window).on('scroll', self.checkSection);

        (0, _jquery2.default)('.menu__link_landing').on('click', function (e) {
            e.preventDefault();

            if (!(0, _jquery2.default)('.header__menu').hasClass('header__menu_burger_active')) {
                self.showSection((0, _jquery2.default)(this).attr('href'), true);
            } else {
                self.showSection((0, _jquery2.default)(this).attr('href'), false);
            }
            (0, _jquery2.default)('html').removeClass('fixed');
            (0, _jquery2.default)('.header__burger-menu__link').removeClass('header__burger-menu__link_active');
            (0, _jquery2.default)('.header__menu').removeClass('header__menu_burger_active');
        });
    };

    /**
     * Check Section
     */
    self.checkSection = function () {
        (0, _jquery2.default)('section').each(function () {

            var $this = (0, _jquery2.default)(this);

            if ($this.data('section')) {

                var topEdge = $this.offset().top - 250;
                var bottomEdge = topEdge + $this.height();
                var wScroll = (0, _jquery2.default)(window).scrollTop();

                if (topEdge < wScroll && bottomEdge > wScroll) {
                    var currentId = $this.data('section');
                    var reqLink = (0, _jquery2.default)('.menu__link').filter('[href="#' + currentId + '"]');

                    reqLink.closest('.menu__item').addClass('menu__item_active').siblings().removeClass('menu__item_active');

                    if ($this.data('section') === 'main') {

                        var items = (0, _jquery2.default)('.menu__item');

                        items.removeClass('menu__item_active');
                    }
                }
            }
        });
    };

    /**
     * Show Section
     * @param {Object} section
     * @param {Object} isAnimate
     */
    self.showSection = function (section, isAnimate) {
        var direction = section.replace(/#/, '');
        var reqSection = (0, _jquery2.default)('section').filter('[data-section="' + direction + '"]');
        var reqSectionPos = reqSection.offset().top - (0, _jquery2.default)('.header').height();

        if (isAnimate) {
            (0, _jquery2.default)('body, html').animate({ scrollTop: reqSectionPos }, 600);
        } else {
            (0, _jquery2.default)('body, html').scrollTop(reqSectionPos);
        }
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

var menu = new Menu();

(0, _jquery2.default)(function () {
    return menu.init();
});

/***/ }),

/***/ "./src/js/core.js":
/*!************************!*\
  !*** ./src/js/core.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../blocks/header/header */ "./src/blocks/header/header.js");

__webpack_require__(/*! ../blocks/menu/menu */ "./src/blocks/menu/menu.js");

__webpack_require__(/*! ../blocks/main/main */ "./src/blocks/main/main.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGlicmFyeSIsIndlYnBhY2s6Ly8vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy9zcmMvYmxvY2tzL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jsb2Nrcy9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxpYnJhcnlcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9jb3JlLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWJyYXJ5ICovIFwiZGxsLXJlZmVyZW5jZSBsaWJyYXJ5XCIpKSgxKTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgSGVhZGVyIGNsYXNzLlxuICogQGNsYXNzXG4gKi9cbmNvbnN0IEhlYWRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50cyBsaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBzZWxmLnNldHVwTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgc2VsZi5zaG93SGVhZGVyTWVudSk7XG4gICAgICAgICQoJy5tYWluUGFnZScpLm9uKCdjbGljaycsIHNlbGYuZ29Ub1RvcCk7XG4gICAgICAgICQoJy5oZWFkZXJfX2J1cmdlci1tZW51X19saW5rJykub24oJ2NsaWNrJywgc2VsZi5idXJnZXJNZW51KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hvd3MgSGVhZGVyTWVudVxuICAgICAqL1xuICAgIHNlbGYuc2hvd0hlYWRlck1lbnUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGhlYWRlck1lbnUgPSAkKCcuaGVhZGVyX19tZW51Jyk7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49ICcxMDI0JyAmJiBoZWFkZXJNZW51Lmhhc0NsYXNzKCdoZWFkZXJfX21lbnVfYnVyZ2VyX2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBoZWFkZXJNZW51LnJlbW92ZUNsYXNzKCdoZWFkZXJfX21lbnVfYnVyZ2VyX2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmhlYWRlcl9fYnVyZ2VyLW1lbnVfX2xpbmsnKS5yZW1vdmVDbGFzcygnaGVhZGVyX19idXJnZXItbWVudV9fbGlua19hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgUGFnZSB0byB0aGUgVG9wXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICAgKi9cbiAgICBzZWxmLmdvVG9Ub3AgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKCdib2R5LCBodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgNjAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYnVyZ2VyLW1lbnVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZVxuICAgICAqL1xuICAgIHNlbGYuYnVyZ2VyTWVudSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdoZWFkZXJfX2J1cmdlci1tZW51X19saW5rX2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX2J1cmdlci1tZW51X19saW5rX2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLmhlYWRlcl9fbWVudScpLnJlbW92ZUNsYXNzKCdoZWFkZXJfX21lbnVfYnVyZ2VyX2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaGVhZGVyX19idXJnZXItbWVudV9fbGlua19hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy5oZWFkZXJfX21lbnUnKS5hZGRDbGFzcygnaGVhZGVyX19tZW51X2J1cmdlcl9hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0IG1vZHVsZVxuICAgICAqL1xuICAgIHNlbGYuaW5pdCA9ICgpID0+IHtcbiAgICAgICAgc2VsZi5zZXR1cExpc3RlbmVyKCk7XG4gICAgfTtcbn07XG5cbmlmICghKCdtb2R1bGVzJyBpbiAkKSkge1xuICAgICQubW9kdWxlcyA9IHt9O1xufVxuXG5jb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyKCk7XG5cbiQoKCkgPT4gaGVhZGVyLmluaXQoKSk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgTWFpbiBjbGFzcy5cbiAqIEBjbGFzc1xuICovXG5jb25zdCBNYWluID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBzZWxmLndpbmRvdyA9ICQod2luZG93KTtcbiAgICBzZWxmLmh0bWwgPSAkKCdodG1sJyk7XG4gICAgc2VsZi5ib2R5ID0gJCgnYm9keScpO1xuICAgIHNlbGYubW9kdWxlcyA9ICQubW9kdWxlcztcblxuICAgIC8qKlxuICAgICAqIEluaXQgYWxsIG1vZHVsZXMgaW4gJC5tb2R1bGVzXG4gICAgICovXG4gICAgc2VsZi5pbml0TW9kdWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBtb2R1bGUgaW4gc2VsZi5tb2R1bGVzKSB7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLm1vZHVsZXMuaGFzT3duUHJvcGVydHkobW9kdWxlKSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxmLm1vZHVsZXNbbW9kdWxlXS5pbml0ICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUgIT09ICdtYWluJykge1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9kdWxlc1ttb2R1bGVdLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdCBtb2R1bGVcbiAgICAgKi9cbiAgICBzZWxmLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5pbml0TW9kdWxlcygpO1xuICAgIH07XG59O1xuXG5pZiAoISgnbW9kdWxlcycgaW4gJCkpIHtcbiAgICAkLm1vZHVsZXMgPSB7fTtcbn1cblxuJC5tb2R1bGVzLm1haW4gPSBuZXcgTWFpbigpO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IE1lbnUgY2xhc3MuXG4gKiBAY2xhc3NcbiAqL1xuY29uc3QgTWVudSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50cyBsaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBzZWxmLnNldHVwTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICAgICAgICAgICAgc2VsZi5zaG93U2VjdGlvbih3aW5kb3cubG9jYXRpb24uaGFzaCwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBzZWxmLmNoZWNrU2VjdGlvbik7XG5cbiAgICAgICAgJCgnLm1lbnVfX2xpbmtfbGFuZGluZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCEkKCcuaGVhZGVyX19tZW51JykuaGFzQ2xhc3MoJ2hlYWRlcl9fbWVudV9idXJnZXJfYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dTZWN0aW9uKCQodGhpcykuYXR0cignaHJlZicpLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zaG93U2VjdGlvbigkKHRoaXMpLmF0dHIoJ2hyZWYnKSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgJCgnLmhlYWRlcl9fYnVyZ2VyLW1lbnVfX2xpbmsnKS5yZW1vdmVDbGFzcygnaGVhZGVyX19idXJnZXItbWVudV9fbGlua19hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy5oZWFkZXJfX21lbnUnKS5yZW1vdmVDbGFzcygnaGVhZGVyX19tZW51X2J1cmdlcl9hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIFNlY3Rpb25cbiAgICAgKi9cbiAgICBzZWxmLmNoZWNrU2VjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdzZWN0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgaWYgKCR0aGlzLmRhdGEoJ3NlY3Rpb24nKSkge1xuXG4gICAgICAgICAgICAgICAgbGV0IHRvcEVkZ2UgPSAkdGhpcy5vZmZzZXQoKS50b3AgLSAyNTA7XG4gICAgICAgICAgICAgICAgbGV0IGJvdHRvbUVkZ2UgPSB0b3BFZGdlICsgJHRoaXMuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgbGV0IHdTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodG9wRWRnZSA8IHdTY3JvbGwgJiYgYm90dG9tRWRnZSA+IHdTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9ICR0aGlzLmRhdGEoJ3NlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcUxpbmsgPSAkKCcubWVudV9fbGluaycpLmZpbHRlcignW2hyZWY9XCIjJyArIGN1cnJlbnRJZCArICdcIl0nKTtcblxuICAgICAgICAgICAgICAgICAgICByZXFMaW5rLmNsb3Nlc3QoJy5tZW51X19pdGVtJykuYWRkQ2xhc3MoJ21lbnVfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnbWVudV9faXRlbV9hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YSgnc2VjdGlvbicpID09PSAnbWFpbicpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gJCgnLm1lbnVfX2l0ZW0nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNob3cgU2VjdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGlzQW5pbWF0ZVxuICAgICAqL1xuICAgIHNlbGYuc2hvd1NlY3Rpb24gPSBmdW5jdGlvbihzZWN0aW9uLCBpc0FuaW1hdGUpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHNlY3Rpb24ucmVwbGFjZSgvIy8sICcnKTtcbiAgICAgICAgbGV0IHJlcVNlY3Rpb24gPSAkKCdzZWN0aW9uJykuZmlsdGVyKCdbZGF0YS1zZWN0aW9uPVwiJyArIGRpcmVjdGlvbiArICdcIl0nKTtcbiAgICAgICAgbGV0IHJlcVNlY3Rpb25Qb3MgPSByZXFTZWN0aW9uLm9mZnNldCgpLnRvcC0kKCcuaGVhZGVyJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGlzQW5pbWF0ZSkge1xuICAgICAgICAgICAgJCgnYm9keSwgaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogcmVxU2VjdGlvblBvc30sIDYwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCdib2R5LCBodG1sJykuc2Nyb2xsVG9wKHJlcVNlY3Rpb25Qb3MpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXQgbW9kdWxlXG4gICAgICovXG4gICAgc2VsZi5pbml0ID0gKCkgPT4ge1xuICAgICAgICBzZWxmLnNldHVwTGlzdGVuZXIoKTtcbiAgICB9O1xufTtcblxuaWYgKCEoJ21vZHVsZXMnIGluICQpKSB7XG4gICAgJC5tb2R1bGVzID0ge307XG59XG5cbmNvbnN0IG1lbnUgPSBuZXcgTWVudSgpO1xuXG4kKCgpID0+IG1lbnUuaW5pdCgpKTtcbiIsImltcG9ydCAnLi4vYmxvY2tzL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0ICcuLi9ibG9ja3MvbWVudS9tZW51JztcbmltcG9ydCAnLi4vYmxvY2tzL21haW4vbWFpbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxpYnJhcnk7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7Ozs7O0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBOzs7OztBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7Ozs7O0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FDRkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==