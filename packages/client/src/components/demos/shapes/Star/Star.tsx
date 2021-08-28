import { FC } from "react";
import { Star as KonvaStar } from "react-konva";

import { useStage } from "~/src/components//utils/StageContext";

export const Star: FC = () => {
  const { stage } = useStage();

  return (
    <KonvaStar
      x={stage.width() / 2}
      y={stage.height() / 2}
      numPoints={6}
      innerRadius={40}
      outerRadius={70}
      fill="yellow"
      stroke="black"
      strokeWidth={4}
    />
  );
};
