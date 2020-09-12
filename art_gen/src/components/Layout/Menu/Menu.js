import React from "react";
import { StyledMenu } from "./Menu.styled";

const Menu = (props) => {
  const { open } = props;

  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about">
          &#127994;
        </span>
        About
      </a>
      <a href="/">
        <span role="img" aria-label="secret galleries">
          &#9889;
        </span>
        Secret Galleries
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#128172;
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};
export default Menu;
