
var invoiceCollection = require('./invoices.json');
var playsCollection = require('./plays.json');

function testStatement(){
    return statement(invoiceCollection, playsCollection);
}

function statement (invoice, plays) {
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerformance);
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
   
    return renderPlainText(statementData, plays);    

    function renderPlainText(data, plays) {
        let result = `Statement for ${data.customer}\n`;    
    
        for (let perf of data.performances) {
            // print line for this order
            result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
        }
    
        result += `Amount owed is ${usd(data.totalAmount)}\n`;
        result += `You earned ${data.totalVolumeCredits} credits\n`;
        return result;

        function totalAmount(){
            return data.performances.reduce((total, p) => total + p.amount, 0)
        }

        function totalVolumeCredits() {
            return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
         }
        
         function volumeCreditsFor(aPerformance) {
             let result = 0;
             result += Math.max(aPerformance.audience - 30, 0);
             if ("comedy" === aPerformance.play.type) 
                result += Math.floor(aPerformance.audience / 5);
        
             return result;   
         }                        
       
        function amountFor(aPerformance) {
        let result = 0;
               switch (aPerformance.play.type) {
               case "tragedy":
               result = 40000;
               if (aPerformance.audience > 30) {
                   result += 1000 * (aPerformance.audience - 30);
               }
               break;
               case "comedy":
               result = 30000;
               if (aPerformance.audience > 20) {
                   result += 10000 + 500 * (aPerformance.audience - 20);
               }
               result += 300 * aPerformance.audience;
               break;
               default:
               throw new Error(`unknown type: ${aPerformance.play.type}`);
               }
           return result;
       }              
       
       function usd(aNumber){
           return new Intl.NumberFormat("en-US",
               { style: "currency", currency: "USD",
               minimumFractionDigits: 2 }).format(aNumber/100);
       }  
    }
    
    function enrichPerformance(aPerformance) {
        const result = Object.assign({}, aPerformance);
        result.play = playFor(result);
        result.amount = amountFor(result);
        result.volumeCredits = volumeCreditsFor(result);
        return result;
    }

    function playFor(aPerformance) {
        return playsCollection[aPerformance.playID];
    }
 }

   
// function add(a, b) {
//     return a + b;
// }

module.exports = {
    // add: add,
    statement: statement,
    testStatement: testStatement,
}