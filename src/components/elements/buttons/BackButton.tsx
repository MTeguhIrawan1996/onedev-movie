'use client';

import { Button } from '@mantine/core';
import { IconArrowBack } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      leftSection={
        <IconArrowBack style={{ width: '70%', height: '70%' }} stroke={1.5} />
      }
      variant='gradient'
      onClick={() => router.back()}
    >
      Back
    </Button>
  );
};
