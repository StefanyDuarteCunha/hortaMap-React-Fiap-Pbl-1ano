import { useState } from 'react';
import '../css/css.css';

export default function EditorHorta({ dados, onSalvar, onCancelar }) {

    const [form, setForm] = useState(dados);

    function handleChange(e) {
        const nomeCampo = e.target.name;
        const valorCampo = e.target.value;

        setForm({  // o setForm capta o formulário
            ...form,   // este elemento copia tudo o que já está dentro do formulário
            [nomeCampo]: valorCampo  // ele muda apenas o campo especificado, salvando tudo de volta no formulário
        });
    }

    return (
        <div className="modal">
            <div className="conteudoModal">
                <h2 className="mb-4"><span className="titleModal1">Editar </span><span className="titleModal2">Dados da Horta</span></h2>
                <label className="label-popup">
                    Nome:
                    <input className="input-popup"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                    />
                </label>

                <label className="label-popup">
                    Localização:
                    <input className="input-popup"
                        name="localizacao"
                        value={form.localizacao}
                        onChange={handleChange}
                    />
                </label>

                <label className="label-popup">
                    Responsável:
                    <input className="input-popup"
                        name="responsavel"
                        value={form.responsavel}
                        onChange={handleChange}
                    />
                </label>

                <label className="label-popup">
                    Canteiros Ativos:
                    <input className="input-popup"
                        name="canteirosAtivos"
                        value={form.canteirosAtivos}
                        onChange={handleChange}
                    />
                </label>

                <label className="label-popup">
                    Área Cultivada:
                    <input className="input-popup"
                        name="areaCultivada"
                        value={form.areaCultivada}
                        onChange={handleChange}
                    />
                </label>

                <label className="label-popup">
                    Última Manutenção:
                    <input className="input-popup"
                        name="ultimaManutencao"
                        value={form.ultimaManutencao}
                        onChange={handleChange}
                    />
                </label>

                <label className="label-popup">
                    Status Atual:
                    <input className="input-popup"
                        name="statusAtual"
                        value={form.statusAtual}
                        onChange={handleChange}
                    />
                </label>
                <div className="botoes-popup">
                    <button className="btn-salvar" onClick={() => onSalvar(form)}>Salvar</button>
                    <button className="btn-cancelar" onClick={onCancelar}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}