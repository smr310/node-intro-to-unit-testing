//import chai, declare expect variable 
const expect = require('chai').expect;

//import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

//unit test for `fizzBuzzer` function
describe('fizzBuzzer', () => {

    //test if num is divisible by 15
    it('should return fizz-buzz', () => {
        const divByFifteen = [
            15, 30, 45
        ];
        //for each num, fizzBuzzer should return fizz-buzz
        divByFifteen.forEach((num) => {
            const returnValue = fizzBuzzer(num);
            expect(returnValue).to.equal('fizz-buzz')
        })
    })

    //test if num is divisible by 5
    it('should return buzz', () => {
        const divByFive = [
            5, 10
        ];
        //for each num, fizzBuzzer should return buzz
        divByFive.forEach((num) => {
            const returnValue = fizzBuzzer(num);
            expect(returnValue).to.equal('buzz')
        })
    })

    //test if num is divisible by 3
    it('should return fizz', () => {
        const divByThree = [
            3, 6, 9
        ];
        //for each num, fizzBuzzer should return buzz
        divByThree.forEach((num) => {
            const returnValue = fizzBuzzer(num);
            expect(returnValue).to.equal('fizz')
        })
    })

    it('should raise error if args not numbers', function () {
        // range of bad inputs that are not a num
        const badInputs = ['hello', true, {name: "steve"}
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function (input) {
            expect(function () {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });

    //edge case -- test if num is divisible by 5 for num also div by 15
    //this will throw an error 
    it('should return buzz', () => {
        const divByFive = [
            5, 10, 15, 30
        ];
        //for each num, fizzBuzzer should return buzz
        divByFive.forEach((num) => {
            const returnValue = fizzBuzzer(num);
            expect(returnValue).to.equal('buzz')
        })
    })


});