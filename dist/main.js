/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --font-default: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

* {
  box-sizing: border-box;
}

body,
button {
  font-family: var(--font-default);
  margin: 0;
}

button {
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: radial-gradient(100% 100% at 100% 0%, #89e5ff 0%, #5468ff 100%);
  box-shadow: 0px 2px 4px rgb(45 35 66 / 40%),
    0px 7px 13px -3px rgb(45 35 66 / 30%),
    inset 0px -3px 0px rgb(58 65 111 / 50%);
  padding: 0 32px;
  border-radius: 6px;
  color: #fff;
  height: 48px;
  font-size: 18px;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

button:hover {
  box-shadow: 0px 4px 8px rgb(45 35 66 / 40%),
    0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #3c4fe0;
  transform: translateY(-1px);
}
button:active {
  box-shadow: inset 0px 3px 7px #3c4fe0;
  transform: translateY(-1px);
}

.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  height: 100vh;
  padding: 2rem;
  background-color: #0f172a;
  color: white;
}

.content {
  display: flex;
  gap: 2rem;
  flex-flow: wrap;
}

.player {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.enemy {
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  display: none;
}

.player-squares {
  box-shadow: -10px -8px 0px rgb(167 243 208);
}
.enemy-squares {
  box-shadow: 10px -8px 0px rgb(253, 151, 138);
}

.row {
  display: flex;
}

.grids {
  height: 2.5rem;
  width: 2.5rem;
  background-color: #f1f5f9;
  border: 1px solid black;
  transition: background-color 0.15s ease-out;
}

.hit {
  background-color: rgb(253, 151, 138);
}

.miss {
  background-color: #64748b;
}

.ship {
  background-color: rgb(167 243 208);
}

.play-again {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.visible {
  display: flex;
  animation: enemy-slide-in 0.8s ease-out 1 normal;
  transform-origin: right;
}

@keyframes enemy-slide-in {
  from {
    transform: translateX(50%);
    opacity: 0;
  }
  to {
    transform: translateX(1);
    opacity: 1;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE;gFAC8E;AAChF;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,gCAAgC;EAChC,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,eAAe;EACf,kCAAkC;EAClC,2EAA2E;EAC3E;;2CAEyC;EACzC,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,qCAAqC;EACrC,uDAAuD;AACzD;;AAEA;EACE;qEACmE;EACnE,2BAA2B;AAC7B;AACA;EACE,qCAAqC;EACrC,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,aAAa;EACb,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;;EAET,aAAa;AACf;;AAEA;EACE,2CAA2C;AAC7C;AACA;EACE,4CAA4C;AAC9C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,2CAA2C;AAC7C;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,uBAAuB;AACzB;;AAEA;EACE;IACE,0BAA0B;IAC1B,UAAU;EACZ;EACA;IACE,wBAAwB;IACxB,UAAU;EACZ;AACF","sourcesContent":[":root {\n  --font-default: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody,\nbutton {\n  font-family: var(--font-default);\n  margin: 0;\n}\n\nbutton {\n  display: inline-block;\n  outline: 0;\n  border: 0;\n  cursor: pointer;\n  will-change: box-shadow, transform;\n  background: radial-gradient(100% 100% at 100% 0%, #89e5ff 0%, #5468ff 100%);\n  box-shadow: 0px 2px 4px rgb(45 35 66 / 40%),\n    0px 7px 13px -3px rgb(45 35 66 / 30%),\n    inset 0px -3px 0px rgb(58 65 111 / 50%);\n  padding: 0 32px;\n  border-radius: 6px;\n  color: #fff;\n  height: 48px;\n  font-size: 18px;\n  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);\n  transition: box-shadow 0.15s ease, transform 0.15s ease;\n}\n\nbutton:hover {\n  box-shadow: 0px 4px 8px rgb(45 35 66 / 40%),\n    0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #3c4fe0;\n  transform: translateY(-1px);\n}\nbutton:active {\n  box-shadow: inset 0px 3px 7px #3c4fe0;\n  transform: translateY(-1px);\n}\n\n.root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  height: 100vh;\n  padding: 2rem;\n  background-color: #0f172a;\n  color: white;\n}\n\n.content {\n  display: flex;\n  gap: 2rem;\n  flex-flow: wrap;\n}\n\n.player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\n.enemy {\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n\n  display: none;\n}\n\n.player-squares {\n  box-shadow: -10px -8px 0px rgb(167 243 208);\n}\n.enemy-squares {\n  box-shadow: 10px -8px 0px rgb(253, 151, 138);\n}\n\n.row {\n  display: flex;\n}\n\n.grids {\n  height: 2.5rem;\n  width: 2.5rem;\n  background-color: #f1f5f9;\n  border: 1px solid black;\n  transition: background-color 0.15s ease-out;\n}\n\n.hit {\n  background-color: rgb(253, 151, 138);\n}\n\n.miss {\n  background-color: #64748b;\n}\n\n.ship {\n  background-color: rgb(167 243 208);\n}\n\n.play-again {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.visible {\n  display: flex;\n  animation: enemy-slide-in 0.8s ease-out 1 normal;\n  transform-origin: right;\n}\n\n@keyframes enemy-slide-in {\n  from {\n    transform: translateX(50%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(1);\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializeGame),
/* harmony export */   gameFinished: () => (/* binding */ gameFinished),
/* harmony export */   renderEnemyGameGrid: () => (/* binding */ renderEnemyGameGrid),
/* harmony export */   renderPlayerGameGrid: () => (/* binding */ renderPlayerGameGrid)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");







const playerSquares = document.querySelector(".player-squares");
const enemySquares = document.querySelector(".enemy-squares");
let gameFinished = { status: false };

function initializeGame(playerGameBoard, enemyGameBoard) {
  const playAgainButton = document.getElementById("play-again");
  const winnerText = document.querySelector(".play-again h1");
  const endGameDisplay = { playAgainButton, winnerText };

  renderPlayerGameGrid(playerGameBoard);
  renderEnemyGameGrid(enemyGameBoard, playerGameBoard, endGameDisplay);
}

function renderPlayerGameGrid(gameBoard) {
  playerSquares.textContent = "";
  let gridSize = gameBoard.getGameGrid().length;

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let j = 0; j < gridSize; j++) {
      const grid = document.createElement("div");
      grid.setAttribute("class", "grids");

      typeof gameBoard.getGameGrid()[i][j] === "object"
        ? grid.classList.add("ship")
        : renderGridConditions(i, j, gameBoard, grid);

      row.appendChild(grid);
    }
    playerSquares.appendChild(row);
  }
}

function renderEnemyGameGrid(enemyGameBoard, playerGameBoard, endGameDisplay) {
  enemySquares.textContent = "";
  let gridSize = enemyGameBoard.getGameGrid().length;

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let j = 0; j < gridSize; j++) {
      const grid = document.createElement("div");
      grid.setAttribute("class", "grids");
      grid.addEventListener("click", () => {
        if (gameFinished.status === false) {
          const attack = (0,___WEBPACK_IMPORTED_MODULE_3__.attackController)(
            j,
            i,
            enemyGameBoard,
            playerGameBoard
          );
          renderGridConditions(i, j, enemyGameBoard, grid);
          renderPlayerGameGrid(playerGameBoard);
          if (attack !== undefined) {
            gameFinished.status = true;
            endGameDisplay.playAgainButton.style.cssText = "display: block";
            endGameDisplay.winnerText.textContent = `${attack}!`;
          }
        }
      });

      renderGridConditions(i, j, enemyGameBoard, grid);
      row.appendChild(grid);
    }
    enemySquares.appendChild(row);
  }
}

function renderGridConditions(y, x, gameBoard, grid) {
  gameBoard.getGameGrid()[y][x] === "hit"
    ? grid.classList.add("hit")
    : gameBoard.getGameGrid()[y][x] === "miss"
    ? grid.classList.add("miss")
    : undefined;
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function gameBoard() {
  let gameGrid = [...Array(10)].map(() => Array(10));

  //   define ships
  let allShips = [];

  const getGameGrid = () => {
    return gameGrid;
  };

  const resetShips = () => {
    allShips = [];
    gameGrid = [...Array(10)].map(() => Array(10));
  };

  const verifyPosition = (x, y, ship, direction) => {
    // verify that no other ship is at position and ship fits into grid
    const gridSize = gameGrid.length;
    if (direction === "v") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (gameGrid[y + i][x] !== undefined) {
          return false;
        }
      }
      return (
        x >= 0 && x < gridSize && y >= 0 && y + ship.shipLength <= gridSize
      );
    } else if (direction === "h") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (gameGrid[y][x + i] !== undefined) {
          return false;
        }
      }
      return (
        x >= 0 && x + ship.shipLength <= gridSize && y >= 0 && y < gridSize
      );
    } else {
      return false;
    }
  };

  const placeShip = (x, y, ship, direction) => {
    if (verifyPosition(x, y, ship, direction)) {
      allShips.push(ship);
      if (direction === "v") {
        for (let i = 0; i < ship.shipLength; i++) {
          gameGrid[y + i][x] = ship;
        }
        return true;
      }

      if (direction === "h") {
        for (let i = 0; i < ship.shipLength; i++) {
          gameGrid[y][x + i] = ship;
        }
        return true;
      }
    } else {
      return false;
    }
  };

  const receiveAttack = (x, y) => {
    if (typeof gameGrid[y][x] === "object") {
      gameGrid[y][x].hit();
      gameGrid[y][x] = "hit";
      return "hit";
    } else if (gameGrid[y][x] === undefined) {
      gameGrid[y][x] = "miss";
      return "miss";
    } else {
      return false;
    }
  };

  const isAllSunk = () => {
    return allShips.every((ship) => ship.isSunk());
  };

  return {
    getGameGrid,
    resetShips,
    placeShip,
    receiveAttack,
    isAllSunk,
  };
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attackController: () => (/* binding */ attackController)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");








function gameSetup() {
  const playerShips = [(0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5)];
  const enemyShips = [(0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4), (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5)];

  const playerGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
  randomizeLayout(playerGameBoard, playerShips);

  const enemyGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
  randomizeLayout(enemyGameBoard, enemyShips);

  //renders empty board
  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderPlayerGameGrid)((0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])());

  return { playerGameBoard, enemyGameBoard, playerShips };
}

