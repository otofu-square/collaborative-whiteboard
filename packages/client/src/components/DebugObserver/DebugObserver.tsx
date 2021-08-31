import { FC, useEffect } from "react";
import { useRecoilSnapshot } from "recoil";

/** @see https://recoiljs.org/docs/guides/dev-tools */
export const DebugObserver: FC = () => {
  const snapshot = useRecoilSnapshot();

  useEffect(() => {
    console.debug("The following atoms were modified:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
};
