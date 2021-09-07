const fs = require('fs');

const addMovie = (likeVar, movie, actor, year) => {
  const list = JSON.parse(fs.readFileSync("../storage.json"));
  list.push({name: movie, likeVar: likeVar, actor: actor, year: year})
  const stringList = JSON.stringify(list)
  fs.writeFileSync("../storage.json", stringList)
}

const listDb = (item) => {
  console.log('Current Db contents...')
  const list = JSON.parse(fs.readFileSync("../storage.json"));
  for (let i = 0; i < list.length; i++) {
    console.log(list[i])
  }
}



exports.goodOrBad = (likeVar, movie, actor, year) => {


  if (likeVar.toLowerCase() === "show") {
    listDb()
  }
  else {
    if (likeVar && movie && actor && year) {
      if (likeVar.toLowerCase() === "good") {
        addMovie(likeVar, movie, actor, year)
        console.clear();
        console.log(`I think ${movie} is a great movie and ${actor} plays part well.`);
        console.log(`This film was made in the year ${year}`)
  
      } else if (likeVar.toLowerCase()=== "bad") {
          addMovie(likeVar, movie, actor, year)
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
}


