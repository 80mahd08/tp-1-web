// postcss.config.cjs
const postcssPurgecss = require('postcss-purgecss');

module.exports = {
  plugins: {
    'postcss-purgecss': {
      content: ['./*.html'],
      // Adjust paths based on your project structure
    },
  },
};
