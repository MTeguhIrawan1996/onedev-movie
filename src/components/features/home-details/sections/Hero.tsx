import {
  BackgroundImage,
  Badge,
  Container,
  Divider,
  Group,
  Overlay,
  Paper,
  RingProgress,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { getLocale, getTranslations } from 'next-intl/server';
import * as React from 'react';

import { BackButton } from '@/components/elements';
import NextImageFill from '@/components/elements/images/NextImageFill';
import { ActionPanel } from '@/components/features/home-details/ui/ActionPanel';

import { env } from '@/env';
import { IMovieDetailResponse } from '@/services/rest-api/movies/useReadMovieDetail';
import { minutesToHours } from '@/utils/helpers/MinutesToHours';
import { getColorByPercentage } from '@/utils/lib/getColorPercentage';
import dayjs from '@/utils/lib/globalDayJs';

type IHeroProps = {
  movie: IMovieDetailResponse;
};

export const Hero = async ({ movie }: IHeroProps) => {
  const locale = await getLocale();
  const t = await getTranslations('detailMovie');

  const features = movie.genres.map((v) => {
    return (
      <Badge variant='gradient' key={v.id}>
        {v.name}
      </Badge>
    );
  });

  const percentage = (movie.vote_average * 10).toFixed(0);

  return (
    <Paper radius={0} pos='relative'>
      <BackgroundImage
        src={`${env.NEXT_PUBLIC_IMAGE_URL}/original${movie.backdrop_path}`}
      >
        <Container
          size='xl'
          px='md'
          py={20}
          pos='relative'
          style={{ zIndex: 2 }}
        >
          <BackButton />
          <Group align='flex-start' mt='md'>
            <NextImageFill
              src={`${env.NEXT_PUBLIC_IMAGE_URL}/w500${movie.poster_path}`}
              alt={movie.original_title}
              figureProps={{ w: { base: '100%', sm: 300 }, h: 400 }}
            />
            <Stack gap={8} w={{ base: '100%', sm: '70%' }}>
              <Title c='white' fz={{ base: 30, sm: 50 }} fw={600}>
                {movie.original_title} (
                {dayjs(movie.release_date).locale(locale).format('YYYY')})
              </Title>
              <Group gap='sm'>
                <Text fz={{ base: 12, sm: 16 }} c='white' fw={500}>
                  {dayjs(movie.release_date).locale(locale).format('LL')}
                </Text>
                <Divider size='md' orientation='vertical' color='white' />
                <Group gap='xs'>{features}</Group>
                <Divider size='md' orientation='vertical' color='white' />
                <Text c='white' fz={16} fw={500}>
                  {minutesToHours(movie.runtime)}
                </Text>
              </Group>
              <Group gap={2}>
                <RingProgress
                  roundCaps
                  thickness={8}
                  size={90}
                  sections={[
                    {
                      value: Number(percentage) || 0,
                      color: getColorByPercentage(Number(percentage)),
                    },
                  ]}
                  label={
                    <Text ta='center' fz={16}>
                      {percentage}%
                    </Text>
                  }
                />
                <Text fz={18} fw={500} c='white'>
                  ⭐ {t('userScore')}
                </Text>
              </Group>
              <ActionPanel />
              <Stack mt='md' gap='xs'>
                <Title order={2} c='white'>
                  {t('overview')}
                </Title>
                <Text fz={16} c='white' lineClamp={6}>
                  {movie.overview || '-'}
                </Text>
              </Stack>
              <SimpleGrid cols={{ base: 2, sm: 3 }} mt='md'>
                {movie.credits.crew.slice(0, 10).map((v) => (
                  <Stack gap={0} key={`${v.id}-${v.department}`}>
                    <Text fz={20} fw={500} c='white'>
                      {v.original_name}
                    </Text>
                    <Text fz={16} c='white' fw={300}>
                      {v.department}
                    </Text>
                  </Stack>
                ))}
              </SimpleGrid>
            </Stack>
          </Group>
        </Container>
        <Overlay bg='dark.6' backgroundOpacity={0.8} opacity={0.8} zIndex={1} />
      </BackgroundImage>
    </Paper>
  );
};
