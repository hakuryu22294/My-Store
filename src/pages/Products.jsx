import { Filter, PaginnationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  console.log(meta);
  return { products, meta };
};
const Products = () => {
  return (
    <>
      <Filter />
      <ProductsContainer />
      <PaginnationContainer />
    </>
  );
};

export default Products;
