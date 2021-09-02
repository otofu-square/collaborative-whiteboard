import Konva from "konva";
import { FC, useRef } from "react";
import { Rect as KonvaRect, Layer, Stage } from "react-konva";

export const BasicDemo: FC = () => {
  const layerRef = useRef<Konva.Layer>(null);

  console.log({ layerRef });

  return (
    <Stage width={600} height={600}>
      <Layer ref={layerRef}>
        <KonvaRect
          draggable
          x={60}
          y={60}
          width={100}
          height={90}
          fill="red"
          name="rect"
        />
        <KonvaRect
          draggable
          x={250}
          y={100}
          width={150}
          height={90}
          fill="green"
          name="rect"
        />
      </Layer>
    </Stage>
  );
};

// const tr = new Konva.Transformer();
// layer.add(tr);

// // by default select all shapes
// tr.nodes([rect1, rect2]);

// // add a new feature, lets add ability to draw selection rectangle
// const selectionRectangle = new Konva.Rect({
//   fill: "rgba(0,0,255,0.5)",
//   visible: false,
// });
// layer.add(selectionRectangle);

// let x1, y1, x2, y2;
// stage.on("mousedown touchstart", (e) => {
//   // do nothing if we mousedown on any shape
//   if (e.target !== stage) {
//     return;
//   }
//   x1 = stage.getPointerPosition().x;
//   y1 = stage.getPointerPosition().y;
//   x2 = stage.getPointerPosition().x;
//   y2 = stage.getPointerPosition().y;

//   selectionRectangle.visible(true);
//   selectionRectangle.width(0);
//   selectionRectangle.height(0);
// });

// stage.on("mousemove touchmove", () => {
//   // no nothing if we didn't start selection
//   if (!selectionRectangle.visible()) {
//     return;
//   }
//   x2 = stage.getPointerPosition().x;
//   y2 = stage.getPointerPosition().y;

//   selectionRectangle.setAttrs({
//     x: Math.min(x1, x2),
//     y: Math.min(y1, y2),
//     width: Math.abs(x2 - x1),
//     height: Math.abs(y2 - y1),
//   });
// });

// stage.on("mouseup touchend", () => {
//   // no nothing if we didn't start selection
//   if (!selectionRectangle.visible()) {
//     return;
//   }
//   // update visibility in timeout, so we can check it in click event
//   setTimeout(() => {
//     selectionRectangle.visible(false);
//   });

//   const shapes = stage.find(".rect");
//   const box = selectionRectangle.getClientRect();
//   const selected = shapes.filter((shape) =>
//     Konva.Util.haveIntersection(box, shape.getClientRect())
//   );
//   tr.nodes(selected);
// });

// // clicks should select/deselect shapes
// stage.on("click tap", function (e) {
//   // if we are selecting with rect, do nothing
//   if (selectionRectangle.visible()) {
//     return;
//   }

//   // if click on empty area - remove all selections
//   if (e.target === stage) {
//     tr.nodes([]);
//     return;
//   }

//   // do nothing if clicked NOT on our rectangles
//   if (!e.target.hasName("rect")) {
//     return;
//   }

//   // do we pressed shift or ctrl?
//   const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
//   const isSelected = tr.nodes().indexOf(e.target) >= 0;

//   if (!metaPressed && !isSelected) {
//     // if no key pressed and the node is not selected
//     // select just one
//     tr.nodes([e.target]);
//   } else if (metaPressed && isSelected) {
//     // if we pressed keys and node was selected
//     // we need to remove it from selection:
//     const nodes = tr.nodes().slice(); // use slice to have new copy of array
//     // remove node from array
//     nodes.splice(nodes.indexOf(e.target), 1);
//     tr.nodes(nodes);
//   } else if (metaPressed && !isSelected) {
//     // add the node into selection
//     const nodes = tr.nodes().concat([e.target]);
//     tr.nodes(nodes);
//   }
// });
