import './estilos/App.css';
import logotipo from './imagenes/logo-sf.png' 

function App() {
  return (
    <div className="App">
      <header>
        <img src={logotipo} alt="imagen" className="imagen"/>
      </header>
      <main>
        <form className="formulario">
            <div>
                <h1 className="esl">Sell In A Flash</h1>
            </div>
            <div className="posicion">
                <div className="posicion-input arriba">
                    <i className="fas fa-user posicion-ico"></i>
                    <input type="text" placeholder="ID usuario"/>
                </div>
                <div className="posicion-input abajo">
                    <i className="fas fa-key posicion-ico"></i>
                    <input type="password" placeholder="Contraseña"/>
                </div>
                <div>
                    <button className="boton boton-entrar">Entrar</button>
                </div>
                <div>
                    
                    <button className="boton boton-correo"><i className="fas fa-envelope"></i> Entrar Por Correo Electronico</button>
                </div>
                <div>
                    <a href="">¿ Recuperar Contraseña ?</a>
                </div>
            </div>
        </form>
    </main>
      <footer></footer>
    </div>
  );
}

export default App;
