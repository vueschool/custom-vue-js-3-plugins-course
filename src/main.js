import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

const myFirstPlugin = {
  install(app, options) {
    console.log("Hello plugin", options);
  },
};

createApp(App)
  .use(myFirstPlugin, {
    option1: true,
  })
  .mount("#app");
