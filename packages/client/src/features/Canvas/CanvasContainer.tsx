import { FC } from "react";
import { Layer } from "react-konva";
import { useRecoilValue } from "recoil";

import { canvasAtoms, canvasSelectors } from "~/store/states/canvas";

import { Rect } from "./shapes";
import { StageProvider } from "./StageContext";

export const CanvasContainer: FC = () => {
  const shapes = useRecoilValue(canvasAtoms.shapesAtom);
  const shapeIds = useRecoilValue(canvasSelectors.shapeIds);

  console.log({ shapes, shapeIds });

  return (
    <StageProvider>
      <Layer>
        {shapeIds.map((shapeId) => {
          const shape = shapes[shapeId];
          return <Rect key={shapeId} {...shape} />;
        })}
      </Layer>
    </StageProvider>
  );
};
