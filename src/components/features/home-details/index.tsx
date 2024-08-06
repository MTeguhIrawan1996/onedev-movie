import { Stack } from '@mantine/core';

import { ArtistList } from '@/components/features/home-details/sections/ArtistsList';
import { Hero } from '@/components/features/home-details/sections/Hero';

import { IMovieDetailResponse } from '@/services/rest-api/movies/useReadMovieDetail';

type IDetailPageProps = {
  movie: IMovieDetailResponse;
};

export default function DetailPage({ ...rest }: IDetailPageProps) {
  return (
    <Stack gap='xl'>
      <Hero {...rest} />
      <ArtistList {...rest} />
    </Stack>
  );
}
