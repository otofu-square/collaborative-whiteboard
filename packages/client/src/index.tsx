import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom";
import { RecoilRoot } from "recoil";

import { App } from "~/App";
import { HocusPocusProvider } from "~/features/HocusPocus";
import { theme } from "~/styles";

const element = document.getElementById("root");
if (!element) throw new Error("root element is not found.");

createRoot(element).render(
  <RecoilRoot>
    <ChakraProvider theme={theme}>
      <HocusPocusProvider>
        <App />
      </HocusPocusProvider>
    </ChakraProvider>
  </RecoilRoot>
);
