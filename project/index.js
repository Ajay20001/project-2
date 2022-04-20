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

//Cart

let closeBtn = document.getElementById("close");
for(let i=0; i < closeBtn.length; i++)
{
  let btn = closeBtn[i];
  btn.addEventListener('click', () => {
    console.log("hello");
  })
}

// SIGN IN PAGE

function clickMe(){
  let pass = document.getElementById("validationTooltip04").value;
  let confirmPass = document.getElementById("validationTooltip05").value;
  if(pass !== confirmPass){
      swal({
          icon: "warning",
          title: "Password do not match",
          dangerMode: true,
      });
      return false;
  }
}


