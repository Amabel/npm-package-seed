const babel = require('rollup-plugin-babel');
const pkg = require('./package.json');
const changeCase = require('change-case');
const createBanner = require('create-banner');

const name = changeCase.pascalCase(pkg.name);

const banner = createBanner({
  data: {
    name: `${name}`,
    year: '2019-present',
  }
})

module.exports = {
  input: 'src/index.js',
  output: [
    {
      banner,
      name,
      file: 'dist/umd/index.js',
      format: 'umd',
    },
    {
      banner,
      file: 'dist/esm/index.js',
      format: 'esm',
    }
  ],
  plugins: [
    babel(),
  ]
}
