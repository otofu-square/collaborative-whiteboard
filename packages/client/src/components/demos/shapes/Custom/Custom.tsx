import { ComponentProps, FC, useCallback } from "react";
import { Shape as KonvaShape } from "react-konva";

type SceneFunc = NonNullable<ComponentProps<typeof KonvaShape>["sceneFunc"]>;

export const Custom: FC = () => {
  const sceneFunc = useCallback<SceneFunc>((context, shape) => {
    context.beginPath();
    context.moveTo(20, 50);
    context.lineTo(220, 80);
    context.quadraticCurveTo(150, 100, 260, 170);
    context.closePath();
    context.fillStrokeShape(shape);
  }, []);

  return (
    <KonvaShape
      sceneFunc={sceneFunc}
      fill="#00D2FF"
      stroke="black"
      strokeWidth={4}
    />
  );
};
