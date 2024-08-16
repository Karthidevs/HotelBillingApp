import { useState } from "react";
import "./App.css";
import { Categories } from "./Aside/Categories";
import { Header } from "./Header/Header";
import { Products } from "./Products/Products";
import { Cart } from "./Cart/Cart";

function App() {
  const [curItem, setCurItem] = useState();

  const handleCategories = (item) => {
    setCurItem(item);
  };

  return (
    <div className="App">
      <Header />
      {/* three layouts  */}
      <main className="flex">
        <Categories addCategory={handleCategories} />
        <Products CategoriesItem={curItem} />
        <Cart />
      </main>
    </div>
  );
}

export default App;
