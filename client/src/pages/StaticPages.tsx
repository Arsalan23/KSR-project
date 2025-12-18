
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
       <h1 className="text-4xl font-bold font-heading italic uppercase text-white mb-8">
        Contact <span className="text-primary">Us</span>
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-muted-foreground mb-8 text-lg">
            Have a question about fitment? Need help with a custom build? Our team of performance experts is ready to assist you.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold uppercase mb-2">Headquarters</h3>
              <p className="text-muted-foreground">123 Performance Way<br/>Speedway City, CA 90210<br/>United States</p>
            </div>
            <div>
              <h3 className="text-white font-bold uppercase mb-2">Contact Info</h3>
              <p className="text-muted-foreground">Phone: +1 (800) 555-TURBO</p>
              <p className="text-muted-foreground">Email: sales@ksrperformance.com</p>
            </div>
            <div>
               <h3 className="text-white font-bold uppercase mb-2">Hours</h3>
               <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM PST</p>
               <p className="text-muted-foreground">Sat: 10:00 AM - 4:00 PM PST</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                <label className="text-sm font-medium text-white">First Name</label>
                <Input className="bg-black/20 border-border rounded-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Last Name</label>
                <Input className="bg-black/20 border-border rounded-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Email</label>
              <Input type="email" className="bg-black/20 border-border rounded-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Message</label>
              <Textarea className="bg-black/20 border-border rounded-none min-h-[150px]" />
            </div>
            <Button size="lg" className="w-full rounded-none bg-primary text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold font-heading italic uppercase text-white mb-8">
        About <span className="text-primary">KSR</span>
      </h1>
      <div className="prose prose-invert max-w-4xl">
        <p className="text-xl text-white font-medium leading-relaxed">
          KSR Performance was founded with one simple mission: to provide the highest quality forced induction components to the automotive aftermarket.
        </p>
        <p>
          Born from a passion for motorsport and precision engineering, we understand that every horsepower counts. Whether you are building a 1000HP drag car or a reliable track day weapon, our components are tested to the limit to ensure they perform when it matters most.
        </p>
        <p>
          We partner with industry leaders like Garrett, BorgWarner, and HKS to bring you a curated selection of the best parts available. Our in-house team of engineers also develops our own line of KSR cooling and braking solutions, filling gaps in the market with innovative designs.
        </p>
      </div>
    </div>
  );
}
