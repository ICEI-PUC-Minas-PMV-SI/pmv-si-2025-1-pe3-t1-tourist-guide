import React from 'react';
import '../pages/Login.css';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    return (
        <div className="login-container">
            {/* Logo e Título do Aplicativo */}
            <div className="logo-section">
                <div className="logo-background">
                    {/* Ícone de Rosa dos Ventos (simplificado) */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="logo-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7z" />
                    </svg>
                </div>
                <h1 className="app-title">Tourist Guide</h1>
            </div>
            {/* Formulário de Login */}
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" placeholder="Seu email" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password" id="password" name="password" placeholder="Sua senha" className="form-input" />
                </div>
                <button type="submit" className="submit-button">
                    Entrar
                </button>
            </form>
            {/* Divisor ou Opção "Ou entre com" */}
            <div className="separator">
                <div className="separator-text">
                    <span>Ou entre com</span>
                </div>
            </div>
            {/* Botões de Login Social */}
            <div className="social-login-buttons">
                <button className="social-button">
                    <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google icon" className="social-icon" />
                    Google
                </button>
                <button className="social-button">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook icon" className="social-icon" />
                    Facebook
                </button>
            </div>
            {/* Links de Recuperação de Senha e Registro */}
            <div className="text-center">
                <a href="#" className="forgot-password-link">Esqueceu a senha?</a>
            </div>
            <div className="signup-text">
                Não tem uma conta?
                <Link to="/cadastro" className="signup-link">Criar um login</Link>
            </div>
        </div>
    );
};

export default Login;
