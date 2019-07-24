"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TragedyCalculator =
/*#__PURE__*/
function () {
  function TragedyCalculator(aPerformance, aPlay) {
    _classCallCheck(this, TragedyCalculator);

    this.performance = aPerformance;
    this.play = aPlay;
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
}();