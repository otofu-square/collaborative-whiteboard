import { Box, chakra } from "@chakra-ui/react";
import Konva from "konva";
import { FC, useState } from "react";
import { Stage, StageProps } from "react-konva";
import { useMeasure } from "react-use";

import { StageContext } from "./context";

const StyledRootWWrapperBox = chakra(Box, {
  baseStyle: {
    w: "100%",
    h: "100%",
  },
});

export const StageProvider: FC<StageProps> = ({ children, ...props }) => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const [stage, setStage] = useState<Konva.Stage | null>(null);

  return (
    <StyledRootWWrapperBox ref={ref}>
      <Stage ref={setStage} width={width} height={height} {...props}>
        <StageContext.Provider value={stage}>
          {stage && children}
        </StageContext.Provider>
      </Stage>
    </StyledRootWWrapperBox>
  );
};
