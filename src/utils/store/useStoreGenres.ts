import { create } from 'zustand';

import { IGenresResponse } from '@/services/rest-api/genres/useReadAllGenres';

interface GenresState {
  genresState?: IGenresResponse;
  setGenresState: (genresState: IGenresResponse) => void;
}

export const useStoreGenres = create<GenresState>((set) => ({
  genresState: undefined,
  setGenresState: (genresState: IGenresResponse) => set({ genresState }),
}));
