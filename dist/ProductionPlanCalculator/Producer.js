"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Province =
/*#__PURE__*/
function () {
  function Province(aProvince, data) {
    _classCallCheck(this, Province);

    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0;
  }

  _createClass(Province, [{
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "cost",
    get: function get() {
      return this._cost;
    },
    set: function set(arg) {
      this._cost = parseInt(arg);
    }
  }, {
    key: "production",
    get: function get() {
      return this._production;
    },
    set: function set(amountStr) {
      var amount = parseInt(amountStr);
      var newProduction = Number.isNaN(amount) ? 0 : amount;
      this._province.totalProduction += newProduction - this._production;
      this._production = newProduction;
    }
  }]);

  return Province;
}();