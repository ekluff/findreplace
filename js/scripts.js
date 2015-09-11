var replaceAll = function(string, find, replace) {
  return string.replace(new RegExp(find, 'g'), replace);
};

$(document).ready(function(){
  $('form#findandreplace').submit(function(event){
    var string = $('input#string').val();
    var find = $('input#find').val();
    var replace = $('input#replace').val();

    var result = replaceAll(string, find, replace);

    $('#result').text(result);

    event.preventDefault();
  });
});
