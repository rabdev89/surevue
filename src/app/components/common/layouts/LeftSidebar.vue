<script>
import NavBar from "@/app/components/common/includes/NavBar";
import FooterBar from "@/app/components/common/includes/FooterBar";

export default {
  components: {
    NavBar,
    FooterBar
  }
};
</script>

<template>
  <div>
    <nav-bar />

    <div class="container section">
      <div class="columns">
        <div class="column is-8">
          <router-view></router-view>
        </div>

        <div class="column is-4">

        </div>
      </div>
    </div>

    <footer-bar />
  </div>
</template>
