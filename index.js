function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
} 

function leaseDog(dogName, dogBreed) {
    console.log(`Lease ${dogName} the ${dogBreed}`);
} 

wakeDog("Xerox", "Border Collie")
leaseDog("Xerox", "Border Collie")

function walkToPark(dogName, dogBreed) {
    console.log(`Walk ${dogName} the ${dogBreed} to the park`);
} 

function throwFrisbee(dogName, dogBreed) {
    console.log(`throw the frisbee for ${dogName} the ${dogBreed}`);
}  

function walkHome(dogName, dogBreed) {
    console.log(`Walk ${dogName} the ${dogBreed} home`);
}  

function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
}

function exerciseDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the fribsee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
//   return `${dogName} is happy and tired!`
}

let result = exerciseDog("Byron", "poodle");
console.log(result);