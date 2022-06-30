// FORM VALIDATION(INDEX PAGE)

const { add } = require("nodemon/lib/rules")

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

// SIGN UP PAGE

function clickMe(){
  let pass = document.getElementById("validationTooltip04").value;
  let confirmPass = document.getElementById("validationTooltip05").value;
  if(pass !== confirmPass){
      Swal.fire({
        icon: 'warning',
        title: 'Password do not match',
        confirmButtonColor: '#dc3545'
      })
      return false;
  }
}


