const email = document.getElementById('email');
const form = document.getElementById('form');
const error = document.getElementById('error');
const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

form.onsubmit = function(e) { 
    e.preventDefault();
    if (email.value == '') {
      console.log('hehe');
      error.classList.add('show')
      error.innerHTML = 'Whoops! It looks like you forgot to add your email'
      email.classList.add('error')
    } else if (!email.value.match(pattern)) {
      error.classList.add('show')
      error.innerHTML = 'Please provide a valid email address'
      email.classList.add('error')
      email.focus()
    } else {
      form.submit();
    }
}