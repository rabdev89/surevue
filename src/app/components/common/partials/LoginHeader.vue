<template>
    <sv-navbar class="is-fixed-top is-dark">
        <router-link
            class="navbar-item"
            slot="navbar-brand"
            to="/home"
        >
            <font-awesome-icon icon="home" />
            Home
        </router-link>
        <router-link
            active-class="is-active"
            class="navbar-item"
            slot="navbar-end"
            to="/login"
            v-show="!email"
        >
            <font-awesome-icon icon="sign-in-alt" />
            Login
        </router-link>
        <router-link
            active-class="is-active"
            class="navbar-item"
            slot="navbar-end"
            to="/profile"
            v-if="email"
        >
            <font-awesome-icon icon="user-circle" />
            {{ email | username }}
        </router-link>
        <a
            @click="handleLogout"
            class="navbar-item"
            slot="navbar-end"
        >
            Logout
        </a>
    </sv-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SvNavbar from '@/app/components/common/partials/Navbar.vue'

export default {
    components: {
        SvNavbar
    },
    computed: {
        ...mapGetters(['email'])
    },
    methods: {
        ...mapActions(['clearUser']),
        handleLogout() {

        }
    },
    filters: {
        username(email) {
            return email.split('@')[0];
        }
    }
}
</script>

<style lang="scss">
.navbar-brand,
.navbar-start,
.navbar-end {
    svg.svg-inline--fa {
        margin-right: 0.5em;
    }
}
</style>
