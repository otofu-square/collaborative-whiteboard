import { Box, IconButton, VStack, chakra } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FC } from "react";

import { ReactComponent as RectIcon } from "./statics/rect.svg";

type Props = {
  onRectIconClick: () => void;
};

const StyledWrapperBox = styled(Box)`
  position: absolute;
  z-index: 95;
  top: 50%;
  left: 8px;
  background-color: rgba(255, 255, 255, 1);
  padding: 12px 0;
  transition: height 0.2s linear, top 0.2s linear;
  border-radius: 4px;
  box-shadow: 0px 4px 16px rgb(5 0 56 / 12%);
`;

const StyledIconButton = chakra(IconButton, {
  baseStyle: {
    w: "6",
    h: "6",
    p: "1",
    bg: "white",

    _hover: {
      bg: "white",
      color: "rgba(66, 98, 255, 1)",
    },
  },
});

export const LeftControlPanel: FC<Props> = ({ onRectIconClick }) => {
  return (
    <StyledWrapperBox>
      <VStack>
        <StyledIconButton
          aria-label="Add rect"
          icon={<RectIcon width="24px" height="24px" />}
          onClick={onRectIconClick}
        />
      </VStack>
    </StyledWrapperBox>
  );
};
