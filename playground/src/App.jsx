// import { useState } from "react";
// import Home from "./components/home.jsx";
// import Play from "./components/play.jsx";

// import Sidebar from "./components/Sidebar.jsx";
// import SearchTerm from "./components/SearchTerm";
// import Header from "./components/Header";
// import Products from "./components/Products";
// import Notifications from "./components/Notifications";
// import SignupForm from "./components/SignupForm";
// import TodoApp from "./Pages/TodoApp";
// import Shop from "./Pages/Shop";
// import SearchProduct from "./components/SearchProduct";
// import ProfileSetting from "./Pages/ProfileSetting";
// import Debounce from "./components/Debounce";
// import Pagination from "./components/Pagination";
// import SortableProductList from "./components/SortableProductList";
// import ProductPage from "./Pages/ProductPage";
// import RevisionShop from "./Pages/RevisionShop";
// import RevisionTodo from "./Pages/RevisionTodo";
import NotesApp from "./Pages/NotesApp";

function App() {
  // const [cart, setCart] = useState([]);

  // const handleAddToCart = (productId) => {
  //   if (cart.includes(productId)) {
  //     return;
  //   } else {
  //     setCart([...cart, productId]);
  //   }
  // };

  return (
    <>
      <div>
        {/* <Header cart={cart} />
        <Products onAddToCart={handleAddToCart} cart={cart} /> */}
        {/* <Notifications /> */}
        {/* <SignupForm /> */}
        {/* <TodoApp /> */}
        {/* <Shop /> */}
        {/* <SearchProduct /> */}
        {/* <ProfileSetting /> */}
        {/* <Debounce /> */}
        {/* <Pagination /> */}
        {/* <SortableProductList /> */}
        {/* <ProductPage /> */}
        {/* <RevisionShop /> */}
        {/* <RevisionTodo /> */}
        <NotesApp />
      </div>
    </>
  );
}

export default App;
