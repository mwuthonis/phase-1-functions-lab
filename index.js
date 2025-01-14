// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
    //returns the number of blocks given a value
}
function distanceFromHqInFeet(pickupLocation){
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; //264 feet per block
    //returns the distance in feet
}
function distanceTravelledInFeet(start, destination){
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * 264;
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
     
    if (distance <= 400){
        return 0;// For the first 400 - a free sample
    } else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02; //2 cents per feet
    } else if(distance > 2000 && distance <= 2500){
        return 25; //fixed charges for $25
    } else{
        return 'cannot travel that far'; //Over 2500 is not allowed
    }
}
