import '../css/css.css';
import logoHorizontal from '../img/logo_HortaMap_horizontal.png'
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault(); // impede o form de recarregar a página
        navigate("/minhaarea");
    }

    return (
        <>
            <div className="container conteudo login-page">
                <div className="login row">
                    <div className="frase-impacto col-md-6">
                        <h1>Mapear para <span className="color1">Conectar</span>, <br></br>Conectar para <span className="color2">Alimentar</span>!</h1>
                        <button type="button" className="menu"><Link to="/experimente">Novo usuário? <br></br> Clique aqui para se cadastrar</Link></button>
                    </div>
                    <form className="forms-login col-md-6" onSubmit={handleLogin}>
                        <div className="row g-3">
                            <label htmlFor="email" className="form-label titulo-label">E-mail</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" title="Digite o email no formato nome@example.com" required/>
                        </div>
                        <div className="row g-3 senha">
                            <label htmlFor="inputPassword" className="col-form-label titulo-label">Senha</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="**********" required/>
                        </div>
                        <div className="my-forms row g-4">
                            <div className="container-botao">
                                <button type="submit" className="botao">Acessar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>  
        </>
    )
}
