import React, { useState } from 'react';

function Winners() {
  const [data, setData] = useState([
    { id: 1, itemName: 'Dell G16 Gaming Laptop', winnerName: 'yaswanth ajay', winnerEmail: 'ajay@gmail.com' },
    { id: 2, itemName: 'Collectible Coins', winnerName: 'gnana sai', winnerEmail: 'gnani@gmail.com' },
    { id: 3, itemName: 'Vintage Watches', winnerName: 'karthik mani', winnerEmail: 'karthik@gmail.com' },
    { id: 1, itemName: 'Sitar', winnerName: 'tharun', winnerEmail: 'tharun@gmail.com' },
    { id: 2, itemName: 'Idol', winnerName: 'lavanya', winnerEmail: 'lavanya@gmail.com' },
    { id: 3, itemName: 'Historical Weapons', winnerName: 'Abhiram', winnerEmail: 'abi@gmail.com' },
  ]);

  const [newItem, setNewItem] = useState({ itemName: '', winnerName: '', winnerEmail: '' });

  const handleAddItem = () => {
    // Generate a unique ID for the new item
    const newId = data.length + 1;
    
    // Create a new item object with the provided details
    const newItemWithId = { id: newId, ...newItem };
    
    // Update the data state with the new item
    setData([...data, newItemWithId]);

    // Reset the newItem state for the next input
    setNewItem({ itemName: '', winnerName: '', winnerEmail: '' });
  };

  const styles = `
    .table-container {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      padding: 10px;
      border: 1px solid #dcdcdc;
    }

    th {
      background-color: #3498db;
      color: white;
    }

    .input-form {
      text-align: center;
      margin-top: 20px;
    }

    input[type="text"] {
      padding: 5px;
      font-size: 16px;
      border: 1px solid #3498db;
      border-radius: 5px;
      margin: 5px;
    }

    button {
      background-color: #3498db;
      color: white;
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `;

  return (
    <div className="table-container">
      <style>{styles}</style>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Item Name</th>
            <th>Winner Name</th>
            <th>Winner Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.itemName}</td>
              <td>{item.winnerName}</td>
              <td>{item.winnerEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
}

export default Winners;
