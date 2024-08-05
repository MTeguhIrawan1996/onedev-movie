import axios, { CreateAxiosDefaults } from 'axios';

import { env } from '@/env';

const baseURL = process.env.NEXT_PUBLIC_REST_API_URL;

// const axiosClient = () => {
const defaultOptions: CreateAxiosDefaults = {
  baseURL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${env.NEXT_PUBLIC_API_TOKEN}`,
  },
};

export const instance = axios.create(defaultOptions);
