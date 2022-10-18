import { Layout } from '../components/common/Layout';
import { BookmarkList } from '../components/bookmark/BookmarkList';
import { useGetMovieByIdQuery } from '../hooks/query/movieById';
import { useRecoilValue } from 'recoil';
import { bookMarkMoiveListStatus } from '../recoil/bookmarkMovieList';

export const Bookmark = () => {
  const { bookmarkIdList } = useRecoilValue(bookMarkMoiveListStatus);
  const result = useGetMovieByIdQuery({ ids: bookmarkIdList });

  return (
    <Layout title="내 즐겨찾기">
      <BookmarkList bookmarkList={result} />
    </Layout>
  );
};
