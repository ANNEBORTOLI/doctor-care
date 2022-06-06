const onScroll = () => {
  const navigation = document.getElementById('navigation');
  return scrollY > 0
    ? navigation.classList.add('scroll')
    : navigation.classList.remove('scroll');
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
