import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

import { App } from "~/src/App";
import { theme } from "~/src/styles";

const element = document.getElementById("root");
if (!element) throw new Error("root element is not found.");

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
