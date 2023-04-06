// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
    if (blocks<42){
      return(42-blocks);
    }
    else {
  
    return(blocks-42);
}
}
function distanceFromHqInFeet (blocks) {
    return distanceFromHqInBlocks(blocks)*264;
}

function distanceTravelledInFeet (a,b) {
    if (b>a) {
        return (b-a)*264
    }
    else {
        return (a-b)*264
    }
}
function calculatesFarePrice(c,d){
    let distance = distanceTravelledInFeet(c,d);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }