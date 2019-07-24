 import { sampleProvinceData, Province } from './Province.js';

test('province shortfall', () => {
    var result = sampleProvinceData();
    //var pr = new Province({});
    expect(result.name).toBe("Asia");
})