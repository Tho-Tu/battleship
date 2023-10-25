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

body {
  background-color: #0f172a;
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
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE;gFAC8E;AAChF;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;AACA;;EAEE,gCAAgC;EAChC,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,eAAe;EACf,kCAAkC;EAClC,2EAA2E;EAC3E;;2CAEyC;EACzC,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,qCAAqC;EACrC,uDAAuD;AACzD;;AAEA;EACE;qEACmE;EACnE,2BAA2B;AAC7B;AACA;EACE,qCAAqC;EACrC,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;;EAET,aAAa;AACf;;AAEA;EACE,2CAA2C;AAC7C;AACA;EACE,4CAA4C;AAC9C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,2CAA2C;AAC7C;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,uBAAuB;AACzB;;AAEA;EACE;IACE,0BAA0B;IAC1B,UAAU;EACZ;EACA;IACE,wBAAwB;IACxB,UAAU;EACZ;AACF","sourcesContent":[":root {\n  --font-default: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #0f172a;\n}\nbody,\nbutton {\n  font-family: var(--font-default);\n  margin: 0;\n}\n\nbutton {\n  display: inline-block;\n  outline: 0;\n  border: 0;\n  cursor: pointer;\n  will-change: box-shadow, transform;\n  background: radial-gradient(100% 100% at 100% 0%, #89e5ff 0%, #5468ff 100%);\n  box-shadow: 0px 2px 4px rgb(45 35 66 / 40%),\n    0px 7px 13px -3px rgb(45 35 66 / 30%),\n    inset 0px -3px 0px rgb(58 65 111 / 50%);\n  padding: 0 32px;\n  border-radius: 6px;\n  color: #fff;\n  height: 48px;\n  font-size: 18px;\n  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);\n  transition: box-shadow 0.15s ease, transform 0.15s ease;\n}\n\nbutton:hover {\n  box-shadow: 0px 4px 8px rgb(45 35 66 / 40%),\n    0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #3c4fe0;\n  transform: translateY(-1px);\n}\nbutton:active {\n  box-shadow: inset 0px 3px 7px #3c4fe0;\n  transform: translateY(-1px);\n}\n\n.root {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  height: 100vh;\n  padding: 2rem;\n  color: white;\n}\n\n.content {\n  display: flex;\n  gap: 2rem;\n  flex-flow: wrap;\n}\n\n.player {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\n.enemy {\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n\n  display: none;\n}\n\n.player-squares {\n  box-shadow: -10px -8px 0px rgb(167 243 208);\n}\n.enemy-squares {\n  box-shadow: 10px -8px 0px rgb(253, 151, 138);\n}\n\n.row {\n  display: flex;\n}\n\n.grids {\n  height: 2.5rem;\n  width: 2.5rem;\n  background-color: #f1f5f9;\n  border: 1px solid black;\n  transition: background-color 0.15s ease-out;\n}\n\n.hit {\n  background-color: rgb(253, 151, 138);\n}\n\n.miss {\n  background-color: #64748b;\n}\n\n.ship {\n  background-color: rgb(167 243 208);\n}\n\n.play-again {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.visible {\n  display: flex;\n  animation: enemy-slide-in 0.8s ease-out 1 normal;\n  transform-origin: right;\n}\n\n@keyframes enemy-slide-in {\n  from {\n    transform: translateX(50%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(1);\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1mb250LWRlZmF1bHQ6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXG4gICAgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcbn1cbmJvZHksXG5idXR0b24ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1kZWZhdWx0KTtcbiAgbWFyZ2luOiAwO1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdywgdHJhbnNmb3JtO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTAwJSAxMDAlIGF0IDEwMCUgMCUsICM4OWU1ZmYgMCUsICM1NDY4ZmYgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYig0NSAzNSA2NiAvIDQwJSksXG4gICAgMHB4IDdweCAxM3B4IC0zcHggcmdiKDQ1IDM1IDY2IC8gMzAlKSxcbiAgICBpbnNldCAwcHggLTNweCAwcHggcmdiKDU4IDY1IDExMSAvIDUwJSk7XG4gIHBhZGRpbmc6IDAgMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYigwIDAgMCAvIDQwJSk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgZWFzZSwgdHJhbnNmb3JtIDAuMTVzIGVhc2U7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYig0NSAzNSA2NiAvIDQwJSksXG4gICAgMHB4IDdweCAxM3B4IC0zcHggcmdiKDQ1IDM1IDY2IC8gMzAlKSwgaW5zZXQgMHB4IC0zcHggMHB4ICMzYzRmZTA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cbmJ1dHRvbjphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggM3B4IDdweCAjM2M0ZmUwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5yb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xuICBmbGV4LWZsb3c6IHdyYXA7XG59XG5cbi5wbGF5ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5lbmVteSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcblxuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGxheWVyLXNxdWFyZXMge1xuICBib3gtc2hhZG93OiAtMTBweCAtOHB4IDBweCByZ2IoMTY3IDI0MyAyMDgpO1xufVxuLmVuZW15LXNxdWFyZXMge1xuICBib3gtc2hhZG93OiAxMHB4IC04cHggMHB4IHJnYigyNTMsIDE1MSwgMTM4KTtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ncmlkcyB7XG4gIGhlaWdodDogMi41cmVtO1xuICB3aWR0aDogMi41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLW91dDtcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDE1MSwgMTM4KTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcgMjQzIDIwOCk7XG59XG5cbi5wbGF5LWFnYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZpc2libGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbmltYXRpb246IGVuZW15LXNsaWRlLWluIDAuOHMgZWFzZS1vdXQgMSBub3JtYWw7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIGVuZW15LXNsaWRlLWluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7Z0ZBQzhFO0FBQ2hGOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsZ0NBQWdDO0VBQ2hDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsMkVBQTJFO0VBQzNFOzsyQ0FFeUM7RUFDekMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0U7cUVBQ21FO0VBQ25FLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUzs7RUFFVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1mb250LWRlZmF1bHQ6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcXG59XFxuYm9keSxcXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZGVmYXVsdCk7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csIHRyYW5zZm9ybTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDAlIDEwMCUgYXQgMTAwJSAwJSwgIzg5ZTVmZiAwJSwgIzU0NjhmZiAxMDAlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYig0NSAzNSA2NiAvIDQwJSksXFxuICAgIDBweCA3cHggMTNweCAtM3B4IHJnYig0NSAzNSA2NiAvIDMwJSksXFxuICAgIGluc2V0IDBweCAtM3B4IDBweCByZ2IoNTggNjUgMTExIC8gNTAlKTtcXG4gIHBhZGRpbmc6IDAgMzJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiKDAgMCAwIC8gNDAlKTtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgZWFzZSwgdHJhbnNmb3JtIDAuMTVzIGVhc2U7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCByZ2IoNDUgMzUgNjYgLyA0MCUpLFxcbiAgICAwcHggN3B4IDEzcHggLTNweCByZ2IoNDUgMzUgNjYgLyAzMCUpLCBpbnNldCAwcHggLTNweCAwcHggIzNjNGZlMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG59XFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggM3B4IDdweCAjM2M0ZmUwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4ucm9vdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG4gIGZsZXgtZmxvdzogd3JhcDtcXG59XFxuXFxuLnBsYXllciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5lbmVteSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wbGF5ZXItc3F1YXJlcyB7XFxuICBib3gtc2hhZG93OiAtMTBweCAtOHB4IDBweCByZ2IoMTY3IDI0MyAyMDgpO1xcbn1cXG4uZW5lbXktc3F1YXJlcyB7XFxuICBib3gtc2hhZG93OiAxMHB4IC04cHggMHB4IHJnYigyNTMsIDE1MSwgMTM4KTtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ3JpZHMge1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICB3aWR0aDogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLW91dDtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAxNTEsIDEzOCk7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcgMjQzIDIwOCk7XFxufVxcblxcbi5wbGF5LWFnYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFuaW1hdGlvbjogZW5lbXktc2xpZGUtaW4gMC44cyBlYXNlLW91dCAxIG5vcm1hbDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGVuZW15LXNsaWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IGF0dGFja0NvbnRyb2xsZXIgfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgeyByZW5kZXJQbGF5ZXJHYW1lR3JpZCwgcmVuZGVyRW5lbXlHYW1lR3JpZCwgZ2FtZUZpbmlzaGVkIH07XG5cbmNvbnN0IHBsYXllclNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1zcXVhcmVzXCIpO1xuY29uc3QgZW5lbXlTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbmVteS1zcXVhcmVzXCIpO1xubGV0IGdhbWVGaW5pc2hlZCA9IHsgc3RhdHVzOiBmYWxzZSB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplR2FtZShwbGF5ZXJHYW1lQm9hcmQsIGVuZW15R2FtZUJvYXJkKSB7XG4gIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1hZ2FpblwiKTtcbiAgY29uc3Qgd2lubmVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1hZ2FpbiBoMVwiKTtcbiAgY29uc3QgZW5kR2FtZURpc3BsYXkgPSB7IHBsYXlBZ2FpbkJ1dHRvbiwgd2lubmVyVGV4dCB9O1xuXG4gIHJlbmRlclBsYXllckdhbWVHcmlkKHBsYXllckdhbWVCb2FyZCk7XG4gIHJlbmRlckVuZW15R2FtZUdyaWQoZW5lbXlHYW1lQm9hcmQsIHBsYXllckdhbWVCb2FyZCwgZW5kR2FtZURpc3BsYXkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJHYW1lR3JpZChnYW1lQm9hcmQpIHtcbiAgcGxheWVyU3F1YXJlcy50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGxldCBncmlkU2l6ZSA9IGdhbWVCb2FyZC5nZXRHYW1lR3JpZCgpLmxlbmd0aDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJvd1wiKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JpZFNpemU7IGorKykge1xuICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBncmlkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZ3JpZHNcIik7XG5cbiAgICAgIHR5cGVvZiBnYW1lQm9hcmQuZ2V0R2FtZUdyaWQoKVtpXVtqXSA9PT0gXCJvYmplY3RcIlxuICAgICAgICA/IGdyaWQuY2xhc3NMaXN0LmFkZChcInNoaXBcIilcbiAgICAgICAgOiByZW5kZXJHcmlkQ29uZGl0aW9ucyhpLCBqLCBnYW1lQm9hcmQsIGdyaWQpO1xuXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgfVxuICAgIHBsYXllclNxdWFyZXMuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJFbmVteUdhbWVHcmlkKGVuZW15R2FtZUJvYXJkLCBwbGF5ZXJHYW1lQm9hcmQsIGVuZEdhbWVEaXNwbGF5KSB7XG4gIGVuZW15U3F1YXJlcy50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGxldCBncmlkU2l6ZSA9IGVuZW15R2FtZUJvYXJkLmdldEdhbWVHcmlkKCkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZFNpemU7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicm93XCIpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkU2l6ZTsgaisrKSB7XG4gICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJncmlkc1wiKTtcbiAgICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGdhbWVGaW5pc2hlZC5zdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY29uc3QgYXR0YWNrID0gYXR0YWNrQ29udHJvbGxlcihcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgZW5lbXlHYW1lQm9hcmQsXG4gICAgICAgICAgICBwbGF5ZXJHYW1lQm9hcmRcbiAgICAgICAgICApO1xuICAgICAgICAgIHJlbmRlckdyaWRDb25kaXRpb25zKGksIGosIGVuZW15R2FtZUJvYXJkLCBncmlkKTtcbiAgICAgICAgICByZW5kZXJQbGF5ZXJHYW1lR3JpZChwbGF5ZXJHYW1lQm9hcmQpO1xuICAgICAgICAgIGlmIChhdHRhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZ2FtZUZpbmlzaGVkLnN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICBlbmRHYW1lRGlzcGxheS5wbGF5QWdhaW5CdXR0b24uc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogYmxvY2tcIjtcbiAgICAgICAgICAgIGVuZEdhbWVEaXNwbGF5Lndpbm5lclRleHQudGV4dENvbnRlbnQgPSBgJHthdHRhY2t9IWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVuZGVyR3JpZENvbmRpdGlvbnMoaSwgaiwgZW5lbXlHYW1lQm9hcmQsIGdyaWQpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIH1cbiAgICBlbmVteVNxdWFyZXMuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJHcmlkQ29uZGl0aW9ucyh5LCB4LCBnYW1lQm9hcmQsIGdyaWQpIHtcbiAgZ2FtZUJvYXJkLmdldEdhbWVHcmlkKClbeV1beF0gPT09IFwiaGl0XCJcbiAgICA/IGdyaWQuY2xhc3NMaXN0LmFkZChcImhpdFwiKVxuICAgIDogZ2FtZUJvYXJkLmdldEdhbWVHcmlkKClbeV1beF0gPT09IFwibWlzc1wiXG4gICAgPyBncmlkLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpXG4gICAgOiB1bmRlZmluZWQ7XG59XG4iLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVCb2FyZCgpIHtcbiAgbGV0IGdhbWVHcmlkID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IEFycmF5KDEwKSk7XG5cbiAgLy8gICBkZWZpbmUgc2hpcHNcbiAgbGV0IGFsbFNoaXBzID0gW107XG5cbiAgY29uc3QgZ2V0R2FtZUdyaWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdhbWVHcmlkO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgYWxsU2hpcHMgPSBbXTtcbiAgICBnYW1lR3JpZCA9IFsuLi5BcnJheSgxMCldLm1hcCgoKSA9PiBBcnJheSgxMCkpO1xuICB9O1xuXG4gIGNvbnN0IHZlcmlmeVBvc2l0aW9uID0gKHgsIHksIHNoaXAsIGRpcmVjdGlvbikgPT4ge1xuICAgIC8vIHZlcmlmeSB0aGF0IG5vIG90aGVyIHNoaXAgaXMgYXQgcG9zaXRpb24gYW5kIHNoaXAgZml0cyBpbnRvIGdyaWRcbiAgICBjb25zdCBncmlkU2l6ZSA9IGdhbWVHcmlkLmxlbmd0aDtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInZcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZ2FtZUdyaWRbeSArIGldW3hdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHggPj0gMCAmJiB4IDwgZ3JpZFNpemUgJiYgeSA+PSAwICYmIHkgKyBzaGlwLnNoaXBMZW5ndGggPD0gZ3JpZFNpemVcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiaFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChnYW1lR3JpZFt5XVt4ICsgaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgeCA+PSAwICYmIHggKyBzaGlwLnNoaXBMZW5ndGggPD0gZ3JpZFNpemUgJiYgeSA+PSAwICYmIHkgPCBncmlkU2l6ZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoeCwgeSwgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgaWYgKHZlcmlmeVBvc2l0aW9uKHgsIHksIHNoaXAsIGRpcmVjdGlvbikpIHtcbiAgICAgIGFsbFNoaXBzLnB1c2goc2hpcCk7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInZcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZ2FtZUdyaWRbeSArIGldW3hdID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgIGdhbWVHcmlkW3ldW3ggKyBpXSA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBnYW1lR3JpZFt5XVt4XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgZ2FtZUdyaWRbeV1beF0uaGl0KCk7XG4gICAgICBnYW1lR3JpZFt5XVt4XSA9IFwiaGl0XCI7XG4gICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICB9IGVsc2UgaWYgKGdhbWVHcmlkW3ldW3hdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGdhbWVHcmlkW3ldW3hdID0gXCJtaXNzXCI7XG4gICAgICByZXR1cm4gXCJtaXNzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNBbGxTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBhbGxTaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRHYW1lR3JpZCxcbiAgICByZXNldFNoaXBzLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGlzQWxsU3VuayxcbiAgfTtcbn1cbiIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGluaXRpYWxpemVHYW1lLCB7XG4gIHJlbmRlclBsYXllckdhbWVHcmlkLFxuICByZW5kZXJFbmVteUdhbWVHcmlkLFxuICBnYW1lRmluaXNoZWQsXG59IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xuXG5leHBvcnQgeyBhdHRhY2tDb250cm9sbGVyIH07XG5cbmZ1bmN0aW9uIGdhbWVTZXR1cCgpIHtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBbc2hpcCgyKSwgc2hpcCgzKSwgc2hpcCg0KSwgc2hpcCg1KV07XG4gIGNvbnN0IGVuZW15U2hpcHMgPSBbc2hpcCgyKSwgc2hpcCgzKSwgc2hpcCg0KSwgc2hpcCg1KV07XG5cbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gZ2FtZUJvYXJkKCk7XG4gIHJhbmRvbWl6ZUxheW91dChwbGF5ZXJHYW1lQm9hcmQsIHBsYXllclNoaXBzKTtcblxuICBjb25zdCBlbmVteUdhbWVCb2FyZCA9IGdhbWVCb2FyZCgpO1xuICByYW5kb21pemVMYXlvdXQoZW5lbXlHYW1lQm9hcmQsIGVuZW15U2hpcHMpO1xuXG4gIC8vcmVuZGVycyBlbXB0eSBib2FyZFxuICByZW5kZXJQbGF5ZXJHYW1lR3JpZChnYW1lQm9hcmQoKSk7XG5cbiAgcmV0dXJuIHsgcGxheWVyR2FtZUJvYXJkLCBlbmVteUdhbWVCb2FyZCwgcGxheWVyU2hpcHMgfTtcbn1cblxuZnVuY3Rpb24gcmFuZG9taXplTGF5b3V0KGdhbWVCb2FyZCwgc2hpcHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzaGlwID0gc2hpcHNbaV07XG4gICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgd2hpbGUgKGF0dGVtcHRzIDwgMTAwICYmICFwbGFjZWQpIHtcbiAgICAgIGxldCByYW5kRGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IFwidlwiIDogXCJoXCI7XG4gICAgICBsZXQgcmFuZFg7XG4gICAgICBsZXQgcmFuZFk7XG4gICAgICBpZiAocmFuZERpcmVjdGlvbiA9PT0gXCJ2XCIpIHtcbiAgICAgICAgcmFuZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHJhbmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYW5kWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpO1xuICAgICAgICByYW5kWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGdhbWVCb2FyZC5wbGFjZVNoaXAocmFuZFgsIHJhbmRZLCBzaGlwLCByYW5kRGlyZWN0aW9uKSkge1xuICAgICAgICBnYW1lQm9hcmQucGxhY2VTaGlwKHJhbmRYLCByYW5kWSwgc2hpcCwgcmFuZERpcmVjdGlvbik7XG4gICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBhdHRlbXB0cysrO1xuICAgIH1cbiAgICBpZiAoIXBsYWNlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gcGxhY2Ugc2hpcDpcIiwgc2hpcCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50SGFuZGxpbmcocGxheWVyR2FtZUJvYXJkLCBlbmVteUdhbWVCb2FyZCkge1xuICBjb25zdCB7IHBsYXllclNoaXBzIH0gPSBnYW1lU2V0dXAoKTtcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWdhbWVcIik7XG4gIGNvbnN0IHJhbmRvbWl6ZUxheW91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZG9taXplLWxheW91dFwiKTtcbiAgY29uc3QgZW5lbXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZW15XCIpO1xuXG4gIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1hZ2FpblwiKTtcbiAgY29uc3Qgd2lubmVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1hZ2FpbiBoMVwiKTtcblxuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGluaXRpYWxpemVHYW1lKHBsYXllckdhbWVCb2FyZCwgZW5lbXlHYW1lQm9hcmQpO1xuICAgIGVuZW15RGl2LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIHJhbmRvbWl6ZUxheW91dEJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBub25lXCI7XG4gICAgc3RhcnRCdXR0b24uc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogbm9uZVwiO1xuICB9KTtcblxuICByYW5kb21pemVMYXlvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwbGF5ZXJHYW1lQm9hcmQucmVzZXRTaGlwcygpO1xuICAgIHJhbmRvbWl6ZUxheW91dChwbGF5ZXJHYW1lQm9hcmQsIHBsYXllclNoaXBzKTtcbiAgICByZW5kZXJQbGF5ZXJHYW1lR3JpZChwbGF5ZXJHYW1lQm9hcmQpO1xuICB9KTtcblxuICBwbGF5QWdhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwbGF5ZXJHYW1lQm9hcmQucmVzZXRTaGlwcygpO1xuICAgIGVuZW15R2FtZUJvYXJkLnJlc2V0U2hpcHMoKTtcbiAgICBnYW1lQ29udHJvbGxlcigpO1xuICAgIGluaXRpYWxpemVHYW1lKHBsYXllckdhbWVCb2FyZCwgZW5lbXlHYW1lQm9hcmQpO1xuICAgIGdhbWVGaW5pc2hlZC5zdGF0dXMgPSBmYWxzZTtcbiAgICBzdGFydEJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBibG9ja1wiO1xuICAgIHJhbmRvbWl6ZUxheW91dEJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBibG9ja1wiO1xuICAgIGVuZW15RGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIHBsYXlBZ2FpbkJ1dHRvbi5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBub25lXCI7XG4gICAgd2lubmVyVGV4dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhdHRhY2tDb250cm9sbGVyKHgsIHksIGVuZW15R2FtZUJvYXJkLCBwbGF5ZXJHYW1lQm9hcmQpIHtcbiAgaWYgKGVuZW15R2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSkpIHtcbiAgICBlbmVteUdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIHBsYXllcihwbGF5ZXJHYW1lQm9hcmQpLm1ha2VNb3ZlKCk7XG4gIH1cbiAgaWYgKGVuZW15R2FtZUJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgcmV0dXJuIFwiUGxheWVyIFdpbnNcIjtcbiAgfVxuICBpZiAocGxheWVyR2FtZUJvYXJkLmlzQWxsU3VuaygpKSB7XG4gICAgcmV0dXJuIFwiRW5lbXkgV2luc1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKCkge1xuICBjb25zdCB7IHBsYXllckdhbWVCb2FyZCwgZW5lbXlHYW1lQm9hcmQgfSA9IGdhbWVTZXR1cCgpO1xuICBldmVudEhhbmRsaW5nKHBsYXllckdhbWVCb2FyZCwgZW5lbXlHYW1lQm9hcmQpO1xufVxuXG5nYW1lQ29udHJvbGxlcigpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxheWVyKGdhbWVCb2FyZCkge1xuICBjb25zdCByYW5kb20gPSAoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgfTtcblxuICBjb25zdCBtYWtlTW92ZSA9ICgpID0+IHtcbiAgICBsZXQgeCA9IHJhbmRvbSgpO1xuICAgIGxldCB5ID0gcmFuZG9tKCk7XG5cbiAgICBsZXQgYXR0YWNrID0gZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgaWYgKGF0dGFjayA9PT0gZmFsc2UpIHtcbiAgICAgIG1ha2VNb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IG1ha2VNb3ZlIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwKGxlbmd0aCkge1xuICBsZXQgc2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgbGV0IGhpdFBvaW50cyA9IGxlbmd0aDtcblxuICBjb25zdCBnZXRIaXRQb2ludHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdFBvaW50cztcbiAgfTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0UG9pbnRzIC09IDE7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRQb2ludHMgPD0gMDtcbiAgfTtcbiAgcmV0dXJuIHsgc2hpcExlbmd0aCwgZ2V0SGl0UG9pbnRzLCBoaXQsIGlzU3VuayB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=