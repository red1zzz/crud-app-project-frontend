import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  function getItems() {
    fetch('http://localhost:5000/items')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setItems(data);
      })
      .catch(function(error) {
        console.log('Error getting items:', error);
      });
  }

  function deleteFromList(id) {
    let newItems = items.filter(function(item) {
      return item.id !== id;
    });
    setItems(newItems);
  }

  function shortenDescription(description) {
    if (description.length > 100) {
      return description.slice(0, 100) + '...';
    } else {
      return description;
    }
  }

  return (
    <div>
      <h2>Inventory Items</h2>
      <Link to="/items/new">Add New Item</Link>
      {items.length === 0 ? (
        <p>No items found. Add some items!</p>
      ) : (
        <ul>
          {items.map(function(item) {
            return (
              <li key={item.id}>
                <Link to={'/items/' + item.id}>
                  {item.item_name} - Quantity: {item.quantity}
                </Link>
                <p>{shortenDescription(item.description)}</p>
                <button onClick={function() { deleteFromList(item.id); }}>
                  Delete from List
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ItemList;