/* Outra opção, nesse caso pode tirar da tag body o  onscroll="onScroll()" */
// window.addEventListener('scroll', onScroll);
/* é preciso executar uma única vez */
// onScroll();

const onScroll = () => {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
};

const activateMenuAtCurrentSection = section => {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');
  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }
};

const showNavOnScroll = () => {
  const navigation = document.getElementById('navigation');
  return scrollY > 0
    ? navigation.classList.add('scroll')
    : navigation.classList.remove('scroll');
};

const showBackToTopButtonOnScroll = () => {
  const backToTopButton = document.getElementById('backToTopButton');
  return scrollY > 550
    ? backToTopButton.classList.add('show')
    : backToTopButton.classList.remove('show');
};

const openMenu = () => {
  document.body.classList.add('menu-expended');
};

const closeMenu = () => {
  document.body.classList.remove('menu-expended');
};

// Lib Scroll Reveal
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats,
#services,
#services header,
#services.card
#about,
#about header,
#about .content`);
