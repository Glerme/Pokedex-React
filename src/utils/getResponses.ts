import { api } from "../services/api";

export const getResponse = async (path: string) => {
  const response = await api.get(path);
  return response.data;
};
