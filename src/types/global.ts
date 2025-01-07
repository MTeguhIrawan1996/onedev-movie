import { UndefinedInitialDataOptions } from '@tanstack/react-query';

export interface IInfo {
  count: number | null;
  pages: number | null;
  next: string | null;
  prev: string | null;
}
// export interface GResponse<T> {
//   results: T[];
// }

export interface CommonResponse {
  status: string;
  status_code: number;
  error_message: string;
}
export interface GResponse<T> extends CommonResponse {
  data: T[];
  results: T[];
  total_count: number;
  total_data: number;
}

export interface ObjResponse<T> extends CommonResponse {
  data: T;
}

export interface IGlobalMetaRequest {
  offset: number;
  page: number;
  limit: number;
  order: string;
  sort: string;
  query: string;
}

export type IQueryOptions<T, D> = UndefinedInitialDataOptions<T, Error, D | undefined, any[]>;
