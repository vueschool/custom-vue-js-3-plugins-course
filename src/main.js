import { createApp } from "vue";
import App from "./App.vue";
import { myFirstPlugin } from "./myFirstPlugin";

import "./assets/main.css";

createApp(App)
  .use(myFirstPlugin, {
    option1: true,
  })
  .mount("#app");
