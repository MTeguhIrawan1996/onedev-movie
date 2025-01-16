import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { orderInstance } from '@/services/orders/instances';

type IDeleteOrderRequest = {
  id: string;
};

export interface IOrdersMutationArgs {
  // define any with response data
  mutationOption: UseMutationOptions<any, AxiosError, Partial<IDeleteOrderRequest>>;
  request: Partial<IDeleteOrderRequest>;
}

export const deleteOrder = async ({ id }: IOrdersMutationArgs['request']) => {
  const response = await orderInstance.delete(`/${id}`);
  return response.data;
};

// define any with response data
export const useDeleteOrder = (mutationOption?: IOrdersMutationArgs['mutationOption']) => {
  return useMutation<any, AxiosError, IOrdersMutationArgs['request']>({
    mutationFn: ({ id }) => deleteOrder({ id }),
    ...mutationOption,
  });
};
