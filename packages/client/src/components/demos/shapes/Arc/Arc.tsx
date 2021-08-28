import { FC } from "react";
import { Arc as KonvaArc } from "react-konva";

import { useStage } from "~/src/components//utils/StageContext";

export const Arc: FC = () => {
  const { stage } = useStage();

  return (
    <KonvaArc
      x={stage.width() / 2}
      y={stage.height() / 2}
      innerRadius={40}
      outerRadius={70}
      angle={60}
      fill="yellow"
      stroke="black"
      strokeWidth={4}
    />
  );
};
