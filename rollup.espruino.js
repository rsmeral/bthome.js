const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: 'src/index.ts',
  output: {
    file: 'dist-espruino/index.js',
    format: 'cjs'
  },
  plugins: [typescript({compilerOptions: {module: 'ESNext'}}), terser({compress: true})]
};

module.exports = config;
