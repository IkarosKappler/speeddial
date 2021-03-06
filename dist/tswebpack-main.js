/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cjs/SpeedDial.js":
/*!******************************!*\
  !*** ./src/cjs/SpeedDial.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @author  Ikaros Kappler
 * @date    2021-12-08
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpeedDial = void 0;
var isMobileDevice_1 = __webpack_require__(/*! ./isMobileDevice */ "./src/cjs/isMobileDevice.js");
var BUTTON_SIZE = 40;
var GAP_SIZE = 4;
var SpeedDial = /** @class */ (function () {
    function SpeedDial() {
        var isMobile = typeof isMobileDevice_1.isMobileDevice === "function" && (0, isMobileDevice_1.isMobileDevice)();
        this.buttonSize = isMobile ? BUTTON_SIZE * 2 : BUTTON_SIZE;
        this.gapSize = isMobile ? GAP_SIZE * 2 : GAP_SIZE;
        this.rootNode = SpeedDial.createRootNode(this);
        document.querySelector("body").appendChild(this.rootNode);
        this._buttons = [];
    }
    ;
    SpeedDial.prototype.addActionButton = function (label, onClick) {
        var buttonNode = SpeedDial.createButtonNode(this, onClick);
        var offset = this._buttons.length + 1;
        buttonNode.style["transform"] = "translate(0px,0px)";
        buttonNode.style["opacity"] = "0.0";
        buttonNode.style["transition"] = "opacity " + offset * 0.25 + "s, transform 0.5s";
        buttonNode.style["background-color"] = "rgb(206,0,192)";
        buttonNode.style["z-index"] = -offset; // Something smaller than 100
        buttonNode.innerHTML = label;
        this.rootNode.appendChild(buttonNode);
        this._buttons.push(buttonNode);
    };
    ;
    SpeedDial.showDial = function (dial) {
        dial.rootNode.style["overflow"] = "visible";
        dial.rootNode.style["height"] = "" + (dial._buttons.length + 1) * (dial.buttonSize + dial.gapSize) + "px";
        dial._buttons.forEach(function (buttonNode, index) {
            var offset = index + 1;
            buttonNode.style["opacity"] = "1.0";
            buttonNode.style["transform"] = "translate(0px,-" + offset * (dial.buttonSize + dial.gapSize) + "px)";
        });
    };
    ;
    SpeedDial.hideDial = function (dial) {
        // Activate this line to fade-out immediately
        // dial.rootNode.style["overflow"] = "hidden";
        dial.rootNode.style["height"] = "" + dial.buttonSize + "px";
        dial._buttons.forEach(function (buttonNode) {
            buttonNode.style["opacity"] = "0.0";
            buttonNode.style["transform"] = "translate(0px,0px)";
        });
    };
    ;
    SpeedDial.createRootNode = function (dial) {
        var node = document.createElement("div");
        node.style["position"] = "absolute";
        node.style["bottom"] = "0px";
        node.style["left"] = "50vw";
        node.style["transform"] = "translate(-50%, 0px)";
        node.style["width"] = "" + dial.buttonSize + "px";
        node.style["height"] = "" + dial.buttonSize + "px";
        node.style["border-radius"] = "" + dial.buttonSize / 2 + "px";
        node.style["border"] = "0";
        node.style["overflow"] = "hidden";
        node.style["z-index"] = "100";
        var buttonNode = SpeedDial.createButtonNode(dial, function () {
            console.log("click");
        });
        buttonNode.addEventListener("mouseenter", function () {
            SpeedDial.showDial(dial);
        });
        node.addEventListener("mouseleave", function () {
            SpeedDial.hideDial(dial);
        });
        buttonNode.addEventListener("click", function () {
            console.log("click");
        });
        node.appendChild(buttonNode);
        return node;
    };
    ;
    SpeedDial.createButtonNode = function (dial, onClick) {
        var buttonNode = document.createElement("button");
        buttonNode.style["position"] = "absolute";
        buttonNode.style["bottom"] = "0px";
        buttonNode.style["width"] = "" + dial.buttonSize + "px";
        buttonNode.style["height"] = "" + dial.buttonSize + "px";
        buttonNode.style["background-color"] = "rgb(0,128,192)";
        buttonNode.style["border-width"] = "0px";
        buttonNode.style["border-radius"] = "" + dial.buttonSize / 2 + "px";
        buttonNode.style["outline"] = "none";
        buttonNode.addEventListener("click", onClick);
        return buttonNode;
    };
    return SpeedDial;
}());
exports.SpeedDial = SpeedDial;
//# sourceMappingURL=SpeedDial.js.map

/***/ }),

/***/ "./src/cjs/isMobileDevice.js":
/*!***********************************!*\
  !*** ./src/cjs/isMobileDevice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


// http://detectmobilebrowsers.com/
// @date 2021-11-02
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isMobileDevice = void 0;
function isMobileDevice() {
    return (function (a) {
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)));
    })(navigator.userAgent || navigator.vendor || window.opera);
}
exports.isMobileDevice = isMobileDevice;
//# sourceMappingURL=isMobileDevice.js.map

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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/cjs/entry.js ***!
  \**************************/

/* Imports for webpack */

globalThis.isMobileDevice = (__webpack_require__(/*! ./isMobileDevice.js */ "./src/cjs/isMobileDevice.js").isMobileDevice);
globalThis.SpeedDial = (__webpack_require__(/*! ./SpeedDial.js */ "./src/cjs/SpeedDial.js").SpeedDial);

})();

/******/ })()
;
//# sourceMappingURL=tswebpack-main.js.map