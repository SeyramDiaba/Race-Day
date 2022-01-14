let raceNumber = Math.floor(Math.random() * 1000);

// variable indicating if a runner registered early or not
let reg_status = false;

// runners age
let run_age = 19;

// Conotrol flow to check whether the runner is an adult and registered early
if (run_age > 18 && reg_status === true){
  raceNumber += 1000;
}
// Race time for contestants who are adults and registered early
if (run_age > 18 && reg_status){
  console.log(`Contestant number: ${raceNumber} will race at 9:30am.`);
}
//  Runner is over 18 AND did not register early they will race at 11:00am
else if(run_age > 18 &&  !reg_status){
  console.log(`Late adult contestant number: ${raceNumber} will race at 11:00am.`);
}
else if(run_age < 18){
  console.log(`Contestant under 18, your number is: ${raceNumber} and your race time is 12:30pm .`);
}
// Console output for participants who are 18 years
else{
  console.log(`${run_age} year old participants are to report at the registration desk`)
}
