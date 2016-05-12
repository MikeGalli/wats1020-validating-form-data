/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).on('ready', function(){
  $('#order-form').validate({
      submitHandler: function(X) {
          // If form is valid, submit it!
          X.submit();
      },
      onfocusout: function(element) {
        $(element).valid();
      },
      rules: {
          "your-name": {
              required: true,
              maxlength: 2
          },
          "div.form-group. required": {
            required: true
          },
          "your-state": {
              required: true,
              maxlength: 2
          }

          function isStateOk(inputField, helpId) {        // See if the input value contains any text

return editNodeText(/^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|

M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/, inputField.value, helpId, “Enter a State Code in Uppercase (Ex.NY, PA, CA)”);

}

- See more at: http://www.newthinktank.com/2011/02/javascript-video-tutorial-pt-7/#sthash.QPZqBsS9.dpuf


        }
    });
});
