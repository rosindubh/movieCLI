const { goodOrBad } = require("./utils")
const likeVar = process.argv[2];
const movie = process.argv[3];
const actor = process.argv[4];
const year = process.argv[5];

goodOrBad(likeVar, movie, actor, year)

