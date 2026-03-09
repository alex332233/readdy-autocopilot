
import FadeIn from '../../../components/base/FadeIn';
import { teamMembers } from '../../../mocks/team';

export default function TeamSection() {
  return (
    <section id="team" className="py-32 bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <FadeIn direction="up" delay={0}>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-[#cd9651]">醫師陣容</h2>
                <p className="text-lg text-gray-600 leading-relaxed">以仁心仁術,守護您與家人的健康</p>
              </FadeIn>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((doctor, index) => (
                <FadeIn key={index} direction="up" delay={index * 100} threshold={0.08}>
                  <div className="mb-5 overflow-hidden rounded-lg bg-gray-100">
                    <div className="w-full h-[320px]">
                      <img
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out hover:scale-110"
                        src={doctor.image}
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {doctor.name} <span className="font-normal text-gray-600">醫師</span>
                  </h3>
                  <p className="text-sm font-medium text-[#cd9651] mb-2">{doctor.title}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
