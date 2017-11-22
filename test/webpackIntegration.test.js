import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import UniformPropsPlugin from '../src/index.js';

const cases = fs.readdirSync(path.join(__dirname, 'cases'));

describe('Webpack Integretion Tests', () => {
  cases.forEach((testCase) => {
    it(testCase, (done) => {
      let options = { entry: { test: './index.js' } };
      const testDirectory = path.resolve(__dirname, 'cases', testCase);
      const outputPath = path.resolve(__dirname, 'js', testCase);
      const configFile = path.resolve(testDirectory, 'webpack.config.js');

      if (fs.existsSync(configFile)) {
        options = require(configFile);
      }
      options.context = testDirectory;
      if (!options.output) options.output = {filename: '[name].js' };
      if (!options.output.path) options.output.path = outputPath;
      if (!options.module) options.module = {};

      webpack(options, (err, stats) => {
        if (err) done(err);
        if (stats.hasErrors()) done(new Error(stats.toString()));

        const expectedPath = path.resolve(testDirectory, 'expected');
        // fs.readdirSync(expectedPath).forEach((file) => {
          // const expectedFile = path.join(expectedPath, file);
          // const actualFile = path.join(outputPath, file);
          // console.log(expectedFile, actualFile);
          // expect(readFileOrEmpty(actualFile)).toEqual(readFileOrEmpty(expectedFile));
        // });
        console.log('webpack done');
        done();
      });
    });
  });
});

function readFileOrEmpty(path) {
  try {
    return fs.readFileSync(path, 'utf-8');
  } catch (err) {
    return '';
  }
}
