// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './css/css.css'

import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Carrossel from './components/carrossel.jsx'
import Login from './components/login.jsx'
import BotaoCadastro from './components/botao-cadastro.jsx'
import FaleConosco from './components/fale-conosco.jsx'
import Dashboard from './components/dashboard.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carrossel />} />
        <Route path="/conheca" element={<Carrossel />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/login" element={<Login />} />
        <Route path="/experimente" element={<BotaoCadastro />} />
        <Route path="/minhaarea" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;