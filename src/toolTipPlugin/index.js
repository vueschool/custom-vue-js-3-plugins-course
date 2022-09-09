import { defineAsyncComponent } from "vue";
export function toolTipPlugin(app, options) {
  app.component(
    "ToolTip",
    defineAsyncComponent(() => import("./ToolTip.vue"))
  );
  console.log("Hello plugin", options);
}
