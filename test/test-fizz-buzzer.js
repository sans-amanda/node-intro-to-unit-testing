// import chai, declare expect variable
const expect = require("chai").expect;

// import adder
const fizzBuzzer = require("../fizzBuzzer");

// unit tests for our `adder` function
describe("fizzBuzzer", function() {

  // test the normal case

  // range of normal inputs, including
  // notable cases like negative answers
    it("should return multiples of 15", function() {
        [15, 1515, -15, 45].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal("fizz-buzz");
        });
    });

    it("should return multiples of 3", function() {
        [3, 3333, -3, 18].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal("fizz");
        });
    });

    it("should return multiples of 5", function() {
        [5, 5555, -5, 20].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal("buzz");
        });
    }); 

    it("should return number if not multiple of any", function() {
        [2, -1, 29.765, 77].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal(input);
        });
    });

    // range of bad inputs where not both are numbers
    it("should raise error if not number", function() {
        [false, [1,2,3,4], "hello world", undefined].forEach(function(input) {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});