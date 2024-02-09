const isValidArguments = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return true;
};

const calculator = {
  add(x, y) {
    if (isValidArguments(x, y)) {
      return x + y;
    }
    return "Arguments contain a non-number";
  },
  subtract(x, y) {
    if (isValidArguments(x, y)) {
      return x - y;
    }
    return "Arguments contain a non-number";
  },
  multiply(x, y) {
    if (isValidArguments(x, y)) {
      return x * y;
    }
    return "Arguments contain a non-number";
  },
  divide(x, y) {
    if (isValidArguments(x, y)) {
      if (y !== 0) {
        return x / y;
      }
      return "Error:division by zero";
    }
    return "Arguments contain a non-number";
  },
};

export default calculator;
