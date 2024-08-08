import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getItem, deleteItem } from '../services/api';

function ItemDetail() {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`Component mounted, fetching item with id: ${id}`);
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    try {
      console.log(`Fetching item with id: ${id}`);
      const response = await getItem(id);
      console.log('Item fetched successfully:', response.data);
      setItem(response.data);
    } catch (error) {
      console.error('Failed to fetch item:', error);
    }
  };

  const handleDelete = async () => {
    try {
      console.log(`Deleting item with id: ${id}`);
      await deleteItem(id);
      console.log('Item deleted successfully');
      navigate('/items');
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Item Detail Component</h2>
      <h2>{item.item_name}</h2>
      <p>Description: {item.description}</p>
      <p>Quantity: {item.quantity}</p>
      <Link to={`/items/${id}/edit`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ItemDetail;

