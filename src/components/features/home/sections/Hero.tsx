'use client';

import { Box, Grid, rem, SimpleGrid } from '@mantine/core';
import * as React from 'react';

import NextImageFill from '@/components/elements/images/NextImageFill';
import { HeroLoading } from '@/components/features/home/ui/HeroLoading';

import { env } from '@/env';
import { useReadAllNowPlay } from '@/services/rest-api/movies/useReadAllNowPlaying';

const PRIMARY_COL_HEIGHT = rem(600);

export const Hero = () => {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  const { data, isPending } = useReadAllNowPlay();

  if (isPending) return <HeroLoading />;

  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing='md'>
      <NextImageFill
        src={`${env.NEXT_PUBLIC_IMAGE_URL}/w500${data?.results[0].poster_path || ''}`}
        alt={data?.results[0].original_title || ''}
        figureProps={{ h: PRIMARY_COL_HEIGHT, shadow: 'lg' }}
        withOverlay
      />
      <Grid gutter='md'>
        {data?.results.slice(1, 5).map((v) => (
          <Grid.Col span={6} key={v.id}>
            <Box pos='relative'>
              <NextImageFill
                src={`${env.NEXT_PUBLIC_IMAGE_URL}/w500${v.poster_path || ''}`}
                alt={v.original_title || ''}
                figureProps={{ h: SECONDARY_COL_HEIGHT, shadow: 'lg' }}
                withOverlay
              />
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </SimpleGrid>
  );
};
