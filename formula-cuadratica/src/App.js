import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [solucion1, setSolucion1] = useState(null);
  const [solucion2, setSolucion2] = useState(null);

  const calcularFormulaCuadratica = () => {
    const discriminante = b * b - 4 * a * c;
    if (discriminante < 0) {
      setSolucion1('No hay soluciones reales');
      setSolucion2(null);
    } else {
      const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      setSolucion1(x1);
      setSolucion2(x2);
    }
  };

  return (
    <div className="container mt-4 bg-light p-5 rounded">
      <h2 className="text-center text-primary mb-4">Calculadora de Fórmula Cuadrática</h2>
      <div className="mb-3">
        <label htmlFor="a" className="form-label">Valor de a:</label>
        <input
          type="number"
          className="form-control"
          id="a"
          value={a}
          onChange={(e) => setA(parseFloat(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="b" className="form-label">Valor de b:</label>
        <input
          type="number"
          className="form-control"
          id="b"
          value={b}
          onChange={(e) => setB(parseFloat(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="c" className="form-label">Valor de c:</label>
        <input
          type="number"
          className="form-control"
          id="c"
          value={c}
          onChange={(e) => setC(parseFloat(e.target.value))}
        />
      </div>

      <button onClick={calcularFormulaCuadratica} className="btn btn-primary btn-block">Calcular</button>
      <div className="mt-4">
        <h3 className="text-center">Resultados:</h3>
        {solucion1 !== null && (
          <p className="text-center">
            x1 = {solucion1}
          </p>
        )}
        {solucion2 !== null && (
          <p className="text-center">
            x2 = {solucion2}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

