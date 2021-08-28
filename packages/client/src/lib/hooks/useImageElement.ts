import { useMemo, useState } from "react";

type Props = {
  src: string;
};

/** Returns an HTMLImageElement containing the image specified in src and its loading status */
export const useImageElement = ({ src }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const image = useMemo(() => {
    const image = new Image();
    image.onload = () => setImageLoaded(true);
    image.src = src;
    return image;
  }, [src]);

  return { image, imageLoaded };
};
