import './Main.css';
import Header from './Header';
import React from 'react';

export default props => {
    return (
        <React.Fragment>
            <Header />
            <main className="contents">
                Conteúdo
            </main>
        </React.Fragment>
    );
}