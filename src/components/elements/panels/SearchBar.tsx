'use client';

import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useQueryStates } from 'nuqs';
import * as React from 'react';

import { movieParsers } from '@/utils/lib/searchParms';

export const SearchBar = () => {
  const [{ search }, setQueryParams] = useQueryStates(movieParsers, {
    shallow: false,
    clearOnDefault: true,
    throttleMs: 1000,
  });

  return (
    <TextInput
      defaultValue={search}
      leftSectionPointerEvents='none'
      leftSection={<IconSearch style={{ width: '50%', height: '50%' }} />}
      placeholder='Enter Your Keyword'
      w={{ base: '100%', sm: 300 }}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          setQueryParams({ search: event.currentTarget.value });
        }
      }}
    />
  );
};
