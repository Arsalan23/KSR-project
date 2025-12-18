
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="flex items-center gap-2">
              <span className="text-2xl font-bold font-heading italic tracking-tighter text-white">
                KSR
              </span>
              <span className="text-2xl font-bold font-heading italic tracking-tighter text-primary">
                PERFORMANCE
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Your premier destination for high-performance automotive parts. Specialized in turbocharging, cooling, and racing components for serious builds.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-secondary p-2 rounded hover:bg-primary transition-colors text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-secondary p-2 rounded hover:bg-primary transition-colors text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-secondary p-2 rounded hover:bg-primary transition-colors text-white">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="bg-secondary p-2 rounded hover:bg-primary transition-colors text-white">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-lg font-heading">Shop</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/categories"><a className="hover:text-primary transition-colors">All Categories</a></Link></li>
              <li><Link href="/category/turbochargers"><a className="hover:text-primary transition-colors">Turbochargers</a></Link></li>
              <li><Link href="/category/cooling"><a className="hover:text-primary transition-colors">Cooling Systems</a></Link></li>
              <li><Link href="/category/brakes"><a className="hover:text-primary transition-colors">Brake Kits</a></Link></li>
              <li><Link href="/brands"><a className="hover:text-primary transition-colors">Brands</a></Link></li>
              <li><Link href="/bulk-order"><a className="hover:text-primary transition-colors">Bulk Order</a></Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-lg font-heading">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/order-tracking"><a className="hover:text-primary transition-colors">Track Order</a></Link></li>
              <li><Link href="/returns"><a className="hover:text-primary transition-colors">Returns & Exchanges</a></Link></li>
              <li><Link href="/shipping"><a className="hover:text-primary transition-colors">Shipping Info</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact Us</a></Link></li>
              <li><Link href="/faq"><a className="hover:text-primary transition-colors">FAQ</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-lg font-heading">Contact</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>123 Performance Way,<br />Speedway City, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+1 (800) 555-TURBO</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>sales@ksrperformance.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2026 KSR Performance. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy"><a className="hover:text-white transition-colors">Privacy Policy</a></Link>
            <Link href="/terms"><a className="hover:text-white transition-colors">Terms of Service</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
