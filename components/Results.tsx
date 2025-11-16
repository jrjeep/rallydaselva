<<<<<<< HEAD
import React from 'react';

const resultsData = {
  master: [
    { pos: '1º', pilot: 'AGENOR V. PELISSA JR', navigator: 'ERICA JEZUR', points: '1007' },
    { pos: '2º', pilot: 'JAILSON PINHEIRO', navigator: 'GIOVANI FEDERIZZI', points: '1422' },
    { pos: '3º', pilot: 'CRISTIANO ROCHA', navigator: 'ROBERTO SPESSATTO', points: 'n.c.' },
  ],
  junior: [
    { pos: '1º', pilot: 'ROGERIO PETRY', navigator: 'RAFAEL PETRY', points: '5098' },
    { pos: '2º', pilot: 'PAULO BEGER', navigator: 'PATRICK BEGER', points: '7873' },
    { pos: '3°', pilot: 'PAULO R. C. CONCLI', navigator: 'CLEIDE CONCLI', points: '13624' },
  ],
  turismo: [
    { pos: '1º', pilot: 'WALDOMIRO TEODORO', navigator: 'THIAGO TEODORO', points: '83' },
    { pos: '2º', pilot: 'MATEUS DEMARCHI', navigator: 'JAIME DEMARCHI', points: '173' },
    { pos: '3º', pilot: 'BRUNO FORTUNA', navigator: 'LEONARDO SEGATTI', points: '180' },
  ],
  origens: [
    { pos: '1°', pilot: 'RAFAEL LODI', navigator: 'DANIEL BARBARA FILHO', points: '21770' },
    { pos: '2º', pilot: 'JOAO PEDRO SEGER', navigator: 'FLAVIO BONATO', points: '54800' },
    { pos: '3º', pilot: 'CAIO M. B. MEDINA', navigator: 'VICTOR MEDINA', points: '98152' },
  ],
};

