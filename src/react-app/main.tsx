import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../store";
import ItemCard from "./ItemCard";

const items = [
  { 
    id: "1", 
    name: "Premium Headphones", 
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99
  },
  { 
    id: "2", 
    name: "Smart Watch", 
    description: "Feature-rich smartwatch with health tracking",
    price: 249.99
  },
  { 
    id: "3", 
    name: "Wireless Earbuds", 
    description: "Compact earbuds with premium sound quality",
    price: 149.99
  },
  { 
    id: "4", 
    name: "Tablet Pro", 
    description: "Powerful tablet for work and entertainment",
    price: 599.99
  },
  { 
    id: "5", 
    name: "Gaming Mouse", 
    description: "High-precision gaming mouse with RGB lighting",
    price: 79.99
  },
  { 
    id: "6", 
    name: "Mechanical Keyboard", 
    description: "Premium mechanical keyboard with customizable switches",
    price: 129.99
  }
];

function App() {
  return (
    <div className="w-full flex-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("react-root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
