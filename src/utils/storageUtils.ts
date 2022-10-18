const KEY_BOOKMARK_LIST = 'bookmarkList';

export const setBookMarks = (value: string[]) => {
  localStorage.setItem(KEY_BOOKMARK_LIST, value.toString());
};

export const getBookMarks = () => {
  const bookmarkList = localStorage.getItem(KEY_BOOKMARK_LIST);
  return bookmarkList?.split(',');
};
