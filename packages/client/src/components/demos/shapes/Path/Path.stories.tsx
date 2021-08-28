import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext/StageProvider";

import { Path } from "./Path";

export default {
  component: Path,
  title: "demos/shapes/Path",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Path.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <Path />
    </Layer>
  </StageProvider>
);
