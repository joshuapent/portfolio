const pacman = document.getElementById('pacman')
const slackOverFlow = document.getElementById('slackoverflow');
const onyxGaming = document.getElementById('onyx-gaming')
const home = document.getElementById('home')
const aboutMe = document.getElementById('about-me')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')

window.onload = function() {
  pacman.classList.add('project-card-show');
}

document.getElementById('pacman-button').onclick = function() {
  slackOverFlow.classList.remove('project-card-show')
  onyxGaming.classList.remove('project-card-show')
  pacman.classList.add('project-card-show');
}
document.getElementById('slack-button').onclick = function() {
  pacman.classList.remove('project-card-show')
  onyxGaming.classList.remove('project-card-show')
  slackOverFlow.classList.add('project-card-show');
}
document.getElementById('onyx-button').onclick = function() {
  slackOverFlow.classList.remove('project-card-show');
  pacman.classList.remove('project-card-show');
  onyxGaming.classList.add('project-card-show ');
}

let navPlaceholder;
const navLinks = document.querySelectorAll('a.nav-link').forEach(navLink => {
  navLink.addEventListener('click', function(evt) {
    if(navPlaceholder) {
      navPlaceholder.removeAttribute('aria-current')
      navPlaceholder.classList.remove('active-link')
    }
    evt.preventDefault();
    this.setAttribute('aria-current', true)
    this.classList.add('active-link')
    navPlaceholder = this;
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

function throttle(fn, wait) {
  var time = Date.now();
  return function(evt) {
    if (Math.abs(evt.deltaY) < 4) return
    if ((time + wait - Date.now()) < 0) {
      fn(evt);
      time = Date.now();
    }
  }
}

function scrollbar(evt) {
  // console.log(evt)
  if (evt.wheelDeltaY < 0) {
    console.log('down')
  } else if (evt.wheelDeltaY > 0) {
    console.log('up')
  } else return;
}

document.addEventListener("wheel", throttle(scrollbar, 500));
