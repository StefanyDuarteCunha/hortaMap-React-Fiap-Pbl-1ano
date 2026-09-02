import '../css/css.css';
import { useState } from 'react';
import React from "react";

export default function FaleConosco() {
    const [mensagem, setMensagem] = useState("");
    const [telefone, setTelefone] = useState("");

    function aplicarMascaraFale(valor) {
        // só números
        const numeros = valor.replace(/\D/g, "").slice(0, 11);

        // menos de 3 dígitos → não mascara ainda
        if (numeros.length <= 2) return numeros;

        // entre 3 e 7 dígitos → mascara parcialmente
        if (numeros.length <= 7) {
            return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
        }

        // 8 a 11 dígitos → máscara completa
        return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
    }

    function handleTelefoneChangeFale(e) {      // o (e) é um parâmetro, utilizado em funções que reagem a algum evento, como onSubmit, onClick, onChange, onKeyDown, onFocus e onBlur
        const valorDigitado = e.target.value;
        setTelefone(aplicarMascaraFale(valorDigitado));
    }

    function handleSubmitFale(e) {
        e.preventDefault();
        alert("Mensagem encaminhada com sucesso! Entraremos em contato em até 07 dias úteis.");
        e.target.reset();
        setMensagem("");
        setTelefone("");
    }

    return (
        <>
            <div>
                <div className="my-forms row g-4">
                    <div className="text-duo-color col-md-2 d-flex align-items-center">
                        <p><span className="color1">Fale</span> <span className="color2">Conosco</span></p>
                    </div>
                    <div className="text-explicacao col-md-8 d-flex align-items-center">
                        <p>Está com alguma dúvida? Tem alguma sugestão, dicas, elogios ou reclamação? Temos este canal oficial
                            para contato.<br></br> O nosso tempo de retorno é de até 7 dias úteis</p>
                    </div>
                </div>
                <form id="formulario_JS" onSubmit={handleSubmitFale}>
                    <div className="my-forms row g-4">
                        <div className="col-md-4">
                            <label htmlFor="nomecompleto" className="form-label titulo-label">Nome Completo</label>
                            <input type="text" className="form-control" id="nomecompleto" pattern="^[A-Za-zÀ-ÿ]{2,}(?:\s+[A-Za-zÀ-ÿ]{2,})+$" title="Digite o nome e sobrenome com pelo menos 2 letras em cada" placeHolder="Digite o seu nome e sobrenome" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="email" className="form-label titulo-label">E-mail</label>
                            <input type="email" className="form-control" id="email" placeHolder="name@example.com" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" title="Digite o email no formato nome@example.com" required />
                        </div>
                    </div>
                    <div className="my-forms row g-4">
                        <div className="col-md-4">
                            <label htmlFor="telefone" className="form-label titulo-label">Número de Celular</label>
                            <input type="tel" className="form-control" id="telefone" placeHolder="(xx)xxxxx-xxxx" value={telefone} onChange={handleTelefoneChangeFale} minLength="11" maxLength="15" title="Digite o telefone, somente números, no formato DDD número" required />
                        </div>
                        <div className="col-md-4">
                            <p className="titulo-label">Telefone é o mesmo para Whatsapp e ligação?</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Telefone" id="inlineRadio1" value="Sim"
                                    required />
                                <label className="form-check-label" htmlFor="inlineRadio1">Sim</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Telefone" id="inlineRadio2" value="Não"
                                    required />
                                <label className="form-check-label" htmlFor="inlineRadio2">Não</label>
                            </div>
                        </div>
                    </div>
                    <div className="my-forms row g-4">
                        <div className="col-md-8">
                            <p className="titulo-label">Você já possui cadastro?</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Cadastro" id="inlineRadio1"
                                    value="Responsável" required />
                                <label className="form-check-label" htmlFor="inlineRadio1">Responsável por uma horta</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Cadastro" id="inlineRadio2"
                                    value="Voluntário" required />
                                <label className="form-check-label" htmlFor="inlineRadio2">Voluntário</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Cadastro" id="inlineRadio3"
                                    value="Comunidade" required />
                                <label className="form-check-label" htmlFor="inlineRadio3">Comunidade</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Cadastro" id="inlineRadio4" value="Não"
                                    required />
                                <label className="form-check-label" htmlFor="inlineRadio4">Não possuo cadastro</label>
                            </div>
                        </div>
                    </div>
                    <div className="my-forms row g-4">
                        <div className="col-md-8">
                            <p className="titulo-label">Qual o assunto da mensagem?</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio1" value="Reclamação"
                                    required />
                                <label className="form-check-label" htmlFor="inlineRadio1">Reclamação</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio2" value="Dúvida"
                                    required />
                                <label className="form-check-label" htmlFor="inlineRadio2">Dúvida</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio3" value="Sugestão"
                                    required />
                                <label className="form-check-label" htmlFor="inlineRadio3">Sugestão</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio4" value="Dica"
                                    required />
                                <label className="form-check-label" htmlFor="inlineRadio4">Dica</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio4" value="Elogio"
                                    required />
                                <label className="form-check-label" htmlFor="inlineRadio4">Elogio</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio4" value="Denúncia"
                                    required />
                                <label className="form-check-label" htmlFor="inlineRadio4">Denúncia</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Assunto" id="inlineRadio4" value="Outros"
                                    required />
                                <label className="form-check-label" htmlFor="inlineRadio4">Outros</label>
                            </div>
                        </div>
                    </div>
                    <div className="my-forms row g-4">
                        <div className="col-md-8">
                            <label htmlFor="textMensagem" className="form-label titulo-label">Mensagem</label>
                            <textarea
                                className="form-control"
                                id="textMensagem"
                                rows="3"
                                maxLength="500"
                                value={mensagem}    // Este campo apresenta a mensagem armazenada na constante
                                onChange={(e) => setMensagem(e.target.value)}     // Sempre que for digitado algo, o novo texto é considerado e salvo na constante, por meio do setMensagem
                                required
                            ></textarea>
                            <p className="cont_caracteres mt-2 mb-0"><span>{mensagem.length}</span>/500 caracteres</p>
                        </div>
                    </div>
                    <div className="my-forms row g-4">
                        <div className="container-botao col-md-8">
                            <button type="submit" id="submit_botao" className="botao">Enviar</button>
                        </div>
                    </div>
                </form>
                <div className="row g-2">
                    <div className="caixa-contatos col-md-4">
                        <p className="titulo-label">Prefere mandar um e-mail ou conversa com um atendente?</p>
                        <a href="https://wa.me/5531985085780" target="_blank"><i className="bi bi-whatsapp fale-atendente"></i>
                            <p className="texto-icon intervalo-entre-campos">+55 31 98508-5780</p></a>
                        <a href="tel:+5531985085780" target="_blank"><i className="bi bi-telephone fale-atendente"></i>
                            <p className="texto-icon">+55 31 98508-5780</p><br></br></a>
                        <a href="mailto:hortamapsolucao@gmail.com" target="_blank"><i className="bi bi-envelope fale-atendente"></i>
                            <p className="texto-icon">hortamapsolucao@gmail.com</p></a>
                    </div>
                    <div className="caixa-contatos col-md-4">
                        <p className="titulo-label">Você também pode acessar nossas redes sociais:</p>
                        <a href="https://www.instagram.com/hortamap/" target="_blank"><i
                            className="bi bi-instagram redes-fale-conosco"></i></a>
                        <a href="https://www.linkedin.com" target="_blank"><i className="bi bi-linkedin redes-fale-conosco"></i></a>
                        <a href="https://www.youtube.com/@HortaMapSolucao" target="_blank"><i
                            className="bi bi-youtube redes-fale-conosco"></i></a>
                        <a href="https://www.tiktok.com" target="_blank"><i className="bi bi-tiktok redes-fale-conosco"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}
