<template>
  <div id="app">
    <main id="main-content">
      <component v-bind:is="layout">
        <router-view />
      </component>
    </main>
  </div>
</template>


<script>
const default_layout = "default";
export default {
    computed: {
        layout() {
          return (this.$route.meta.layout || default_layout) + "-layout";
        }
      },
      created() {
      },
      updated() {

      }
}
</script>


<style lang="scss">
@import url("https://cdn.materialdesignicons.com/1.9.32/css/materialdesignicons.min.css");
@import url("https://use.fontawesome.com/releases/v5.7.1/css/all.css");

// Page styling
html,
body,
#app {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";
// Set your colors
$primary: #008cba;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);
// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
