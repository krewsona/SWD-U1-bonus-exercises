/** UNIT TESTING **/

/* 
	EXAMPLE: In the corresponding spec file, write a test for the MS_PER_YEAR constant below.
*/

let MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;


/* 
	EXAMPLE: In the corresponding test file, write a test for each property in the object below. Fix any mistakes that are uncovered by the tests.
*/

let bucky = {
  fullName: 'James Buchanan Barnes',
  nickname: 'Bucky', // fixed it
  triggerWords: [
    'longing',
    'rusted',
    'furnace',
    'daybreak',
    'seventeen',
    'benign',
    'nine',
    'homecoming',
    'one',
    'freight car',
  ], // fixed it
  calculateAge: function () {
    return Math.round((new Date() - new Date(1917, 10, 3)) / MS_PER_YEAR);
  },
  isHydraAgent: false, // fixed it
};


/** TEST-DRIVEN DEVELOPMENT **/

/*
	EXAMPLE: Practice TDD by writing each test before adding code to the function below.
    The function should return true or false depending on whether all of its characters are alphabetical or not.
*/

function isAlphaOnly(str) {
    // TODO: Fix for additional edge case
    if (str.trim() === '') {
        return false;
    }
    let allowed = 'abcdefghijklmnopqrstuvwxyz ';
    for (char of str) {
        if (!allowed.includes(char.toLowerCase())) {
        return false;
        }
    }
    return true;
}


// EXAMPLE: Export items to be tested
module.exports = {
  MS_PER_YEAR: MS_PER_YEAR,
  bucky: bucky,
  isAlphaOnly: isAlphaOnly,
};
