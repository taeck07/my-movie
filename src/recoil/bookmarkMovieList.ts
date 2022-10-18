import { atom } from 'recoil';
import { BookmarkMovieListType } from '../types/moveListTypes';
import { KEY_BOOKMARK_MOVIE_LIST } from '../constant/recoilKeys';
import { getBookMarks } from '../utils/storageUtils';

export const bookMarkMoiveListStatus = atom<BookmarkMovieListType>({
  key: KEY_BOOKMARK_MOVIE_LIST,
  default: {
    bookmarkIdList: getBookMarks() || [],
  },
});
