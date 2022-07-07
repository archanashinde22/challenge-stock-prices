const best = (stockPrices) => {
  let minPrice;
  let maxProfit = 0;
  for (let i = 0; i < stockPrices.length; i++) {
    if (minPrice === undefined || stockPrices[i] < minPrice) {
      minPrice = stockPrices[i];
    }
    if (maxProfit < stockPrices[i] - minPrice) {
      maxProfit = stockPrices[i] - minPrice;
    }
  }
  return console.log(`Maximum Profiit for Today is ${maxProfit}`);
};
best([15, 10, 20, 22, 1, 9]);
// best([1, 2, 3, 4, 5])
// best([2, 3, 10, 6, 4, 8, 1])
// best([7, 9, 5, 6, 3, 2])
// best([0, 100])
// best([5, 4 , 3, 2, 1])
// best([100])
// best([100, 0])
