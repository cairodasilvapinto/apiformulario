import React from "react";
import { Link } from "react-router-dom";

const CarSellerStore = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const addToCart = (car) => {
    setCart([...cart, car]);
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const cars = [
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      price: 25000,
      image: "https://s2-autoesporte.glbimg.com/JR5DhkIElu7jRsAAvhvr2E7y_Ro=/0x0:620x413/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/6/z/uiNmhfTEqUPBqL6xszhA/2018-06-14-camryfrtente.jpg"
    },
    {
      id: 2,
      brand: "Honda",
      model: "Civic",
      price: 22000,
      image: "https://www.webmotors.com.br/wp-content/uploads/2023/01/03134204/honda_civic_si_46.webp"
    },
    {
      id: 3,
      brand: "Ford",
      model: "Mustang",
      price: 40000,
      image: "https://i0.statig.com.br/bancodeimagens/76/6s/rm/766srmqvtnxqpzulup8z3tjpj.jpg",
    },
  ];

  return (
    <div className="car-seller-store">
      <h1>Welcome to Car Seller Store</h1>
      <h2>Available Cars:</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <Link to={`/car/${car.id}`}>
              <img className="car-image" src={car.image} alt={`${car.brand} ${car.model}`} />
            </Link>
            <h3>{car.brand} {car.model}</h3>
            <p>Price: ${car.price}</p>
            <button onClick={() => addToCart(car)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <div className={`cart ${isCartOpen ? "open" : ""}`}>
        <button onClick={toggleCart}>
          Carrinho ({cart.length})
        </button>
        {isCartOpen && (
          <ul>
            {cart.map((car, index) => (
              <li key={index}>
                <h3>{car.brand} {car.model}</h3>
                <p>Preço: ${car.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CarSellerStore;
