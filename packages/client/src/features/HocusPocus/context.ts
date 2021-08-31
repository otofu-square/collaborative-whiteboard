import { HocuspocusProvider } from "@hocuspocus/provider";
import { createContext, useContext } from "react";
import * as Y from "yjs";

import { Shape } from "./types";

type ContextValue = {
  yDoc: Y.Doc;
  shapesMap: Y.Map<Shape>;
};

const yDoc = new Y.Doc();

new HocuspocusProvider({
  url: "ws://127.0.0.1:1234",
  name: "example-document",
  document: yDoc,
  // onAwarenessChange: console.log,
});

// const id = uuidv4();
// For example, listen for mouse movements
// document.addEventListener("mousemove", (event) => {
//   // Share any information you like
//   provider.setAwarenessField("user", {
//     name: id,
//     color: "#ffcc00",
//     mouseX: event.clientX,
//     mouseY: event.clientY,
//   });
// });

export const initialContextValue = {
  yDoc,
  shapesMap: yDoc.getMap("shapes"),
};

export const HocusPocusContext =
  createContext<ContextValue>(initialContextValue);

export const useHocusPocusContext = () => useContext(HocusPocusContext);
