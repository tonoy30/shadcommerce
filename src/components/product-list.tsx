import { Product } from '@/types/product';
import { ProductCard } from './product-card';

type ProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
