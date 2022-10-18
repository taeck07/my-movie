import { MovieType } from '../../types/moveListTypes';
import styled from 'styled-components';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LazyImageLoading from '../common/LazyImageLoading';
import * as React from 'react';

const MovieInfoContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  gap: 20px;
  &:hover {
    background-color: #ebebeb;
  }
`;

const BookmarkWarp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bookmarked = styled(BookmarkIcon)`
  color: #ffd000;
`;

const BookmarkBorder = styled(BookmarkBorderIcon)`
  color: #e5e5e5;
`;

const MoviePosterWrap = styled.div`
  border-radius: 5px;
  width: 60px;
  height: 60px;
  overflow: hidden;
  > img {
    width: 60px;
  }
`;

const MovieDescriptions = styled.div`
  flex-grow: 1;
  > h5 {
    margin: 0;
    color: #3b3a3a;
  }
  > span {
    font-size: 0.65rem;
    color: #555555;
  }
`;

type PropTypes = {
  onClick: (id: string, title: string, bookmark?: boolean) => void;
};

const MovieInfo = ({ Title, Year, Type, Poster, imdbID, bookmark, onClick }: MovieType & PropTypes) => {
  return (
    <MovieInfoContainer onClick={() => onClick(imdbID, Title, !!bookmark)}>
      <BookmarkWarp>{bookmark ? <Bookmarked /> : <BookmarkBorder />}</BookmarkWarp>
      <MoviePosterWrap>
        <LazyImageLoading src={Poster} />
        {/* <img src={Poster} /> */}
      </MoviePosterWrap>
      <MovieDescriptions>
        <h5>{Title}</h5>
        <span>{Year}</span>
        <br />
        <span>{Type}</span>
      </MovieDescriptions>
    </MovieInfoContainer>
  );
};

export default React.memo(MovieInfo);
