import { atom } from "recoil";

import { Shape } from "./types";

type Shapes = {
  [shapeId: string]: Shape;
};

export const shapesAtom = atom<Shapes>({
  key: "states/canvas/shapes",
  default: {},
});
