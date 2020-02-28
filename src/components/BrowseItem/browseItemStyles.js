import styled from "styled-components";

export const BrowseContainer = styled.div`
  overflow: hidden;
  /* position: relative; */
  width: 250px;
  height: 250px;
  margin: 10px;
  border: none;
  border-radius: 8px;
  background-color: rgb(75, 145, 125);
`;

export const GenreContainer = styled(BrowseContainer)`
  background-color: red;
`;

export const BrowseTitle = styled.h1`
  color: #fff;
`;

export const GenreCover = styled.img`
  width: 100px;
  height: 100px;
`;
