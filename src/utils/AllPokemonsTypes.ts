import { api } from "../services/api";

export const getPokemonTypesAll = async (id: string) => {
  const { data } = await api.get(`/pokemon/${id}`);
  return data.types;
};
