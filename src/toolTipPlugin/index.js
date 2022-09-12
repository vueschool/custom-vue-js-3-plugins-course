import { defineAsyncComponent } from "vue";
export const tooltipOptionsInject = Symbol();
export function toolTipPlugin(app, options) {
  app.provide(tooltipOptionsInject, options);
  app.component(
    "ToolTip",
    defineAsyncComponent(() => import("./ToolTip.vue"))
  );
  console.log("Hello plugin", options);
}
