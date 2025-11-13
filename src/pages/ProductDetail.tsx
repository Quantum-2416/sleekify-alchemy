import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, ShoppingBag, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Product } from "@/components/ProductCard";

// In a real app, this would fetch from an API
const getProduct = (id: string): Product => ({
  id,
  name: `Premium Product ${id.replace('p', '')}`,
  price: 500 + parseInt(id.replace('p', '')) * 20,
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
  description: `This is a high-quality premium product with excellent features. Perfect for everyday use with modern design and durable construction. Comes with warranty and satisfaction guarantee.`,
});

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!id) {
    navigate("/");
    return null;
  }

  const product = getProduct(id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <Card className="p-8 gradient-card">
            <div className="aspect-square bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
            </div>
          </Card>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-4xl font-bold text-primary mb-4">
                ₹{product.price.toLocaleString()}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Card className="p-6 bg-gradient-to-br from-muted/50 to-background">
              <h3 className="font-semibold mb-3">Product Highlights</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Premium quality materials and construction
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Modern design with attention to detail
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Warranty included with satisfaction guarantee
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Fast and secure delivery
                </li>
              </ul>
            </Card>

            <div className="flex gap-3">
              <Button
                variant="gradient"
                size="lg"
                className="flex-1"
                onClick={handleBuyNow}
              >
                <ShoppingBag className="h-5 w-5" />
                Buy Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
