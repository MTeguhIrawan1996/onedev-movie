import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { orderInstance } from '@/services/orders/instances';

type IDeleteOrderRequest = {
  id: string;
};

// define any with response data
export interface IOrdersArgs {
  mutationOption: UseMutationOptions<any, AxiosError, Partial<IDeleteOrderRequest>>;
  request: Partial<IDeleteOrderRequest>;
}

export const deleteOrder = async ({ id }: IOrdersArgs['request']) => {
  const response = await orderInstance.delete(`/${id}`);
  return response.data;
};

// define any with response data
export const useDeleteOrder = (mutationOption?: IOrdersArgs['mutationOption']) => {
  return useMutation<any, AxiosError, IOrdersArgs['request']>({
    mutationFn: ({ id }) => deleteOrder({ id }),
    ...mutationOption,
  });
};
