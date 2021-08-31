import { useInterval } from "@chakra-ui/react";
import Konva from "konva";
import { useCallback, useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { REFRESH_INTERVAL_MILLISECOND } from "~/constants";

import { useHocusPocusContext } from "./context";
import { Shape, ShapeType } from "./types";

export const useShapesOperations = () => {
  const { shapesMap } = useHocusPocusContext();
  const [shapeIds, setShapeIds] = useState<string[]>([]);

  useInterval(() => {
    setShapeIds(Array.from(shapesMap.keys()));
  }, REFRESH_INTERVAL_MILLISECOND);

  const createShape = useCallback(
    (shapeType: ShapeType) => {
      const id = uuidV4();
      shapesMap.set(id, {
        id,
        type: shapeType,
        x: 20,
        y: 20,
        width: 100,
        height: 100,
        fill: Konva.Util.getRandomColor(),
      });
    },
    [shapesMap]
  );

  const updateShape = useCallback(
    (shape: Shape) => {
      shapesMap.set(shape.id, shape);
    },
    [shapesMap]
  );

  const deleteShape = useCallback(
    (shapeId: string) => {
      shapesMap.delete(shapeId);
    },
    [shapesMap]
  );

  return {
    shapesMap,
    shapeIds,
    createShape,
    updateShape,
    deleteShape,
  };
};
