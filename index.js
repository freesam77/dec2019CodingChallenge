let arrayProblem = [
  ["s", "a", "s"],
  ["a", "s", "e"],
  ["m", "s", "f"]
];
let search = ["s", "a", "m"];
let searchingFunc = (array, sample) => {
  let result = [];
  array.map((arr, index) => {
    arr.forEach((val, ind) => {
      if (val == "s") {
        result.push([index, ind]);
      }
    });
  });

  return result;
};
const runTimeAndResult = data => {
  console.clear();
  console.time("Runtime is");
  console.log(data);
  console.timeEnd("Runtime is");
};

runTimeAndResult(searchingFunc(arrayProblem, search));
