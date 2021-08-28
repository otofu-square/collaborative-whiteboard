import Konva from "konva";
import { FC, useCallback, useEffect, useState } from "react";
import { Sprite as KonvaSprite, Text as KonvaText } from "react-konva";

import { useImageElement } from "~/src/lib/hooks";

import spriteImage from "./sprite.png";

const animations = {
  idle: [2, 2, 70, 119, 71, 2, 74, 119, 146, 2, 81, 119, 226, 2, 76, 119],
  punch: [2, 138, 74, 122, 76, 138, 84, 122, 346, 138, 120, 122],
};

export const Sprite: FC = () => {
  const [spriteRef, setSpriteRef] = useState<Konva.Sprite | null>(null);
  const { image, imageLoaded } = useImageElement({ src: spriteImage });

  useEffect(() => {
    spriteRef?.start();
  }, [spriteRef]);

  const handleClick = useCallback(() => {
    if (!spriteRef) return;
    spriteRef.animation("punch");
    spriteRef.on("frameIndexChange.button", () => {
      if (spriteRef.frameIndex() === 2) {
        setTimeout(() => {
          spriteRef.animation("idle");
          spriteRef.off(".button");
        }, 1000 / spriteRef.frameRate());
      }
    });
  }, [spriteRef]);

  return (
    <>
      <KonvaText x={60} y={20} text="Click Me!!" />
      {imageLoaded && (
        <KonvaSprite
          ref={setSpriteRef}
          x={50}
          y={50}
          image={image}
          animation="idle"
          animations={animations}
          frameRate={7}
          frameIndex={0}
          onClick={handleClick}
        />
      )}
    </>
  );
};
