import { queryOptions, useQuery } from '@tanstack/react-query';

import { getAllMovies } from '@/services/rest-api/movies/server/getAllMovies';

import { instance as axios } from '../axios';

import { GResponse } from '@/types/global';

export type IMoviesResponse = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
};

type IRequest = {
  year: number;
  locale: string;
  search: string;
};

export const movieKeys = {
  readAll: () => ['movies'],
};

export const readAllMovies = async ({
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

export const queryOptionsMovies = ({
  year,
  locale,
  search,
}: Partial<IRequest>) => {
  return queryOptions({
    queryKey: [...movieKeys.readAll(), { locale, year, search }],
    queryFn: () => getAllMovies({ locale, year, search }),
  });
};

export const useReadAllMovies = ({
  year,
  locale,
  search,
}: Partial<IRequest>) => {
  return useQuery(queryOptionsMovies({ locale, search, year }));
};
