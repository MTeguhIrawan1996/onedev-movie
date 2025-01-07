import axios from 'axios';

interface AxiosConfig {
  isAuth: boolean;
  includeDeviceInfo: boolean;
  includeXProject: boolean;
  optionalHeaders: { [key: string]: string };
}

export const getAxiosConfig = (
  baseURL: string,
  { isAuth, includeDeviceInfo, includeXProject = true, optionalHeaders }: Partial<AxiosConfig>,
) => {
  const xProject = { 'x-project': 'your-x-project' };

  const options = {
    baseURL,
    headers: {
      'Content-type': 'application/json',
      ...(includeXProject ? xProject : {}),
      ...optionalHeaders,
    },
  };

  const instance = axios.create(options);

  // Set the AUTH token for any request
  instance.interceptors.request.use(async (config) => {
    if (includeDeviceInfo) {
      config.headers.device = 'your-device';
      config.headers['device-id'] = 'your-device-id';
    }

    if (isAuth) {
      config.headers.Authorization = 'Bearer your-token';
    }

    return config;
  });

  return instance;
};
