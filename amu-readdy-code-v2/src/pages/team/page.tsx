import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import DoctorCardV5 from './components/DoctorCardV5';
import type { TeamPageContent } from '../../sanity/types';

export default function TeamPage() {
  const [scrolled, setScrolled] = useState(false);
  const content = useLoaderData() as TeamPageContent;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Navbar scrolled={scrolled} />
      <HeroSection title={content.heroTitle} subtitle={content.heroSubtitle} />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-6">
            {content.doctors.map((doctor) => (
              <DoctorCardV5
                key={doctor.doctorId}
                doctorId={doctor.doctorId}
                name={doctor.name}
                title={doctor.title}
                image={doctor.image}
                bio={doctor.bio}
                education={doctor.education}
                experience={doctor.experience}
                specialtyGroups={doctor.specialtyGroups}
                specialTreatments={doctor.specialTreatments}
                schedule={doctor.schedule}
                scheduleNote={doctor.scheduleNote}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
