import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./scss/site.css";
import "../src/scss/main/main.scss";

createApp(App).use(store).use(router).mount("#app");
