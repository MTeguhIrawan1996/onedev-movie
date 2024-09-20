import {
  createSearchParamsCache,
  parseAsFloat,
  parseAsString,
} from 'nuqs/server';

export const movieParsers = {
  l: parseAsFloat.withDefault(10),
  p: parseAsFloat.withDefault(1),
  search: parseAsString.withDefault(''),
};
export const movieCache = createSearchParamsCache(movieParsers);
