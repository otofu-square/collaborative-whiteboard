import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext/StageProvider";

import { Star } from "./Star";

export default {
  component: Star,
  title: "demos/shapes/Star",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Star.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Star />
    </Layer>
  </StageProvider>
);
