// const arr = [];
// arr.length = 50;
// arr.fill(1)
// const withoutNewKeyWord = Array(50);
// const withNewKeyWord = new Array(50);
// console.log(withoutNewKeyWord);
// console.log(withNewKeyWord);
// array.fill(1);
// console.log(array);

class CustomNumber {
    constructor(number) {
        this.number = number;
    }

    add(number) {
        this.number = this.number + number;
        return new CustomNumber(this.number);
    }

    minus(number) {
        this.number = this.number - number;
        return this
    }

    multiply(number) {
        this.number = this.number * number;
        return this
    }

    divide(number) {
        this.number = this.number / number;
        return this
    }

    toString() {
        return this.number
    }
}

const aNumber = new CustomNumber(50).add(50).minus(30).multiply(3).divide(4);
console.log(aNumber);

