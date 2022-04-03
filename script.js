const elements = {
  indicator: document.querySelector('[data-indicator]'),
};

const test2 = (element) => {
  console.log(element);
};

const test = [...document.querySelectorAll('[data-nav-item]')];
console.log(document.querySelectorAll('[data-nav-item="one"]'));
console.log(test);
console.log(elements.indicator);

const getCurrentIndicatorPosition = () => {
  return elements.indicator.getBoundingClientRect();
};

const positionIndicator = (event) => {
  const element = document.querySelector(
    `[data-nav-item="${event.target.dataset.navItem}"]`
  );
  console.log('hello');
  console.log(element.getBoundingClientRect());

  const nav = document.querySelector('.nav').getBoundingClientRect();

  const indicatorPostion = getCurrentIndicatorPosition();
  const elementPosition = element.getBoundingClientRect();

  console.log('indicator', indicatorPostion.left);
  console.log('element', elementPosition.left);

  const left = elementPosition.left - nav.left;
  console.log(left);

  //   centers the indicator over the nav item
  const setIndicatorPosition =
    elementPosition.width / 2 - indicatorPostion.width / 2 + left;
  //   const setIndicatorPosition = left;
  console.log(indicatorPostion);

  //   elements.indicator.style.left = `${setIndicatorPosition}px`;
  elements.indicator.style.left = `${setIndicatorPosition}px`;

  console.log(element.querySelector('ion-icon'));

  const childIcon = element.querySelector('ion-icon');
  const childText = element.querySelector('p');

  childIcon.style.top = '-50px';
  childText.style.top = '-5px';
  childText.style.opacity = '1';
};

test.forEach((element) =>
  document
    .querySelector(`[data-nav-item="${element.dataset.navItem}"]`)
    .addEventListener('click', (event) => positionIndicator(event))
);
