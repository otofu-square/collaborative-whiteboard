import Konva from "konva";
import { FC, useCallback, useEffect, useRef } from "react";
import { Rect as KonvaRect } from "react-konva";
import { throttle } from "throttle-debounce";

import { REFRESH_INTERVAL_MILLISECOND } from "~/constants";

type Props = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  onDragMove: (shapeId: string, attrs: Konva.Rect["attrs"]) => void;
  onClick: (shapeId: string) => void;
  onDblClick: (shapeId: string) => void;
};

export const Rect: FC<Props> = ({
  id,
  x,
  y,
  width,
  height,
  fill,
  onDragMove,
  onClick,
  onDblClick,
}) => {
  const ref = useRef<Konva.Rect>(null);

  useEffect(() => {
    ref.current?.on(
      "dragmove",
      throttle(REFRESH_INTERVAL_MILLISECOND, (event) =>
        onDragMove(id, event.target.attrs)
      )
    );
  }, [id, onDragMove]);

  const handleClick = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  const handleDblClick = useCallback(() => {
    onDblClick(id);
  }, [id, onDblClick]);

  return (
    <KonvaRect
      draggable
      ref={ref}
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke="black"
      strokeWidth={4}
      onClick={handleClick}
      onDblClick={handleDblClick}
    />
  );
};
