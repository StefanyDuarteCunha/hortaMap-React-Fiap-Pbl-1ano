import '../css/css.css';
import { useState } from 'react';
import React from "react";

export default function CadastroHorta() {

    const [mensagem, setMensagem] = useState("");
    const [telefone, setTelefone] = useState("");

    function aplicarMascaraCadHorta(valor) {
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

    function handleTelefoneChangeCadHorta(e) {      // o (e) é um parâmetro, utilizado em funções que reagem a algum evento, como onSubmit, onClick, onChange, onKeyDown, onFocus e onBlur
        const valorDigitado = e.target.value;
        setTelefone(aplicarMascaraCadHorta(valorDigitado));
    }

    function handleSubmitCadHorta(e) {
        e.preventDefault();
        alert("Cadastro encaminhado com sucesso! Em breve enviaremos detalhes sobre o seu cadastro.");
        e.target.reset();
        setMensagem("");
        setTelefone("");
    }

    return (
        <>
            <div>
                <form className="forms-cadastro ms-5 me-5" onSubmit={handleSubmitCadHorta}>
                    <div className="secao-cadastro" id="dados_pessoais">
                        <p className="identificacao-secao mb-0"><em>Dados pessoais:</em></p>
                        <div className="my-forms row g-4">
                            <div className="col-md-4">
                                <label htmlFor="nomecompleto" className="form-label titulo-label">Nome Completo</label>
                                <input type="text" className="form-control" id="nomecompleto" pattern="^[A-Za-zÀ-ÿ]{2,}(?:\s+[A-Za-zÀ-ÿ]{2,})+$" title="Digite o seu nome e sobrenome com pelo menos 2 letras em cada" placeHolder="Digite o seu nome e sobrenome" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="cpf" className="form-label titulo-label">CPF</label>
                                <input type="text" maxlength="11"  minlength="11" className="form-control" id="cpf" placeHolder="000.000.000-00" inputmode="numeric" required pattern="\d{11}" title="Digite o cpf com 11 caracteres" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="datanascimento" className="form-label titulo-label">Data de Nascimento</label>
                                <input type="date" className="form-control" id="datanascimento" required />
                            </div>
                        </div>
                        <div className="my-forms row g-4">
                            <div className="col-md-4">
                                <label htmlFor="email" className="form-label titulo-label">E-mail</label>
                                <input type="email" className="form-control" id="email" placeHolder="name@example.com" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" title="Digite o email no formato nome@example.com" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="telefone" className="form-label titulo-label">Número de Celular</label>
                                <input type="tel" className="form-control" id="telefone" placeHolder="(xx)xxxxx-xxxx" value={telefone} onChange={handleTelefoneChangeCadHorta} minLength="11" maxLength="15" title="Digite o telefone, somente números, no formato DDD número" required />
                            </div>
                            <div className="col-md-4">
                                <p className="titulo-label">Telefone é o mesmo para Whatsapp e ligação?</p>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="Telefone" id="inlineRadio1" value="Sim" required />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Sim</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="Telefone" id="inlineRadio2" value="Não" required />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Não</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="dados_representante_horta">
                        <div className="secao-cadastro">
                            <p className="identificacao-secao mb-0"><em>Dados da horta:</em></p>
                            <div className="my-forms row g-4">
                                <div className="col-md-3">
                                    <label htmlFor="validationDefault01" className="form-label titulo-label">Nome da horta</label>
                                    <input type="text" className="form-control" id="nomehorta" title="Digite o nome da horta" placeHolder="Digite o nome da horta" required />
                                </div>
                                <div className="col-md-3">
                                    <p className="titulo-label">Tipo da horta</p>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="tipohorta" id="inlineRadio1"
                                            value="Sim" required />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Comunitária</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="tipohorta" id="inlineRadio2"
                                            value="Não" required />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Privada</label>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="tamanhohorta" className="form-label titulo-label">Tamanho da horta
                                        (m²)</label>
                                    <input type="number" className="form-control" id="tamanhohorta" placeHolder="Digite o tamanho da horta" required />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="cep" className="form-label titulo-label">CEP</label>
                                    <input type="text" className="form-control" id="cep" placeHolder="00000-000" minlength="9" maxlength="9" required pattern="^\d{5}\-\d{3}$" />
                                    {/* <script>
                                        document.getElementById('cep').addEventListener('input', function () {
                                            let v = this.value.replace(/\D/g, ''); // remove tudo que não é número
                                            if (v.length > 5) v = v.replace(/(\d{5})(\d)/, '$1-$2');
                                            this.value = v;
                                        });
                                    </script> */}
                                </div>
                            </div>
                            <div className="my-forms row g-4">
                                <div className="col-md-3">
                                    <label htmlFor="enderecohorta" className="form-label titulo-label">Logradouro</label>
                                    <input type="text" className="form-control" id="enderecohorta" placeHolder="Rua, Avenida, Travessa, etc" required />
                                </div>
                                <div className="col-md-1">
                                    <label htmlFor="numerohorta" className="form-label titulo-label">Número</label>
                                    <input type="text" className="form-control" id="numerohorta" required />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="complementohorta" className="form-label titulo-label">Complemento</label>
                                    <input type="text" className="form-control" id="complementohorta" />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="bairrohorta" className="form-label titulo-label">Bairro</label>
                                    <input type="text" className="form-control" id="bairrohorta" required />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="cidadehorta" className="form-label titulo-label">Cidade</label>
                                    <input type="text" className="form-control" id="cidadehorta" required />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="estadohorta" className="form-label titulo-label">Estado</label>
                                    <input className="form-control" list="estados" name="estadohorta" id="estadohorta" required />
                                    <datalist id="estados">
                                        <option value="AC"></option>
                                        <option value="AL"></option>
                                        <option value="AM"></option>
                                        <option value="AP"></option>
                                        <option value="BA"></option>
                                        <option value="CE"></option>
                                        <option value="DF"></option>
                                        <option value="ES"></option>
                                        <option value="GO"></option>
                                        <option value="MA"></option>
                                        <option value="MG"></option>
                                        <option value="MS"></option>
                                        <option value="MT"></option>
                                        <option value="PA"></option>
                                        <option value="PB"></option>
                                        <option value="PE"></option>
                                        <option value="PI"></option>
                                        <option value="PR"></option>
                                        <option value="RJ"></option>
                                        <option value="RN"></option>
                                        <option value="RO"></option>
                                        <option value="RR"></option>
                                        <option value="RS"></option>
                                        <option value="SC"></option>
                                        <option value="SE"></option>
                                        <option value="SP"></option>
                                        <option value="TO"></option>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div className="secao-cadastro">
                            <p className="identificacao-secao mb-0"><em>Dados da produção:</em></p>
                            <p className="titulo-label mb-4">A seguir, selecione os cultivos que a horta possui, e informe a área de
                                cultivo (em
                                m²):</p>
                            <div className="produtoshorta">
                                <div className="row g-4">
                                    <p className="identificacao-secao mb-0"><u><i>Folhas e Verduras:</i></u></p>
                                    {/* Agrião */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="agriao" />
                                            <label htmlFor="agriao" className="form-check-label">Agrião</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Alecrim */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="alecrim" />
                                            <label htmlFor="alecrim" className="form-check-label">Alecrim</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Alface */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="alface" />
                                            <label htmlFor="alface" className="form-check-label">Alface</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Camomila */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="camomila" />
                                            <label htmlFor="camomila" className="form-check-label">Camomila</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Capim-limão */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="capim-limao" />
                                            <label htmlFor="capim-limao" className="form-check-label">Capim-limão</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Cebolinha */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="cebolinha" />
                                            <label htmlFor="cebolinha" className="form-check-label">Cebolinha</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Coentro */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="coentro" />
                                            <label htmlFor="coentro" className="form-check-label">Coentro</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Couve */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="couve" />
                                            <label htmlFor="couve" className="form-check-label">Couve</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Couve-flor */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="couve-flor" />
                                            <label htmlFor="couve-flor" className="form-check-label">Couve-flor</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Erva-doce */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="erva-doce" />
                                            <label htmlFor="erva-doce" className="form-check-label">Erva-doce</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Espinafre */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="espinafre" />
                                            <label htmlFor="espinafre" className="form-check-label">Espinafre</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Hortelã */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="hortela" />
                                            <label htmlFor="hortela" className="form-check-label">Hortelã</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Manjericão */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="manjericao" />
                                            <label htmlFor="manjericao" className="form-check-label">Manjericão</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Mostarda */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="mostarda" />
                                            <label htmlFor="mostarda" className="form-check-label">Mostarda</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Ora-pro-nóbis */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="ora-pro-nobis" />
                                            <label htmlFor="ora-pro-nobis" className="form-check-label">Ora-pro-nóbis</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Rúcula */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="rucula" />
                                            <label htmlFor="rucula" className="form-check-label">Rúcula</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Salsinha */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="salsinha" />
                                            <label htmlFor="salsinha" className="form-check-label">Salsinha</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Taioba */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="taioba" />
                                            <label htmlFor="taioba" className="form-check-label">Taioba</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    <div className="col-md-5 produto-item outros-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="outros" />
                                            <label htmlFor="outros" className="form-check-label">Outros</label>
                                            {/* Campo extra para nome do produto */}
                                            <input type="text" className="form-control nome-outro" placeHolder="Qual produto?"
                                                disabled style= {{ width: '200px' }} />
                                            {/* Campo de área */}
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled
                                                style= {{ width: '100px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-4 mt-2">
                                    <p className="identificacao-secao mb-0"><u><i>Legumes e Raízes:</i></u></p>
                                    {/* Abobrinha */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="abobrinha" />
                                            <label htmlFor="abobrinha" className="form-check-label">Abobrinha</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Alho */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="alho" />
                                            <label htmlFor="alho" className="form-check-label">Alho</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Alho-poró */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="alho-poro" />
                                            <label htmlFor="alho-poro" className="form-check-label">Alho-poró</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Berinjela */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="berinjela" />
                                            <label htmlFor="berinjela" className="form-check-label">Berinjela</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Beterraba */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="beterraba" />
                                            <label htmlFor="beterraba" className="form-check-label">Beterraba</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Cebola */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="cebola" />
                                            <label htmlFor="cebola" className="form-check-label">Cebola</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Cenoura */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="cenoura" />
                                            <label htmlFor="cenoura" className="form-check-label">Cenoura</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Nabo */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="nabo" />
                                            <label htmlFor="nabo" className="form-check-label">Nabo</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Pepino */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="pepino" />
                                            <label htmlFor="pepino" className="form-check-label">Pepino</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Pimentão */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="pimentao" />
                                            <label htmlFor="pimentao" className="form-check-label">Pimentão</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Rabanete */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="rabanete" />
                                            <label htmlFor="rabanete" className="form-check-label">Rabanete</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Tomate */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="tomate" />
                                            <label htmlFor="tomate" className="form-check-label">Tomate</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    <div className="col-md-5 produto-item outros-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="outros" />
                                            <label htmlFor="outros" className="form-check-label">Outros</label>
                                            {/* Campo extra para nome do produto */}
                                            <input type="text" className="form-control nome-outro" placeHolder="Qual produto?"
                                                disabled style= {{ width: '200px' }} />
                                            {/* Campo de área */}
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled
                                                style= {{ width: '100px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-4 mt-2">
                                    <p className="identificacao-secao mb-0"><u><i>Grãos, Sementes e Leguminosas:</i></u></p>
                                    {/* Ervilha */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="ervilha" />
                                            <label htmlFor="ervilha" className="form-check-label">Ervilha</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Feijão */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="feijao" />
                                            <label htmlFor="feijao" className="form-check-label">Feijão</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Grão-de-bico */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="grao-de-bico" />
                                            <label htmlFor="grao-de-bico" className="form-check-label">Grão-de-bico</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Milho */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="milho" />
                                            <label htmlFor="milho" className="form-check-label">Milho</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    <div className="col-md-5 produto-item outros-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="outros" />
                                            <label htmlFor="outros" className="form-check-label">Outros</label>
                                            {/* Campo extra para nome do produto */}
                                            <input type="text" className="form-control nome-outro" placeHolder="Qual produto?"
                                                disabled style= {{ width: '200px' }} />
                                            {/* Campo de área */}
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled
                                                style= {{ width: '100px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-4 mt-2">
                                    <p className="identificacao-secao mb-0"><u><i>Frutas:</i></u></p>
                                    {/* Acerola */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="acerola" />
                                            <label htmlFor="acerola" className="form-check-label">Acerola</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Amora */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="amora" />
                                            <label htmlFor="amora" className="form-check-label">Amora</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Framboesa */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="framboesa" />
                                            <label htmlFor="framboesa" className="form-check-label">Framboesa</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Laranja */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="laranja" />
                                            <label htmlFor="laranja" className="form-check-label">Laranja</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Maçã */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="maca" />
                                            <label htmlFor="maca" className="form-check-label">Maçã</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Manga */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="manga" />
                                            <label htmlFor="manga" className="form-check-label">Manga</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Maracujá */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="maracuja" />
                                            <label htmlFor="maracuja" className="form-check-label">Maracujá</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Melancia */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="melancia" />
                                            <label htmlFor="melancia" className="form-check-label">Melancia</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Melão */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="melao" />
                                            <label htmlFor="melao" className="form-check-label">Melão</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Morango */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="morango" />
                                            <label htmlFor="morango" className="form-check-label">Morango</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    {/* Uva */}
                                    <div className="col-md-3 produto-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="uva" />
                                            <label htmlFor="uva" className="form-check-label">Uva</label>
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled />
                                        </div>
                                    </div>
                                    <div className="col-md-5 produto-item outros-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="outros" />
                                            <label htmlFor="outros" className="form-check-label">Outros</label>
                                            {/* Campo extra para nome do produto */}
                                            <input type="text" className="form-control nome-outro" placeHolder="Qual produto?"
                                                disabled style= {{ width: '200px' }} />
                                            {/* Campo de área */}
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled
                                                style= {{ width: '100px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-4 mt-2">
                                    <p className="identificacao-secao mb-0"><u><i>Outros:</i></u></p>
                                    <div className="col-md-5 produto-item outros-item">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="checkbox" className="form-check-input produto-check" id="outros" />
                                            <label htmlFor="outros" className="form-check-label">Outros</label>
                                            {/* Campo extra para nome do produto */}
                                            <input type="text" className="form-control nome-outro" placeHolder="Qual produto?"
                                                disabled style= {{ width: '200px' }} />
                                            {/* Campo de área */}
                                            <input type="number" className="form-control area-input" placeHolder="m²" disabled
                                                style= {{ width: '100px' }} />
                                        </div>
                                    </div>
                                </div>
                                {/* <script>
                                    document.querySelectorAll('.produto-item').forEach(item => {
                                        const checkbox = item.querySelector('.produto-check');
                                        const areaInput = item.querySelector('.area-input');
                                        const nomeOutro = item.querySelector('.nome-outro'); // só existe no "Outros"
                                        checkbox.addEventListener('change', () => {
                                            const ativo = checkbox.checked;
                                            // habilita/desabilita campo de área
                                            areaInput.disabled = !ativo;
                                            if (!ativo) areaInput.value = "";
                                            // se for o item "Outros", habilita também o campo de nome
                                            if (nomeOutro) {
                                                nomeOutro.disabled = !ativo;
                                                if (!ativo) nomeOutro.value = "";
                                            }
                                        });
                                    });
                                </script> */}
                            </div>
                        </div>
                    </div>
                    <div className="my-forms row g-4" id="botao_envio">
                        <div className="container-botao col-md-12">
                            <button type="submit" className="botao">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}