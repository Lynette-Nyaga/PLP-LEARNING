// Sample product data (to be fetched from a database or API in a real application)
const productsData = [
    { id: 1, name: 'Product 1', price: 20, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 25, image: 'product3.jpg' },
  ];
  
  // Function to generate product cards
  function generateProductCards(products) {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = ''; // Clear existing content
  
    products.forEach(product => {
      // Create product card HTML
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
  
      // Append product card to products section
      productsSection.appendChild(card);
    });
  }
  
  // Function to simulate adding a product to cart (for demonstration)
  function addToCart(productId) {
    alert(`Product added to cart: ${productId}`);
  }
  
  // Load products on page load (can be replaced with actual API calls)
  window.addEventListener('load', () => {
    generateProductCards(productsData);
  });
  