const async = require('async');

module.exports = function() {
  return function(numbers) {
    async.series([
      mul
    ]);

    function mul() {
      let prod = 1;
      numbers.forEach((num) => {
        prod *= Number(num);
      })
      console.log('Product: ' + prod);
    }
  }
}
