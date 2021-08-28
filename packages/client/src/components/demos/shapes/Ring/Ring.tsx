import { FC } from "react";
import { Ring as KonvaRing } from "react-konva";

import { useStage } from "~/src/components//utils/StageContext";

export const Ring: FC = () => {
  const { stage } = useStage();

  return (
    <KonvaRing
      x={stage.width() / 2}
      y={stage.height() / 2}
      innerRadius={40}
      outerRadius={70}
      fill="yellow"
      stroke="black"
      strokeWidth={4}
    />
  );
};
