import { createApp } from "vue";
import App from "./App.vue";
import { createToolTipPlugin } from "./toolTipPlugin";

import "./assets/main.css";

createApp(App)
  .use(
    createToolTipPlugin({
      arrow: true,
      placement: "top",
    })
  )
  .mount("#app");
