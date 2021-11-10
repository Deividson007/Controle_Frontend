import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from 'vuelidate';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWindowClose, faCog, faTachometerAlt, faJedi, faCalendar, faSync, faFilter, faUserFriends, faSortUp, faSortDown, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faWindowClose, faCog, faTachometerAlt, faJedi, faCalendar, faSync, faFilter, faUserFriends, faSortUp, faSortDown, faEye, faEyeSlash);

Vue.component('font-icon', FontAwesomeIcon);
Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
