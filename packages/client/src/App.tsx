import { Box, chakra } from "@chakra-ui/react";
import React, { FC } from "react";
import { Layer, Text } from "react-konva";

import { ColorRect } from "~/ColorRect";
import { StageProvider } from "~/components/utils/StageContext";

export const ChakraRootWWrapperBox = chakra(Box, {
  baseStyle: {
    w: "100%",
    h: "100%",
  },
});

console.log("hoge");

export const App: FC = () => (
  <StageProvider>
    <Layer>
      <Text draggable text="hello world" />
      <ColorRect />
    </Layer>
  </StageProvider>
);
