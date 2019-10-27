"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        var _this = this;
        this.data = data;
        this.compare = function (leftIndex, rightIndex) {
            return _this.data[leftIndex] > _this.data[rightIndex];
        };
        this.swap = function (leftIndex, rightIndex) {
            var leftHand = _this.data[leftIndex];
            _this.data[leftIndex] = _this.data[rightIndex];
            _this.data[rightIndex] = leftHand;
        };
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumbersCollection.prototype, "value", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    return NumbersCollection;
}());
exports.default = NumbersCollection;
