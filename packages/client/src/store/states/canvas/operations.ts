import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { v4 as uuidV4 } from "uuid";

import { shapesAtom } from "./atoms";
import { ShapeType } from "./types";

export const useShapesOperations = () => {
  const setShapes = useSetRecoilState(shapesAtom);

  const createShape = useCallback(
    (shapeType: ShapeType) => {
      setShapes((current) => ({
        ...current,
        [uuidV4()]: {
          type: shapeType,
          x: 20,
          y: 20,
          width: 300,
          height: 300,
        },
      }));
    },
    [setShapes]
  );

  const deleteShape = useCallback(() => {
    setShapes((current) => current);
  }, [setShapes]);

  return {
    createShape,
    deleteShape,
  };
};
