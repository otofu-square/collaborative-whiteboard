import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext/StageProvider";

import { RegularPolygon } from "./RegularPolygon";

export default {
  component: RegularPolygon,
  title: "demos/shapes/RegularPolygon",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/RegularPolygon.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <RegularPolygon />
    </Layer>
  </StageProvider>
);
