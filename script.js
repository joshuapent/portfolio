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
  slackOverFlow.classList.remove('project-card-show')
  pacman.classList.remove('project-card-show')
  onyxGaming.classList.add('project-card-show');
}

const navLinks = document.querySelectorAll('a.nav-link');

for(i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
}