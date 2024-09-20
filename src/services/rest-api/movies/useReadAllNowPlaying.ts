import { queryOptions, useQuery } from '@tanstack/react-query';

import { getAllNowPlay } from '@/services/rest-api/movies/server/getAllNowPlay';
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

export const queryOptionsNowPlay = () => {
  return queryOptions({
    queryKey: nowPlayKeys.readAll(),
    queryFn: getAllNowPlay,
  });
};

export const useReadAllNowPlay = () => {
  return useQuery(queryOptionsNowPlay());
};
