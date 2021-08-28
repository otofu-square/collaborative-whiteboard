import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext";

import { LineSimple } from "./LineSimple";

export default {
  component: LineSimple,
  title: "demos/shapes/LineSimple",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Line_-_Simple_Line.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <LineSimple />
    </Layer>
  </StageProvider>
);
