import React from 'react';
import './Recuperacao-senha.css';
import { Link } from 'react-router-dom';

const RecuperacaoSenha: React.FC = () => {
    return (
        <div className="recuperacao-container">
            {/* Logo e Título do Aplicativo */}
            <div className="logo-section">
                <div className="logo-background">
                    <svg xmlns="http://www.w3.org/2000/svg" className="logo-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7z" />
                    </svg>
                </div>
                <h1 className="app-title">Tourist Guide</h1>
            </div>

            {/* Formulário de Recuperação de Senha */}
            <form className="recuperacao-form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" name="email" placeholder="Seu email" className="form-input" />
                </div>
                <button type="submit" className="submit-button">
                    Enviar Link de Recuperação
                </button>
            </form>

            {/* Link para Login */}
            <div className="text-center return-link-text">
                Lembrou da senha?
                <Link to="/" className="return-link">Voltar para o Login</Link>
            </div>
        </div>
    );
};

export default RecuperacaoSenha;
