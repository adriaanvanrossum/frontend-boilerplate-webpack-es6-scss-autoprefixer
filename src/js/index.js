// Import scss here because we want to only use one entry point. Because the guides say:
// "As a rule of thumb: for each HTML document use exactly one entry point."
// https://webpack.js.org/concepts/entry-points/
import '../scss/main.scss';

import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  const element = document.createElement('p');

  // Try to look for the cube function in build/...js file (when you run `npm run build`)
  // it's not there, this is called tree shaking: https://webpack.js.org/guides/tree-shaking/
  element.innerHTML = `This is code loaded from <code>src/index.js</code>: cube(5) is ${cube(5)}.`;

  return element;
}

document.body.appendChild(component());
