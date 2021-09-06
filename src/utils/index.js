exports.goodOrBad = (likeVar, movie, actor, year) => {
  if (likeVar && movie && actor && year) {
    if (likeVar.toLowerCase() === "good") {
      console.clear();
      console.log(`I think ${movie} is a great movie and ${actor} plays part well.`);
      console.log(`This film was made in the year ${year}`)
    } else if (likeVar.toLowerCase()=== "bad") {
        console.clear();
        console.log(`I think ${movie} made in the year ${year } is bad and ${actor} can't act for toffee.`);
    } else {
      console.log(`Incorrect Input`)

    }
  }
  else {
    var myArgs = process.argv.slice(2);
    console.clear();
    console.log('Not enough variables...');
    console.log(`You entered the following:`);
    console.log(`\n[${myArgs}]\n`)
  }
}


