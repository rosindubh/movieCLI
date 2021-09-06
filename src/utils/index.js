

exports.goodOrBad = (likeVar, movie, actor, year) => {

  

    if (likeVar === "good") {
      console.log(`I think ${movie} is good and ${actor} plays part well`);
      console.log(`This film was made in the year ${year}`)
    } else if (likeVar=== "bad") {
        console.log(`I think ${movie} is bad and ${actor} can't act for toffee`);
    } else {
      console.log("Incorrect Input")
    }
  }

