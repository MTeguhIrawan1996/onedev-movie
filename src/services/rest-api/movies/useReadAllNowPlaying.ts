import { useQuery } from '@tanstack/react-query';

import { IMoviesResponse } from '@/services/rest-api/movies/useReadAllMovies';

import { instance as axios } from '../axios';

import { GResponse } from '@/types/global';

export const nowPlayKeys = {
  readAll: () => ['nowPlaying'],
};

export const readAllNowPlay = async () => {
  try {
    const response = await axios.get<GResponse<IMoviesResponse>>(
      '/trending/all/week?language=en-US',
    );
    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

export const useReadAllNowPlay = () => {
  return useQuery<GResponse<IMoviesResponse>>({
    queryKey: nowPlayKeys.readAll(),
    queryFn: readAllNowPlay,
  });
};
