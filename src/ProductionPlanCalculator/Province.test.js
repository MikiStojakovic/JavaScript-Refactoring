 import { sampleProvinceData, Province } from './Province.js';

 describe('province shortfall', function() {
     it('shortfall', function(){
         const asia = new Province(sampleProvinceData());
         expect(asia.shortfall).toBe(5);
     })
 })