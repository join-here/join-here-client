import { BLUR_IMAGE_URL, DEFAULT_IMAGE_URL } from "@utils/constant";
import * as NextImage from "next/image";

export default function Image({ src, alt, ...props }) {
  return <NextImage src={src || DEFAULT_IMAGE_URL} alt={alt || "조인히어 사진"} placeholder={"blur"} blurDataURL={BLUR_IMAGE_URL} {...props} />;
}
