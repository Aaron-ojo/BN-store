import ProductCard from "./ProductCard";

const ProductList = ({ addToCart, isLoading, products }) => {
  if (isLoading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
