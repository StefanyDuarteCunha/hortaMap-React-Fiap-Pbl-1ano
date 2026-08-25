import '../css/css.css';
import { useState } from "react";
import CadastroHorta from "./cadastro-horta.jsx";
import CadastroVoluntario from "./cadastro-voluntario.jsx";
import CadastroGeral from "./cadastro-geral.jsx";
import Ilustracao from "./ilustracao.jsx"

export default function BotaoCadastro() {

    const [ativo, setAtivo] = useState(<Ilustracao />); // valor inicial

    function renderComponente() {
        if (ativo === "gestor") return <CadastroHorta />;
        if (ativo === "voluntario") return <CadastroVoluntario />;
        if (ativo === "comunidade") return <CadastroGeral />;
        return <Ilustracao />;
    }

    return (
        <>
            <div className="conteudo">
                <div className="my-forms row g-4">
                    <div className="text-duo-color col-md-3 d-flex align-items-center">
                        <p><span className="color1">Cadastre-se</span> <span className="color2">aqui</span></p>
                    </div>
                    <div className="text-explicacao col-md-7 d-flex align-items-center">
                        <p>Cadastre-se e faça parte da plataforma que conecta dados, pessoas e alimentos para um mundo mais sustentável.<br></br>
                            Para começar, selecione o tipo de cadastro que você deseja.
                        </p>
                    </div>
                    <div className="tipo-cadastro">
                        <button className={`cadastro-button ${ativo === "gestor" ? "active" : ""}`} onClick={() => setAtivo("gestor")}>Gestor</button>
                        <button className={`cadastro-button ${ativo === "voluntario" ? "active" : ""}`} onClick={() => setAtivo("voluntario")}>Voluntário</button>
                        <button className={`cadastro-button ${ativo === "comunidade" ? "active" : ""}`}  onClick={() => setAtivo("comunidade")}>Comunidade</button>
                    </div>
                </div>
                {/* Espaço dedicado ao componente que será chamado */}
                <div>
                    {renderComponente()}
                </div>
            </div>
        </>
    )
}