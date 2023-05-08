const pacman = document.getElementById('pacman')
const slackOverFlow = document.getElementById('slackoverflow');
const onyxGaming = document.getElementById('onyx-gaming')

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