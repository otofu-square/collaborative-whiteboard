import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext";

import { Rect } from "./Rect";

export default {
  component: Rect,
  title: "demos/shapes/Rect",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Rect.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Rect />
    </Layer>
  </StageProvider>
);
