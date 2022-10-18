import { useState } from 'react';
import styled from 'styled-components';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 500px;
  position: fixed;
  top: 50px;
`;

const InputWarp = styled.div`
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  width: 100%;
  display: flex;
`;

type PropTypes = {
  handleSearch: (s: string) => void;
};

export const SearchComp = ({ handleSearch }: PropTypes) => {
  const [searchWord, setSearchWord] = useState('');

  const onHandleInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const onEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleSearch(searchWord);
    }
  };

  return (
    <SearchContainer>
      <InputWarp>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="검색어를 입력하세요"
          inputProps={{ 'aria-label': '검색어를 입력하세요' }}
          onChange={e => onHandleInput(e)}
          onKeyPress={e => onEnter(e)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => handleSearch(searchWord)}>
          <SearchIcon />
        </IconButton>
      </InputWarp>
    </SearchContainer>
  );
};
