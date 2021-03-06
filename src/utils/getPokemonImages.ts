export const makeURL = (name: string) => `/images/${name}.png`;

export const makeURLAlola = (name: string) => `/images/${name}-alola.png`;

export const makeURLGalar = (name: string) => `/images/${name}-galar.png`;

export const makeURLGmax = (name: string) => `/images/${name}-Gmax.png`;

export const makeURLM = (name: string) => {
  console.log("name", name);
  if (name === "charizard") {
    const charizardX = `/images/${name}-Mega-X.png`;

    const charizardY = `/images/${name}-Mega-Y.png`;

    return [charizardX, charizardY];
  }

  const parsed = `/images/${name}-Mega.png`;

  return [parsed];
};

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
