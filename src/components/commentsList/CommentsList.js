import React from 'react';
import './CommentsList.css';
import { connect } from 'react-redux';
import { Form, TextArea } from 'semantic-ui-react';
import Comment from '../comment/Comment';
import { getItemsList, getSelectedId, addComment } from '../../redux/store';

const CommentsList = ({ itemsList, selectedId, addComment }) => {
  const { comments } = itemsList.find(item => item.id === selectedId);

  const handleAddComment = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      addComment({ id: comments.length + 1, text: event.target.value });
      event.target.value = '';
    }
  };

  return (
    <div className="commentsList__container">
      <h1 className="commentsList__title">{`Comments #${comments.length}`}</h1>
      <div className="commentsList__comments">
        {comments.map(comment => <Comment key={comment.id + Math.random()} comment={comment} />)}
      </div>
      <div className="commentsList__addComment">
        <div>
          <img className="comment__img" src="https://lh3.googleusercontent.com/tsv2Gzt5rOsBDfonoy2tWJVo-4yzzo2ZxvbMgCgeHuMHbPGtnqTUWzDqcJUjy4E-FtiDBg=s85" />
        </div>
        <Form className="commentsList__textArea">
          <TextArea placeholder='Write your comment...' style={{ minHeight: 100}} onKeyUp={handleAddComment} />
        </Form>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  itemsList: getItemsList(state),
  selectedId: getSelectedId(state),
});

const mapDispatchToProps = { addComment };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
