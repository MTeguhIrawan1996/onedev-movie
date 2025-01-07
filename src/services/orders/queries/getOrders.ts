import { queryOptions, useQuery } from '@tanstack/react-query';

import { orderInstance } from '@/services/orders/instances';
import { ORDER_KEYS } from '@/services/orders/keys';
import { generateQueryParams } from '@/utils/helpers/generateQueryParams';

import { IGlobalMetaRequest, IQueryOptions, ObjResponse } from '@/types/global';

export interface IOrdersObjResponse {
  id: number;
  order_number: string;
  invoice_number: string;
  quote_id: number;
  customer_firstname: string;
  customer_lastname: string;
  payment_method: string;
  salesman_id: number | null;
  customer_email: string;
  grand_total: number;
  status: string;
  created_at: string;
}

export interface IOrdersResponse {
  items: IOrdersObjResponse[];
  total_count: number;
}

export interface IOrderRequest extends IGlobalMetaRequest {
  status: string;
  keyword: string;
  order_date_from: string;
  order_date_to: string;
  bill_to: string;
  ship_to: string;
  sales_id: string;
  search: string;
}

export interface IOrdersArgs {
  options: IQueryOptions<Partial<ObjResponse<IOrdersResponse>>, IOrdersObjResponse[]>;
  request: Partial<IOrderRequest>;
}

export const getOrders = async (req: IOrdersArgs['request']) => {
  const params = generateQueryParams(req);
  const response = await orderInstance.get<Partial<ObjResponse<IOrdersResponse>>>(`?${params}`);
  return response.data;
};

export const queryOptionOrders = (args?: Partial<IOrdersArgs>) => {
  const { options, request } = args || {};
  return queryOptions({
    queryKey: ORDER_KEYS.list({ ...request }),
    queryFn: () => getOrders({ ...request }),
    retry: 0,
    enabled: !!request?.sales_id,
    select: ({ data }) => {
      // Other function extract response api
      const newData = data?.items.filter((obj) => obj.status === 'active');
      return newData;
    },
    ...options,
  });
};

export const useOrders = (args?: Partial<IOrdersArgs>) => {
  return useQuery(queryOptionOrders({ ...args }));
};
