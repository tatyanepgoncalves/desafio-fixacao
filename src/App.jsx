import waffleDesktop from "./assets/image-waffle-desktop.jpg";
import cremeBruleeDesktop from "./assets/image-creme-brulee-desktop.jpg";
import macaronDesktop from "./assets/image-macaron-desktop.jpg";
import tiramisuDesktop from "./assets/image-tiramisu-desktop.jpg";
import baklavaDesktop from "./assets/image-baklava-desktop.jpg";
import cakeDesktop from "./assets/image-cake-desktop.jpg";
import meringueDesktop from "./assets/image-meringue-desktop.jpg";
import brownieDesktop from "./assets/image-brownie-desktop.jpg";

import "./styles/global.scss";
import "./styles/cart.scss";

const products = [
  {
    id: 1,
    image: waffleDesktop,
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    id: 2,
    image: cremeBruleeDesktop,
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    id: 3,
    image: macaronDesktop,
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    id: 4,
    image: tiramisuDesktop,
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    id: 5,
    image: baklavaDesktop,
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    id: 6,
    image: meringueDesktop,
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    id: 7,
    image: cakeDesktop,
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    id: 8,
    image: brownieDesktop,
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
];

export default function App() {
  return (
    <main>
      <div className="container">
        <h1>Doces</h1>

        <article className="products">
          {products.map((product) => (
            <div key={product.id} className="product-box">
              <img src={product.image} alt={product.name} />
              <div className="product-text">
                <span>{product.category}</span>
                <h2>{product.name}</h2>
                <p>R$ {product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </main>
  );
}
