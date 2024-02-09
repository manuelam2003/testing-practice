const isValidArray = (array) => {
  if (!Array.isArray(array)) {
    return false;
  }
  return array.every((item) => typeof item === "number");
};

const analyzeArray = (array) => {
  //   const array = [1, 2, 3];
  if (!isValidArray(array)) {
    return "not an array";
  }
  const sum = array.reduce((acc, cur) => acc + cur, 0);
  const { length } = array;
  const average = sum / length;

  const min = Math.min(...array);
  const max = Math.max(...array);
  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;
