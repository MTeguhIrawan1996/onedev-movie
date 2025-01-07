import { env } from '@/env';
import { getAxiosConfig } from '@/services/apiResolver';

const baseURL = `${env.NEXT_PUBLIC_REST_API_URL || ''}`;

export const orderInstance = getAxiosConfig(baseURL, {
  isAuth: true,
  includeDeviceInfo: false,
  includeXProject: false,
});

// Other Instance
