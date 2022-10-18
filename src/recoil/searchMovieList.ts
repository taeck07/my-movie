import { atom } from 'recoil';
import { MovieListType } from '../types/moveListTypes';
import { KEY_SEARCH_MOVIE_LIST } from '../constant/recoilKeys';

export const searchMovieListStatus = atom<MovieListType>({
  key: KEY_SEARCH_MOVIE_LIST,
  default: {
    movieList: [],
    search: '',
  },
});
