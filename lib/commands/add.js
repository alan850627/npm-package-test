const async = require('async');

module.exports = function() {
  return function(numbers) {
    async.series([
      add
    ]);

    function add() {
      let sum = 0;
      numbers.forEach((num) => {
        sum += Number(num);
      })
      console.log('Sum: ' + sum);
    }
  }
}
