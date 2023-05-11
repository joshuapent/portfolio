const pacman = document.getElementById('pacman')
const slackOverFlow = document.getElementById('slackoverflow');
const onyxGaming = document.getElementById('onyx-gaming')
const home = document.getElementById('home')
const aboutMe = document.getElementById('about-me')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')

let scrollLocation = null;

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
    console.log('name', navLink.name)
    scrollLocation = parseInt(navLink.name)
    console.log('this', scrollLocation)
    if(navPlaceholder) {
      navPlaceholder.removeAttribute('aria-current')
      navPlaceholder.classList.remove('active-link')
    }
    evt.preventDefault();
    this.setAttribute('aria-current', true)
    this.classList.add('active-link')
    scrollFunction()
    navPlaceholder = this;
    console.log(this.getAttribute('href'))
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

function scrollFunction(evt) {
  const scrollBar = document.querySelector('div.scroll-bar')
  if(!scrollLocation) { 
    scrollLocation = 0;
  }
  if (evt) {
    if (evt.wheelDeltaY < 0 && scrollLocation < 3) {
      scrollLocation++;
    } else if (evt.wheelDeltaY > 0 && scrollLocation > 0) {
      scrollLocation--;
    }
    let thisLink = document.querySelector(`a[name='${scrollLocation}']`)
    console.log(thisLink.getAttribute('href'))
    document.querySelector(thisLink.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  }
  scrollBar.style.transform = `translateY(${50*scrollLocation}px)`;
}

// document.addEventListener("wheel", throttle(scrollFunction, 1000));
let wait = false;
document.addEventListener('wheel', function(evt) {
  evt.preventDefault();
  if (wait) return;
  scrollFunction(evt);
  wait = true;
  setTimeout(() => {
    wait = false;
  }, 1000);
  console.log('hi')
}, { passive: false });