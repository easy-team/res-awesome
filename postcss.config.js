
'use strict';

module.exports = {
  plugins: [
    require('autoprefixer')({ overrideBrowserslist: ['iOS >= 9', 'Android >= 4.4'] })
  ]
};