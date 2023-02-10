const { IMAGE_WIDTH } = require("@utils/constant");

export const lowResolution = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const image = new Image();
      image.src = reader.result;
      image.onload = () => {
        try {
          resolve(imageResize(image, file.name));
        } catch {
          resolve(file);
        }
      };
    };
  });
};

const imageResize = (image, fileName) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (image.width <= IMAGE_WIDTH && image.height <= IMAGE_WIDTH) {
    throw new Error("resize 불필요");
  }
  const ratio = image.width / image.height;
  const newWidth = ratio > 1 ? IMAGE_WIDTH : IMAGE_WIDTH * ratio;
  const newHeight = ratio > 1 ? IMAGE_WIDTH / ratio : IMAGE_WIDTH;
  canvas.width = newWidth;
  canvas.height = newHeight;
  ctx.drawImage(image, 0, 0, newWidth, newHeight);
  const dataURI = canvas.toDataURL("image/jpeg");
  return dataURItoFile(dataURI, fileName);
};

const dataURItoFile = (dataURI, fileName) => {
  const bytes = dataURI.split(",")[0].indexOf("base64") >= 0 ? window.atob(dataURI.split(",")[1]) : window.decodeURI(dataURI.split(",")[1]);
  const mime = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const max = bytes.length;
  const ia = new Uint8Array(max);
  for (let i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i);
  return new File([ia], fileName, { type: mime });
};
