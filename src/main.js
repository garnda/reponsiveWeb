import { createApp } from "vue";
import { createPinia } from "pinia";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-css-only/css/bootstrap.min.css";

library.add(faAngleDown, faEyeSlash, faEye);

import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(BootstrapVue3);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueLoading);
app.mount("#app");
