import React from 'react';
import './Posts.css';
import styled, { css } from 'styled-components';

const PostHeaderDiv = styled.div`
display: flex;
padding: 10px;
`;

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;
