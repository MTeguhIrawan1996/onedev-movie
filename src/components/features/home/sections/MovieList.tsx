'use client';

import { Group, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
import { useLocale, useTranslations } from 'next-intl';
import { useQueryStates } from 'nuqs';
import * as React from 'react';

import { EmptyState, MovieCard, SearchBar } from '@/components/elements';
import { MovieListLoading } from '@/components/features/home/ui/MovieListLoading';

import { useReadAllGenres } from '@/services/rest-api/genres/useReadAllGenres';
import { useReadAllMovies } from '@/services/rest-api/movies/useReadAllMovies';
import { movieParsers } from '@/utils/lib/searchParms';

export const MovieList = () => {
  const locale = useLocale();
  const t = useTranslations('home');
  const [{ search }] = useQueryStates(movieParsers, {
    shallow: false,
    clearOnDefault: true,
  });

  const { data: genres } = useReadAllGenres();

  const { data, isPending } = useReadAllMovies({
    locale,
    year: 2024,
    search,
  });

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
                genres={genres}
              />
            ))}
          </SimpleGrid>
        )}
        {data?.results.length === 0 && <EmptyState />}
      </Stack>
    </Paper>
  );
};
