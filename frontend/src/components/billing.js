import React, { useState } from 'react';
import '../styles/billing.css';

const Billing = () => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItem = () => {
    const item_id = document.getElementById('item_id').value;
    const name = document.getElementById('name').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const units = document.getElementById('units').value;
    const rate = parseFloat(document.getElementById('rate').value);

    if (!item_id || !name || isNaN(quantity) || !units || isNaN(rate)) {
      alert("All fields are required!");
      return;
    }

    const amount = quantity * rate;
    const newItem = { item_id, name, quantity, units, rate, amount };

    setItems([...items, newItem]);
    setTotalAmount(totalAmount + amount);

    // Clear input fields
    document.getElementById('item_id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('units').value = '';
    document.getElementById('rate').value = '';
  };

  const deleteRow = (index) => {
    const amountToRemove = items[index].amount;
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    setTotalAmount(totalAmount - amountToRemove);
  };

  const submitBill = () => {
    if (items.length === 0) {
      alert("No items in the bill to submit.");
      return;
    }
    alert("Bill submitted successfully!");
    console.log("Bill Data:", items);

    // Reset
    setItems([]);
    setTotalAmount(0);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-links">
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="#tasks">Notifications</a></li>
          <li><a href="#reports">About</a></li>
        </ul>
      </nav>

      <h1>Billing System</h1>

      {/* Table Section */}
      <div className="table-container">
        <table id="billTable">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Units</th>
              <th>Rate</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="billBody">
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.item_id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.units}</td>
                <td>{item.rate}</td>
                <td>{item.amount.toFixed(2)}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteRow(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form Section */}
      <div className="form-container">
        <input type="number" id="item_id" placeholder="Item ID" required />
        <input type="text" id="name" placeholder="Name" required />
        <input type="number" id="quantity" placeholder="Quantity" required />
        <input type="text" id="units" placeholder="Units" required />
        <input type="number" id="rate" placeholder="Rate" required />
        <button className="button" onClick={addItem}>Add Item</button>
      </div>

      {/* Total Amount */}
      <div id="totalAmount">
        Total Amount: <span id="total">{totalAmount.toFixed(2)}</span>
      </div>

      {/* Submit Section */}
      <div className="submit-section">
        <button className="button submit-button" onClick={submitBill}>Submit Bill</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Project Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Billing;