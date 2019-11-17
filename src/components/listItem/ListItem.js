import React from 'react';
import './ListItem.css';
import { connect } from 'react-redux';
import { getSelectedId, setSelectedId, removeItem } from '../../redux/store';

const ListItem = ({ item: { id, text, comments }, selectedId, setSelectedId, removeItem }) => {
  const listItemClick = (event) => {
    if (event.target.type === 'submit') return;

    setSelectedId(Number(event.currentTarget.dataset.id));
  };

  const removeItemClick = (event) => {
    const itemId = Number(event.target.dataset.id);

    removeItem(itemId);
    if (itemId === selectedId) setSelectedId(null);
  };

  return (
    <div className={`itemList__item ${id === selectedId && 'activeItem'}`} data-id={id} onClick={listItemClick}>
      <div className="itemList__item_content">
        <p className="itemList__item_text">
          {text}
          <span className="itemList__item_commentsCount">{comments.length}</span>
        </p>
        <button
          className="itemList__item_button"
          data-id={id}
          onClick={removeItemClick}
        >
          Delete
        </button>
      </div>
      <hr />
    </div>
  );
};

const mapStateToProps = state => ({
  selectedId: getSelectedId(state),
});

const mapDispatchToProps = { setSelectedId, removeItem };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListItem);
