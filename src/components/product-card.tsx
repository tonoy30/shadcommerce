import Link from 'next/link';
import Image from 'next/image';

import { Card, CardContent, CardFooter } from './ui/card';
import { Product } from '@/types/product';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href="/"
      className="ring-primary rounded-lg outline-0 transition duration-300 hover:ring-2 focus:ring-2"
    >
      <Card className="rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="bg-foreground/5 dark:bg-background relative aspect-square rounded-lg">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="aspect-square rounded-lg object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start">
          <div>
            <p className="text-lg font-semibold">{product.name}</p>
            <p className="text-primary/80 text-sm">{product.category}</p>
          </div>
          <div className="flex items-center justify-between">
            {product.price}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
