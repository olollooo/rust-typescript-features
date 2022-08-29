import axios from "axios";
import Request from "../types/types";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});

const findAll = async () => {
  const response = await apiClient.get<Request[]>("/users");
  return response.data;
}
const findById = async (id: any) => {
  const response = await apiClient.get<Request>(`/users/${id}`);
  return response.data;
}
const findByTitle = async (title: string) => {
  const response = await apiClient.get<Request[]>(`/users/title?title=${title}`);
  return response.data;
}
const create = async ({ title, description }: Request) => {
  const response = await apiClient.post<Request>("/users", { title: title, description: description });
  return response.data;
}
const update = async (id: any, { title, description }: Request) => {
  const response = await apiClient.put<Request>(`/users/${id}`, { title, description });
  return response.data;
}
const deleteById = async (id: any) => {
  const response = await apiClient.delete<Request>(`/users/${id}`);
  return response.data;
}

export const Http = {
  findAll,
  findById,
  findByTitle,
  create,
  update,
  deleteById
}
