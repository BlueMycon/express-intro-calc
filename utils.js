const { BadRequestError } = require("./expressError");

/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful,
  // throw a BadRequestError and will
  // be handled in your route
  return strNums.split(',').map(c => {
     if (isNaN(c)) {
       throw new BadRequestError(`${c} is not a number.`);
    }
    return Number(c);
  })
}


module.exports = { convertStrNums };