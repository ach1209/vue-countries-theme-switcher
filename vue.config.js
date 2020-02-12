module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '@/styles/base/_variables.scss';
        @import '@/styles/base/_mixins.scss';
        @import '@/styles/components/_button.scss';
        `
      }
    }
  },
  publicPath: 'vue-countries-theme-switcher'
}