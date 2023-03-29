function getMaxValue(carrotTypes, capacity) {
  const dpTable = new Array(capacity + 1).fill(0);

  for (let weight = 1; weight <= capacity; weight++) {
    let maxValue = 0;

    for (let i = 0; i < carrotTypes.length; i++) {
      const carrotWeight = carrotTypes[i].kg;
      const carrotValue = carrotTypes[i].price;

      if (carrotWeight <= weight) {
        const remainingWeight = weight - carrotWeight;
        const valueWithCarrot = carrotValue + dpTable[remainingWeight];
        maxValue = Math.max(maxValue, valueWithCarrot);
      }
    }

    dpTable[weight] = maxValue;
  }
  return dpTable[capacity];
}

carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];
capacity = 36;

console.log(getMaxValue(carrotTypes, capacity));
