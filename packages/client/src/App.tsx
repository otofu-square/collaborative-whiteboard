import { Box, chakra } from "@chakra-ui/react";
import { FC } from "react";

import { CanvasContainer } from "~/features/Canvas";
import { LeftControlPanelContainer } from "~/features/LeftControlPanel";
import { Hocuspocus } from "~/Hocuspocus";

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
    <Hocuspocus />
  </StyledWrapperBox>
);
