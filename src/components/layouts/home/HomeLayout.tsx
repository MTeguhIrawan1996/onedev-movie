'use client';

import { AppShell, Group, Skeleton, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import dynamic from 'next/dynamic';
import * as React from 'react';

const ThemeButton = dynamic(
  () => import('@/components/elements').then((mod) => mod.ThemeButton),
  {
    ssr: false,
    loading: () => <Skeleton height={20} width={50} radius='xl' />,
  },
);
const InternatinoalizationButton = dynamic(
  () =>
    import('@/components/elements').then(
      (mod) => mod.InternatinoalizationButton,
    ),
  {
    ssr: false,
    loading: () => <Skeleton height={20} width={50} radius='xl' />,
  },
);

type IHomeLayoutProps = {
  children: React.ReactNode;
};

export const HomeLayout = ({ children }: IHomeLayoutProps) => {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header zIndex={9999}>
        <Group h='100%' px='md'>
          <Group justify='space-between' style={{ flex: 1 }}>
            <Group gap='xs'>
              <MantineLogo size={30} type='mark' color='blue' />
              <Text
                size='xl'
                fw={900}
                component='span'
                variant='gradient'
                gradient={{ from: 'gray', to: 'blue', deg: 360 }}
              >
                OneMovie
              </Text>
            </Group>
            <Group ml='xl' gap='sm'>
              <ThemeButton />
              <InternatinoalizationButton />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
