[![npm][npm]][npm-url]
[![tests][tests]][tests-url]

<div align="center">
  <a href="https://github.com/CoderLim/uniform-props-webpack-plugin">
    <img width="200" height="200"
      src="https://github.com/CoderLim/uniform-props-webpack-plugin/blob/master/assets/icon.png">
  </a>
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Uniform Props Plugin</h1>
  <p>Add extra props to all elements, which created by `React.createElement`.  </p>
</div>

<h2 align="center">Introduction</h2>

`uniform-props-webpack-plugin` is a webpack plugin, which allows you to inject one property to all react elements. You can inject only one property at present, I'll consider whether I should make it support multi properties or maybe not. This plugin is not as good as what I need, because the injected property will apply to all react elements, some of the elements maybe not support the property, so you'd better treat `uniform-props-webpack-plugin` as an temporary alternative;

<h2 align="center">Install</h2>

Install with npm: 

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
[tests-url]: https://www.travis-ci.org/CoderLim/uniform-props-webpack-plugin
