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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/TypeJS.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/TypeJS.ts":
/*!**************************!*\
  !*** ./src/ts/TypeJS.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var UIController_1 = __webpack_require__(/*! ./classes/UIController */ "./src/ts/classes/UIController.ts");
var random_1 = __webpack_require__(/*! ./functions/random */ "./src/ts/functions/random.ts");
var TypeJS = /** @class */ (function () {
    function TypeJS(parentId, config) {
        this.startPermission = true;
        this.addPermissionF = false;
        this.deletePermission = false;
        this.addPermissionIn = false;
        this.config = config;
        this.parentId = parentId;
        this.addTextArr = this.config.add && this.config.add.text.split("");
        // Default values for the two config variable objects
        this.config.init.delay = !this.config.init.delay
            ? 1
            : this.config.init.delay;
        this.config.init.delayBetween = !this.config.init.delayBetween
            ? 50
            : this.config.init.delayBetween;
        this.config.cursorSpeed = !this.config.cursorSpeed
            ? 50
            : this.config.cursorSpeed;
        this.config.clearDelay = !this.config.clearDelay
            ? 1
            : this.config.clearDelay;
        if (this.config["delete"]) {
            this.config["delete"].delay = !this.config["delete"].delay
                ? this.config.init.delay
                : this.config["delete"].delay;
            this.config["delete"].delayBetween = !this.config["delete"].delayBetween
                ? this.config.init.delayBetween
                : this.config["delete"].delayBetween;
        }
        if (this.config.add) {
            this.config.add.delay = !this.config.add.delay
                ? this.config.init.delay
                : this.config.add.delay;
            this.config.add.delayBetween = !this.config.add.delayBetween
                ? this.config.init.delayBetween
                : this.config.add.delayBetween;
        }
        // use random numbers to avoid duplicate IDs
        this.uiConfig = {
            parentId: this.parentId,
            cursorId: "" + random_1["default"](0, 9999999999999),
            containerId: "" + random_1["default"](0, 9999999999999),
            textContainerId: "" + random_1["default"](0, 9999999999999)
        };
        this.ui = new UIController_1["default"](this.uiConfig);
    }
    TypeJS.prototype.init = function () {
        this.typeIt();
    };
    TypeJS.prototype.handle = function () {
        var _this = this;
        this.ui.createContainer();
        this.ui.createCursor(this.config.cursorSpeed);
        this.initTextArr = this.config.init.text.split("");
        window.setTimeout(function () {
            _this.ui.createContainer();
            _this.ui.createCursor(_this.config.cursorSpeed);
            _this.initTextArr.forEach(function (el, i) {
                window.setTimeout(function () {
                    _this.ui.addText(el);
                    // When it's ended writing
                    if (i === _this.config.init.text.length - 1) {
                        if (_this.config["delete"]) {
                            window.setTimeout(function () {
                                var _loop_1 = function (i_1) {
                                    window.setTimeout(function () {
                                        _this.ui.deleteText();
                                        if (i_1 === _this.config["delete"].count - 1 && _this.config.add)
                                            // let the addtext operation start
                                            _this.addPermissionF = true;
                                    }, i_1 * _this.config["delete"].delayBetween);
                                };
                                for (var i_1 = 0; i_1 < _this.config["delete"].count; i_1++) {
                                    _loop_1(i_1);
                                }
                            }, _this.config["delete"].delay);
                        }
                        else {
                            // let the addtext operation start
                            if (_this.config.add)
                                _this.addPermissionF = true;
                        }
                        if (_this.config.add) {
                            // check if it has permission to start
                            window.setInterval(function () {
                                if (_this.addPermissionF) {
                                    // we don't want the interval to go on forever
                                    _this.addPermissionF = false;
                                    window.setTimeout(function () {
                                        _this.addTextArr.forEach(function (el, i) {
                                            window.setTimeout(function () {
                                                _this.ui.addText(el);
                                            }, i * _this.config.add.delayBetween);
                                        });
                                    }, _this.config.add.delay);
                                }
                            }, 0);
                        }
                    }
                }, i * _this.config.init.delayBetween);
            });
        }, this.config.init.delay);
    };
    TypeJS.prototype.handleInfinite = function () {
        var _this = this;
        window.setInterval(function () {
            if (_this.startPermission) {
                _this.initTextArr = _this.config.init.text.split("");
                // we don't want this to repeat forever unless it's become true in the set timeout
                _this.startPermission = false;
                _this.ui.createContainer();
                _this.ui.createCursor(_this.config.cursorSpeed);
                window.setTimeout(function () {
                    _this.initTextArr.forEach(function (el, i) {
                        window.setTimeout(function () {
                            _this.ui.addText(el);
                            // if it's finished writing
                            if (_this.initTextArr.length - 1 === i) {
                                if (_this.config["delete"]) {
                                    window.setTimeout(function () {
                                        var _loop_2 = function (i_2) {
                                            window.setTimeout(function () {
                                                _this.ui.deleteText();
                                                if (i_2 === _this.config["delete"].count - 1 &&
                                                    _this.config.add) {
                                                    if (!_this.config.infinite.deleteInfinite) {
                                                        var temp = _this.config.init.text.split("");
                                                        temp.splice(temp.length - _this.config["delete"].count, temp.length);
                                                        _this.config.init.text = temp
                                                            .toString()
                                                            .replace(/,/g, "");
                                                        _this.initTextArr = _this.config.init.text.split("");
                                                        _this.config["delete"] = null;
                                                    }
                                                    _this.addPermissionIn = true;
                                                }
                                            }, _this.config["delete"].delayBetween * i_2);
                                        };
                                        for (var i_2 = 0; i_2 < _this.config["delete"].count; i_2++) {
                                            _loop_2(i_2);
                                        }
                                    }, _this.config["delete"].delay);
                                }
                                else {
                                    if (_this.config.add) {
                                        _this.deletePermission = false;
                                        _this.addPermissionIn = true;
                                    }
                                    else
                                        _this.deletePermission = true;
                                }
                                if (_this.config.add) {
                                    window.setInterval(function () {
                                        if (_this.addPermissionIn === true) {
                                            _this.addPermissionIn = false;
                                            window.setTimeout(function () {
                                                _this.addTextArr.forEach(function (el, i) {
                                                    window.setTimeout(function () {
                                                        _this.ui.addText(el);
                                                        if (_this.addTextArr.length - 1 === i) {
                                                            if (!_this.config.infinite.addInfinite) {
                                                                _this.config.init.text = "" + _this.config.init.text + _this.config.add.text;
                                                                _this.initTextArr = _this.config.init.text.split("");
                                                                _this.config.add = null;
                                                            }
                                                            _this.deletePermission = true;
                                                        }
                                                    }, i * _this.config.add.delayBetween);
                                                });
                                            }, _this.config.add.delay);
                                        }
                                    }, 0);
                                }
                                else {
                                    _this.deletePermission = true;
                                }
                                // clear it
                                var clear_1 = window.setInterval(function () {
                                    // if there is no deleting or adding text and or it's finished
                                    if (_this.deletePermission) {
                                        // we don't went this operation to go on forever
                                        _this.deletePermission = false;
                                        window.setTimeout(function () {
                                            _this.ui.clear();
                                            // now repeat the operation
                                            _this.startPermission = true;
                                            window.clearInterval(clear_1);
                                        }, _this.config.clearDelay);
                                    }
                                }, 0);
                            }
                        }, i * _this.config.init.delayBetween);
                    });
                }, _this.config.init.delay);
            }
        }, 0);
    };
    TypeJS.prototype.typeIt = function () {
        if (this.config.infinite) {
            this.handleInfinite();
        }
        else {
            this.handle();
        }
    };
    return TypeJS;
}());
exports["default"] = TypeJS;


