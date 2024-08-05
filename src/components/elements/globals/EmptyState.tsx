import { Container, Image, SimpleGrid, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';
import * as React from 'react';

import classes from './Global.module.css';

import { EmptyStateImg } from '@/utils/constants/image';

export const EmptyState = () => {
  const t = useTranslations('emptyState');
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src={EmptyStateImg.src} className={classes.mobileImage} />
        <div>
          <Text component='h1' variant='gradient' className={classes.title}>
            {t('title')}...
          </Text>
          <Text c='dimmed' size='lg'>
            {t('description')}
          </Text>
        </div>
        <Image src={EmptyStateImg.src} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
};
