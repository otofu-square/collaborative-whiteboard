import { FC } from "react";
import { Rect as KonvaRect } from "react-konva";

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const Rect: FC<Props> = ({ x, y, width, height }) => (
  <KonvaRect
    draggable
    x={x}
    y={y}
    width={width}
    height={height}
    fill="green"
    stroke="black"
    strokeWidth={4}
  />
);
