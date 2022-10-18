import { MovieType } from '../../types/moveListTypes';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieInfo from './MovieInfo';
import { useState, useCallback } from 'react';
import { ConfirmModal } from '../common/ConfirmModal';
import { setBookMarks } from '../../utils/storageUtils';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { bookMarkMoiveListStatus } from '../../recoil/bookmarkMovieList';
import Visibility from '../common/InifinityVisibility';

const MovieListContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

const EmptyList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type PropTypes = {
  movieList: MovieType[];
  refetch: () => void;
  hasNextPage: boolean;
};

const BOOKMARK_MODAL_INIT = { open: false, title: '', imdbId: '' };

export const MovieList = ({ movieList, refetch, hasNextPage }: PropTypes) => {
  const [addBookmarkInfo, setAddBookmarkInfo] = useState({ ...BOOKMARK_MODAL_INIT });
  const [removeBookmarkInfo, setRemoveBookmarkInfo] = useState({ ...BOOKMARK_MODAL_INIT });
  const setBookmarkState = useSetRecoilState(bookMarkMoiveListStatus);
  const { bookmarkIdList } = useRecoilValue(bookMarkMoiveListStatus);

  const onMovieClick = useCallback(
    (imdbId: string, title: string, bookmark = false) => {
      bookmark
        ? setRemoveBookmarkInfo({ imdbId, title, open: true })
        : setAddBookmarkInfo({ imdbId, title, open: true });
    },
    [setAddBookmarkInfo],
  );

  const setBookmarkList = (reason = '', bookmark = false) => {
    if (reason === 'confirm') {
      const bookmarkList = bookmark
        ? bookmarkIdList.filter(imdbId => removeBookmarkInfo.imdbId !== imdbId)
        : bookmarkIdList.concat([addBookmarkInfo.imdbId]);
      setBookMarks(bookmarkList);
      setBookmarkState({ bookmarkIdList: bookmarkList });
    }
    setAddBookmarkInfo({ ...BOOKMARK_MODAL_INIT });
    setRemoveBookmarkInfo({ ...BOOKMARK_MODAL_INIT });
  };

  return (
    <>
      <MovieListContainer id="scroll">
        <InfiniteScroll
          dataLength={movieList.length}
          next={refetch}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
          endMessage={<p style={{ textAlign: 'center' }}></p>}
          refreshFunction={() => {}}
          pullDownToRefreshThreshold={50}
          scrollableTarget="scroll"
        >
          {movieList.length ? <></> : <EmptyList>검색 결과가 없습니다.</EmptyList>}
          {movieList.map(movie => (
            <Visibility style={{ height: '80px' }} key={movie.imdbID}>
              <MovieInfo {...movie} onClick={onMovieClick} />
            </Visibility>
          ))}
        </InfiniteScroll>
      </MovieListContainer>
      <ConfirmModal
        title={`${addBookmarkInfo.title} 북마크에 추가하시겠습니까?`}
        handleClose={setBookmarkList}
        confirmTitle="추가"
        open={addBookmarkInfo.open}
      ></ConfirmModal>
      <ConfirmModal
        title={`${removeBookmarkInfo.title} 북마크에서 삭제하시겠습니까?`}
        handleClose={reason => setBookmarkList(reason, true)}
        confirmTitle="삭제"
        open={removeBookmarkInfo.open}
      ></ConfirmModal>
    </>
  );
};
