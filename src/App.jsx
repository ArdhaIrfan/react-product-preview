import { useState } from 'react'
import image from './assets/image-product-desktop.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <div className="left">
          <img src={image} alt="Product Image" />
        </div>
        <div className="right">
          <p className="product-type">PERFUME</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p className='description'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className="price">
            <p className="discounted">$149.99</p>
            <p className="initial">$169.99</p>
          </div>
          <button><span class="material-symbols-outlined">shopping_cart</span>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default App
