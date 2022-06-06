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
