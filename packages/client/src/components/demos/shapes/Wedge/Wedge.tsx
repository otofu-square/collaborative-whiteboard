import { FC } from "react";
import { Wedge as KonvaWedge } from "react-konva";

import { useStage } from "~/src/components/utils/StageContext";

export const Wedge: FC = () => {
  const { stage } = useStage();

  return (
    <KonvaWedge
      x={stage.width() / 2}
      y={stage.height() / 2}
      radius={70}
      angle={60}
      fill="red"
      stroke="black"
      strokeWidth={4}
      rotation={-120}
    />
  );
};
