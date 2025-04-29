// EXAMPLE: Import items to test
const examples = require('../examples');

/** UNIT TESTING **/

/*
    Write tests for the MS_PER_YEAR constant.
        - It should be exactly 31557600000.
        - It should be a number
        - It should not be a string
*/

// EXAMPLE: Create a describe block, then write a specification inside it
describe("The MS_PER_YEAR constant", () => {

    test("should have a value of 31557600000", () => {
        expect(examples.MS_PER_YEAR).toEqual(31557600000);
    });

    test("should have a data type of number and not string", () => {
        expect(typeof examples.MS_PER_YEAR).toEqual("number");
        expect(typeof examples.MS_PER_YEAR).not.toEqual("string");
    });

});


/*
    Write a test for each of the properties in the object bucky
*/

// Create a describe block for the entire object
describe("The bucky object", () => {
    // Write each specification as a test block inside the describe block

    // EXAMPLE: Test the value of fullName
    test("should have a property called 'fullName' with the value of 'James Buchanan Barnes'", () => {
        expect(examples.bucky.fullName).toEqual('James Buchanan Barnes');
    });

    // TODO: Write 2 tests for the value of nickname — it should be "Bucky" and NOT "The Winter Soldier"


    // Test that triggerWords includes "longing", "daybreak", and "homecoming"
    test("should have an array called 'triggerWords' that includes specific words", () => {
        expect(examples.bucky.triggerWords).toContain('longing');
        expect(examples.bucky.triggerWords).toContain('daybreak');
        expect(examples.bucky.triggerWords).toContain('homecoming');
        // TODO: Add expectations that check for "rusted", "benign", and "freight car"
        
    });

    // Test that the age method returns a number greater than 100 and less than 120
    test("should have a method called 'calculateAge' that returns number greater than 100 and less than 130", () => {
        // console.log(bucky.calculateAge());
        expect(examples.bucky.calculateAge()).toBeGreaterThan(100);
        expect(examples.bucky.calculateAge()).toBeLessThan(130);
    });

    // Test that Bucky is no longer a Hydra agent
    test("should have a property 'isHydraAgent' that is false", () => {
        expect(examples.bucky.isHydraAgent).toBe(false);
    });
});


/** TEST-DRIVEN DEVELOPMENT **/

/*
    Write a new describe block for the isAlphaOnly function. Test positive cases, negative cases, and edge cases
*/

// Test data
let cap;

// EXAMPLE: Reset data before each test in case it is manipulated
beforeEach(() => {
    cap = {
        fullName: 'Steve Rogers',
        nickname: 'Cap',
        catchphrases: ['I could do this all day.', 'Language!'],
        calculateAge: () => {
            return Math.round((new Date() - new Date(1918, 7, 4)) / examples.MS_PER_YEAR);
        }
    };
});

// Write a describe block for the isAlphaOnly function
describe('The isAlphaOnly function', () => {
    
    // POSITIVE CASES

    // EXAMPLE: Write a test for nickname
    test('should return true if alpha-only string is passed in', () => {
        expect(examples.isAlphaOnly(cap.nickname)).toBe(true);
    });

    // TODO: Write a test for spaces (is allowed) using data from the test object cap


    // NEGATIVE CASES

    // EXAMPLE: Write tests for non-alpha characters like numbers
    test('should return false if the string has numeric characters', () => {
        let numString = String(cap.calculateAge());
        expect(examples.isAlphaOnly(numString)).toEqual(false);
    });

    // TODO: Write a test for non-alpha characters like punctuation


    // EDGE CASES

    // EXAMPLE: Write a test for empty string (not allowed)
    test('should return false if it is an empty string', () => {
        expect(examples.isAlphaOnly('')).toBe(false);
    });

    // EXAMPLE: Write a test for ONLY spaces (no other characters)
    test('should return false if the string has ONLY spaces', () => {
        expect(examples.isAlphaOnly(" ")).toBe(false);
    });

    // TODO: Write a test for non-string types (not allowed)
    // Use the cap test object to test isAlphaOnly with a number, array, object, function, and null
    // After seeing the test fail, write code in example.js to handle this condition until they all pass

});
