import { MovieType } from './moveListTypes';

export interface MovieReqType {
  s: string;
  page: number;
}

export interface MovieResType {
  result: MovieType[];
  currentPage: number;
  totalResults: number;
}

export interface MovieByIdReqType {
  i: string;
}
