import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { orderInstance } from '@/services/orders/instances';

interface IUpdateOrderVariables {
  id: string;
  name: string;
  // other variable or payload
}

interface IUpdateOrderResponse {
  id: string;
  // other response
}

export interface IUpdateOrderArgs {
  mutationOption: UseMutationOptions<IUpdateOrderResponse, AxiosError, IUpdateOrderVariables>;
  variables: IUpdateOrderVariables;
}

export const updateOrder = async (variables: IUpdateOrderArgs['variables']) => {
  const { id, ...rest } = variables;
  const response = await orderInstance.put<IUpdateOrderResponse>(`/${id}`, {
    ...rest,
  });
  return response.data;
};

export const useUpdateOrder = (mutationOption?: IUpdateOrderArgs['mutationOption']) => {
  return useMutation({
    mutationFn: (variables) => updateOrder(variables),
    ...(mutationOption || {}),
  });
};
