
import { useState } from "react";
import { useParams } from "wouter";
import { products, categories, brands } from "@/data/mockData";
import ProductCard from "@/components/ProductCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function Category() {
  const params = useParams();
  const categorySlug = params.slug;
  
  // Filter state
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  
  const categoryName = categorySlug 
    ? categories.find(c => c.slug === categorySlug)?.name || 'All Products'
    : 'All Products';

  // Filter Logic
  const filteredProducts = products.filter(product => {
    // Category Filter
    if (categorySlug && product.category !== categorySlug) return false;
    
    // Price Filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    
    // Brand Filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    
    // Stock Filter
    if (inStockOnly && product.stock <= 0) return false;
    
    return true;
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-heading italic uppercase text-white mb-2">
          {categoryName}
        </h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-primary">{categoryName}</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
          <div className="bg-card border border-border p-4 space-y-6">
            <h3 className="font-bold font-heading uppercase tracking-wider text-white border-b border-border pb-2">
              Filters
            </h3>

            {/* Price Filter */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase text-muted-foreground">Price Range</h4>
              <Slider
                defaultValue={[0, 5000]}
                max={5000}
                step={100}
                value={priceRange}
                onValueChange={setPriceRange}
                className="my-4"
              />
              <div className="flex items-center justify-between text-sm text-white font-mono">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}+</span>
              </div>
            </div>

            <Separator className="bg-border" />

            {/* Brand Filter */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase text-muted-foreground">Brands</h4>
              <div className="space-y-2">
                {brands.map(brand => (
                  <div key={brand.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`brand-${brand.id}`} 
                      checked={selectedBrands.includes(brand.name)}
                      onCheckedChange={() => toggleBrand(brand.name)}
                      className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label 
                      htmlFor={`brand-${brand.id}`} 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                    >
                      {brand.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="bg-border" />

            {/* Availability */}
             <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase text-muted-foreground">Availability</h4>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="in-stock" 
                  checked={inStockOnly}
                  onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
                  className="border-muted-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label 
                  htmlFor="in-stock" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                >
                  In Stock Only
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 bg-secondary/50 p-2 border border-border">
            <span className="text-sm text-muted-foreground ml-2">
              Showing <span className="text-white font-bold">{filteredProducts.length}</span> results
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px] bg-background border-border rounded-none h-8">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Popularity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-border">
              <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
