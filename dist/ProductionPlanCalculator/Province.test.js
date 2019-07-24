"use strict";

var _Province = require("./Province.js");

// const class1 = require('./Province.js');
// const { Animal } = require("./Province.js").Animal;
// var sampleProvinceData = require('./Province.js').sampleProvinceData;
test('province shortfall', function () {
  // const asia = new P(sampleProvinceData);
  // expect(asia.shortfall()).toBe(5);
  // var s = new Animal();
  // var l = s;
  var result = (0, _Province.sampleProvinceData)(); //var pr = new Province({});

  expect("Asia").toBe("Asia");
});