import styled from "styled-components";

export const FeaturedStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 7rem;
`;

export const FeaturedChildStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 45%;
  padding: 1rem;
`;

export const FeaturedImageChildStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 45%;
  padding: 1rem;
  background: white;
`;

export const FeaturedImg = styled.img`
  object-fit: scale-down;
  width: 100%;
  border-top: 2px solid lightgrey;
  border-right: 2px solid white;
  border-bottom: 2px solid lightgrey;
  box-sizing: border-box;
  z-index: 20;
`;

export const FeatureButton = styled.button`
  font-size: 1em;
  font-weight: 600;
  padding: 0.4em 1.5em;
  border: none;
  background: #fffbfe;
  border-radius: 2px;
  color: #822097;
`;
