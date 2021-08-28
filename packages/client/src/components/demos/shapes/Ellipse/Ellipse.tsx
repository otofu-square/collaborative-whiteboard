import { FC } from "react";
import { Ellipse as KonvaEllipse } from "react-konva";

import { useStage } from "~/src/components/utils/StageContext";

export const Ellipse: FC = () => {
  const { stage } = useStage();

  return (
    <KonvaEllipse
      x={stage.width() / 2}
      y={stage.height() / 2}
      radiusX={100}
      radiusY={50}
      fill="yellow"
      stroke="black"
      strokeWidth={4}
    />
  );
};
