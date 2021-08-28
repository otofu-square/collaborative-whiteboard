import { FC } from "react";
import { Circle as KonvaCircle } from "react-konva";

import { useStage } from "~/src/components/utils/StageContext";

export const Circle: FC = () => {
  const { stage } = useStage();

  return (
    <KonvaCircle
      x={stage.width() / 2}
      y={stage.height() / 2}
      radius={70}
      fill="red"
      stroke="black"
      strokeWidth={4}
    />
  );
};
