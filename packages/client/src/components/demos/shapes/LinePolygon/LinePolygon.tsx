import { FC } from "react";
import { Line as KonvaLine } from "react-konva";

export const LinePolygon: FC = () => (
  <KonvaLine
    closed
    points={[23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93]}
    fill="#00D2FF"
    stroke="black"
    strokeWidth={5}
  />
);
