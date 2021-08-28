import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext";

import { LineBlob } from "./LineBlob";

export default {
  component: LineBlob,
  title: "demos/shapes/LineBlob",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Line_-_Blob.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={600} height={600}>
    <Layer>
      <LineBlob />
    </Layer>
  </StageProvider>
);
