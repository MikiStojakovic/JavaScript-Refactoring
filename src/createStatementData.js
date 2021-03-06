class PerformanceCalculator {
    constructor(aPerformance, aPlay){
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get amount() {
        let result = 0;
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
               throw new Error(`unknown type: ${this.play.type}`);
               }
           return result;
       }

       get volumeCredits() {
           return Math.max(this.performance.audience - 30, 0);
       }
    }

class TragedyCalculator extends PerformanceCalculator {    
    constructor(aPerformance, aPlay){
        super();
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get amount() {
        let result = 40000;

        if (this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30)
        }

        return result;
    }
}

class ComedyCalculator extends PerformanceCalculator {
    constructor(aPerformance, aPlay){
        super();
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get amount() {
        let result = 30000;

        if (this.performance.audience > 20) {
            result += 10000 + 500 * (this.performance.audience - 20);
        }

        result += 300 * this.performance.audience;
        return result;
    }

    get volumeCredits() {
        return super.volumeCredits + Math.floor(this.performance.audience / 5);
    }
}

function createPerformanceCalculator(aPerformance, aPlay) {
    switch(aPlay.type){
        case "tragedy": return new TragedyCalculator(aPerformance, aPlay);
        case "comedy": return new ComedyCalculator(aPerformance, aPlay);
        default:
            throw new Error(`unknown type: ${aPlay.type}`);
    }
    return new PerformanceCalculator(aPerformance, aPlay);
}

function createStatementData(invoice, plays){
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances =
        invoice.performances.map(enrichPerformance);
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
    return statementData;   
    
    function enrichPerformance(aPerformance) {
        const caluculator = new createPerformanceCalculator(aPerformance, playFor(aPerformance));
        const result = Object.assign({}, aPerformance);
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
    
       function totalAmount(data){
        return data.performances.reduce((total, p) => total + p.amount, 0)
    }

    function totalVolumeCredits(data){
        return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
     }
    
     function volumeCreditsFor(aPerformance) {
         return new PerformanceCalculator(aPerformance, playFor(aPerformance)).volumeCredits; 
     } 
}

 







module.exports = {
    createStatementData: createStatementData,
}