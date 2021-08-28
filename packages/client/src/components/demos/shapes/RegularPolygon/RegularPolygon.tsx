import { FC } from "react";
import { RegularPolygon as KonvaRegularPolygon } from "react-konva";

export const RegularPolygon: FC = () => (
  <KonvaRegularPolygon
    x={100}
    y={150}
    sides={6}
    radius={70}
    fill="red"
    stroke="black"
    strokeWidth={4}
  />
);
