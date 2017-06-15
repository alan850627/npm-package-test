const async = require('async');

module.exports = function() {
  return function(numbers) {
    async.series([
      avg
    ]);

    function avg() {
      let sum, count;
      numbers.forEach((num) => {
        sum += num;
        count += 1;
      })
      console.log('Average: ' + sum/count);
    }
  }
}
