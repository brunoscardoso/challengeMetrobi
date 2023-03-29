// A building has 100 floors. One of the floors is the highest floor an egg can be dropped
// from without breaking. If an egg is dropped from above that floor, it will break. If it is
// dropped from that floor or below, it will be completely undamaged and you can drop the
// egg again. Given two eggs, find the highest floor an egg can be dropped from without
// breaking, with as few drops as possible in the worst-case scenario

// This is a classic problem in computer science known as the "egg drop problem".
// There are various approaches to solving this problem, but one common strategy is to use binary search.

// Set the initial range of floors to 1 to 100.
// Drop the first egg from the middle floor of the range.
// If the first egg breaks, then the highest floor must be below the middle floor. Narrow the range of floors to the lower half of the current range and go to step 2.
// If the first egg does not break, then the highest floor must be above the middle floor. Narrow the range of floors to the upper half of the current range and go to step 2.

function calculateMiddle(low, high) {
  return Math.floor((low + high) / 2);
}

function findHighestFloor(eggDropper) {
  const totalFloors = 100;
  let low = 1;
  let high = totalFloors;
  let middle = calculateMiddle(low, high);
  let firstEgg = middle;

  while (low < high) {
    if (eggDropper.drop(firstEgg)) {
      high = middle - 1;
    } else {
      low = middle;
    }
    middle = calculateMiddle(low, high);
    firstEgg = middle;
  }

  if (eggDropper.drop(low)) {
    return low - 1;
  } else {
    return low;
  }
}

const eggDropper = {
  drop: function (floor) {
    return floor >= 50;
  },
};
