import { useInterval } from "@chakra-ui/react";
import { HocuspocusProvider } from "@hocuspocus/provider";
import { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import * as Y from "yjs";

const ydoc = new Y.Doc();

const provider = new HocuspocusProvider({
  url: "ws://127.0.0.1:1234",
  name: "example-document",
  document: ydoc,
  // onAwarenessChange: console.log,
});

const id = uuidv4();

// For example, listen for mouse movements
document.addEventListener("mousemove", (event) => {
  // Share any information you like
  provider.setAwarenessField("user", {
    name: id,
    color: "#ffcc00",
    mouseX: event.clientX,
    mouseY: event.clientY,
  });
});

// Define `tasks` as an Array
const tasks = ydoc.getArray("tasks");

export const Hocuspocus: FC = () => {
  useEffect(() => {
    // Listen for changes
    tasks.observe((y) => {
      // console.log(
      //   `${y.currentTarget.doc?.guid} were modified by ${y.currentTarget.doc?.clientID}`
      // );
    });
  }, []);

  useInterval(() => {
    tasks.push(["buy milk", new Date().toISOString()]);
  }, 1000);

  return null;
};
