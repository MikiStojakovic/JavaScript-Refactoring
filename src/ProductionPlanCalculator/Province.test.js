 import { sampleProvinceData, Province } from './Province.js';

 describe('province shortfall', function() {
     let asia;
     beforeEach(function() {
         asia = new Province(sampleProvinceData());
     })
     it('shortfall', function(){
         expect(asia.shortfall).toBe(5);
     });
     it('profit', function(){
        expect(asia.profit).toBe(230);
    });
 })

 describe('no producers', function(){
     let noProducers;

     beforeEach(function(){
         const data = {
             name: "No producers",
             producers: [],
             demand: 30,
             price: 20
         };
         noProducers = new Province(data);
     });

     it('shortfall', function() {
        expect(noProducers.shortfall).toBe(30);        
     });

     it('profit', function() {
         expect(noProducers.profit).toBe(0);
     })
 })

 describe('province', function(){
     let asia;
     beforeEach(function() {
         asia = new Province(sampleProvinceData());
     })
     it('zero demand', function(){
         asia.demand = 0;
         expect(asia.shortfall).toBe(-25);
         expect(asia.profit).toBe(0);
     })
 })