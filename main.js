const email = document.getElementById('email');
const form = document.getElementById('form');
const error = document.getElementById('error');
const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

form.onsubmit = function(e) { 
    e.preventDefault();
    if (!email.value.match(pattern) || '') {
      error.classList.add('show')
      email.classList.add('error')
      email.focus()
    } else {
      form.submit();
    }
}