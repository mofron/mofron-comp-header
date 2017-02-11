require('mofron-layout-horizon');
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Header.js
	 * @brief  Header Component Class
	 * @author simpart
	 */
	mofron.comp.Header = function (_mofron$Component) {
	    _inherits(_class, _mofron$Component);

	    /**
	     * initialize component
	     *
	     * @param prm (object) Component
	     */
	    function _class(prm, opt) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, prm));

	            _this.name("Header");

	            _this.m_height = 50;
	            if (null !== opt) {
	                _this.option(opt);
	            }
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'initDomConts',
	        value: function initDomConts(prm) {
	            try {
	                /* set header dom contents */
	                var hdr = new mofron.util.Vdom('div', this);
	                this.vdom().addChild(hdr);
	                this.vdom().addChild(new mofron.util.Vdom('div', this));
	                this.target(hdr);

	                /* set style */
	                hdr.style('width', '100%');
	                hdr.style('border-bottom', 'solid 1px lightgray');

	                /* set default height */
	                this.height(this.height());

	                /* child comp is added at horizon layout */
	                this.addLayout(new mofron.layout.Horizon());

	                /* set child component */
	                if (null !== prm && 'object' === (typeof prm === 'undefined' ? 'undefined' : _typeof(prm))) {
	                    this.addChild(prm);
	                }

	                /* set theme color */
	                var clr = this.theme().getColor(0);
	                if (null != clr) {
	                    this.color(clr);
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getEventTgt',
	        value: function getEventTgt() {
	            try {
	                return this.vdom();
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }

	        /**
	         * set/get header height
	         *
	         * @param hei : (int) height (px)
	         */

	    }, {
	        key: 'height',
	        value: function height(val) {
	            try {
	                if (undefined === val) {
	                    return this.m_height;
	                }

	                if ('number' !== typeof val || 0 > val) {
	                    throw new Error('invalid parameter');
	                }

	                if (null === this.vdom()) {
	                    this.m_height = val;
	                    return;
	                }

	                this.target().style('height', val + 'px');
	                this.vdom().getChild(1).style('height', val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }

	        /**
	         * set header background color
	         *
	         * clr : (object) color
	         */

	    }, {
	        key: 'color',
	        value: function color(clr) {
	            try {
	                if (undefined === clr) {
	                    return mofron.func.getColorObj(this.style('background'));
	                }

	                if (null === clr || 'object' !== (typeof clr === 'undefined' ? 'undefined' : _typeof(clr))) {
	                    throw new Error('invalid parameter');
	                }
	                this.style('background', clr.getStyle());
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.Component);

/***/ }
/******/ ]);
