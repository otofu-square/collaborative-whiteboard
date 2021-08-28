import Konva from "konva";
import { FC, useEffect, useRef } from "react";
import { Line as KonvaLine } from "react-konva";

export const LineSpline: FC = () => {
  const lineRef1 = useRef<Konva.Line>(null);
  const lineRef2 = useRef<Konva.Line>(null);
  const lineRef3 = useRef<Konva.Line>(null);

  useEffect(() => {
    lineRef1.current?.move({ x: 20, y: 5 });
    lineRef2.current?.move({ x: 20, y: 55 });
    lineRef3.current?.move({ x: 20, y: 105 });
  }, []);

  return (
    <>
      <KonvaLine
        ref={lineRef1}
        points={[5, 70, 140, 23, 250, 60, 300, 20]}
        stroke="red"
        strokeWidth={15}
        lineCap="round"
        lineJoin="round"
        tension={1}
      />
      <KonvaLine
        ref={lineRef2}
        points={[5, 70, 140, 23, 250, 60, 300, 20]}
        stroke="green"
        strokeWidth={2}
        lineJoin="round"
        dash={[33, 10]}
        lineCap="round"
        tension={0.5}
      />
      <KonvaLine
        ref={lineRef3}
        points={[5, 70, 140, 23, 250, 60, 300, 20]}
        stroke="blue"
        strokeWidth={10}
        lineCap="round"
        lineJoin="round"
        dash={[29, 20, 0.001, 20]}
        tension={0.7}
      />
    </>
  );
};
