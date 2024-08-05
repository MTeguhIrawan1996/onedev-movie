import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {},

  client: {
    NEXT_PUBLIC_REST_API_URL: z.string().min(5),
    NEXT_PUBLIC_API_TOKEN: z.string().min(5),
    NEXT_PUBLIC_IMAGE_URL: z.string().min(5),
    NEXT_PUBLIC_IMAGE_DOMAIN: z.string().min(5),
  },

  shared: {
    NODE_ENV: z.enum(['development', 'production', 'test']),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
    NEXT_PUBLIC_REST_API_URL: process.env.NEXT_PUBLIC_REST_API_URL,
    NEXT_PUBLIC_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL,
    NEXT_PUBLIC_IMAGE_DOMAIN: process.env.NEXT_PUBLIC_IMAGE_DOMAIN,
  },
});