function randomizeLayout(gameBoard, ships) {
  for (let i = 0; i < ships.length; i++) {
    let ship = ships[i];
    let attempts = 0;
    let placed = false;
    while (attempts < 100 && !placed) {
      let randDirection = Math.random() > 0.5 ? "v" : "h";
      let randX;
      let randY;
      if (randDirection === "v") {
        randX = Math.floor(Math.random() * 10);
        randY = Math.floor(Math.random() * 6);
      } else {
        randX = Math.floor(Math.random() * 6);
        randY = Math.floor(Math.random() * 10);
      }

      if (gameBoard.placeShip(randX, randY, ship, randDirection)) {
        gameBoard.placeShip(randX, randY, ship, randDirection);
        placed = true;
      }
      attempts++;
    }
    if (!placed) {
      console.log("Failed to place ship:", ship);
    }
  }
}

function eventHandling(playerGameBoard, enemyGameBoard) {
  const { playerShips } = gameSetup();
  const startButton = document.getElementById("start-game");
  const randomizeLayoutButton = document.getElementById("randomize-layout");
  const enemyDiv = document.querySelector(".enemy");

  const playAgainButton = document.getElementById("play-again");
  const winnerText = document.querySelector(".play-again h1");

  startButton.addEventListener("click", () => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__["default"])(playerGameBoard, enemyGameBoard);
    enemyDiv.classList.add("visible");
    randomizeLayoutButton.style.cssText = "display: none";
    startButton.style.cssText = "display: none";
  });

  randomizeLayoutButton.addEventListener("click", () => {
    playerGameBoard.resetShips();
    randomizeLayout(playerGameBoard, playerShips);
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderPlayerGameGrid)(playerGameBoard);
  });

  playAgainButton.addEventListener("click", () => {
    playerGameBoard.resetShips();
    enemyGameBoard.resetShips();
    gameController();
    (0,_dom__WEBPACK_IMPORTED_MODULE_3__["default"])(playerGameBoard, enemyGameBoard);
    _dom__WEBPACK_IMPORTED_MODULE_3__.gameFinished.status = false;
    startButton.style.cssText = "display: block";
    randomizeLayoutButton.style.cssText = "display: block";
    enemyDiv.classList.remove("visible");
    playAgainButton.style.cssText = "display: none";
    winnerText.textContent = "";
  });
}

