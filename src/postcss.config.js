module.exports =  function (ctx) {
    const automath = require('postcss-automath');
    const postcssImport = require("postcss-import");
    const autoprefixer = require("autoprefixer");
    const map = require("postcss-map")();
    const simpleVars = require("postcss-simple-vars")();
    const cssfor = require("postcss-for")();
    const mixins = require("postcss-mixins")();
    const colorFunction = require("postcss-color-function")();
    const nestedAncestors = require("postcss-nested-ancestors")();
    const nested = require("postcss-nested")();
    const calc = require("postcss-calc")();
    const assets = require("postcss-assets")();
    return {
        plugins: [
            postcssImport({
                 addDependencyTo: ctx.webpack 
              }),
              mixins,
              calc,
              cssfor,
              simpleVars,
              automath,
              colorFunction,
              nestedAncestors,
              nested,
              map,
              assets,
              autoprefixer({
                browsers: [
                  '>1%',
                  'last 4 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ]
              })
        ]
    }
};

