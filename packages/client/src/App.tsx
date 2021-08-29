import { Box, chakra } from "@chakra-ui/react";
import React, { FC } from "react";
import { Layer, Text } from "react-konva";

import { ColorRect } from "~/src/ColorRect";
import { StageProvider } from "~/src/components/utils/StageContext";

export const ChakraRootWWrapperBox = chakra(Box, {
  baseStyle: {
    w: "100%",
    h: "100%",
  },
});

export const App: FC = () => (
  <StageProvider>
    <Layer>
      <Text draggable text="hello world" />
      <ColorRect />
    </Layer>
  </StageProvider>
);
