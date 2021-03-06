var assert = require('assert');
var codeAdvent = require('../codeAdvent');
var config = require('../config');

var dayOneTotal = '111831362354551173134957758417849716877188716338227121869992652972154651632296676464285261171625892888598738721925357479249486886375279741651224686642647267979445939836673253446489428761486828844713816198414852769942459766921928735591892723619845983117283575762694758223956262583556675379533479458964152461973321432768858165818549484229241869657725166769662249574889435227698271439423511175653875622976121749344756734658248245212273242115488961818719828258936653236351924292251821352389471971641957941593141159982696396228218461855752555358856127582128823657548151545741663495182446281491763249374581774426225822474112338745629194213976328762985884127324443984163571711941113986826168921187567861288268744663142867866165546795621466134333541274633769865956692539151971953651886381195877638919355216642731848659649263217258599456646635412623461138792945854536154976732167439355548965778313264824237176152196614333748919711422188148687299757751955297978137561935963366682742334867854892581388263132968999722366495346854828316842352829827989419393594846893842746149235681921951476132585199265366836257322121681471877187847219712325933714149151568922456111149524629995933156924418468567649494728828858254296824372929211977446729691143995333874752448315632185286348657293395339475256796591968717487615896959976413637422536563273537972841783386358764761364989261322293887361558128521915542454126546182855197637753115352541578972298715522386683914777967729562229395936593272269661295295223113186683594678533511783187422193626234573849881185849626389774394351115527451886962844431947188429195191724662982411619815811652741733744864411666766133951954595344837179635668177845937578575117168875754181523584442699384167111317875138179567939174589917894597492816476662186746837552978671142265114426813792549412632291424594239391853358914643327549192165466628737614581458189732579814919468795493415762517372227862614224911844744711698557324454211123571327224554259626961741919243229688684838813912553397698937237114287944446722919198743189848428399356842626198635297851274879128322358195585284984366515428245928111112613638341345371';

var dayTwoSpreadsheet = [
  [4168,	3925,	858,	2203,	440,	185,	2886,	160,	1811,	4272,	4333,	2180,	174,	157,	361,	1555],
  [150,	111,	188,	130,	98,	673,	408,	632,	771,	585,	191,	92,	622,	158,	537,	142],
  [5785,	5174,	1304,	3369,	3891,	131,	141,	5781,	5543,	4919,	478,	6585,	116,	520,	673,	112],
  [5900,	173,	5711,	236,	2920,	177,	3585,	4735,	2135,	2122,	5209,	265,	5889,	233,	4639,	5572],
  [861,	511,	907,	138,	981,	168,	889,	986,	980,	471,	107,	130,	596,	744,	251,	123],
  [2196,	188,	1245,	145,	1669,	2444,	656,	234,	1852,	610,	503,	2180,	551,	2241,	643,	175],
  [2051,	1518,	1744,	233,	2155,	139,	658,	159,	1178,	821,	167,	546,	126,	974,	136,	1946],
  [161,	1438,	3317,	4996,	4336,	2170,	130,	4987,	3323,	178,	174,	4830,	3737,	4611,	2655,	2743],
  [3990,	190,	192,	1630,	1623,	203,	1139,	2207,	3994,	1693,	1468,	1829,	164,	4391,	3867,	3036],
  [116,	1668,	1778,	69,	99,	761,	201,	2013,	837,	1225,	419,	120,	1920,	1950,	121,	1831],
  [107,	1006,	92,	807,	1880,	1420,	36,	1819,	1039,	1987,	114,	2028,	1771,	25,	85,	430],
  [5295,	1204,	242,	479,	273,	2868,	3453,	6095,	5324,	6047,	5143,	293,	3288,	3037,	184,	987],
  [295,	1988,	197,	2120,	199,	1856,	181,	232,	564,	1914,	1691,	210,	1527,	1731,	1575,	31],
  [191,	53,	714,	745,	89,	899,	854,	679,	45,	81,	726,	801,	72,	338,	95,	417],
  [219,	3933,	6626,	2137,	3222,	1637,	5312,	238,	5895,	222,	154,	6649,	169,	6438,	3435,	4183],
  [37,	1069,	166,	1037,	172,	258,	1071,	90,	497,	1219,	145,	1206,	143,	153,	1067,	510]
];






describe('Day One', function() {

  it('should return 3 from 1122', function() {
    assert.equal(3, codeAdvent.dayOne('1122'));
  });

  it('should return 4 from 1111', function() {
    assert.equal(4, codeAdvent.dayOne('1111'));
  });

  it('should return 3 from 1234', function() {
    assert.equal(0, codeAdvent.dayOne('1234'));
  });

  it('should return 3 from 91212129', function() {
    assert.equal(9, codeAdvent.dayOne('91212129'));
  });

  // var total = codeAdvent.dayOne(dayOneTotal);
  // console.log('total', total); //1044

});

