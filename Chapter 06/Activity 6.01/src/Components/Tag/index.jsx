import React from "react";

import "./tag.css";

const Tag = props => (
  <span
    className={`tag ${props.selectedTag === props.children ? "active" : ""}`}
  >
    {props.children}
  </span>
);

export { Tag };
