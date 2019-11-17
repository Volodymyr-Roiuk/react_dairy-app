import React from 'react';
import './Dairy.css';
import ItemsList from '../itemsList/ItemsList';
import CommentsList from '../commentsList/CommentsList';
import { connect } from 'react-redux';
import  { getSelectedId } from '../../redux/store';


const Dairy = ({ selectedId }) => {
  return (
    <div className="dairy__container">
      <div className="dairy__titleContainer">
        <h1 className="dairy__title">Dairy app</h1>
        <p className="dairy__title_text">Comment with no sense</p>
      </div>
      <ItemsList />
      {selectedId && <CommentsList />}
    </div>
  );
};

const mapStateToProps = state => ({
  selectedId: getSelectedId(state),
});

export default connect(
  mapStateToProps
)(Dairy);
