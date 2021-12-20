var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var car = /** @class */ (function () {
    function car(color) {
        this.color = color;
    }
    return car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(color, price, features) {
        var _this = _super.call(this, color) || this;
        _this.price = price;
        _this.features = features;
        return _this;
    }
    Audi.prototype.display = function () {
        var str = "Car details : color : " + this.color + " features: " + this.features + " price:" + this.price;
        console.log(str);
    };
    return Audi;
}(car));
var obj = new Audi('Yellow', 2500000, 'power windows and power glasses');
obj.display();
