var replaceAll = function(string, find, replace) {

  return string.replace(new RegExp(find, 'g'), replace);

};

// $(document).ready(function(){
//   $('form#FORM').submit(function(event){
//     // var year = parseInt($('input#INPUT').val());
//
//     // stuff
//
//     $('.result').show();
//     event.preventDefault();
//   };
// });
