// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  /*
  let ans = ''
  let ansCount = 0
  for(word of sen.split(" "))
  {
    word = word.toLowerCase()
    for(char of word){
      if(char < 'a' || char > 'z')
        word = word.replace(char, "")
    }
    if(word.length > ansCount){
      ans = word
      ansCount = word.length
    }
  }
  return ans*/
  // SOLUTION 2 - Return an array and include multiple words if they have the same length:
  ans = []
  let ansCount = 0
  for(word of sen.split(" "))
  {
    word = word.toLowerCase()
    for(char of word){
      if(char < 'a' || char > 'z')
        word = word.replace(char, "")
    }
    if(word.length >= ansCount){
      ans.push(word)
      ansCount = word.length
    }
  }
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  //if(ans.length === 1)
    //return ans[0]
  return ans
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  let ans = []
  let temp = []
  for(i = 0; i < arr.length; i++){
    temp.push(arr[i])
    if(i%len === (len-1) || i === (arr.length-1)){
      ans.push(temp)
      temp = []
    }
  }
  return ans
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  ans=[]
  for(array of arrays){
    if(Array.isArray(array)){
      for(element of array){
        ans.push(element)
    }
    
    }
    else 
      return arrays
  }
  return ans
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function removeNonCharacters(word){
  word = word.toLowerCase()
    for(char of word){
      if(char < 'a' || char > 'z')
        word = word.replace(char, "")
    }
  return word;
}

function isAnagram(str1, str2) {
  str1 = removeNonCharacters(str1)
  str2 = removeNonCharacters(str2)
  arr1 = str1.split("")
  arr2 = str2.split("")
  if(arr1.sort().join()===arr2.sort().join())
    return true

  return false  
}



// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  temp = str.split("")
  for(i=0; i<temp.length; i++){
    char=str[i]
    if((char >="a" && char <="z") || (char >='A' && char <='Z')){
      if(char === 'z')
        char = 'a'
      else if(char ==='Z')
        char = "A"
      else
      char = String.fromCharCode(char.charCodeAt(0)+1)
    }
    temp[i]=char
  }
  return temp.join("")
}

// Call Function
const output = isAnagram("q  we    234", "e  453453 wq");

console.log(output);
