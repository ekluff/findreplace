var romanNumeral = function(year) {
  var result = []
  var yearsLeft = year;
  var numberOfMs = 0;
  var numberOfDs = 0;
  var numberOfCs = 0;
  var numberOfLs = 0;
  var numberOfXs = 0;
  var numberOfVs = 0;
  var numberOfIs = 0;


  while (yearsLeft != 0) {
    if ((yearsLeft/1000) >= 1) {
      numberOfMs = Math.floor(yearsLeft/1000);
      yearsLeft = yearsLeft % 1000;

      for (var i = 0; i < numberOfMs; i++) {
        result.push('M');
      };
    };

    if ((yearsLeft/900) >= 1) {
      yearsLeft = yearsLeft - 900
      result.push('CM')
    };

    if ((yearsLeft/500) >= 1) {
      numberOfDs = Math.floor(yearsLeft/500);
      yearsLeft = yearsLeft % 500;

      for (var i = 0; i < numberOfDs; i++) {
        result.push('D');
      };
    };



    if ((yearsLeft/100) >= 1) {
      numberOfCs = Math.floor(yearsLeft/100);
      yearsLeft = yearsLeft % 100;

      if (numberOfCs === 4) {
        result.push("CD")

      } else {
        for (var i = 0; i < numberOfCs; i++) {
          result.push('C');
        };
      };
    };

    if ((yearsLeft/90) >= 1) {
      yearsLeft = yearsLeft - 90
      result.push('XC')
    };

    if ((yearsLeft/50) >= 1) {
      numberOfLs = Math.floor(yearsLeft/50);
      yearsLeft = yearsLeft % 50;

      for (var i = 0; i < numberOfLs; i++) {
        result.push('L');
      };
    };



    if ((yearsLeft/10) >= 1) {
      numberOfXs = Math.floor(yearsLeft/10);
      yearsLeft = yearsLeft % 10;

      if (numberOfXs === 4) {
        result.push("XL");
      } else {
        for (var i = 0; i < numberOfXs; i++) {
          result.push('X');

        };
      };
    };

    if ((yearsLeft/9) >= 1) {
      yearsLeft = yearsLeft - 9
      result.push('IX')
    };

    if ((yearsLeft/5) >= 1) {
      numberOfVs = Math.floor(yearsLeft/5);
      yearsLeft = yearsLeft % 5;

      for (var i = 0; i < numberOfVs; i++) {
        result.push('V');
      };
    };

    if ((yearsLeft/1) >= 1) {
      numberOfIs = Math.floor(yearsLeft/1);
      yearsLeft = yearsLeft % 1;

      if (numberOfIs === 4) {
        result.push("IV")

      } else {
        for (var i = 0; i < numberOfIs; i++) {
          result.push('I');
        };
      };
    };

    result = result.join('');

    return result;
  };

};

$(document).ready(function(){
  $('form#roman-numeral').submit(function(event){
    var year = parseInt($('input#year').val());
    if (year > 3999) {
      alert("Roman years can't be more than 3999. Please try again!")
    } else {
      var result = romanNumeral(year);

      $('#input-year').text(year);
      $('#roman-result').text(result);

      $('.result').show();
      event.preventDefault();
    };
  });
});
