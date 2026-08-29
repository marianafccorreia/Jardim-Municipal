
{/* 
  main.jsx é o ponto de entrada
  - serve para ligar o react ao html da página. 
  - é o ficheiro que diz "pega em tudo o que o react vai gerar
  e coloca dentro desta página web, neste sítio exato.
  
  Na prática:
  - agarra no componente App e planta-o dentro de uma 
  div com o id root, que está no index.html.
  - aqui também se importa o index.css, que é o ficheiro de estilos global da aplicação.

  Pensar no main.jsx como a ficha que se liga à tomada
*/}



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
