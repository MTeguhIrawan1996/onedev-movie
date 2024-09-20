'use server';

import { IGenresResponse } from '@/services/rest-api/genres/useReadAllGenres';

import { instance as axios } from '../../axios';

export const getAllGenres = async () => {
  try {
    const response = await axios.get<IGenresResponse>('/genre/movie/list');
    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};
