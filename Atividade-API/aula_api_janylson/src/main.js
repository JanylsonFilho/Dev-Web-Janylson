import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import {busca} from './busca.js';

document.querySelector('#app').innerHTML = /*html*/`
  <div>
    <h1>Pesquisa de Livros</h1>
    <input type="text">
    <button id="botao_buscar">Buscar</button>
    <div id="resultados">
    <!-- Resultados serão exibidos aqui -->
     </div>
  </div>
`;
busca();
//etupCounter(document.querySelector('#counter'))


       
