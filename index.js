"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Blacked;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sw = {
  switchContainer: "lib-switch-switchContainer-2L9j",
  "switch": "lib-switch-switch-1PZx",
  slider: "lib-switch-slider-3Nkv",
  round: "lib-switch-round-3LHg"
};

require('load-styles')("/*  imported from switch.css  */\n\n.lib-switch-switchContainer-2L9j {\n  position: absolute;\n}\n\n.lib-switch-switch-1PZx {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n}\n\n.lib-switch-switch-1PZx input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.lib-switch-slider-3Nkv {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc !important;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.lib-switch-slider-3Nkv:before {\n  position: absolute;\n  content: \"\";\n  height: 22px;\n  width: 22px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white !important;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .lib-switch-slider-3Nkv {\n  background-color: #000 !important;\n}\n\ninput:focus + .lib-switch-slider-3Nkv {\n  box-shadow: 0 0 1px #000 !important;\n}\n\ninput:checked + .lib-switch-slider-3Nkv:before {\n  -webkit-transform: translateX(30px);\n  -ms-transform: translateX(30px);\n  transform: translateX(30px);\n}\n\n.lib-switch-slider-3Nkv.lib-switch-round-3LHg {\n  border-radius: 34px;\n}\n\n.lib-switch-slider-3Nkv.lib-switch-round-3LHg:before {\n  border-radius: 50%;\n}");

var dm = {
  dark: "lib-dark-mode-dark-1zjo",
  light: "lib-dark-mode-light-3FQn"
};

require('load-styles')("/*  imported from dark-mode.css  */\n\nbody.lib-dark-mode-dark-1zjo{\n    background-color: #282b34;\n    color: #fff;\n}\n\nbody.lib-dark-mode-dark-1zjo *{\n    background-color: #282b34;\n    color: #fff;\n}\n\nbody.lib-dark-mode-light-3FQn {\n    background-color: #fff;\n    color: #282b34;\n}\n\nbody.lib-dark-mode-light-3FQn *{\n    background-color: #fff;\n    color: #282b34;\n}");

function Blacked(props) {
  var initialMode = localStorage.getItem("mode") || "light";

  var _useState = (0, _react.useState)(initialMode),
      _useState2 = _slicedToArray(_useState, 2),
      mode = _useState2[0],
      setMode = _useState2[1];

  (0, _react.useEffect)(function () {
    if (localStorage.getItem("mode")) {
      var newMode = initialMode;
      setMode(newMode);
      document.body.classList.add(newMode === "light" ? dm.light : dm.dark);
      localStorage.setItem("mode", newMode);
    }
  }, []);

  var onModeChange = function onModeChange() {
    var newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
    document.body.classList.add(newMode === "light" ? dm.light : dm.dark);
    document.body.classList.remove(mode !== "light" ? dm.dark : dm.light);
  };

  var getSwitchStyle = function getSwitchStyle() {
    var position = props.position || "top-right";

    switch (position) {
      case "top-right":
        return {
          top: "1rem",
          right: "1rem"
        };

      case "top-left":
        return {
          top: "1rem",
          left: "1rem"
        };

      case "bottom-right":
        return {
          bottom: "1rem",
          right: "1rem"
        };

      case "bottom-left":
        return {
          bottom: "1rem",
          left: "1rem"
        };

      default:
        return {
          top: "1rem",
          right: "1rem"
        };
    }
  };

  var renderSwitch = function renderSwitch() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: getSwitchStyle(),
      className: "".concat(sw.switchContainer)
    }, /*#__PURE__*/_react["default"].createElement("label", {
      className: "".concat(sw["switch"])
    }, /*#__PURE__*/_react["default"].createElement("input", {
      onChange: onModeChange,
      checked: mode === "dark",
      type: "checkbox"
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(sw.slider, " ").concat(sw.round)
    })));
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, renderSwitch(), props.children);
}

