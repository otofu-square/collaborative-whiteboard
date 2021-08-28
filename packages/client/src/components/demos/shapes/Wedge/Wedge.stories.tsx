import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext";

import { Wedge } from "./Wedge";

export default {
  component: Wedge,
  title: "demos/shapes/Wedge",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Wedge.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Wedge />
    </Layer>
  </StageProvider>
);
