import { FC } from "react";
import { Rect as KonvaRect } from "react-konva";

export const Rect: FC = () => (
  <>
    <KonvaRect
      x={20}
      y={20}
      width={100}
      height={50}
      fill="green"
      stroke="black"
      strokeWidth={4}
    />
    <KonvaRect
      x={150}
      y={40}
      width={100}
      height={50}
      fill="red"
      shadowBlur={10}
      cornerRadius={10}
    />
    <KonvaRect
      x={50}
      y={120}
      width={100}
      height={100}
      fill="blue"
      cornerRadius={[0, 10, 20, 30]}
    />
  </>
);
