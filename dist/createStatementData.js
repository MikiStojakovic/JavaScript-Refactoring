"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PerformanceCalculator =
/*#__PURE__*/
function () {
  function PerformanceCalculator(aPerformance, aPlay) {
    _classCallCheck(this, PerformanceCalculator);

    this.performance = aPerformance;
    this.play = aPlay;
  }

  _createClass(PerformanceCalculator, [{
    key: "amount",
    get: function get() {
      var result = 0;

      switch (this.play.type) {
        case "tragedy":
          throw 'bad thing';

          if (this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30);
          }

          break;

        case "comedy":
          result = 30000;

          if (this.performance.audience > 20) {
            result += 10000 + 500 * (this.performance.audience - 20);
          }

          result += 300 * this.performance.audience;
          break;

        default:
          throw new Error("unknown type: ".concat(this.play.type));
      }

      return result;
    }
  }, {
    key: "volumeCredits",
    get: function get() {
      return Math.max(this.performance.audience - 30, 0);
    }
  }]);

  return PerformanceCalculator;
}();

var TragedyCalculator =
/*#__PURE__*/
function (_PerformanceCalculato) {
  _inherits(TragedyCalculator, _PerformanceCalculato);

  function TragedyCalculator(aPerformance, aPlay) {
    var _this;

    _classCallCheck(this, TragedyCalculator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TragedyCalculator).call(this));
    _this.performance = aPerformance;
    _this.play = aPlay;
    return _this;
  }

  _createClass(TragedyCalculator, [{
    key: "amount",
    get: function get() {
      var result = 40000;

      if (this.performance.audience > 30) {
        result += 1000 * (this.performance.audience - 30);
      }

      return result;
    }
  }]);

  return TragedyCalculator;
}(PerformanceCalculator);

var ComedyCalculator =
/*#__PURE__*/
function (_PerformanceCalculato2) {
  _inherits(ComedyCalculator, _PerformanceCalculato2);

  function ComedyCalculator(aPerformance, aPlay) {
    var _this2;

    _classCallCheck(this, ComedyCalculator);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ComedyCalculator).call(this));
    _this2.performance = aPerformance;
    _this2.play = aPlay;
    return _this2;
  }

  _createClass(ComedyCalculator, [{
    key: "amount",
    get: function get() {
      var result = 30000;

      if (this.performance.audience > 20) {
        result += 10000 + 500 * (this.performance.audience - 20);
      }

      result += 300 * this.performance.audience;
      return result;
    }
  }, {
    key: "volumeCredits",
    get: function get() {
      return _get(_getPrototypeOf(ComedyCalculator.prototype), "volumeCredits", this) + Math.floor(this.performance.audience / 5);
    }
  }]);

  return ComedyCalculator;
}(PerformanceCalculator);

function createPerformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case "tragedy":
      return new TragedyCalculator(aPerformance, aPlay);

    case "comedy":
      return new ComedyCalculator(aPerformance, aPlay);

    default:
      throw new Error("unknown type: ".concat(aPlay.type));
  }

  return new PerformanceCalculator(aPerformance, aPlay);
}

function createStatementData(invoice, plays) {
  var statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return statementData;

  function enrichPerformance(aPerformance) {
    var caluculator = new createPerformanceCalculator(aPerformance, playFor(aPerformance));
    var result = Object.assign({}, aPerformance);
    result.play = caluculator.play;
    result.amount = caluculator.amount;
    result.volumeCredits = caluculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount;
  }

  function totalAmount(data) {
    return data.performances.reduce(function (total, p) {
      return total + p.amount;
    }, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce(function (total, p) {
      return total + p.volumeCredits;
    }, 0);
  }

  function volumeCreditsFor(aPerformance) {
    return new PerformanceCalculator(aPerformance, playFor(aPerformance)).volumeCredits;
  }
}

module.exports = {
  createStatementData: createStatementData
};