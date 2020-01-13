let arrayProblem = [
  ["s", "a", "s"],
  ["f", "a", "e"],
  ["m", "a", "f"],
  ["s", "m", "m"]
];

const search = ["s", "a", "m"];
let searchingFunc = (array, sample) => {
  let result = [];
  let foundFirstLetter = [];
  array.map((arr, index) => {
    arr.forEach((val, ind) => {
      if (val == sample[0]) {
        foundFirstLetter.push([index, ind]);
        //  [ [ 0, 0 ], [ 1, 1 ], [ 2, 1 ] ]
      }
    });
  });

  //   function to Get letter from 2D array

  const getLetter = (array, searchIndex) => {
    if (!searchIndex) {
      return "Not found";
    }
    return array[searchIndex[0]][searchIndex[1]];
  };

  //   function to Recursive Look up to the right
  const searchArray = (letterIndex, searchData, arraySample, command) => {
    let searchToRightResult = [letterIndex];
    let firstIndex = Number(letterIndex[0]);
    let secondIndex = Number(letterIndex[1]);
    for (let i = 1; i < searchData.length; i++) {
      if (command === "right") {
        secondIndex += i;
      } else if (command === "left") {
        secondIndex -= i;
      } else if (command === "up") {
        firstIndex -= i;
      } else if (command === "down") {
        firstIndex += i;
      }
      if (getLetter(arraySample, [firstIndex, secondIndex]) === searchData[i]) {
        searchToRightResult.push([firstIndex, secondIndex]);
        // recursiveRightSearch(letterIndex, searchData, arraySample);
      } else {
        return "No Result from the search...";
      }
    }
    return searchToRightResult;
  };
  result = searchArray([1, 1], search, arrayProblem, "down");
  //   result = getLetter(arrayProblem, foundFirstLetter[1]); //s
  // if there is anything found, continue the lookup
  //   if (foundFirstLetter.length) {
  //     const recursiveLookUp = (firstDigit, secondDigit, sampleData) => {
  //       let foundWordsIndexes = [];
  //       for (let i = 1; i < sampleData.length; i++) {
  //         if (array[firstDigit][secondDigit] == sampleData[i]) {
  //           foundWordsIndexes.push([firstDigit, secondDigit]);
  //           recursiveLookUp(firstDigit, secondDigit);
  //         }
  //         break;
  //       }
  //       return foundWordsIndexes.length ? foundWordsIndexes : null;
  //     };

  //     //  horizontal right
  //     const horizontalRightLookUp = () => {
  //       for (let i = 0; i < foundFirstLetter.length; i++) {
  //         const firstDigit = foundFirstLetter[i][0],
  //           secondDigit = foundFirstLetter[i][1] + (i + 1);
  //         if (recursiveLookUp(firstDigit, secondDigit)) {
  //           result.push(recursiveLookUp(firstDigit, secondDigit, sample));
  //           horizontalRightLookUp();
  //         }
  //       }
  //     };
  //   }

  return result;
};

const runTimeAndResult = data => {
  console.clear();
  console.time("Runtime is");
  console.log(data);
  console.timeEnd("Runtime is");
};

runTimeAndResult(searchingFunc(arrayProblem, search));
