import printMe from "./print";

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');/* 这里用destructure assignment把import的结果 _ 赋值给default */

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
