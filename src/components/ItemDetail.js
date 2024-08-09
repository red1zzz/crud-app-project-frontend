import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemDetail() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/items/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched item:', data);
        setItem(data);
      })
      .catch(error => console.log('Error fetching item:', error));
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{item.item_name}</h2>
      <p>Description: {item.description}</p>
      <p>Quantity: {item.quantity}</p>
      <Link to={`/items/${id}/edit`}>Edit</Link>
      <br />
      <Link to="/items">Back to List</Link>
    </div>
  );
}

export default ItemDetail;