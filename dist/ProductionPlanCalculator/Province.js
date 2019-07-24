"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sampleProvinceData = exports.Province = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Province =
/*#__PURE__*/
function () {
  function Province(doc) {
    var _this = this;

    _classCallCheck(this, Province);

    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    this._demand = doc.demand;
    this._price = doc.price;
    doc.producers.forEach(function (d) {
      return _this.addProducer(new Producer(_this, d));
    });
  }

  _createClass(Province, [{
    key: "addProducer",
    value: function addProducer(arg) {
      this._producers.push(arg);

      this._totalProduction += arg.production;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "producers",
    get: function get() {
      return this._producers.slice();
    }
  }, {
    key: "totalProduction",
    get: function get() {
      return this._totalProduction;
    },
    set: function set(arg) {
      this._totalProduction = arg;
    }
  }, {
    key: "demand",
    get: function get() {
      return this._demand;
    },
    set: function set(arg) {
      return this._demand = parseInt(arg);
    }
  }, {
    key: "price",
    get: function get() {
      return this._price;
    },
    set: function set(arg) {
      this._price = parseInt(arg);
    }
  }, {
    key: "shortfall",
    get: function get() {
      return this._demand - this.totalProduction;
    }
  }, {
    key: "profit",
    get: function get() {
      return this.demandValue - this.demandCost;
    }
  }, {
    key: "demandCost",
    get: function get() {
      var remainingDemand = this.demand;
      var result = 0;
      this.producers.sort(function (a, b) {
        return a.cost - b.cost;
      }).forEach(function (p) {
        var contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      });
      return result;
    }
  }, {
    key: "demandValue",
    get: function get() {
      return this.satisfiedDemand * this.price;
    }
  }, {
    key: "satisfiedDemand",
    get: function get() {
      return Math.min(this._demand, this.totalProduction);
    }
  }]);

  return Province;
}();

exports.Province = Province;

var sampleProvinceData = function sampleProvinceData() {
  return {
    name: 'Asia',
    producers: [{
      name: "Byzantium",
      cost: 10,
      production: 9
    }, {
      name: "Attalia",
      cost: 12,
      production: 10
    }, {
      name: "Sinope",
      cost: 10,
      production: 6
    }],
    demand: 30,
    price: 20
  };
};

exports.sampleProvinceData = sampleProvinceData;