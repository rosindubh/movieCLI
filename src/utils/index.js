

exports.goodOrBad = (likeVar, movie, actor, year) => {
  if (actor && year) {
    if (likeVar === "good") {
      console.clear();
      console.log(`I think ${movie} is great movie and ${actor} plays part well.`);
      console.log(`This film was made in the year ${year}`)
    } else if (likeVar=== "bad") {
        console.clear();
        console.log(`I think ${movie} made in the year ${year } is bad and ${actor} can't act for toffee.`);
    } else {
      console.log("Incorrect Input")
    }
  }
  else {
    console.clear();
    console.log('You must enter both an actor and a year.');
    console.log(`You entered the following:`);
    console.log();
    console.log(`Did you like it: ${likeVar}`);
    console.log(`Movie: ${movie}`);
    console.log(`Actor: ${actor}`);
    console.log(`Year: ${year}`);
  }
  }


