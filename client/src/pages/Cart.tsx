
import { useCartStore } from "@/stores/useCartStore";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowRight, CreditCard } from "lucide-react";
import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal } = useCartStore();
  
  const total = subtotal();
  const tax = total * 0.08; // Mock tax
  const shipping = total > 1000 ? 0 : 50; // Mock shipping logic

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold font-heading italic uppercase text-white mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added any parts to your build yet.</p>
        <Link href="/categories">
          <Button size="lg" className="rounded-none bg-primary text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold font-heading italic uppercase text-white mb-8">
        Shopping <span className="text-primary">Cart</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 bg-card border border-border group hover:border-primary/50 transition-colors">
              <div className="w-24 h-24 bg-white/5 border border-border flex-shrink-0 p-2">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
              </div>
              
              <div className="flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">SKU: {item.sku}</p>
                  </div>
                  <div className="text-lg font-bold font-heading text-primary">
                    ${(item.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </div>
                </div>

                <div className="flex justify-between items-end mt-4">
                  <div className="flex items-center border border-border bg-black">
                    <button 
                      className="p-1 hover:text-primary transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center font-mono text-sm">{item.quantity}</span>
                    <button 
                      className="p-1 hover:text-primary transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <button 
                    className="text-sm text-muted-foreground hover:text-red-500 transition-colors flex items-center gap-1"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border p-6 sticky top-24">
            <h3 className="text-xl font-bold font-heading uppercase text-white mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="text-white font-mono">${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping Estimate</span>
                <span className="text-white font-mono">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax (8%)</span>
                <span className="text-white font-mono">${tax.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <Separator className="bg-border mb-6" />

            <div className="flex justify-between items-end mb-8">
              <span className="text-lg font-bold text-white uppercase">Total</span>
              <span className="text-3xl font-bold font-heading text-primary">
                ${(total + tax + shipping).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </div>

            <Link href="/checkout">
              <Button size="lg" className="w-full rounded-none bg-primary text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider h-14 text-lg">
                Checkout <CreditCard className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
             <div className="mt-4 flex items-center justify-center gap-2">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-6 opacity-50 grayscale" alt="Visa"/>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-6 opacity-50 grayscale" alt="Mastercard"/>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
