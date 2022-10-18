import { client } from './movieClient';
import { MovieReqType, MovieByIdReqType, MovieResType } from '../../types/moveListApiTypes';
import { MovieType } from '../../types/moveListTypes';

export const MovieApi = {
  get: async (query: MovieReqType): Promise<MovieResType> => {
    const { data } = await client.get('/', { params: query });
    return {
      result: data.Search,
      currentPage: query.page,
      totalResults: data.totalResults,
    };
  },
  getById: async (query: MovieByIdReqType) => {
    const { data } = await client.get('/', { params: query });
    return data;
  },
};
