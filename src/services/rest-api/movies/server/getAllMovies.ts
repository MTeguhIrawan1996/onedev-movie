'use server';

import { IMoviesResponse } from '@/services/rest-api/movies/useReadAllMovies';

import { instance as axios } from '../../axios';

import { GResponse } from '@/types/global';

type IRequest = {
  year: number;
  locale: string;
  search: string;
};

export const getAllMovies = async ({
  year,
  locale,
  search,
}: Partial<IRequest>) => {
  try {
    const response = await axios.get<GResponse<IMoviesResponse>>(
      `/${search ? 'search' : 'discover'}/movie?query=${search}&language=${locale}&page=1&sort_by=popularity.desc&primary_release_year=${year}`,
    );
    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};
