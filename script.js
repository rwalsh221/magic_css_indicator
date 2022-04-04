const elementsObj = {
  indicator: document.querySelector('[data-indicator]'),
  nav: document.querySelector('.nav'),
  selectedNavElement: document.querySelector('[data-nav-container="one"]'),
  prevSelectedNavElement: document.querySelector('[data-nav-container="one"]'),
};

const animation = {
  icon: { up: { top: '-45px' }, down: { top: '20px' } },
  description: {
    up: { top: '-5px', opacity: '1' },
    down: { top: '15px', opacity: '0' },
  },
};

const navContainers = [...document.querySelectorAll('[data-nav-container]')];

const getSelectedNavElement = (event) => {
  elementsObj.selectedNavElement = document.querySelector(
    `[data-nav-container="${event.target.dataset.navContainer}"]`
  );
  animateChildElement(elementsObj.prevSelectedNavElement, 'down');
  elementsObj.prevSelectedNavElement = elementsObj.selectedNavElement;
  positionIndicator();
};

const getCurrentIndicatorPosition = () => {
  return elementsObj.indicator.getBoundingClientRect();
};

const positionIndicator = (event = 'one') => {
  const nav = elementsObj.nav.getBoundingClientRect();

  const indicatorPostion = getCurrentIndicatorPosition();
  const selectedElementPosition =
    elementsObj.selectedNavElement.getBoundingClientRect();

  const moveIndicator = selectedElementPosition.left - nav.left;

  //   centers the indicator over the nav item
  const setIndicatorPosition =
    selectedElementPosition.width / 2 -
    indicatorPostion.width / 2 +
    moveIndicator;

  elementsObj.indicator.style.left = `${setIndicatorPosition}px`;

  animateChildElement(elementsObj.selectedNavElement);
};

const animateChildElement = (selectedNavElement, animationDirection = 'up') => {
  const childNodesArr = [...selectedNavElement.childNodes];

  childNodesArr.forEach((element) => {
    if (element.dataset) {
      const selectedNavChild = selectedNavElement.querySelector(
        `[data-nav-item="${element.dataset.navItem}"]`
      );
      if (element.dataset.navItem === 'icon') {
        selectedNavChild.style.top = animation.icon[animationDirection].top;
        return;
      }

      if (element.dataset.navItem === 'description') {
        selectedNavChild.style.top =
          animation.description[animationDirection].top;
        selectedNavChild.style.opacity =
          animation.description[animationDirection].opacity;
        return;
      }
    }
  });
};

// EVENT LISTENER

navContainers.forEach((element) =>
  document
    .querySelector(`[data-nav-container="${element.dataset.navContainer}"]`)
    .addEventListener('click', (event) => getSelectedNavElement(event))
);

positionIndicator();
