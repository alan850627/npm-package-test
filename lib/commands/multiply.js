const async = require('async');

module.exports = function() {
  return function(numbers) {
    async.series([
      mul
    ]);

    function mul() {
      let prod;
      numbers.forEach((num) => {
        prod *= num;
      })
      console.log('Product: ' + prod);
    }
  }
}
