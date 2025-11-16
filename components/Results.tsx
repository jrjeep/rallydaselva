
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
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-1 pr-2">{row.pos}</td>
              <td className="py-1 pr-2">{row.piloto}</td>
              <td className="py-1 pr-2">{row.navegador}</td>
              <td className="py-1 text-right">{row.pp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Results: React.FC = () => {
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
        </div>
      </div>
    </section>
  );
};

export default Results;
