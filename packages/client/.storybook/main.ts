import path from "path";
import { StorybookConfig } from "@storybook/react/types";

const toPath = (p: string) => path.join(process.cwd(), p);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook-preset-craco",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        "@emotion/core": toPath("node_modules/@emotion/react"),
        "emotion-theming": toPath("node_modules/@emotion/react"),
      },
    },
  }),
} as StorybookConfig;
