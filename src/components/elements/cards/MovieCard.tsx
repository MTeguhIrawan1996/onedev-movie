import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  RingProgress,
  Text,
} from '@mantine/core';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useLocale } from 'next-intl';
import * as React from 'react';
import { useShallow } from 'zustand/react/shallow';
import 'dayjs/locale/id';
import 'dayjs/locale/en';

import classes from './Cards.module.css';

import NextImageFill from '@/components/elements/images/NextImageFill';

import { env } from '@/env';
import { getColorByPercentage } from '@/utils/lib/getColorPercentage';
import { useStoreGenres } from '@/utils/store/useStoreGenres';

dayjs.extend(localizedFormat);

interface IMovieCardProps {
  image?: string;
  title?: string;
  description?: string;
  releaseDate?: string;
  currentGenres?: number[];
  voteAverage?: number;
}

export const MovieCard = ({
  image,
  title,
  currentGenres,
  description,
  releaseDate,
  voteAverage = 0,
}: IMovieCardProps) => {
  const locale = useLocale();
  const [genresState] = useStoreGenres(
    useShallow((state) => [state.genresState]),
  );

  const features = currentGenres?.map((v) => {
    const currentGenre = genresState?.genres.find((o) => o.id === v);

    return (
      <Badge variant='light' key={v}>
        {currentGenre?.name}
      </Badge>
    );
  });

  const percentage = (voteAverage * 10).toFixed(0);

  return (
    <Card withBorder shadow='xs' radius='md' p='md' className={classes.card}>
      <Card.Section pos='relative'>
        <NextImageFill
          src={`${env.NEXT_PUBLIC_IMAGE_URL}${image}`}
          alt={title || ''}
          priority
          figureProps={{ radius: 0, shadow: '0' }}
        />
      </Card.Section>

      <Card.Section className={classes.section} mt='md'>
        <Group justify='space-between'>
          <Box w='50%'>
            <Text fz='lg' fw={500} truncate>
              {title}
            </Text>
          </Box>
          <Badge size='sm' variant='light'>
            {dayjs(releaseDate).locale(locale).format('LL')}
          </Badge>
        </Group>
        <Text fz='sm' component='p' mt='xs' lineClamp={2}>
          {description || '-'}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt='md' className={classes.label} c='dimmed'>
          Genre
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt='xs' gap='2'>
        <Button radius='md' style={{ flex: 1 }}>
          Show details
        </Button>
        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={4}
            size={40}
            sections={[
              {
                value: Number(percentage) || 0,
                color: getColorByPercentage(Number(percentage)),
              },
            ]}
            label={
              <Text ta='center' fz={10} className={classes['label-ring']}>
                {percentage}%
              </Text>
            }
          />
        </div>
      </Group>
    </Card>
  );
};
