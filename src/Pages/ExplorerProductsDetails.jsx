import { useParams } from "react-router-dom";
import products from "../components/ExplorerProductsData";

const ExplorerProductsDetails = () => {
  const { id } = useParams();

  const product = products.filter((item) => item.id === Number(id));

  return (
    <div>
      <div>
        {product.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <br />
            {item.price}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorerProductsDetails;
