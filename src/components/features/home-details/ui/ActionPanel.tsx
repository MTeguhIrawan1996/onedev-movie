'use client';

import { ActionIcon, Group } from '@mantine/core';
import { IconBookmarkFilled, IconHeartFilled } from '@tabler/icons-react';
import * as React from 'react';

export const ActionPanel = () => {
  const [love, setLove] = React.useState<boolean>(false);
  const [bookmark, setBookmark] = React.useState<boolean>(false);
  return (
    <Group gap='sm' mt='sm'>
      <ActionIcon
        variant='gradient'
        size='xl'
        aria-label='Love action icon'
        onClick={() => setLove((prev) => !prev)}
        c={love ? 'red.5' : undefined}
      >
        <IconHeartFilled />
      </ActionIcon>
      <ActionIcon
        variant='gradient'
        size='xl'
        aria-label='Bookmark action icon'
        onClick={() => setBookmark((prev) => !prev)}
        c={bookmark ? 'red.5' : undefined}
      >
        <IconBookmarkFilled />
      </ActionIcon>
    </Group>
  );
};
