document.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('#nav-button');
  const navContent = document.querySelector('#nav-content');

  navButton.addEventListener('click', () => {
    console.log('clicked');
    navContent.classList.toggle('hidden');
  });
});
