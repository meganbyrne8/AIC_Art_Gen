import React from "react";
import {
  FeaturedStyles,
  FeaturedChildStyles,
  FeaturedImageChildStyles,
  FeaturedImg,
  FeatureButton,
} from "./Feature.styled";

export default function Feature(props) {
  const { featured } = props;

  const openPage = () => {
    window.open(props.featured.artId, "_blank");
  };

  if (featured === undefined) {
    return <div>Loading...</div>;
  } else {
    return (
      <FeaturedStyles>
        <FeaturedChildStyles>
          <h2>{featured.title}</h2>
          <h3>{featured.name}</h3>
          <p>{featured.date}</p>
          <p>{featured.medium}</p>
          <p>{featured.copyright}</p>
          <p>{featured.description}</p>
          <FeatureButton onClick={openPage}>Read More</FeatureButton>
        </FeaturedChildStyles>

        <FeaturedImageChildStyles>
          <FeaturedImg src={featured.url} alt={featured.title} />
        </FeaturedImageChildStyles>
      </FeaturedStyles>
    );
  }
}
