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
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50 transition-colors">
              <td className="p-2 font-bold">{row.pos}</td>
              <td className="p-2">{row.pilot}</td>
              <td className="p-2">{row.navigator}</td>
              <td className="p-2 text-right font-mono">{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Results: React.FC = () => {
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
        </div>
      </div>
    </section>
  );
};

export default Results;