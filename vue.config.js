module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";` // Path to your global SCSS variables file
      }
    }
  }
};
