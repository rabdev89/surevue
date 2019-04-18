import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import axios from "axios";
import Buefy from "buefy"
import VeeValidate from 'vee-validate';
//import "./registerServiceWorker";
import 'buefy/dist/buefy.css';



//layouts
import Default from "@/app/components/common/layouts/baseLayout.vue";
import Dashboard from "@/app/components/common/layouts/DashboardLayout.vue";
import LeftSidebar from "@/app/components/common/layouts/LeftSidebar.vue";
import LoginLayout from "@/app/components/common/layouts/LoginLayout.vue";


Vue.component("default-layout", Default);
Vue.component("dash-layout", Dashboard);
Vue.component("no-sidebar-layout", LeftSidebar);
Vue.component("login-layout", LoginLayout);


Vue.use(VeeValidate);
Vue.use(Buefy)



// Convenience item - this.$http
Vue.prototype.$http = axios;
window.axios = require('axios');

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  //Vue.prototype.$http.defaults.headers.common['Authorization'] = token
  axios.defaults.headers.common['Authorization'] = token
}


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
