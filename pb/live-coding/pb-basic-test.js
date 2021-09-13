// nameOfCity
function nameOfCity(str) {
    // if (str.toLowerCase().slice(0, 3) === 'new' || str.toLowerCase().slice(0, 3) === 'los')
    if (str.toLowerCase().startsWith('new') || str.toLowerCase().startsWith('los')) {
        return str;
    } else {
        return 'The city name does not begin with Los or New';
    }
}
// const nameOfCity = str => str.toLowerCase().slice(0, 3) === 'los' || str.toLowerCase().slice(0, 3) === 'new' ? str : 'The city name does not begin wtih Los or New';
console.log(nameOfCity('New York'));
console.log(nameOfCity('newark'));
console.log(nameOfCity('London'));

// 2. isDivisible
function isDivisible(int) {
    // if (int % 100 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return int % 100 === 0;
}
// const isDivisible = int => int % 100 === 0;
console.log('isDivisible ', isDivisible(1));
console.log('isDivisible ', isDivisible(1000));
console.log('isDivisible ', isDivisible(100));
console.log('isDivisible ', isDivisible(0));

// Missing Angle
const missingAngle = function (first, second) {
    const missing = 180 - first - second;
    if (missing < 90) {
        return 'acute';
    } else if (missing > 90) {
        return 'obtuse';
    } else {
        return 'right angle';
    }
}
console.log(missingAngle(11, 20));
console.log(missingAngle(27, 59));
console.log(missingAngle(135, 11));
console.log(missingAngle(45, 45));

// 4. 
// const isRaining = boolean => boolean ? 'wet day - you need an umbrella' : 'dry day - leave your umbrella at home';
function isRaining(boolean) {
    if (boolean) {
        return 'wet day - you need an umbrella';
    } else {
        return 'dry day - leave your umbrella at home';
    }
}

// geometricalSequence
const geometricalSequence = function() {
    let numsArray = [];
    for (let i = 0; i < 9; i++) {
        numsArray.push(Math.pow(2, i));
    }
    return numsArray.join(' ');
}
console.log(geometricalSequence());

// multiplesOfThree
const multiplesOfThree = function() {
    let nums = [];
    for (let i = 1; i <= 5; i++) {
        nums.push(3 * i);
    }
    return nums.join(' ');
}
console.log(multiplesOfThree());

// powerOf
const powerOf = int => Math.pow(int, int);
console.log(powerOf(3));