function attackController(x, y, enemyGameBoard, playerGameBoard) {
  if (enemyGameBoard.receiveAttack(x, y)) {
    enemyGameBoard.receiveAttack(x, y);
    (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(playerGameBoard).makeMove();
  }
  if (enemyGameBoard.isAllSunk()) {
    return "Player Wins";
  }
  if (playerGameBoard.isAllSunk()) {
    return "Enemy Wins";
  }
}

function gameController() {
  const { playerGameBoard, enemyGameBoard } = gameSetup();
  eventHandling(playerGameBoard, enemyGameBoard);
}

gameController();


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ player)
/* harmony export */ });
function player(gameBoard) {
  const random = () => {
    return Math.floor(Math.random() * 10);
  };

  const makeMove = () => {
    let x = random();
    let y = random();

    let attack = gameBoard.receiveAttack(x, y);
    if (attack === false) {
      makeMove();
    }
  };

  return { makeMove };
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ship)
/* harmony export */ });
function ship(length) {
  let shipLength = length;
  let hitPoints = length;

  const getHitPoints = () => {
    return hitPoints;
  };

  const hit = () => {
    hitPoints -= 1;
  };

  const isSunk = () => {
    return hitPoints <= 0;
  };
  return { shipLength, getHitPoints, hit, isSunk };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsWUFBWSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLGdDQUFnQyxzS0FBc0ssR0FBRyxPQUFPLDJCQUEyQixHQUFHLG1CQUFtQixxQ0FBcUMsY0FBYyxHQUFHLFlBQVksMEJBQTBCLGVBQWUsY0FBYyxvQkFBb0IsdUNBQXVDLGdGQUFnRiwwSUFBMEksb0JBQW9CLHVCQUF1QixnQkFBZ0IsaUJBQWlCLG9CQUFvQiwwQ0FBMEMsNERBQTRELEdBQUcsa0JBQWtCLHdIQUF3SCxnQ0FBZ0MsR0FBRyxpQkFBaUIsMENBQTBDLGdDQUFnQyxHQUFHLFdBQVcsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxrQkFBa0Isa0JBQWtCLDhCQUE4QixpQkFBaUIsR0FBRyxjQUFjLGtCQUFrQixjQUFjLG9CQUFvQixHQUFHLGFBQWEsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxHQUFHLFlBQVksMkJBQTJCLHdCQUF3QixjQUFjLG9CQUFvQixHQUFHLHFCQUFxQixnREFBZ0QsR0FBRyxrQkFBa0IsaURBQWlELEdBQUcsVUFBVSxrQkFBa0IsR0FBRyxZQUFZLG1CQUFtQixrQkFBa0IsOEJBQThCLDRCQUE0QixnREFBZ0QsR0FBRyxVQUFVLHlDQUF5QyxHQUFHLFdBQVcsOEJBQThCLEdBQUcsV0FBVyx1Q0FBdUMsR0FBRyxpQkFBaUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxjQUFjLGtCQUFrQixxREFBcUQsNEJBQTRCLEdBQUcsK0JBQStCLFVBQVUsaUNBQWlDLGlCQUFpQixLQUFLLFFBQVEsK0JBQStCLGlCQUFpQixLQUFLLEdBQUcscUJBQXFCO0FBQ2w2RztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3hJMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2IwQjtBQUNVO0FBQ047QUFDTzs7QUFFOEI7O0FBRW5FO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRU47QUFDZjtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0E7O0FBRUEsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTs7QUFFQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtREFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRjBCOztBQUVYO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEYwQjtBQUNVO0FBQ047QUFLZjtBQUNjOztBQUVEOztBQUU1QjtBQUNBLHVCQUF1QixpREFBSSxLQUFLLGlEQUFJLEtBQUssaURBQUksS0FBSyxpREFBSTtBQUN0RCxzQkFBc0IsaURBQUksS0FBSyxpREFBSSxLQUFLLGlEQUFJLEtBQUssaURBQUk7O0FBRXJELDBCQUEwQixzREFBUztBQUNuQzs7QUFFQSx5QkFBeUIsc0RBQVM7QUFDbEM7O0FBRUE7QUFDQSxFQUFFLDBEQUFvQixDQUFDLHNEQUFTOztBQUVoQyxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxnREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQW9CO0FBQ3hCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFjO0FBQ2xCLElBQUksOENBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsa0NBQWtDO0FBQzVDO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQy9HZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7Ozs7VUNoQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1mb250LWRlZmF1bHQ6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXG4gICAgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5LFxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZGVmYXVsdCk7XG4gIG1hcmdpbjogMDtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXI6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csIHRyYW5zZm9ybTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwMCUgMTAwJSBhdCAxMDAlIDAlLCAjODllNWZmIDAlLCAjNTQ2OGZmIDEwMCUpO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2IoNDUgMzUgNjYgLyA0MCUpLFxuICAgIDBweCA3cHggMTNweCAtM3B4IHJnYig0NSAzNSA2NiAvIDMwJSksXG4gICAgaW5zZXQgMHB4IC0zcHggMHB4IHJnYig1OCA2NSAxMTEgLyA1MCUpO1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2IoMCAwIDAgLyA0MCUpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzIGVhc2UsIHRyYW5zZm9ybSAwLjE1cyBlYXNlO1xufVxuXG5idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2IoNDUgMzUgNjYgLyA0MCUpLFxuICAgIDBweCA3cHggMTNweCAtM3B4IHJnYig0NSAzNSA2NiAvIDMwJSksIGluc2V0IDBweCAtM3B4IDBweCAjM2M0ZmUwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5idXR0b246YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDNweCA3cHggIzNjNGZlMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4ucm9vdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbiAgZmxleC1mbG93OiB3cmFwO1xufVxuXG4ucGxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uZW5lbXkge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG5cbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBsYXllci1zcXVhcmVzIHtcbiAgYm94LXNoYWRvdzogLTEwcHggLThweCAwcHggcmdiKDE2NyAyNDMgMjA4KTtcbn1cbi5lbmVteS1zcXVhcmVzIHtcbiAgYm94LXNoYWRvdzogMTBweCAtOHB4IDBweCByZ2IoMjUzLCAxNTEsIDEzOCk7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZ3JpZHMge1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1vdXQ7XG59XG5cbi5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAxNTEsIDEzOCk7XG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4Yjtcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3IDI0MyAyMDgpO1xufVxuXG4ucGxheS1hZ2FpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi52aXNpYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYW5pbWF0aW9uOiBlbmVteS1zbGlkZS1pbiAwLjhzIGVhc2Utb3V0IDEgbm9ybWFsO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbn1cblxuQGtleWZyYW1lcyBlbmVteS1zbGlkZS1pbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO2dGQUM4RTtBQUNoRjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGtDQUFrQztFQUNsQywyRUFBMkU7RUFDM0U7OzJDQUV5QztFQUN6QyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHFDQUFxQztFQUNyQyx1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRTtxRUFDbUU7RUFDbkUsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUzs7RUFFVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1mb250LWRlZmF1bHQ6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWRlZmF1bHQpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93LCB0cmFuc2Zvcm07XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTAwJSAxMDAlIGF0IDEwMCUgMCUsICM4OWU1ZmYgMCUsICM1NDY4ZmYgMTAwJSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2IoNDUgMzUgNjYgLyA0MCUpLFxcbiAgICAwcHggN3B4IDEzcHggLTNweCByZ2IoNDUgMzUgNjYgLyAzMCUpLFxcbiAgICBpbnNldCAwcHggLTNweCAwcHggcmdiKDU4IDY1IDExMSAvIDUwJSk7XFxuICBwYWRkaW5nOiAwIDMycHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogNDhweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYigwIDAgMCAvIDQwJSk7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzIGVhc2UsIHRyYW5zZm9ybSAwLjE1cyBlYXNlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiKDQ1IDM1IDY2IC8gNDAlKSxcXG4gICAgMHB4IDdweCAxM3B4IC0zcHggcmdiKDQ1IDM1IDY2IC8gMzAlKSwgaW5zZXQgMHB4IC0zcHggMHB4ICMzYzRmZTA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDNweCA3cHggIzNjNGZlMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XFxuXFxuLnJvb3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbiAgZmxleC1mbG93OiB3cmFwO1xcbn1cXG5cXG4ucGxheWVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmVuZW15IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcblxcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBsYXllci1zcXVhcmVzIHtcXG4gIGJveC1zaGFkb3c6IC0xMHB4IC04cHggMHB4IHJnYigxNjcgMjQzIDIwOCk7XFxufVxcbi5lbmVteS1zcXVhcmVzIHtcXG4gIGJveC1zaGFkb3c6IDEwcHggLThweCAwcHggcmdiKDI1MywgMTUxLCAxMzgpO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ncmlkcyB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2Utb3V0O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDE1MSwgMTM4KTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NyAyNDMgMjA4KTtcXG59XFxuXFxuLnBsYXktYWdhaW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYW5pbWF0aW9uOiBlbmVteS1zbGlkZS1pbiAwLjhzIGVhc2Utb3V0IDEgbm9ybWFsO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZW5lbXktc2xpZGUtaW4ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgYXR0YWNrQ29udHJvbGxlciB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCB7IHJlbmRlclBsYXllckdhbWVHcmlkLCByZW5kZXJFbmVteUdhbWVHcmlkLCBnYW1lRmluaXNoZWQgfTtcblxuY29uc3QgcGxheWVyU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXNxdWFyZXNcIik7XG5jb25zdCBlbmVteVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZW15LXNxdWFyZXNcIik7XG5sZXQgZ2FtZUZpbmlzaGVkID0geyBzdGF0dXM6IGZhbHNlIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVHYW1lKHBsYXllckdhbWVCb2FyZCwgZW5lbXlHYW1lQm9hcmQpIHtcbiAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5LWFnYWluXCIpO1xuICBjb25zdCB3aW5uZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5LWFnYWluIGgxXCIpO1xuICBjb25zdCBlbmRHYW1lRGlzcGxheSA9IHsgcGxheUFnYWluQnV0dG9uLCB3aW5uZXJUZXh0IH07XG5cbiAgcmVuZGVyUGxheWVyR2FtZUdyaWQocGxheWVyR2FtZUJvYXJkKTtcbiAgcmVuZGVyRW5lbXlHYW1lR3JpZChlbmVteUdhbWVCb2FyZCwgcGxheWVyR2FtZUJvYXJkLCBlbmRHYW1lRGlzcGxheSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllckdhbWVHcmlkKGdhbWVCb2FyZCkge1xuICBwbGF5ZXJTcXVhcmVzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbGV0IGdyaWRTaXplID0gZ2FtZUJvYXJkLmdldEdhbWVHcmlkKCkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZFNpemU7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicm93XCIpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkU2l6ZTsgaisrKSB7XG4gICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJncmlkc1wiKTtcblxuICAgICAgdHlwZW9mIGdhbWVCb2FyZC5nZXRHYW1lR3JpZCgpW2ldW2pdID09PSBcIm9iamVjdFwiXG4gICAgICAgID8gZ3JpZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKVxuICAgICAgICA6IHJlbmRlckdyaWRDb25kaXRpb25zKGksIGosIGdhbWVCb2FyZCwgZ3JpZCk7XG5cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChncmlkKTtcbiAgICB9XG4gICAgcGxheWVyU3F1YXJlcy5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckVuZW15R2FtZUdyaWQoZW5lbXlHYW1lQm9hcmQsIHBsYXllckdhbWVCb2FyZCwgZW5kR2FtZURpc3BsYXkpIHtcbiAgZW5lbXlTcXVhcmVzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbGV0IGdyaWRTaXplID0gZW5lbXlHYW1lQm9hcmQuZ2V0R2FtZUdyaWQoKS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkU2l6ZTsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJyb3dcIik7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRTaXplOyBqKyspIHtcbiAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdyaWRzXCIpO1xuICAgICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoZ2FtZUZpbmlzaGVkLnN0YXR1cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdCBhdHRhY2sgPSBhdHRhY2tDb250cm9sbGVyKFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBlbmVteUdhbWVCb2FyZCxcbiAgICAgICAgICAgIHBsYXllckdhbWVCb2FyZFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmVuZGVyR3JpZENvbmRpdGlvbnMoaSwgaiwgZW5lbXlHYW1lQm9hcmQsIGdyaWQpO1xuICAgICAgICAgIHJlbmRlclBsYXllckdhbWVHcmlkKHBsYXllckdhbWVCb2FyZCk7XG4gICAgICAgICAgaWYgKGF0dGFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBnYW1lRmluaXNoZWQuc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIGVuZEdhbWVEaXNwbGF5LnBsYXlBZ2FpbkJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBibG9ja1wiO1xuICAgICAgICAgICAgZW5kR2FtZURpc3BsYXkud2lubmVyVGV4dC50ZXh0Q29udGVudCA9IGAke2F0dGFja30hYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZW5kZXJHcmlkQ29uZGl0aW9ucyhpLCBqLCBlbmVteUdhbWVCb2FyZCwgZ3JpZCk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgfVxuICAgIGVuZW15U3F1YXJlcy5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckdyaWRDb25kaXRpb25zKHksIHgsIGdhbWVCb2FyZCwgZ3JpZCkge1xuICBnYW1lQm9hcmQuZ2V0R2FtZUdyaWQoKVt5XVt4XSA9PT0gXCJoaXRcIlxuICAgID8gZ3JpZC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpXG4gICAgOiBnYW1lQm9hcmQuZ2V0R2FtZUdyaWQoKVt5XVt4XSA9PT0gXCJtaXNzXCJcbiAgICA/IGdyaWQuY2xhc3NMaXN0LmFkZChcIm1pc3NcIilcbiAgICA6IHVuZGVmaW5lZDtcbn1cbiIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZUJvYXJkKCkge1xuICBsZXQgZ2FtZUdyaWQgPSBbLi4uQXJyYXkoMTApXS5tYXAoKCkgPT4gQXJyYXkoMTApKTtcblxuICAvLyAgIGRlZmluZSBzaGlwc1xuICBsZXQgYWxsU2hpcHMgPSBbXTtcblxuICBjb25zdCBnZXRHYW1lR3JpZCA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2FtZUdyaWQ7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRTaGlwcyA9ICgpID0+IHtcbiAgICBhbGxTaGlwcyA9IFtdO1xuICAgIGdhbWVHcmlkID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IEFycmF5KDEwKSk7XG4gIH07XG5cbiAgY29uc3QgdmVyaWZ5UG9zaXRpb24gPSAoeCwgeSwgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgLy8gdmVyaWZ5IHRoYXQgbm8gb3RoZXIgc2hpcCBpcyBhdCBwb3NpdGlvbiBhbmQgc2hpcCBmaXRzIGludG8gZ3JpZFxuICAgIGNvbnN0IGdyaWRTaXplID0gZ2FtZUdyaWQubGVuZ3RoO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IFwidlwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChnYW1lR3JpZFt5ICsgaV1beF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgeCA+PSAwICYmIHggPCBncmlkU2l6ZSAmJiB5ID49IDAgJiYgeSArIHNoaXAuc2hpcExlbmd0aCA8PSBncmlkU2l6ZVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGdhbWVHcmlkW3ldW3ggKyBpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICB4ID49IDAgJiYgeCArIHNoaXAuc2hpcExlbmd0aCA8PSBncmlkU2l6ZSAmJiB5ID49IDAgJiYgeSA8IGdyaWRTaXplXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBzaGlwLCBkaXJlY3Rpb24pID0+IHtcbiAgICBpZiAodmVyaWZ5UG9zaXRpb24oeCwgeSwgc2hpcCwgZGlyZWN0aW9uKSkge1xuICAgICAgYWxsU2hpcHMucHVzaChzaGlwKTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidlwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBnYW1lR3JpZFt5ICsgaV1beF0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZ2FtZUdyaWRbeV1beCArIGldID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAodHlwZW9mIGdhbWVHcmlkW3ldW3hdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBnYW1lR3JpZFt5XVt4XS5oaXQoKTtcbiAgICAgIGdhbWVHcmlkW3ldW3hdID0gXCJoaXRcIjtcbiAgICAgIHJldHVybiBcImhpdFwiO1xuICAgIH0gZWxzZSBpZiAoZ2FtZUdyaWRbeV1beF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgZ2FtZUdyaWRbeV1beF0gPSBcIm1pc3NcIjtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc0FsbFN1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFsbFNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEdhbWVHcmlkLFxuICAgIHJlc2V0U2hpcHMsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgaXNBbGxTdW5rLFxuICB9O1xufVxuIiwiaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgaW5pdGlhbGl6ZUdhbWUsIHtcbiAgcmVuZGVyUGxheWVyR2FtZUdyaWQsXG4gIHJlbmRlckVuZW15R2FtZUdyaWQsXG4gIGdhbWVGaW5pc2hlZCxcbn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5cbmV4cG9ydCB7IGF0dGFja0NvbnRyb2xsZXIgfTtcblxuZnVuY3Rpb24gZ2FtZVNldHVwKCkge1xuICBjb25zdCBwbGF5ZXJTaGlwcyA9IFtzaGlwKDIpLCBzaGlwKDMpLCBzaGlwKDQpLCBzaGlwKDUpXTtcbiAgY29uc3QgZW5lbXlTaGlwcyA9IFtzaGlwKDIpLCBzaGlwKDMpLCBzaGlwKDQpLCBzaGlwKDUpXTtcblxuICBjb25zdCBwbGF5ZXJHYW1lQm9hcmQgPSBnYW1lQm9hcmQoKTtcbiAgcmFuZG9taXplTGF5b3V0KHBsYXllckdhbWVCb2FyZCwgcGxheWVyU2hpcHMpO1xuXG4gIGNvbnN0IGVuZW15R2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG4gIHJhbmRvbWl6ZUxheW91dChlbmVteUdhbWVCb2FyZCwgZW5lbXlTaGlwcyk7XG5cbiAgLy9yZW5kZXJzIGVtcHR5IGJvYXJkXG4gIHJlbmRlclBsYXllckdhbWVHcmlkKGdhbWVCb2FyZCgpKTtcblxuICByZXR1cm4geyBwbGF5ZXJHYW1lQm9hcmQsIGVuZW15R2FtZUJvYXJkLCBwbGF5ZXJTaGlwcyB9O1xufVxuXG5mdW5jdGlvbiByYW5kb21pemVMYXlvdXQoZ2FtZUJvYXJkLCBzaGlwcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNoaXAgPSBzaGlwc1tpXTtcbiAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAoYXR0ZW1wdHMgPCAxMDAgJiYgIXBsYWNlZCkge1xuICAgICAgbGV0IHJhbmREaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gXCJ2XCIgOiBcImhcIjtcbiAgICAgIGxldCByYW5kWDtcbiAgICAgIGxldCByYW5kWTtcbiAgICAgIGlmIChyYW5kRGlyZWN0aW9uID09PSBcInZcIikge1xuICAgICAgICByYW5kWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgcmFuZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XG4gICAgICAgIHJhbmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2FtZUJvYXJkLnBsYWNlU2hpcChyYW5kWCwgcmFuZFksIHNoaXAsIHJhbmREaXJlY3Rpb24pKSB7XG4gICAgICAgIGdhbWVCb2FyZC5wbGFjZVNoaXAocmFuZFgsIHJhbmRZLCBzaGlwLCByYW5kRGlyZWN0aW9uKTtcbiAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGF0dGVtcHRzKys7XG4gICAgfVxuICAgIGlmICghcGxhY2VkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBwbGFjZSBzaGlwOlwiLCBzaGlwKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRIYW5kbGluZyhwbGF5ZXJHYW1lQm9hcmQsIGVuZW15R2FtZUJvYXJkKSB7XG4gIGNvbnN0IHsgcGxheWVyU2hpcHMgfSA9IGdhbWVTZXR1cCgpO1xuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtZ2FtZVwiKTtcbiAgY29uc3QgcmFuZG9taXplTGF5b3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb21pemUtbGF5b3V0XCIpO1xuICBjb25zdCBlbmVteURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5lbXlcIik7XG5cbiAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5LWFnYWluXCIpO1xuICBjb25zdCB3aW5uZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5LWFnYWluIGgxXCIpO1xuXG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW5pdGlhbGl6ZUdhbWUocGxheWVyR2FtZUJvYXJkLCBlbmVteUdhbWVCb2FyZCk7XG4gICAgZW5lbXlEaXYuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgcmFuZG9taXplTGF5b3V0QnV0dG9uLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IG5vbmVcIjtcbiAgICBzdGFydEJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBub25lXCI7XG4gIH0pO1xuXG4gIHJhbmRvbWl6ZUxheW91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBsYXllckdhbWVCb2FyZC5yZXNldFNoaXBzKCk7XG4gICAgcmFuZG9taXplTGF5b3V0KHBsYXllckdhbWVCb2FyZCwgcGxheWVyU2hpcHMpO1xuICAgIHJlbmRlclBsYXllckdhbWVHcmlkKHBsYXllckdhbWVCb2FyZCk7XG4gIH0pO1xuXG4gIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBsYXllckdhbWVCb2FyZC5yZXNldFNoaXBzKCk7XG4gICAgZW5lbXlHYW1lQm9hcmQucmVzZXRTaGlwcygpO1xuICAgIGdhbWVDb250cm9sbGVyKCk7XG4gICAgaW5pdGlhbGl6ZUdhbWUocGxheWVyR2FtZUJvYXJkLCBlbmVteUdhbWVCb2FyZCk7XG4gICAgZ2FtZUZpbmlzaGVkLnN0YXR1cyA9IGZhbHNlO1xuICAgIHN0YXJ0QnV0dG9uLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGJsb2NrXCI7XG4gICAgcmFuZG9taXplTGF5b3V0QnV0dG9uLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGJsb2NrXCI7XG4gICAgZW5lbXlEaXYuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgcGxheUFnYWluQnV0dG9uLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IG5vbmVcIjtcbiAgICB3aW5uZXJUZXh0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGF0dGFja0NvbnRyb2xsZXIoeCwgeSwgZW5lbXlHYW1lQm9hcmQsIHBsYXllckdhbWVCb2FyZCkge1xuICBpZiAoZW5lbXlHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KSkge1xuICAgIGVuZW15R2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgcGxheWVyKHBsYXllckdhbWVCb2FyZCkubWFrZU1vdmUoKTtcbiAgfVxuICBpZiAoZW5lbXlHYW1lQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICByZXR1cm4gXCJQbGF5ZXIgV2luc1wiO1xuICB9XG4gIGlmIChwbGF5ZXJHYW1lQm9hcmQuaXNBbGxTdW5rKCkpIHtcbiAgICByZXR1cm4gXCJFbmVteSBXaW5zXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2FtZUNvbnRyb2xsZXIoKSB7XG4gIGNvbnN0IHsgcGxheWVyR2FtZUJvYXJkLCBlbmVteUdhbWVCb2FyZCB9ID0gZ2FtZVNldHVwKCk7XG4gIGV2ZW50SGFuZGxpbmcocGxheWVyR2FtZUJvYXJkLCBlbmVteUdhbWVCb2FyZCk7XG59XG5cbmdhbWVDb250cm9sbGVyKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5ZXIoZ2FtZUJvYXJkKSB7XG4gIGNvbnN0IHJhbmRvbSA9ICgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VNb3ZlID0gKCkgPT4ge1xuICAgIGxldCB4ID0gcmFuZG9tKCk7XG4gICAgbGV0IHkgPSByYW5kb20oKTtcblxuICAgIGxldCBhdHRhY2sgPSBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICBpZiAoYXR0YWNrID09PSBmYWxzZSkge1xuICAgICAgbWFrZU1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgbWFrZU1vdmUgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXAobGVuZ3RoKSB7XG4gIGxldCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICBsZXQgaGl0UG9pbnRzID0gbGVuZ3RoO1xuXG4gIGNvbnN0IGdldEhpdFBvaW50cyA9ICgpID0+IHtcbiAgICByZXR1cm4gaGl0UG9pbnRzO1xuICB9O1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRQb2ludHMgLT0gMTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdFBvaW50cyA8PSAwO1xuICB9O1xuICByZXR1cm4geyBzaGlwTGVuZ3RoLCBnZXRIaXRQb2ludHMsIGhpdCwgaXNTdW5rIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==