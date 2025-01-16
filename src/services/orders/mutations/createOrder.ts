import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { orderInstance } from '@/services/orders/instances';

interface ICreateOrderVariables {
  name: string;
  // other variable or payload
}

interface ICreateOrderResponse {
  id: string;
  // other response
}

export interface ICreateOrderArgs {
  mutationOption: UseMutationOptions<ICreateOrderResponse, AxiosError, ICreateOrderVariables>;
  variables: ICreateOrderVariables;
}

export const createOrder = async (variables: ICreateOrderArgs['variables']) => {
  const response = await orderInstance.post<ICreateOrderResponse>('', variables);
  return response.data;
};

export const useCreateOrder = (mutationOption?: ICreateOrderArgs['mutationOption']) => {
  return useMutation({
    mutationFn: (variables) => createOrder(variables),
    ...(mutationOption || {}),
  });
};
