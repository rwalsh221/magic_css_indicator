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

const positionIndicator = (event) => {
  const element = document.querySelector(
    `[data-nav-item="${event.target.dataset.navItem}"]`
  );
  console.log('hello');
  console.log(element.getBoundingClientRect());
  const elementPosition = element.getBoundingClientRect();

  elements.indicator.style.left = `${elementPosition.left}px`;
};

test.forEach((element) =>
  document
    .querySelector(`[data-nav-item="${element.dataset.navItem}"]`)
    .addEventListener('click', (event) => positionIndicator(event))
);
