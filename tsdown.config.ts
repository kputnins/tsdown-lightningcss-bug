import { defineConfig } from "tsdown";

export default defineConfig({
  platform: "neutral",
  dts: true,
  exports: true,

  // custom config options
  css: {
    modules: true,
    lightningcss: {
      cssModules: {
        animation: false, // 👈 not working
      },
    },
  },
});
