import logo from "../assets/no-image-placeholder.webp";

export const getCroppedImageUrl = (
  url: string,
  width: number,
  height: number
) => {
  if (!url) return logo;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
};
