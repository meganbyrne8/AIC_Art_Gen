import styled from "styled-components";

export const GalleryParent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
`;

export const GalleryImagesParent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

export const GalleryImageSingle = styled.div`
  display: flex;
  width: 20%;
  margin: 1rem;
`;

export const TempImg = styled.img`
  border-top: 5px solid lightgrey;
  border-right: 5px solid white;
  border-bottom: 5px solid lightgrey;
  border-left: 5px solid white;
  box-sizing: border-box;
  object-fit: cover;
  width: 100%;
`;
