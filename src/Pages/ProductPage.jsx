import { useState } from "react";
import ProductListRating from "../components/ProductListRating";
import FavouriteProducts from "../components/FavouriteProducts";

const products_initial = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Headphones", price: 3000 },
  { id: 3, name: "Keyboard", price: 2000 },
  { id: 4, name: "Mouse", price: 1000 },
];

const ProductPage = () => {
  const [products, setProducts] = useState(products_initial);
  const [favourites, setFavourites] = useState([]);

  const updateRating = (id, newRating) => {
    setProducts(
      products.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            rating: newRating,
          };
        }

        return item;
      }),
    );
  };

  const addToFavourites = (product) => {
    const exists = favourites.some((p) => p.id === product.id);
    if (!exists) {
      setFavourites([...favourites, product]);
    }
  };

  return (
    <div>
      <div>
        <ProductListRating
          productList={products}
          toUpdateRating={updateRating}
          toAddToFavourites={addToFavourites}
        />
      </div>
      <div>
        <p>Favourite Products</p>
        <FavouriteProducts favouriteList={favourites} />
      </div>
    </div>
  );
};

export default ProductPage;
