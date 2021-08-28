import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext";

import { LineSpline } from "./LineSpline";

export default {
  component: LineSpline,
  title: "demos/shapes/LineSpline",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Line_-_Spline.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <LineSpline />
    </Layer>
  </StageProvider>
);
