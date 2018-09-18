// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //My initial solution
  var returnStr = '';

  for(var i=0; i<str.length; i++) {
    returnStr += str[str.length - i - 1];
  }
 
  return returnStr;
  
  /*
  const arr = arr.split('');
  arr.reverse();
  return arr.join('');
  */

  /*
  let reversed = '';

  for(let character of str) {
    reversed = character + reversed;
  }

  return reversed;
  */

  /*
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
  */
}

module.exports = reverse;
