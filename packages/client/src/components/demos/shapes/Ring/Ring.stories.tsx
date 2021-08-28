import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext/StageProvider";

import { Ring } from "./Ring";

export default {
  component: Ring,
  title: "demos/shapes/Ring",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Ring.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Ring />
    </Layer>
  </StageProvider>
);
