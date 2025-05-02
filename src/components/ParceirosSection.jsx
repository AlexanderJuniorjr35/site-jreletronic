import React from 'react';
import hostingerLogo from "../assets/Hostinger-logo.png";

const ParceirosSection = () => {
  return (
    <section id="parceiros" className="bg-white py-12 px-4 text-center scroll-mt-24">
      <h2 className="text-3xl font-bold text-gray-800">Nossos Parceiros</h2>
      <p className="mt-2 text-gray-600">Temos orgulho de contar com parceiros como:</p>
      <div className="mt-6 flex justify-center">
        <a
          href="https://www.hostg.xyz/aff_c?offer_id=815&aff_id=206455"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img
            src={hostingerLogo}
            alt="Hostinger"
            className="h-[60px] w-auto object-contain mx-auto"

        />

        </a>
      </div>
    </section>
  );
};

export default ParceirosSection;
