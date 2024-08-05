'use client';

import { Grid, rem, SimpleGrid, Skeleton } from '@mantine/core';
import * as React from 'react';

const PRIMARY_COL_HEIGHT = rem(600);

export const HeroLoading = () => {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing='md'>
      <Skeleton height={PRIMARY_COL_HEIGHT} animate />
      <Grid gutter='md'>
        <Grid.Col span={6}>
          <Skeleton height={SECONDARY_COL_HEIGHT} animate />
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={SECONDARY_COL_HEIGHT} animate />
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={SECONDARY_COL_HEIGHT} animate />
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={SECONDARY_COL_HEIGHT} animate />
        </Grid.Col>
      </Grid>
    </SimpleGrid>
  );
};
