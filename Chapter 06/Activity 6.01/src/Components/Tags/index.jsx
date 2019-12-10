import React, { Component } from "react";
// component
import { Tag } from "../Tag";

class Tags extends Component {
  render() {
    const { tags } = this.props;
    console.log(tags);

    return (
      <div>
        {tags.map((tag, key) => (
          <Tag key={`tag${key}`}>{tag}</Tag>
        ))}
      </div>
    );
  }
}

export { Tags };
