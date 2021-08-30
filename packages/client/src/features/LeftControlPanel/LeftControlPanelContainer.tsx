import { FC, useCallback } from "react";

import { useShapesOperations } from "~/store/states/canvas";

import { LeftControlPanel } from "./presentations";

export const LeftControlPanelContainer: FC = () => {
  const { createShape } = useShapesOperations();

  const handleRectIconClick = useCallback(() => {
    createShape("rect");
  }, [createShape]);

  return <LeftControlPanel onRectIconClick={handleRectIconClick} />;
};
