import { Container, Stack } from '@mantine/core';

import { Hero } from '@/components/features/home/sections/Hero';
import { MovieList } from '@/components/features/home/sections/MovieList';

export default function HomePage() {
  return (
    <Container size='xl' p='md' pos='relative'>
      <Stack p='sm' gap='xl'>
        <Hero />
        <MovieList />
      </Stack>
    </Container>
  );
}
