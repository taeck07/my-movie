## 사용 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Recoil](https://img.shields.io/badge/Recoil-3578e5.svg?style=for-the-badge&logo=recoil&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154.svg?style=for-the-badge&logo=react-query&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled_components-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Start project

Install

```
npm install
```

start

```
npm run start
```

## 요구사항

1. 검색

   - 상단 입력 박스는 상단 고정이 되어야 한다.
   - 검색시 http://www.omdbapi.com 에서 검색 목록을 불러온다
   - 검색 결과가 없는 경우 '검색 결과가 없습니다.'로 노출된다.
   - 영화 아이템은 좌측에 포스터 이미지, 우측에 영화 제목, 년도, 타입이 표시된다.
   - 즐겨찾기를 할 수 있으며 localStorage에 저장되고 즐겨찾기한 영화는 표시된다.
   - 즐겨찾기 되어있는 목록을 선택할 경우 즐겨찾기 삭제 메시지가 노출된다.

2. 하단 탭

   - 두개의 탭을 가지며 검색과 즐겨찾기이다.

3. 즐겨찾기
   - 즐겨찾기한 목록을 볼 수 있으며 삭제가 가능하다.
   - 드래그&드롭으로 목록 순서를 조정할 수 있다.

## 사용 라이브러리

1. axios
   - 데이터 fetch
2. react-infinite-scroll-component
   - 스크롤 페이징을 위해 사용
3. react-beautiful-dnd
   - 드래드&드롭 기능

### 개선해야 할 사항

1. 무한 스크롤에서 보이지 않는 부분 렌더링하지 않도록 수정해보기
2. 검색 결과 유지하기
3. 스크롤 영역보다 컨텐츠 영역이 작을때 스크롤이 생기지 않아 데이터를 더이상 불러올 수 없는 문제
4. 로딩, 에러 처리
5.
