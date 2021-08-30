import { selector } from "recoil";

import { shapesAtom } from "./atoms";

export const shapeIds = selector({
  key: "states/canvas/selector/shapeIds",
  get: ({ get }) => Object.keys(get(shapesAtom)),
});
