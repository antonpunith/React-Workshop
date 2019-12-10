import React, { Component } from "react";
// component
import { Tag } from "../Tag";

class Tags extends Component {
  render() {
    const { tags, selectedTag } = this.props;

    return (
      <div>
        {tags.map((tag, key) => (
          <Tag key={`tag${key}`} selectedTag={selectedTag}>
            {tag}
          </Tag>
        ))}
      </div>
    );
  }
}

export { Tags };
