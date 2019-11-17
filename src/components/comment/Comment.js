import React from 'react';
import './Comment.css';

const Comment = ({ comment: { text } }) => {
  return (
    <div className="comment">
      <div className="comment__content">
        <div>
          <img className="comment__img" src="https://lh3.googleusercontent.com/tsv2Gzt5rOsBDfonoy2tWJVo-4yzzo2ZxvbMgCgeHuMHbPGtnqTUWzDqcJUjy4E-FtiDBg=s85" />
        </div>
        <p className="comment__text">{text}</p>
      </div>
      <hr />
    </div>
  );
};

export default Comment;
