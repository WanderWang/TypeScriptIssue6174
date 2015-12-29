"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Foo = (function (_super) {
    __extends(Foo, _super);
    function Foo() {
        _super.apply(this, arguments);
    }
    Foo.prototype.render = function () {
        return (<div>HelloWorld</div>);
    };
    return Foo;
}(React.Component));
