import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Fab from '@mui/material/Fab';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const LayoutContainer = styled.div`
  width: 500px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const LayoutWarp = styled.div`
  height: calc(100% - 50px);
  margin-top: 50px;
`;

const Header = styled.header`
  width: 480px;
  height: 50px;
  position: fixed;
  top: 0;
  background-color: #000;
  color: #fff;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0;
`;

const AppBar = styled.footer`
  position: fixed;
  bottom: 0;
  width: 500px;
`;

const AppListWarp = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IconFab = styled(Fab)`
  background-color: #000 !important;
  > svg {import React from '../home/MovieInfo';

    color: #fff;
  }
`;

type PropTypes = {
  title: string;
};

export const Layout: React.FC<PropTypes> = ({ title, children }) => {
  const navigate = useNavigate();

  const move = useCallback((url: string) => {
    navigate(url);
  }, []);
  return (
    <LayoutContainer>
      <LayoutWarp>
        <Header>
          <Title>{title}</Title>
        </Header>
        {children}
        <AppBar>
          <AppListWarp>
            <IconFab onClick={() => move('/')}>
              <SearchIcon />
            </IconFab>
            <IconFab onClick={() => move('/bookmarks')}>
              <BookmarksIcon />
            </IconFab>
          </AppListWarp>
        </AppBar>
      </LayoutWarp>
    </LayoutContainer>
  );
};
