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

  const calcularResultado = () => {
    if (input && input.match(/\d+$/) ) {
      setInput(evaluate(input.toString()));
    } else {
      alert('Por favor ingresa al menos dos valores para realizar los cálculos');
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
