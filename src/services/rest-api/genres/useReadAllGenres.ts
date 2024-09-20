import { queryOptions, useQuery } from '@tanstack/react-query';

import { getAllGenres } from '@/services/rest-api/genres/server/getAllGenres';

import { instance as axios } from '../axios';

export type IGenresResponse = {
  genres: {
    id: number;
    name: string;
  }[];
};

export const genresKeys = {
  readAll: () => ['genres'],
};

export const readAllGenres = async () => {
  try {
    const response = await axios.get<IGenresResponse>('/genre/movie/list');
    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

export const queryOptionsGenres = () => {
  // const isActive = genres && genres.genres.length < 1;
  return queryOptions({
    queryKey: genresKeys.readAll(),
    queryFn: getAllGenres,
    // enabled: isActive,
  });
};

export const useReadAllGenres = () => {
  return useQuery(queryOptionsGenres());
};
