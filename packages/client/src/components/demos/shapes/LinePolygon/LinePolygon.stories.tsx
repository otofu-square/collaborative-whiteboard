import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext";

import { LinePolygon } from "./LinePolygon";

export default {
  component: LinePolygon,
  title: "demos/shapes/LinePolygon",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Line_-_Polygon.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <LinePolygon />
    </Layer>
  </StageProvider>
);
