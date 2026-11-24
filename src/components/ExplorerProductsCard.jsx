import { Link } from "react-router-dom";

const ExplorerProductsCard = ({ products }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <div>
            {item.name} <br />
            {item.price} <br />
            <Link to={`/products/${item.id}`}>View Product</Link>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorerProductsCard;
