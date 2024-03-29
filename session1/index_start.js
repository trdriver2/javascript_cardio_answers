// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  let reverse = ""
  for(i = (str.length -1); i>=0; i--)
    reverse += str[i]  
  return reverse
}


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  if(str === reverseString(str))
    return true;
  return false;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  temp = reverseString(int.toString())
  let pos = true
  if(temp[temp.length - 1] === '-')
  {
    pos = false
    var arr = temp.split('')
    arr.splice(temp.length-1, 1)
    //temp='-' + arr.join()
  }
  num = parseFloat(temp,10);
  if(!pos)
    num = 0-num;
  return num
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return(str.toUpperCase())
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  final = new Array
  for(i = 0; i< str.length; i++)
  {
    contained = false
    for(j=0; j<final.length && !contained; j++)
    {
      if(final[j][0] === str[i])
      {
        final[j][1]++;
        contained=true;
      }      
      
    }
    if(!contained)
    {
      a = [str[i], 1]
      final.push(a)
    }    
  }

  let highest=['z',0];
  console.log(final)
  for(i=0; i<final.length; i++)
  {
    if(final[i][1] > highest[1])
    {
      highest[0] = final[i][0]
      highest[1] = final[i][1]
    }
  }
  return highest;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(i = 1; i<101;i++)
  {
    if(i%3===0 && i%5===0)
      console.log("FizzBuzz")
    else if(i%3===0)
      console.log("Fizz")
    else if(i%5===0)
      console.log("Buzz")
    else 
      console.log(i);
  }
}



// Call Function
const output = capitalizeLetters("aaaaaaaaakjhsdfkjkdfhjshkdfjshkfh");

console.log(output);
