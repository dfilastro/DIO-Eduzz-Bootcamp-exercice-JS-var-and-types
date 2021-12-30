// CHALLENGE 1 - CHECA PALINDROMO ////////////////////////////////////////////////////

// function palindromo(string) {
//   if (!string) return;

//   let word = string.split(" ").join("").toLowerCase();
//   let reverse = [];
//   let backWord = "";

//   for (let i = 0; i < string.length; i++) {
//     reverse[i] = string[string.length - 1 - i];
//     backWord = backWord + reverse[i];
//   }

//   backWord.split(" ").join("").toLocaleLowerCase() === word
//     ? console.log("Yes")
//     : console.log("No");
// }

// palindromo("Roma mE tEM amor");

// CHALLENGE 2 - TROCA PARES POR ZERO ////////////////////////////////////////////////////
// input -> [1,3,4,6,80,33,23,90]
// output -> [1,3,0,0,0,33,23,0]

// input -> []
// output -> -1

checkPar = (array) => {
  if (!array.length) return -1;

  for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0 ? (array[i] = 0) : array[i];
  }
  console.log(array);
};

checkPar([1, 3, 4, 6, 80, 33, 23, 90]);
checkPar([]);