describe('Day One, Part Two', function() {

  it('should return 6 from 1212', function() {
    assert.equal(6, codeAdvent.dayOnePartTwo('1212'));
  });

  it('should return 0 from 1221', function() {
    assert.equal(0, codeAdvent.dayOnePartTwo('1221'));
  });

  it('should return 4 from 123425', function() {
    assert.equal(4, codeAdvent.dayOnePartTwo('123425'));
  });

  it('should return 12 from 123123', function() {
    assert.equal(12, codeAdvent.dayOnePartTwo('123123'));
  });

  it('should return 4 from 12131415', function() {
    assert.equal(4, codeAdvent.dayOnePartTwo('12131415'));
  });

  // var total = codeAdvent.dayOnePartTwo(dayOneTotal);
  // console.log('totalPartTwo', total); //1054

});

describe('Day Two', function() {
  var spreadsheet = [
    [5, 1, 9, 5],
    [7, 5, 3],
    [2, 4, 6, 8]
  ];

  it('should return 18 from our spreadsheet', function() {
    assert.equal(18, codeAdvent.dayTwo(spreadsheet));
  });

  // var checksum = codeAdvent.dayTwo(dayTwoSpreadsheet);
  // console.log('checksum', checksum); //51833

});

describe('Day Two Part Two', function() {
  var spreadsheet = [
    [5, 9, 2, 8],
    [9, 4, 7, 3],
    [3, 8, 6, 5],
  ];

  it('should return 9 from our spreadsheet', function() {
    assert.equal(9, codeAdvent.dayTwoPartTwo(spreadsheet));
  });

  // var sumResults = codeAdvent.dayTwoPartTwo(dayTwoSpreadsheet);
  // console.log('sumResults', sumResults); //288

});

// describe('Day Three', function() {
//
//   it('should return 18 from our spreadsheet', function() {
//     assert.equal(18, codeAdvent.dayThree(277678));
//   });
//
//   // var checksum = codeAdvent.dayTwo(dayTwoSpreadsheet);
//   // console.log('checksum', checksum); //51833
//
// });

describe('Day Four', function() {

  it('"aa bb cc dd ee" Is a valid passphrase', function() {
    assert.equal(1, codeAdvent.dayFour(['aa bb cc dd ee']));
  });

  it('"aa bb cc dd aa" is Not a valid passphrase', function() {
    assert.equal(0, codeAdvent.dayFour(['aa bb cc dd aa']));
  });

  it('"aa bb cc dd aaa" Is a valid passphrase', function() {
    assert.equal(1, codeAdvent.dayFour(['aa bb cc dd ee']));
  });

  // var validCount = codeAdvent.dayFour(config.dayFourData);
  // console.log('validCount', validCount); //386

});

describe('Day Four Part Two', function() {

  it('"abcde fghij" Is a valid passphrase', function() {
    assert.equal(1, codeAdvent.dayFourPartTwo(['abcde fghij']));
  });

  it('"abcde xyz ecdab" is Not a valid passphrase', function() {
    assert.equal(0, codeAdvent.dayFourPartTwo(['abcde xyz ecdab']));
  });

  it('"a ab abc abd abf abj" Is a valid passphrase', function() {
    assert.equal(1, codeAdvent.dayFourPartTwo(['a ab abc abd abf abj']));
  });

  it('"iiii oiii ooii oooi oooo" Is a valid passphrase', function() {
    assert.equal(1, codeAdvent.dayFourPartTwo(['iiii oiii ooii oooi oooo']));
  });

  it('"oiii ioii iioi iiio" Is a valid passphrase', function() {
    assert.equal(0, codeAdvent.dayFourPartTwo(['oiii ioii iioi iiio']));
  });

  // var validCount = codeAdvent.dayFourPartTwo(config.dayFourData);
  // console.log('validCount Part Two', validCount); //386

});

describe('Day Five', function() {

  it('[3, 0, 1, -3] takes me 5 steps to get out', function() {
    assert.equal(5, codeAdvent.dayFive([0, 3, 0, 1, -3]));
  });

  // var instructions = codeAdvent.dayFive(config.dayFiveData);
  // console.log('instructions', instructions); //355965

});

describe('Day Five Part Two', function() {

  it('[3, 0, 1, -3] takes me 10 steps to get out', function() {
    assert.equal(10, codeAdvent.dayFivePartTwo([0, 3, 0, 1, -3]));
  });

  var instructionsTwo = codeAdvent.dayFivePartTwo(config.dayFiveData);
  // console.log('instructionsTwo', instructionsTwo); //355965

});

describe('Day Six', function() {

  it('[0, 2, 7, 0] takes me 5 redistributions to get out', function() {
    assert.equal(5, codeAdvent.daySix([0, 2, 7, 0]));
  });
  // var reallocation = codeAdvent.daySix([4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5]);
  // console.log('reallocation', reallocation); //4074

});
