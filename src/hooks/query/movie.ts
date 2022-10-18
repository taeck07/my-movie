import { useQuery, useInfiniteQuery } from 'react-query';
import { MovieApi } from '../../services/api/movieApi';
import { MovieResType, MovieReqType } from '../../types/moveListApiTypes';
import { GET_MOVIE_LIST } from '../../constant/apiKeys';
import { MovieType } from '../../types/moveListTypes';

type PropTypes = {
  search: string;
};

export const useMovieInfinityQuery = ({ search }: PropTypes) => {
  return useInfiniteQuery<MovieResType>(
    [GET_MOVIE_LIST, search],
    ({ pageParam = 1 }): Promise<MovieResType> => MovieApi.get({ page: pageParam, s: search }),
    {
      enabled: !!search,
      getNextPageParam: ({ currentPage, totalResults }) => {
        if (currentPage * 10 > totalResults) return undefined;
        return currentPage + 1;
      },
    },
  );
};
