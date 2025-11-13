import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  tag?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in h-full hover:-translate-y-1">
        <CardContent className="p-0">
          <div className="aspect-square bg-gradient-to-br from-muted to-background flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-3 p-4">
          <div className="w-full">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{product.tag || `From ₹${product.price.toLocaleString()}`}</p>
          </div>
          <div className="flex gap-2 w-full">
            <Button variant="default" size="sm" className="flex-1">
              <Eye className="h-4 w-4" />
              View
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
              Cart
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
