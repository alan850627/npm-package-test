const async = require('async');

module.exports = function() {
  return function(numbers) {
    async.series([
      avg
    ]);

    function avg() {
      let sum = 0, count = 0;
      numbers.forEach((num) => {
        sum += Number(num);
        count += 1;
      })
      console.log('Average: ' + sum/count);
    }
  }
}
