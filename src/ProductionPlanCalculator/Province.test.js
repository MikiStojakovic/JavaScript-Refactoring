 import { sampleProvinceData, Province } from './Province.js';

 describe('province shortfall', function() {
     it('shortfall', function(){
         const asia = new Province(sampleProvinceData());
         expect(asia.shortfall).toBe(5);
     });
     it('profit', function(){
        const asia = new Province(sampleProvinceData());
        expect(asia.profit).toBe(230);
    });
 })