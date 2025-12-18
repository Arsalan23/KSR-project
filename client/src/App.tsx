
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";

// Pages
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import Product from "@/pages/Product";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import BulkOrder from "@/pages/BulkOrder";
import OrderTracking from "@/pages/OrderTracking";
import Blog from "@/pages/Blog";
import { Contact, About } from "@/pages/StaticPages";
import Login from "@/pages/Login";
import Wishlist from "@/pages/Wishlist";
import Brands from "@/pages/Brands";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Categories */}
        <Route path="/categories" component={Category} />
        <Route path="/category/:slug" component={Category} />
        
        {/* Products */}
        <Route path="/product/:slug" component={Product} />
        
        {/* Cart & Checkout */}
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        
        {/* Features */}
        <Route path="/bulk-order" component={BulkOrder} />
        <Route path="/order-tracking" component={OrderTracking} />
        <Route path="/order/:orderId" component={OrderTracking} />
        
        {/* Content */}
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        
        {/* User */}
        <Route path="/login" component={Login} />
        <Route path="/account" component={Login} /> {/* Redirect to login for now */}
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/brands" component={Brands} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
