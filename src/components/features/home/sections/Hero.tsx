'use client';

import * as React from 'react';

import { getQueryClient } from '@/getQueryClient';
import { useDeleteOrder } from '@/services/orders/mutations';

export const Hero = () => {
  const queryClient = getQueryClient();

  const { mutate } = useDeleteOrder({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['ORDER', 'LIST', { some_key: 'done' }],
        refetchType: 'active',
      });
    },
    onError: () => {},
  });

  const handlerDelete = () => {
    mutate({ id: '1' });
  };

  return (
    <div>
      <button type="button" onClick={handlerDelete}>
        Delete
      </button>
    </div>
  );
};
