import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext/StageProvider";

import { Ellipse } from "./Ellipse";

export default {
  component: Ellipse,
  title: "demos/shapes/Ellipse",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Ellipse.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Ellipse />
    </Layer>
  </StageProvider>
);
