
import { useState, useEffect } from 'react';
import { teamMembers } from '../../mocks/team';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import DoctorCardV5 from './components/DoctorCardV5';

export default function TeamPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Navbar scrolled={scrolled} />
      <HeroSection />

      {/* 醫師團隊列表 */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {teamMembers.map((doctor, index) => (
              <DoctorCardV5
                key={doctor.id}
                name={doctor.name}
                title={doctor.title}
                image={doctor.image}
                education={doctor.education}
                experience={doctor.experience}
                specialties={doctor.specialties}
                specialTreatments={doctor.specialTreatments}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
