import Konva from "konva";
import { FC, useCallback } from "react";
import { Layer } from "react-konva";

import { useShapesOperations } from "~/features/HocusPocus";

import { Rect } from "./shapes";
import { StageProvider } from "./StageContext";

export const CanvasContainer: FC = () => {
  const { shapesMap, shapeIds, updateShape, deleteShape } =
    useShapesOperations();

  const onRectDragMove = useCallback(
    (id: string, attrs: Konva.Rect["attrs"]) => {
      updateShape({
        id,
        type: "rect",
        x: attrs.x,
        y: attrs.y,
        width: attrs.width,
        height: attrs.height,
        fill: attrs.fill,
      });
    },
    [updateShape]
  );

  const onRectClick = useCallback(
    (id: string) => {
      const shape = shapesMap.get(id);
      if (!shape) return;
      updateShape({ ...shape, fill: Konva.Util.getRandomColor() });
    },
    [shapesMap, updateShape]
  );

  return (
    <StageProvider>
      <Layer>
        {shapeIds.map((shapeId) => {
          const shape = shapesMap.get(shapeId);
          return (
            shape && (
              <Rect
                key={shapeId}
                id={shapeId}
                x={shape.x}
                y={shape.y}
                width={shape.width}
                height={shape.height}
                fill={shape.fill}
                onDragMove={onRectDragMove}
                onClick={onRectClick}
                onDblClick={deleteShape}
              />
            )
          );
        })}
      </Layer>
    </StageProvider>
  );
};
