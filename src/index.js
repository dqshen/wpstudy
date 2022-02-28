import printMe from "./print";

function getComponent() {
  const element = document.createElement('div');
  return import('lodash')
    .then(({ default: _ }/* 这里用destructure assignment把import的结果 _ 赋值给default */) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