Blacked.defaultProps = {
  position: "top-right"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQvQmxhY2tlZC5qcyJdLCJuYW1lcyI6WyJCbGFja2VkIiwicHJvcHMiLCJpbml0aWFsTW9kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtb2RlIiwic2V0TW9kZSIsIm5ld01vZGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJkbSIsImxpZ2h0IiwiZGFyayIsInNldEl0ZW0iLCJvbk1vZGVDaGFuZ2UiLCJyZW1vdmUiLCJnZXRTd2l0Y2hTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwicmVuZGVyU3dpdGNoIiwic3ciLCJzd2l0Y2hDb250YWluZXIiLCJzbGlkZXIiLCJyb3VuZCIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUllLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ25DLE1BQU1DLFdBQVcsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEtBQWdDLE9BQXBEOztBQURtQyxrQkFFWCxxQkFBU0YsV0FBVCxDQUZXO0FBQUE7QUFBQSxNQUU1QkcsSUFGNEI7QUFBQSxNQUV0QkMsT0FGc0I7O0FBSW5DLHdCQUFVLFlBQU07QUFDWixRQUFJSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztBQUM5QixVQUFNRyxPQUFPLEdBQUdMLFdBQWhCO0FBQ0FJLE1BQUFBLE9BQU8sQ0FBQ0MsT0FBRCxDQUFQO0FBQ0FDLE1BQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QkosT0FBTyxLQUFLLE9BQVosR0FBc0JLLEVBQUUsQ0FBQ0MsS0FBekIsR0FBaUNELEVBQUUsQ0FBQ0UsSUFBaEU7QUFDQVgsTUFBQUEsWUFBWSxDQUFDWSxPQUFiLENBQXFCLE1BQXJCLEVBQTZCUixPQUE3QjtBQUNIO0FBQ0osR0FQRCxFQU9HLEVBUEg7O0FBU0EsTUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixRQUFNVCxPQUFPLEdBQUdGLElBQUksS0FBSyxPQUFULEdBQW1CLE1BQW5CLEdBQTRCLE9BQTVDO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsT0FBRCxDQUFQO0FBQ0FKLElBQUFBLFlBQVksQ0FBQ1ksT0FBYixDQUFxQixNQUFyQixFQUE2QlIsT0FBN0I7QUFDQUMsSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCSixPQUFPLEtBQUssT0FBWixHQUFzQkssRUFBRSxDQUFDQyxLQUF6QixHQUFpQ0QsRUFBRSxDQUFDRSxJQUFoRTtBQUNBTixJQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3Qk8sTUFBeEIsQ0FBK0JaLElBQUksS0FBSyxPQUFULEdBQW1CTyxFQUFFLENBQUNFLElBQXRCLEdBQTZCRixFQUFFLENBQUNDLEtBQS9EO0FBQ0gsR0FORDs7QUFRQSxNQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsUUFBTUMsUUFBUSxHQUFHbEIsS0FBSyxDQUFDa0IsUUFBTixJQUFrQixXQUFuQzs7QUFDQSxZQUFRQSxRQUFSO0FBQ0ksV0FBSyxXQUFMO0FBQ0ksZUFBTztBQUNIQyxVQUFBQSxHQUFHLEVBQUUsTUFERjtBQUVIQyxVQUFBQSxLQUFLLEVBQUU7QUFGSixTQUFQOztBQUlKLFdBQUssVUFBTDtBQUNJLGVBQU87QUFDSEQsVUFBQUEsR0FBRyxFQUFFLE1BREY7QUFFSEUsVUFBQUEsSUFBSSxFQUFFO0FBRkgsU0FBUDs7QUFJSixXQUFLLGNBQUw7QUFDSSxlQUFPO0FBQ0hDLFVBQUFBLE1BQU0sRUFBRSxNQURMO0FBRUhGLFVBQUFBLEtBQUssRUFBRTtBQUZKLFNBQVA7O0FBSUosV0FBSyxhQUFMO0FBQ0ksZUFBTztBQUNIRSxVQUFBQSxNQUFNLEVBQUUsTUFETDtBQUVIRCxVQUFBQSxJQUFJLEVBQUU7QUFGSCxTQUFQOztBQUlKO0FBQ0ksZUFBTztBQUNIRixVQUFBQSxHQUFHLEVBQUUsTUFERjtBQUVIQyxVQUFBQSxLQUFLLEVBQUU7QUFGSixTQUFQO0FBdEJSO0FBMkJILEdBN0JEOztBQStCQSxNQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLHdCQUNqQjtBQUNJLE1BQUEsS0FBSyxFQUFFTixjQUFjLEVBRHpCO0FBRUksTUFBQSxTQUFTLFlBQUtPLEVBQUUsQ0FBQ0MsZUFBUjtBQUZiLG9CQUlJO0FBQU8sTUFBQSxTQUFTLFlBQUtELEVBQUUsVUFBUDtBQUFoQixvQkFDSTtBQUNJLE1BQUEsUUFBUSxFQUFFVCxZQURkO0FBRUksTUFBQSxPQUFPLEVBQUVYLElBQUksS0FBSyxNQUZ0QjtBQUdJLE1BQUEsSUFBSSxFQUFFO0FBSFYsTUFESixlQU1JO0FBQU0sTUFBQSxTQUFTLFlBQUtvQixFQUFFLENBQUNFLE1BQVIsY0FBa0JGLEVBQUUsQ0FBQ0csS0FBckI7QUFBZixNQU5KLENBSkosQ0FEaUI7QUFBQSxHQUFyQjs7QUFnQkEsc0JBQ0ksNkNBQ0tKLFlBQVksRUFEakIsRUFFS3ZCLEtBQUssQ0FBQzRCLFFBRlgsQ0FESjtBQU1IOztBQUdEN0IsT0FBTyxDQUFDOEIsWUFBUixHQUF1QjtBQUNuQlgsRUFBQUEsUUFBUSxFQUFFO0FBRFMsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdyBmcm9tIFwiLi4vc3R5bGVzL3N3aXRjaC5jc3NcIjtcbmltcG9ydCBkbSBmcm9tIFwiLi4vc3R5bGVzL2RhcmstbW9kZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxhY2tlZChwcm9wcykge1xuICAgIGNvbnN0IGluaXRpYWxNb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtb2RlXCIpIHx8IFwibGlnaHRcIjtcbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZShpbml0aWFsTW9kZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1vZGVcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01vZGUgPSBpbml0aWFsTW9kZTtcbiAgICAgICAgICAgIHNldE1vZGUobmV3TW9kZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQobmV3TW9kZSA9PT0gXCJsaWdodFwiID8gZG0ubGlnaHQgOiBkbS5kYXJrKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibW9kZVwiLCBuZXdNb2RlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG9uTW9kZUNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3TW9kZSA9IG1vZGUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xuICAgICAgICBzZXRNb2RlKG5ld01vZGUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1vZGVcIiwgbmV3TW9kZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChuZXdNb2RlID09PSBcImxpZ2h0XCIgPyBkbS5saWdodCA6IGRtLmRhcmspO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUobW9kZSAhPT0gXCJsaWdodFwiID8gZG0uZGFyayA6IGRtLmxpZ2h0KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTd2l0Y2hTdHlsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBwcm9wcy5wb3NpdGlvbiB8fCBcInRvcC1yaWdodFwiO1xuICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwidG9wLXJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgXCJ0b3AtbGVmdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMXJlbVwiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgXCJib3R0b20tcmlnaHRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1sZWZ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogXCIxcmVtXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3dpdGNoID0gKCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17Z2V0U3dpdGNoU3R5bGUoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3cuc3dpdGNoQ29udGFpbmVyfWB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Ake3N3LnN3aXRjaH1gfT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uTW9kZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bW9kZSA9PT0gXCJkYXJrXCJ9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e1wiY2hlY2tib3hcIn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3cuc2xpZGVyfSAke3N3LnJvdW5kfWB9IC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtyZW5kZXJTd2l0Y2goKX1cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuXG5CbGFja2VkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbn0iXX0=
