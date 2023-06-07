import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {


  // ---------> Mostrar inputs <-------- //
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  
  // ---------> Calcular el resultado <-------- //
  /*
    La expresión regular /^\d+(\s*[-+* /]\s*\d+)*$/ se utiliza para verificar si la expresión es válida. Veamos en detalle la expresión regular:
    /: delimitador de inicio de la expresión regular.
    ^: coincide con el inicio de la cadena.
    \d+: coincide con uno o más dígitos (el primer número de la expresión).
    (\s*[-+* /]\s*\d+)*: es un grupo de coincidencia que se repite cero o más veces, lo que permite múltiples operaciones en la expresión. Aquí está la desglose:
    \s*: coincide con cero o más espacios en blanco.
    [-+* /]: coincide con cualquier símbolo de operador válido (-, +, *, /).
    \s*: coincide con cero o más espacios en blanco.
    \d+: coincide con uno o más dígitos (el siguiente número en la expresión).
    $: coincide con el final de la cadena.
    En resumen, esta expresión regular verifica que la expresión solo contenga números seguidos opcionalmente por operadores y números adicionales, y que no haya múltiples operadores consecutivos.
  */

  const calcularResultado = () => {
    if (input && input.match(/^\d+(\s*[-+*/]\s*\d+)*$/) ) {
      setInput(evaluate(input.toString()));
    } else {
      alert('Por favor ingrese valores y operaciones válidas');
    }
  };

  return (
    <div className='App'>
      <Logo />

      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}> 
            Clear 
          </BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
