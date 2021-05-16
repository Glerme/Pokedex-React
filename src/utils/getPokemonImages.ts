export const getImageType = (type: string) => {
  const newType = type.toString();
  const url = process.env.IMAGE_API_TYPE_URL + newType + ".svg";

  return url;
};

export const makeURL = (id: string) =>
  new URL(process.env.IMAGE_API_URL + id + ".png").href;

export const getPokemonImage = (id: number) =>
  id < 100 ? makeURL(id.toString().padStart(3, "0")) : makeURL(id.toString());

export const makeURlMega = (id: number, name: string) => {
  if (id < 100) {
    const newURL =
      process.env.IMAGE_API_URL + id.toString().padStart(3, "0") + "-Mega.png";

    if (name === "charizard") {
      const charizardX = new URL(
        process.env.IMAGE_API_URL +
          id.toString().padStart(3, "0") +
          "-Mega-X.png"
      ).href;

      const charizardY = new URL(
        process.env.IMAGE_API_URL +
          id.toString().padStart(3, "0") +
          "-Mega-Y.png"
      ).href;

      return [charizardX, charizardY];
    }

    return [newURL];
  } else {
    const newURL = process.env.IMAGE_API_URL + id.toString() + "-Mega.png";
    return [newURL];
  }
};
