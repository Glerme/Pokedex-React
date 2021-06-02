export const makeURL = (id: string) => `/images/${id}.png`;

export const makeURLAlola = (id: string) => `/images/${id}.png`;

export const getPokemonImage = (id: number) =>
  id < 100 ? makeURL(id.toString().padStart(3, "0")) : makeURL(id.toString());

export const getPokemonImageAlola = (id: number) =>
  id < 100
    ? makeURLAlola(id.toString().padStart(3, "0"))
    : makeURLAlola(id.toString());

export const makeURlMega = (id: number, name: string) => {
  if (id < 100) {
    const parseId = String(id).padStart(3, "0");

    if (name === "charizard") {
      const charizardX = `/images/${parseId}-Mega-X.png`;

      const charizardY = `/images/${parseId}-Mega-Y.png`;

      return [charizardX, charizardY];
    }

    return [`/images/${parseId}-Mega.png`];
  }

  return [`/images/${id.toString()}-Mega.png`];
};
