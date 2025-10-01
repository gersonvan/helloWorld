// Importa as bibliotecas do React que usaremos
import React, { useState, useEffect } from 'react';

// O componente principal da nossa aplicação
function App() {
  // 'useState' é um "Hook" do React para guardar estados (dados que mudam).
  // 'mensagemApi' guardará a mensagem do back-end. Inicia como uma string vazia.
  const [mensagemApi, setMensagemApi] = useState('');

  // 'useEffect' é um "Hook" que executa efeitos colaterais.
  // Usaremos para buscar os dados da API assim que o componente for carregado na tela.
  useEffect(() => {
    // A função fetch() do navegador busca dados de uma URL.
    // Apontamos para a rota que criamos no nosso back-end.
    fetch('http://localhost:3001/api')
      .then(response => response.text()) // Converte a resposta para texto
      .then(data => setMensagemApi(data)) // Atualiza o estado 'mensagemApi' com os dados recebidos
      .catch(error => console.error('Erro ao buscar dados da API:', error)); // Captura erros
  }, []); // O array vazio [] como segundo argumento garante que isso rode apenas uma vez.

  // O JSX que será renderizado na tela.
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Teste de Integração com Azure</h1>
      <p>A mensagem recebida do nosso back-end é:</p>
      <p style={{ fontSize: '24px', color: '#007BFF', fontWeight: 'bold' }}>
        {/* Exibe a mensagem guardada no estado ou "Carregando..." se ainda não chegou */}
        {mensagemApi || 'Carregando...'}
      </p>
    </div>
  );
}

export default App;