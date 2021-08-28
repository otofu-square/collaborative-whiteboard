import Konva from "konva";
import { FC, useCallback, useState } from "react";
import { Rect } from "react-konva";

export const ColorRect: FC = () => {
  const [color, setColor] = useState("green");

  const handleClick = useCallback(() => {
    setColor(Konva.Util.getRandomColor());
  }, []);

  return (
    <Rect
      draggable
      x={20}
      y={20}
      width={50}
      height={50}
      shadowBlur={5}
      fill={color}
      onClick={handleClick}
    />
  );
};
