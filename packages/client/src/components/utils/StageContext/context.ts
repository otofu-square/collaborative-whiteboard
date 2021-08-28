import Konva from "konva";
import { createContext, useContext } from "react";

export const StageContext = createContext<Konva.Stage | null>(null);

export const useStage = () => {
  const stage = useContext(StageContext);

  if (!stage) throw new Error("`Stage` component must be defined.");

  return { stage };
};
