import { FC } from "react";
import { TextPath as KonvaTextPath } from "react-konva";

export const TextPath: FC = () => (
  <KonvaTextPath
    x={0}
    y={50}
    fill="#333"
    fontSize={16}
    fontFamily="Arial"
    text="All the world's a stage, and all the men and women merely players."
    data="M10,10 C0,0 10,150 100,100 S300,150 5.0.300"
  />
);
