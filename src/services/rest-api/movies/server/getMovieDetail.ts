'use server';

import { AxiosResponse } from 'axios';
import { getLocale } from 'next-intl/server';
import { cache } from 'react';

import { IGenresResponse } from '@/services/rest-api/genres/useReadAllGenres';

import { instance as axios } from '../../axios';

type ICredits = {
  credits: {
    cast: {
      id: number;
      original_name: string;
      profile_path: string;
      character: string;
    }[];
    crew: {
      id: 1222480;
      original_name: string;
      department: string;
    }[];
  };
};

export type IMovieDetailResponse = {
  id: number;
  original_title: string;
  overview: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  runtime: number;
  vote_average: number;
} & IGenresResponse &
  ICredits;

type Props = {
  params: { slug: string };
};

export const getMovieDetail = cache(async ({ params }: Props) => {
  const locale = await getLocale();

  const response: AxiosResponse<IMovieDetailResponse, any> = await axios.get(
    `/movie/${params.slug}?append_to_response=credits&language=${locale}`,
  );
  if (response.status !== 200) {
    throw new Error('faild to fetch');
  }
  return response.data;
});
