import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyJoin from '@/components/WhyJoin';
import EarningsCalculator from '@/components/EarningsCalculator';
import HowItWorks from '@/components/HowItWorks';
import ToolsWeProvide from '@/components/ToolsWeProvide';
import Testimonials from '@/components/Testimonials';
import JoinCTA from '@/components/JoinCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyJoin />
      <EarningsCalculator />
      <HowItWorks />
      <ToolsWeProvide />
      <Testimonials />
      <JoinCTA />
      <Footer />
    </main>
  );
}
