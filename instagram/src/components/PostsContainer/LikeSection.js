import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../CommentSection/Comment';

const LikeSectionDiv = styled.div`
  height: 10px;
  width: 10px;
  margin: 10px;
  padding-bottom 15px;
`;

const LikeSection = props => {
  return [
    <div
      className="like-section"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>,
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper">{props.likes}</div>
    </div>
  ];
};

export default LikeSection;
