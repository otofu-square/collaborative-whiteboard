import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext";

import { Sprite } from "./Sprite";

export default {
  component: Sprite,
  title: "demos/shapes/Sprite",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Sprite.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Sprite />
    </Layer>
  </StageProvider>
);
