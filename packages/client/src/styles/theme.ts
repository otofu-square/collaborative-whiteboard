import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "*": {
        fontFamily: "Noto Sans",
      },
      "html, body, #root": {
        height: "100%",
      },
    },
  },
});
