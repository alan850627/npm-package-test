const async = require('async');

module.exports = function() {
  return function(numbers) {
    async.series([
      add
    ]);

    function add() {
      let sum;
      numbers.forEach((num) => {
        sum += num;
      })
      console.log('Sum: ' + sum);
    }
  }
}
