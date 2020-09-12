import styled from "styled-components";

export const FeaturedStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-top: 7rem;
`;

export const FeaturedChildStyles = styled.div`
  width: 40%;
  padding: 10px;
`;

export const FeaturedImg = styled.img`
  object-fit: scale-down;
  width: 100%;
`;

export const FeatureButton = styled.button`
  font-size: 1em;
  font-weight: 600;
  margin: 1em;
  padding: 0.4em 1.5em;
  border: none;
  background: #fffbfe;
  border-radius: 2px;
  color: #822097;
`;
