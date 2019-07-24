"use strict";

// const class1 = require('./Province.js');
// const { Animal } = require("./Province.js").Animal;
var sampleProvinceData = require('./Province.js').sampleProvinceData; // import { sampleProvinceData } from './Province.js';


test('province shortfall', function () {
  // const asia = new P(sampleProvinceData);
  // expect(asia.shortfall()).toBe(5);
  // var s = new Animal();
  // var l = s;
  var result = sampleProvinceData();
  expect(result.name).toBe("Asia");
});