// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let returnArr = n.toString().split('');
    let neg;

    if(returnArr[0] === '-') {
        neg = returnArr[0];
        returnArr.splice(0, 1);
    }

    returnArr.reverse();

    if(neg !== undefined) {
        returnArr.unshift(neg);
    }

    returnArr = returnArr.join('');

    return parseInt(returnArr);
}


    // const reversed = n
    //     .toString()
    //     .split('')
    //     .reverse()
    //     .join('');

    // return parseInt(reversed) * Math.sign(n);

reverseInt(-90);



module.exports = reverseInt;
