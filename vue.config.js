module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '@/styles/_variables.scss';
        @import '@/styles/_mixins.scss';
        @import '@/styles/_utilities.scss';
        @import '@/styles/components/_button.scss';
        `
      }
    }
  }
}