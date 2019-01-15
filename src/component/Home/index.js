import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Accueil</title>
                <meta name="description" content="page d'accueil d'allopneu" />
            </Helmet>
            <h1>Bienvenue sur l'application d'AlloPneu</h1>
        </>
    )
}

export default Home;