// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function (list) {
  const lastElement = list[list.length - 1];
  const secondLast = list[list.length - 2];
  return lastElement && secondLast;
};
