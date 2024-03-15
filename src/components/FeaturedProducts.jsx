import ProductstGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured Products" />
      <ProductstGrid />
    </div>
  );
};

export default FeaturedProducts;
