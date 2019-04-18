<template>
  <div>
    <nav-bar />

    <div class="container" >
      <router-view></router-view>
    </div>

    <footer-bar />
  </div>
</template>
<script>
import NavBar from "@/app/components/common/includes/NavBar";
import FooterBar from "@/app/components/common/includes/FooterBar";

export default {
  name: 'Base',
  components: {
    NavBar,
    FooterBar
  }
};
</script>
