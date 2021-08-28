import { FC } from "react";
import { Image as KonvaImage } from "react-konva";

import { useImageElement } from "~/src/lib/hooks";

import darthVaderImage from "./darth-vader.jpeg";
import yodaImage from "./yoda.jpeg";

export const Image: FC = () => {
  const i1 = useImageElement({ src: yodaImage });
  const i2 = useImageElement({ src: darthVaderImage });

  return (
    <>
      {i1.imageLoaded && (
        <KonvaImage image={i1.image} x={50} y={50} width={106} height={118} />
      )}
      {i2.imageLoaded && (
        <KonvaImage image={i2.image} x={200} y={50} scaleX={0.5} scaleY={0.5} />
      )}
    </>
  );
};
