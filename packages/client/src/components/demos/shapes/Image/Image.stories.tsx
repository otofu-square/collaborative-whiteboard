import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext";

import { Image } from "./Image";

export default {
  component: Image,
  title: "demos/shapes/Image",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Image.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Image />
    </Layer>
  </StageProvider>
);
