exports.dayOne = function (digits) {
  var exclusiveNumbers = [];
  var total = 0;

  for (var j = 0; j < digits.length; j++) {
    if (digits.charAt(j) === digits.charAt(j + 1)) {
      total += parseInt(digits.charAt(j));
    } else if (j === digits.length - 1 && digits.charAt(j) === digits.charAt(0)) {
      total += parseInt(digits.charAt(j));
    }
  }

  return total;
}
