import { Box, chakra } from "@chakra-ui/react";
import { FC } from "react";

import { CanvasContainer } from "~/features/Canvas";
import { LeftControlPanelContainer } from "~/features/LeftControlPanel";

export const StyledWrapperBox = chakra(Box, {
  baseStyle: {
    position: "relative",
    w: "100%",
    h: "100%",
  },
});

export const App: FC = () => (
  <StyledWrapperBox>
    <LeftControlPanelContainer />
    <CanvasContainer />
  </StyledWrapperBox>
);
