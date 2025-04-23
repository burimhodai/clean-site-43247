```jsx
import React from 'react';

const App = () => {
  const styles = {
    appContainer: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5',
    },
    header: {
      backgroundColor: '#1D4ED8',
      color: 'white',
      padding: '20px',
      marginBottom: '20px',
    },
    productList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    productCard: {
      width: '300px',
      margin: '20px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    productImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '10px',
    },
    productTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#333',
    },
    productPrice: {
      fontSize: '1rem',
      color: '#9333EA',
      marginBottom: '10px',
    },
    button: {
      backgroundColor: '#10B981',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    footer: {
      marginTop: '20px',
      padding: '10px',
      backgroundColor: '#1D4ED8',
      color: 'white',
    },
  };

  const products = [
    { id: 1, title: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Product 3', price: 79.99, image: 'https://via.placeholder.com/300x200' },
  ];

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1>Ecommerce Website</h1>
      </header>
      <section style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.title} style={styles.productImage} />
            <h2 style={styles.productTitle}>{product.title}</h2>
            <p style={styles.productPrice}>${product.price}</p>
            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </section>
      <footer style={styles.footer}>
        <p>&copy; 2023 Ecommerce Website</p>
      </footer>
    </div>
  );
};

export default App;
```