import React from 'react';
import './Cadastro.css';
import { Link } from 'react-router-dom';

const Cadastro: React.FC = () => {
    return (
        <div className="cadastro-container">
            {/* Logo e Título do Aplicativo */}
            <div className="logo-section">
                <div className="logo-background">
                    {/* Ícone de Rosa dos Ventos (simplificado) */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="logo-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7z"/>
                    </svg>
                </div>
                <h1 className="app-title">Tourist Guide</h1>
            </div>

            {/* Formulário de Cadastro */}
            <form className="cadastro-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Nome Completo</label>
                    <input type="text" id="name" name="name" placeholder="Seu nome completo" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" placeholder="Seu email" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password" id="password" name="password" placeholder="Sua senha" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password" className="form-label">Confirmar Senha</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirme sua senha" className="form-input" />
                </div>
                <button type="submit" className="submit-button">
                    Cadastrar
                </button>
            </form>

            {/* Link para Login */}
            <div className="text-center login-text">
                Já tem uma conta?
                <Link to="/" className="login-link">Entrar</Link>
            </div>
        </div>
    );
};

export default Cadastro;
