/**
      Drink pass assumes the order of the drinks to put the coconut drink last in the order of 4 berry, 4 citrus, 4 regular, 1 coconut.
      Determines which number drink should be passed out first to ensure that the #13, the coconut drink, is the final drink in the order
     **/
function sparklingWaterDist() {
  let drinkDrawOrder = []; //keeps track of orders
  let drinkArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; //mock order of drinks
  let current = 0; //starting with 1st drink, index 1

  //while there are still numbers in the DrinkArray
  while (drinkArr.length) {
    //pull the drink at the current index
    const pulled = drinkArr.splice(current, 1);
    //push that drink onto the drink draw order array
    drinkDrawOrder.push(pulled[0]);
    //index the current index by 12,
    //Accounting for the fact that splice will decrement the index by 1 with element removal
    current = (current + 12) % drinkArr.length;
  }

  //Determine the difference between the last element of the order array and 13
  result = -(drinkDrawOrder[drinkDrawOrder.length - 1] - 13);
  //add the difference to the starting point(1)
  return (1 + result) % 13;
}
