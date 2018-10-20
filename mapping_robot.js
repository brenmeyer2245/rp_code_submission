function mappingRobot(arr) {
  //Store values for North, South, West, East
  let N = 0, W = 0, S = 0, E = 0;
  let currentDirection =  "west"

  arr.forEach(input => {
    //extract direction string and value
    const dir = input[0]
    const val = parseInt(input.slice(1));

    /** Map current direction to a case
     *  Determine whether robot is turning "L" or "R"
     * Add to corresponding direction's total
     * Then update the current direction with the direction the robot is now heading in
     **/
    switch(currentDirection){
      //if heading east
      case 'east': {
          //if robot turns left, its going north
          if(dir === "L") {
            //add to North value
            N += val
            //change direction to north
            currentDirection = "north"
          } else{
            S += val
            currentDirection = "south"
          }
          break;
      }
      case'west': {
          if(dir === "L") {
            S += val
            currentDirection = "south"
          } else {
              N += val
              currentDirection = "north"
          }
           break;
      }
      case 'north': {
          if(dir === "L") {
            W += val
            currentDirection = "west"
          } else{
              E += val
              currentDirection = "east"
          }
           break;
      }
      case 'south': {
          if(dir === "L") {
            E += val
            currentDirection = "east"
          } else {
              W += val
              currentDirection = "west"
          }
         break;
      }
    }
  })
  //Calculate NorthSouth Output. North is positive, South is Negative
  const NorthSouthCalc = N - S >= 0 ? `R${N-S}` : `L${-(N-S)}`
  let EastWestCalc = E - W

  //Determine East West Output in context to NorthSouth direction
    if (NorthSouthCalc[0] === "R") {
      //if North, + is East, - is West
      EastWestCalc = EastWestCalc > 0 ? `R${EastWestCalc}` : `L${-EastWestCalc}`
    } else {
      //If South, + is East, - is West
      EastWestCalc = EastWestCalc > 0 ? `L${EastWestCalc}` : `R${-EastWestCalc}`
    }
  return `${NorthSouthCalc} ${EastWestCalc}`
}