/***/ }),

/***/ "./src/ts/classes/UIController.ts":
/*!****************************************!*\
  !*** ./src/ts/classes/UIController.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var UIController = /** @class */ (function () {
    function UIController(config) {
        this.config = config;
    }
    UIController.prototype.createCursor = function (speed) {
        var cursor = document.createElement("span");
        cursor.id = this.config.cursorId;
        cursor.textContent = "|";
        cursor.setAttribute("style", "animation:cursorAnimation " + speed / 100 + "s infinite;");
        if (document.getElementById(this.config.cursorId))
            document.getElementById(this.config.cursorId).remove();
        document.getElementById(this.config.containerId).appendChild(cursor);
    };
    UIController.prototype.createTextContainer = function () {
        var textContainer = document.createElement("span");
        textContainer.id = this.config.textContainerId;
        document.getElementById(this.config.containerId).appendChild(textContainer);
    };
    UIController.prototype.addText = function (text) {
        var textContainer = document.getElementById(this.config.textContainerId);
        textContainer.textContent = "" + textContainer.textContent + text;
    };
    UIController.prototype.deleteText = function () {
        document.getElementById(this.config.textContainerId).textContent = document
            .getElementById(this.config.textContainerId)
            .textContent.slice(0, document.getElementById(this.config.textContainerId).textContent
            .length - 1);
    };
    UIController.prototype.clear = function () {
        if (document.getElementById(this.config.cursorId))
            document.getElementById(this.config.cursorId).remove();
        if (document.getElementById(this.config.textContainerId))
            document.getElementById(this.config.textContainerId).remove();
    };
    UIController.prototype.createContainer = function () {
        var container = document.createElement("div");
        container.id = this.config.containerId;
        this.config.parentId.charAt(0) === "#"
            ? document
                .getElementById(this.config.parentId.slice(1, this.config.parentId.length))
                .appendChild(container)
            : document.querySelector(this.config.parentId).appendChild(container);
        this.createTextContainer();
    };
    return UIController;
}());
exports["default"] = UIController;


