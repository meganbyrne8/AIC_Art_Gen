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
  justify-content: space-between;
  width: 90%;
`;

export const GalleryImageSingle = styled.div`
  width: 20%;
  margin: 2px 5px;
`;

export const TempImg = styled.img`
  object-fit: scale-down;
  width: 100%;
`;
