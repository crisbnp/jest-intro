const addNumbers = require('../app.js');

// addNumbers.sum(2,1);

//test() takes 2 parameters, a string and a function

// test('should equal 3 when passed 2 and 1', () => {
//     //expect() function goes inside test function. used when we want to test a value
//     //matcher() use expelect along with a matcher function to assert something - .toBe() 
//     expect(addNumbers.sum(2,1)).toBe(3);

//.toBe is more strict than .toEqual
// }) 


test('should equal 5 when passed 2 and 3', () => {
    expect(addNumbers.sum(2,3)).toEqual(5);
})
