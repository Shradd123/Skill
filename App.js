import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 't shirts', price: 250, img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20231017%2Foriginal%2Fpngtree-isolated-blank-t-shirt-front-png-image_13326528.png&tbnid=kFbcYz6xnG3v6M&vet=12ahUKEwiQgPjfirCEAxV47qACHQMbDUkQMygQegQIARB7..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fisolated-blank-t-shirt-front_13326528.html&docid=6dg_bUtyDB2Q2M&w=1200&h=1200&q=tshirt&hl=en&ved=2ahUKEwiQgPjfirCEAxV47qACHQMbDUkQMygQegQIARB7', category: 'Category 1', rating: 4 },
    { id: 2, name: 'dress', price: 500, img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F14%2F61%2F9b%2F14619bc0cc384cfe6ec75a43e7d431b4.jpg&tbnid=hI9GmZazv4_qKM&vet=12ahUKEwjv4K2Wi7CEAxWevmMGHVE8AMoQMygDegQIARB3..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F547468898456828223%2F&docid=1nFIlj0F5SlHyM&w=608&h=782&q=dress%20pinterest&hl=en&ved=2ahUKEwjv4K2Wi7CEAxWevmMGHVE8AMoQMygDegQIARB3', category: 'Category 2', rating: 3 },
    { id: 3, name: 'kurta', price: 350, img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F236x%2F43%2F6c%2Fac%2F436cacadcd0873d407a97bb511414ef9.jpg&tbnid=yM2eWtExfVj7_M&vet=12ahUKEwjnj9isi7CEAxV_rWMGHR88AnQQMygRegUIARCTAQ..i&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fberrygaurav%2Fkurta%2F&docid=uRg2NomlW2dc7M&w=236&h=419&q=kurta%20pinterest&hl=en&ved=2ahUKEwjnj9isi7CEAxV_rWMGHR88AnQQMygRegUIARCTAQ', category: 'Category 3', rating: 5 },
    
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart.filter(item => item.quantity !== 0));
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">Shopping Cart</div>
          <input type="text" placeholder="Search..." />
          <ul>
            <li>All</li>
            <li>Category 1</li>
            <li>Category 2</li>
            {/* Add more categories here */}
          </ul>
        </nav>
      </header>
      <main>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Rs{product.price}</p>
              <div>Rating: {product.rating}</div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;