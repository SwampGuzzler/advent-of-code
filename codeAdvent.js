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

exports.dayTwo = function (spreadsheet) { // nestedArray
  var total = 0;

  for (var l = 0; l < spreadsheet.length; l++) {
    var smallest, largest;
    var row = spreadsheet[l];

    for (var m = 0; m < row.length; m++) {
      if (!smallest) {
        smallest = row[m];
      } else if (row[m] < smallest) {
        smallest = row[m];
      }

      if (!largest) {
        largest = row[m];
      } else if (row[m] > largest) {
        largest = row[m];
      }
    }

    var diff = largest - smallest;
    total += diff;
    smallest = undefined;
    largest = undefined;
  }

  return total;
}

exports.dayTwoPartTwo = function (spreadsheet) {
  var total = 0;

  for (var n = 0; n < spreadsheet.length; n++) {
    var row = spreadsheet[n];

    for (var m = 0; m < row.length; m++) {
      var currentNumber = row[m];
      for (var p = 0; p < row.length; p++) {
        if (m !== p) {
          if (currentNumber % row[p] === 0) {
            total += (currentNumber / row[p]);
          }
        }
      }
    }
  }

  return total;
}