/***/ }),

/***/ "./src/ts/functions/random.ts":
/*!************************************!*\
  !*** ./src/ts/functions/random.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function random(from, to) {
    return Math.floor(Math.random() * to) + from;
}
exports["default"] = random;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL1R5cGVKUy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY2xhc3Nlcy9VSUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2Z1bmN0aW9ucy9yYW5kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsZ0VBQXdCO0FBQ3JELGVBQWUsbUJBQU8sQ0FBQyx3REFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLGlEQUFpRCxvQ0FBb0M7QUFDckY7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qyx5Q0FBeUM7QUFDekMscUNBQXFDO0FBQ3JDO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLHlEQUF5RCxvQ0FBb0M7QUFDN0Y7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxpREFBaUQ7QUFDakQsNkNBQTZDO0FBQzdDO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLGlDQUFpQztBQUNqQztBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDcE5hO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiVHlwZUpTLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvVHlwZUpTLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciBVSUNvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuL2NsYXNzZXMvVUlDb250cm9sbGVyXCIpO1xyXG52YXIgcmFuZG9tXzEgPSByZXF1aXJlKFwiLi9mdW5jdGlvbnMvcmFuZG9tXCIpO1xyXG52YXIgVHlwZUpTID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHlwZUpTKHBhcmVudElkLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UGVybWlzc2lvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hZGRQZXJtaXNzaW9uRiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlUGVybWlzc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkUGVybWlzc2lvbkluID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRJZCA9IHBhcmVudElkO1xyXG4gICAgICAgIHRoaXMuYWRkVGV4dEFyciA9IHRoaXMuY29uZmlnLmFkZCAmJiB0aGlzLmNvbmZpZy5hZGQudGV4dC5zcGxpdChcIlwiKTtcclxuICAgICAgICAvLyBEZWZhdWx0IHZhbHVlcyBmb3IgdGhlIHR3byBjb25maWcgdmFyaWFibGUgb2JqZWN0c1xyXG4gICAgICAgIHRoaXMuY29uZmlnLmluaXQuZGVsYXkgPSAhdGhpcy5jb25maWcuaW5pdC5kZWxheVxyXG4gICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgOiB0aGlzLmNvbmZpZy5pbml0LmRlbGF5O1xyXG4gICAgICAgIHRoaXMuY29uZmlnLmluaXQuZGVsYXlCZXR3ZWVuID0gIXRoaXMuY29uZmlnLmluaXQuZGVsYXlCZXR3ZWVuXHJcbiAgICAgICAgICAgID8gNTBcclxuICAgICAgICAgICAgOiB0aGlzLmNvbmZpZy5pbml0LmRlbGF5QmV0d2VlbjtcclxuICAgICAgICB0aGlzLmNvbmZpZy5jdXJzb3JTcGVlZCA9ICF0aGlzLmNvbmZpZy5jdXJzb3JTcGVlZFxyXG4gICAgICAgICAgICA/IDUwXHJcbiAgICAgICAgICAgIDogdGhpcy5jb25maWcuY3Vyc29yU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5jb25maWcuY2xlYXJEZWxheSA9ICF0aGlzLmNvbmZpZy5jbGVhckRlbGF5XHJcbiAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICA6IHRoaXMuY29uZmlnLmNsZWFyRGVsYXk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnW1wiZGVsZXRlXCJdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnW1wiZGVsZXRlXCJdLmRlbGF5ID0gIXRoaXMuY29uZmlnW1wiZGVsZXRlXCJdLmRlbGF5XHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuY29uZmlnLmluaXQuZGVsYXlcclxuICAgICAgICAgICAgICAgIDogdGhpcy5jb25maWdbXCJkZWxldGVcIl0uZGVsYXk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnW1wiZGVsZXRlXCJdLmRlbGF5QmV0d2VlbiA9ICF0aGlzLmNvbmZpZ1tcImRlbGV0ZVwiXS5kZWxheUJldHdlZW5cclxuICAgICAgICAgICAgICAgID8gdGhpcy5jb25maWcuaW5pdC5kZWxheUJldHdlZW5cclxuICAgICAgICAgICAgICAgIDogdGhpcy5jb25maWdbXCJkZWxldGVcIl0uZGVsYXlCZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuYWRkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmFkZC5kZWxheSA9ICF0aGlzLmNvbmZpZy5hZGQuZGVsYXlcclxuICAgICAgICAgICAgICAgID8gdGhpcy5jb25maWcuaW5pdC5kZWxheVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLmNvbmZpZy5hZGQuZGVsYXk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmFkZC5kZWxheUJldHdlZW4gPSAhdGhpcy5jb25maWcuYWRkLmRlbGF5QmV0d2VlblxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLmNvbmZpZy5pbml0LmRlbGF5QmV0d2VlblxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLmNvbmZpZy5hZGQuZGVsYXlCZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB1c2UgcmFuZG9tIG51bWJlcnMgdG8gYXZvaWQgZHVwbGljYXRlIElEc1xyXG4gICAgICAgIHRoaXMudWlDb25maWcgPSB7XHJcbiAgICAgICAgICAgIHBhcmVudElkOiB0aGlzLnBhcmVudElkLFxyXG4gICAgICAgICAgICBjdXJzb3JJZDogXCJcIiArIHJhbmRvbV8xW1wiZGVmYXVsdFwiXSgwLCA5OTk5OTk5OTk5OTk5KSxcclxuICAgICAgICAgICAgY29udGFpbmVySWQ6IFwiXCIgKyByYW5kb21fMVtcImRlZmF1bHRcIl0oMCwgOTk5OTk5OTk5OTk5OSksXHJcbiAgICAgICAgICAgIHRleHRDb250YWluZXJJZDogXCJcIiArIHJhbmRvbV8xW1wiZGVmYXVsdFwiXSgwLCA5OTk5OTk5OTk5OTk5KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51aSA9IG5ldyBVSUNvbnRyb2xsZXJfMVtcImRlZmF1bHRcIl0odGhpcy51aUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBUeXBlSlMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50eXBlSXQoKTtcclxuICAgIH07XHJcbiAgICBUeXBlSlMucHJvdG90eXBlLmhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudWkuY3JlYXRlQ29udGFpbmVyKCk7XHJcbiAgICAgICAgdGhpcy51aS5jcmVhdGVDdXJzb3IodGhpcy5jb25maWcuY3Vyc29yU3BlZWQpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRleHRBcnIgPSB0aGlzLmNvbmZpZy5pbml0LnRleHQuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy51aS5jcmVhdGVDb250YWluZXIoKTtcclxuICAgICAgICAgICAgX3RoaXMudWkuY3JlYXRlQ3Vyc29yKF90aGlzLmNvbmZpZy5jdXJzb3JTcGVlZCk7XHJcbiAgICAgICAgICAgIF90aGlzLmluaXRUZXh0QXJyLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudWkuYWRkVGV4dChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBpdCdzIGVuZGVkIHdyaXRpbmdcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gX3RoaXMuY29uZmlnLmluaXQudGV4dC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb25maWdbXCJkZWxldGVcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpXzEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudWkuZGVsZXRlVGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlfMSA9PT0gX3RoaXMuY29uZmlnW1wiZGVsZXRlXCJdLmNvdW50IC0gMSAmJiBfdGhpcy5jb25maWcuYWRkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgYWRkdGV4dCBvcGVyYXRpb24gc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGRQZXJtaXNzaW9uRiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGlfMSAqIF90aGlzLmNvbmZpZ1tcImRlbGV0ZVwiXS5kZWxheUJldHdlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaV8xID0gMDsgaV8xIDwgX3RoaXMuY29uZmlnW1wiZGVsZXRlXCJdLmNvdW50OyBpXzErKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKGlfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX3RoaXMuY29uZmlnW1wiZGVsZXRlXCJdLmRlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCB0aGUgYWRkdGV4dCBvcGVyYXRpb24gc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb25maWcuYWRkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZFBlcm1pc3Npb25GID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29uZmlnLmFkZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgaXQgaGFzIHBlcm1pc3Npb24gdG8gc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmFkZFBlcm1pc3Npb25GKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdGhlIGludGVydmFsIHRvIGdvIG9uIGZvcmV2ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkUGVybWlzc2lvbkYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkVGV4dEFyci5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudWkuYWRkVGV4dChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgaSAqIF90aGlzLmNvbmZpZy5hZGQuZGVsYXlCZXR3ZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBfdGhpcy5jb25maWcuYWRkLmRlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIGkgKiBfdGhpcy5jb25maWcuaW5pdC5kZWxheUJldHdlZW4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCB0aGlzLmNvbmZpZy5pbml0LmRlbGF5KTtcclxuICAgIH07XHJcbiAgICBUeXBlSlMucHJvdG90eXBlLmhhbmRsZUluZmluaXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnN0YXJ0UGVybWlzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaW5pdFRleHRBcnIgPSBfdGhpcy5jb25maWcuaW5pdC50ZXh0LnNwbGl0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0aGlzIHRvIHJlcGVhdCBmb3JldmVyIHVubGVzcyBpdCdzIGJlY29tZSB0cnVlIGluIHRoZSBzZXQgdGltZW91dFxyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RhcnRQZXJtaXNzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51aS5jcmVhdGVDb250YWluZXIoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVpLmNyZWF0ZUN1cnNvcihfdGhpcy5jb25maWcuY3Vyc29yU3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmluaXRUZXh0QXJyLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVpLmFkZFRleHQoZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQncyBmaW5pc2hlZCB3cml0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaW5pdFRleHRBcnIubGVuZ3RoIC0gMSA9PT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb25maWdbXCJkZWxldGVcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAoaV8yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy51aS5kZWxldGVUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpXzIgPT09IF90aGlzLmNvbmZpZ1tcImRlbGV0ZVwiXS5jb3VudCAtIDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbmZpZy5hZGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuY29uZmlnLmluZmluaXRlLmRlbGV0ZUluZmluaXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBfdGhpcy5jb25maWcuaW5pdC50ZXh0LnNwbGl0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAuc3BsaWNlKHRlbXAubGVuZ3RoIC0gX3RoaXMuY29uZmlnW1wiZGVsZXRlXCJdLmNvdW50LCB0ZW1wLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29uZmlnLmluaXQudGV4dCA9IHRlbXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLywvZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW5pdFRleHRBcnIgPSBfdGhpcy5jb25maWcuaW5pdC50ZXh0LnNwbGl0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbmZpZ1tcImRlbGV0ZVwiXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGRQZXJtaXNzaW9uSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX3RoaXMuY29uZmlnW1wiZGVsZXRlXCJdLmRlbGF5QmV0d2VlbiAqIGlfMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaV8yID0gMDsgaV8yIDwgX3RoaXMuY29uZmlnW1wiZGVsZXRlXCJdLmNvdW50OyBpXzIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9sb29wXzIoaV8yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX3RoaXMuY29uZmlnW1wiZGVsZXRlXCJdLmRlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb25maWcuYWRkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWxldGVQZXJtaXNzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGRQZXJtaXNzaW9uSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlbGV0ZVBlcm1pc3Npb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29uZmlnLmFkZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmFkZFBlcm1pc3Npb25JbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZFBlcm1pc3Npb25JbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkVGV4dEFyci5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVpLmFkZFRleHQoZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5hZGRUZXh0QXJyLmxlbmd0aCAtIDEgPT09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5jb25maWcuaW5maW5pdGUuYWRkSW5maW5pdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbmZpZy5pbml0LnRleHQgPSBcIlwiICsgX3RoaXMuY29uZmlnLmluaXQudGV4dCArIF90aGlzLmNvbmZpZy5hZGQudGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmluaXRUZXh0QXJyID0gX3RoaXMuY29uZmlnLmluaXQudGV4dC5zcGxpdChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbmZpZy5hZGQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlbGV0ZVBlcm1pc3Npb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGkgKiBfdGhpcy5jb25maWcuYWRkLmRlbGF5QmV0d2Vlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIF90aGlzLmNvbmZpZy5hZGQuZGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlbGV0ZVBlcm1pc3Npb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGVhciBpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjbGVhcl8xID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gZGVsZXRpbmcgb3IgYWRkaW5nIHRleHQgYW5kIG9yIGl0J3MgZmluaXNoZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmRlbGV0ZVBlcm1pc3Npb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdlbnQgdGhpcyBvcGVyYXRpb24gdG8gZ28gb24gZm9yZXZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVsZXRlUGVybWlzc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnVpLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm93IHJlcGVhdCB0aGUgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhcnRQZXJtaXNzaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChjbGVhcl8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIF90aGlzLmNvbmZpZy5jbGVhckRlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBpICogX3RoaXMuY29uZmlnLmluaXQuZGVsYXlCZXR3ZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIF90aGlzLmNvbmZpZy5pbml0LmRlbGF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfTtcclxuICAgIFR5cGVKUy5wcm90b3R5cGUudHlwZUl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5pbmZpbml0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUluZmluaXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gVHlwZUpTO1xyXG59KCkpO1xyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFR5cGVKUztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciBVSUNvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVSUNvbnRyb2xsZXIoY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICB9XHJcbiAgICBVSUNvbnRyb2xsZXIucHJvdG90eXBlLmNyZWF0ZUN1cnNvciA9IGZ1bmN0aW9uIChzcGVlZCkge1xyXG4gICAgICAgIHZhciBjdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBjdXJzb3IuaWQgPSB0aGlzLmNvbmZpZy5jdXJzb3JJZDtcclxuICAgICAgICBjdXJzb3IudGV4dENvbnRlbnQgPSBcInxcIjtcclxuICAgICAgICBjdXJzb3Iuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJhbmltYXRpb246Y3Vyc29yQW5pbWF0aW9uIFwiICsgc3BlZWQgLyAxMDAgKyBcInMgaW5maW5pdGU7XCIpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbmZpZy5jdXJzb3JJZCkpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29uZmlnLmN1cnNvcklkKS5yZW1vdmUoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbmZpZy5jb250YWluZXJJZCkuYXBwZW5kQ2hpbGQoY3Vyc29yKTtcclxuICAgIH07XHJcbiAgICBVSUNvbnRyb2xsZXIucHJvdG90eXBlLmNyZWF0ZVRleHRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0ZXh0Q29udGFpbmVyLmlkID0gdGhpcy5jb25maWcudGV4dENvbnRhaW5lcklkO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29uZmlnLmNvbnRhaW5lcklkKS5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcclxuICAgIH07XHJcbiAgICBVSUNvbnRyb2xsZXIucHJvdG90eXBlLmFkZFRleHQgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHZhciB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb25maWcudGV4dENvbnRhaW5lcklkKTtcclxuICAgICAgICB0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIiArIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgKyB0ZXh0O1xyXG4gICAgfTtcclxuICAgIFVJQ29udHJvbGxlci5wcm90b3R5cGUuZGVsZXRlVGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbmZpZy50ZXh0Q29udGFpbmVySWQpLnRleHRDb250ZW50ID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKHRoaXMuY29uZmlnLnRleHRDb250YWluZXJJZClcclxuICAgICAgICAgICAgLnRleHRDb250ZW50LnNsaWNlKDAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29uZmlnLnRleHRDb250YWluZXJJZCkudGV4dENvbnRlbnRcclxuICAgICAgICAgICAgLmxlbmd0aCAtIDEpO1xyXG4gICAgfTtcclxuICAgIFVJQ29udHJvbGxlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29uZmlnLmN1cnNvcklkKSlcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb25maWcuY3Vyc29ySWQpLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbmZpZy50ZXh0Q29udGFpbmVySWQpKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbmZpZy50ZXh0Q29udGFpbmVySWQpLnJlbW92ZSgpO1xyXG4gICAgfTtcclxuICAgIFVJQ29udHJvbGxlci5wcm90b3R5cGUuY3JlYXRlQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5pZCA9IHRoaXMuY29uZmlnLmNvbnRhaW5lcklkO1xyXG4gICAgICAgIHRoaXMuY29uZmlnLnBhcmVudElkLmNoYXJBdCgwKSA9PT0gXCIjXCJcclxuICAgICAgICAgICAgPyBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKHRoaXMuY29uZmlnLnBhcmVudElkLnNsaWNlKDEsIHRoaXMuY29uZmlnLnBhcmVudElkLmxlbmd0aCkpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb25maWcucGFyZW50SWQpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUZXh0Q29udGFpbmVyKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFVJQ29udHJvbGxlcjtcclxufSgpKTtcclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBVSUNvbnRyb2xsZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5mdW5jdGlvbiByYW5kb20oZnJvbSwgdG8pIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0bykgKyBmcm9tO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gcmFuZG9tO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9