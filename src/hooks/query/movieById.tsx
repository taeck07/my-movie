import { useQueries, UseQueryResult } from 'react-query';
import { MovieApi } from '../../services/api/movieApi';
import { GET_MOVIE_BY_ID } from '../../constant/apiKeys';

type PropTypes = {
  ids: string[];
};

export const useGetMovieByIdQuery = ({ ids }: PropTypes) => {
  return useQueries(
    ids.map(id => {
      return {
        queryKey: [GET_MOVIE_BY_ID, id],
        queryFn: () => MovieApi.getById({ i: id }),
      };
    }),
  );
};
