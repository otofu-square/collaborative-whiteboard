import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext/StageProvider";

import { Custom } from "./Custom";

export default {
  component: Custom,
  title: "demos/shapes/Custom",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Custom.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Custom />
    </Layer>
  </StageProvider>
);
