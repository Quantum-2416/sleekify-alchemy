import { Navbar } from "@/components/Navbar";
import { CategoryBar } from "@/components/CategoryBar";
import { ProductCard, Product } from "@/components/ProductCard";
import { Sparkles } from "lucide-react";

// Sample product data
const sampleProducts: Product[] = Array.from({ length: 30 }, (_, i) => ({
  id: `p${i + 1}`,
  name: `Premium Product ${i + 1}`,
  price: 500 + i * 20,
  tag: `From ₹${(500 + i * 20).toLocaleString()}`,
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  description: `High-quality item number ${i + 1} with excellent features and great value`,
}));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CategoryBar />

      <main className="container mx-auto px-4 py-8">
        <section className="gradient-hero rounded-2xl p-8 md:p-12 mb-12 shadow-lg animate-fade-in">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Exclusive Deals</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Big Deals. Big Savings.
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover trending items with unbeatable prices. Shop the latest products across all categories.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Latest Picks</h2>
            <p className="text-muted-foreground">{sampleProducts.length} products</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {sampleProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
