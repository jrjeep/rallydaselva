
import React from 'react';

const Info: React.FC = () => {
  return (
    <section id="info" className="py-12 mb-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8">13º Rally da Selva</h2>
        <p className="text-center text-gray-300 font-semibold mb-2"><span className="font-bold text-orange-400">Prova:</span> 8 de Maio de 2021.</p>
        <p className="text-center text-gray-300 font-semibold mb-10"><span className="font-bold text-orange-400">Briefing:</span> on-line 04/05/2021.</p>

        <div className="max-w-4xl mx-auto space-y-8 text-gray-300 bg-gray-900 bg-opacity-50 p-8 rounded-lg shadow-2xl backdrop-blur-sm">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Categorias:</h3>
            <div className="space-y-4">
              <p><strong className="text-white">4x4 Master:</strong> Categoria de alto grau de competitividade, própria para pilotos e navegadores com experiência em provas off-road de regularidade, veículos devidamente preparados, de qualquer marca, modelo e ano de fabricação, com sistema de tração 4x4. Proibido a inclusão de acompanhante (zéquinha) no carro durante a prova.</p>
              <p><strong className="text-white">4x4 Junior:</strong> O trajeto será o mesmo da categoria 4x4 Master, com as médias de velocidades inferiores ou iguais para cada trecho da prova, que é equivalente com o nível técnico das equipes participantes. Própria para pilotos e navegadores que saibam navegar em provas off-road de regularidade, com veículos devidamente preparados, de qualquer marca, modelo e ano de fabricação com sistema de tração 4x4.</p>
              <p><strong className="text-white">ORIGENS:</strong> Categoria exclusiva para veículos off road antigos com tração nas 4 rodas com fabricação anterior ao ano de 1990. Seu percurso será em partes o mesmo da 4x4 Master, com médias de velocidades inferiores. Proibido a utilização de equipamentos integrados de navegação.</p>
              <p><strong className="text-white">TURISMO:</strong> A categoria Turismo terá trilha e planilha exclusivas, o trajeto será para carros 4x2, as médias de velocidade serão mais baixas. Voltada para competidores com pouca ou sem experiência em provas off-road de regularidade. Veículos de qualquer marca, modelo e ano de fabricação. Proibido a utilização de equipamentos integrados de navegação.</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">COMO FAZER A INSCRIÇÃO</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Acesse o link inscrição no site <a href="http://www.rallydaselva.com.br" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">www.rallydaselva.com.br</a></li>
              <li>Clique no botao "fazer inscrição" (abaixo);</li>
              <li>Faça o cadastro e finalize a inscrição;</li>
            </ol>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">PARA CONFIRMAR A INSCRIÇÃO</h3>
            <p className="mb-2">Realize o depósito ou transferencia no valor da sua categoria com os centavos descritos, pois os centavos são a identificação da sua inscrição.</p>
            <p className="mb-2">Se possivel envie o comprovante pelo whatsapp (66)9.9257-9702, junto com o comprovante envie uma foto da equipe com o veículo inscrito.</p>
            <p className="mb-4">Assim que sua incrição for confirmada, sua equipe será adicionada ao grupo oficial do Rally da Selva no Whatsapp.</p>
            <p className="font-bold text-white bg-red-600 inline-block px-3 py-1 rounded">Vagas limitadas: 100 carros.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            <a href="/assets/docs/Regulamento.pdf" download className="w-full sm:w-auto text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg">
              REGULAMENTOS
            </a>
            <a href="https://www.cronorally.com.br/eventos/13o-rally-da-selva-2021/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg">
              VEJA OS INSCRITOS
            </a>
        </div>
      </div>
    </section>
  );
};

export default Info;
