import Konva from "konva";
import { FC, useMemo, useRef, useState } from "react";
import { Rect as KonvaRect, Text as KonvaText } from "react-konva";

import { useStage } from "~/src/components/utils/StageContext";

const text = `COMPLEX TEXT

All the world's a stage, and all the men and women merely players. They have their exits and their entrances.`;

export const Text: FC = () => {
  const { stage } = useStage();
  const [textRef1, setTextRef1] = useState<Konva.Text | null>(null);
  const [textRef2, setTextRef2] = useState<Konva.Text | null>(null);

  const offsetX = useMemo(() => {
    return textRef1 ? textRef1.width() / 2 : undefined;
  }, [textRef1]);

  const height = useMemo(() => {
    return textRef2 ? textRef2.height() : undefined;
  }, [textRef2]);

  return (
    <>
      <KonvaText
        ref={setTextRef1}
        x={stage.width() / 2}
        y={15}
        text="Simple Text"
        fontSize={30}
        fontFamily="Calibri"
        fill="green"
        offsetX={offsetX}
      />
      <KonvaRect
        x={20}
        y={60}
        stroke="#555"
        strokeWidth={5}
        fill="#ddd"
        width={300}
        height={height}
        shadowColor="black"
        shadowBlur={10}
        shadowOffsetX={10}
        shadowOffsetY={10}
        shadowOpacity={0.2}
        cornerRadius={10}
      />
      <KonvaText
        ref={setTextRef2}
        x={20}
        y={60}
        text={text}
        fontSize={18}
        fontFamily="Calibri"
        fill="#555"
        width={300}
        padding={20}
        align="center"
      />
    </>
  );
};
