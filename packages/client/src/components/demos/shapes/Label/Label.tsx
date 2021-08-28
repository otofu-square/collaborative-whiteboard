import Konva from "konva";
import { FC, useEffect, useState } from "react";
import { Label as KonvaLabel } from "react-konva";

export const Label: FC = () => {
  const [tooltipRef, setTooltipRef] = useState<Konva.Label | null>(null);
  const [leftLabelRef, setLeftLabelRef] = useState<Konva.Label | null>(null);
  const [simpleLabelRef, setSimpleLabelRef] = useState<Konva.Label | null>(
    null
  );

  useEffect(() => {
    if (!tooltipRef) return;
    tooltipRef.add(
      new Konva.Tag({
        fill: "black",
        pointerDirection: "down",
        pointerWidth: 10,
        pointerHeight: 10,
        lineJoin: "round",
        shadowColor: "black",
        shadowBlur: 10,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
        shadowOpacity: 0.5,
      })
    );
    tooltipRef.add(
      new Konva.Text({
        text: "Tooltip pointing down",
        fontFamily: "Calibri",
        fontSize: 18,
        padding: 5,
        fill: "white",
      })
    );
  }, [tooltipRef]);

  useEffect(() => {
    if (!leftLabelRef) return;
    leftLabelRef.add(
      new Konva.Tag({
        fill: "green",
        pointerDirection: "left",
        pointerWidth: 20,
        pointerHeight: 28,
        lineJoin: "round",
      })
    );
    leftLabelRef.add(
      new Konva.Text({
        text: "Label pointing left",
        fontFamily: "Calibri",
        fontSize: 18,
        padding: 5,
        fill: "white",
      })
    );
  }, [leftLabelRef]);

  useEffect(() => {
    if (!simpleLabelRef) return;
    simpleLabelRef.add(
      new Konva.Tag({
        fill: "yellow",
      })
    );
    simpleLabelRef.add(
      new Konva.Text({
        text: "Simple label",
        fontFamily: "Calibri",
        fontSize: 18,
        padding: 5,
        fill: "black",
      })
    );
  }, [simpleLabelRef]);

  return (
    <>
      <KonvaLabel ref={setTooltipRef} x={170} y={75} opacity={0.75} />
      <KonvaLabel ref={setLeftLabelRef} x={20} y={130} opacity={0.75} />
      <KonvaLabel ref={setSimpleLabelRef} x={180} y={150} opacity={0.75} />
    </>
  );
};
