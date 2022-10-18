import { useCallback, useEffect } from 'react';
import { useMovieInfinityQuery } from '../hooks/query/movie';
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { searchMovieListStatus } from '../recoil/searchMovieList';
import styled from 'styled-components';
import { SearchComp } from '../components/home/Search';
import { MovieList } from '../components/home/MovieList';
import { Layout } from '../components/common/Layout';
import { bookMarkMoiveListStatus } from '../recoil/bookmarkMovieList';
import { MovieType } from '../types/moveListTypes';

const HomeContainer = styled.div`
  padding-top: 100px;
  height: calc(100% - 100px);
  overflow: hidden;
`;

const Home = () => {
  const { search, movieList } = useRecoilValue(searchMovieListStatus);
  const setMovieListState = useSetRecoilState(searchMovieListStatus);
  const { bookmarkIdList } = useRecoilValue(bookMarkMoiveListStatus);
  const resetMovieListState = useResetRecoilState(searchMovieListStatus);

  const { fetchNextPage, hasNextPage, data } = useMovieInfinityQuery({ search });
  const getBookmarkStatus = useCallback(
    (imdbId: string) => {
      return bookmarkIdList.some(id => id === imdbId);
    },
    [bookmarkIdList],
  );

  useEffect(() => {
    setMovieListState(prev => {
      return {
        ...prev,
        movieList:
          data?.pages.reduce(
            (prev, curr) =>
              prev.concat(curr.result.map(movie => ({ ...movie, bookmark: getBookmarkStatus(movie.imdbID) }))),
            [] as MovieType[],
          ) || [],
      };
    });
    // 컨텐츠 영역 더 작을 경우 대비 2페이지 로드
    if (data?.pages.length === 1) {
      hasNextPage && setPage();
    }
  }, [data]);

  const handleSearch = useCallback(searchWord => {
    setMovieListState(prev => ({ ...prev, movieList: [], page: 1, search: searchWord, totalCount: 0 }));
  }, []);

  const setPage = useCallback(() => {
    fetchNextPage();
  }, [setMovieListState]);

  useEffect(() => {
    setMovieListState({
      search,
      movieList: movieList.map(movie => ({ ...movie, bookmark: getBookmarkStatus(movie.imdbID) })),
    });
  }, [bookmarkIdList]);

  useEffect(() => {
    return () => {
      resetMovieListState();
    };
  }, []);

  return (
    <Layout title="검색">
      <HomeContainer>
        <SearchComp handleSearch={handleSearch} />
        <MovieList movieList={movieList} hasNextPage={hasNextPage || false} refetch={setPage} />
      </HomeContainer>
    </Layout>
  );
};

export default Home;
