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

exports.dayOnePartTwo = function (digits) {
  var exclusiveNumbers = [];
  var total = 0;

  for (var k = 0; k < digits.length; k++) {
    var halfWayDist = digits.length / 2;
    if (k < halfWayDist) {
      if (digits.charAt(k) === digits.charAt(k + halfWayDist)) {
        total += parseInt(digits.charAt(k));
      }
    } else {
      if (digits.charAt(k) === digits.charAt(k - halfWayDist)) {
        total += parseInt(digits.charAt(k));
      }
    }
  }

  return total;
}
