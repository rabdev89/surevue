<template>
    <section class="section login-container">
        <div class="columns">
            <div class="column is-6-tablet is-offset-3-tablet is-one-third-desktop is-offset-one-third-desktop">
                <div class="login-form">
                    <h1 class="title is-1">
                        Login
                    </h1>
                    <div class="box">
                        <form @submit.prevent="handleFormSubmit">

                            <b-field label="Email"
                                :type="{'is-danger': errors.has('email')}"
                                :message="errors.first('email')">
                                <b-input v-model="email" name="email" v-validate="'required'" />
                            </b-field>


                            <b-field label="Password"
                                :type="{'is-danger': errors.has('password')}"
                                :message="errors.first('password')">
                                <b-input type="password" v-model="password" name="password" v-validate="'required|min:8'" />
                            </b-field>


                            <button type="submit" class="button is-primary"> Submit </button>
                        </form>
                        </hr>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { mapActions } from 'vuex';
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
    events: ''
})
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['setUserEmail']),
        handleFormSubmit() {

        }
    }
}
</script>
<style lang="scss">
.login-form {
  margin: 1em;
}
@media (min-width: 768px) {
    .login-form {
        margin: 3em 0;
    }
}

</style>
