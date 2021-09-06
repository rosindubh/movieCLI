

exports.goodOrBad = (likeVar, movie, actor, year) => {
  if (year) {
    if (likeVar === "good") {
      console.clear();
      console.log(`I think ${movie} is great movie and ${actor} plays part well.`);
      console.log(`This film was made in the year ${year}`)
    } else if (likeVar=== "bad") {
        console.clear();
        console.log(`I think ${movie} made in the year ${year } is bad and ${actor} can't act for toffee`);
    } else {
      console.log("Incorrect Input")
    }
  }
  else {
    console.log('You must enter a year.')
  }
  }


