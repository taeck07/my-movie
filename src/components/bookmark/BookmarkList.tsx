import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { bookMarkMoiveListStatus } from '../../recoil/bookmarkMovieList';
import { MovieInfo } from './MovieInfo';
import { setBookMarks } from '../../utils/storageUtils';
import { useState } from 'react';
import { ConfirmModal } from '../common/ConfirmModal';
import { QueryObserverResult } from 'react-query';
import { MovieDetailType } from '../../types/moveListTypes';

const BOOKMARK_MODAL_INIT = { open: false, title: '', imdbId: '' };

type PropTypes = {
  bookmarkList: QueryObserverResult<unknown, unknown>[];
};

export const BookmarkList = ({ bookmarkList }: PropTypes) => {
  const { bookmarkIdList } = useRecoilValue(bookMarkMoiveListStatus);
  const setBookMarkList = useSetRecoilState(bookMarkMoiveListStatus);
  const [removeBookmarkInfo, setRemoveBookmarkInfo] = useState({ ...BOOKMARK_MODAL_INIT });

  const onMovieInfoClick = (imdbId: string, title: string) => {
    setRemoveBookmarkInfo({ open: true, imdbId, title });
  };

  const removeBookMark = (reason?: string) => {
    if (reason === 'confirm') {
      const bookmarkList = bookmarkIdList.filter(imdbId => removeBookmarkInfo.imdbId !== imdbId);
      setBookMarks(bookmarkList);
      setBookMarkList({ bookmarkIdList: bookmarkList });
    }
    setRemoveBookmarkInfo({ ...BOOKMARK_MODAL_INIT });
  };

  const onDragEnd = (result: any) => {
    const { destination, source } = result;
    const list = [...bookmarkIdList];
    list.splice(source.index, 1);
    list.splice(destination.index, 0, bookmarkIdList[source.index]);
    setBookMarks(list);
    setBookMarkList({ bookmarkIdList: list });
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="bookmark-droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {bookmarkList.map(
                ({ data, isLoading }, index) =>
                  data && (
                    <Draggable
                      key={(data as MovieDetailType).imdbID}
                      draggableId={(data as MovieDetailType).imdbID}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          style={provided.draggableProps.style}
                        >
                          {isLoading ? (
                            <span>Loading...</span>
                          ) : (
                            <MovieInfo {...(data as MovieDetailType)} onClick={onMovieInfoClick} />
                          )}
                        </div>
                      )}
                    </Draggable>
                  ),
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <ConfirmModal
          title={`${removeBookmarkInfo.title} 북마크에서 삭제하시겠습니까?`}
          handleClose={removeBookMark}
          confirmTitle="삭제"
          open={removeBookmarkInfo.open}
        ></ConfirmModal>
      </DragDropContext>
    </>
  );
};
