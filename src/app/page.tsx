import { HomePage } from '@/components/features';

import { useOrders } from '@/services/orders';

export default async function Home() {
  const { data } = useOrders();

  // eslint-disable-next-line no-console
  console.log(data);

  return <HomePage />;
}
