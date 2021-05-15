export const getImageType = (type: string) => {
  const newType = type.toString();
  const url = process.env.IMAGE_API_TYPE_URL + newType + ".svg";

  console.log("new tipe", url);
  return url;
};
