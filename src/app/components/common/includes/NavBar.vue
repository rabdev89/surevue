<template>
  <nav class="navbar is-dark ">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item" href="/">
          <router-link  to="/"><img :src="getImgUrl('logo.png')"/></router-link>

        </div>

        <a class="navbar-burger" @click="open = !open">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{'is-active': open}">

        <div class="navbar-end">
            <router-link v-if="!isAuthenticated" class="navbar-item" to="/auth/login">Login</router-link>
            <router-link
            v-if="currentUser.email"
            class="navbar-item"
            active-class="active"
            exact
            :to="{
              name: 'profile',
              params: { email: currentUser.email }
            }"
          >
            {{ currentUser.email }}
          </router-link>
          <router-link v-if="isAuthenticated" class="navbar-item"  to="/auth/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>

      </div>


    </div>
  </nav>
</template>

<script>

import { mapGetters } from "vuex";

export default {

  name: 'Navbar',
  props: ['hideNavLogins'],
  data() {
    return {
      open: false,
      isShow: false
    };
  },
  mounted() {

  },
  methods: {
    getImgUrl(logo) {

    },
    logout() {

    }
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  }

};
</script>

<style lang="scss">
.navbar {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}

</style>
