import printMe from "./print";

async function getComponent() {
  const element = document.createElement('div');

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { default: _ } = await import('lodash');/* 这里用destructuring assignment把import的结果default重新命名为_, 语法问题详见上面的链接*/

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
