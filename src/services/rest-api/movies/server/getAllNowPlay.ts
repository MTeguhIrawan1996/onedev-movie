'use server';

import { IMoviesResponse } from '@/services/rest-api/movies/useReadAllMovies';

import { instance as axios } from '../../axios';

import { GResponse } from '@/types/global';

export const getAllNowPlay = async () => {
  try {
    const response = await axios.get<GResponse<IMoviesResponse>>(
      '/trending/all/week?language=en-US',
    );
    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};
