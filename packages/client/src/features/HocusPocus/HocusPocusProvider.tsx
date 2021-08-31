import { FC } from "react";

import { HocusPocusContext, initialContextValue } from "./context";

export const HocusPocusProvider: FC = ({ children }) => (
  <HocusPocusContext.Provider value={initialContextValue}>
    {children}
  </HocusPocusContext.Provider>
);
