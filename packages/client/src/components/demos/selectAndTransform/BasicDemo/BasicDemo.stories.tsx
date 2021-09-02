import { Meta, Story } from "@storybook/react";

import { BasicDemo } from "./BasicDemo";

export default {
  component: BasicDemo,
  title: "demos/selectAndTransform/BasicDemo",
  parameters: {
    docs: {
      description: {
        component:
          "https://konvajs.org/docs/select_and_transform/Basic_demo.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => <BasicDemo />;
