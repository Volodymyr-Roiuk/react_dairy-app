import React, { useEffect } from 'react';
import './ItemsList.css';
import { Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ListItem from '../listItem/ListItem';
import {getItemsList, getItemText, getIdCounter, setItemsList, setItemText, addNewItem, setIdCounter } from '../../redux/store';

const ItemsList = ({ itemsList, itemText, idCounter, setItemsList, setItemText, addNewItem, setIdCounter }) => {
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('itemsList'));
    const idCounter = JSON.parse(localStorage.getItem('idCounter'));

    setItemsList(items || []);
    setIdCounter(idCounter || 0);
  }, []);

  useEffect(() => {
    localStorage.setItem('itemsList', JSON.stringify(itemsList));
    localStorage.setItem('idCounter', JSON.stringify(idCounter));
  }, [itemsList, idCounter]);

  const changeInputValue = (event) => {
    setItemText(event.target.value);
  };

  const AddNewItemClick = (event) => {
    if (!itemText) return;

    addNewItem({ id: idCounter + 1, text: itemText, comments: [] });
    setItemText('');
    setIdCounter(idCounter + 1);
  };

  console.log('idCounter: ', idCounter);
  return (
    <div className="itemList__container">
      <h1 className="itemList__title">Items</h1>
      <div className="itemList__actionsContainer ">
        <Input
          placeholder="Type name here..."
          className="itemList__input"
          value={itemText}
          onChange={changeInputValue}
        />
        <Button className="itemList__button" onClick={AddNewItemClick}>Add new</Button>
      </div>
      <div className="itemList__items">
        {itemsList.map(item => <ListItem key={item.text + Math.random()} item={item} />)}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  itemsList: getItemsList(state),
  itemText: getItemText(state),
  idCounter: getIdCounter(state),
});

const mapDispatchToProps = { setItemsList, setItemText, addNewItem, setIdCounter };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemsList);
