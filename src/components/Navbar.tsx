import { Search, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useCart } from "@/contexts/CartContext";

export const Navbar = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const isHome = location.pathname === "/";

  return (
    <header className={`sticky top-0 z-50 ${isHome ? 'gradient-primary' : 'bg-card border-b'} shadow-md`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex-shrink-0">
            <h1 className={`text-2xl font-bold ${isHome ? 'text-white' : 'text-primary'} transition-colors`}>
              NeoKart
            </h1>
          </Link>

          {isHome && (
            <div className="hidden md:flex flex-1 max-w-2xl relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for products, brands and more"
                className="w-full pl-10 bg-white border-none shadow-sm"
              />
            </div>
          )}

          <nav className="flex items-center gap-3">
            <Link to="/profile">
              <Button variant={isHome ? "ghost" : "outline"} size="sm" className={isHome ? "text-white hover:bg-white/20" : ""}>
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant={isHome ? "ghost" : "cart"} size="sm" className={`relative ${isHome ? "text-white hover:bg-white/20" : ""}`}>
                <ShoppingCart className="h-4 w-4" />
                <span className="hidden sm:inline">Cart</span>
                {cartCount > 0 && (
                  <span className={`absolute -top-1 -right-1 ${isHome ? 'bg-white text-primary' : 'bg-secondary text-white'} text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-sm`}>
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
