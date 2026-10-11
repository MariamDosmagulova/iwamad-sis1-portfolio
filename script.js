

const themeButton = document.getElementById('theme-toggle')

themeButton.addEventListener('click', function () {
  const html = document.documentElement

  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light'
    themeButton.textContent = 'Dark mode'
    themeButton.setAttribute('aria-label', 'Switch to dark theme')
  } else {
    html.dataset.theme = 'dark'
    themeButton.textContent = 'Light mode'
    themeButton.setAttribute('aria-label', 'Switch to light theme')
  }
})




const photo = document.querySelector('.about-photo')

photo.addEventListener('error', function () {
  photo.style.display = 'none'
})

if (photo.complete && photo.naturalWidth === 0) {
  photo.style.display = 'none'
}




const form = document.getElementById('contact-form')

form.addEventListener('submit', function (event) {
  
  event.preventDefault()

  const name = document.getElementById('name').value.trim()
  const email = document.getElementById('email').value.trim()
  const message = document.getElementById('message').value.trim()

  const nameError = document.getElementById('name-error')
  const emailError = document.getElementById('email-error')
  const messageError = document.getElementById('message-error')
  const success = document.getElementById('form-success')

  
  nameError.textContent = ''
  emailError.textContent = ''
  messageError.textContent = ''
  success.textContent = ''

  let isValid = true

  
  if (name === '') {
    nameError.textContent = 'Please enter your name.'
    isValid = false
  }

  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (email === '') {
    emailError.textContent = 'Please enter your email address.'
    isValid = false
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Please enter a valid email, for example name@gmail.com.'
    isValid = false
  }

  
  if (message === '') {
    messageError.textContent = 'Please write a message.'
    isValid = false
  }

  
  if (isValid) {
    success.textContent = 'Thank you, ' + name + '! Your message has been sent.'
    form.reset()
  }
})