import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Features } from '@/app/components/Features';
import { UserGroups } from '@/app/components/UserGroups';
import { HowItWorks } from '@/app/components/HowItWorks';
import { AppShowcase } from '@/app/components/AppShowcase';
import { Testimonials } from '@/app/components/Testimonials';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <UserGroups />
      <HowItWorks />
      <AppShowcase />
      <Testimonials />
      <Footer />
    </div>
  );
}
