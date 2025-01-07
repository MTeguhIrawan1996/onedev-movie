import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { HomePage } from '@/components/features';

import { getQueryClient } from '@/getQueryClient';
import { queryOptionOrders, useOrders } from '@/services/orders/queries';

export default async function Home() {
  const queryClient = getQueryClient();

  // From Query Option Orders
  await queryClient.prefetchQuery(queryOptionOrders());

  const { data } = useOrders();

  // eslint-disable-next-line no-console
  console.log(data);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePage />
    </HydrationBoundary>
  );
}
