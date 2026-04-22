import { useLoaderData } from 'react-router-dom';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedOverviewSection from './components/FeaturedOverviewSection';
import FeaturedTreatmentCard from '../treatments/components/FeaturedTreatmentCard';
import type { FeaturedTreatmentPageContent } from '../../sanity/types';
import { getFeaturedTreatmentsPageDataAttribute } from '../../sanity/dataAttributes';

export default function FeaturedTreatmentsPage() {
  const featuredPage = useLoaderData() as FeaturedTreatmentPageContent;

  return (
    <div className="min-h-screen bg-[#faf6f0]">
      <Navbar scrolled={false} />
      <HeroSection title={featuredPage.heroTitle} description={featuredPage.heroDescription} />
      <FeaturedOverviewSection cards={featuredPage.cards} />

      <section className="py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredPage.cards.map((category, index) => (
              <FeaturedTreatmentCard
                key={index}
                category={{
                  title: category.title,
                  englishTitle: category.englishTitle,
                  icon: category.icon,
                  color: category.color,
                  treatments: [
                    {
                      title: category.treatmentTitle,
                      description: category.description,
                      tags: category.tags,
                    },
                  ],
                }}
                hasDetail={Boolean(category.detailSlug)}
                detailPath={category.detailSlug ? `/featured-treatments/${category.detailSlug}` : undefined}
                iconDataAttribute={getFeaturedTreatmentsPageDataAttribute(
                  category._key ? `cards[_key=="${category._key}"].icon` : `cards[${index}].icon`,
                )}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
