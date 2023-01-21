import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faUserSecret,
    faCoffee,
    faTrash,
    faCircle,
    faCircleCheck,
    faPenToSquare,
    faCirclePlus,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faUserSecret,
    faCoffee,
    faTrash,
    faCircle,
    faCircleCheck,
    faPenToSquare,
    faCirclePlus,
    faCircleXmark,
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");