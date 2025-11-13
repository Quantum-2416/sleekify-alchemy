import { Smartphone, Laptop, Shirt, Zap, Home, ShoppingBasket } from "lucide-react";

const categories = [
  { name: "Mobiles", icon: Smartphone },
  { name: "Laptops", icon: Laptop },
  { name: "Fashion", icon: Shirt },
  { name: "Electronics", icon: Zap },
  { name: "Home", icon: Home },
  { name: "Grocery", icon: ShoppingBasket },
];

export const CategoryBar = () => {
  return (
    <div className="bg-card border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-6 overflow-x-auto py-3 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg hover:bg-muted transition-all group min-w-fit"
              >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
