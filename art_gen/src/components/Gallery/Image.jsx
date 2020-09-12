import React from "react";

export default function Image(props) {
  const { changeFeature, src, title, index } = props;

  const updateFeature = () => {
    changeFeature(index);
  };

  return (
    <div>
      <img src={src} alt={title} onClick={updateFeature} />
    </div>
  );
}
