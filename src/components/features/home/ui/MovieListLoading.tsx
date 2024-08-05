'use client';

import { SimpleGrid, Skeleton } from '@mantine/core';
import * as React from 'react';

export const MovieListLoading = () => {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, sm: 3 }} mt='md'>
      {[...Array(6)].map((_, i) => (
        <Skeleton height={550} animate key={i} />
      ))}
    </SimpleGrid>
  );
};
