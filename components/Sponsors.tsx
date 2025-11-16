
import React from 'react';

const sponsorsList = [
  { name: 'BW Comunicação', logo: '/assets/images/sponsors/01_BW.jpg' },
  { name: 'Ascia Mitsubishi', logo: '/assets/images/sponsors/02_AsciaMit.jpeg' },
  { name: 'Ascia Fiat', logo: '/assets/images/sponsors/03_AsciaFiat.jpeg' },
  { name: '93 FM', logo: '/assets/images/sponsors/04_93FM.jpg' },
  { name: 'Daniel Ludwig', logo: '/assets/images/sponsors/05_DanielLudwig.png' },
  { name: 'Flávia Vallezzi Arquitetura', logo: '/assets/images/sponsors/06_Flavia.jpg' },
  { name: 'WH Comunicação Visual', logo: '/assets/images/sponsors/07_WH.jpg' },
  { name: 'Tech Print', logo: '/assets/images/sponsors/08_TechPrint.jpg' },
  { name: 'Gardenal 4x4', logo: '/assets/images/sponsors/09_Gardenal.jpeg' },
  { name: 'Dom José Cervejaria', logo: '/assets/images/sponsors/11_DomJose.jpg' },
  { name: 'Unifasipe', logo: '/assets/images/sponsors/10_UniFasipe.jpg' },
  { name: 'Vie Hotel', logo: '/assets/images/sponsors/12_VieHotel.jpg' },
  { name: 'Dunorte Imóveis', logo: '/assets/images/sponsors/13_DUNORTE_LOGO.jpg' },
  { name: 'Hits Prime FM', logo: '/assets/images/sponsors/15_Prime.jpg' },
  { name: 'Sinop Prefeitura', logo: '/assets/images/sponsors/18_Sinop.jpg' },
  { name: 'Meski Sports', logo: '/assets/images/sponsors/17_Meski.jpg' },
  { name: 'Calangos Beer', logo: '/assets/images/sponsors/16_Calangos.jpg' },
];

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-white mb-10">Nossos Patrocinadores</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sponsorsList.map((sponsor, index) => (
            <div key={index} className="bg-white p-4 rounded-lg flex justify-center items-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-orange-500/30">
              <img src={sponsor.logo} alt={sponsor.name} className="max-h-24 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
