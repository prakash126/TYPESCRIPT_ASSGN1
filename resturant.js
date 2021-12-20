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
var resturant = /** @class */ (function () {
    function resturant(name) {
        this.name = name;
    }
    return resturant;
}());
var swiggy = /** @class */ (function (_super) {
    __extends(swiggy, _super);
    function swiggy(name, foodName, foodId, desc) {
        var _this = _super.call(this, name) || this;
        _this.foodName = foodName;
        _this.foodId = foodId;
        _this.desc = desc;
        return _this;
    }
    swiggy.prototype.display = function () {
        var str = "resturant details : Name : " + this.name + " FoodID: " + this.foodId + " Food-Items: " + this.foodName + " desc:" + this.desc;
        console.log(str);
    };
    return swiggy;
}(resturant));
var obj = new swiggy('Green Chilly', 'Panner Chilly', 101, 'Awesome Resturant');
obj.display();
