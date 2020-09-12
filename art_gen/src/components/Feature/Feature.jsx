import React from "react";
// import moonloader here for feature image, should be the truthy condition for the if on line 11

export default function Feature(props) {
  const { featured } = props;

  const openPage = () => {
    window.open(props.featured.artId, "_blank");
  };

  if (featured === undefined) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div>
          <h2>{featured.title}</h2>
          <h3>{featured.name}</h3>
          <p>{featured.date}</p>
          <p>{featured.medium}</p>
          <p>{featured.copyright}</p>
          <p>{featured.description}</p>
          <button onClick={openPage}>Read More</button>
        </div>

        <div>
          <img src={featured.url} alt={featured.title} />
        </div>
      </div>
    );
  }
}
