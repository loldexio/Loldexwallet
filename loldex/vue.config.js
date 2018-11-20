const path = require('path');
function resolveSrc(_path) {
  return path.join(__dirname, _path)
}
module.exports = {
    css: {
        loaderOptions: {
          sass: {
            data: `
              @import "@/scss/global.scss";
            `
          }
        }
    }
};
