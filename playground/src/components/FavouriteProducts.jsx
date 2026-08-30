// import React from 'react'

const FavouriteProducts = ({ favouriteList }) => {
  return (
    <div>
      <div>
        {favouriteList.map((item) => (
          <div key={item.id}>
            {item.name} {item.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteProducts;
