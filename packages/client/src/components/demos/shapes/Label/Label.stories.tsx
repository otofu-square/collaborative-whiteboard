import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext/StageProvider";

import { Label } from "./Label";

export default {
  component: Label,
  title: "demos/shapes/Label",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Label.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Label />
    </Layer>
  </StageProvider>
);
