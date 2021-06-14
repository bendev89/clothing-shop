import React from 'react';
import './homepage.styles.scss';

export const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">VESTES</h1>
                        <span className="subtitle">VOIR LES ARTICLES</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">CHAUSSURES</h1>
                        <span className="subtitle">VOIR LES ARTICLES</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">ACCESSOIRES</h1>
                        <span className="subtitle">VOIR LES ARTICLES</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">FEMME</h1>
                        <span className="subtitle">VOIR LES ARTICLES</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HOMME</h1>
                        <span className="subtitle">VOIR LES ARTICLES</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
};
export default HomePage;