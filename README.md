[![npm][npm]][npm-url]
[![tests][tests]][tests-url]

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Uniform Props Plugin</h1>
  <p>Add extra props to all elements, which created by `React.createElement`.  </p>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev uniform-props-webpack-plugin
```

<h2 align="center">Usage</h2>

```js
module.exports = {
  entry: "./index.js",
  output: {
    filename: '[name].js',
  },
  plugins: [
    new UniformPropsPlugin({ size: 'small' })
  ]
}
```

<h2 align="center">License</h2>

> MIT





[npm]: https://img.shields.io/npm/v/uniform-props-webpack-plugin.svg
[npm-url]: https://npmjs.com/package/uniform-props-webpack-plugin

[tests]: https://www.travis-ci.org/CoderLim/uniform-props-webpack-plugin.svg?branch=master
[tests-url]: https://travis-ci.org/webpack-contrib/extract-text-webpack-plugin
