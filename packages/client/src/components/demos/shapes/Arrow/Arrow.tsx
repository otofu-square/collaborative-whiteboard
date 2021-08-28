import { FC } from "react";
import { Arrow as KonvaArrow } from "react-konva";

import { useStage } from "~/src/components/utils/StageContext";

export const Arrow: FC = () => {
  const { stage } = useStage();

  return (
    <KonvaArrow
      x={stage.width() / 4}
      y={stage.height() / 4}
      points={[0, 0, stage.width() / 2, stage.height() / 2]}
      pointerLength={20}
      pointerWidth={20}
      fill={"black"}
      stroke={"black"}
      strokeWidth={4}
    />
  );
};
