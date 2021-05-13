export const formatId = (id: number) => {
  const newId = id.toString().padStart(3, "0");
  return newId;
};
