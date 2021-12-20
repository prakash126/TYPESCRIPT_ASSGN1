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
var employee = /** @class */ (function () {
    function employee(id, name) {
        this.id = id;
        this.name = name;
    }
    return employee;
}());
var regularEmp = /** @class */ (function (_super) {
    __extends(regularEmp, _super);
    function regularEmp(id, name, nofDays) {
        var _this = _super.call(this, id, name) || this;
        _this.nofDays = nofDays;
        return _this;
    }
    regularEmp.prototype.display = function () {
        var str = "Employee detail : EmpID : " + this.id + " , EmpName: " + this.name + " , No_of_Days_Worked : " + this.nofDays;
        console.log(str);
    };
    return regularEmp;
}(employee));
var obj = new regularEmp(101, "Prince", 50);
obj.display();
