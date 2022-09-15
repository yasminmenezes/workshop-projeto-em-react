import { useEffect, useState } from "react";
import ListaMonstros from "./componentes/ListaMonstros";
import ButtonLimpar from "./componentes/ButtonLimpar";
// import dados from "./dados/dadosFake";

function App() {

  // const [dadosFake, setDadosFake] = useState(dados);
  const [dados, setDados] = useState([]);
  // const apagarDados = () => {setDadosFake([])};
  const apagarDados = () => {setDados([])};

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((dadosAPI) => setDados(dadosAPI.slice(0,5)))
  }, [])

  return (
    <main>
      <section className="container">
          <h1>{dados.length} Monstros</h1>
          {/* sempre que for usar JS no HTML, tem que usar chaves! */}

          <ListaMonstros dados={dados} />
          
          <ButtonLimpar apagarDados={apagarDados} />
      </section>
    </main>
  );
}

export default App;
