import ExplorerProductsCard from "../components/ExplorerProductsCard";
import products from "../components/ExplorerProductsData";

const ExplorerProducts = () => {
  return (
    <div>
      <div>
        <ExplorerProductsCard products={products} />
      </div>
    </div>
  );
};

export default ExplorerProducts;
