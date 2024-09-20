import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getLocale } from 'next-intl/server';

import { HomePage } from '@/components/features';

import { getQueryClient } from '@/getQueryClient';
import { queryOptionsGenres } from '@/services/rest-api/genres/useReadAllGenres';
import { queryOptionsMovies } from '@/services/rest-api/movies/useReadAllMovies';
import { queryOptionsNowPlay } from '@/services/rest-api/movies/useReadAllNowPlaying';
import { movieCache } from '@/utils/lib/searchParms';

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const queryClient = getQueryClient();
  const locale = await getLocale();
  const { search } = movieCache.parse(searchParams);

  await queryClient.prefetchQuery(
    queryOptionsMovies({ locale, search, year: 2024 }),
  );
  await queryClient.prefetchQuery(queryOptionsNowPlay());
  await queryClient.prefetchQuery(queryOptionsGenres());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePage />
    </HydrationBoundary>
  );
}
