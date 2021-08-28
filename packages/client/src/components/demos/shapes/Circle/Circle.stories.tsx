import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext/StageProvider";

import { Circle } from "./Circle";

export default {
  component: Circle,
  title: "demos/shapes/Circle",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Circle.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Circle />
    </Layer>
  </StageProvider>
);
