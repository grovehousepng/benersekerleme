import { HeroSection } from '@/components/home/HeroSection';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { StorySection } from '@/components/home/StorySection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { ContactCTA } from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <CategoryGrid />
      <StorySection />
      <FeaturedProducts />
      <ContactCTA />
    </main>
  );
}
