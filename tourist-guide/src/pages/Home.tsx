import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="container">
            {/* Cabeçalho */}
            <div className="header">
                <div className="header-top-row">
                    <div className="logo-and-title">
                        <div className="logo-background">
                            <svg xmlns="http://www.w3.org/2000/svg" className="logo-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7z" />
                            </svg>
                        </div>
                        <h1 className="app-title">Tourist Guide</h1>
                    </div>
                    <button className="profile-icon-button" aria-label="Acessar Perfil">
                        <svg xmlns="http://www.w3.org/2000/svg" className="profile-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.29-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.93-3.5 3.22-6 3.22z" />
                        </svg>
                    </button>
                </div>
                {/* Barra de Busca */}
                <div className="search-bar">
                    <input type="text" placeholder="Buscar pontos turísticos..." className="search-input" />
                    <button className="search-button">Buscar</button>
                </div>
            </div>
            {/* Seção de Filtros */}
            <div className="filters-section">
                <h2 className="filters-title">Explore por Categoria</h2>
                <div className="filter-buttons">
                    <button className="filter-button active">Todos</button>
                    <button className="filter-button">Praias</button>
                    <button className="filter-button">Museus</button>
                    <button className="filter-button">Festas</button>
                    <button className="filter-button">Restaurantes</button>
                    <button className="filter-button">Parques</button>
                    <button className="filter-button">Monumentos</button>
                </div>
            </div>
            {/* Seção de Pontos Turísticos */}
            <div className="tourist-spots-grid">
                {/* Card 1 */}
                <div className="spot-card">
                    <div className="spot-image-container">
                        <img src="https://placehold.co/400x200/0F172A/FFF?text=Praia+do+Sol" alt="Imagem da Praia do Sol" className="spot-image" />
                    </div>
                    <div className="spot-content">
                        <h3 className="spot-title">Praia do Sol</h3>
                        <div className="spot-rating">
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span className="star-icon empty">☆</span>
                            <span> (4.5)</span>
                        </div>
                        <p className="spot-description">Uma praia deslumbrante com águas cristalinas e areia dourada, perfeita para relaxar e praticar esportes aquáticos.</p>
                        <a href="#" className="spot-link">Ver Detalhes</a>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="spot-card">
                    <div className="spot-image-container">
                        <img src="https://placehold.co/400x200/0F172A/FFF?text=Museu+Histórico" alt="Imagem do Museu Histórico" className="spot-image" />
                    </div>
                    <div className="spot-content">
                        <h3 className="spot-title">Museu Histórico Nacional</h3>
                        <div className="spot-rating">
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span> (5.0)</span>
                        </div>
                        <p className="spot-description">Descubra a rica história do país através de exposições fascinantes e artefatos antigos.</p>
                        <a href="#" className="spot-link">Ver Detalhes</a>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="spot-card">
                    <div className="spot-image-container">
                        <img src="https://placehold.co/400x200/0F172A/FFF?text=Parque+Central" alt="Imagem do Parque Central" className="spot-image" />
                    </div>
                    <div className="spot-content">
                        <h3 className="spot-title">Parque Central</h3>
                        <div className="spot-rating">
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span className="star-icon empty">☆</span>
                            <span> (4.0)</span>
                        </div>
                        <p className="spot-description">Um oásis verde no coração da cidade, ideal para piqueniques, caminhadas e atividades ao ar livre.</p>
                        <a href="#" className="spot-link">Ver Detalhes</a>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="spot-card">
                    <div className="spot-image-container">
                        <img src="https://placehold.co/400x200/0F172A/FFF?text=Restaurante+Sabor" alt="Imagem do Restaurante Sabor Local" className="spot-image" />
                    </div>
                    <div className="spot-content">
                        <h3 className="spot-title">Restaurante Sabor Local</h3>
                        <div className="spot-rating">
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span className="star-icon filled">★</span>
                            <span> (5.0)</span>
                        </div>
                        <p className="spot-description">Experimente a culinária autêntica da região em um ambiente acolhedor e charmoso.</p>
                        <a href="#" className="spot-link">Ver Detalhes</a>
                    </div>
                </div>
            </div>
            {/* Barra de Navegação Inferior */}
            <nav className="bottom-navigation">
                <a href="#" className="nav-item active">
                    <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                    Home
                </a>
                <a href="#" className="nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.5 14h-.79l-.28-.27C14.01 12.98 14.5 12 14.5 11c0-2.49-2.01-4.5-4.5-4.5S5.5 8.51 5.5 11s2.01 4.5 4.5 4.5c1.1 0 2.1-.41 2.84-1.05l.27.27v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                    Buscar
                </a>
                <a href="#" className="nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
                    </svg>
                    Salvos
                </a>
                <a href="#" className="nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.29-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.93-3.5 3.22-6 3.22z" />
                    </svg>
                    Perfil
                </a>
            </nav>
        </div>
    );
};

export default Home;
