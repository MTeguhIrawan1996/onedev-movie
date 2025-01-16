import { HomePage } from '@/components/features';

import { useOrders } from '@/services/orders';
import { useUpdateOrder } from '@/services/orders/mutations/updateOrder';

export default async function Home() {
  const { data } = useOrders();

  const { mutate } = useUpdateOrder();

  // eslint-disable-next-line no-console
  console.log(data);

  // eslint-disable-next-line unused-imports/no-unused-vars
  const handlerCreate = () => {
    mutate({
      id: '1',
      name: 'nama',
    });
  };

  return <HomePage />;
}
