'use client';

import { Group, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
import { useLocale, useTranslations } from 'next-intl';
import { useQueryStates } from 'nuqs';
import * as React from 'react';
import { useShallow } from 'zustand/react/shallow';

import { EmptyState, MovieCard, SearchBar } from '@/components/elements';
import { MovieListLoading } from '@/components/features/home/ui/MovieListLoading';

import { useReadAllGenres } from '@/services/rest-api/genres/useReadAllGenres';
import { useReadAllMovies } from '@/services/rest-api/movies/useReadAllMovies';
import { movieParsers } from '@/utils/lib/searchParms';
import { useStoreGenres } from '@/utils/store/useStoreGenres';

export const MovieList = () => {
  const locale = useLocale();
  const t = useTranslations('home');
  const [{ search }] = useQueryStates(movieParsers, {
    shallow: false,
    clearOnDefault: true,
  });
  const [genresState, setGenresState] = useStoreGenres(
    useShallow((state) => [state.genresState, state.setGenresState]),
  );

  const { data: genres } = useReadAllGenres({ genres: genresState });
  const { data, isPending } = useReadAllMovies({
    locale,
    year: 2024,
    search,
  });

  React.useEffect(() => {
    if (genres) setGenresState(genres);
  }, [genres]);

  return (
    <Paper shadow='md' radius='md' withBorder p='md'>
      <Stack>
        <Group justify='space-between'>
          <Text component='h1' inherit fz={20} fw={900} c='gray'>
            🎥 {t('title')}
          </Text>
          <SearchBar />
        </Group>
        {isPending && <MovieListLoading />}
        {data && (
          <SimpleGrid cols={{ base: 1, xs: 2, sm: 3 }} mt='md'>
            {data?.results.map((v) => (
              <MovieCard
                key={v.id}
                id={v.id}
                image={v.poster_path}
                title={v.original_title}
                description={v.overview}
                releaseDate={v.release_date}
                currentGenres={v.genre_ids}
                voteAverage={v.vote_average}
              />
            ))}
          </SimpleGrid>
        )}
        {data?.results.length === 0 && <EmptyState />}
      </Stack>
    </Paper>
  );
};