const ResultTable: React.FC<{ title: string; data: { pos: string; pilot: string; navigator: string; points: string }[] }> = ({ title, data }) => (
  <div className="bg-gray-800/60 p-6 rounded-lg shadow-lg border border-gray-700 h-full">
    <h3 className="text-2xl font-bold text-green-400 mb-4 capitalize">{title}</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="p-2">Pos.</th>
            <th className="p-2">Piloto</th>
            <th className="p-2">Navegador</th>
            <th className="p-2 text-right">Pontos</th>
=======

import React from 'react';
import { DownloadIcon } from './icons';

const ResultTable: React.FC<{ title: string; data: { pos: string; piloto: string; navegador: string; pp: string }[] }> = ({ title, data }) => (
  
  <div className="mb-6">
    <h3 className="text-xl font-bold text-orange-400 mb-2">{title}</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-gray-600">
          <tr>
            <th className="py-1 pr-2">Col.</th>
            <th className="py-1 pr-2">Piloto</th>
            <th className="py-1 pr-2">Navegador</th>
            <th className="py-1 text-right">P. P.</th>
>>>>>>> 8d26f15 (maquina local)
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
<<<<<<< HEAD
            <tr key={index} className="border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50 transition-colors">
              <td className="p-2 font-bold">{row.pos}</td>
              <td className="p-2">{row.pilot}</td>
              <td className="p-2">{row.navigator}</td>
              <td className="p-2 text-right font-mono">{row.points}</td>
=======
            <tr key={index} className="border-b border-gray-700">
              <td className="py-1 pr-2">{row.pos}</td>
              <td className="py-1 pr-2">{row.piloto}</td>
              <td className="py-1 pr-2">{row.navegador}</td>
              <td className="py-1 text-right">{row.pp}</td>
>>>>>>> 8d26f15 (maquina local)
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Results: React.FC = () => {
<<<<<<< HEAD
  return (
    <section id="results" className="my-16">
      <h2 className="text-4xl font-extrabold text-center mb-10 uppercase text-green-300">Resultados 2021</h2>
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          <ResultTable title="Master" data={resultsData.master} />
          <ResultTable title="Junior" data={resultsData.junior} />
          <ResultTable title="Turismo" data={resultsData.turismo} />
          <ResultTable title="Origens" data={resultsData.origens} />
        </div>
        <div className="lg:col-span-1 bg-gray-800/60 p-6 rounded-lg shadow-lg border border-gray-700">
           <h3 className="text-2xl font-bold text-green-400 mb-4">Obrigado Apoiadores!</h3>
           <img src="https://storage.googleapis.com/aistudio-hosting/projects/rally-da-selva/agradecimentos.jpg" alt="Sponsors" className="rounded-lg mb-6 shadow-md" />
           <p className="text-gray-300 text-center mb-4">
             PARA OS RESULTADOS COMPLETOS E INDIVIDUAIS CLIQUE NO BOTÃO DOWNLOAD.
           </p>
           <a href="/ResultadosCompletos.pdf" download className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-center flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
            <span>Download dos Resultados</span>
           </a>
=======
  const masterData = [
    { pos: '1º', piloto: 'AGENOR V. PELISSA JR', navegador: 'ERICA JEZUR', pp: '1007' },
    { pos: '2º', piloto: 'JAILSON PINHEIRO', navegador: 'GIOVANI FEDERIZZI', pp: '1422' },
    { pos: '3º', piloto: 'CRISTIANO ROCHA', navegador: 'ROBERTO SPESSATTO', pp: 'n.c.' },
  ];
  const juniorData = [
    { pos: '1º', piloto: 'ROGERIO PETRY', navegador: 'RAFAEL PETRY', pp: '5098' },
    { pos: '2º', piloto: 'PAULO BEGER', navegador: 'PATRICK BEGER', pp: '7873' },
    { pos: '3º', piloto: 'PAULO R. C. CONCLI', navegador: 'CLEIDE CONCLI', pp: '13624' },
  ];
  const turismoData = [
    { pos: '1º', piloto: 'WALDOMIRO TEODORO', navegador: 'THIAGO TEODORO', pp: '83' },
    { pos: '2º', piloto: 'MATEUS DEMARCHI', navegador: 'JAIME DEMARCHI', pp: '173' },
    { pos: '3º', piloto: 'BRUNO FORTUNA', navegador: 'LEONARDO SEGATTI', pp: '180' },
  ];
  const origensData = [
    { pos: '1º', piloto: 'RAFAEL LODI', navegador: 'DANIEL BARBARA FILHO', pp: '21770' },
    { pos: '2º', piloto: 'JOAO PEDRO SEGER', navegador: 'FLAVIO BONATO', pp: '54800' },
    { pos: '3º', piloto: 'CAIO M. B. MEDINA', navegador: 'VICTOR MEDINA', pp: '98152' },
  ];

  return (
    
    <section id="results" className="py-12 bg-gray-900 bg-opacity-50 rounded-lg shadow-2xl backdrop-blur-sm mb-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center uppercase tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
          13ª Edição Rally da Selva
        </h1>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-orange-400 mb-6">
          
        </h3>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-white mb-2">Resultados</h2>
        <p className="text-center text-orange-400 font-semibold mb-8">8 de Maio de 2021</p>
        
        <p className="max-w-4xl mx-auto text-center text-gray-300 mb-10">
          A 13ª edição do Rally da Selva foi realizada dia 8 de maio de 2021, com um trajeto de aproximadamente 200 km entre os municípios de Sinop e Cláudia MT e 5:30 h de prova o resultado ficou o seguinte:
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="font-mono text-gray-300">
            <ResultTable title="Resultado 4x4 MASTER" data={masterData} />
            <ResultTable title="Resultado 4x4 JUNIOR" data={juniorData} />
            <ResultTable title="Resultado TURISMO" data={turismoData} />
            <ResultTable title="Resultado ORIGENS" data={origensData} />
          </div>
          <div className="flex flex-col items-center">
             <img src="/assets/images/patrocinadores.jpg" alt="Patrocinadores" className="rounded-lg shadow-lg w-full max-w-lg mb-8" />
             <p className="text-center text-gray-400 mb-6">
                PARA OS RESULTADOS COMPLETOS E INDIVIDUAIS CLIQUE NO BOTÃO DOWNLOAD.
             </p>
            <a href="/assets/docs/Resultados.pdf" download className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg">
              <DownloadIcon />
              Download dos Resultados
            </a>
          </div>
>>>>>>> 8d26f15 (maquina local)
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default Results;
=======
export default Results;
>>>>>>> 8d26f15 (maquina local)
