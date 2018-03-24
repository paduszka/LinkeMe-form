$(document).ready(function() {
  
  jQuery.validator.addMethod("codfiscale", function(value) { 
       var regex = /[A-Za-z]{6}[0-9lmnpqrstuvLMNPQRSTUV]{2}[abcdehlmprstABCDEHLMPRST]{1}[0-9lmnpqrstuvLMNPQRSTUV]{2}[A-Za-z]{1}[0-9lmnpqrstuvLMNPQRSTUV]{3}[A-Za-z]{1}/;
       return value.match(regex);  
   }, "Please insert a valid italian identification number");
   
  $.validator.addMethod("birth", function (value, element) {
        var year = value.split('/');
        if ( value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/) && parseInt(year[2]) <= 2002 )
            return true;
        else
            return false;
    });
        
 $('#signup').validate({
   rules: {
     name: {
       required: true,
       minlength: 2,
       lettersonly: true
     },
     surname: {
       required: true,
       minlength: 2,
       lettersonly: true
     },
     email: {
        required: true,
        email: true
     },
     codicefiscale: {
        required: true,
        codfiscale: true
     },
     dob: {
       required: true,
       dateITA: true
     }
   }, // The end of object rules
   messages: {
        name: {
          required: "Insert your name",
          minlength: "Its not a correct name",
          lettersonly: "Its not a correct name"
        },
        surname: {
          required: "Insert your name",
            minlength: "Its not a correct surname",
          lettersonly: "Its not a correct surname"
        },
	      email: {
	          required: "Insert your e-mail adress",
	          email: "It's not a correct e-mail adress"
	        },
        codicefiscale: {
           required: "Please insert a valid italian identification number",
           rangelength: "Please insert a valid italian identification number"
        },
        dob: {
           required: "Insert your date - dd/mm/yyyy",
           dateITA: "Insert your date - dd/mm/yyyy"
        },
   }

  }); // The end of function validate
}); // The end of function ready 