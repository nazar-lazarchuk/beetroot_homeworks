function duplicateCount(text) {
  const array = text.toLowerCase().split("");
  let counter = 0;
  let newArray = [];
  let repArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === newArray.find((element) => element == array[i]) && 
    array[i] !== repArray.find((element) => element == array[i])) {
      counter += 1;
      repArray.push(array[i])
    } 
    newArray.push(array[i]);
  }
  return counter;
}
console.log(duplicateCount("Indivisibilities"));
