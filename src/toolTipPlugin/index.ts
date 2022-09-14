import { defineAsyncComponent } from "vue";
import { defu } from "defu";
import { hideAll } from "tippy.js";
export const tooltipOptionsInject = Symbol();
import type { Props } from "tippy.js";

type PluginOptions = Partial<Props>;

export function createToolTipPlugin(options: PluginOptions) {
  return (app) => {
    options = defu(options, {
      arrow: false,
    });

    app.config.globalProperties.$hideAllTooltips = hideAll;

    app.provide(tooltipOptionsInject, options);
    app.component(
      "ToolTip",
      defineAsyncComponent(() => import("./ToolTip.vue"))
    );
  };
}
