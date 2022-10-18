import { MovieType } from '../../types/moveListTypes';
import styled from 'styled-components';

const MovieInfoContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  gap: 20px;
  &:hover {
    background-color: #ebebeb;
  }
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
  onClick: (id: string, title: string) => void;
};

export const MovieInfo = ({ Title, Year, imdbID, Type, Poster, onClick }: MovieType & PropTypes) => {
  return (
    <MovieInfoContainer onClick={() => onClick(imdbID, Title)}>
      <MoviePosterWrap>
        <img src={Poster} />
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
