"use strict";
/// The layout of the application that will be used for every single page
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super.call(this) || this;
    }
    Layout.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" }, this.props.children),
                React.createElement("div", { className: "clearfix" }))));
    };
    return Layout;
}(React.Component));
exports.Layout = Layout;
exports.default = Layout;
//# sourceMappingURL=layout.js.map