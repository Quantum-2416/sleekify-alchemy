import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();

  const handleRemove = (id: string, name: string) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    toast.success("Order placed successfully! 🎉");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto text-center p-8 animate-fade-in">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some products to get started!</p>
            <Link to="/">
              <Button variant="gradient" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 animate-fade-in">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <Card key={item.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-muted to-background rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold text-primary">
                          ₹{item.price.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive"
                            onClick={() => handleRemove(item.id, item.name)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-fade-in">
              <CardHeader>
                <CardTitle>Price Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Price ({cartItems.length} items)</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery Charges</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg font-bold">
                  <span>Total Amount</span>
                  <span className="text-primary">₹{totalPrice.toLocaleString()}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
