import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext/StageProvider";

import { TextPath } from "./TextPath";

export default {
  component: TextPath,
  title: "demos/shapes/TextPath",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/TextPath.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <TextPath />
    </Layer>
  </StageProvider>
);
