import { Meta, Story } from "@storybook/react";
import { Layer } from "react-konva";

import { StageProvider } from "~/src/components/utils/StageContext";

import { Text } from "./Text";

export default {
  component: Text,
  title: "demos/shapes/Text",
  parameters: {
    docs: {
      description: {
        component: "https://konvajs.org/docs/shapes/Text.html",
      },
    },
  },
} as Meta;

export const Default: Story = () => (
  <StageProvider width={340} height={340}>
    <Layer>
      <Text />
    </Layer>
  </StageProvider>
);
