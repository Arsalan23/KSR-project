
import { useWishlistStore } from "@/stores/useWishlistStore";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart } from "lucide-react";

export default function Wishlist() {
  const { items } = useWishlistStore();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold font-heading italic uppercase mb-8">
        My <span className="text-primary">Wishlist</span>
      </h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center bg-card border border-dashed border-border rounded-lg">
          <div className="bg-secondary/50 p-6 rounded-full mb-4">
            <Heart className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold mb-2">Your wishlist is empty</h3>
          <p className="text-muted-foreground mb-8 max-w-sm">
            Save items for later by clicking the heart icon on any product.
          </p>
          <Link href="/categories">
            <Button size="lg" className="font-bold uppercase tracking-wider">
              Start Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
