import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext/StageProvider";

import { Arc } from "./Arc";

export default {
  component: Arc,
  title: "demos/shapes/Arc",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Arc.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Arc />
    </Layer>
  </StageProvider>
);
