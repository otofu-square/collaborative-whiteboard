import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom";

import { App } from "~/src/App";
import { theme } from "~/src/styles";

const element = document.getElementById("root");
if (!element) throw new Error("root element is not found.");

createRoot(element).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
