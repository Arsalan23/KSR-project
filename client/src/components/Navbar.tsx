
import { Link, useLocation } from "wouter";
import { ShoppingCart, Search, User, Menu, Heart, Sun, Moon, LogOut, Settings, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/stores/useCartStore";
import { useWishlistStore } from "@/stores/useWishlistStore";
import { useUserStore } from "@/stores/useUserStore";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const cartItems = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);
  const { isLoggedIn, logout } = useUserStore();
  const [isDark, setIsDark] = useState(true);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Initialize theme based on HTML class
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/categories" },
    { name: "Brands", href: "/brands" },
    { name: "Bulk Order", href: "/bulk-order" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      {/* Top Red Bar */}
      <div className="h-1 w-full bg-primary"></div>
      
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] border-r border-border bg-card text-foreground">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a className="text-lg font-medium hover:text-primary transition-colors uppercase font-heading tracking-wider">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="relative flex items-center gap-1">
              <span className="text-3xl font-bold font-heading italic tracking-tighter text-foreground group-hover:text-foreground/80 transition-colors">
                KSR
              </span>
              <span className="text-3xl font-bold font-heading italic tracking-tighter text-primary">
                PERFORMANCE
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}>
                {link.name}
              </a>
            </Link>
          ))}
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center max-w-sm w-full relative">
          <Input 
            placeholder="SEARCH PARTS..." 
            className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary rounded-full h-10 pr-10 pl-4"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground hover:text-foreground">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Link href="/search">
            <a className="lg:hidden p-2 text-muted-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </a>
          </Link>
          
          <Link href="/wishlist">
            <a className="relative p-2 text-muted-foreground hover:text-primary transition-colors group">
              <Heart className="h-6 w-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-[10px] font-bold flex items-center justify-center rounded-full text-white ring-2 ring-background">
                  {wishlistItems.length}
                </span>
              )}
            </a>
          </Link>

          <Link href="/cart">
            <a className="relative p-2 text-muted-foreground hover:text-primary transition-colors group">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-[10px] font-bold flex items-center justify-center rounded-full text-white ring-2 ring-background">
                  {cartCount}
                </span>
              )}
            </a>
          </Link>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full hover:bg-muted text-muted-foreground hover:text-primary">
                <User className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              {isLoggedIn ? (
                <>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">My Account</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        user@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/account">
                      <div className="flex w-full items-center cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Profile Settings</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => logout()} className="text-red-500 focus:text-red-500 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/login">
                      <div className="flex w-full items-center cursor-pointer">
                        <LogIn className="mr-2 h-4 w-4" />
                        <span>Log in / Register</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
