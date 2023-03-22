import { useState } from 'react'
import './App.css'
import TooltipText from './tooltip/TooltipText'

function App() {

  return (
    <div className="App">
      <p><TooltipText tooltip={"Texto generado"}> React</TooltipText> es una biblioteca de JavaScript. </p>
      <p>React es una biblioteca <TooltipText tooltip={"Soy un tooltip generado"}>JavaScript declarativa</TooltipText>, eficiente y flexible para construir interfaces de usuario</p>
      <p>que te permite componer interfaces de usuario complejas a partir de fragmentos de código pequeños y aislados llamados “componentes”.</p> 
    </div>
  )
}

export default App
