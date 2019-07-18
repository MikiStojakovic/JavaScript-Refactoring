class TragedyCalculator {
    constructor(aPerformance, aPlay){
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