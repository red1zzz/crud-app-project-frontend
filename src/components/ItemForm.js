import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ItemForm() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/items/${id}`)
        .then(response => response.json())
        .then(data => {
          setItemName(data.item_name);
          setDescription(data.description);
          setQuantity(data.quantity);
        })
        .catch(error => console.log('Error:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { item_name: itemName, description, quantity: Number(quantity) };

    const url = id ? `http://localhost:5000/items/${id}` : 'http://localhost:5000/items';
    const method = id ? 'PUT' : 'POST';

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(() => {
        alert(id ? 'Item updated!' : 'Item created!');
        navigate('/items');
      })
      .catch(error => console.log('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button type="submit">{id ? 'Update' : 'Create'} Item</button>
    </form>
  );
}

export default ItemForm;