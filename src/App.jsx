import './Miapp.css';
import { useState  } from 'react';

const App = () => {

  const [contador, setContador] = useState(0)

  return( 
    <>
      <h1>Hola papu</h1>
      <p>Daniel Arturo Romano Fuentes</p>
      <h3>contador: {contador}</h3>
      <button id="btn-incrementa" className="btns" onClick={() => setContador(contador+1) }>incrementa</button>
      <button id="btn-decrementa" className="btns" onClick={() => setContador(contador-1) }>Decrememta</button>
      <button id="btn-reinicia" className="btns" onClick={() => setContador(contador-contador) }>Reinicia</button>
    </>
  )
}
export default App;