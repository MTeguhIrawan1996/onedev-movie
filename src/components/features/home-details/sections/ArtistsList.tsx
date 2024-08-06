import {
  Avatar,
  Container,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { getTranslations } from 'next-intl/server';
import * as React from 'react';

import { env } from '@/env';
import { IMovieDetailResponse } from '@/services/rest-api/movies/useReadMovieDetail';

interface IArtistListProps {
  movie: IMovieDetailResponse;
}

export const ArtistList: React.FunctionComponent<IArtistListProps> = async ({
  movie,
}) => {
  const t = await getTranslations('detailMovie');

  return (
    <Container size='xl' px='md' py={20} pos='relative' w='100%'>
      <Paper shadow='md' withBorder p='sm'>
        <Stack>
          <Title order={2}>{t('topCast')}</Title>
          <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 6 }}>
            {movie.credits.cast.slice(0, 12).map((v) => (
              <Paper
                radius='md'
                withBorder
                p='lg'
                bg='var(--mantine-color-body)'
                key={`${v.id}-${v.original_name}`}
                shadow='lg'
              >
                <Avatar
                  src={`${env.NEXT_PUBLIC_IMAGE_URL}/w500${v.profile_path}`}
                  alt={v.original_name}
                  size={120}
                  radius={120}
                  mx='auto'
                />
                <Text ta='center' fz='lg' fw={500} mt='md'>
                  {v.original_name}
                </Text>
                <Text ta='center' c='dimmed' fz='sm'>
                  {v.character}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Stack>
      </Paper>
    </Container>
  );
};
