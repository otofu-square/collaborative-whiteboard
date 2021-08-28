import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext/StageProvider";

import { Arrow } from "./Arrow";

export default {
  component: Arrow,
  title: "demos/shapes/Arrow",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Arrow.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Arrow />
    </Layer>
  </StageProvider>
);
