import { useQuery } from '@tanstack/react-query';

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

export const useReadAllGenres = ({ genres }: { genres?: IGenresResponse }) => {
  const isActive = genres && genres.genres.length < 1;

  return useQuery<IGenresResponse>({
    queryKey: genresKeys.readAll(),
    queryFn: readAllGenres,
    enabled: isActive,
  });
};
